"use client";

import { DockNav } from "@/components/chrome/dock-nav";
import { SiteFooterBar } from "@/components/home/site-footer-bar";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import { projects } from "@/lib/projects";
import { ProjectsGallery } from "./projects-gallery";

export function ProjectsView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <div className="relative flex h-screen-dvh flex-col overflow-hidden text-white">
      <DockNav locale={locale} />
      <SiteFooterBar locale={locale} />

      <main
        id="main-content"
        className="relative z-10 mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col gap-4 px-4 pb-24 pt-20 sm:px-6 sm:pt-24"
      >
        <div className="shrink-0 space-y-1.5">
          <p className="font-[family-name:var(--font-geist-mono)] text-[0.65rem] uppercase tracking-[0.25em] text-cyan-300/80">
            {t.proyectosPage.count(projects.length)}
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
            {t.proyectosPage.title}
          </h1>
          <p className="max-w-2xl text-sm text-white/45">{t.proyectosPage.description}</p>
        </div>

        <ProjectsGallery locale={locale} />
      </main>
    </div>
  );
}
