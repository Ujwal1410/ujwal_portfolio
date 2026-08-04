"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { site } from "@/data/content";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export function Contact() {
  return (
    <section id="contact" className="surface-dots">
      <div className="section-pad container-wide py-24 md:py-32">
        <p className="label text-xs text-dim">07 — Next</p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display mt-5 max-w-4xl text-[clamp(2.6rem,7vw,5.5rem)] text-ink"
        >
          Let&apos;s build something solid.
        </motion.h2>
        <p className="mt-5 max-w-xl text-dim md:text-lg">
          {site.availability}. Based in {site.location}.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={`mailto:${site.email}`}
            className="volt-btn inline-flex items-center gap-2 rounded-sm px-5 py-3 text-xs"
          >
            <Mail className="h-3.5 w-3.5" /> {site.email}
          </a>
          <a
            href={site.phoneHref}
            className="outline-btn inline-flex items-center gap-2 rounded-sm px-5 py-3 text-xs"
          >
            <Phone className="h-3.5 w-3.5" /> {site.phone}
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-6">
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
        </div>
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
