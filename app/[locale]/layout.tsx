import type { Metadata } from "next";
import { getDictionary, locales, type Locale } from "@/lib/dictionaries";
import { CookieBanner } from "@/components/cookie-banner";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const yearsExp = new Date().getFullYear() - 2020;
  const t = getDictionary(locale as Locale);
  const isEs = locale === "es";
  const isFr = locale === "fr";

  return {
    title: t.meta.title,
    description: t.meta.description(yearsExp),
    keywords: t.meta.keywords,
    authors: [{ name: "Lucas Riera" }],
    creator: "Lucas Riera",
    publisher: "Lucas Riera",
    metadataBase: new URL("https://www.lucasriera.com"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: "/es",
        en: "/en",
        fr: "/fr",
      },
    },
    openGraph: {
      type: "website",
      locale: isEs ? "es_ES" : isFr ? "fr_FR" : "en_US",
      url: `https://www.lucasriera.com/${locale}`,
      title: t.meta.ogTitle,
      description: t.meta.ogDescription(yearsExp),
      siteName: "Lucas Riera",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Lucas Riera - Software Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.ogTitle,
      description: t.meta.ogDescription(yearsExp),
      images: ["/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "g9zTaPzWmNcD2i7stLDHt2TwXNWSAkl2M8j8vLsTIOg",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const yearsExp = new Date().getFullYear() - 2020;
  const t = getDictionary(locale as Locale);
  const isEs = locale === "es";

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-emerald-500 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-neutral-950"
      >
        {t.nav.skipToContent}
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Lucas Riera",
            url: "https://www.lucasriera.com",
            jobTitle: [
              "Software Developer",
              "Programador",
              "Desarrollador Web",
              "Informático",
              "Ingeniero de Software",
              "Full-Stack Developer",
            ],
            description: t.meta.ogDescription(yearsExp),
            knowsAbout: [
              "Programación",
              "Desarrollo Web",
              "Informática",
              "Full-Stack Development",
              "React",
              "Next.js",
              "Vue.js",
              "TypeScript",
              "Node.js",
              "Express",
              "GraphQL",
              "Redux",
              "PostgreSQL",
              "MongoDB",
              "Firebase",
              "Supabase",
              "Azure",
              "Tailwind CSS",
              "Docker",
              "SaaS Development",
              "Diseño Web",
              "Desarrollo Frontend",
              "Desarrollo Backend",
              "Testing",
              "CI/CD",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Madrid",
              addressCountry: "ES",
            },
            alumniOf: [
              {
                "@type": "CollegeOrUniversity",
                name: "UADE",
                url: "https://www.uade.edu.ar",
              },
              {
                "@type": "CollegeOrUniversity",
                name: "Universidad Tecnológica Nacional",
                url: "https://www.utn.edu.ar",
              },
            ],
            knowsLanguage: ["es", "en", "fr"],
            hasCredential: [
              {
                "@type": "EducationalOccupationalCredential",
                name: "Bachelor's Degree in Computer Systems and Information Technology",
                credentialCategory: "degree",
                educationalLevel: "Bachelor",
              },
              {
                "@type": "EducationalOccupationalCredential",
                name: "C1 English Certificate",
                credentialCategory: "certificate",
              },
            ],
            sameAs: [
              "https://github.com/lucasezequielriera",
              "https://linkedin.com/in/lucasezequielriera",
              "https://instagram.com/lucasezequielriera",
            ],
            image: "https://www.lucasriera.com/og-image.png",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: isEs
              ? "Lucas Riera — Desarrollo Web"
              : "Lucas Riera — Web Development",
            url: "https://www.lucasriera.com",
            description: t.meta.ogDescription(yearsExp),
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Madrid",
              addressCountry: "ES",
            },
            areaServed: [
              {
                "@type": "Country",
                name: isEs ? "España" : "Spain",
              },
              {
                "@type": "Country",
                name: isEs ? "Argentina" : "Argentina",
              },
              {
                "@type": "Country",
                name: isEs ? "Estados Unidos" : "United States",
              },
              {
                "@type": "Country",
                name: isEs ? "Francia" : "France",
              },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              bestRating: "5",
              ratingCount: "2",
              reviewCount: "2",
            },
            review: [
              {
                "@type": "Review",
                author: { "@type": "Person", name: "Mary Sanchez" },
                reviewBody:
                  "Lucas is a highly capable developer and analyst who consistently demonstrated strong leadership and deep technical insight regarding best practices. He excels at troubleshooting complex issues and effectively conveying clear timelines to business partners.",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
                datePublished: "2025-09-29",
              },
              {
                "@type": "Review",
                author: { "@type": "Person", name: "Nicolas Soroka" },
                reviewBody:
                  "I strongly recommend Lucas based on our collaboration across multiple projects. His excellent communication skills, collaborative mindset, and meticulous attention to detail consistently lead to positive and successful outcomes.",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
                datePublished: "2025-08-02",
              },
            ],
          }),
        }}
      />
      {children}
      <CookieBanner locale={locale as Locale} />
    </>
  );
}
