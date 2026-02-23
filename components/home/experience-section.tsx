"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ScrollAnimation } from "./scroll-animation";
import { getDictionary, type Locale } from "@/lib/dictionaries";

export function ExperienceSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const prefersReduced = useReducedMotion();

  return (
    <section id="experiencia" className="mx-auto max-w-6xl px-6 pb-24 overflow-visible">
      <ScrollAnimation>
        <div className="space-y-8 overflow-visible">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              {t.experience.label}
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">{t.experience.title}</h2>
            <p className="sr-only">{t.experience.srDescription}</p>
          </div>
          <div className="space-y-3 pt-4" role="list" aria-label={t.experience.label}>
            <ScrollAnimation delay={0}>
              <div className="flex items-center gap-4 group" role="listitem">
                <div className="w-28 shrink-0 text-right md:w-36">
                  <p className="text-sm font-semibold text-neutral-100">ITAcademy</p>
                  <p className="text-[0.7rem] text-neutral-500">2019–2021</p>
                </div>
                <div className="relative h-10 flex-1 rounded-lg bg-neutral-900/50">
                  <motion.div
                    initial={prefersReduced ? { width: "42.86%" } : { width: 0 }}
                    whileInView={{ width: "42.86%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute top-0 h-full rounded-lg bg-emerald-500/20 border border-emerald-500/30 transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-emerald-500/20"
                    style={{ left: "0%" }}
                  >
                    <div className="absolute left-0 top-0 h-full w-1 rounded-l-lg bg-emerald-500" />
                    <div className="flex h-full items-center justify-end px-3">
                      <span className="text-xs font-medium text-emerald-400">{t.experience.years3}</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.1}>
              <a href="https://www.terrand.app/" target="_blank" rel="noreferrer" className="block">
                <div className="flex items-center gap-4 group" role="listitem">
                  <div className="w-28 shrink-0 text-right md:w-36">
                    <p className="text-sm font-semibold text-neutral-100">Terrand</p>
                    <p className="text-[0.7rem] text-neutral-500">2021–2023</p>
                  </div>
                  <div className="relative h-10 flex-1 rounded-lg bg-neutral-900/50">
                    <motion.div
                      initial={prefersReduced ? { width: "28.57%" } : { width: 0 }}
                      whileInView={{ width: "28.57%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                      className="absolute top-0 h-full rounded-lg bg-sky-500/20 border border-sky-500/30 transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-sky-500/20"
                      style={{ left: "28.57%" }}
                    >
                      <div className="absolute left-0 top-0 h-full w-1 rounded-l-lg bg-sky-500" />
                      <div className="flex h-full items-center justify-between px-3">
                        <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded">
                          <Image src="/terrand_logo.jpeg" alt="Terrand" fill sizes="24px" className="object-contain" />
                        </div>
                        <span className="text-xs font-medium text-sky-400">{t.experience.years2}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </a>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
              <a href="https://www.ypf.com/" target="_blank" rel="noreferrer" className="block">
                <div className="flex items-center gap-4 group" role="listitem">
                  <div className="w-28 shrink-0 text-right md:w-36">
                    <p className="text-sm font-semibold text-neutral-100">YPF</p>
                    <p className="text-[0.7rem] text-neutral-500">2023–2024</p>
                  </div>
                  <div className="relative h-10 flex-1 rounded-lg bg-neutral-900/50">
                    <motion.div
                      initial={prefersReduced ? { width: "28.57%" } : { width: 0 }}
                      whileInView={{ width: "28.57%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                      className="absolute top-0 h-full rounded-lg bg-purple-500/20 border border-purple-500/30 transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/20"
                      style={{ left: "57.14%" }}
                    >
                      <div className="absolute left-0 top-0 h-full w-1 rounded-l-lg bg-purple-500" />
                      <div className="flex h-full items-center justify-between px-3">
                        <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded">
                          <Image src="/ypf-logo.jpeg" alt="YPF" fill sizes="24px" className="object-contain" />
                        </div>
                        <span className="text-xs font-medium text-purple-400">{t.experience.years2}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </a>
            </ScrollAnimation>
            <ScrollAnimation delay={0.3}>
              <a href="https://www.united.com/es/us/" target="_blank" rel="noreferrer" className="block">
                <div className="flex items-center gap-4 group" role="listitem">
                  <div className="w-28 shrink-0 text-right md:w-36">
                    <p className="text-sm font-semibold text-neutral-100">United Airlines</p>
                    <p className="text-[0.7rem] text-neutral-500">2022–2025</p>
                  </div>
                  <div className="relative h-10 flex-1 rounded-lg bg-neutral-900/50">
                    <motion.div
                      initial={prefersReduced ? { width: "42.86%" } : { width: 0 }}
                      whileInView={{ width: "42.86%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
                      className="absolute top-0 h-full rounded-lg bg-blue-500/20 border border-blue-500/30 transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20"
                      style={{ left: "42.86%" }}
                    >
                      <div className="absolute left-0 top-0 h-full w-1 rounded-l-lg bg-blue-500" />
                      <div className="flex h-full items-center justify-between px-3">
                        <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded">
                          <Image src="/united-logo.jpeg" alt="United Airlines" fill sizes="24px" className="object-contain" />
                        </div>
                        <span className="text-xs font-medium text-blue-400">{t.experience.years3}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </a>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <a href="https://www.synapsis.team" target="_blank" rel="noreferrer" className="block">
                <div className="flex items-center gap-4 group" role="listitem">
                  <div className="w-28 shrink-0 text-right md:w-36">
                    <p className="text-sm font-semibold text-neutral-100">Synapsis</p>
                    <p className="text-[0.7rem] text-neutral-500">2025–{t.experience.present}</p>
                  </div>
                  <div className="relative h-10 flex-1 rounded-lg bg-neutral-900/50">
                    <motion.div
                      initial={prefersReduced ? { width: "14.29%" } : { width: 0 }}
                      whileInView={{ width: "14.29%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                      className="absolute top-0 h-full rounded-lg bg-amber-500/20 border border-amber-500/30 transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-amber-500/20"
                      style={{ left: "85.71%" }}
                    >
                      <div className="absolute left-0 top-0 h-full w-1 rounded-l-lg bg-amber-500" />
                      <div className="flex h-full items-center justify-between px-3">
                        <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded">
                          <Image src="/synapsis-logo.png" alt="Synapsis" fill sizes="24px" className="object-contain" />
                        </div>
                        <span className="text-xs font-medium text-amber-400">{t.experience.year1}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </a>
            </ScrollAnimation>
            <div className="flex items-center gap-4 pt-2" aria-hidden="true">
              <div className="w-28 shrink-0 md:w-36" />
              <div className="relative flex-1">
                <div className="flex justify-between text-[0.65rem] text-neutral-600">
                  {[2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026].map((year) => (
                    <span key={year}>{year}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
