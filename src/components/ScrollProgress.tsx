"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const TRACK = 280;

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const fillHeight = useTransform(smooth, [0, 1], [0, TRACK]);
  const dotY = useTransform(smooth, [0, 1], [0, TRACK]);

  return (
    <div
      className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 md:block"
      style={{ height: TRACK }}
      aria-hidden
    >
      <div className="relative h-full w-px bg-ink/15">
        <motion.div
          className="absolute inset-x-0 top-0 w-px bg-ink"
          style={{ height: fillHeight }}
        />
        <motion.span
          className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-ink bg-volt"
          style={{ top: 0, y: dotY, marginTop: -5 }}
        />
      </div>
    </div>
  );
}
