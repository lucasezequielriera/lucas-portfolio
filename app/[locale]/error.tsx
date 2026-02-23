"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Page error:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 px-6 text-neutral-100">
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-red-400">
        Error
      </p>
      <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
        Something went wrong
      </h1>
      <p className="mt-3 max-w-md text-center text-sm text-neutral-400">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="mt-8 inline-flex items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/50 px-5 py-2.5 text-sm font-medium text-emerald-300 transition hover:bg-emerald-500/20"
      >
        Try again
      </button>
    </main>
  );
}
