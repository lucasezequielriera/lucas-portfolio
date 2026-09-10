import type { Metadata } from "next";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import { DockNav } from "@/components/chrome/dock-nav";
import { SiteFooterBar } from "@/components/home/site-footer-bar";
import { CvGeneratorTool } from "@/components/tools/cv-generator-tool";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  const isFr = locale === "fr";

  return {
    title: isEs
      ? "Herramientas — Lucas Riera"
      : isFr
        ? "Outils — Lucas Riera"
        : "Tools — Lucas Riera",
    description: isEs
      ? "Herramientas profesionales para candidatos y equipos. Generador de CV ATS en PDF."
      : isFr
        ? "Outils professionnels pour candidats et equipes. Generateur de CV ATS en PDF."
        : "Professional tools for candidates and teams. ATS-friendly resume PDF generator.",
    alternates: {
      languages: {
        es: "/es/herramientas",
        en: "/en/herramientas",
        fr: "/fr/herramientas",
      },
    },
  };
}

export default async function HerramientasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const t = getDictionary(loc);

  const title =
    loc === "es"
      ? "Herramientas para acelerar tu carrera"
      : loc === "fr"
        ? "Outils pour accelerer votre carriere"
        : "Tools to accelerate your career";
  const subtitle =
    loc === "es"
      ? "Generador de CV optimizado para ATS y bots de LinkedIn, listo para descargar en PDF."
      : loc === "fr"
        ? "Generateur de CV optimise ATS et bots LinkedIn, pret a telecharger en PDF."
        : "ATS and LinkedIn-bot optimized resume generator, ready to download as PDF.";

  return (
    <div className="relative flex h-screen-dvh flex-col overflow-hidden text-white">
      <DockNav locale={loc} />
      <SiteFooterBar locale={loc} />

      <main
        id="main-content"
        className="relative z-10 mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col gap-4 overflow-y-auto px-4 pb-24 pt-20 sm:px-6 sm:pt-24"
      >
        <div className="shrink-0 space-y-1.5">
          <p className="font-[family-name:var(--font-geist-mono)] text-[0.65rem] uppercase tracking-[0.2em] text-cyan-300/80">
            {t.nav.herramientas}
          </p>
          <h1 className="text-balance font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h1>
          <p className="max-w-2xl text-sm text-white/50">{subtitle}</p>
        </div>

        <CvGeneratorTool locale={loc} />
      </main>
    </div>
  );
}
