"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, GraduationCap, MessageCircle, Palette } from "lucide-react";
import { DockNav } from "@/components/chrome/dock-nav";
import { SiteFooterBar } from "@/components/home/site-footer-bar";
import { Segmented } from "@/components/ui/segmented";
import { OpenContactButton } from "@/components/contact/open-contact-button";
import { colorConfig } from "@/lib/colors";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import type { Project } from "@/lib/projects";

type TabKey = "resumen" | "capturas";

export function CaseStudyView({ locale, project }: { locale: Locale; project: Project }) {
  const t = getDictionary(locale);
  const textLocale = locale === "es" ? "es" : "en";
  const colors = colorConfig[project.color];
  const hasMedia = project.media.length > 0;
  const [tab, setTab] = useState<TabKey>("resumen");

  const IconComponent =
    project.icon === "graduation-cap" ? GraduationCap : project.icon === "palette" ? Palette : null;

  return (
    <div className="relative flex h-screen-dvh flex-col overflow-hidden text-white">
      <DockNav locale={locale} />
      <SiteFooterBar locale={locale} />

      <main
        id="main-content"
        className="relative z-10 mx-auto flex min-h-0 w-full max-w-5xl flex-1 flex-col gap-3 px-4 pb-24 pt-20 sm:px-6 sm:pt-24"
      >
        <div className="shrink-0">
          <Link
            href={`/${locale}/proyectos`}
            className="inline-flex items-center gap-1.5 text-xs text-white/35 transition hover:text-white/70"
          >
            {t.caseStudy.backToProjects}
          </Link>
        </div>

        <div className="flex shrink-0 flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.logo ? (
              <div className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border bg-black/40 ${colors.border}`}>
                <Image src={project.logo} alt={project.name} fill sizes="48px" className="object-contain p-1.5" />
              </div>
            ) : IconComponent ? (
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border bg-black/40 ${colors.border}`}>
                <IconComponent className={`h-6 w-6 ${colors.heading}`} />
              </div>
            ) : null}
            <div>
              <h1 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.02em]">
                {project.name}
              </h1>
              <p className="text-xs text-white/35">
                {t.caseStudy.builtIn} {project.year} · {t.caseStudy.createdBy}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <OpenContactButton className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-transparent px-3.5 py-1.5 text-xs font-medium text-white/70 transition hover:bg-white/10">
              <MessageCircle className="h-3.5 w-3.5" />
              {t.nav.contacto}
            </OpenContactButton>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${colors.ctaBg}`}
            >
              {t.caseStudy.visitSite}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {hasMedia && (
          <div className="shrink-0">
            <Segmented
              items={[
                { key: "resumen", label: textLocale === "es" ? "Resumen" : "Overview" },
                { key: "capturas", label: t.caseStudy.screenshots },
              ]}
              value={tab}
              onChange={(k) => setTab(k as TabKey)}
              ariaLabel={project.name}
            />
          </div>
        )}

        <div className="min-h-0 flex-1 overflow-y-auto rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl sm:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {tab === "resumen" || !hasMedia ? (
                <>
                  <p className="text-base leading-relaxed text-white/60">
                    {project.longDescription[textLocale]}
                  </p>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <div className={`h-1 w-6 rounded-full ${colors.accent}`} />
                        <p className={`font-[family-name:var(--font-geist-mono)] text-xs font-semibold uppercase tracking-[0.2em] ${colors.heading}`}>
                          {t.caseStudy.problem}
                        </p>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-white/60">{project.problem[textLocale]}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <div className={`h-1 w-6 rounded-full ${colors.accent}`} />
                        <p className={`font-[family-name:var(--font-geist-mono)] text-xs font-semibold uppercase tracking-[0.2em] ${colors.heading}`}>
                          {t.caseStudy.solution}
                        </p>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-white/60">{project.solution[textLocale]}</p>
                    </div>
                  </div>
                  <div>
                    <p className={`font-[family-name:var(--font-geist-mono)] text-xs font-semibold uppercase tracking-[0.2em] ${colors.heading}`}>
                      {t.caseStudy.techStack}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className={`rounded-full border bg-black/40 px-3 py-1 text-xs ${colors.tag}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="grid gap-4">
                  {project.media.map((item, idx) =>
                    item.type === "video" ? (
                      <video
                        key={idx}
                        src={item.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className={`w-full overflow-hidden rounded-xl border border-white/10 shadow-lg ${colors.glow} aspect-video object-cover`}
                        aria-label={`${project.name} demo video`}
                      />
                    ) : (
                      <div
                        key={idx}
                        className={`relative aspect-video overflow-hidden rounded-xl border border-white/10 shadow-lg ${colors.glow}`}
                      >
                        <Image
                          src={item.src}
                          alt={`${project.name} screenshot ${idx + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 900px"
                          className="object-cover"
                        />
                      </div>
                    )
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="shrink-0 text-right">
          <Link
            href={`/${locale}/proyectos`}
            className="inline-flex items-center gap-1 text-xs text-white/35 transition hover:text-white/70"
          >
            {t.caseStudy.backToProjects}
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>
      </main>
    </div>
  );
}
