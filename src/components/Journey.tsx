"use client";

import { useReducedMotion } from "framer-motion";
import { journeyProblem, metrics, processSteps } from "@/data/content";
import { Reveal, SectionMark, Stagger, StaggerItem } from "@/components/motion";

export function Journey() {
  const reduce = useReducedMotion();

  return (
    <>
      <section id="journey" className="bg-[#0b0b0b] text-[#f1f0ec]">
        <div className="section-pad container-wide py-16 sm:py-24 md:py-32">
          <Reveal>
            <SectionMark number="02" label="The problem" tone="light" />
            <h2 className="display mt-5 max-w-4xl text-[clamp(1.85rem,8vw,4.4rem)]">
              {journeyProblem.title}
            </h2>
            <p className="mt-5 max-w-2xl text-sm text-white/60 sm:text-base md:text-lg">
              {journeyProblem.subtitle}
            </p>
          </Reveal>

          <Stagger className="mt-10 grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4" delay={0.1}>
            {journeyProblem.cards.map((card) => (
              <StaggerItem key={card.title} variant="scale">
                <div className="h-full border border-white/15 bg-white/[0.04] p-4 transition duration-300 hover:border-[#e8ff2b]/45 hover:bg-white/[0.07] sm:p-5">
                  <p className="label text-[10px] text-[#e8ff2b]">{card.title}</p>
                  <ul className="mt-4 space-y-2">
                    {card.items.map((item) => (
                      <li
                        key={item}
                        className="mono text-[11px] text-white/70 sm:text-xs"
                      >
                        → {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Stagger className="mt-12 grid grid-cols-2 gap-3 border-t border-white/15 pt-8 sm:gap-4 md:grid-cols-4">
            {metrics.map((m) => (
              <StaggerItem key={m.label} variant="up">
                <p className="display text-2xl text-[#e8ff2b] sm:text-3xl md:text-4xl">
                  {m.value}
                </p>
                <p className="label mt-2 text-[9px] leading-snug text-white/45 sm:text-[10px]">
                  {m.label}
                </p>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1} className="mt-10" variant="left">
            <p className="display text-2xl text-[#e8ff2b] md:text-3xl">
              We need something better.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="surface-dots border-y border-line">
        <div className="section-pad container-wide py-16 sm:py-24 md:py-32">
          <Reveal>
            <SectionMark number="03" label="How I work" />
            <h2 className="display mt-5 max-w-4xl text-[clamp(1.85rem,8vw,4.2rem)] text-ink">
              I organize chaos into systems that ship and stay up.
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-dim sm:text-base">
              From problem to production: architecture, data, automation, AI,
              and interfaces teams actually use.
            </p>
          </Reveal>

          <Stagger
            className={`mt-10 grid gap-3 sm:mt-12 sm:gap-4 md:grid-cols-2 lg:grid-cols-4 ${
              reduce ? "" : ""
            }`}
            delay={0.1}
          >
            {processSteps.map((step) => (
              <StaggerItem key={step.step} variant="left">
                <div className="relative h-full border border-line bg-paper-raised p-5 shadow-[var(--shadow)] transition duration-300 hover:-translate-y-1 hover:border-ink/35 sm:p-6">
                  <span className="absolute left-0 top-0 h-1 w-full bg-volt" />
                  <p className="display text-4xl text-ink/15 sm:text-5xl">
                    {step.step}
                  </p>
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
