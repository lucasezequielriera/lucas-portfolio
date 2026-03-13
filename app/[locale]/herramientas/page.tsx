import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, type Locale } from "@/lib/dictionaries";
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
      ? "Incluye un generador de CV optimizado para ATS y bots de LinkedIn, listo para descargar en PDF."
      : loc === "fr"
        ? "Inclut un generateur de CV optimise ATS et bots LinkedIn, pret a telecharger en PDF."
        : "Includes an ATS and LinkedIn-bot optimized resume generator, ready to download as PDF.";

  return (
    <main id="main-content" className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="sticky top-0 z-30 border-b border-neutral-900/60 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Link
              href={`/${locale}`}
              className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-400 transition hover:text-neutral-100"
            >
              Lucas Riera
            </Link>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              {t.nav.herramientas}
            </span>
          </div>
          <Link
            href={`/${locale}`}
            className="rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-1.5 text-xs font-medium text-neutral-300 transition hover:border-neutral-700 hover:text-neutral-100"
          >
            {loc === "es" ? "Inicio" : loc === "fr" ? "Accueil" : "Home"}
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl space-y-8 px-6 pb-24 pt-14 md:pt-20">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            {t.nav.herramientas}
          </p>
          <h1 className="text-balance text-3xl font-semibold md:text-5xl">{title}</h1>
          <p className="max-w-3xl text-neutral-300">{subtitle}</p>
        </div>

        <CvGeneratorTool locale={loc} />
      </section>
    </main>
  );
}
