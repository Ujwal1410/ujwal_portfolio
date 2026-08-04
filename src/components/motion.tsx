"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

export const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 56 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 28 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
};

const riseSoft: Variants = {
  hidden: { opacity: 0, y: 72 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease },
  },
};

const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7 } },
};

const cardTilt: Variants = {
  hidden: { opacity: 0, y: 64, rotate: 1.2 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.85, ease },
  },
};

const wordUp: Variants = {
  hidden: { y: "115%" },
  show: {
    y: "0%",
    transition: { duration: 0.75, ease },
  },
};

const variantMap = {
  up: fadeUp,
  fade,
  left: fadeLeft,
  right: fadeRight,
  scale: scaleIn,
  rise: riseSoft,
  card: cardTilt,
} as const;

export type RevealVariant = keyof typeof variantMap;

const viewportOnce = {
  once: true,
  amount: 0.18,
  margin: "0px 0px -10% 0px",
} as const;

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
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/** Word-by-word rise for display headlines — the big “feel” upgrade */
export function WordReveal({
  text,
  className = "",
  as: Tag = "h2",
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className}>
      <motion.span
        className="flex flex-wrap"
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.045, delayChildren: delay },
          },
        }}
      >
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.12em]">
            <motion.span className="inline-block pr-[0.28em]" variants={wordUp}>
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

/** Mild horizontal drift while section scrolls — desktop only (overflow on phones) */
export function ScrollDrift({
  children,
  className = "",
  amount = 40,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    const sync = () => setEnabled(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduce || !enabled ? [0, 0, 0] : [amount, 0, -amount]
  );

  return (
    <motion.div ref={ref} style={{ x }} className={`min-w-0 ${className}`}>
      {children}
    </motion.div>
  );
}

export function RevealHeadline({
  children,
  className = "",
  as: Tag = "h2",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "110%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.95, delay, ease }}
      >
        <Tag className={className}>{children}</Tag>
      </motion.div>
    </div>
  );
}

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
  const ghost = tone === "light" ? "text-white/[0.08]" : "text-ink/[0.08]";

  if (reduce) {
    return (
      <div className="relative">
        <span
          className={`display pointer-events-none absolute -left-1 -top-8 text-[clamp(3.5rem,16vw,8rem)] ${ghost}`}
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
        className={`display pointer-events-none absolute -left-1 -top-8 text-[clamp(3.5rem,16vw,8rem)] ${ghost}`}
        aria-hidden
        initial={{ opacity: 0, y: 48, scale: 0.92 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.05, ease }}
      >
        {number}
      </motion.span>
      <motion.p
        className={`label relative text-xs ${dim}`}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease }}
      >
        {number} — {label}
      </motion.p>
    </div>
  );
}

export function Stagger({
  children,
  className = "",
  delay = 0.1,
  amount = 0.08,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount, margin: "0px 0px -8% 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: delay, delayChildren: 0.15 },
        },
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

/** Animated metric like 10K+ / 99.8% */
export function MetricValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 18 });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const match = value.match(/^([\d.]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const target = parseFloat(match[1]);
    const suffix = match[2];
    if (reduce || !inView) {
      setDisplay(value);
      return;
    }
    motionVal.set(0);
    const unsub = spring.on("change", (v) => {
      const rounded =
        target % 1 === 0 ? Math.round(v).toString() : v.toFixed(1);
      setDisplay(`${rounded}${suffix}`);
    });
    motionVal.set(target);
    return unsub;
  }, [inView, value, reduce, motionVal, spring]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  );
}

export function ProcessCard({
  step,
  label,
  title,
  detail,
}: {
  step: string;
  label: string;
  title: string;
  detail: string;
}) {
  const reduce = useReducedMotion();

  return (
    <div className="relative h-full overflow-hidden border border-line bg-paper-raised p-5 shadow-[var(--shadow)] transition duration-500 hover:-translate-y-2 hover:border-ink/35 hover:shadow-[0_28px_60px_rgba(11,11,11,0.14)] sm:p-6">
      <motion.span
        className="absolute left-0 top-0 h-1 origin-left bg-volt"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease }}
        style={{ width: "100%" }}
      />
      <motion.p
        className="display text-4xl text-ink/15 sm:text-5xl"
        initial={reduce ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.16, ease }}
      >
        {step}
      </motion.p>
      <motion.p
        className="label mt-4 text-[10px] text-dim"
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.24 }}
      >
        {label}
      </motion.p>
      <motion.h3
        className="mt-2 text-xl font-semibold tracking-tight"
        initial={reduce ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.3, ease }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="mt-3 text-sm leading-relaxed text-dim"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.36, ease }}
      >
        {detail}
      </motion.p>
    </div>
  );
}

export function ProjectCard({ children }: { children: ReactNode }) {
  return (
    <motion.article
      whileHover={{ y: -8, transition: { duration: 0.3, ease } }}
      className="group flex h-full flex-col border border-white/12 bg-white/[0.03] p-5 transition-[border-color,background] duration-300 hover:border-[#e8ff2b]/55 hover:bg-white/[0.07] sm:p-6"
    >
      {children}
    </motion.article>
  );
}

/** Floating chaos chips — Marcelo problem-section energy */
export function ChaosField({ tags }: { tags: string[] }) {
  const reduce = useReducedMotion();
  const [float, setFloat] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    const sync = () => setFloat(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <Stagger
      className="relative mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:min-h-[140px] sm:grid-cols-4 sm:gap-4"
      delay={0.08}
    >
      {tags.map((tag, i) => (
        <StaggerItem key={tag} variant="scale">
          <motion.span
            className="mono inline-flex w-full items-center justify-center border border-white/15 bg-white/[0.03] px-2.5 py-2.5 text-center text-[9px] leading-snug text-white/70 sm:px-3 sm:py-3 sm:text-[11px]"
            animate={
              reduce || !float
                ? undefined
                : {
                    y: [0, i % 2 === 0 ? -6 : 6, 0],
                  }
            }
            transition={{
              duration: 3.2 + (i % 3) * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.15,
            }}
          >
            {tag}
          </motion.span>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function Magnetic({
  children,
  className = "",
  strength = 0.35,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    const sync = () => setEnabled(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  if (reduce || !enabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={`inline-flex ${className}`}
      whileHover={{ scale: 1.03 }}
      onMouseMove={(e) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translate(0px, 0px)";
        e.currentTarget.style.transition =
          "transform 0.4s cubic-bezier(0.16,1,0.3,1)";
        window.setTimeout(() => {
          e.currentTarget.style.transition = "";
        }, 400);
      }}
      style={{ transition: "transform 0.1s ease-out" }}
    >
      {children}
    </motion.div>
  );
}
