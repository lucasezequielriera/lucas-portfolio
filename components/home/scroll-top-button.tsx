"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { getDictionary, type Locale } from "@/lib/dictionaries";

export function ScrollTopButton({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.button
      initial={prefersReduced ? false : { opacity: 0, scale: 0.8 }}
      animate={showScrollTop ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 rounded-full border border-neutral-800 bg-neutral-900/90 p-3 text-neutral-400 shadow-lg backdrop-blur transition hover:border-emerald-500/50 hover:text-emerald-400"
      aria-label={t.scrollTop}
      style={{ pointerEvents: showScrollTop ? "auto" : "none" }}
    >
      <ChevronUp className="h-5 w-5" />
    </motion.button>
  );
}
