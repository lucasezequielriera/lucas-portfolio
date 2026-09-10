"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatedCounter } from "./animated-counter";
import { RoleSignature } from "./role-signature";
import { SocialLinks } from "./social-links";
import { useContactDrawer } from "@/components/contact/contact-drawer-context";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import { projects } from "@/lib/projects";

function RevealWords({
  text,
  className,
  startDelay = 0,
  accent = false,
}: {
  text: string;
  className?: string;
  startDelay?: number;
  accent?: boolean;
}) {
  const prefersReduced = useReducedMotion();
  const words = text.trim().split(" ");

  return (
    <span className={className}>
      {words.map((word, idx) => {
        // The full stop that closes the headline is the same accent as the one
        // in the wordmark, so it gets the brand colour rather than the muted
        // tone the rest of the phrase carries.
        const isLast = idx === words.length - 1;
        const endsSentence = isLast && word.endsWith(".");
        const body = endsSentence ? word.slice(0, -1) : word;

        return (
          <span key={idx} className="mr-[0.28em] inline-block overflow-hidden align-bottom">
            <motion.span
              initial={prefersReduced ? false : { y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.7, delay: startDelay + idx * 0.055, ease: [0.16, 1, 0.3, 1] }}
              className={`inline-block ${accent ? "text-white/45" : ""}`}
            >
              {body}
              {endsSentence && (
                <span className={accent ? "text-cyan-300/45" : "text-cyan-300"}>.</span>
              )}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}

export function HomeView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const { open: openContact } = useContactDrawer();
  const prefersReduced = useReducedMotion();
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
        <motion.h2
          initial={prefersReduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-6 max-w-lg text-sm font-normal text-white/50 sm:text-base"
        >
          {t.hero.pitch(yearsOfExperience)}
        </motion.h2>

        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-5"
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
        </motion.div>

        <motion.div
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-12 grid w-full max-w-sm grid-cols-3 items-start gap-2 font-[family-name:var(--font-geist-mono)] text-[0.58rem] uppercase tracking-[0.12em] text-white/35 sm:mt-14 sm:flex sm:w-auto sm:max-w-none sm:items-center sm:gap-6 sm:text-xs sm:tracking-[0.15em]"
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
        </motion.div>

        <motion.div
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.45 }}
          className="mt-7 sm:mt-8"
        >
          <SocialLinks />
        </motion.div>
      </main>
    </div>
  );
}
