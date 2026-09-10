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
    { name: "ITAcademy", period: "2019–2021", duration: t.experience.years3, widthPct: 42.86, leftPct: 0, color: "cyan", bar: "bg-cyan-400/10 border-cyan-400/30", text: "text-cyan-300" },
    { name: "Terrand", period: "2021–2023", duration: t.experience.years2, widthPct: 28.57, leftPct: 28.57, color: "violet", bar: "bg-violet-400/10 border-violet-400/30", text: "text-violet-300", logo: "/terrand_logo.jpeg", href: "https://www.terrand.app/" },
    { name: "YPF", period: "2023–2024", duration: t.experience.years2, widthPct: 28.57, leftPct: 57.14, color: "fuchsia", bar: "bg-fuchsia-400/10 border-fuchsia-400/30", text: "text-fuchsia-300", logo: "/ypf-logo.jpeg", href: "https://www.ypf.com/" },
    { name: "United Airlines", period: "2022–2025", duration: t.experience.years3, widthPct: 42.86, leftPct: 42.86, color: "cyan", bar: "bg-cyan-400/10 border-cyan-400/30", text: "text-cyan-300", logo: "/united-logo.jpeg", href: "https://www.united.com/es/us/" },
    { name: "Synapsis", period: `2025–${t.experience.present}`, duration: t.experience.year1, widthPct: 14.29, leftPct: 85.71, color: "violet", bar: "bg-violet-400/10 border-violet-400/30", text: "text-violet-300", logo: "/synapsis-logo.png", href: "https://www.synapsis.team" },
  ];

  return (
    <div className="space-y-2.5" role="list" aria-label={t.experience.label}>
      <p className="sr-only">{t.experience.srDescription}</p>
      {entries.map((entry, idx) => {
        const Wrapper = entry.href ? "a" : "div";
        return (
          <div key={entry.name} className="flex items-center gap-3 sm:gap-4" role="listitem">
            <div className="w-20 shrink-0 text-right sm:w-32">
              <p className="text-xs font-semibold text-white sm:text-sm">{entry.name}</p>
              <p className="text-[0.62rem] text-white/35 sm:text-[0.7rem]">{entry.period}</p>
            </div>
            <div className="relative h-8 flex-1 rounded-lg bg-white/[0.03] sm:h-9">
              <Wrapper
                {...(entry.href ? { href: entry.href, target: "_blank", rel: "noreferrer" } : {})}
                className="absolute inset-0 block"
              >
                <motion.div
                  initial={prefersReduced ? { width: `${entry.widthPct}%` } : { width: 0 }}
                  animate={{ width: `${entry.widthPct}%` }}
                  transition={{ duration: 0.7, delay: idx * 0.08, ease: "easeOut" }}
                  className={`absolute top-0 h-full rounded-lg border ${entry.bar}`}
                  style={{ left: `${entry.leftPct}%` }}
                >
                  <div className="flex h-full items-center justify-between px-2.5 sm:px-3">
                    {entry.logo ? (
                      <div className="relative h-5 w-5 shrink-0 overflow-hidden rounded sm:h-6 sm:w-6">
                        <Image src={entry.logo} alt={entry.name} fill sizes="24px" className="object-contain" />
                      </div>
                    ) : (
                      <span />
                    )}
                    <span className={`text-[0.65rem] font-medium sm:text-xs ${entry.text}`}>{entry.duration}</span>
                  </div>
                </motion.div>
              </Wrapper>
            </div>
          </div>
        );
      })}
    </div>
  );
}
