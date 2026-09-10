import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { getDictionary, locales, type Locale } from "@/lib/dictionaries";
import { CaseStudyView } from "@/components/projects/case-study-view";

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

  const textLocale = locale === "es" ? "es" : "en";
  return {
    title: `${project.name} — Lucas Riera | Product Engineer`,
    description: project.description[textLocale],
    openGraph: {
      title: `${project.name} — Lucas Riera`,
      description: project.longDescription[textLocale],
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
      canonical: `/${locale}/proyectos/${slug}`,
      languages: {
        es: `/es/proyectos/${slug}`,
        en: `/en/proyectos/${slug}`,
        fr: `/fr/proyectos/${slug}`,
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
  const textLocale = locale === "es" ? "es" : "en";

  return (
    <>
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
            description: project.longDescription[textLocale],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Lucas Riera",
                item: `https://www.lucasriera.com/${locale}`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: getDictionary(loc).nav.proyectos,
                item: `https://www.lucasriera.com/${locale}/proyectos`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: project.name,
                item: `https://www.lucasriera.com/${locale}/proyectos/${slug}`,
              },
            ],
          }),
        }}
      />
      <CaseStudyView locale={loc} project={project} />
    </>
  );
}
