"use client";

import { Mail, Phone } from "lucide-react";
import { site } from "@/data/content";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { ContactForm } from "@/components/ContactForm";
import {
  Magnetic,
  Reveal,
  ScrollDrift,
  SectionMark,
  WordReveal,
} from "@/components/motion";

export function Contact() {
  return (
    <section id="contact" className="surface-dots">
      <div className="section-pad container-wide py-16 pb-[max(7rem,calc(5rem+env(safe-area-inset-bottom)))] sm:py-24 md:py-32">
        <SectionMark number="07" label="Next" />
        <ScrollDrift amount={26} className="mt-5">
          <WordReveal
            text="Let's build something solid."
            className="display max-w-4xl text-[clamp(1.85rem,8vw,5.5rem)] text-ink"
          />
        </ScrollDrift>

        <Reveal delay={0.15} variant="fade" className="mt-5 max-w-xl">
          <p className="text-sm text-dim sm:text-base md:text-lg">
            {site.availability}. Based in {site.location}.
          </p>
        </Reveal>

        <Reveal
          delay={0.2}
          className="mt-8 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap"
        >
          <Magnetic className="w-full min-[480px]:w-auto">
            <a
              href={`mailto:${site.email}`}
              className="outline-btn inline-flex min-w-0 w-full items-center justify-center gap-2 rounded-sm px-4 py-3 text-[11px] sm:justify-start sm:px-5 sm:text-xs min-[480px]:w-auto"
            >
              <Mail className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">{site.email}</span>
            </a>
          </Magnetic>
          <Magnetic className="w-full min-[480px]:w-auto">
            <a
              href={site.phoneHref}
              className="outline-btn inline-flex w-full items-center justify-center gap-2 rounded-sm px-4 py-3 text-[11px] sm:justify-start sm:px-5 sm:text-xs min-[480px]:w-auto"
            >
              <Phone className="h-3.5 w-3.5 shrink-0" /> {site.phone}
            </a>
          </Magnetic>
        </Reveal>

        <Reveal delay={0.26} variant="rise">
          <ContactForm />
        </Reveal>

        <Reveal
          delay={0.32}
          className="mt-10 flex flex-wrap gap-6"
          variant="fade"
        >
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="label inline-flex items-center gap-2 text-xs text-dim transition hover:text-ink"
          >
            <GitHubIcon className="h-4 w-4" /> GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="label inline-flex items-center gap-2 text-xs text-dim transition hover:text-ink"
          >
            <LinkedInIcon className="h-4 w-4" /> LinkedIn
          </a>
        </Reveal>
      </div>

      <footer className="border-t border-line">
        <div className="section-pad container-wide flex flex-col gap-3 py-6 text-dim sm:flex-row sm:items-center sm:justify-between">
          <p className="label text-[10px]">
            © {new Date().getFullYear()} {site.fullName}. Built for production
            work.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="label self-start text-[10px] hover:text-ink sm:self-auto"
          >
            ↑ Top
          </button>
        </div>
      </footer>
    </section>
  );
}
