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

export const metadata: Metadata = {
  title: "Lucas Riera — Software Developer",
  description:
    "Programador y desarrollador full-stack con +7 años de experiencia. Informático especializado en crear plataformas, sistemas y webs desde cero. Creador de WebFinanceLab, FitPlan AI, WebEducationLab, Synapsis y más.",
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
      "Programador, informático y desarrollador full-stack en Madrid. +7 años creando plataformas, sistemas y webs desde cero.",
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
      "Programador, informático y desarrollador full-stack en Madrid. +7 años creando plataformas, sistemas y webs desde cero.",
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
                "Programador, informático y desarrollador full-stack con +7 años de experiencia. Creo plataformas, sistemas y webs desde cero.",
              knowsAbout: [
                "Programación",
                "Desarrollo Web",
                "Informática",
                "Full-Stack Development",
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "PostgreSQL",
                "MongoDB",
                "Firebase",
                "Tailwind CSS",
                "SaaS Development",
                "Diseño Web",
                "Desarrollo Frontend",
                "Desarrollo Backend",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Madrid",
                addressCountry: "ES",
              },
              sameAs: [
                "https://github.com/lucasezequielriera",
                "https://linkedin.com/in/lucasezequielriera",
                "https://instagram.com/lucasezequielriera",
              ],
              image: "https://lucasriera.com/og-image.png",
            }),
          }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
