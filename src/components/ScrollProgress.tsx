"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const TRACK = 280;

const SECTIONS = [
  { id: "top", label: "01" },
  { id: "journey", label: "02" },
  { id: "projects", label: "04" },
  { id: "experience", label: "05" },
  { id: "stack", label: "06" },
  { id: "contact", label: "07" },
];

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const fillHeight = useTransform(smooth, [0, 1], [0, TRACK]);
  const dotY = useTransform(smooth, [0, 1], [0, TRACK]);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      Boolean
    ) as HTMLElement[];

    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { threshold: [0.2, 0.45, 0.7], rootMargin: "-20% 0px -35% 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
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

        {SECTIONS.map((section, i) => {
          const top = (i / (SECTIONS.length - 1)) * TRACK;
          const isActive = active === section.id;
          return (
            <span
              key={section.id}
              className={`absolute left-3 -translate-y-1/2 font-mono text-[9px] tracking-wider transition-colors duration-300 ${
                isActive ? "text-ink" : "text-ink/30"
              }`}
              style={{ top }}
            >
              {section.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
