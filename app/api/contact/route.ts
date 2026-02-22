import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const { data, error: resendError } = await resend.emails.send({
      from: "Lucas Riera Portfolio <contacto@lucasriera.com>",
      to: "lucasezequielriera@gmail.com",
      replyTo: email,
      subject: `Nuevo mensaje de ${name} — lucasriera.com`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#10b981">Nuevo mensaje desde tu portfolio</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border:none;border-top:1px solid #333;margin:16px 0"/>
          <p style="white-space:pre-wrap">${message}</p>
        </div>
      `,
    });

    if (resendError) {
      console.error("Resend error:", resendError);
      return NextResponse.json({ error: resendError.message }, { status: 422 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
