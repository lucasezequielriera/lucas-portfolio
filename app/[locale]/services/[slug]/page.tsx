import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  landingEntries,
  getLandingBySlug,
  type LandingLocale,
} from "@/lib/seo-landings";
import type { Locale } from "@/lib/dictionaries";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

const allowedLocales: LandingLocale[] = ["es", "en"];

export function generateStaticParams() {
  return allowedLocales.flatMap((locale) =>
    landingEntries.map((entry) => ({ locale, slug: entry.slug[locale] }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!allowedLocales.includes(locale as LandingLocale)) return {};

  const loc = locale as LandingLocale;
  const entry = getLandingBySlug(loc, slug);
  if (!entry) return {};

  const canonical = `/${loc}/services/${entry.slug[loc]}`;

  return {
    title: entry.title[loc],
    description: entry.description[loc],
    keywords: entry.keywords[loc],
    alternates: {
      canonical,
      languages: {
        es: `/es/services/${entry.slug.es}`,
        en: `/en/services/${entry.slug.en}`,
        fr: `/fr/services/${entry.slug.fr}`,
      },
    },
    openGraph: {
      type: "website",
      title: entry.title[loc],
      description: entry.description[loc],
      url: `https://www.lucasriera.com${canonical}`,
      siteName: "Lucas Riera",
    },
  };
}

export default async function ServiceLandingPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!allowedLocales.includes(locale as LandingLocale)) return notFound();

  const loc = locale as LandingLocale;
  const entry = getLandingBySlug(loc, slug);
  if (!entry) return notFound();

  const homePath = `/${locale as Locale}`;

  return (
    <main
      id="main-content"
      className="min-h-screen bg-neutral-950 px-6 pb-20 pt-16 text-neutral-100 md:pt-24"
    >
      <article className="mx-auto max-w-4xl space-y-10">
        <Link
          href={homePath}
          className="text-sm text-neutral-400 transition hover:text-neutral-200"
        >
          {loc === "es" ? "← Volver al inicio" : "← Back to home"}
        </Link>

        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            {loc === "es" ? "Servicios" : "Services"}
          </p>
          <h1 className="text-balance text-4xl font-semibold md:text-5xl">
            {entry.title[loc].replace(" | Lucas Riera", "")}
          </h1>
          <p className="max-w-3xl text-lg text-neutral-300">{entry.intro[loc]}</p>
        </header>

        <section className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 md:p-8">
          <h2 className="text-2xl font-semibold">{entry.h2[loc]}</h2>
          <ul className="mt-4 space-y-3 text-neutral-300">
            {entry.bulletPoints[loc].map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 md:p-8">
          <h2 className="text-2xl font-semibold">
            {loc === "es" ? "¿Trabajamos juntos?" : "Need this for your project?"}
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-200">
            {loc === "es"
              ? "Contame tu objetivo y te propongo una solucion tecnica clara, escalable y orientada a negocio."
              : "Tell me your goal and I will propose a clear, scalable, business-focused technical solution."}
          </p>
          <Link
            href={`${homePath}#contacto`}
            className="mt-6 inline-flex rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-500"
          >
            {loc === "es" ? "Contactar" : "Contact me"}
          </Link>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">
            {loc === "es" ? "Mas servicios" : "More services"}
          </h2>
          <div className="flex flex-wrap gap-3">
            {landingEntries
              .filter((candidate) => candidate.id !== entry.id)
              .map((candidate) => (
                <Link
                  key={candidate.id}
                  href={`/${loc}/services/${candidate.slug[loc]}`}
                  className="rounded-full border border-neutral-700 bg-neutral-900/70 px-4 py-2 text-sm text-neutral-300 transition hover:border-neutral-500 hover:text-neutral-100"
                >
                  {candidate.title[loc].replace(" | Lucas Riera", "")}
                </Link>
              ))}
          </div>
        </section>
      </article>
    </main>
  );
}
