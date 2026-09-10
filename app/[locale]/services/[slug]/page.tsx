import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  landingEntries,
  getLandingBySlug,
  type LandingLocale,
} from "@/lib/seo-landings";
import { ServiceLandingView } from "@/components/services/service-landing-view";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

const allowedLocales: LandingLocale[] = ["es", "en", "fr"];

export function generateStaticParams() {
  return allowedLocales.flatMap((locale) =>
    landingEntries.map((entry) => ({ locale, slug: entry.slug[locale] }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!allowedLocales.includes(locale as LandingLocale)) return {};

  const loc = locale as LandingLocale;
  const entry = getLandingBySlug(loc, slug);
  if (!entry) return {};

  const canonical = `/${loc}/services/${entry.slug[loc]}`;

  return {
    title: entry.title[loc],
    description: entry.description[loc],
    keywords: entry.keywords[loc],
    alternates: {
      canonical,
      languages: {
        es: `/es/services/${entry.slug.es}`,
        en: `/en/services/${entry.slug.en}`,
        fr: `/fr/services/${entry.slug.fr}`,
      },
    },
    openGraph: {
      type: "website",
      title: entry.title[loc],
      description: entry.description[loc],
      url: `https://www.lucasriera.com${canonical}`,
      siteName: "Lucas Riera",
    },
  };
}

export default async function ServiceLandingPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!allowedLocales.includes(locale as LandingLocale)) return notFound();

  const loc = locale as LandingLocale;
  const entry = getLandingBySlug(loc, slug);
  if (!entry) return notFound();

  return <ServiceLandingView locale={loc} entry={entry} />;
}
