"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { site } from "@/data/content";
import { Magnetic } from "@/components/motion";

export function Hero() {
  const reduce = useReducedMotion();
  const [showGate, setShowGate] = useState(true);
  const portraitRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: portraitRef,
    offset: ["start end", "end start"],
  });
  const portraitY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [28, -28]
  );

  useEffect(() => {
    if (!showGate) return;

    window.scrollTo(0, 0);
    const dismiss = () => setShowGate(false);
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 2) return;
      e.preventDefault();
      dismiss();
    };
    const onKey = (e: KeyboardEvent) => {
      if (
        e.key === "ArrowDown" ||
        e.key === "PageDown" ||
        e.key === " " ||
        e.key === "Enter"
      ) {
        e.preventDefault();
        dismiss();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
    };
  }, [showGate]);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden surface-dots pt-16 pb-16 sm:pt-14"
    >
      <AnimatePresence>
        {showGate && (
          <motion.button
            type="button"
            key="gate"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setShowGate(false)}
            className="fixed inset-0 z-30 flex flex-col items-center justify-center gap-4 bg-paper px-6 touch-manipulation"
            aria-label="Tap or scroll to explore"
          >
            <span className="surface-dots absolute inset-0" aria-hidden />
            <motion.span
              className="display relative text-center text-[clamp(1.6rem,8vw,3.4rem)] leading-[1.05] text-ink"
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              <span className="sm:hidden">
                Tap to
                <br />
                explore
              </span>
              <span className="hidden sm:inline">
                Click or scroll
                <br />
                to explore
              </span>
            </motion.span>
            <motion.span
              className="label relative text-[10px] text-dim"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              Portfolio of {site.fullName}
            </motion.span>
            <span className="relative mt-2 flex h-20 w-px items-center justify-center bg-ink/25 sm:h-24">
              <motion.span
                className="absolute h-3 w-3 rounded-full bg-ink"
                animate={reduce ? undefined : { y: [-24, 24, -24] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <motion.div
        initial={false}
        animate={showGate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="section-pad container-wide relative z-10 grid items-center gap-8 py-10 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-16"
        style={{ pointerEvents: showGate ? "none" : "auto" }}
      >
        <div className="relative min-w-0">
          <motion.span
            className="display pointer-events-none absolute -left-1 -top-6 text-[clamp(3.5rem,22vw,11rem)] text-ink/10 sm:-top-8 lg:-top-14"
            aria-hidden
            initial={false}
            animate={
              showGate ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }
            }
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            01
          </motion.span>

          <p className="label relative text-[10px] text-dim sm:text-xs">
            01 — Portfolio
          </p>
          <p className="relative mt-4 max-w-xl text-xs uppercase tracking-[0.08em] text-dim sm:mt-5 sm:text-sm md:text-base">
            {site.role}
          </p>

          <h1 className="display relative mt-2 break-words text-[clamp(2.75rem,14vw,7.8rem)] text-ink sm:mt-3">
            {site.name}
            <span className="mt-1 block text-[0.52em] tracking-wide text-ink/30">
              Kulal
            </span>
          </h1>

          <p className="relative mt-4 max-w-xl text-sm leading-relaxed text-dim sm:mt-5 sm:text-base md:text-lg">
            {site.summary}
          </p>

          <div className="relative mt-6 flex flex-col gap-3 min-[400px]:flex-row min-[400px]:flex-wrap sm:mt-8">
            <Magnetic className="w-full min-[400px]:w-auto">
              <a
                href="#projects"
                className="ink-btn inline-flex w-full items-center justify-center gap-2 rounded-sm px-5 py-3 text-xs min-[400px]:w-auto"
              >
                View projects <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </Magnetic>
            <Magnetic className="w-full min-[400px]:w-auto">
              <a
                href={`mailto:${site.email}`}
                className="outline-btn inline-flex w-full items-center justify-center gap-2 rounded-sm px-5 py-3 text-xs min-[400px]:w-auto"
              >
                Email me ↓
              </a>
            </Magnetic>
          </div>

          <p className="mono relative mt-6 text-[10px] leading-relaxed tracking-wide text-dim sm:mt-7 sm:text-[11px]">
            {site.tags.join(" · ")}
          </p>
        </div>

        <motion.div
          ref={portraitRef}
          style={{ y: portraitY }}
          className="relative mx-auto w-full max-w-[280px] sm:max-w-[340px] md:max-w-[440px]"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={site.photo}
              alt={`${site.fullName} — professional portrait`}
              fill
              priority
              sizes="(max-width: 768px) 280px, (max-width: 1024px) 420px, 46vw"
              className="object-cover object-[center_15%] transition-transform duration-700 will-change-transform hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-auto">
              <p className="label text-[10px] text-volt">{site.fullName}</p>
              <p className="mt-1 text-xs text-paper/85">{site.location}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {!showGate && (
        <motion.a
          href="#journey"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-4 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink sm:bottom-6 sm:flex"
        >
          <span className="label text-[10px] tracking-[0.2em]">
            Keep scrolling
          </span>
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
        </motion.a>
      )}
    </section>
  );
}
