"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Fingerprint, LayoutGrid, Wrench, MessageCircle } from "lucide-react";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import { useContactDrawer } from "@/components/contact/contact-drawer-context";

export function DockNav({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const pathname = usePathname();
  const { open: openContact } = useContactDrawer();
  const [hovered, setHovered] = useState<string | null>(null);
  const currentLocaleLabel = locale.toUpperCase();

  const homeLabel = locale === "es" ? "Inicio" : locale === "fr" ? "Accueil" : "Home";

  const items = [
    { key: "home", href: `/${locale}`, label: homeLabel, icon: Home },
    { key: "about", href: `/${locale}/sobre-mi`, label: t.nav.sobreMi, icon: Fingerprint },
    { key: "work", href: `/${locale}/proyectos`, label: t.nav.proyectos, icon: LayoutGrid },
    { key: "tools", href: `/${locale}/herramientas`, label: t.nav.herramientas, icon: Wrench },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <div className="fixed left-4 top-4 z-40 sm:left-6 sm:top-6">
        <Link
          href={`/${locale}`}
          className="font-[family-name:var(--font-display)] text-base font-normal tracking-normal text-white/90 transition hover:text-white"
        >
          LR<span className="text-cyan-300">.</span>
        </Link>
      </div>

      <div className="fixed right-4 top-4 z-40 flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur-xl sm:right-6 sm:top-6">
        {(["es", "en", "fr"] as const).map((loc) => (
          <Link
            key={loc}
            href={`/${loc}`}
            onClick={() => {
              document.cookie = `locale=${loc};path=/;max-age=31536000`;
            }}
            className={`rounded-full px-2 py-1 text-[0.65rem] font-medium tracking-wide transition ${
              currentLocaleLabel === loc.toUpperCase()
                ? "bg-white/10 text-white"
                : "text-white/40 hover:text-white/80"
            }`}
          >
            {loc.toUpperCase()}
          </Link>
        ))}
      </div>

      <nav
        aria-label={t.nav.mainNav}
        className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2 sm:bottom-6"
      >
        <div className="flex items-center gap-0.5 rounded-full border border-white/10 bg-white/[0.04] p-1.5 shadow-[0_0_40px_-12px_rgba(139,92,246,0.4)] backdrop-blur-xl">
          {items.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.key}
                href={item.href}
                onMouseEnter={() => setHovered(item.key)}
                onMouseLeave={() => setHovered(null)}
                aria-current={active ? "page" : undefined}
                className="relative flex h-10 w-10 items-center justify-center rounded-full transition sm:h-11 sm:w-11"
              >
                {active && (
                  <motion.span
                    layoutId="dock-active"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-violet-500/20"
                  />
                )}
                <Icon
                  className={`relative z-10 h-4 w-4 transition ${
                    active ? "text-cyan-300" : "text-white/50 hover:text-white/90"
                  }`}
                />
                {hovered === item.key && (
                  <motion.span
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-8 whitespace-nowrap rounded-md bg-black/80 px-2 py-1 font-[family-name:var(--font-geist-mono)] text-[0.62rem] uppercase tracking-wider text-white/80"
                  >
                    {item.label}
                  </motion.span>
                )}
              </Link>
            );
          })}
          <div className="mx-1 h-6 w-px bg-white/10" />
          <button
            onMouseEnter={() => setHovered("contact")}
            onMouseLeave={() => setHovered(null)}
            onClick={openContact}
            className="relative flex h-10 w-10 items-center justify-center rounded-full transition sm:h-11 sm:w-11"
          >
            <MessageCircle className="h-4 w-4 text-white/50 transition hover:text-white/90" />
            {hovered === "contact" && (
              <motion.span
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -top-8 whitespace-nowrap rounded-md bg-black/80 px-2 py-1 font-[family-name:var(--font-geist-mono)] text-[0.62rem] uppercase tracking-wider text-white/80"
              >
                {t.nav.contacto}
              </motion.span>
            )}
          </button>
        </div>
      </nav>
    </>
  );
}
