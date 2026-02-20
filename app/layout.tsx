import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const yearsExp = new Date().getFullYear() - 2020;

export const metadata: Metadata = {
  title: "Lucas Riera — Software Developer",
  description:
    `Programador y desarrollador full-stack con +${yearsExp} años de experiencia. Informático especializado en crear plataformas, sistemas y webs desde cero. Creador de WebFinanceLab, FitPlan AI, WebEducationLab, Synapsis y más.`,
  keywords: [
    "Lucas Riera",
    "programador",
    "programador web",
    "programador Madrid",
    "programador freelance",
    "informático",
    "informático Madrid",
    "ingeniero de software",
    "ingeniero informático",
    "software developer",
    "desarrollador",
    "desarrollador web",
    "desarrollador full-stack",
    "desarrollador frontend",
    "desarrollador backend",
    "desarrollador Madrid",
    "desarrollador España",
    "desarrollo web",
    "desarrollo web Madrid",
    "crear página web",
    "hacer página web",
    "diseño web",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "portfolio developer",
    "WebFinanceLab",
    "FitPlan AI",
    "WebEducationLab",
    "Synapsis",
    "freelance developer",
    "plataformas SaaS",
    "sistemas web",
    "técnico en programación",
    "experto en programación",
    "developer España",
  ],
  authors: [{ name: "Lucas Riera" }],
  creator: "Lucas Riera",
  publisher: "Lucas Riera",
  metadataBase: new URL("https://lucasriera.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://lucasriera.com",
    title: "Lucas Riera — Programador & Desarrollador Web",
    description:
      `Programador, informático y desarrollador full-stack en Madrid. +${yearsExp} años creando plataformas, sistemas y webs desde cero.`,
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
    title: "Lucas Riera — Programador & Desarrollador Web",
    description:
      `Programador, informático y desarrollador full-stack en Madrid. +${yearsExp} años creando plataformas, sistemas y webs desde cero.`,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Lucas Riera",
              alternateName: ["Lucas Ezequiel Riera"],
              url: "https://lucasriera.com",
              jobTitle: [
                "Software Developer",
                "Programador",
                "Desarrollador Web",
                "Informático",
                "Ingeniero de Software",
                "Full-Stack Developer",
              ],
              description:
                `Programador, informático y desarrollador full-stack con +${yearsExp} años de experiencia. Creo plataformas, sistemas y webs desde cero.`,
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
              knowsLanguage: ["es", "en"],
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
              image: "https://lucasriera.com/og-image.png",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Lucas Riera",
              url: "https://lucasriera.com",
              description: `Programador, informático y desarrollador full-stack con +${yearsExp} años de experiencia.`,
              author: {
                "@type": "Person",
                name: "Lucas Riera",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Mary Sanchez",
                    jobTitle: "Senior Analyst / Developer",
                    worksFor: {
                      "@type": "Organization",
                      name: "United Airlines",
                    },
                  },
                  reviewBody:
                    "Lucas is a highly capable developer and analyst who consistently demonstrated strong leadership and deep technical insight regarding best practices. He excels at troubleshooting complex issues and effectively conveying clear timelines to business partners. His most valuable analytical skill is his ability to discern true urgency in high-pressure environments, allowing him to successfully prioritize critical efforts.",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  datePublished: "2025-09-29",
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Nicolas Soroka",
                    jobTitle: "Frontend Engineer",
                  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "WebFinanceLab",
                url: "https://www.webfinancelab.com",
                applicationCategory: "FinanceApplication",
                operatingSystem: "Web",
                description:
                  "Plataforma completa de control financiero personal. Registro de ingresos y gastos, análisis de hábitos financieros, gráficos en tiempo real y exportación de datos.",
                author: { "@type": "Person", name: "Lucas Riera" },
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "FitPlan AI",
                url: "https://www.fitplan-ai.com",
                applicationCategory: "HealthApplication",
                operatingSystem: "Web",
                description:
                  "Planificación inteligente de entrenamiento y nutrición con inteligencia artificial. Rutinas personalizadas, seguimiento de progreso y recomendaciones adaptativas.",
                author: { "@type": "Person", name: "Lucas Riera" },
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "WebEducationLab",
                url: "https://web-education-lab.vercel.app/es",
                applicationCategory: "EducationalApplication",
                operatingSystem: "Web",
                description:
                  "Plataforma educativa con IA. 14 escuelas, cientos de cursos y un tutor virtual 24/7.",
                author: { "@type": "Person", name: "Lucas Riera" },
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "Synapsis",
                url: "https://www.synapsis.team",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web",
                description:
                  "Plataforma de colaboración y gestión de equipos de trabajo. Organización de proyectos, comunicación centralizada y flujos de trabajo optimizados.",
                author: { "@type": "Person", name: "Lucas Riera" },
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Sandra Lorden",
                url: "https://www.sandralorden.com",
                description:
                  "Portfolio profesional y web personal diseñada a medida por Lucas Riera.",
                author: { "@type": "Person", name: "Lucas Riera" },
              },
            ]),
          }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
