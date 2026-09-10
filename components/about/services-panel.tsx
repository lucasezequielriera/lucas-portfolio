"use client";

import Link from "next/link";
import { Terminal, Layers, Palette } from "lucide-react";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import { landingEntries } from "@/lib/seo-landings";

export function ServicesPanel({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const webappsSlug = landingEntries.find((e) => e.id === "webapps")?.slug[locale] ?? "";
  const aiSlug = landingEntries.find((e) => e.id === "ai")?.slug[locale] ?? "";
  const consultingSlug = landingEntries.find((e) => e.id === "consulting")?.slug[locale] ?? "";
  const remoteSlug = landingEntries.find((e) => e.id === "remote")?.slug[locale] ?? "";

  const cards = [
    { href: `/${locale}/services/${webappsSlug}`, icon: Terminal, color: "cyan", title: t.services.saasTitle, desc: t.services.saasDescription },
    { href: `/${locale}/services/${aiSlug}`, icon: Layers, color: "violet", title: t.services.systemsTitle, desc: t.services.systemsDescription },
    { href: `/${locale}/services/${consultingSlug}`, icon: Palette, color: "fuchsia", title: t.services.websTitle, desc: t.services.websDescription },
  ] as const;

  const cardStyle = {
    bg: "bg-white/[0.06]",
    icon: "text-white/80",
    hover: "hover:border-white/25 hover:shadow-white/5",
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;
          const c = cardStyle;
          return (
            <Link key={card.href} href={card.href} className="block h-full">
              <div className={`group h-full rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:bg-white/[0.05] hover:shadow-lg ${c.hover}`}>
                <div className={`w-fit rounded-lg ${c.bg} p-2.5 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={`h-5 w-5 ${c.icon}`} />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-white">{card.title}</h3>
                <p className="mt-1.5 text-xs text-white/45">{card.desc}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3.5 text-xs text-white/60">
        <p>
          {locale === "es"
            ? "También puedes contratarme como programador freelance remoto para proyectos internacionales."
            : locale === "fr"
              ? "Vous pouvez aussi me contacter comme developpeur freelance remote pour des projets internationaux."
              : "You can also hire me as a remote freelance developer for international projects."}
        </p>
        <Link href={`/${locale}/services/${remoteSlug}`} className="mt-2 inline-flex text-cyan-300 transition hover:text-cyan-200">
          {locale === "es" ? "Ver landing de programador remoto →" : locale === "fr" ? "Voir la landing →" : "View remote developer landing →"}
        </Link>
      </div>
    </div>
  );
}
