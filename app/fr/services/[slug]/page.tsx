import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { landingEntries, getLandingBySlug } from "@/lib/seo-landings";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return landingEntries.map((entry) => ({ slug: entry.slug.fr }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getLandingBySlug("fr", slug);
  if (!entry) return {};

  const canonical = `/fr/services/${entry.slug.fr}`;
  return {
    title: entry.title.fr,
    description: entry.description.fr,
    keywords: entry.keywords.fr,
    alternates: {
      canonical,
      languages: {
        es: `/es/services/${entry.slug.es}`,
        en: `/en/services/${entry.slug.en}`,
        fr: canonical,
      },
    },
    openGraph: {
      type: "website",
      title: entry.title.fr,
      description: entry.description.fr,
      url: `https://www.lucasriera.com${canonical}`,
      locale: "fr_FR",
      siteName: "Lucas Riera",
    },
  };
}

export default async function FrenchServiceLandingPage({ params }: Props) {
  const { slug } = await params;
  const entry = getLandingBySlug("fr", slug);
  if (!entry) return notFound();

  return (
    <main
      id="main-content"
      className="min-h-screen bg-neutral-950 px-6 pb-20 pt-16 text-neutral-100 md:pt-24"
    >
      <article className="mx-auto max-w-4xl space-y-10">
        <Link
          href="/fr"
          className="text-sm text-neutral-400 transition hover:text-neutral-200"
        >
          ← Retour
        </Link>

        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Services
          </p>
          <h1 className="text-balance text-4xl font-semibold md:text-5xl">
            {entry.title.fr.replace(" | Lucas Riera", "")}
          </h1>
          <p className="max-w-3xl text-lg text-neutral-300">{entry.intro.fr}</p>
        </header>

        <section className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 md:p-8">
          <h2 className="text-2xl font-semibold">{entry.h2.fr}</h2>
          <ul className="mt-4 space-y-3 text-neutral-300">
            {entry.bulletPoints.fr.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Travaillons ensemble</h2>
          <p className="mt-3 max-w-2xl text-neutral-200">
            Dites-moi votre objectif et je vous proposerai une solution
            technique claire, evolutive et orientee business.
          </p>
          <Link
            href="/en#contacto"
            className="mt-6 inline-flex rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-500"
          >
            Contact
          </Link>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Autres services</h2>
          <div className="flex flex-wrap gap-3">
            {landingEntries
              .filter((candidate) => candidate.id !== entry.id)
              .map((candidate) => (
                <Link
                  key={candidate.id}
                  href={`/fr/services/${candidate.slug.fr}`}
                  className="rounded-full border border-neutral-700 bg-neutral-900/70 px-4 py-2 text-sm text-neutral-300 transition hover:border-neutral-500 hover:text-neutral-100"
                >
                  {candidate.title.fr.replace(" | Lucas Riera", "")}
                </Link>
              ))}
          </div>
        </section>
      </article>
    </main>
  );
}
