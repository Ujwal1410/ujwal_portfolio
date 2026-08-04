"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setError(json.error || "Could not send message.");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 grid w-full max-w-xl gap-4">
      <label className="grid gap-2">
        <span className="label text-[10px] text-dim">Name</span>
        <input
          name="name"
          required
          maxLength={120}
          autoComplete="name"
          className="w-full border border-line bg-paper-raised px-4 py-3 text-base text-ink outline-none transition focus:border-ink sm:text-sm"
          placeholder="Your name"
        />
      </label>

      <label className="grid gap-2">
        <span className="label text-[10px] text-dim">Email</span>
        <input
          name="email"
          type="email"
          required
          maxLength={200}
          autoComplete="email"
          className="w-full border border-line bg-paper-raised px-4 py-3 text-base text-ink outline-none transition focus:border-ink sm:text-sm"
          placeholder="you@email.com"
        />
      </label>

      <label className="grid gap-2">
        <span className="label text-[10px] text-dim">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          maxLength={5000}
          className="w-full resize-y border border-line bg-paper-raised px-4 py-3 text-base text-ink outline-none transition focus:border-ink sm:text-sm"
          placeholder="What should we build?"
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="volt-btn inline-flex w-full items-center justify-center rounded-sm px-5 py-3.5 text-xs disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit sm:py-3"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>

      {status === "success" && (
        <p className="text-sm text-ink">Message sent. I’ll get back to you soon.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-[var(--red)]">{error}</p>
      )}
    </form>
  );
}
