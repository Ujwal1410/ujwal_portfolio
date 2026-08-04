"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { stackGroups } from "@/data/content";

export function Stack() {
  return (
    <section id="stack" className="bg-[#0b0b0b] text-[#f1f0ec]">
      <div className="section-pad container-wide py-24 md:py-32">
        <Reveal>
          <p className="label text-xs text-white/50">06 — Toolkit</p>
          <h2 className="display mt-5 text-[clamp(2.4rem,6vw,4.5rem)]">Stack</h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stackGroups.map((group) => (
            <StaggerItem key={group.title}>
              <h3 className="label text-[11px] text-[#e8ff2b]">{group.title}</h3>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-white/10 pb-2 text-sm text-white/80"
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
