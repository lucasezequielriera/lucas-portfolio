"use client";

import { motion, useReducedMotion } from "framer-motion";

const ROLE = "AI Product Engineer";

/**
 * The role reads as a line being typed into a terminal rather than a badge:
 * bracketed like the wordmark, letter-spaced wide, with a caret that keeps
 * blinking once the text has landed.
 */
export function RoleSignature({ delay = 0 }: { delay?: number }) {
  const prefersReduced = useReducedMotion();
  const letters = ROLE.split("");
  const perLetter = 0.035;
  const settled = delay + letters.length * perLetter;

  return (
    <div className="flex items-center justify-center gap-2 font-[family-name:var(--font-geist-mono)] text-[0.6rem] uppercase sm:text-[0.7rem]">
      <span className="text-white/25">[</span>

      {/* Splitting the role into one span per letter is what makes the typing
          effect possible, but it also means crawlers and screen readers see
          "A I P r o d u c t". The real string is exposed once here, and the
          animated letters are hidden from the accessibility tree. */}
      <span className="sr-only">{ROLE}</span>

      <span aria-hidden="true" className="flex tracking-[0.34em] text-white/60">
        {letters.map((char, i) => (
          <motion.span
            key={i}
            initial={prefersReduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.12, delay: delay + i * perLetter }}
            className={char === " " ? "w-[0.34em]" : undefined}
          >
            {char === " " ? " " : char}
          </motion.span>
        ))}
      </span>

      <motion.span
        aria-hidden="true"
        initial={prefersReduced ? false : { opacity: 0 }}
        animate={prefersReduced ? { opacity: 1 } : { opacity: [0, 1, 1, 0] }}
        transition={
          prefersReduced
            ? { duration: 0 }
            : { duration: 1.1, delay: settled, repeat: Infinity, times: [0, 0.1, 0.6, 1] }
        }
        className="-ml-[0.28em] h-[0.95em] w-[2px] bg-cyan-300"
      />

      <span className="text-white/25">]</span>
    </div>
  );
}
