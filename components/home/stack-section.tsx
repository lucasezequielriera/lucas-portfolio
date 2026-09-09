"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Sparkles,
  Layers,
  Database,
  Smartphone,
  CreditCard,
  Image as ImageIcon,
  Share2,
  CheckCircle2,
  BarChart3,
  Server,
  type LucideIcon,
} from "lucide-react";
import { ScrollAnimation } from "./scroll-animation";
import { getDictionary, type Locale } from "@/lib/dictionaries";

type StackGroup = {
  key: string;
  icon: LucideIcon;
  color: "emerald" | "sky" | "violet" | "amber" | "rose";
  techs: string[];
};

const STACK_GROUPS: StackGroup[] = [
  {
    key: "ai",
    icon: Sparkles,
    color: "emerald",
    techs: [
      "OpenAI",
      "Claude Code",
      "HeyGen",
      "Cursor",
      "n8n",
      "Make",
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Vercel",
      "Resend",
    ],
  },
  {
    key: "core",
    icon: Layers,
    color: "sky",
    techs: [
      "Next.js",
      "React",
      "Hooks",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Sass",
      "Less",
      "Tailwind CSS",
      "Ant Design",
      "Zustand",
      "framer-motion",
    ],
  },
  {
    key: "backend",
    icon: Database,
    color: "violet",
    techs: ["Firebase (Auth, Firestore)", "firebase-admin", "Vercel Cron"],
  },
  { key: "mobile", icon: Smartphone, color: "amber", techs: ["Capacitor (iOS, Android)"] },
  { key: "payments", icon: CreditCard, color: "rose", techs: ["Stripe"] },
  {
    key: "media",
    icon: ImageIcon,
    color: "sky",
    techs: ["Cloudinary", "@react-pdf/renderer", "html2canvas", "ExcelJS"],
  },
  {
    key: "integrations",
    icon: Share2,
    color: "violet",
    techs: ["Instagram Graph API", "TikTok API", "Telegram", "Resend"],
  },
  { key: "testing", icon: CheckCircle2, color: "amber", techs: ["Jest", "Testing Library", "Cypress"] },
  {
    key: "analytics",
    icon: BarChart3,
    color: "rose",
    techs: [
      "GA4",
      "Meta Pixel",
      "TikTok Pixel",
      "Vercel Analytics",
      "IndexNow",
      "Google Search Console",
    ],
  },
  { key: "infra", icon: Server, color: "emerald", techs: ["Vercel", "GitHub", "ESLint"] },
];

const colorText: Record<StackGroup["color"], string> = {
  emerald: "text-emerald-400",
  sky: "text-sky-400",
  violet: "text-violet-400",
  amber: "text-amber-400",
  rose: "text-rose-400",
};

function Pill({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-neutral-800 bg-neutral-950/60 px-2.5 py-1 text-xs text-neutral-400">
      {children}
    </span>
  );
}

export function StackSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const prefersReduced = useReducedMotion();

  const titles: Record<string, string> = {
    ai: t.stack.aiTitle,
    core: t.stack.coreTitle,
    backend: t.stack.backendTitle,
    mobile: t.stack.mobileTitle,
    payments: t.stack.paymentsTitle,
    media: t.stack.mediaTitle,
    integrations: t.stack.integrationsTitle,
    testing: t.stack.testingTitle,
    analytics: t.stack.analyticsTitle,
    infra: t.stack.infraTitle,
  };
  const descriptions: Record<string, string> = {
    ai: t.stack.aiDescription,
    core: t.stack.coreDescription,
    backend: t.stack.backendDescription,
    mobile: t.stack.mobileDescription,
    payments: t.stack.paymentsDescription,
    media: t.stack.mediaDescription,
    integrations: t.stack.integrationsDescription,
    testing: t.stack.testingDescription,
    analytics: t.stack.analyticsDescription,
    infra: t.stack.infraDescription,
  };

  const [aiGroup, ...restGroups] = STACK_GROUPS;
  const AiIcon = aiGroup.icon;

  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 pb-24">
      <ScrollAnimation>
        <div className="space-y-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              {t.stack.label}
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">{t.stack.title}</h2>
            <p className="mt-3 max-w-2xl text-sm text-neutral-400">{t.stack.description}</p>
          </div>

          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-emerald-500/30 bg-emerald-500/[0.04] p-5"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
              <div className="flex shrink-0 items-center gap-3 sm:w-56">
                <AiIcon className="h-5 w-5 text-emerald-400" />
                <div>
                  <p className="text-base font-semibold text-neutral-100">{titles.ai}</p>
                  <p className="text-xs text-neutral-400">{descriptions.ai}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:pt-0.5">
                {aiGroup.techs.map((tech) => (
                  <Pill key={tech}>{tech}</Pill>
                ))}
              </div>
            </div>
          </motion.div>

          <div>
            {restGroups.map((group, idx) => {
              const Icon = group.icon;
              return (
                <ScrollAnimation key={group.key} delay={idx * 0.03}>
                  <div className="flex flex-col gap-2 border-b border-neutral-800 py-4 last:border-0 sm:flex-row sm:items-start sm:gap-6">
                    <div className="flex shrink-0 items-center gap-3 sm:w-56">
                      <Icon className={`h-4 w-4 ${colorText[group.color]}`} />
                      <div>
                        <p className="text-sm font-semibold text-neutral-100">
                          {titles[group.key]}
                        </p>
                        <p className="text-xs text-neutral-500">{descriptions[group.key]}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 sm:pt-0.5">
                      {group.techs.map((tech) => (
                        <Pill key={tech}>{tech}</Pill>
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
