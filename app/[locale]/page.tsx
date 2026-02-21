"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useParams, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Globe2,
  Instagram,
  Linkedin,
  Mail,
  Code,
  MapPin,
  MessageCircle,
  Calendar,
  Terminal,
  Layers,
  Palette,
  ArrowUpRight,
  GraduationCap,
  Menu,
  X,
  ChevronUp,
} from "lucide-react";
import { projects } from "@/lib/projects";
import type { Project } from "@/lib/projects";
import { getDictionary, type Locale } from "@/lib/dictionaries";

const colorMap = {
  emerald: {
    border: "hover:border-emerald-500/40",
    shadow: "hover:shadow-emerald-500/5",
    gradient: "from-emerald-500/[0.03]",
    iconBorder: "group-hover:border-emerald-500/50 group-hover:text-emerald-400",
  },
  sky: {
    border: "hover:border-sky-500/40",
    shadow: "hover:shadow-sky-500/5",
    gradient: "from-sky-500/[0.03]",
    iconBorder: "group-hover:border-sky-500/50 group-hover:text-sky-400",
  },
  violet: {
    border: "hover:border-violet-500/40",
    shadow: "hover:shadow-violet-500/5",
    gradient: "from-violet-500/[0.03]",
    iconBorder: "group-hover:border-violet-500/50 group-hover:text-violet-400",
  },
  amber: {
    border: "hover:border-amber-500/40",
    shadow: "hover:shadow-amber-500/5",
    gradient: "from-amber-500/[0.03]",
    iconBorder: "group-hover:border-amber-500/50 group-hover:text-amber-400",
  },
  rose: {
    border: "hover:border-rose-500/40",
    shadow: "hover:shadow-rose-500/5",
    gradient: "from-rose-500/[0.03]",
    iconBorder: "group-hover:border-rose-500/50 group-hover:text-rose-400",
  },
};

const iconColors: Record<Project["color"], string> = {
  emerald: "text-emerald-400",
  sky: "text-sky-400",
  violet: "text-violet-400",
  amber: "text-amber-400",
  rose: "text-rose-400",
};

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

function ScrollAnimation({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(end);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView || hasAnimated) return;
    setHasAnimated(true);
    setCount(0);
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, hasAnimated, end, duration]);

  return <span ref={ref}>{count}</span>;
}

function switchLocale(currentLocale: string) {
  const next = currentLocale === "es" ? "en" : "es";
  document.cookie = `locale=${next};path=/;max-age=31536000`;
  return next;
}

export default function Home() {
  const { locale } = useParams() as { locale: string };
  const t = getDictionary(locale as Locale);
  const otherLocale = locale === "es" ? "en" : "es";

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
  };

  const yearsOfExperience = new Date().getFullYear() - 2020;

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <a
        href="#trabajos"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-emerald-500 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-neutral-950"
      >
        {t.nav.skipToContent}
      </a>

      {/* NAV */}
      <header className="sticky top-0 z-30 border-b border-neutral-900/60 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium tracking-[0.2em] text-neutral-400 uppercase">
              Lucas Riera
            </span>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              Software Developer
            </span>
            <span className="hidden items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-900/60 px-2.5 py-1 text-xs text-neutral-400 md:flex">
              <MapPin className="h-3 w-3" />
              {t.nav.location}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <nav aria-label={t.nav.mainNav} className="hidden gap-4 text-sm text-neutral-400 md:flex">
              <button onClick={() => scrollToId("trabajos")} className="rounded-md px-1 transition hover:text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/70">
                {t.nav.trabajos}
              </button>
              <button onClick={() => scrollToId("experiencia")} className="rounded-md px-1 transition hover:text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/70">
                {t.nav.experiencia}
              </button>
              <button onClick={() => scrollToId("stack")} className="rounded-md px-1 transition hover:text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/70">
                {t.nav.stack}
              </button>
              <Link href={`/${locale}/proyectos`} className="rounded-md px-1 transition hover:text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/70">
                {t.nav.proyectos}
              </Link>
              <button onClick={() => scrollToId("contacto")} className="rounded-md px-1 transition hover:text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/70">
                {t.nav.contacto}
              </button>
            </nav>
            <Link
              href={`/${otherLocale}`}
              onClick={() => { document.cookie = `locale=${otherLocale};path=/;max-age=31536000`; }}
              className="rounded-md border border-neutral-800 bg-neutral-900/60 px-2.5 py-1 text-xs font-medium text-neutral-400 transition hover:border-neutral-700 hover:text-neutral-100"
            >
              {otherLocale.toUpperCase()}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden rounded-lg border border-neutral-800 bg-neutral-900/60 p-2 text-neutral-400 transition hover:text-neutral-100"
              aria-label={t.nav.openMenu}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.nav
            aria-label={t.nav.mobileNav}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-1 border-t border-neutral-900/60 bg-neutral-950/95 px-6 pb-4 pt-2 text-sm md:hidden"
          >
            <button onClick={() => scrollToId("trabajos")} className="rounded-lg px-3 py-2.5 text-left text-neutral-300 transition hover:bg-neutral-900 hover:text-neutral-100">{t.nav.trabajos}</button>
            <button onClick={() => scrollToId("experiencia")} className="rounded-lg px-3 py-2.5 text-left text-neutral-300 transition hover:bg-neutral-900 hover:text-neutral-100">{t.nav.experiencia}</button>
            <button onClick={() => scrollToId("stack")} className="rounded-lg px-3 py-2.5 text-left text-neutral-300 transition hover:bg-neutral-900 hover:text-neutral-100">{t.nav.stack}</button>
            <Link href={`/${locale}/proyectos`} onClick={() => setMobileMenuOpen(false)} className="rounded-lg px-3 py-2.5 text-neutral-300 transition hover:bg-neutral-900 hover:text-neutral-100">{t.nav.proyectos}</Link>
            <button onClick={() => scrollToId("contacto")} className="rounded-lg px-3 py-2.5 text-left text-neutral-300 transition hover:bg-neutral-900 hover:text-neutral-100">{t.nav.contacto}</button>
          </motion.nav>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.08),transparent)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-20 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:pt-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-8">
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
              <Button size="lg" onClick={() => scrollToId("trabajos")}>{t.hero.ctaPrimary}</Button>
              <Button variant="outline" size="lg" onClick={() => scrollToId("contacto")} className="!border-neutral-700 !bg-transparent !text-neutral-100 hover:!bg-neutral-800 hover:!text-neutral-50">
                {t.hero.ctaSecondary}
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-400">
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">{t.hero.presence}</span>
              <a href="https://github.com/lucasezequielriera" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 hover:border-neutral-600 hover:text-neutral-100">
                <Code className="h-3.5 w-3.5" /> GitHub
              </a>
              <a href="https://linkedin.com/in/lucasezequielriera" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 hover:border-neutral-600 hover:text-neutral-100">
                <Linkedin className="h-3.5 w-3.5" /> LinkedIn
              </a>
              <a href="https://instagram.com/lucasezequielriera" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 hover:border-neutral-600 hover:text-neutral-100">
                <Instagram className="h-3.5 w-3.5" /> Instagram
              </a>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ duration: 0.7, delay: 0.1 }} className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60">
              <video src="/lucas.mov" autoPlay loop muted playsInline aria-label={t.hero.videoAlt} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
            </div>
            <Card className="bg-neutral-900/60 border-neutral-800">
              <CardContent className="p-6">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 mb-4">{t.hero.currently}</p>
                <div className="space-y-3 text-sm text-neutral-300">
                  <div className="flex items-start gap-3"><Terminal className="mt-0.5 h-4 w-4 text-emerald-400" /><span>{t.hero.activity1}</span></div>
                  <div className="flex items-start gap-3"><Layers className="mt-0.5 h-4 w-4 text-sky-400" /><span>{t.hero.activity2}</span></div>
                  <div className="flex items-start gap-3"><Palette className="mt-0.5 h-4 w-4 text-purple-400" /><span>{t.hero.activity3}</span></div>
                  <div className="flex items-start gap-3"><GraduationCap className="mt-0.5 h-4 w-4 text-amber-400" /><span>{t.hero.activity4}</span></div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3 border-t border-neutral-800 pt-4 text-xs text-neutral-400">
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.18em] text-neutral-500">{t.hero.statCode}</p>
                    <p className="mt-1 text-base font-semibold text-neutral-100"><AnimatedCounter end={yearsOfExperience} />{t.hero.statYears}</p>
                  </div>
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.18em] text-neutral-500">{t.hero.statProducts}</p>
                    <p className="mt-1 text-base font-semibold text-neutral-100"><AnimatedCounter end={projects.length} />{t.hero.statCreated}</p>
                  </div>
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.18em] text-neutral-500">{t.hero.statCountries}</p>
                    <p className="mt-1 text-base font-semibold text-neutral-100"><AnimatedCounter end={16} />{t.hero.statLived}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* TRABAJOS */}
      <section id="trabajos" className="mx-auto max-w-6xl px-6 pb-24 space-y-10">
        <ScrollAnimation>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">{t.works.label}</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">{t.works.title}</h2>
            <p className="mt-3 max-w-2xl text-sm text-neutral-400">{t.works.description}</p>
          </div>
        </ScrollAnimation>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, idx) => {
            const colors = colorMap[project.color];
            const IconComponent = project.icon === "graduation-cap" ? GraduationCap : project.icon === "palette" ? Palette : null;
            return (
              <ScrollAnimation key={project.slug} delay={idx * 0.05}>
                <Link href={`/${locale}/proyectos/${project.slug}`} className="block h-full">
                  <Card className={`group relative h-full overflow-hidden border-neutral-800 bg-neutral-900/70 transition-all duration-500 ${colors.border} hover:shadow-2xl ${colors.shadow}`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                    <CardContent className="relative flex h-full flex-col justify-between space-y-5 p-6">
                      <div className="flex items-start justify-between">
                        {project.logo ? (
                          <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
                            <Image src={project.logo} alt={project.name} fill sizes="48px" className="object-contain p-1.5" />
                          </div>
                        ) : IconComponent ? (
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900">
                            <IconComponent className={`h-6 w-6 ${iconColors[project.color]}`} />
                          </div>
                        ) : null}
                        <div className={`rounded-full border border-neutral-800 bg-neutral-900/80 p-2 transition ${colors.iconBorder}`}>
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-neutral-100">{project.name}</h3>
                        <p className="mt-2 text-sm text-neutral-400">{project.longDescription[locale as Locale]}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-neutral-800 bg-neutral-950/60 px-2.5 py-1 text-xs text-neutral-400">{tag}</span>
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
                <button onClick={() => scrollToId("contacto")} className="text-sm font-medium text-emerald-400 transition hover:text-emerald-300">
                  {t.works.ctaButton} &rarr;
                </button>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section id="experiencia" className="mx-auto max-w-6xl px-6 pb-24 overflow-visible">
        <ScrollAnimation>
          <div className="space-y-8 overflow-visible">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">{t.experience.label}</p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">{t.experience.title}</h2>
            </div>
            <div className="space-y-3 pt-4">
              <ScrollAnimation delay={0}>
                <div className="flex items-center gap-4 group">
                  <div className="w-28 shrink-0 text-right md:w-36">
                    <p className="text-sm font-semibold text-neutral-100">ITAcademy</p>
                    <p className="text-[0.7rem] text-neutral-500">2019–2021</p>
                  </div>
                  <div className="relative h-10 flex-1 rounded-lg bg-neutral-900/50">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "42.86%" }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="absolute top-0 h-full rounded-lg bg-emerald-500/20 border border-emerald-500/30 transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-emerald-500/20" style={{ left: "0%" }}>
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
                  <div className="flex items-center gap-4 group">
                    <div className="w-28 shrink-0 text-right md:w-36">
                      <p className="text-sm font-semibold text-neutral-100">Terrand</p>
                      <p className="text-[0.7rem] text-neutral-500">2021–2023</p>
                    </div>
                    <div className="relative h-10 flex-1 rounded-lg bg-neutral-900/50">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: "28.57%" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }} className="absolute top-0 h-full rounded-lg bg-sky-500/20 border border-sky-500/30 transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-sky-500/20" style={{ left: "28.57%" }}>
                        <div className="absolute left-0 top-0 h-full w-1 rounded-l-lg bg-sky-500" />
                        <div className="flex h-full items-center justify-between px-3">
                          <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded"><Image src="/terrand_logo.jpeg" alt="Terrand" fill sizes="24px" className="object-contain" /></div>
                          <span className="text-xs font-medium text-sky-400">{t.experience.years2}</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </a>
              </ScrollAnimation>
              <ScrollAnimation delay={0.2}>
                <a href="https://www.ypf.com/" target="_blank" rel="noreferrer" className="block">
                  <div className="flex items-center gap-4 group">
                    <div className="w-28 shrink-0 text-right md:w-36">
                      <p className="text-sm font-semibold text-neutral-100">YPF</p>
                      <p className="text-[0.7rem] text-neutral-500">2023–2024</p>
                    </div>
                    <div className="relative h-10 flex-1 rounded-lg bg-neutral-900/50">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: "28.57%" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="absolute top-0 h-full rounded-lg bg-purple-500/20 border border-purple-500/30 transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/20" style={{ left: "57.14%" }}>
                        <div className="absolute left-0 top-0 h-full w-1 rounded-l-lg bg-purple-500" />
                        <div className="flex h-full items-center justify-between px-3">
                          <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded"><Image src="/ypf-logo.jpeg" alt="YPF" fill sizes="24px" className="object-contain" /></div>
                          <span className="text-xs font-medium text-purple-400">{t.experience.years2}</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </a>
              </ScrollAnimation>
              <ScrollAnimation delay={0.3}>
                <a href="https://www.united.com/es/us/" target="_blank" rel="noreferrer" className="block">
                  <div className="flex items-center gap-4 group">
                    <div className="w-28 shrink-0 text-right md:w-36">
                      <p className="text-sm font-semibold text-neutral-100">United Airlines</p>
                      <p className="text-[0.7rem] text-neutral-500">2022–2025</p>
                    </div>
                    <div className="relative h-10 flex-1 rounded-lg bg-neutral-900/50">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: "42.86%" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }} className="absolute top-0 h-full rounded-lg bg-blue-500/20 border border-blue-500/30 transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20" style={{ left: "42.86%" }}>
                        <div className="absolute left-0 top-0 h-full w-1 rounded-l-lg bg-blue-500" />
                        <div className="flex h-full items-center justify-between px-3">
                          <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded"><Image src="/united-logo.jpeg" alt="United Airlines" fill sizes="24px" className="object-contain" /></div>
                          <span className="text-xs font-medium text-blue-400">{t.experience.years3}</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </a>
              </ScrollAnimation>
              <ScrollAnimation delay={0.4}>
                <a href="https://www.synapsis.team" target="_blank" rel="noreferrer" className="block">
                  <div className="flex items-center gap-4 group">
                    <div className="w-28 shrink-0 text-right md:w-36">
                      <p className="text-sm font-semibold text-neutral-100">Synapsis</p>
                      <p className="text-[0.7rem] text-neutral-500">2025–{t.experience.present}</p>
                    </div>
                    <div className="relative h-10 flex-1 rounded-lg bg-neutral-900/50">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: "14.29%" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }} className="absolute top-0 h-full rounded-lg bg-amber-500/20 border border-amber-500/30 transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-amber-500/20" style={{ left: "85.71%" }}>
                        <div className="absolute left-0 top-0 h-full w-1 rounded-l-lg bg-amber-500" />
                        <div className="flex h-full items-center justify-between px-3">
                          <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded"><Image src="/synapsis-logo.png" alt="Synapsis" fill sizes="24px" className="object-contain" /></div>
                          <span className="text-xs font-medium text-amber-400">{t.experience.year1}</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </a>
              </ScrollAnimation>
              <div className="flex items-center gap-4 pt-2">
                <div className="w-28 shrink-0 md:w-36" />
                <div className="relative flex-1">
                  <div className="flex justify-between text-[0.65rem] text-neutral-600">
                    {[2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026].map((year) => (<span key={year}>{year}</span>))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* STACK */}
      <section id="stack" className="mx-auto max-w-6xl px-6 pb-24">
        <ScrollAnimation>
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">{t.stack.label}</p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">{t.stack.title}</h2>
              <p className="mt-3 max-w-2xl text-sm text-neutral-400">{t.stack.description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {["HTML5", "CSS3", "SASS", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Redux", "Vite", "Express", "Node.js", "GraphQL", "Tailwind CSS", "Framer Motion", "AntDesign", "Webflow", "PostgreSQL", "MongoDB", "Firebase", "Supabase", "Azure", "Docker", "Vercel", "Git", "GitHub Actions", "Jest", "React Testing Library", "Storybook", "Figma", "Zeplin", "Jira", "Cursor", "AI", "CMS", "Teams", "Slack"].map((tech, idx) => (
                <motion.div key={tech} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.05, duration: 0.3 }} className="group relative">
                  <div className="rounded-full border border-neutral-800 bg-gradient-to-r from-neutral-900/80 to-neutral-800/80 px-4 py-2 text-sm text-neutral-300 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50 hover:bg-gradient-to-r hover:from-emerald-950/30 hover:to-neutral-900/80 hover:text-emerald-300 hover:shadow-lg hover:shadow-emerald-500/10">
                    {tech}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* SERVICIOS */}
      <section className="mx-auto max-w-6xl px-6 pb-24 space-y-10">
        <ScrollAnimation>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">{t.services.label}</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">{t.services.title}</h2>
            <p className="mt-3 max-w-2xl text-sm text-neutral-400">{t.services.description}</p>
          </div>
        </ScrollAnimation>
        <div className="grid gap-6 md:grid-cols-3">
          <ScrollAnimation delay={0}>
            <Card className="group h-full bg-neutral-900/70 border-neutral-800 transition-all duration-300 hover:border-emerald-500/50 hover:bg-neutral-900/90 hover:shadow-lg hover:shadow-emerald-500/10">
              <CardContent className="space-y-4 p-6">
                <div className="rounded-lg bg-emerald-500/10 p-3 w-fit transition-transform duration-300 group-hover:scale-110"><Terminal className="h-6 w-6 text-emerald-400" /></div>
                <h3 className="text-xl font-semibold text-neutral-100">{t.services.saasTitle}</h3>
                <p className="text-sm text-neutral-400">{t.services.saasDescription}</p>
              </CardContent>
            </Card>
          </ScrollAnimation>
          <ScrollAnimation delay={0.1}>
            <Card className="group h-full bg-neutral-900/70 border-neutral-800 transition-all duration-300 hover:border-sky-500/50 hover:bg-neutral-900/90 hover:shadow-lg hover:shadow-sky-500/10">
              <CardContent className="space-y-4 p-6">
                <div className="rounded-lg bg-sky-500/10 p-3 w-fit transition-transform duration-300 group-hover:scale-110"><Layers className="h-6 w-6 text-sky-400" /></div>
                <h3 className="text-xl font-semibold text-neutral-100">{t.services.systemsTitle}</h3>
                <p className="text-sm text-neutral-400">{t.services.systemsDescription}</p>
              </CardContent>
            </Card>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <Card className="group h-full bg-neutral-900/70 border-neutral-800 transition-all duration-300 hover:border-purple-500/50 hover:bg-neutral-900/90 hover:shadow-lg hover:shadow-purple-500/10">
              <CardContent className="space-y-4 p-6">
                <div className="rounded-lg bg-purple-500/10 p-3 w-fit transition-transform duration-300 group-hover:scale-110"><Palette className="h-6 w-6 text-purple-400" /></div>
                <h3 className="text-xl font-semibold text-neutral-100">{t.services.websTitle}</h3>
                <p className="text-sm text-neutral-400">{t.services.websDescription}</p>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="mx-auto max-w-6xl px-6 pb-24 space-y-10">
        <ScrollAnimation>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">{t.testimonials.label}</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">{t.testimonials.title}</h2>
          </div>
        </ScrollAnimation>
        <div className="grid gap-6 md:grid-cols-2">
          <ScrollAnimation delay={0}>
            <Card className="h-full border-neutral-800 bg-neutral-900/70">
              <CardContent className="flex h-full flex-col justify-between space-y-6 p-6">
                <div className="space-y-4">
                  <div className="flex gap-1 text-emerald-400">
                    {[...Array(5)].map((_, i) => (<svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}
                  </div>
                  <blockquote className="text-sm leading-relaxed text-neutral-300">
                    &ldquo;Lucas is a highly capable developer and analyst who consistently demonstrated strong leadership and deep technical insight regarding best practices. He excels at troubleshooting complex issues and effectively conveying clear timelines to business partners. His most valuable analytical skill is his ability to discern true urgency in high-pressure environments, allowing him to successfully prioritize critical efforts.&rdquo;
                  </blockquote>
                  <p className="text-xs text-neutral-500">{t.testimonials.maryContext}</p>
                </div>
                <div className="flex items-center gap-3 border-t border-neutral-800 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-sm font-semibold text-blue-400">MS</div>
                  <div>
                    <p className="text-sm font-medium text-neutral-100">Mary Sanchez</p>
                    <p className="text-xs text-neutral-500">{t.testimonials.maryRole}</p>
                    <p className="text-[0.65rem] text-neutral-600">{t.testimonials.maryRelation}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
          <ScrollAnimation delay={0.1}>
            <Card className="h-full border-neutral-800 bg-neutral-900/70">
              <CardContent className="flex h-full flex-col justify-between space-y-6 p-6">
                <div className="space-y-4">
                  <div className="flex gap-1 text-emerald-400">
                    {[...Array(5)].map((_, i) => (<svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}
                  </div>
                  <blockquote className="text-sm leading-relaxed text-neutral-300">
                    &ldquo;I strongly recommend Lucas based on our collaboration across multiple projects. His excellent communication skills, collaborative mindset, and meticulous attention to detail consistently lead to positive and successful outcomes.&rdquo;
                  </blockquote>
                </div>
                <div className="flex items-center gap-3 border-t border-neutral-800 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-sm font-semibold text-emerald-400">NS</div>
                  <div>
                    <p className="text-sm font-medium text-neutral-100">Nicolas Soroka</p>
                    <p className="text-xs text-neutral-500">{t.testimonials.nicolasRole}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="mx-auto max-w-6xl px-6 pb-28 pt-10">
        <ScrollAnimation>
          <div className="space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold md:text-4xl">{t.contact.title}</h2>
              <p className="mx-auto max-w-2xl text-neutral-400">{t.contact.description}</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSc7Zeogt62nWmHnScN2uCRYPmCe0hmSbjxI_N4XEXZV5bMKNQ/viewform" target="_blank" rel="noreferrer" className="group block">
                <Card className="border-neutral-800 bg-neutral-900/60 transition-all hover:border-neutral-700 hover:bg-neutral-900/80">
                  <CardContent className="p-6"><div className="flex flex-col items-center gap-3 text-center"><div className="rounded-full border border-neutral-800 bg-neutral-950 p-3 transition-all group-hover:border-neutral-700"><Mail className="h-5 w-5 text-neutral-300" /></div><div><p className="font-medium text-neutral-100">{t.contact.form}</p><p className="mt-1 text-xs text-neutral-400">{t.contact.formSub}</p></div></div></CardContent>
                </Card>
              </a>
              <a href="https://wa.me/34627043397" target="_blank" rel="noreferrer" className="group block">
                <Card className="border-green-900/50 bg-green-950/20 transition-all hover:border-green-800/50 hover:bg-green-950/30">
                  <CardContent className="p-6"><div className="flex flex-col items-center gap-3 text-center"><div className="rounded-full border border-green-800/50 bg-green-950/40 p-3 transition-all group-hover:border-green-700/50"><MessageCircle className="h-5 w-5 text-green-400" /></div><div><p className="font-medium text-green-300">WhatsApp</p><p className="mt-1 text-xs text-green-400/70">{t.contact.whatsappSub}</p></div></div></CardContent>
                </Card>
              </a>
              <a href="https://calendly.com/lucasezequielriera-phfi/30min" target="_blank" rel="noreferrer" className="group block">
                <Card className="border-blue-900/50 bg-blue-950/20 transition-all hover:border-blue-800/50 hover:bg-blue-950/30">
                  <CardContent className="p-6"><div className="flex flex-col items-center gap-3 text-center"><div className="rounded-full border border-blue-800/50 bg-blue-950/40 p-3 transition-all group-hover:border-blue-700/50"><Calendar className="h-5 w-5 text-blue-400" /></div><div><p className="font-medium text-blue-300">{t.contact.scheduleCall}</p><p className="mt-1 text-xs text-blue-400/70">{t.contact.minutes}</p></div></div></CardContent>
                </Card>
              </a>
              <a href="https://instagram.com/lucasezequielriera" target="_blank" rel="noreferrer" className="group block">
                <Card className="border-neutral-800 bg-neutral-900/60 transition-all hover:border-neutral-700 hover:bg-neutral-900/80">
                  <CardContent className="p-6"><div className="flex flex-col items-center gap-3 text-center"><div className="rounded-full border border-neutral-800 bg-neutral-950 p-3 transition-all group-hover:border-neutral-700"><Instagram className="h-5 w-5 text-neutral-300" /></div><div><p className="font-medium text-neutral-100">Instagram</p><p className="mt-1 text-xs text-neutral-400">@lucasezequielriera</p></div></div></CardContent>
                </Card>
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      <motion.button initial={{ opacity: 0, scale: 0.8 }} animate={showScrollTop ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} transition={{ duration: 0.2 }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 right-6 z-40 rounded-full border border-neutral-800 bg-neutral-900/90 p-3 text-neutral-400 shadow-lg backdrop-blur transition hover:border-emerald-500/50 hover:text-emerald-400" aria-label={t.scrollTop} style={{ pointerEvents: showScrollTop ? "auto" : "none" }}>
        <ChevronUp className="h-5 w-5" />
      </motion.button>

      <footer className="border-t border-neutral-900/80 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-sm text-neutral-500 md:flex-row">
          <p>{t.footer.rights}</p>
          <p className="text-neutral-600 text-center md:text-right">{t.footer.madeBy}</p>
        </div>
      </footer>
    </main>
  );
}
