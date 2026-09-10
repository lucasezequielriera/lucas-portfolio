import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";
import { getDictionary, type Locale } from "@/lib/dictionaries";

export function SiteFooterBar({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="fixed bottom-4 left-4 z-30 hidden flex-col gap-1 font-[family-name:var(--font-geist-mono)] text-[0.62rem] uppercase tracking-wider text-white/25 sm:left-6 sm:flex lg:bottom-6">
        <p>{t.footer.rights(currentYear)}</p>
        <nav aria-label="Legal" className="flex items-center gap-2.5">
          <Link href={`/${locale}/privacidad`} className="transition hover:text-white/60">
            {t.footer.privacy}
          </Link>
          <Link href={`/${locale}/aviso-legal`} className="transition hover:text-white/60">
            {t.footer.legal}
          </Link>
          <Link href={`/${locale}/cookies`} className="transition hover:text-white/60">
            {t.footer.cookies}
          </Link>
        </nav>
      </div>
      <div className="fixed bottom-4 right-4 z-30 hidden items-center gap-3 text-white/30 sm:right-6 sm:flex lg:bottom-6">
        <a href="https://github.com/lucasezequielriera" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-white/70">
          <Github className="h-3.5 w-3.5" />
        </a>
        <a href="https://linkedin.com/in/lucasezequielriera" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-white/70">
          <Linkedin className="h-3.5 w-3.5" />
        </a>
        <a href="https://instagram.com/lucasezequielriera" target="_blank" rel="noreferrer" aria-label="Instagram" className="transition hover:text-white/70">
          <Instagram className="h-3.5 w-3.5" />
        </a>
      </div>
    </>
  );
}
