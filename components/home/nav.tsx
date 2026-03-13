"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { MapPin, Menu, X } from "lucide-react";
import { getDictionary, type Locale } from "@/lib/dictionaries";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Nav({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const prefersReduced = useReducedMotion();
  const currentLocaleLabel = locale.toUpperCase();

  const closeMenu = useCallback(() => setMobileMenuOpen(false), []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        toggleRef.current?.focus();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen, closeMenu]);

  const handleNavClick = (id: string) => {
    scrollToId(id);
    closeMenu();
  };

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-neutral-900/60 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium tracking-[0.2em] text-neutral-400 uppercase">
              Lucas Riera
            </span>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              Software Developer
            </span>
            <span className="hidden items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-900/60 px-2.5 py-1 text-xs text-neutral-400 md:flex">
              <MapPin className="h-3 w-3" />
              {t.nav.location}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <nav aria-label={t.nav.mainNav} className="hidden gap-4 text-sm text-neutral-400 md:flex">
              <button onClick={() => handleNavClick("trabajos")} className="rounded-md px-1 transition hover:text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/70">
                {t.nav.trabajos}
              </button>
              <button onClick={() => handleNavClick("experiencia")} className="rounded-md px-1 transition hover:text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/70">
                {t.nav.experiencia}
              </button>
              <button onClick={() => handleNavClick("stack")} className="rounded-md px-1 transition hover:text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/70">
                {t.nav.stack}
              </button>
              <button onClick={() => handleNavClick("services")} className="rounded-md px-1 transition hover:text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/70">
                {t.services.label}
              </button>
              <Link href={`/${locale}/proyectos`} className="rounded-md px-1 transition hover:text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/70">
                {t.nav.proyectos}
              </Link>
              <button onClick={() => handleNavClick("contacto")} className="rounded-md px-1 transition hover:text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/70">
                {t.nav.contacto}
              </button>
            </nav>
            <nav
              aria-label={locale === "es" ? "Selector de idioma" : "Language selector"}
              className="hidden items-center gap-1 rounded-md border border-neutral-800 bg-neutral-900/60 p-1 sm:flex"
            >
              <Link
                href="/es"
                onClick={() => {
                  document.cookie = "locale=es;path=/;max-age=31536000";
                }}
                className={`rounded px-2 py-1 text-xs font-medium transition ${
                  currentLocaleLabel === "ES"
                    ? "bg-emerald-500/20 text-emerald-300"
                    : "text-neutral-400 hover:text-neutral-100"
                }`}
              >
                ES
              </Link>
              <Link
                href="/en"
                onClick={() => {
                  document.cookie = "locale=en;path=/;max-age=31536000";
                }}
                className={`rounded px-2 py-1 text-xs font-medium transition ${
                  currentLocaleLabel === "EN"
                    ? "bg-emerald-500/20 text-emerald-300"
                    : "text-neutral-400 hover:text-neutral-100"
                }`}
              >
                EN
              </Link>
              <Link
                href="/fr"
                onClick={() => {
                  document.cookie = "locale=fr;path=/;max-age=31536000";
                }}
                className={`rounded px-2 py-1 text-xs font-medium transition ${
                  currentLocaleLabel === "FR"
                    ? "bg-emerald-500/20 text-emerald-300"
                    : "text-neutral-400 hover:text-neutral-100"
                }`}
              >
                FR
              </Link>
            </nav>
            <button
              ref={toggleRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden rounded-lg border border-neutral-800 bg-neutral-900/60 p-2 text-neutral-400 transition hover:text-neutral-100"
              aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.nav
            ref={menuRef}
            id="mobile-nav"
            aria-label={t.nav.mobileNav}
            initial={prefersReduced ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-1 border-t border-neutral-900/60 bg-neutral-950/95 px-6 pb-4 pt-2 text-sm md:hidden"
          >
            <button onClick={() => handleNavClick("trabajos")} className="rounded-lg px-3 py-2.5 text-left text-neutral-300 transition hover:bg-neutral-900 hover:text-neutral-100">{t.nav.trabajos}</button>
            <button onClick={() => handleNavClick("experiencia")} className="rounded-lg px-3 py-2.5 text-left text-neutral-300 transition hover:bg-neutral-900 hover:text-neutral-100">{t.nav.experiencia}</button>
            <button onClick={() => handleNavClick("stack")} className="rounded-lg px-3 py-2.5 text-left text-neutral-300 transition hover:bg-neutral-900 hover:text-neutral-100">{t.nav.stack}</button>
            <button onClick={() => handleNavClick("services")} className="rounded-lg px-3 py-2.5 text-left text-neutral-300 transition hover:bg-neutral-900 hover:text-neutral-100">{t.services.label}</button>
            <Link href={`/${locale}/proyectos`} onClick={closeMenu} className="rounded-lg px-3 py-2.5 text-neutral-300 transition hover:bg-neutral-900 hover:text-neutral-100">{t.nav.proyectos}</Link>
            <button onClick={() => handleNavClick("contacto")} className="rounded-lg px-3 py-2.5 text-left text-neutral-300 transition hover:bg-neutral-900 hover:text-neutral-100">{t.nav.contacto}</button>
            <div className="mt-2 flex items-center gap-2 border-t border-neutral-800 pt-3">
              <Link
                href="/es"
                onClick={() => {
                  document.cookie = "locale=es;path=/;max-age=31536000";
                  closeMenu();
                }}
                className={`rounded px-2 py-1 text-xs font-medium transition ${
                  currentLocaleLabel === "ES"
                    ? "bg-emerald-500/20 text-emerald-300"
                    : "text-neutral-400 hover:text-neutral-100"
                }`}
              >
                ES
              </Link>
              <Link
                href="/en"
                onClick={() => {
                  document.cookie = "locale=en;path=/;max-age=31536000";
                  closeMenu();
                }}
                className={`rounded px-2 py-1 text-xs font-medium transition ${
                  currentLocaleLabel === "EN"
                    ? "bg-emerald-500/20 text-emerald-300"
                    : "text-neutral-400 hover:text-neutral-100"
                }`}
              >
                EN
              </Link>
              <Link
                href="/fr"
                onClick={() => {
                  document.cookie = "locale=fr;path=/;max-age=31536000";
                  closeMenu();
                }}
                className={`rounded px-2 py-1 text-xs font-medium transition ${
                  currentLocaleLabel === "FR"
                    ? "bg-emerald-500/20 text-emerald-300"
                    : "text-neutral-400 hover:text-neutral-100"
                }`}
              >
                FR
              </Link>
            </div>
          </motion.nav>
        )}
      </header>
    </>
  );
}
