"use client";

import { useEffect, useRef } from "react";

/**
 * The starfield used to run on three.js, which cost 882 KB of JavaScript to
 * draw what is, in the end, a set of projected points. This does the same work
 * on a 2D canvas: stars live in a 3D sphere, rotate, and are projected each
 * frame, so the depth and parallax are unchanged — but nothing ships beyond
 * this file.
 *
 * The glow comes from a sprite rendered once into an offscreen canvas and then
 * blitted per star, which is far cheaper than stroking gradients every frame.
 */

const RADIUS = 4.6;
const FOCAL = 7;
/** Share of stars carrying the brand accent rather than white. */
const CYAN_SHARE = 0.14;
const SPRITE_SIZE = 64;

type Star = {
  x: number;
  y: number;
  z: number;
  size: number;
  bright: number;
  phase: number;
  speed: number;
  cyan: boolean;
};

function buildStars(count: number): Star[] {
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    // Cube root spreads them evenly through the volume instead of clumping
    // toward the centre.
    const r = RADIUS * Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    const roll = Math.random();
    let size: number;
    let bright: number;
    if (roll > 0.975) {
      size = 3.0;
      bright = 1;
    } else if (roll > 0.88) {
      size = 1.9;
      bright = 0.7 + Math.random() * 0.2;
    } else {
      size = 1.0 + Math.random() * 0.6;
      bright = 0.32 + Math.random() * 0.26;
    }

    stars.push({
      x: r * Math.sin(phi) * Math.cos(theta),
      y: r * Math.sin(phi) * Math.sin(theta),
      z: r * Math.cos(phi),
      size,
      bright,
      phase: Math.random() * Math.PI * 2,
      // Bright stars pulse slower so they read as steady points rather than
      // flickering along with the dust.
      speed: bright > 0.6 ? 0.35 + Math.random() * 0.5 : 0.7 + Math.random() * 1.9,
      cyan: Math.random() < CYAN_SHARE,
    });
  }
  return stars;
}

/** A soft radial dot, drawn once and reused for every star. */
function makeSprite(color: string) {
  const c = document.createElement("canvas");
  c.width = c.height = SPRITE_SIZE;
  const ctx = c.getContext("2d")!;
  const half = SPRITE_SIZE / 2;
  const g = ctx.createRadialGradient(half, half, 0, half, half, half);
  g.addColorStop(0, color);
  g.addColorStop(0.16, color.replace("1)", "0.85)"));
  g.addColorStop(0.42, color.replace("1)", "0.28)"));
  g.addColorStop(1, color.replace("1)", "0)"));
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, SPRITE_SIZE, SPRITE_SIZE);
  return c;
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    // Phones do the same work on a smaller screen and a tighter power budget.
    const stars = buildStars(coarse ? 1100 : 2200);

    const white = makeSprite("rgba(255,255,255,1)");
    const cyan = makeSprite("rgba(103,232,249,1)");

    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    let pointerX = 0;
    let pointerY = 0;
    const onPointer = (e: PointerEvent) => {
      pointerX = (e.clientX / window.innerWidth) * 2 - 1;
      pointerY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    let spin = 0;
    let raf = 0;
    let last = performance.now();
    let tiltX = 0;
    let tiltY = 0;

    const draw = (now: number) => {
      const delta = Math.min((now - last) / 1000, 0.05);
      last = now;

      if (!reduced) spin += delta * 0.04;
      tiltX += (pointerY * 0.22 - tiltX) * 0.03;
      tiltY += (pointerX * 0.3 - tiltY) * 0.03;

      const cosY = Math.cos(spin + tiltY);
      const sinY = Math.sin(spin + tiltY);
      const cosX = Math.cos(tiltX);
      const sinX = Math.sin(tiltX);

      const cx = width / 2;
      const cy = height / 2;
      const scale = Math.max(width, height) * 0.62;
      const t = now / 1000;

      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        // Rotate around Y, then tilt around X.
        const x1 = s.x * cosY - s.z * sinY;
        const z1 = s.x * sinY + s.z * cosY;
        const y2 = s.y * cosX - z1 * sinX;
        const z2 = s.y * sinX + z1 * cosX;

        const depth = FOCAL - z2;
        if (depth <= 0.1) continue;

        const k = FOCAL / depth;
        const px = cx + x1 * k * scale * 0.5;
        const py = cy + y2 * k * scale * 0.5;
        if (px < -40 || px > width + 40 || py < -40 || py > height + 40) continue;

        // Never fully off: dips to 0.35 so stars breathe rather than blink out.
        const twinkle = reduced ? 1 : 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * s.speed + s.phase));
        const alpha = Math.min(s.bright * twinkle * 1.25, 1);
        if (alpha < 0.02) continue;

        const r = Math.min(s.size * k * (1 + twinkle * 0.4) * 1.75, 13);

        ctx.globalAlpha = alpha;
        ctx.drawImage(s.cyan ? cyan : white, px - r, py - r, r * 2, r * 2);
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    const start = () => {
      if (raf) return;
      last = performance.now();
      raf = requestAnimationFrame(draw);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    // No reason to burn frames while the tab is in the background.
    const onVisibility = () => (document.hidden ? stop() : start());

    window.addEventListener("resize", resize);
    if (!coarse) window.addEventListener("pointermove", onPointer, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    start();

    return () => {
      stop();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
