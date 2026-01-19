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

export const metadata = {
  title: "Lucas Riera — Disciplina, Salud y Desarrollo",
  description:
    "Lucas Riera. Programador frontend enfocado en disciplina, healthy lifestyle y construcción de una vida clara y ordenada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
              url: "https://lucasriera.com",
              jobTitle: "Frontend Developer",
              sameAs: [
                "https://instagram.com/lucasezequielriera",
                "https://tiktok.com/lucasezequielriera",
                "https://github.com/lucasezequielriera"
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
