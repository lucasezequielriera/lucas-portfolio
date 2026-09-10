"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DockNav } from "@/components/chrome/dock-nav";
import { AnimatedCounter } from "./animated-counter";
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
      {words.map((word, idx) => (
        <span key={idx} className="mr-[0.28em] inline-block overflow-hidden align-bottom">
          <motion.span
            initial={prefersReduced ? false : { y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.7, delay: startDelay + idx * 0.055, ease: [0.16, 1, 0.3, 1] }}
            className={`inline-block ${accent ? "bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent" : ""}`}
          >
            {word}
          </motion.span>
        </span>
      ))}
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
      <DockNav locale={locale} />

      <main
        id="main-content"
        className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-xl"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
          <span className="font-[family-name:var(--font-geist-mono)] text-[0.65rem] uppercase tracking-[0.2em] text-white/60">
            {t.hero.badge}
          </span>
        </motion.div>

        <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-[2.5rem] font-normal leading-[1.05] tracking-normal text-white sm:text-5xl lg:text-7xl">
          <RevealWords text={t.hero.h1} startDelay={0.1} />
          <RevealWords text={t.hero.h1Accent} startDelay={0.1 + wordCount * 0.055} accent />
        </h1>

        <motion.p
          initial={prefersReduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-6 max-w-lg text-sm text-white/50 sm:text-base"
        >
          {t.hero.pitch(yearsOfExperience)}
        </motion.p>

        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-5"
        >
          <Link
            href={`/${locale}/proyectos`}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
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
          className="mt-14 flex items-center gap-4 font-[family-name:var(--font-geist-mono)] text-[0.65rem] uppercase tracking-[0.15em] text-white/35 sm:gap-6 sm:text-xs"
        >
          <span>
            <AnimatedCounter end={yearsOfExperience} />
            {t.hero.statYears} {t.hero.statCode}
          </span>
          <span className="text-white/15">/</span>
          <span>
            <AnimatedCounter end={projects.length} />
            {t.hero.statCreated} {t.hero.statProducts}
          </span>
          <span className="text-white/15">/</span>
          <span>
            <AnimatedCounter end={16} />
            {t.hero.statLived} {t.hero.statCountries}
          </span>
        </motion.div>
      </main>
    </div>
  );
}
