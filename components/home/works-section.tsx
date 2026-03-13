"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Code, GraduationCap, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollAnimation } from "./scroll-animation";
import { colorMap, iconColors } from "@/lib/colors";
import { projects } from "@/lib/projects";
import { getDictionary, type Locale } from "@/lib/dictionaries";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function WorksSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const textLocale = locale === "es" ? "es" : "en";

  return (
    <section id="trabajos" className="mx-auto max-w-6xl px-6 pb-24 space-y-10">
      <ScrollAnimation>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
            {t.works.label}
          </p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">{t.works.title}</h2>
          <p className="mt-3 max-w-2xl text-sm text-neutral-400">{t.works.description}</p>
        </div>
      </ScrollAnimation>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, idx) => {
          const colors = colorMap[project.color];
          const IconComponent =
            project.icon === "graduation-cap"
              ? GraduationCap
              : project.icon === "palette"
                ? Palette
                : null;
          return (
            <ScrollAnimation key={project.slug} delay={idx * 0.05}>
              <Link href={`/${locale}/proyectos/${project.slug}`} className="block h-full">
                <Card
                  className={`group relative h-full overflow-hidden border-neutral-800 bg-neutral-900/70 transition-all duration-500 ${colors.border} hover:shadow-2xl ${colors.shadow}`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />
                  <CardContent className="relative flex h-full flex-col justify-between space-y-5 p-6">
                    <div className="flex items-start justify-between">
                      {project.logo ? (
                        <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
                          <Image
                            src={project.logo}
                            alt={project.name}
                            fill
                            sizes="48px"
                            className="object-contain p-1.5"
                          />
                        </div>
                      ) : IconComponent ? (
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900">
                          <IconComponent className={`h-6 w-6 ${iconColors[project.color]}`} />
                        </div>
                      ) : null}
                      <div
                        className={`rounded-full border border-neutral-800 bg-neutral-900/80 p-2 transition ${colors.iconBorder}`}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-100">{project.name}</h3>
                      <p className="mt-2 text-sm text-neutral-400">
                        {project.longDescription[textLocale]}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-neutral-800 bg-neutral-950/60 px-2.5 py-1 text-xs text-neutral-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </ScrollAnimation>
          );
        })}
        <ScrollAnimation delay={0.3}>
          <Card className="group relative h-full overflow-hidden border-2 border-dashed border-neutral-800 bg-neutral-900/40 transition-all duration-500 hover:border-emerald-500/40 hover:bg-neutral-900/70">
            <CardContent className="relative flex h-full flex-col items-center justify-center space-y-5 p-6 text-center">
              <div className="rounded-full bg-emerald-500/10 p-4 transition-transform duration-300 group-hover:scale-110">
                <Code className="h-7 w-7 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-100">{t.works.ctaTitle}</h3>
                <p className="mt-2 text-sm text-neutral-400">{t.works.ctaDescription}</p>
              </div>
              <button
                onClick={() => scrollToId("contacto")}
                className="text-sm font-medium text-emerald-400 transition hover:text-emerald-300"
              >
                {t.works.ctaButton} &rarr;
              </button>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  );
}
