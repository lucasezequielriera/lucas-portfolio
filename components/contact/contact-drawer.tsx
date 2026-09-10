"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Calendar, Instagram, X } from "lucide-react";
import { getDictionary, locales, type Locale } from "@/lib/dictionaries";
import { ContactForm } from "@/components/home/contact-form";
import { useContactDrawer } from "./contact-drawer-context";

function localeFromPath(pathname: string | null): Locale {
  const seg = pathname?.split("/")[1];
  return (locales as readonly string[]).includes(seg ?? "") ? (seg as Locale) : "es";
}

export function ContactDrawer() {
  const { isOpen, close } = useContactDrawer();
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const t = getDictionary(locale);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            className="fixed inset-0 z-[90] bg-black/75 backdrop-blur-sm"
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={t.contact.title}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="fixed inset-y-0 right-0 z-[95] flex w-full max-w-lg flex-col overflow-y-auto border-l border-white/10 bg-black p-6 sm:p-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-[-0.02em] text-white">{t.contact.title}</h2>
                <p className="mt-1 text-sm text-white/45">{t.contact.description}</p>
              </div>
              <button
                onClick={close}
                aria-label={locale === "es" ? "Cerrar" : locale === "fr" ? "Fermer" : "Close"}
                className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] p-2 text-white/45 transition hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href="https://wa.me/34627043397"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-white/25 hover:bg-white/[0.06]"
              >
                <div className="shrink-0 rounded-full border border-white/10 bg-white/[0.05] p-3">
                  <MessageCircle className="h-5 w-5 text-white/80" />
                </div>
                <div>
                  <p className="font-medium text-white">WhatsApp</p>
                  <p className="text-xs text-white/40">{t.contact.whatsappSub}</p>
                </div>
              </a>
              <a
                href="https://calendly.com/lucasezequielriera-phfi/30min"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-white/25 hover:bg-white/[0.06]"
              >
                <div className="shrink-0 rounded-full border border-white/10 bg-white/[0.05] p-3">
                  <Calendar className="h-5 w-5 text-white/80" />
                </div>
                <div>
                  <p className="font-medium text-white">{t.contact.scheduleCall}</p>
                  <p className="text-xs text-white/40">{t.contact.minutes}</p>
                </div>
              </a>
              <a
                href="https://instagram.com/lucasezequielriera"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-white/25 hover:bg-white/[0.06]"
              >
                <div className="shrink-0 rounded-full border border-white/10 bg-white/[0.05] p-3">
                  <Instagram className="h-5 w-5 text-white/80" />
                </div>
                <div>
                  <p className="font-medium text-white">Instagram</p>
                  <p className="text-xs text-white/40">@lucasezequielriera</p>
                </div>
              </a>
            </div>

            <div className="mt-6">
              <p className="mb-3 font-[family-name:var(--font-geist-mono)] text-[0.65rem] uppercase tracking-[0.2em] text-cyan-300/80">
                {t.contact.formSub}
              </p>
              <ContactForm t={t} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
