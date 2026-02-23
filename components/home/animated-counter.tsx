"use client";

import { useRef, useState, useEffect } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export function AnimatedCounter({
  end,
  duration = 2000,
}: {
  end: number;
  duration?: number;
}) {
  const [count, setCount] = useState(end);
  const hasAnimatedRef = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!isInView || hasAnimatedRef.current || prefersReduced) return;
    hasAnimatedRef.current = true;
    let startTime: number;
    let frameId: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, end, duration, prefersReduced]);

  return <span ref={ref}>{count}</span>;
}
