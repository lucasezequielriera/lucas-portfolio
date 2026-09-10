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
    description: t.about.subtitle,
    openGraph: {
      title: `${t.about.badge} — Lucas Riera`,
      url: `https://www.lucasriera.com/${locale}/sobre-mi`,
    },
    alternates: {
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
