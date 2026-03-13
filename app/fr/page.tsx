import Link from "next/link";
import { landingEntries } from "@/lib/seo-landings";

export const metadata = {
  title: "Lucas Riera | Developpeur logiciel freelance",
  description:
    "Developpeur logiciel freelance pour applications web, IA et conseil technique. Travail remote avec equipes internationales.",
};

export default function FrenchHomePage() {
  return (
    <main
      id="main-content"
      className="min-h-screen bg-neutral-950 px-6 pb-20 pt-16 text-neutral-100 md:pt-24"
    >
      <section className="mx-auto max-w-5xl space-y-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
          Lucas Riera
        </p>
        <h1 className="text-balance text-4xl font-semibold md:text-6xl">
          Developpeur logiciel freelance pour produits web, IA et conseil
          technique.
        </h1>
        <p className="max-w-3xl text-lg text-neutral-300">
          J&apos;accompagne startups et entreprises dans la creation de produits
          digitaux performants, avec une execution rapide et une qualite
          premium.
        </p>
        <Link
          href="/en#contacto"
          className="inline-flex rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-500"
        >
          Contact
        </Link>
      </section>

      <section className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-2">
        {landingEntries.map((entry) => (
          <Link
            key={entry.id}
            href={`/fr/services/${entry.slug.fr}`}
            className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-6 transition hover:border-neutral-600 hover:bg-neutral-900"
          >
            <h2 className="text-xl font-semibold">
              {entry.title.fr.replace(" | Lucas Riera", "")}
            </h2>
            <p className="mt-2 text-sm text-neutral-400">{entry.description.fr}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
