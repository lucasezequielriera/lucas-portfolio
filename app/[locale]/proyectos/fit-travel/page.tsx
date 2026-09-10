import type { Metadata } from "next";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import { DockNav } from "@/components/chrome/dock-nav";
import { SiteFooterBar } from "@/components/home/site-footer-bar";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);
  return {
    title: `${t.fitTravel.title} — Lucas Riera | Product Engineer`,
    description: t.fitTravel.description,
    // Todavía es una página de relleno: indexarla sólo aporta contenido pobre
    // al dominio. Quitar el noindex cuando tenga contenido real.
    robots: { index: false, follow: true },
  };
}

export default async function FitTravelPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const t = getDictionary(loc);

  return (
    <div className="relative flex h-screen-dvh flex-col overflow-hidden text-white">
      <DockNav locale={loc} />
      <SiteFooterBar locale={loc} />

      <main
        id="main-content"
        className="relative z-10 mx-auto flex min-h-0 w-full max-w-4xl flex-1 flex-col justify-center gap-4 px-4 py-4 sm:px-6"
      >
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
          {t.fitTravel.title}
        </h1>
        <p className="max-w-2xl text-sm text-white/45">{t.fitTravel.description}</p>
      </main>
    </div>
  );
}
