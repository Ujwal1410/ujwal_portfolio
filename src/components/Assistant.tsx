"use client";

import { useEffect, useState } from "react";
import { Bot, X } from "lucide-react";
import { site } from "@/data/content";

const faqs = [
  {
    q: "What do you build?",
    a: "Production AI assessment platforms, live proctoring, RAG pipelines, and self-hosted object storage at Gisul.",
  },
  {
    q: "What's your stack?",
    a: "FastAPI, Next.js, TypeScript, Redis, MongoDB/PostgreSQL, FAISS, vLLM, Docker, nginx, and SeaweedFS.",
  },
  {
    q: "How can I reach you?",
    a: `Email ${site.email} or message me on LinkedIn.`,
  },
];

export function Assistant() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-[max(0.75rem,env(safe-area-inset-left))] z-50 sm:bottom-5 sm:left-4 md:bottom-6 md:left-6">
      {open && (
        <div
          className="mb-3 w-[min(calc(100vw-1.5rem),340px)] max-h-[min(70svh,520px)] overflow-hidden border border-line bg-paper-raised p-4 shadow-[var(--shadow)]"
          data-lenis-prevent
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="label text-[10px] text-dim">Portfolio assistant</p>
              <p className="mt-1 text-sm font-medium">Ask about Ujwal&apos;s work</p>
            </div>
            <button
              type="button"
              aria-label="Close assistant"
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 shrink-0 place-items-center text-dim hover:text-ink"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-4 max-h-[min(42svh,320px)] space-y-2 overflow-y-auto overscroll-contain">
            {faqs.map((item, i) => (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setActive(active === i ? null : i)}
                  className="w-full border border-line px-3 py-3 text-left text-sm transition hover:border-ink/40"
                >
                  {item.q}
                </button>
                {active === i && (
                  <p className="mt-2 px-1 text-sm leading-relaxed text-dim">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
          <a
            href={`mailto:${site.email}`}
            className="volt-btn mt-4 flex w-full items-center justify-center rounded-sm px-3 py-3 text-[11px]"
          >
            Email {site.name}
          </a>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="volt-btn inline-flex min-h-11 items-center gap-2 rounded-md px-3.5 py-2.5 text-[11px] shadow-[var(--shadow)] touch-manipulation sm:px-4"
        aria-expanded={open}
        aria-label="Open portfolio assistant"
      >
        <Bot className="h-4 w-4 shrink-0" />
        <span className="hidden min-[400px]:inline">Assistant</span>
      </button>
    </div>
  );
}
