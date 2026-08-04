"use client";

import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/content";
import { Reveal, SectionMark, Stagger, StaggerItem } from "@/components/motion";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0b0b0b] text-[#f1f0ec]"
    >
      <div className="section-pad container-wide py-16 sm:py-24 md:py-32">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-6">
          <Reveal>
            <SectionMark number="04" label="Projects" tone="light" />
            <h2 className="display mt-5 max-w-3xl text-[clamp(1.85rem,8vw,4.2rem)]">
              Projects that became real systems.
            </h2>
            <p className="mt-4 max-w-xl text-sm text-white/60 sm:text-base">
              Each one a chapter — assessment platforms, live proctoring,
              self-hosted storage, and AI products.
            </p>
          </Reveal>
          <Reveal delay={0.1} variant="right">
            <a
              href="https://github.com/Ujwal1410"
              target="_blank"
              rel="noreferrer"
              className="label inline-flex items-center gap-2 text-xs text-[#e8ff2b] transition hover:gap-3"
            >
              Explore GitHub <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <Stagger
          className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 xl:grid-cols-3"
          delay={0.09}
        >
          {projects.map((project) => (
            <StaggerItem key={project.id} variant="up">
              <article className="group flex h-full flex-col border border-white/12 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1.5 hover:border-[#e8ff2b]/50 hover:bg-white/[0.06] sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <span
                    className="rounded-sm bg-[#e8ff2b] px-2 py-1 text-[10px] font-semibold tracking-wider text-[#0b0b0b]"
                    style={{ fontFamily: "var(--font-oswald), sans-serif" }}
                  >
                    {project.tag}
                  </span>
                  <span className="mono shrink-0 text-xs text-white/40">
                    {project.id}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold tracking-tight transition group-hover:text-[#e8ff2b] sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">
                  {project.description}
                </p>

                {project.highlights && (
                  <ul className="mt-4 space-y-1.5">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="mono text-[11px] text-[#e8ff2b]/90"
                      >
                        · {h}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="label rounded-sm border border-white/15 px-2 py-1 text-[9px] text-white/55"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="label mt-5 inline-flex items-center gap-1 text-[11px] text-[#e8ff2b] transition group-hover:gap-2"
                  >
                    {project.hrefLabel ?? "Open"}{" "}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
