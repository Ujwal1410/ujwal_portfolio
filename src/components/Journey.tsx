"use client";

import { journeyProblem, metrics, processSteps } from "@/data/content";
import {
  ChaosField,
  MetricValue,
  ProcessCard,
  Reveal,
  ScrollDrift,
  SectionMark,
  Stagger,
  StaggerItem,
  WordReveal,
} from "@/components/motion";

const chaosTags = [
  "10+ domains",
  "Manual review",
  "Queue pressure",
  "High latency",
  "OOM risk",
  "500MB cap",
  "Live sessions",
  "Auth mismatches",
];

export function Journey() {
  return (
    <>
      <section id="journey" className="bg-[#0b0b0b] text-[#f1f0ec]">
        <div className="section-pad container-wide py-16 sm:py-24 md:py-32">
          <SectionMark number="02" label="The problem" tone="light" />

          <ScrollDrift amount={28} className="mt-5">
            <WordReveal
              text={journeyProblem.title}
              className="display max-w-4xl text-[clamp(1.85rem,8vw,4.4rem)]"
            />
          </ScrollDrift>

          <Reveal delay={0.15} variant="fade" className="mt-5 max-w-2xl">
            <p className="text-sm text-white/60 sm:text-base md:text-lg">
              {journeyProblem.subtitle}
            </p>
          </Reveal>

          <ChaosField tags={chaosTags} />

          <Stagger
            className="mt-10 grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4"
            delay={0.12}
          >
            {journeyProblem.cards.map((card) => (
              <StaggerItem key={card.title} variant="scale">
                <div className="h-full border border-white/15 bg-white/[0.04] p-4 transition duration-500 hover:border-[#e8ff2b]/45 hover:bg-white/[0.08] sm:p-5">
                  <p className="label text-[10px] text-[#e8ff2b]">
                    {card.title}
                  </p>
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

          <Stagger
            className="mt-12 grid grid-cols-2 gap-3 border-t border-white/15 pt-8 sm:gap-4 md:grid-cols-4"
            delay={0.1}
          >
            {metrics.map((m) => (
              <StaggerItem key={m.label} variant="rise">
                <p className="display text-2xl text-[#e8ff2b] sm:text-3xl md:text-4xl">
                  <MetricValue value={m.value} />
                </p>
                <p className="label mt-2 text-[9px] leading-snug text-white/45 sm:text-[10px]">
                  {m.label}
                </p>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.05} className="mt-10" variant="left">
            <p className="display text-2xl text-[#e8ff2b] md:text-3xl">
              We need something better.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="surface-dots border-y border-line">
        <div className="section-pad container-wide py-16 sm:py-24 md:py-32">
          <SectionMark number="03" label="How I work" />

          <ScrollDrift amount={24} className="mt-5">
            <WordReveal
              text="I organize chaos into systems that ship and stay up."
              className="display max-w-4xl text-[clamp(1.85rem,8vw,4.2rem)] text-ink"
            />
          </ScrollDrift>

          <Reveal delay={0.18} variant="fade" className="mt-4 max-w-2xl">
            <p className="text-sm text-dim sm:text-base">
              From problem to production: architecture, data, automation, AI,
              and interfaces teams actually use.
            </p>
          </Reveal>

          <Stagger
            className="mt-10 grid gap-3 sm:mt-12 sm:gap-4 md:grid-cols-2 lg:grid-cols-4"
            delay={0.14}
            amount={0.12}
          >
            {processSteps.map((step) => (
              <StaggerItem key={step.step} variant="scale">
                <ProcessCard
                  step={step.step}
                  label={step.label}
                  title={step.title}
                  detail={step.detail}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
