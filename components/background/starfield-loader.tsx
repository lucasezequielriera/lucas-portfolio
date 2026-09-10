"use client";

import dynamic from "next/dynamic";

// Client-only: the canvas needs window on first paint, and keeping it out of the
// server render means the background never blocks the text appearing.
const Starfield = dynamic(() => import("./starfield").then((m) => m.Starfield), {
  ssr: false,
});

export function StarfieldLoader() {
  return <Starfield />;
}
