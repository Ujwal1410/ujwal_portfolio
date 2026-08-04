"use client";

import { motion } from "framer-motion";
import { achievements, education, experience } from "@/data/content";

export function Experience() {
  return (
    <section id="experience" className="surface-dots">
      <div className="section-pad container-wide py-24 md:py-32">
        <p className="label text-xs text-dim">05 — Trajectory</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display mt-5 text-[clamp(2.4rem,6vw,4.5rem)] text-ink"
        >
          Experience
        </motion.h2>

        <div className="mt-12 space-y-6">
          {experience.map((job, i) => (
            <motion.article
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-line bg-paper-raised p-6 md:p-8 shadow-[var(--shadow)]"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="label text-[10px] text-dim">{job.period}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">
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
            </motion.article>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div>
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
          </div>

          <div>
            <h3 className="label text-xs text-dim">Achievements</h3>
            <ul className="mt-5 space-y-3">
              {achievements.map((item) => (
                <li
                  key={item}
                  className="border border-line bg-paper-raised px-4 py-3 text-sm text-dim"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
