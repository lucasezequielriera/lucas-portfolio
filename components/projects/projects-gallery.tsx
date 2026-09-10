"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, GraduationCap, Palette } from "lucide-react";
import { projects } from "@/lib/projects";
import { colorConfig, colorMap } from "@/lib/colors";
import { getDictionary, type Locale } from "@/lib/dictionaries";

export function ProjectsGallery({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const textLocale = locale === "es" ? "es" : "en";
  const [index, setIndex] = useState(0);
  const project = projects[index];
  const colors = colorConfig[project.color];
  const firstImage = project.media.find((m) => m.type === "image");

  const IconComponent =
    project.icon === "graduation-cap" ? GraduationCap : project.icon === "palette" ? Palette : null;

  return (
    <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 sm:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[260px_minmax(0,1fr)]">
      <div className="min-h-0 overflow-y-auto rounded-2xl border border-white/10 bg-white/[0.03] p-2 backdrop-blur-xl">
        {projects.map((p, i) => {
          const active = i === index;
          const Icon = p.icon === "graduation-cap" ? GraduationCap : p.icon === "palette" ? Palette : null;
          return (
            <button
              key={p.slug}
              onClick={() => setIndex(i)}
              className={`flex w-full items-center gap-3 rounded-xl p-2.5 text-left transition ${
                active ? "bg-white/10" : "hover:bg-white/[0.06]"
              }`}
            >
              {p.logo ? (
                <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-black/40">
                  <Image src={p.logo} alt={p.name} fill sizes="36px" className="object-contain p-1" />
                </div>
              ) : Icon ? (
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-black/40">
                  <Icon className={`h-4 w-4 ${colorConfig[p.color].heading}`} />
                </div>
              ) : null}
              <div className="min-w-0">
                <p className={`truncate text-sm font-medium ${active ? "text-white" : "text-white/60"}`}>
                  {p.name}
                </p>
                <p className="text-xs text-white/35">{p.year}</p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="relative min-h-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
        <div className={`absolute inset-0 bg-gradient-to-br ${colorMap[project.color].gradient} to-transparent opacity-60`} />
        <AnimatePresence mode="wait">
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="relative flex h-full min-h-0 flex-col gap-4 overflow-y-auto p-4 sm:p-6"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                {project.logo ? (
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black/40">
                    <Image src={project.logo} alt={project.name} fill sizes="48px" className="object-contain p-1.5" />
                  </div>
                ) : IconComponent ? (
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/40">
                    <IconComponent className={`h-6 w-6 ${colors.heading}`} />
                  </div>
                ) : null}
                <div>
                  <h2 className="text-lg font-semibold text-white sm:text-xl">{project.name}</h2>
                  <p className="text-xs text-white/35">
                    {t.caseStudy.builtIn} {project.year}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-xs font-medium text-white/70 transition hover:border-white/40"
                >
                  {t.caseStudy.visitSite}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <Link
                  href={`/${locale}/proyectos/${project.slug}`}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition ${colors.ctaBg}`}
                >
                  {textLocale === "es" ? "Caso completo" : "Full case"}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {firstImage && (
              <div className="relative aspect-[16/7] w-full shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black/40">
                <Image
                  src={firstImage.src}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                />
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className={`font-[family-name:var(--font-geist-mono)] text-[0.65rem] font-semibold uppercase tracking-[0.2em] ${colors.heading}`}>
                  {t.caseStudy.problem}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">{project.problem[textLocale]}</p>
              </div>
              <div>
                <p className={`font-[family-name:var(--font-geist-mono)] text-[0.65rem] font-semibold uppercase tracking-[0.2em] ${colors.heading}`}>
                  {t.caseStudy.solution}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">{project.solution[textLocale]}</p>
              </div>
            </div>

            <div className="mt-auto flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span key={tag} className={`rounded-full border bg-black/40 px-2.5 py-1 text-xs ${colors.tag}`}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
