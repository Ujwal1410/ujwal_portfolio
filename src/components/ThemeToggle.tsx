"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const next = stored === "dark";
    document.documentElement.classList.toggle("dark", next);
    setDark(next);
    setReady(true);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  if (!ready) return null;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light or dark theme"
      className="fixed top-20 right-4 z-40 flex items-center gap-2 rounded-full border border-line bg-paper-raised/95 px-2 py-1.5 backdrop-blur-sm md:right-6"
    >
      <Sun
        className={`h-3.5 w-3.5 ${dark ? "opacity-35" : "text-ink"}`}
        aria-hidden
      />
      <span
        className={`relative h-4 w-8 shrink-0 rounded-full ${
          dark ? "bg-volt" : "bg-ink/25"
        }`}
      >
        <span
          className={`absolute top-0.5 h-3 w-3 rounded-full transition-transform duration-200 ${
            dark
              ? "translate-x-4 bg-[#0b0b0b]"
              : "translate-x-0.5 bg-[#0b0b0b]"
          }`}
        />
      </span>
      <Moon
        className={`h-3.5 w-3.5 ${dark ? "text-ink" : "opacity-35"}`}
        aria-hidden
      />
    </button>
  );
}
