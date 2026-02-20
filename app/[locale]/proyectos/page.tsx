import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, GraduationCap, Palette } from "lucide-react";
import { projects } from "@/lib/projects";
import { getDictionary, type Locale } from "@/lib/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  return {
    title: isEs
      ? "Proyectos — Lucas Riera | Software Developer"
      : "Projects — Lucas Riera | Software Developer",
    description: isEs
      ? "Proyectos de Lucas Riera: plataformas, sistemas web y aplicaciones construidas desde cero."
      : "Lucas Riera's projects: platforms, web systems and applications built from scratch.",
    openGraph: {
      title: isEs ? "Proyectos — Lucas Riera" : "Projects — Lucas Riera",
      url: `https://lucasriera.com/${locale}/proyectos`,
    },
    alternates: {
      languages: { es: "/es/proyectos", en: "/en/proyectos" },
    },
  };
}

const colorStyles = {
  emerald: { border: "hover:border-emerald-500/40", shadow: "hover:shadow-emerald-500/5", gradient: "from-emerald-500/[0.03]", iconBorder: "group-hover:border-emerald-500/50 group-hover:text-emerald-400", tag: "border-emerald-500/20 text-emerald-400/80", icon: "text-emerald-400" },
  sky: { border: "hover:border-sky-500/40", shadow: "hover:shadow-sky-500/5", gradient: "from-sky-500/[0.03]", iconBorder: "group-hover:border-sky-500/50 group-hover:text-sky-400", tag: "border-sky-500/20 text-sky-400/80", icon: "text-sky-400" },
  violet: { border: "hover:border-violet-500/40", shadow: "hover:shadow-violet-500/5", gradient: "from-violet-500/[0.03]", iconBorder: "group-hover:border-violet-500/50 group-hover:text-violet-400", tag: "border-violet-500/20 text-violet-400/80", icon: "text-violet-400" },
  amber: { border: "hover:border-amber-500/40", shadow: "hover:shadow-amber-500/5", gradient: "from-amber-500/[0.03]", iconBorder: "group-hover:border-amber-500/50 group-hover:text-amber-400", tag: "border-amber-500/20 text-amber-400/80", icon: "text-amber-400" },
  rose: { border: "hover:border-rose-500/40", shadow: "hover:shadow-rose-500/5", gradient: "from-rose-500/[0.03]", iconBorder: "group-hover:border-rose-500/50 group-hover:text-rose-400", tag: "border-rose-500/20 text-rose-400/80", icon: "text-rose-400" },
};

function getIcon(icon: string | undefined, color: keyof typeof colorStyles) {
  if (icon === "graduation-cap") return <GraduationCap className={`h-7 w-7 ${colorStyles[color].icon}`} />;
  if (icon === "palette") return <Palette className={`h-7 w-7 ${colorStyles[color].icon}`} />;
  return null;
}

export default async function ProyectosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);
  const otherLocale = locale === "es" ? "en" : "es";

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="sticky top-0 z-30 border-b border-neutral-900/60 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Link href={`/${locale}`} className="text-sm font-medium tracking-[0.2em] text-neutral-400 uppercase transition hover:text-neutral-100">
              Lucas Riera
            </Link>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              {t.nav.proyectos}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <nav className="hidden gap-4 text-sm text-neutral-400 md:flex">
              <Link href={`/${locale}`} className="transition hover:text-neutral-100">{t.proyectosPage.inicio}</Link>
              <Link href={`/${locale}#trabajos`} className="transition hover:text-neutral-100">{t.nav.trabajos}</Link>
              <Link href={`/${locale}#experiencia`} className="transition hover:text-neutral-100">{t.nav.experiencia}</Link>
              <Link href={`/${locale}/proyectos`} className="text-neutral-100">{t.nav.proyectos}</Link>
              <Link href={`/${locale}#contacto`} className="transition hover:text-neutral-100">{t.nav.contacto}</Link>
            </nav>
            <Link
              href={`/${otherLocale}/proyectos`}
              className="rounded-md border border-neutral-800 bg-neutral-900/60 px-2.5 py-1 text-xs font-medium text-neutral-400 transition hover:border-neutral-700 hover:text-neutral-100"
            >
              {otherLocale.toUpperCase()}
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-24">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
            {t.proyectosPage.count(projects.length)}
          </p>
          <h1 className="text-3xl font-semibold md:text-4xl">{t.proyectosPage.title}</h1>
          <p className="max-w-2xl text-sm text-neutral-400">{t.proyectosPage.description}</p>
        </div>

        <div className="mt-12 grid gap-6">
          {projects.map((project) => {
            const colors = colorStyles[project.color];
            const IconComponent = getIcon(project.icon, project.color);
            return (
              <Link key={project.slug} href={`/${locale}/proyectos/${project.slug}`} className="group block">
                <div className={`relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/70 p-6 transition-all duration-500 ${colors.border} hover:shadow-2xl ${colors.shadow} md:p-8`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                  <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
                    <div className="shrink-0">
                      {project.logo ? (
                        <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
                          <Image src={project.logo} alt={project.name} fill sizes="64px" className="object-contain p-2" />
                        </div>
                      ) : IconComponent ? (
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900">{IconComponent}</div>
                      ) : null}
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between">
                        <h2 className="text-xl font-semibold text-neutral-100 md:text-2xl">{project.name}</h2>
                        <div className={`rounded-full border border-neutral-800 bg-neutral-900/80 p-2 transition ${colors.iconBorder}`}><ArrowUpRight className="h-4 w-4" /></div>
                      </div>
                      <p className="text-sm leading-relaxed text-neutral-400 md:text-base">{project.longDescription[locale as Locale]}</p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.tags.map((tag) => (<span key={tag} className={`rounded-full border bg-neutral-950/60 px-3 py-1 text-xs ${colors.tag}`}>{tag}</span>))}
                      </div>
                      <p className="text-xs text-neutral-600">{project.url.replace("https://", "")}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link href={`/${locale}/proyectos/fit-travel`} className="inline-flex items-center justify-center rounded-lg border border-emerald-500/50 bg-emerald-500/10 px-5 py-2.5 text-sm font-medium text-emerald-300 transition hover:border-emerald-500/70 hover:bg-emerald-500/20">
            {t.proyectosPage.goToFitTravel}
          </Link>
          <Link href={`/${locale}`} className="inline-flex items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/60 px-5 py-2.5 text-sm font-medium text-neutral-300 transition hover:border-neutral-700 hover:text-neutral-100">
            {t.proyectosPage.backHome}
          </Link>
        </div>
      </section>
    </main>
  );
}
