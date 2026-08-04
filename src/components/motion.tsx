"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 28 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease },
  },
};

const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

const variantMap = {
  up: fadeUp,
  fade,
  left: fadeLeft,
  right: fadeRight,
  scale: scaleIn,
} as const;

export type RevealVariant = keyof typeof variantMap;

export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={variantMap[variant]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -6% 0px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/** Giant section watermark + label — Marcelo-style number reveal */
export function SectionMark({
  number,
  label,
  tone = "ink",
}: {
  number: string;
  label: string;
  tone?: "ink" | "light";
}) {
  const reduce = useReducedMotion();
  const dim = tone === "light" ? "text-white/45" : "text-dim";
  const ghost = tone === "light" ? "text-white/10" : "text-ink/10";

  if (reduce) {
    return (
      <div className="relative">
        <span
          className={`display pointer-events-none absolute -left-1 -top-6 text-[clamp(3rem,14vw,7rem)] ${ghost}`}
          aria-hidden
        >
          {number}
        </span>
        <p className={`label relative text-xs ${dim}`}>
          {number} — {label}
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      <motion.span
        className={`display pointer-events-none absolute -left-1 -top-6 text-[clamp(3rem,14vw,7rem)] ${ghost}`}
        aria-hidden
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease }}
      >
        {number}
      </motion.span>
      <motion.p
        className={`label relative text-xs ${dim}`}
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15, ease }}
      >
        {number} — {label}
      </motion.p>
    </div>
  );
}

export function Stagger({
  children,
  className = "",
  delay = 0.08,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: delay, delayChildren: 0.06 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
}) {
  return (
    <motion.div className={className} variants={variantMap[variant]}>
      {children}
    </motion.div>
  );
}

/** Soft magnetic pull on desktop CTAs */
export function Magnetic({
  children,
  className = "",
  strength = 0.28,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={`inline-flex ${className}`}
      whileHover={{ scale: 1.02 }}
      onMouseMove={(e) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translate(0px, 0px)";
        e.currentTarget.style.transition = "transform 0.35s cubic-bezier(0.22,1,0.36,1)";
        window.setTimeout(() => {
          e.currentTarget.style.transition = "";
        }, 350);
      }}
      style={{ transition: "transform 0.12s ease-out" }}
    >
      {children}
    </motion.div>
  );
}
