import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  GraduationCap,
  Palette,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { projects } from "@/lib/projects";
import { colorConfig } from "@/lib/colors";
import { getDictionary, locales, type Locale } from "@/lib/dictionaries";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const loc = locale as Locale;
  return {
    title: `${project.name} — Lucas Riera | Software Developer`,
    description: project.description[loc],
    openGraph: {
      title: `${project.name} — Lucas Riera`,
      description: project.longDescription[loc],
      url: `https://www.lucasriera.com/${locale}/proyectos/${slug}`,
      images:
        project.media.length > 0 && project.media[0].type === "image"
          ? [
              {
                url: project.media[0].src,
                width: 1280,
                height: 720,
                alt: project.name,
              },
            ]
          : [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    alternates: {
      languages: {
        es: `/es/proyectos/${slug}`,
        en: `/en/proyectos/${slug}`,
      },
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const loc = locale as Locale;
  const t = getDictionary(loc);
  const otherLocale = locale === "es" ? "en" : "es";
  const colors = colorConfig[project.color];

  const IconComponent =
    project.icon === "graduation-cap"
      ? GraduationCap
      : project.icon === "palette"
        ? Palette
        : null;

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: project.name,
            url: project.url,
            applicationCategory: project.appCategory,
            operatingSystem: "Web",
            description: project.longDescription[loc],
            dateCreated: `${project.year}-01-01`,
            author: {
              "@type": "Person",
              name: "Lucas Riera",
              url: "https://www.lucasriera.com",
            },
            ...(project.media.filter((m) => m.type === "image").length > 0 && {
              screenshot: project.media
                .filter((m) => m.type === "image")
                .map((m) => `https://www.lucasriera.com${m.src}`),
            }),
            ...(project.media.some((m) => m.type === "video") && {
              video: {
                "@type": "VideoObject",
                name: `${project.name} demo`,
                contentUrl: `https://www.lucasriera.com${project.media.find((m) => m.type === "video")!.src}`,
              },
            }),
          }),
        }}
      />

      <header className="sticky top-0 z-30 border-b border-neutral-900/60 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Link
              href={`/${locale}`}
              className="text-sm font-medium tracking-[0.2em] text-neutral-400 uppercase transition hover:text-neutral-100"
            >
              Lucas Riera
            </Link>
            <span className="text-neutral-700">/</span>
            <Link
              href={`/${locale}/proyectos`}
              className="text-sm text-neutral-400 transition hover:text-neutral-100"
            >
              {t.nav.proyectos}
            </Link>
            <span className="text-neutral-700">/</span>
            <span
              className={`rounded-full border px-3 py-1 text-xs font-medium ${colors.badge}`}
            >
              {project.name}
            </span>
          </div>
          <Link
            href={`/${otherLocale}/proyectos/${slug}`}
            className="rounded-md border border-neutral-800 bg-neutral-900/60 px-2.5 py-1 text-xs font-medium text-neutral-400 transition hover:border-neutral-700 hover:text-neutral-100"
          >
            {otherLocale.toUpperCase()}
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 pb-24 pt-16 md:pt-24">
        <section className="space-y-6">
          <Link
            href={`/${locale}/proyectos`}
            className="inline-flex items-center gap-1.5 text-sm text-neutral-500 transition hover:text-neutral-300"
          >
            {t.caseStudy.backToProjects}
          </Link>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-center gap-4">
              {project.logo ? (
                <div
                  className={`relative h-16 w-16 overflow-hidden rounded-2xl border bg-neutral-900 ${colors.border}`}
                >
                  <Image
                    src={project.logo}
                    alt={project.name}
                    fill
                    sizes="64px"
                    className="object-contain p-2"
                  />
                </div>
              ) : IconComponent ? (
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl border bg-neutral-900 ${colors.border}`}
                >
                  <IconComponent className={`h-8 w-8 ${colors.heading}`} />
                </div>
              ) : null}
              <div>
                <h1 className="text-3xl font-semibold md:text-4xl">
                  {project.name}
                </h1>
                <p className="mt-1 text-sm text-neutral-500">
                  {t.caseStudy.builtIn} {project.year} ·{" "}
                  {t.caseStudy.createdBy}
                </p>
              </div>
            </div>

            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition ${colors.ctaBg}`}
            >
              {t.caseStudy.visitSite}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <p className="text-lg leading-relaxed text-neutral-300">
            {project.longDescription[loc]}
          </p>
        </section>

        <section className="mt-16 space-y-4">
          <div className="flex items-center gap-3">
            <div className={`h-1 w-8 rounded-full ${colors.accent}`} />
            <h2
              className={`text-xs font-semibold uppercase tracking-[0.25em] ${colors.heading}`}
            >
              {t.caseStudy.problem}
            </h2>
          </div>
          <p className="text-base leading-relaxed text-neutral-300">
            {project.problem[loc]}
          </p>
        </section>

        <section className="mt-16 space-y-4">
          <div className="flex items-center gap-3">
            <div className={`h-1 w-8 rounded-full ${colors.accent}`} />
            <h2
              className={`text-xs font-semibold uppercase tracking-[0.25em] ${colors.heading}`}
            >
              {t.caseStudy.solution}
            </h2>
          </div>
          <p className="text-base leading-relaxed text-neutral-300">
            {project.solution[loc]}
          </p>
        </section>

        {project.media.length > 0 && (
          <section className="mt-16 space-y-6">
            <div className="flex items-center gap-3">
              <div className={`h-1 w-8 rounded-full ${colors.accent}`} />
              <h2
                className={`text-xs font-semibold uppercase tracking-[0.25em] ${colors.heading}`}
              >
                {t.caseStudy.screenshots}
              </h2>
            </div>
            <div className="grid gap-4">
              {project.media.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 shadow-lg ${colors.glow}`}
                >
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full aspect-video object-cover"
                      aria-label={`${project.name} demo video`}
                    />
                  ) : (
                    <div className="relative aspect-video">
                      <Image
                        src={item.src}
                        alt={`${project.name} screenshot ${idx + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 800px"
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mt-16 space-y-6">
          <div className="flex items-center gap-3">
            <div className={`h-1 w-8 rounded-full ${colors.accent}`} />
            <h2
              className={`text-xs font-semibold uppercase tracking-[0.25em] ${colors.heading}`}
            >
              {t.caseStudy.techStack}
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-full border bg-neutral-950/60 px-4 py-2 text-sm ${colors.tag}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-8 text-center md:p-12">
          <h2 className="text-2xl font-semibold md:text-3xl">
            {t.caseStudy.contactCta}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-neutral-400">
            {t.caseStudy.contactCtaSub}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`/${locale}#contacto`}
              className={`inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition ${colors.ctaBg}`}
            >
              <MessageCircle className="h-4 w-4" />
              {t.nav.contacto}
            </Link>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-transparent px-6 py-3 text-sm font-medium text-neutral-100 transition hover:bg-neutral-800"
            >
              {t.caseStudy.visitSite}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <div className="mt-12">
          <Link
            href={`/${locale}/proyectos`}
            className="text-sm text-neutral-500 transition hover:text-neutral-300"
          >
            {t.caseStudy.backToProjects}
          </Link>
        </div>
      </div>
    </main>
  );
}
