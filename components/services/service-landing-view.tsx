"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DockNav } from "@/components/chrome/dock-nav";
import { SiteFooterBar } from "@/components/home/site-footer-bar";
import { OpenContactButton } from "@/components/contact/open-contact-button";
import type { LandingEntry, LandingLocale } from "@/lib/seo-landings";
import { landingEntries } from "@/lib/seo-landings";
import type { Locale } from "@/lib/dictionaries";

export function ServiceLandingView({
  locale,
  entry,
}: {
  locale: LandingLocale;
  entry: LandingEntry;
}) {
  const loc = locale;

  return (
    <div className="relative flex h-screen-dvh flex-col overflow-hidden text-white">
      <DockNav locale={locale as Locale} />
      <SiteFooterBar locale={locale as Locale} />

      <main
        id="main-content"
        className="relative z-10 mx-auto flex min-h-0 w-full max-w-4xl flex-1 flex-col gap-4 px-4 pb-24 pt-20 sm:px-6 sm:pt-24"
      >
        <div className="shrink-0 space-y-2.5">
          <p className="font-[family-name:var(--font-geist-mono)] text-[0.65rem] uppercase tracking-[0.2em] text-cyan-300/80">
            {loc === "es" ? "Servicios" : loc === "fr" ? "Services" : "Services"}
          </p>
          <h1 className="text-balance font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
            {entry.title[loc].replace(" | Lucas Riera", "")}
          </h1>
          <p className="max-w-2xl text-sm text-white/50 sm:text-base">{entry.intro[loc]}</p>
        </div>

        <div className="min-h-0 flex-1 space-y-4 overflow-y-auto">
          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:p-6">
            <h2 className="text-lg font-semibold sm:text-xl">{entry.h2[loc]}</h2>
            <ul className="mt-3 space-y-2.5 text-sm text-white/60">
              {entry.bulletPoints[loc].map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-white/15 bg-white/[0.05] p-5 backdrop-blur-xl sm:p-6">
            <h2 className="text-lg font-semibold sm:text-xl">
              {loc === "es" ? "¿Lo hacemos?" : loc === "fr" ? "On le fait ?" : "Shall we build it?"}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70">
              {loc === "es"
                ? "Contame qué querés lograr y te digo cómo lo encararía, cuánto sale y cuánto tardo."
                : loc === "fr"
                  ? "Dites-moi ce que vous voulez obtenir et je vous dirai comment je m'y prendrais, combien ça coûte et combien de temps ça prend."
                  : "Tell me what you're trying to get done and I'll tell you how I'd approach it, what it costs and how long it takes."}
            </p>
            <OpenContactButton className="mt-4 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90">
              {loc === "es" ? "Contactar" : loc === "fr" ? "Contact" : "Contact me"}
            </OpenContactButton>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-wide text-white/50">
              {loc === "es" ? "Más servicios" : loc === "fr" ? "Autres services" : "More services"}
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {landingEntries
                .filter((candidate) => candidate.id !== entry.id)
                .map((candidate) => (
                  <Link
                    key={candidate.id}
                    href={`/${loc}/services/${candidate.slug[loc]}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.03] px-3.5 py-1.5 text-xs text-white/60 transition hover:border-white/40 hover:text-white"
                  >
                    {candidate.title[loc].replace(" | Lucas Riera", "")}
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
