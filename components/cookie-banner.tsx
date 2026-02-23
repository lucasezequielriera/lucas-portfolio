"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { getDictionary, type Locale } from "@/lib/dictionaries";

function getConsentSnapshot() {
  return typeof window !== "undefined"
    ? localStorage.getItem("cookie-consent")
    : "unknown";
}

function subscribeToStorage(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

export function CookieBanner({ locale }: { locale: Locale }) {
  const consent = useSyncExternalStore(
    subscribeToStorage,
    getConsentSnapshot,
    () => "unknown"
  );
  const [dismissed, setDismissed] = useState(false);
  const t = getDictionary(locale);

  if (consent || dismissed) return null;

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setDismissed(true);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    document.cookie = "locale=;path=/;max-age=0";
    setDismissed(true);
  };

  return (
    <div
      role="dialog"
      aria-label={t.legal.cookieTitle}
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-800 bg-neutral-950/95 px-6 py-4 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-neutral-400">
          {t.cookieBanner.text}{" "}
          <Link
            href={`/${locale}/cookies`}
            className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300"
          >
            {t.cookieBanner.moreInfo}
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={decline}
            className="rounded-lg border border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-300 transition hover:bg-neutral-800"
          >
            {t.cookieBanner.decline}
          </button>
          <button
            onClick={accept}
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-500"
          >
            {t.cookieBanner.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
