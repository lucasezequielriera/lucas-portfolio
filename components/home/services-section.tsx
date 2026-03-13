"use client";

import Link from "next/link";
import { Terminal, Layers, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollAnimation } from "./scroll-animation";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import { landingEntries } from "@/lib/seo-landings";

export function ServicesSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const webappsSlug =
    landingEntries.find((entry) => entry.id === "webapps")?.slug[locale] ?? "";
  const aiSlug = landingEntries.find((entry) => entry.id === "ai")?.slug[locale] ?? "";
  const consultingSlug =
    landingEntries.find((entry) => entry.id === "consulting")?.slug[locale] ?? "";
  const remoteSlug =
    landingEntries.find((entry) => entry.id === "remote")?.slug[locale] ?? "";

  return (
    <section id="services" className="mx-auto max-w-6xl px-6 pb-24 space-y-10">
      <ScrollAnimation>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
            {t.services.label}
          </p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">{t.services.title}</h2>
          <p className="mt-3 max-w-2xl text-sm text-neutral-400">{t.services.description}</p>
        </div>
      </ScrollAnimation>
      <div className="grid gap-6 md:grid-cols-3">
        <ScrollAnimation delay={0}>
          <Link href={`/${locale}/services/${webappsSlug}`} className="block h-full">
            <Card className="group h-full bg-neutral-900/70 border-neutral-800 transition-all duration-300 hover:border-emerald-500/50 hover:bg-neutral-900/90 hover:shadow-lg hover:shadow-emerald-500/10">
              <CardContent className="space-y-4 p-6">
                <div className="rounded-lg bg-emerald-500/10 p-3 w-fit transition-transform duration-300 group-hover:scale-110">
                  <Terminal className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-100">{t.services.saasTitle}</h3>
                <p className="text-sm text-neutral-400">{t.services.saasDescription}</p>
              </CardContent>
            </Card>
          </Link>
        </ScrollAnimation>
        <ScrollAnimation delay={0.1}>
          <Link href={`/${locale}/services/${aiSlug}`} className="block h-full">
            <Card className="group h-full bg-neutral-900/70 border-neutral-800 transition-all duration-300 hover:border-sky-500/50 hover:bg-neutral-900/90 hover:shadow-lg hover:shadow-sky-500/10">
              <CardContent className="space-y-4 p-6">
                <div className="rounded-lg bg-sky-500/10 p-3 w-fit transition-transform duration-300 group-hover:scale-110">
                  <Layers className="h-6 w-6 text-sky-400" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-100">{t.services.systemsTitle}</h3>
                <p className="text-sm text-neutral-400">{t.services.systemsDescription}</p>
              </CardContent>
            </Card>
          </Link>
        </ScrollAnimation>
        <ScrollAnimation delay={0.2}>
          <Link href={`/${locale}/services/${consultingSlug}`} className="block h-full">
            <Card className="group h-full bg-neutral-900/70 border-neutral-800 transition-all duration-300 hover:border-purple-500/50 hover:bg-neutral-900/90 hover:shadow-lg hover:shadow-purple-500/10">
              <CardContent className="space-y-4 p-6">
                <div className="rounded-lg bg-purple-500/10 p-3 w-fit transition-transform duration-300 group-hover:scale-110">
                  <Palette className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-100">{t.services.websTitle}</h3>
                <p className="text-sm text-neutral-400">{t.services.websDescription}</p>
              </CardContent>
            </Card>
          </Link>
        </ScrollAnimation>
      </div>

      <ScrollAnimation delay={0.25}>
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm text-neutral-300">
          <p>
            {locale === "es"
              ? "Tambien podes contratarme como programador freelance remoto para proyectos internacionales."
              : "You can also hire me as a remote freelance developer for international projects."}
          </p>
          <Link
            href={`/${locale}/services/${remoteSlug}`}
            className="mt-3 inline-flex text-emerald-400 transition hover:text-emerald-300"
          >
            {locale === "es"
              ? "Ver landing de programador freelance remoto"
              : "View remote freelance developer landing"}
          </Link>
        </div>
      </ScrollAnimation>
    </section>
  );
}
