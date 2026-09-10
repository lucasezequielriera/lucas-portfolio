"use client";

import dynamic from "next/dynamic";

const NeuralBackground = dynamic(
  () => import("./neural-background").then((m) => m.NeuralBackground),
  { ssr: false }
);

export function NeuralBackgroundLoader() {
  return <NeuralBackground />;
}
