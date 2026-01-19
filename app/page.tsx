"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Activity,
  Dumbbell,
  Target,
  Clock,
  Globe2,
  Instagram,
  Linkedin,
  Mail,
  Code,
  ExternalLink,
  Zap,
  TrendingUp,
  MapPin,
  Video,
  Users,
  CheckCircle2,
  BarChart3,
  MessageCircle,
  Calendar,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

// Componente para animaciones al hacer scroll
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

// Componente de contador animado
function AnimatedCounter({ end, duration = 2000, prefix = "", suffix = "" }: { end: number; duration?: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export default function Home() {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* TOP NAV */}
      <header className="sticky top-0 z-30 border-b border-neutral-900/60 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium tracking-[0.2em] text-neutral-400 uppercase">
              Lucas Riera
            </span>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              Disciplina · Salud · Código
            </span>
            <span className="hidden items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-900/60 px-2.5 py-1 text-xs text-neutral-400 md:flex">
              <MapPin className="h-3 w-3" />
              España
            </span>
          </div>
          <nav className="hidden gap-4 text-sm text-neutral-400 md:flex">
            <button
              onClick={() => scrollToId("filosofia")}
              className="transition hover:text-neutral-100"
            >
              Filosofía
            </button>
            <button
              onClick={() => scrollToId("pilares")}
              className="transition hover:text-neutral-100"
            >
              Pilares
            </button>
            <button
              onClick={() => scrollToId("experiencia")}
              className="transition hover:text-neutral-100"
            >
              Experiencia
            </button>
            <button
              onClick={() => scrollToId("contacto")}
              className="transition hover:text-neutral-100"
            >
              Contacto
            </button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-20 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Abierto a colaboraciones intencionales 2026
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-400">
              <MapPin className="h-3 w-3" />
              Actualmente en España
            </div>
          </div>

          <h1 className="text-balance text-4xl font-semibold leading-tight md:text-6xl">
            Disciplina, claridad
            <span className="text-neutral-400">, pasión y trabajo profundo</span>.
          </h1>

          <p className="max-w-xl text-lg text-neutral-300">
            Programador de profesión e influencer de healthy lifestyle.
            Construyo sistemas: en código, en hábitos y en la forma de vivir. Comparto
            mi proceso de disciplina, entrenamiento y nutrición con una comunidad que
            valora la coherencia sobre la motivación vacía. Si lo hago, doy lo mejor de mí;
            si no, prefiero no hacerlo.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" onClick={() => scrollToId("filosofia")}>
              Ver filosofía de vida
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToId("contacto")}
              className="!border-neutral-700 !bg-transparent !text-neutral-100 hover:!bg-neutral-800 hover:!text-neutral-50"
            >
              Proponer colaboración
            </Button>
            <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-400">
              <span className="h-8 w-px bg-neutral-800" />
              <span>
                7+ años construyendo interfaces
                <br />
                Compartiendo mi proceso de healthy lifestyle
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-400">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Presencia
            </span>
            <a
              href="https://instagram.com/lucasezequielriera"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 hover:border-neutral-600 hover:text-neutral-100"
            >
              <Instagram className="h-3.5 w-3.5" />
              Instagram
            </a>
            <a
              href="https://tiktok.com/@lucasezequielriera"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 hover:border-neutral-600 hover:text-neutral-100"
            >
              <Video className="h-3.5 w-3.5" />
              TikTok
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 hover:border-neutral-600 hover:text-neutral-100"
            >
              <Linkedin className="h-3.5 w-3.5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/lucasezequielriera"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 hover:border-neutral-600 hover:text-neutral-100"
            >
              <Code className="h-3.5 w-3.5" />
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-4"
        >
          {/* Video personal */}
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60">
            <video
              src="/lucas.mov"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
          </div>

          <Card className="bg-neutral-900/60 border-neutral-800">
            <CardContent className="space-y-5 p-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                Rutina base
              </p>
              <div className="space-y-3 text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 text-neutral-500" />
                  <div>
                    <p className="font-medium text-neutral-100">
                      Mañanas sin distracciones
                    </p>
                    <p className="text-neutral-400">
                      Entrenamiento, journaling y revisión de objetivos antes
                      de abrir redes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Activity className="mt-0.5 h-4 w-4 text-emerald-400" />
                  <div>
                    <p className="font-medium text-neutral-100">
                      Bloques de trabajo profundo
                    </p>
                    <p className="text-neutral-400">
                      Sesiones enfocadas de 90 minutos de código sin
                      interrupciones.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Dumbbell className="mt-0.5 h-4 w-4 text-sky-400" />
                  <div>
                    <p className="font-medium text-neutral-100">
                      Cuerpo alineado con el objetivo
                    </p>
                    <p className="text-neutral-400">
                      Entrenamiento de fuerza y movimiento para sostener el
                      rendimiento. Planifico entrenamientos y nutrición con{" "}
                      <a
                        href="https://www.fitplan-ai.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sky-400 hover:text-sky-300 underline underline-offset-2"
                      >
                        FitPlan AI
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-xs text-neutral-400">
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-neutral-500">
                    Código
                  </p>
                  <p className="mt-1 text-base font-semibold text-neutral-100">
                    <AnimatedCounter end={7} />+ años
                  </p>
                </div>
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-neutral-500">
                    Países
                  </p>
                  <p className="mt-1 text-base font-semibold text-neutral-100">
                    <AnimatedCounter end={16} /> vividos
                  </p>
                </div>
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-neutral-500">
                    Constancia
                  </p>
                  <p className="mt-1 text-base font-semibold text-neutral-100">
                    +<AnimatedCounter end={850} /> días
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* FILOSOFÍA */}
      <section
        id="filosofia"
        className="mx-auto max-w-6xl px-6 pb-12 pt-10 md:pt-4"
      >
        <ScrollAnimation>
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            {/* Columna izquierda: 4 imágenes */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-square overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900">
                <Image
                  src="/gym-park.jpeg"
                  alt="Lucas Riera - Proceso"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900">
                <Image
                  src="/work.jpeg"
                  alt="Lucas Riera - Disciplina"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900">
                <Image
                  src="/food.jpeg"
                  alt="Lucas Riera - Entrenamiento"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900">
                <Image
                  src="/lucas-photo-1.jpeg"
                  alt="Lucas Riera - Trabajo"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Columna derecha: Título y texto */}
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
                  Filosofía
                </p>
                <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
                  No vendo una imagen. Vivo un proceso que disfruto.
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-neutral-300">
                Durante años trabajé como desarrollador frontend en entornos
                exigentes. Viajé, cambié de equipo, cambié de país. Lo único que se
                mantuvo fue la disciplina y las ganas genuinas de mejorar: entrenar,
                aprender, escribir y construir, incluso cuando nadie mira.
              </p>
              <p className="text-neutral-300">
                Hoy mi foco está en mantener una vida ordenada: entrenamiento,
                nutrición, enfoque mental y trabajo honesto, pero también hecha con
                gusto. La misma mentalidad que aplico a mi cuerpo y a mi día a día,
                la aplico al código: si entro, entro en serio y doy lo mejor que tengo.
              </p>
            </div>
        </div>
        </ScrollAnimation>
      </section>

      {/* PILARES */}
      <section
        id="pilares"
        className="mx-auto max-w-6xl px-6 py-24 space-y-10"
      >
        <ScrollAnimation>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
                Pilares
              </p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
                Las tres bases que sostienen todo.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-neutral-400">
              No busco equilibrio perfecto, sino coherencia diaria. Estos pilares
              se reflejan tanto en cómo entreno como en cómo diseño productos
              digitales.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid gap-6 md:grid-cols-3">
          <ScrollAnimation delay={0}>
            <Card className="group bg-neutral-900/70 border-neutral-800 transition-all duration-300 hover:border-emerald-500/50 hover:bg-neutral-900/90 hover:shadow-lg hover:shadow-emerald-500/10">
              <CardContent className="space-y-4 p-6">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  <Target className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-100">Disciplina</h3>
                <p className="text-sm text-neutral-400">
                  Hábitos diarios que sostienen resultados a largo plazo. Nada de
                  explosiones de motivación; solo consistencia medible.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation delay={0.1}>
            <Card className="group bg-neutral-900/70 border-neutral-800 transition-all duration-300 hover:border-sky-500/50 hover:bg-neutral-900/90 hover:shadow-lg hover:shadow-sky-500/10">
              <CardContent className="space-y-4 p-6">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  <Dumbbell className="h-6 w-6 text-sky-400" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-100">Salud</h3>
                <p className="text-sm text-neutral-400">
                  Cuerpo fuerte, mente estable, energía real. Entrenamiento de
                  fuerza, sueño priorizado y nutrición alineada con objetivos.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <Card className="group bg-neutral-900/70 border-neutral-800 transition-all duration-300 hover:border-purple-500/50 hover:bg-neutral-900/90 hover:shadow-lg hover:shadow-purple-500/10">
              <CardContent className="space-y-4 p-6">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  <Activity className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-100">Trabajo profundo</h3>
                <p className="text-sm text-neutral-400">
                  Enfoque sin distracciones para avanzar en lo importante: código,
                  sistemas y decisiones que mueven la aguja.
              </p>
            </CardContent>
          </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* STACK TECNOLÓGICO */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <ScrollAnimation>
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
                Stack
              </p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
                Tecnologías que uso día a día.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "PostgreSQL", "Git"].map((tech, idx) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  className="group relative"
                >
                  <div className="rounded-full border border-neutral-800 bg-gradient-to-r from-neutral-900/80 to-neutral-800/80 px-4 py-2 text-sm text-neutral-300 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50 hover:bg-gradient-to-r hover:from-emerald-950/30 hover:to-neutral-900/80 hover:text-emerald-300 hover:shadow-lg hover:shadow-emerald-500/10">
                    {tech}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* APPS PATROCINADAS */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <ScrollAnimation>
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
                Apps que uso
              </p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
                Herramientas que sostienen mi día a día.
              </h2>
              <p className="mt-3 text-sm text-neutral-400">
                Estas son las apps que uso para entrenar, comer bien y controlar mis finanzas.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <ScrollAnimation delay={0}>
                <Card className="group bg-neutral-900/70 border-neutral-800 transition-all duration-300 hover:border-emerald-500/50 hover:bg-neutral-900/90 hover:shadow-lg hover:shadow-emerald-500/10">
                  <CardContent className="space-y-4 p-6">
                    <div className="relative h-16 w-16 overflow-hidden rounded-xl">
                      <Image
                        src="/webfinancelab-logo.png"
                        alt="WebFinanceLab Logo"
                        fill
                        sizes="64px"
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-100">WebFinanceLab</h3>
                      <p className="mt-1 text-sm text-neutral-400">
                        Control diario de gastos y ganancias. Registro cada movimiento para mantener claridad financiera.
                      </p>
                    </div>
                    <a
                      href="https://www.webfinancelab.com"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-emerald-400 hover:text-emerald-300"
                    >
                      Visitar app
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={0.1}>
                <Card className="group bg-neutral-900/70 border-neutral-800 transition-all duration-300 hover:border-sky-500/50 hover:bg-neutral-900/90 hover:shadow-lg hover:shadow-sky-500/10">
                  <CardContent className="space-y-4 p-6">
                    <div className="relative h-16 w-16 overflow-hidden rounded-xl">
                      <Image
                        src="/fitplan-ai-logo.png"
                        alt="FitPlan AI Logo"
                        fill
                        sizes="64px"
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-100">FitPlan AI</h3>
                      <p className="mt-1 text-sm text-neutral-400">
                        Planificación de entrenamientos y nutrición con IA. Todo mi entrenamiento y comida estructurados aquí.
                      </p>
                    </div>
                    <a
                      href="https://www.fitplan-ai.com"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-sky-400 hover:text-sky-300"
                    >
                      Visitar app
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* EXPERIENCIA / TECH */}
      <section
        id="experiencia"
        className="mx-auto max-w-6xl px-6 pb-24 space-y-10"
      >
        <ScrollAnimation>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
                Profesional
              </p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
                Desarrollo, producto y estilo de vida.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-neutral-400">
              Uniéndose la parte técnica con la parte humana: rendimiento en
              código, rendimiento en la vida diaria.
          </p>
        </div>
        </ScrollAnimation>

        <div className="grid gap-6 md:grid-cols-2">
          <ScrollAnimation delay={0}>
            <Card className="group bg-neutral-900/70 border-neutral-800 transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900/90 hover:shadow-xl">
              <CardContent className="space-y-4 p-6">
                <div className="flex items-center gap-3">
                  <Code className="h-5 w-5 text-emerald-400" />
                  <h3 className="text-xl font-semibold text-neutral-100">Base técnica</h3>
                </div>
                <p className="text-sm text-neutral-400">
                  React · Next.js · TypeScript · diseño de sistemas de UI ·
                  performance en interfaces y experiencias consistentes.
                </p>
                <ul className="space-y-2 text-sm text-neutral-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/50" />
                    <span>Diseño y construcción de componentes reutilizables.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/50" />
                    <span>Integración con APIs, SSR/SSG y buenas prácticas en Next.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/50" />
                    <span>Atención obsesiva al detalle visual y microinteracciones.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation delay={0.1}>
            <Card className="group bg-neutral-900/70 border-neutral-800 transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900/90 hover:shadow-xl">
              <CardContent className="space-y-4 p-6">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-sky-400" />
                  <h3 className="text-xl font-semibold text-neutral-100">Cómo puedo aportar</h3>
                </div>
                <p className="text-sm text-neutral-400">
                  Trabajo bien con marcas y personas que valoran el proceso por
                  encima del hype y que disfrutan hacer las cosas con cariño. Puedo aportar:
                </p>
                <ul className="space-y-2 text-sm text-neutral-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400/50" />
                    <span>Aterrizar ideas en interfaces claras y accionables.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400/50" />
                    <span>Bajar hábitos y estructura a productos digitales.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400/50" />
                    <span>Colaborar en contenido sobre disciplina, entrenamiento y foco.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* PORTFOLIO SOCIAL (TikTok / Instagram) */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <ScrollAnimation>
          <div className="space-y-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
                  Contenido
                </p>
                <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
                  Clips de TikTok e Instagram.
                </h2>
              </div>
              <p className="max-w-md text-sm text-neutral-400">
                Fragmentos de entrenos, rutinas, comida real y procesos de trabajo.
                Así es como llevo la disciplina y los hábitos a la vida diaria.
              </p>
            </div>

            <div className="relative -mx-6">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-neutral-950 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-neutral-950 to-transparent" />

              <div className="flex gap-4 overflow-x-auto px-6 pb-2 pt-4 scroll-smooth snap-x snap-mandatory">
                {[
                  {
                    platform: "TikTok",
                    handle: "@lucasezequielriera",
                    title: "Bloque de trabajo profundo + gym",
                    tone: "Entreno, código y cierre de día sin ruido.",
                    color: "from-emerald-500/30 via-emerald-400/10 to-transparent",
                  },
                  {
                    platform: "Instagram",
                    handle: "@lucasezequielriera",
                    title: "Día completo de comidas",
                    tone: "Comida simple, fuerte y coherente con el entrenamiento.",
                    color: "from-sky-500/30 via-sky-400/10 to-transparent",
                  },
                  {
                    platform: "TikTok",
                    handle: "@lucasezequielriera",
                    title: "Rutina de mañana",
                    tone: "Hidratación, journaling y movimiento antes del móvil.",
                    color: "from-purple-500/30 via-purple-400/10 to-transparent",
                  },
                  {
                    platform: "Instagram",
                    handle: "@lucasezequielriera",
                    title: "Collab en café healthy",
                    tone: "Trabajo profundo fuera de casa, café y comida real.",
                    color: "from-amber-500/30 via-amber-400/10 to-transparent",
                  },
                  {
                    platform: "TikTok",
                    handle: "@lucasezequielriera",
                    title: "Leg day sin música alta",
                    tone: "Piernas, respiración y foco interno. Sin distracciones externas.",
                    color: "from-rose-500/30 via-rose-400/10 to-transparent",
                  },
                  {
                    platform: "Instagram",
                    handle: "@lucasezequielriera",
                    title: "Setup de trabajo profundo",
                    tone: "Escritorio limpio, bloque en calendario y móvil en otra habitación.",
                    color: "from-teal-500/30 via-teal-400/10 to-transparent",
                  },
                  {
                    platform: "TikTok",
                    handle: "@lucasezequielriera",
                    title: "Grocery haul disciplinado",
                    tone: "Qué compro en el súper para entrenar fuerte y pensar claro.",
                    color: "from-lime-500/30 via-lime-400/10 to-transparent",
                  },
                  {
                    platform: "Instagram",
                    handle: "@lucasezequielriera",
                    title: "Un día off bien aprovechado",
                    tone: "Descanso activo, paseo, lectura y cero culpa.",
                    color: "from-indigo-500/30 via-indigo-400/10 to-transparent",
                  },
                  {
                    platform: "TikTok",
                    handle: "@lucasezequielriera",
                    title: "Mini vlog: mañana completa",
                    tone: "Despertar, café, journaling, entreno y primer bloque de código.",
                    color: "from-orange-500/30 via-orange-400/10 to-transparent",
                  },
                ].map((clip, index) => (
                  <motion.article
                    key={clip.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    className="snap-center"
                  >
                    <div className="group flex min-w-[240px] max-w-[260px] flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/70 p-3 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-900/80 md:min-w-[280px] md:max-w-[300px]">
                      <div className="relative overflow-hidden rounded-xl bg-neutral-900">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${clip.color} opacity-80 transition-opacity duration-500 group-hover:opacity-100`}
                        />
                        <div className="relative flex aspect-[9/16] items-end justify-between p-3">
                          <div className="space-y-1 text-xs">
                            <span className="inline-flex items-center rounded-full bg-black/60 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-neutral-200">
                              {clip.platform}
                            </span>
                            <p className="text-[0.7rem] text-neutral-200">
                              {clip.handle}
                            </p>
                          </div>
                          <span className="rounded-full bg-black/50 px-2 py-1 text-[0.7rem] text-neutral-200">
                            9:16
                          </span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-neutral-100">
                          {clip.title}
                        </p>
                        <p className="text-xs text-neutral-400">
                          {clip.tone}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* PROYECTOS DESTACADOS */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <ScrollAnimation>
          <div className="space-y-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
                Proyectos
              </p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
                Trabajos que reflejan mi enfoque.
              </h2>
              <p className="mt-3 text-sm text-neutral-400">
                Cada proyecto es una oportunidad de aplicar disciplina, claridad y atención al detalle,
                pero también una extensión directa de mis hábitos: entrenar, comer consciente y respetar el cuerpo.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ScrollAnimation delay={0}>
                <Card className="group relative overflow-hidden bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border-neutral-800 transition-all duration-500 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <CardContent className="relative space-y-4 p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-emerald-400" />
                        <h3 className="text-xl font-semibold text-neutral-100">Sistema de diseño</h3>
                      </div>
                      <ExternalLink className="h-4 w-4 text-neutral-500 transition-colors group-hover:text-emerald-400" />
                    </div>
                    <p className="text-sm text-neutral-400">
                      Biblioteca de componentes reutilizables construida con React y TypeScript.
                      Enfoque en consistencia, accesibilidad y performance.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["React", "TypeScript", "Tailwind"].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-neutral-800 bg-neutral-950/50 px-2.5 py-1 text-xs text-neutral-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={0.1}>
                <Card className="group relative overflow-hidden bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border-neutral-800 transition-all duration-500 hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <CardContent className="relative space-y-4 p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <Activity className="h-5 w-5 text-sky-400" />
                        <h3 className="text-xl font-semibold text-neutral-100">Plataforma de productividad</h3>
                      </div>
                      <ExternalLink className="h-4 w-4 text-neutral-500 transition-colors group-hover:text-sky-400" />
                    </div>
                    <p className="text-sm text-neutral-400">
                      Aplicación web para gestión de hábitos y seguimiento de objetivos.
                      Integración con APIs, autenticación y dashboard en tiempo real.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Next.js", "PostgreSQL", "Auth"].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-neutral-800 bg-neutral-950/50 px-2.5 py-1 text-xs text-neutral-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={0.15}>
                <Card className="group relative overflow-hidden bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border-neutral-800 transition-all duration-500 hover:border-emerald-400/50 hover:shadow-2xl hover:shadow-emerald-400/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <CardContent className="relative space-y-4 p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <Dumbbell className="h-5 w-5 text-emerald-300" />
                        <h3 className="text-xl font-semibold text-neutral-100">
                          Collabs con espacios healthy
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-neutral-400">
                      Colaboraciones con gimnasios, cafés saludables y marcas alineadas a un estilo de
                      vida ordenado: entrenar, comer bien y cuidar la cabeza. Proyectos pensados desde
                      la disciplina, pero también desde el disfrute, el detalle y las ganas reales de sumar.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Healthy lifestyle", "Contenido", "Eventos", "Marcas conscientes"].map(
                        (tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-neutral-800 bg-neutral-950/50 px-2.5 py-1 text-xs text-neutral-400"
                          >
                            {tag}
                          </span>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <Card className="group relative overflow-hidden bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border-neutral-800 transition-all duration-500 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <CardContent className="relative space-y-4 p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-amber-400" />
                        <h3 className="text-xl font-semibold text-neutral-100">Fitness on the road</h3>
                      </div>
                      <ExternalLink className="h-4 w-4 text-neutral-500 transition-colors group-hover:text-amber-400" />
                    </div>
                    <p className="text-sm text-neutral-400">
                      Documentación de entrenamientos y rutinas mientras viajo por el mundo. Contenido sobre
                      cómo mantener disciplina, entrenar en cualquier lugar y comer bien sin importar el país.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Viajes", "Fitness", "Contenido", "16 países"].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-neutral-800 bg-neutral-950/50 px-2.5 py-1 text-xs text-neutral-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={0.25}>
                <Card className="group relative overflow-hidden bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border-neutral-800 transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <CardContent className="relative space-y-4 p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <Video className="h-5 w-5 text-purple-400" />
                        <h3 className="text-xl font-semibold text-neutral-100">Plataforma de contenido fitness</h3>
                      </div>
                      <ExternalLink className="h-4 w-4 text-neutral-500 transition-colors group-hover:text-purple-400" />
                    </div>
                    <p className="text-sm text-neutral-400">
                      Aplicación MERN para crear, compartir y seguir rutinas de entrenamiento. Integración
                      con contenido de redes sociales, tracking de progreso y comunidad de personas alineadas.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["MongoDB", "Express", "React", "Node.js"].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-neutral-800 bg-neutral-950/50 px-2.5 py-1 text-xs text-neutral-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* RUTINA / ESTRUCTURA DIARIA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <ScrollAnimation>
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Rutina
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Una vida diseñada, no improvisada.
            </h2>
            <p className="text-sm text-neutral-400">
              No se trata de ser perfecto todos los días, sino de tener un
              sistema que te devuelva al camino cuando te caes. Estas son algunas
              piezas fijas de mi semana.
            </p>
            <div className="mt-4 space-y-3 text-sm text-neutral-300">
              <p>· 4–5 sesiones de fuerza por semana (planificadas con FitPlan AI).</p>
              <p>· Bloques de trabajo profundo protegidos del calendario.</p>
              <p>· Revisión semanal de objetivos personales y profesionales.</p>
              <p>· Control diario de gastos y ganancias con{" "}
                <a
                  href="https://www.webfinancelab.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
                >
                  WebFinanceLab
                </a>
                .
              </p>
            </div>
          </div>

          <Card className="bg-neutral-900/70 border-neutral-800">
            <CardContent className="space-y-3 p-6">
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span>Mapa rápido de un día</span>
                <Globe2 className="h-4 w-4" />
              </div>
              <div className="space-y-3 text-sm text-neutral-300">
                <div className="flex gap-3">
                  <span className="mt-0.5 w-12 shrink-0 text-xs text-neutral-500">
                    06:30
                  </span>
                  <p>Despertar, hidratación y journaling corto.</p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-0.5 w-12 shrink-0 text-xs text-neutral-500">
                    07:30
                  </span>
                  <p>Entrenamiento de fuerza y movilidad (seguimiento en FitPlan AI).</p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-0.5 w-12 shrink-0 text-xs text-neutral-500">
                    10:00
                  </span>
                  <p>Bloque de trabajo profundo (código / producto).</p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-0.5 w-12 shrink-0 text-xs text-neutral-500">
                    18:00
                  </span>
                  <p>Cierre del día, registro de gastos en WebFinanceLab, reflexión y planificación del siguiente.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          </div>
        </ScrollAnimation>
      </section>

      {/* POR QUÉ COLABORAR CONMIGO */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <ScrollAnimation>
          <div className="space-y-10">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
                Colaboraciones
              </p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
                Por qué trabajar conmigo.
              </h2>
              <p className="mt-3 text-sm text-neutral-400 max-w-2xl mx-auto">
                No solo creo contenido: construyo relaciones auténticas y resultados medibles.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <ScrollAnimation delay={0}>
                <Card className="group bg-gradient-to-br from-neutral-900/70 to-neutral-950/70 border-neutral-800 transition-all duration-300 hover:border-emerald-500/50 hover:bg-gradient-to-br hover:from-emerald-950/20 hover:to-neutral-900/70 hover:shadow-xl hover:shadow-emerald-500/10">
                  <CardContent className="space-y-4 p-6">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-emerald-500/20 p-2">
                        <Users className="h-5 w-5 text-emerald-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-100">Audiencia comprometida</h3>
                    </div>
                    <p className="text-sm text-neutral-400">
                      Comunidad que valora disciplina, salud y contenido auténtico. Engagement real,
                      no números vacíos.
                    </p>
                    <div className="flex items-center gap-4 pt-2 text-xs text-neutral-500">
                      <span className="flex items-center gap-1">
                        <BarChart3 className="h-3.5 w-3.5" />
                        Alto engagement
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={0.1}>
                <Card className="group bg-gradient-to-br from-neutral-900/70 to-neutral-950/70 border-neutral-800 transition-all duration-300 hover:border-sky-500/50 hover:bg-gradient-to-br hover:from-sky-950/20 hover:to-neutral-900/70 hover:shadow-xl hover:shadow-sky-500/10">
                  <CardContent className="space-y-4 p-6">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-sky-500/20 p-2">
                        <CheckCircle2 className="h-5 w-5 text-sky-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-100">Contenido de calidad</h3>
                    </div>
                    <p className="text-sm text-neutral-400">
                      Producción profesional, storytelling coherente y atención al detalle. Cada
                      colaboración es pensada, no improvisada.
                    </p>
                    <div className="flex items-center gap-4 pt-2 text-xs text-neutral-500">
                      <span className="flex items-center gap-1">
                        <Video className="h-3.5 w-3.5" />
                        Producción propia
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <Card className="group bg-gradient-to-br from-neutral-900/70 to-neutral-950/70 border-neutral-800 transition-all duration-300 hover:border-purple-500/50 hover:bg-gradient-to-br hover:from-purple-950/20 hover:to-neutral-900/70 hover:shadow-xl hover:shadow-purple-500/10">
                  <CardContent className="space-y-4 p-6">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-purple-500/20 p-2">
                        <TrendingUp className="h-5 w-5 text-purple-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-100">Alcance internacional</h3>
                    </div>
                    <p className="text-sm text-neutral-400">
                      Experiencia en 16 países. Contenido que resuena en diferentes culturas y
                      mercados. Actualmente en España.
                    </p>
                    <div className="flex items-center gap-4 pt-2 text-xs text-neutral-500">
                      <span className="flex items-center gap-1">
                        <Globe2 className="h-3.5 w-3.5" />
                        16 países
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>

            <ScrollAnimation delay={0.3}>
              <Card className="border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-950/30 to-neutral-900/90">
                <CardContent className="space-y-6 p-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                    <Zap className="h-8 w-8 text-emerald-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-neutral-100">Lo que ofrezco</h3>
                    <p className="text-sm text-neutral-400">
                      Contenido auténtico, producción profesional y compromiso real con tu marca.
                    </p>
                  </div>
                  <div className="grid gap-3 text-left sm:grid-cols-2">
                    <div className="flex items-start gap-2 text-sm text-neutral-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span>Reels y contenido para Instagram/TikTok</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-neutral-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span>Fotografía y video profesional</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-neutral-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span>Stories y contenido en tiempo real</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-neutral-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span>Colaboraciones a largo plazo</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-neutral-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span>Eventos y activaciones presenciales</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-neutral-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span>Desarrollo web para marcas (MERN)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </section>

      {/* CTA / CONTACTO */}
      <section
        id="contacto"
        className="mx-auto max-w-6xl px-6 pb-28 pt-10"
      >
        <ScrollAnimation>
          <div className="space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold md:text-4xl">
                Colaboraciones conscientes solamente.
              </h2>
              <p className="mx-auto max-w-2xl text-neutral-400">
                Si tu marca o proyecto está alineado con disciplina, salud,
                claridad mental y respeto por el proceso, podemos construir algo
                juntos.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Email / Google Form */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc7Zeogt62nWmHnScN2uCRYPmCe0hmSbjxI_N4XEXZV5bMKNQ/viewform"
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <Card className="border-neutral-800 bg-neutral-900/60 transition-all hover:border-neutral-700 hover:bg-neutral-900/80">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center gap-3 text-center">
                      <div className="rounded-full border border-neutral-800 bg-neutral-950 p-3 transition-all group-hover:border-neutral-700">
                        <Mail className="h-5 w-5 text-neutral-300" />
                      </div>
                      <div>
                        <p className="font-medium text-neutral-100">Formulario</p>
                        <p className="mt-1 text-xs text-neutral-400">
                          Proponer colaboración
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/34627043397"
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <Card className="border-green-900/50 bg-green-950/20 transition-all hover:border-green-800/50 hover:bg-green-950/30">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center gap-3 text-center">
                      <div className="rounded-full border border-green-800/50 bg-green-950/40 p-3 transition-all group-hover:border-green-700/50">
                        <MessageCircle className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <p className="font-medium text-green-300">WhatsApp</p>
                        <p className="mt-1 text-xs text-green-400/70">
                          Mensaje directo
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>

              {/* Calendly */}
              <a
                href="https://calendly.com/lucasezequielriera-phfi/30min"
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <Card className="border-blue-900/50 bg-blue-950/20 transition-all hover:border-blue-800/50 hover:bg-blue-950/30">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center gap-3 text-center">
                      <div className="rounded-full border border-blue-800/50 bg-blue-950/40 p-3 transition-all group-hover:border-blue-700/50">
                        <Calendar className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium text-blue-300">
                          Agendar llamada
                        </p>
                        <p className="mt-1 text-xs text-blue-400/70">
                          30 minutos
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/lucasezequielriera"
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <Card className="border-neutral-800 bg-neutral-900/60 transition-all hover:border-neutral-700 hover:bg-neutral-900/80">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center gap-3 text-center">
                      <div className="rounded-full border border-neutral-800 bg-neutral-950 p-3 transition-all group-hover:border-neutral-700">
                        <Instagram className="h-5 w-5 text-neutral-300" />
                      </div>
                      <div>
                        <p className="font-medium text-neutral-100">Instagram</p>
                        <p className="mt-1 text-xs text-neutral-400">
                          Red social
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* EMPRESAS QUE CONFÍAN EN MÍ */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <ScrollAnimation>
          <div className="space-y-2">
            <div className="text-center">
              <h2 className="text-3xl font-semibold md:text-4xl">
                Empresas que confían en mí.
              </h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              <ScrollAnimation delay={0}>
                <a
                  href="https://www.synapsis.team"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex h-40 w-40 items-center justify-center transition-opacity duration-300 hover:opacity-100"
                >
                  <Image
                    src="/synapsis-logo.png"
                    alt="Synapsis Logo"
                    fill
                    sizes="160px"
                    className="object-contain p-4 opacity-40 grayscale transition-all duration-300 group-hover:opacity-60 group-hover:grayscale-0"
                  />
                </a>
              </ScrollAnimation>

              <ScrollAnimation delay={0.1}>
                <a
                  href="https://www.webfinancelab.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex h-32 w-32 items-center justify-center transition-opacity duration-300 hover:opacity-100"
                >
                  <Image
                    src="/webfinancelab-logo.png"
                    alt="WebFinanceLab Logo"
                    fill
                    sizes="128px"
                    className="object-contain p-3 opacity-40 grayscale transition-all duration-300 group-hover:opacity-60 group-hover:grayscale-0"
                  />
                </a>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <a
                  href="https://www.fitplan-ai.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex h-32 w-32 items-center justify-center transition-opacity duration-300 hover:opacity-100"
                >
                  <Image
                    src="/fitplan-ai-logo.png"
                    alt="FitPlan AI Logo"
                    fill
                    sizes="128px"
                    className="object-contain p-3 opacity-40 grayscale transition-all duration-300 group-hover:opacity-60 group-hover:grayscale-0"
                  />
                </a>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-900/80 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-sm text-neutral-500 md:flex-row">
          <p>© 2026 Lucas Riera. Disciplina sobre motivación.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc7Zeogt62nWmHnScN2uCRYPmCe0hmSbjxI_N4XEXZV5bMKNQ/viewform"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-neutral-200"
            >
              <Mail className="h-4 w-4" />
              <span>Formulario de contacto</span>
            </a>
            <a
              href="https://instagram.com/lucasezequielriera"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram de Lucas Riera"
              className="hover:text-neutral-200"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn de Lucas Riera"
              className="hover:text-neutral-200"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/lucasezequielriera"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub de Lucas Riera"
              className="hover:text-neutral-200"
            >
              <Code className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}