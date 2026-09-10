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
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-white">
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-red-400">
        Error
      </p>
      <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
        Something went wrong
      </h1>
      <p className="mt-3 max-w-md text-center text-sm text-white/50">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="mt-8 inline-flex items-center justify-center rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-5 py-2.5 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
      >
        Try again
      </button>
    </main>
  );
}
