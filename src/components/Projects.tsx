"use client";

import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/content";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-[#0b0b0b] text-[#f1f0ec]">
      <div className="section-pad container-wide py-24 md:py-32">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <p className="label text-xs text-white/50">04 — Projects</p>
            <h2 className="display mt-5 max-w-3xl text-[clamp(2.2rem,5.5vw,4.2rem)]">
              Projects that became real systems.
            </h2>
            <p className="mt-4 max-w-xl text-white/60">
              Each one a chapter — assessment platforms, live proctoring,
              self-hosted storage, and AI products.
            </p>
          </Reveal>
          <a
            href="https://github.com/Ujwal1410"
            target="_blank"
            rel="noreferrer"
            className="label inline-flex items-center gap-2 text-xs text-[#e8ff2b]"
          >
            Explore GitHub <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <Stagger className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <article className="group flex h-full flex-col border border-white/12 bg-white/[0.03] p-6 transition hover:border-[#e8ff2b]/50 hover:bg-white/[0.05]">
                <div className="flex items-start justify-between gap-3">
                  <span
                    className="rounded-sm bg-[#e8ff2b] px-2 py-1 text-[10px] font-semibold tracking-wider text-[#0b0b0b]"
                    style={{ fontFamily: "var(--font-oswald), sans-serif" }}
                  >
                    {project.tag}
                  </span>
                  <span className="mono text-xs text-white/40">{project.id}</span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">
                  {project.description}
                </p>

                {project.highlights && (
                  <ul className="mt-4 space-y-1.5">
                    {project.highlights.map((h) => (
                      <li key={h} className="mono text-[11px] text-[#e8ff2b]/90">
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
