"use client";

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
import { getDictionary, type Locale } from "@/lib/dictionaries";

type StackGroup = {
  key: string;
  icon: LucideIcon;
  color: "cyan" | "violet" | "fuchsia";
  techs: string[];
};

const STACK_GROUPS: StackGroup[] = [
  { key: "ai", icon: Sparkles, color: "cyan", techs: ["OpenAI", "Claude Code", "HeyGen", "Cursor", "n8n", "Make", "Next.js", "Supabase", "Vercel", "Resend"] },
  { key: "core", icon: Layers, color: "violet", techs: ["React", "TypeScript", "Tailwind CSS", "Ant Design", "Zustand", "framer-motion"] },
  { key: "backend", icon: Database, color: "fuchsia", techs: ["Firebase (Auth, Firestore)", "firebase-admin", "Vercel Cron"] },
  { key: "mobile", icon: Smartphone, color: "cyan", techs: ["Capacitor (iOS, Android)"] },
  { key: "payments", icon: CreditCard, color: "violet", techs: ["Stripe"] },
  { key: "media", icon: ImageIcon, color: "fuchsia", techs: ["Cloudinary", "@react-pdf/renderer", "html2canvas", "ExcelJS"] },
  { key: "integrations", icon: Share2, color: "cyan", techs: ["Instagram Graph API", "TikTok API", "Telegram", "Resend"] },
  { key: "testing", icon: CheckCircle2, color: "violet", techs: ["Jest", "Testing Library", "Cypress"] },
  { key: "analytics", icon: BarChart3, color: "fuchsia", techs: ["GA4", "Meta Pixel", "Vercel Analytics", "Search Console"] },
  { key: "infra", icon: Server, color: "cyan", techs: ["Vercel", "GitHub", "ESLint"] },
];

const colorText: Record<StackGroup["color"], string> = {
  cyan: "text-cyan-300",
  violet: "text-violet-300",
  fuchsia: "text-fuchsia-300",
};

function Pill({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[0.7rem] text-white/50">
      {children}
    </span>
  );
}

export function StackPanel({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  const titles: Record<string, string> = {
    ai: t.stack.aiTitle, core: t.stack.coreTitle, backend: t.stack.backendTitle, mobile: t.stack.mobileTitle,
    payments: t.stack.paymentsTitle, media: t.stack.mediaTitle, integrations: t.stack.integrationsTitle,
    testing: t.stack.testingTitle, analytics: t.stack.analyticsTitle, infra: t.stack.infraTitle,
  };

  return (
    <div className="space-y-1.5">
      {STACK_GROUPS.map((group) => {
        const Icon = group.icon;
        return (
          <div key={group.key} className="flex flex-col gap-1.5 border-b border-white/[0.06] py-2.5 last:border-0 sm:flex-row sm:items-center sm:gap-5">
            <div className="flex shrink-0 items-center gap-2 sm:w-44">
              <Icon className={`h-3.5 w-3.5 ${colorText[group.color]}`} />
              <p className="text-xs font-semibold text-white sm:text-sm">{titles[group.key]}</p>
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              {group.techs.map((tech) => (
                <Pill key={tech}>{tech}</Pill>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
