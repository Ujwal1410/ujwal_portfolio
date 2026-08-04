"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/content";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

const links = [
  { href: "#journey", label: "Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0b0b] text-[#f1f0ec]">
      <div className="section-pad mx-auto flex h-14 max-w-[1400px] items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-7 w-7 place-items-center border border-white/40 text-[10px] font-bold tracking-widest">
            UK
          </span>
          <span className="label text-[11px] tracking-[0.22em]">
            {site.fullName}
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-[#f1f0ec]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden opacity-80 transition hover:opacity-100 sm:block"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hidden opacity-80 transition hover:opacity-100 sm:block"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="hidden rounded-sm border border-[#e8ff2b] px-3 py-1.5 text-[11px] tracking-[0.16em] text-[#e8ff2b] transition hover:bg-[#e8ff2b] hover:text-[#0b0b0b] sm:inline-block"
            style={{ fontFamily: "var(--font-oswald), sans-serif" }}
          >
            Contact
          </a>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="section-pad border-t border-white/10 bg-[#0b0b0b] py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link py-1 text-[#f1f0ec]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="nav-link py-1 text-[#e8ff2b]"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
