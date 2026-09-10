"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { getDictionary, type Locale } from "@/lib/dictionaries";

type Entry = {
  name: string;
  period: string;
  duration: string;
  widthPct: number;
  leftPct: number;
  color: string;
  bar: string;
  text: string;
  logo?: string;
  href?: string;
};

export function ExperiencePanel({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const prefersReduced = useReducedMotion();

  const entries: Entry[] = [
    { name: "ITAcademy", period: "2019–2021", duration: t.experience.years3, widthPct: 42.86, leftPct: 0, color: "cyan", bar: "bg-white/[0.07] border-white/20", text: "text-white/70" },
    { name: "Terrand", period: "2021–2023", duration: t.experience.years2, widthPct: 28.57, leftPct: 28.57, color: "violet", bar: "bg-white/[0.07] border-white/20", text: "text-white/70", logo: "/terrand_logo.jpeg", href: "https://www.terrand.app/" },
    { name: "YPF", period: "2023–2024", duration: t.experience.years2, widthPct: 28.57, leftPct: 57.14, color: "fuchsia", bar: "bg-white/[0.07] border-white/20", text: "text-white/70", logo: "/ypf-logo.jpeg", href: "https://www.ypf.com/" },
    { name: "United Airlines", period: "2022–2025", duration: t.experience.years3, widthPct: 42.86, leftPct: 42.86, color: "cyan", bar: "bg-white/[0.07] border-white/20", text: "text-white/70", logo: "/united-logo.jpeg", href: "https://www.united.com/es/us/" },
    { name: "Synapsis", period: `2025–${t.experience.present}`, duration: t.experience.year1, widthPct: 14.29, leftPct: 85.71, color: "violet", bar: "bg-white/[0.07] border-white/20", text: "text-white/70", logo: "/synapsis-logo.png", href: "https://www.synapsis.team" },
  ];

  return (
    <div className="space-y-2 sm:space-y-2.5" role="list" aria-label={t.experience.label}>
      <p className="sr-only">{t.experience.srDescription}</p>
      {entries.map((entry, idx) => {
        const Wrapper = entry.href ? "a" : "div";
        const inner = (
          <>
            {/* Móvil: ficha legible. A 390px un tramo del 14% mide unos 38px,
                donde el logo y la duración se pisaban. */}
            <div className="flex items-center gap-3 sm:hidden">
              {entry.logo ? (
                <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded">
                  <Image src={entry.logo} alt="" fill sizes="28px" className="object-contain" />
                </div>
              ) : (
                <div className="h-7 w-7 shrink-0 rounded bg-white/[0.06]" />
              )}
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-white">{entry.name}</p>
                <p className="text-[0.7rem] text-white/35">{entry.period}</p>
              </div>
              <span className={`shrink-0 text-xs font-medium ${entry.text}`}>{entry.duration}</span>
            </div>

            {/* Desde sm hay ancho suficiente para la línea de tiempo proporcional. */}
            <div className="hidden items-center gap-4 sm:flex">
              <div className="w-32 shrink-0 text-right">
                <p className="text-sm font-semibold text-white">{entry.name}</p>
                <p className="text-[0.7rem] text-white/35">{entry.period}</p>
              </div>
              <div className="relative h-9 flex-1 rounded-lg bg-white/[0.03]">
                <motion.div
                  initial={prefersReduced ? { width: `${entry.widthPct}%` } : { width: 0 }}
                  animate={{ width: `${entry.widthPct}%` }}
                  transition={{ duration: 0.7, delay: idx * 0.08, ease: "easeOut" }}
                  className={`absolute top-0 h-full overflow-hidden rounded-lg border ${entry.bar}`}
                  style={{ left: `${entry.leftPct}%` }}
                >
                  <div className="flex h-full items-center justify-between gap-2 px-3">
                    {entry.logo ? (
                      <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded">
                        <Image src={entry.logo} alt="" fill sizes="24px" className="object-contain" />
                      </div>
                    ) : (
                      <span />
                    )}
                    <span className={`truncate text-xs font-medium ${entry.text}`}>
                      {entry.duration}
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </>
        );

        return (
          <div
            key={entry.name}
            role="listitem"
            className="rounded-lg transition hover:bg-white/[0.03] sm:hover:bg-transparent"
          >
            {entry.href ? (
              <Wrapper href={entry.href} target="_blank" rel="noreferrer" className="block p-1 sm:p-0">
                {inner}
              </Wrapper>
            ) : (
              <div className="p-1 sm:p-0">{inner}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
