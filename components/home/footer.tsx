import Link from "next/link";
import { getDictionary, type Locale } from "@/lib/dictionaries";

export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-900/80 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-sm text-neutral-500 md:flex-row">
        <p>{t.footer.rights(currentYear)}</p>
        <nav aria-label="Legal" className="flex items-center gap-4 text-xs text-neutral-600">
          <Link href={`/${locale}/privacidad`} className="transition hover:text-neutral-400">
            {t.footer.privacy}
          </Link>
          <Link href={`/${locale}/aviso-legal`} className="transition hover:text-neutral-400">
            {t.footer.legal}
          </Link>
          <Link href={`/${locale}/cookies`} className="transition hover:text-neutral-400">
            {t.footer.cookies}
          </Link>
        </nav>
        <p className="text-neutral-600 text-center md:text-right">{t.footer.madeBy}</p>
      </div>
    </footer>
  );
}
