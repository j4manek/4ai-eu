"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/lib/dictionaries";
import { Reveal } from "./Reveal";
import { trackAdsConversion, trackEvent } from "@/lib/analytics";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact({ dict }: { dict: Dictionary }) {
  const [status, setStatus] = useState<Status>("idle");
  const f = dict.contact.form;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      trackEvent("generate_lead", { method: "contact_form" });
      trackAdsConversion();
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-line py-28 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            {dict.contact.eyebrow}
          </p>
          <h2 className="mt-5 max-w-md text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            {dict.contact.heading}
          </h2>
          <p className="mt-5 max-w-sm text-ink-dim">{dict.contact.sub}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                  {f.name}
                </span>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder={f.namePlaceholder}
                  className="border-b border-line bg-transparent py-2.5 text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                  {f.email}
                </span>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder={f.emailPlaceholder}
                  className="border-b border-line bg-transparent py-2.5 text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                {f.message}
              </span>
              <textarea
                required
                name="message"
                rows={4}
                placeholder={f.messagePlaceholder}
                className="resize-none border-b border-line bg-transparent py-2.5 text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none"
              />
            </label>

            <div className="flex items-center gap-5 pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-mono text-[12px] uppercase tracking-wider text-bg transition-transform hover:scale-105 disabled:opacity-60"
              >
                {status === "submitting" ? f.submitting : f.submit}
                {status !== "submitting" && <span>→</span>}
              </button>

              {status === "success" && (
                <p className="font-mono text-[12px] text-signal">{f.success}</p>
              )}
              {status === "error" && (
                <p className="font-mono text-[12px] text-accent">{f.error}</p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
