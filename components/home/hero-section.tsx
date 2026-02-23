"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Instagram,
  Linkedin,
  Code,
  MapPin,
  Terminal,
  Layers,
  Palette,
  GraduationCap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "./animated-counter";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import { projects } from "@/lib/projects";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function HeroSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const yearsOfExperience = new Date().getFullYear() - 2020;
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.08),transparent)]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-20 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:pt-28">
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              {t.hero.badge}
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-400">
              <MapPin className="h-3 w-3" />
              {t.hero.location}
            </div>
          </div>

          <h1 className="text-balance text-4xl font-semibold leading-tight md:text-6xl">
            {t.hero.h1}
            <span className="text-neutral-400">{t.hero.h1Accent}</span>
          </h1>

          <p className="max-w-xl text-lg text-neutral-300">
            {t.hero.description(yearsOfExperience)}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" onClick={() => scrollToId("trabajos")}>
              {t.hero.ctaPrimary}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToId("contacto")}
              className="!border-neutral-700 !bg-transparent !text-neutral-100 hover:!bg-neutral-800 hover:!text-neutral-50"
            >
              {t.hero.ctaSecondary}
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-400">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              {t.hero.presence}
            </span>
            <a
              href="https://github.com/lucasezequielriera"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 hover:border-neutral-600 hover:text-neutral-100"
            >
              <Code className="h-3.5 w-3.5" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/lucasezequielriera"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 hover:border-neutral-600 hover:text-neutral-100"
            >
              <Linkedin className="h-3.5 w-3.5" /> LinkedIn
            </a>
            <a
              href="https://instagram.com/lucasezequielriera"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 hover:border-neutral-600 hover:text-neutral-100"
            >
              <Instagram className="h-3.5 w-3.5" /> Instagram
            </a>
          </div>
        </motion.div>

        <motion.div
          {...(prefersReduced ? {} : fadeInUp)}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-4"
        >
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60">
            <video
              src="/lucas.mov"
              autoPlay
              loop
              muted
              playsInline
              aria-label={t.hero.videoAlt}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
          </div>
          <Card className="bg-neutral-900/60 border-neutral-800">
            <CardContent className="p-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 mb-4">
                {t.hero.currently}
              </p>
              <div className="space-y-3 text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <Terminal className="mt-0.5 h-4 w-4 text-emerald-400" />
                  <span>{t.hero.activity1}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Layers className="mt-0.5 h-4 w-4 text-sky-400" />
                  <span>{t.hero.activity2}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Palette className="mt-0.5 h-4 w-4 text-purple-400" />
                  <span>{t.hero.activity3}</span>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="mt-0.5 h-4 w-4 text-amber-400" />
                  <span>{t.hero.activity4}</span>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 border-t border-neutral-800 pt-4 text-xs text-neutral-400">
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-neutral-500">
                    {t.hero.statCode}
                  </p>
                  <p className="mt-1 text-base font-semibold text-neutral-100">
                    <AnimatedCounter end={yearsOfExperience} />
                    {t.hero.statYears}
                  </p>
                </div>
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-neutral-500">
                    {t.hero.statProducts}
                  </p>
                  <p className="mt-1 text-base font-semibold text-neutral-100">
                    <AnimatedCounter end={projects.length} />
                    {t.hero.statCreated}
                  </p>
                </div>
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-neutral-500">
                    {t.hero.statCountries}
                  </p>
                  <p className="mt-1 text-base font-semibold text-neutral-100">
                    <AnimatedCounter end={16} />
                    {t.hero.statLived}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
