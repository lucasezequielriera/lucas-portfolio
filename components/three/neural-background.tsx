"use client";

import { Canvas } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { CanvasErrorBoundary } from "./canvas-error-boundary";
import { NeuralField } from "./neural-field";

export function NeuralBackground() {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return (
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.07),transparent_70%)]"
      />
    );
  }

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <CanvasErrorBoundary>
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
          style={{ position: "fixed", inset: 0, width: "100vw", height: "100dvh", display: "block" }}
          resize={{ scroll: false, debounce: 0 }}
        >
          <NeuralField />
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
