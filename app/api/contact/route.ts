import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { rateLimit } from "@/lib/rate-limit";
import { escapeHtml, validateContactForm } from "@/lib/validation";

let _resend: Resend | null = null;
function getResend() {
  if (!_resend) _resend = new Resend(process.env.RESEND_API_KEY);
  return _resend;
}

function log(
  level: "info" | "warn" | "error",
  message: string,
  meta?: Record<string, unknown>
) {
  const entry = {
    timestamp: new Date().toISOString(),
    level,
    message,
    ...meta,
  };
  if (level === "error") console.error(JSON.stringify(entry));
  else console.log(JSON.stringify(entry));
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  try {
    if (!rateLimit(ip).ok) {
      log("warn", "Rate limit exceeded", { ip });
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();

    if (body.website) {
      log("info", "Honeypot triggered", { ip });
      return NextResponse.json({ success: true, id: "ok" });
    }

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    const validation = validateContactForm({ name, email, message });
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: validation.status }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    const { data, error: resendError } = await getResend().emails.send({
      from: "Portfolio <hola@lucasriera.com>",
      to: "lucasezequielriera@gmail.com",
      replyTo: email,
      subject: `Nuevo mensaje de ${name} — lucasriera.com`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#10b981">Nuevo mensaje desde tu portfolio</h2>
          <p><strong>Nombre:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <hr style="border:none;border-top:1px solid #333;margin:16px 0"/>
          <p style="white-space:pre-wrap">${safeMessage}</p>
        </div>
      `,
    });

    if (resendError) {
      log("error", "Resend error", { error: resendError.message, ip });
      return NextResponse.json({ error: resendError.message }, { status: 422 });
    }

    log("info", "Contact message sent", { id: data?.id, ip });
    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    log("error", "Contact API error", {
      error: err instanceof Error ? err.message : "Unknown error",
      ip,
    });
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
