"use client";

import { achievements, education, experience } from "@/data/content";
import { Reveal, SectionMark, Stagger, StaggerItem } from "@/components/motion";

export function Experience() {
  return (
    <section id="experience" className="surface-dots">
      <div className="section-pad container-wide py-16 sm:py-24 md:py-32">
        <Reveal>
          <SectionMark number="05" label="Trajectory" />
          <h2 className="display mt-5 text-[clamp(2rem,8vw,4.5rem)] text-ink">
            Experience
          </h2>
        </Reveal>

        <Stagger className="mt-10 space-y-5 sm:mt-12 sm:space-y-6" delay={0.1}>
          {experience.map((job) => (
            <StaggerItem key={job.company}>
              <article className="border border-line bg-paper-raised p-5 shadow-[var(--shadow)] transition duration-300 hover:-translate-y-0.5 hover:border-ink/30 sm:p-6 md:p-8">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div className="min-w-0">
                    <p className="label text-[10px] text-dim">{job.period}</p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-dim">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <span className="label self-start rounded-sm bg-volt px-2.5 py-1 text-[10px] text-volt-ink">
                    Current
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="border-l-2 border-volt pl-4 text-sm leading-relaxed text-dim"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Reveal variant="left">
            <h3 className="label text-xs text-dim">Education</h3>
            <div className="mt-5 space-y-5">
              {education.map((ed) => (
                <div key={ed.school} className="border-t border-line pt-4">
                  <p className="font-semibold">{ed.degree}</p>
                  <p className="mt-1 text-sm text-dim">{ed.school}</p>
                  <p className="mono mt-2 text-[11px] text-dim">
                    {ed.period} · {ed.meta}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} variant="right">
            <h3 className="label text-xs text-dim">Achievements</h3>
            <Stagger className="mt-5 space-y-3">
              {achievements.map((item) => (
                <StaggerItem key={item}>
                  <div className="border border-line bg-paper-raised px-4 py-3 text-sm text-dim transition hover:border-ink/30">
                    {item}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
