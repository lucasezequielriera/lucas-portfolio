import type { Metadata } from "next";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import { AboutView } from "@/components/about/about-view";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);

  return {
    title: `${t.about.badge} — Lucas Riera | Product Engineer`,
    description:
      locale === "es"
        ? "Trayectoria de Lucas Riera: cinco empresas (United Airlines, YPF, Synapsis), el stack con el que construyo software y qué dicen quienes han trabajado conmigo."
        : locale === "fr"
          ? "Parcours de Lucas Riera : cinq entreprises (United Airlines, YPF, Synapsis), la stack avec laquelle je construis et les avis de mes collaborateurs."
          : "Lucas Riera's track record: five companies (United Airlines, YPF, Synapsis), the stack I build software with, and what people I've worked with say.",
    openGraph: {
      title: `${t.about.badge} — Lucas Riera`,
      url: `https://www.lucasriera.com/${locale}/sobre-mi`,
    },
    alternates: {
      canonical: `/${locale}/sobre-mi`,
      languages: { es: "/es/sobre-mi", en: "/en/sobre-mi", fr: "/fr/sobre-mi" },
    },
  };
}

export default async function SobreMiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <AboutView locale={locale as Locale} />;
}
