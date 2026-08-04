"use client";

import { useReducedMotion } from "framer-motion";
import { journeyProblem, metrics, processSteps } from "@/data/content";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export function Journey() {
  const reduce = useReducedMotion();

  return (
    <>
      <section id="journey" className="bg-[#0b0b0b] text-[#f1f0ec]">
        <div className="section-pad container-wide py-24 md:py-32">
          <Reveal>
            <p className="label text-xs text-white/45">02 — The problem</p>
            <h2 className="display mt-5 max-w-4xl text-[clamp(2.2rem,5.5vw,4.4rem)]">
              {journeyProblem.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base text-white/60 md:text-lg">
              {journeyProblem.subtitle}
            </p>
          </Reveal>

          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {journeyProblem.cards.map((card) => (
              <StaggerItem key={card.title}>
                <div className="border border-white/15 bg-white/[0.04] p-5">
                  <p className="label text-[10px] text-[#e8ff2b]">{card.title}</p>
                  <ul className="mt-4 space-y-2">
                    {card.items.map((item) => (
                      <li key={item} className="mono text-xs text-white/70">
                        → {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Stagger className="mt-12 grid grid-cols-2 gap-4 border-t border-white/15 pt-8 md:grid-cols-4">
            {metrics.map((m) => (
              <StaggerItem key={m.label}>
                <p className="display text-3xl text-[#e8ff2b] md:text-4xl">
                  {m.value}
                </p>
                <p className="label mt-2 text-[10px] text-white/45">{m.label}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1} className="mt-10">
            <p className="display text-2xl text-[#e8ff2b] md:text-3xl">
              We need something better.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="surface-dots border-y border-line">
        <div className="section-pad container-wide py-24 md:py-32">
          <Reveal>
            <p className="label text-xs text-dim">03 — How I work</p>
            <h2 className="display mt-5 max-w-4xl text-[clamp(2.2rem,5.5vw,4.2rem)] text-ink">
              I organize chaos into systems that ship and stay up.
            </h2>
            <p className="mt-4 max-w-2xl text-dim">
              From problem to production: architecture, data, automation, AI,
              and interfaces teams actually use.
            </p>
          </Reveal>

          <Stagger
            className={`mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4 ${
              reduce ? "" : ""
            }`}
          >
            {processSteps.map((step) => (
              <StaggerItem key={step.step}>
                <div className="relative border border-line bg-paper-raised p-6 shadow-[var(--shadow)]">
                  <span className="absolute left-0 top-0 h-1 w-full bg-volt" />
                  <p className="display text-5xl text-ink/15">{step.step}</p>
                  <p className="label mt-4 text-[10px] text-dim">{step.label}</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-dim">
                    {step.detail}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
