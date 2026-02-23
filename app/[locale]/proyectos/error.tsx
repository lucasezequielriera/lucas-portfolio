"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ProjectsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Projects error:", error);
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
        We couldn&apos;t load this project. Please try again.
      </p>
      <div className="mt-8 flex gap-4">
        <button
          onClick={reset}
          className="inline-flex items-center justify-center rounded-lg border border-emerald-500/50 bg-emerald-500/10 px-5 py-2.5 text-sm font-medium text-emerald-300 transition hover:bg-emerald-500/20"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/60 px-5 py-2.5 text-sm font-medium text-neutral-300 transition hover:border-neutral-700 hover:text-neutral-100"
        >
          Go home
        </Link>
      </div>
    </main>
  );
}
