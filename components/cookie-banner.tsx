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
      className="fixed bottom-24 left-4 right-4 z-50 mx-auto max-w-sm rounded-2xl border border-white/10 bg-black/70 p-4 backdrop-blur-xl sm:left-auto sm:right-6"
    >
      <p className="text-xs text-white/55">
        {t.cookieBanner.text}{" "}
        <Link
          href={`/${locale}/cookies`}
          className="text-cyan-300 underline underline-offset-2 hover:text-cyan-200"
        >
          {t.cookieBanner.moreInfo}
        </Link>
      </p>
      <div className="mt-3 flex justify-end gap-2">
        <button
          onClick={decline}
          className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-medium text-white/60 transition hover:bg-white/10"
        >
          {t.cookieBanner.decline}
        </button>
        <button
          onClick={accept}
          className="rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-black transition hover:bg-white/90"
        >
          {t.cookieBanner.accept}
        </button>
      </div>
    </div>
  );
}
