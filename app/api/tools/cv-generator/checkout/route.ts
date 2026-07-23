import { NextRequest, NextResponse } from "next/server";
import { createCvCheckoutSession } from "@/lib/cv-payment";

export const runtime = "nodejs";

type Locale = "es" | "en" | "fr";

function normalizeLocale(input: string): Locale {
  if (input === "en" || input === "fr") return input;
  return "es";
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json().catch(() => ({}))) as {
      locale?: string;
    };
    const locale = normalizeLocale(body.locale ?? "es");
    const origin = request.nextUrl.origin;
    const checkoutUrl = await createCvCheckoutSession({ origin, locale });
    return NextResponse.json({ url: checkoutUrl }, { status: 200 });
  } catch (error) {
    console.error("CV checkout error:", error);
    return NextResponse.json(
      { error: "No se pudo iniciar el pago. Intenta nuevamente." },
      { status: 500 }
    );
  }
}
