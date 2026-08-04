"use client";

import { Reveal, SectionMark, Stagger, StaggerItem } from "@/components/motion";
import { stackGroups } from "@/data/content";

export function Stack() {
  return (
    <section id="stack" className="bg-[#0b0b0b] text-[#f1f0ec]">
      <div className="section-pad container-wide py-16 sm:py-24 md:py-32">
        <Reveal>
          <SectionMark number="06" label="Toolkit" tone="light" />
          <h2 className="display mt-5 text-[clamp(2rem,8vw,4.5rem)]">Stack</h2>
        </Reveal>

        <Stagger
          className="mt-10 grid gap-8 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4"
          delay={0.1}
        >
          {stackGroups.map((group) => (
            <StaggerItem key={group.title} variant="up">
              <h3 className="label text-[11px] text-[#e8ff2b]">{group.title}</h3>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-white/10 pb-2 text-sm text-white/80 transition hover:border-[#e8ff2b]/50 hover:text-[#f1f0ec]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
