import { Geist, Geist_Mono, Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { headers } from "next/headers";
import { ContactDrawerProvider } from "@/components/contact/contact-drawer-context";
import { ContactDrawer } from "@/components/contact/contact-drawer";
import { NeuralBackgroundLoader } from "@/components/three/neural-background-loader";
import { CustomCursor } from "@/components/chrome/custom-cursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata = {
  title: {
    default: "Lucas Riera — Product Engineer",
    template: "%s | Lucas Riera",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const h = await headers();
  const lang = h.get("x-locale") || "es";

  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} bg-black antialiased`}
      >
        <NeuralBackgroundLoader />
        <CustomCursor />
        <ContactDrawerProvider>
          {children}
          <ContactDrawer />
        </ContactDrawerProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
