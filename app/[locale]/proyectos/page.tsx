import type { Metadata } from "next";
import { type Locale } from "@/lib/dictionaries";
import { ProjectsView } from "@/components/projects/projects-view";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  const isFr = locale === "fr";
  return {
    title: isEs
      ? "Proyectos — Lucas Riera | Product Engineer"
      : isFr
        ? "Projets — Lucas Riera | Product Engineer"
        : "Projects — Lucas Riera | Product Engineer",
    description: isEs
      ? "Proyectos de Lucas Riera: plataformas, sistemas web y aplicaciones construidas desde cero."
      : isFr
        ? "Projets de Lucas Riera: plateformes, systemes web et applications developpes de zero."
        : "Lucas Riera's projects: platforms, web systems and applications built from scratch.",
    openGraph: {
      title: isEs
        ? "Proyectos — Lucas Riera"
        : isFr
          ? "Projets — Lucas Riera"
          : "Projects — Lucas Riera",
      url: `https://www.lucasriera.com/${locale}/proyectos`,
    },
    alternates: {
      languages: { es: "/es/proyectos", en: "/en/proyectos", fr: "/fr/proyectos" },
    },
  };
}

export default async function ProyectosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ProjectsView locale={locale as Locale} />;
}
