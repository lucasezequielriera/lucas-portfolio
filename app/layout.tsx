import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Lucas Riera — Programador e Influencer de Healthy Lifestyle",
  description:
    "Lucas Riera. Programador frontend e influencer de healthy lifestyle. Desarrollo web, disciplina, entrenamiento y nutrición. Abierto a colaboraciones con marcas alineadas a un estilo de vida saludable y consciente.",
  keywords: [
    "Lucas Riera",
    "programador frontend",
    "influencer healthy lifestyle",
    "desarrollo web",
    "React",
    "Next.js",
    "fitness influencer",
    "vida saludable",
    "disciplina",
    "entrenamiento",
    "nutrición",
    "colaboraciones fitness",
    "desarrollador España",
    "MERN stack",
    "contenido fitness",
  ],
  authors: [{ name: "Lucas Riera" }],
  creator: "Lucas Riera",
  publisher: "Lucas Riera",
  metadataBase: new URL("https://lucas-riera.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://lucas-riera.vercel.app",
    title: "Lucas Riera — Programador e Influencer de Healthy Lifestyle",
    description:
      "Programador frontend e influencer de healthy lifestyle. Desarrollo web, disciplina, entrenamiento y nutrición. Abierto a colaboraciones.",
    siteName: "Lucas Riera",
    images: [
      {
        url: "/lucas-photo-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Lucas Riera - Programador e Influencer de Healthy Lifestyle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Riera — Programador e Influencer de Healthy Lifestyle",
    description:
      "Programador frontend e influencer de healthy lifestyle. Desarrollo web, disciplina, entrenamiento y nutrición.",
    images: ["/lucas-photo-1.jpeg"],
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
    google: "0aoNBc42fDhMA4zXgd21qFLWMWLCnwabRQICZsuDkFY",
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
              url: "https://lucas-riera.vercel.app",
              jobTitle: ["Frontend Developer", "Influencer"],
              description:
                "Programador frontend e influencer de healthy lifestyle. Desarrollo web, disciplina, entrenamiento y nutrición.",
              knowsAbout: [
                "Frontend Development",
                "React",
                "Next.js",
                "TypeScript",
                "Healthy Lifestyle",
                "Fitness",
                "Nutrition",
                "Discipline",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "ES",
              },
              sameAs: [
                "https://instagram.com/lucasezequielriera",
                "https://tiktok.com/@lucasezequielriera",
                "https://github.com/lucasezequielriera",
                "https://linkedin.com/in/lucasezequielriera",
              ],
              image: "https://lucas-riera.vercel.app/lucas-photo-1.jpeg",
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
