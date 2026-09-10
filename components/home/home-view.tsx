"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatedCounter } from "./animated-counter";
import { RoleSignature } from "./role-signature";
import { SocialLinks } from "./social-links";
import { useContactDrawer } from "@/components/contact/contact-drawer-context";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import { projects } from "@/lib/projects";

/**
 * Reveals the headline word by word. The stagger is a CSS delay rather than an
 * animation-library timeline: the headline is the LCP element, and driving it
 * from JavaScript left it at opacity 0 until hydration finished — a blank hero
 * on a slow phone, right where the measurement is taken.
 */
function RevealWords({
  text,
  startDelay = 0,
  accent = false,
}: {
  text: string;
  startDelay?: number;
  accent?: boolean;
}) {
  const words = text.trim().split(" ");

  return (
    <>
      {words.map((word, idx) => {
        // The full stop that closes the headline carries the same accent as the
        // one in the wordmark.
        const isLast = idx === words.length - 1;
        const endsSentence = isLast && word.endsWith(".");
        const body = endsSentence ? word.slice(0, -1) : word;

        return (
          <span key={idx} className="mr-[0.28em] inline-block overflow-hidden align-bottom">
            <span
              className={`animate-hero-word ${accent ? "text-white/45" : ""}`}
              style={{ animationDelay: `${startDelay + idx * 0.055}s` }}
            >
              {body}
              {endsSentence && (
                <span className={accent ? "text-cyan-300/45" : "text-cyan-300"}>.</span>
              )}
            </span>
          </span>
        );
      })}
    </>
  );
}

export function HomeView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const { open: openContact } = useContactDrawer();
  const yearsOfExperience = new Date().getFullYear() - 2020;
  const wordCount = t.hero.h1.trim().split(" ").length;

  return (
    <div className="relative flex h-screen-dvh flex-col overflow-hidden">
      <main
        id="main-content"
        className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center"
      >
        <div className="mb-7">
          <RoleSignature delay={0.15} />
        </div>

        <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-[2.5rem] font-bold leading-[1.04] tracking-[-0.03em] text-white sm:text-5xl lg:text-7xl">
          <RevealWords text={t.hero.h1} startDelay={0.1} />
          <RevealWords text={t.hero.h1Accent} startDelay={0.1 + wordCount * 0.055} accent />
        </h1>

        {/* Semantically the subheading of the page, so it carries the h2 even
            though it is styled as body copy. */}
        <h2
          className="animate-hero-rise mt-6 max-w-lg text-sm font-normal text-white/50 sm:text-base"
          style={{ animationDelay: "0.9s" }}
        >
          {t.hero.pitch(yearsOfExperience)}
        </h2>

        <div
          className="animate-hero-rise mt-9 flex flex-wrap items-center justify-center gap-5"
          style={{ animationDelay: "1.05s" }}
        >
          <Link
            href={`/${locale}/proyectos`}
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            {t.hero.ctaPrimary}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <button
            onClick={openContact}
            className="group inline-flex items-center font-[family-name:var(--font-geist-mono)] text-sm tracking-wide text-white/80 transition hover:text-white"
          >
            <span className="transition-transform group-hover:-translate-x-1">[</span>
            <span className="px-1.5">{t.hero.ctaSecondary}</span>
            <span className="transition-transform group-hover:translate-x-1">]</span>
          </button>
        </div>

        <div
          className="animate-hero-rise mt-12 grid w-full max-w-sm grid-cols-3 items-start gap-2 font-[family-name:var(--font-geist-mono)] text-[0.58rem] uppercase tracking-[0.12em] text-white/35 sm:mt-14 sm:flex sm:w-auto sm:max-w-none sm:items-center sm:gap-6 sm:text-xs sm:tracking-[0.15em]"
          style={{ animationDelay: "1.3s" }}
        >
          <span className="text-balance">
            <AnimatedCounter end={yearsOfExperience} />
            {t.hero.statYears} {t.hero.statCode}
          </span>
          <span className="hidden text-white/15 sm:inline">/</span>
          <span className="text-balance">
            <AnimatedCounter end={projects.length} />
            {t.hero.statCreated} {t.hero.statProducts}
          </span>
          <span className="hidden text-white/15 sm:inline">/</span>
          <span className="text-balance">
            <AnimatedCounter end={16} />
            {t.hero.statLived} {t.hero.statCountries}
          </span>
        </div>

        <div className="animate-hero-rise mt-7 sm:mt-8" style={{ animationDelay: "1.45s" }}>
          <SocialLinks />
        </div>
      </main>
    </div>
  );
}
