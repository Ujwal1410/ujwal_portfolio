"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { site } from "@/data/content";

export function Hero() {
  const reduce = useReducedMotion();
  const [showGate, setShowGate] = useState(true);

  useEffect(() => {
    if (!showGate) return;

    window.scrollTo(0, 0);
    const dismiss = () => setShowGate(false);
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 2) return;
      e.preventDefault();
      dismiss();
    };
    const onTouch = (e: TouchEvent) => {
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
    window.addEventListener("touchmove", onTouch, { passive: false });
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("keydown", onKey);
    };
  }, [showGate]);

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden surface-dots pt-14"
    >
      <AnimatePresence>
        {showGate && (
          <motion.button
            type="button"
            key="gate"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => setShowGate(false)}
            className="fixed inset-0 z-30 flex flex-col items-center justify-center gap-5 bg-paper"
            aria-label="Scroll to explore"
          >
            <span className="surface-dots absolute inset-0" aria-hidden />
            <span className="display relative text-center text-[clamp(1.8rem,5vw,3.4rem)] leading-[1.05] text-ink">
              Click or scroll
              <br />
              to explore
            </span>
            <span className="label relative text-[10px] text-dim">
              Portfolio of {site.fullName}
            </span>
            <span className="relative mt-2 flex h-24 w-px items-center justify-center bg-ink/25">
              <motion.span
                className="absolute h-3 w-3 rounded-full bg-ink"
                animate={reduce ? undefined : { y: [-28, 28, -28] }}
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
        animate={showGate ? { opacity: 0, y: 16 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="section-pad container-wide relative z-10 grid items-center gap-8 py-16 lg:grid-cols-[1.05fr_0.95fr]"
        style={{ pointerEvents: showGate ? "none" : "auto" }}
      >
        <div className="relative">
          <span
            className="display pointer-events-none absolute -left-1 -top-8 text-[clamp(5rem,16vw,11rem)] text-ink/10 lg:-top-14"
            aria-hidden
          >
            01
          </span>

          <p className="label relative text-xs text-dim">01 — Portfolio</p>
          <p className="relative mt-5 max-w-xl text-sm uppercase tracking-[0.08em] text-dim md:text-base">
            {site.role}
          </p>

          <h1 className="display relative mt-3 text-[clamp(3.4rem,10vw,7.8rem)] text-ink">
            {site.name}
            <span className="mt-1 block text-[0.52em] tracking-wide text-ink/30">
              Kulal
            </span>
          </h1>

          <p className="relative mt-5 max-w-xl text-base leading-relaxed text-dim md:text-lg">
            {site.summary}
          </p>

          <div className="relative mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="ink-btn inline-flex items-center gap-2 rounded-sm px-5 py-3 text-xs"
            >
              View projects <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="outline-btn inline-flex items-center gap-2 rounded-sm px-5 py-3 text-xs"
            >
              Email me ↓
            </a>
          </div>

          <p className="mono relative mt-7 text-[11px] tracking-wide text-dim">
            {site.tags.join(" · ")}
          </p>
        </div>

        <div className="relative mx-auto hidden w-full max-w-[440px] md:block">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={site.photo}
              alt={`${site.fullName} — professional portrait`}
              fill
              priority
              sizes="(max-width: 1024px) 420px, 46vw"
              className="object-cover object-[center_15%]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5">
              <p className="label text-[10px] text-volt">{site.fullName}</p>
              <p className="mt-1 text-xs text-paper/85">{site.location}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {!showGate && (
        <a
          href="#journey"
          className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-ink"
        >
          <span className="label text-[10px] tracking-[0.2em]">
            Keep scrolling
          </span>
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
        </a>
      )}
    </section>
  );
}
