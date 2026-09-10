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
      ? "Seis productos en producción construidos de principio a fin: plataformas SaaS, sistemas web y aplicaciones con IA. Problema, solución y stack técnico de cada uno."
      : isFr
        ? "Six produits en production construits de bout en bout : plateformes SaaS, systèmes web et applications IA. Problème, solution et stack technique de chacun."
        : "Six products in production, built end to end: SaaS platforms, web systems and AI applications. The problem, the solution and the stack behind each one.",
    openGraph: {
      title: isEs
        ? "Proyectos — Lucas Riera"
        : isFr
          ? "Projets — Lucas Riera"
          : "Projects — Lucas Riera",
      url: `https://www.lucasriera.com/${locale}/proyectos`,
    },
    alternates: {
      canonical: `/${locale}/proyectos`,
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
