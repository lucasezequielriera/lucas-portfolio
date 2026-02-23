"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ScrollAnimation } from "./scroll-animation";
import { getDictionary, type Locale } from "@/lib/dictionaries";

const TECH_STACK = [
  "HTML5", "CSS3", "SASS", "JavaScript", "TypeScript", "React", "Next.js",
  "Vue.js", "Redux", "Vite", "Express", "Node.js", "GraphQL", "Tailwind CSS",
  "Framer Motion", "AntDesign", "Webflow", "PostgreSQL", "MongoDB", "Firebase",
  "Supabase", "Azure", "Docker", "Vercel", "Git", "GitHub Actions", "Jest",
  "React Testing Library", "Storybook", "Figma", "Zeplin", "Jira", "Cursor",
  "AI", "CMS", "Teams", "Slack",
];

export function StackSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const prefersReduced = useReducedMotion();

  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 pb-24">
      <ScrollAnimation>
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              {t.stack.label}
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">{t.stack.title}</h2>
            <p className="mt-3 max-w-2xl text-sm text-neutral-400">{t.stack.description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {TECH_STACK.map((tech, idx) => (
              <motion.div
                key={tech}
                initial={prefersReduced ? false : { opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.03, duration: 0.3 }}
                className="group relative"
              >
                <div className="rounded-full border border-neutral-800 bg-gradient-to-r from-neutral-900/80 to-neutral-800/80 px-4 py-2 text-sm text-neutral-300 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50 hover:bg-gradient-to-r hover:from-emerald-950/30 hover:to-neutral-900/80 hover:text-emerald-300 hover:shadow-lg hover:shadow-emerald-500/10">
                  {tech}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
