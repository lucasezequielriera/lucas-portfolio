import Stripe from "stripe";

const CV_PAYMENT_AMOUNT_USD_CENTS = 100;
const consumedSessions = new Set<string>();

function getStripeClient() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    throw new Error(
      "Falta STRIPE_SECRET_KEY. Configuralo en .env.local para habilitar pagos."
    );
  }
  return new Stripe(secretKey);
}

export async function createCvCheckoutSession(params: {
  origin: string;
  locale: "es" | "en" | "fr";
}) {
  const stripe = getStripeClient();
  const successUrl = `${params.origin}/${params.locale}/herramientas?cv_payment=success&session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${params.origin}/${params.locale}/herramientas?cv_payment=cancel`;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    submit_type: "pay",
    payment_method_types: ["card"],
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "usd",
          unit_amount: CV_PAYMENT_AMOUNT_USD_CENTS,
          product_data: {
            name: "CV Generator",
            description: "One CV generation + AI optimization (ES/EN)",
          },
        },
      },
    ],
    metadata: {
      purpose: "cv-generator",
    },
    success_url: successUrl,
    cancel_url: cancelUrl,
  });

  if (!session.url) {
    throw new Error("No se pudo iniciar Stripe Checkout.");
  }
  return session.url;
}

export async function verifyAndConsumeCvPayment(sessionId: string) {
  if (consumedSessions.has(sessionId)) {
    throw new Error("El pago ya fue utilizado. Debes completar un nuevo pago.");
  }

  const stripe = getStripeClient();
  const session = await stripe.checkout.sessions.retrieve(sessionId);

  const isPaid = session.payment_status === "paid";
  const isAmountValid = session.amount_total === CV_PAYMENT_AMOUNT_USD_CENTS;
  const isCurrencyValid = session.currency === "usd";
  const isPurposeValid = session.metadata?.purpose === "cv-generator";

  if (!isPaid || !isAmountValid || !isCurrencyValid || !isPurposeValid) {
    throw new Error("El pago no se pudo validar. Intenta nuevamente.");
  }

  consumedSessions.add(sessionId);
}
