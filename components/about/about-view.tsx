"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DockNav } from "@/components/chrome/dock-nav";
import { SiteFooterBar } from "@/components/home/site-footer-bar";
import { Segmented } from "@/components/ui/segmented";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import { ExperiencePanel } from "./experience-panel";
import { StackPanel } from "./stack-panel";
import { ServicesPanel } from "./services-panel";
import { TestimonialsPanel } from "./testimonials-panel";

type TabKey = "experience" | "stack" | "services" | "testimonials";

export function AboutView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const [tab, setTab] = useState<TabKey>("experience");

  const items = [
    { key: "experience", label: t.about.tabExperience },
    { key: "stack", label: t.about.tabStack },
    { key: "services", label: t.about.tabServices },
    { key: "testimonials", label: t.about.tabTestimonials },
  ];

  return (
    <div className="relative flex h-screen-dvh flex-col overflow-hidden text-white">
      <DockNav locale={locale} />
      <SiteFooterBar locale={locale} />

      <main
        id="main-content"
        className="relative z-10 mx-auto flex min-h-0 w-full max-w-5xl flex-1 flex-col gap-4 px-4 pb-24 pt-20 sm:px-6 sm:pt-24"
      >
        <div className="shrink-0 space-y-3">
          <p className="font-[family-name:var(--font-geist-mono)] text-[0.65rem] uppercase tracking-[0.25em] text-cyan-300/80">
            {t.about.badge}
          </p>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
                {t.about.title}
              </h1>
              <p className="mt-1.5 max-w-xl text-sm text-white/45">{t.about.subtitle}</p>
            </div>
            <Segmented
              items={items}
              value={tab}
              onChange={(k) => setTab(k as TabKey)}
              ariaLabel={t.about.badge}
            />
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl sm:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {tab === "experience" && <ExperiencePanel locale={locale} />}
              {tab === "stack" && <StackPanel locale={locale} />}
              {tab === "services" && <ServicesPanel locale={locale} />}
              {tab === "testimonials" && <TestimonialsPanel locale={locale} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
