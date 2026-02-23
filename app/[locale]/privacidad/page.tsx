import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, type Locale } from "@/lib/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);
  return {
    title: `${t.legal.privacyTitle} — Lucas Riera`,
    robots: { index: true, follow: true },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);
  const isEs = locale === "es";

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-3xl px-6 pb-24 pt-16 md:pt-24">
        <Link
          href={`/${locale}`}
          className="text-sm text-neutral-500 transition hover:text-neutral-300"
        >
          {t.legal.backHome}
        </Link>

        <h1 className="mt-8 text-3xl font-semibold md:text-4xl">
          {t.legal.privacyTitle}
        </h1>
        <p className="mt-2 text-sm text-neutral-500">
          {t.legal.lastUpdated}: febrero 2026
        </p>

        <div className="prose-invert mt-10 space-y-8 text-sm leading-relaxed text-neutral-300">
          {isEs ? (
            <>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">1. Responsable del tratamiento</h2>
                <p>Lucas Ezequiel Riera (en adelante, &ldquo;el Responsable&rdquo;).</p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-400">
                  <li>Email de contacto: lucasezequielriera@gmail.com</li>
                  <li>Sitio web: www.lucasriera.com</li>
                </ul>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">2. Datos que recopilamos</h2>
                <p>A través del formulario de contacto recopilamos:</p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-400">
                  <li>Nombre</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Contenido del mensaje</li>
                </ul>
                <p>Estos datos son proporcionados voluntariamente por el usuario.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">3. Finalidad del tratamiento</h2>
                <p>Los datos recogidos se utilizan exclusivamente para:</p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-400">
                  <li>Responder a las consultas enviadas a través del formulario de contacto.</li>
                  <li>Gestionar posibles relaciones profesionales derivadas del contacto.</li>
                </ul>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">4. Base legal</h2>
                <p>El tratamiento de los datos se basa en el consentimiento del usuario al enviar voluntariamente el formulario de contacto (Art. 6.1.a RGPD) y en el interés legítimo del Responsable para gestionar las consultas profesionales recibidas (Art. 6.1.f RGPD).</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">5. Destinatarios</h2>
                <p>Los datos del formulario son enviados por correo electrónico a través de Resend (resend.com), que actúa como encargado del tratamiento. No se cederán datos a terceros salvo obligación legal.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">6. Conservación</h2>
                <p>Los datos se conservan durante el tiempo necesario para atender la consulta y, como máximo, durante 1 año desde la recepción del mensaje, salvo que exista obligación legal de conservarlos por un plazo superior.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">7. Derechos del usuario</h2>
                <p>El usuario puede ejercer los siguientes derechos enviando un email a lucasezequielriera@gmail.com:</p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-400">
                  <li>Derecho de acceso a sus datos personales.</li>
                  <li>Derecho de rectificación de datos inexactos.</li>
                  <li>Derecho de supresión (&ldquo;derecho al olvido&rdquo;).</li>
                  <li>Derecho a la limitación del tratamiento.</li>
                  <li>Derecho a la portabilidad de los datos.</li>
                  <li>Derecho de oposición al tratamiento.</li>
                </ul>
                <p>Asimismo, el usuario tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) en www.aepd.es.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">8. Seguridad</h2>
                <p>Se han adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, incluyendo comunicaciones cifradas (HTTPS) y servicios de envío de correo con estándares de seguridad adecuados.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">9. Cookies</h2>
                <p>Este sitio web utiliza cookies funcionales. Para más información, consulte nuestra <Link href={`/${locale}/cookies`} className="text-emerald-400 underline">Política de Cookies</Link>.</p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">1. Data controller</h2>
                <p>Lucas Ezequiel Riera (hereinafter, &ldquo;the Controller&rdquo;).</p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-400">
                  <li>Contact email: lucasezequielriera@gmail.com</li>
                  <li>Website: www.lucasriera.com</li>
                </ul>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">2. Data we collect</h2>
                <p>Through the contact form we collect:</p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-400">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Message content</li>
                </ul>
                <p>This data is provided voluntarily by the user.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">3. Purpose of processing</h2>
                <p>The collected data is used exclusively to:</p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-400">
                  <li>Respond to inquiries submitted through the contact form.</li>
                  <li>Manage potential professional relationships arising from the contact.</li>
                </ul>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">4. Legal basis</h2>
                <p>Data processing is based on the user&apos;s consent when voluntarily submitting the contact form (Art. 6.1.a GDPR) and on the Controller&apos;s legitimate interest in managing professional inquiries received (Art. 6.1.f GDPR).</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">5. Recipients</h2>
                <p>Contact form data is sent via email through Resend (resend.com), which acts as a data processor. Data will not be shared with third parties except as required by law.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">6. Data retention</h2>
                <p>Data is retained for the time necessary to address the inquiry and for a maximum of 1 year from the date the message is received, unless there is a legal obligation to retain it for a longer period.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">7. User rights</h2>
                <p>Users may exercise the following rights by sending an email to lucasezequielriera@gmail.com:</p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-400">
                  <li>Right of access to their personal data.</li>
                  <li>Right to rectification of inaccurate data.</li>
                  <li>Right to erasure (&ldquo;right to be forgotten&rdquo;).</li>
                  <li>Right to restriction of processing.</li>
                  <li>Right to data portability.</li>
                  <li>Right to object to processing.</li>
                </ul>
                <p>Users also have the right to file a complaint with the Spanish Data Protection Agency (AEPD) at www.aepd.es.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">8. Security</h2>
                <p>Appropriate technical and organizational measures have been adopted to ensure the security of personal data and prevent its alteration, loss, unauthorized processing, or access, including encrypted communications (HTTPS) and email services with adequate security standards.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">9. Cookies</h2>
                <p>This website uses functional cookies. For more information, see our <Link href={`/${locale}/cookies`} className="text-emerald-400 underline">Cookie Policy</Link>.</p>
              </section>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
