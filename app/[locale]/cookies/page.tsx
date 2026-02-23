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
    title: `${t.legal.cookieTitle} — Lucas Riera`,
    robots: { index: true, follow: true },
  };
}

export default async function CookiePolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);
  const isEs = locale === "es";
  const lastUpdated = new Intl.DateTimeFormat(isEs ? "es-ES" : "en-US", {
    month: "long",
    year: "numeric",
  }).format(new Date(2026, 1));

  return (
    <main id="main-content" className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-3xl px-6 pb-24 pt-16 md:pt-24">
        <Link
          href={`/${locale}`}
          className="text-sm text-neutral-500 transition hover:text-neutral-300"
        >
          {t.legal.backHome}
        </Link>

        <h1 className="mt-8 text-3xl font-semibold md:text-4xl">
          {t.legal.cookieTitle}
        </h1>
        <p className="mt-2 text-sm text-neutral-500">
          {t.legal.lastUpdated}: {lastUpdated}
        </p>

        <div className="prose-invert mt-10 space-y-8 text-sm leading-relaxed text-neutral-300">
          {isEs ? (
            <>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">1. ¿Qué son las cookies?</h2>
                <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo del usuario para recordar información sobre su visita. Este sitio web utiliza cookies estrictamente necesarias para su funcionamiento.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">2. Cookies que utilizamos</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-neutral-800 text-left text-neutral-400">
                        <th className="pb-2 pr-4">Nombre</th>
                        <th className="pb-2 pr-4">Tipo</th>
                        <th className="pb-2 pr-4">Finalidad</th>
                        <th className="pb-2">Duración</th>
                      </tr>
                    </thead>
                    <tbody className="text-neutral-300">
                      <tr className="border-b border-neutral-800/50">
                        <td className="py-2 pr-4 font-mono">locale</td>
                        <td className="py-2 pr-4">Funcional</td>
                        <td className="py-2 pr-4">Recuerda la preferencia de idioma del usuario (es/en).</td>
                        <td className="py-2">1 año</td>
                      </tr>
                      <tr className="border-b border-neutral-800/50">
                        <td className="py-2 pr-4 font-mono">cookie-consent</td>
                        <td className="py-2 pr-4">Técnica</td>
                        <td className="py-2 pr-4">Almacena la decisión del usuario sobre el banner de cookies.</td>
                        <td className="py-2">Permanente (localStorage)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">3. Servicios de terceros</h2>
                <p>Este sitio utiliza los siguientes servicios de terceros que pueden establecer sus propias cookies:</p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-400">
                  <li><strong>Vercel Analytics:</strong> métricas de uso anónimas y respetuosas con la privacidad. No utiliza cookies de seguimiento.</li>
                  <li><strong>Vercel Speed Insights:</strong> datos de rendimiento del sitio. No utiliza cookies de seguimiento.</li>
                </ul>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">4. Gestión de cookies</h2>
                <p>El usuario puede configurar su navegador para rechazar todas o algunas cookies. Tenga en cuenta que deshabilitar la cookie <code className="rounded bg-neutral-800 px-1.5 py-0.5 text-emerald-400">locale</code> puede afectar a la detección automática del idioma.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">5. Más información</h2>
                <p>Para cualquier consulta sobre el uso de cookies, puede contactar a lucasezequielriera@gmail.com. Consulte también nuestra <Link href={`/${locale}/privacidad`} className="text-emerald-400 underline">Política de Privacidad</Link>.</p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">1. What are cookies?</h2>
                <p>Cookies are small text files that websites store on the user&apos;s device to remember information about their visit. This website uses cookies strictly necessary for its operation.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">2. Cookies we use</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-neutral-800 text-left text-neutral-400">
                        <th className="pb-2 pr-4">Name</th>
                        <th className="pb-2 pr-4">Type</th>
                        <th className="pb-2 pr-4">Purpose</th>
                        <th className="pb-2">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="text-neutral-300">
                      <tr className="border-b border-neutral-800/50">
                        <td className="py-2 pr-4 font-mono">locale</td>
                        <td className="py-2 pr-4">Functional</td>
                        <td className="py-2 pr-4">Remembers the user&apos;s language preference (es/en).</td>
                        <td className="py-2">1 year</td>
                      </tr>
                      <tr className="border-b border-neutral-800/50">
                        <td className="py-2 pr-4 font-mono">cookie-consent</td>
                        <td className="py-2 pr-4">Technical</td>
                        <td className="py-2 pr-4">Stores the user&apos;s decision on the cookie banner.</td>
                        <td className="py-2">Permanent (localStorage)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">3. Third-party services</h2>
                <p>This site uses the following third-party services that may set their own cookies:</p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-400">
                  <li><strong>Vercel Analytics:</strong> privacy-friendly anonymous usage metrics. Does not use tracking cookies.</li>
                  <li><strong>Vercel Speed Insights:</strong> site performance data. Does not use tracking cookies.</li>
                </ul>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">4. Managing cookies</h2>
                <p>Users can configure their browser to reject all or some cookies. Note that disabling the <code className="rounded bg-neutral-800 px-1.5 py-0.5 text-emerald-400">locale</code> cookie may affect automatic language detection.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">5. More information</h2>
                <p>For any questions about cookie usage, contact lucasezequielriera@gmail.com. See also our <Link href={`/${locale}/privacidad`} className="text-emerald-400 underline">Privacy Policy</Link>.</p>
              </section>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
