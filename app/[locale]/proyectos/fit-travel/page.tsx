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
    title: `${t.fitTravel.title} — Lucas Riera | Software Developer`,
    description: t.fitTravel.description,
  };
}

export default async function FitTravelPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);

  return (
    <main id="main-content" className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="sticky top-0 z-30 border-b border-neutral-900/60 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href={`/${locale}/proyectos`}
            className="text-sm font-medium tracking-[0.2em] text-neutral-400 uppercase transition hover:text-neutral-100"
          >
            &larr; {t.nav.proyectos}
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-24">
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold md:text-4xl">
            {t.fitTravel.title}
          </h1>
          <p className="max-w-2xl text-sm text-neutral-400">
            {t.fitTravel.description}
          </p>
        </div>
      </section>
    </main>
  );
}
