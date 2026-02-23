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
    title: `${t.legal.legalTitle} — Lucas Riera`,
    robots: { index: true, follow: true },
  };
}

export default async function LegalNoticePage({
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
          {t.legal.legalTitle}
        </h1>
        <p className="mt-2 text-sm text-neutral-500">
          {t.legal.lastUpdated}: febrero 2026
        </p>

        <div className="prose-invert mt-10 space-y-8 text-sm leading-relaxed text-neutral-300">
          {isEs ? (
            <>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">1. Datos identificativos</h2>
                <p>En cumplimiento del deber de información establecido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se facilitan los siguientes datos:</p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-400">
                  <li><strong>Titular:</strong> Lucas Ezequiel Riera</li>
                  <li><strong>NIF/NIE:</strong> Z3573260P</li>
                  <li><strong>Domicilio:</strong> Madrid, 28048, España</li>
                  <li><strong>Email:</strong> lucasezequielriera@gmail.com</li>
                  <li><strong>Sitio web:</strong> www.lucasriera.com</li>
                </ul>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">2. Objeto</h2>
                <p>El presente sitio web tiene como finalidad la presentación de los servicios profesionales de desarrollo de software y consultoría informática ofrecidos por el titular.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">3. Propiedad intelectual e industrial</h2>
                <p>Todos los contenidos del sitio web, incluyendo textos, imágenes, diseño gráfico, código fuente y logotipos, son propiedad del titular o de sus legítimos propietarios y están protegidos por las leyes de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución, comunicación pública o transformación no autorizada.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">4. Condiciones de uso</h2>
                <p>El usuario se compromete a hacer un uso adecuado de los contenidos y servicios ofrecidos a través de este sitio web, absteniéndose de emplearlos para actividades ilícitas o que atenten contra los derechos de terceros.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">5. Exclusión de responsabilidad</h2>
                <p>El titular no se hace responsable de los daños o perjuicios que pudieran derivarse del acceso o uso del sitio web, incluyendo virus o programas maliciosos. Tampoco se responsabiliza de los contenidos de los sitios web de terceros a los que se pueda enlazar desde esta página.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">6. Protección de datos</h2>
                <p>Para más información sobre el tratamiento de datos personales, consulte nuestra <Link href={`/${locale}/privacidad`} className="text-emerald-400 underline">Política de Privacidad</Link>.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">7. Legislación aplicable</h2>
                <p>Este aviso legal se rige por la legislación española. Para la resolución de cualquier controversia serán competentes los juzgados y tribunales de Madrid, España.</p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">1. Identification data</h2>
                <p>In compliance with Article 10 of Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), the following information is provided:</p>
                <ul className="list-disc pl-6 space-y-1 text-neutral-400">
                  <li><strong>Owner:</strong> Lucas Ezequiel Riera</li>
                  <li><strong>Tax ID (NIF/NIE):</strong> Z3573260P</li>
                  <li><strong>Address:</strong> Madrid, 28048, Spain</li>
                  <li><strong>Email:</strong> lucasezequielriera@gmail.com</li>
                  <li><strong>Website:</strong> www.lucasriera.com</li>
                </ul>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">2. Purpose</h2>
                <p>This website aims to present the professional software development and IT consulting services offered by the owner.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">3. Intellectual and industrial property</h2>
                <p>All website content, including texts, images, graphic design, source code, and logos, are the property of the owner or their legitimate owners and are protected by intellectual and industrial property laws. Unauthorized reproduction, distribution, public communication, or transformation is prohibited.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">4. Terms of use</h2>
                <p>The user agrees to make appropriate use of the content and services offered through this website, refraining from using them for illegal activities or activities that infringe on the rights of third parties.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">5. Disclaimer</h2>
                <p>The owner is not responsible for damages that may arise from access to or use of the website, including viruses or malicious programs. The owner is also not responsible for the content of third-party websites that may be linked from this page.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">6. Data protection</h2>
                <p>For more information about personal data processing, see our <Link href={`/${locale}/privacidad`} className="text-emerald-400 underline">Privacy Policy</Link>.</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-neutral-100">7. Applicable law</h2>
                <p>This legal notice is governed by Spanish law. The courts of Madrid, Spain, shall have jurisdiction over any disputes.</p>
              </section>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
