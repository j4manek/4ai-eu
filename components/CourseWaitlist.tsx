"use client";

import { useState, type FormEvent } from "react";
import type { Locale } from "@/lib/dictionaries";
import type { ProductsCopy } from "@/lib/products";
import { Reveal } from "./Reveal";
import { trackEvent } from "@/lib/analytics";
import { submitForm } from "@/lib/submit";

type Status = "idle" | "submitting" | "success" | "error";

export function CourseWaitlist({ copy: w, locale }: { copy: ProductsCopy["course"]["waitlist"]; locale: Locale }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      await submitForm({ ...data, topic: "course-waitlist", _subject: "Nový zájemce o digitální kurz" });
      setStatus("success");
      trackEvent("generate_lead", { method: "course_waitlist", topic: "course-waitlist" });
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const field =
    "border-b border-line bg-transparent py-2.5 text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none";
  const label = "font-mono text-[11px] uppercase tracking-wider text-ink-faint";

  return (
    <section id="waitlist" className="border-t border-line py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{w.eyebrow}</p>
          <h2 className="mt-5 max-w-md text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            {w.heading}
          </h2>
          <p className="mt-5 max-w-sm text-ink-dim">{w.sub}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className={label}>{w.name}</span>
                <input name="name" type="text" autoComplete="given-name" placeholder={w.namePlaceholder} className={field} />
              </label>
              <label className="flex flex-col gap-2">
                <span className={label}>{w.email}</span>
                <input required name="email" type="email" autoComplete="email" placeholder={w.emailPlaceholder} className={field} />
              </label>
            </div>

            <p className="text-xs text-ink-faint">
              {w.consent}{" "}
              <a href={`/${locale}/privacy/`} className="underline underline-offset-2 hover:text-ink">
                {w.consentLink}
              </a>
              .
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-1">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 font-mono text-[12px] uppercase tracking-wider text-bg transition-transform hover:scale-105 disabled:opacity-60 sm:w-auto sm:py-3.5"
              >
                {status === "submitting" ? w.submitting : w.submit}
                {status !== "submitting" && <span>→</span>}
              </button>
              {status === "success" && <p role="status" className="font-mono text-[12px] text-signal">{w.success}</p>}
              {status === "error" && <p role="alert" className="font-mono text-[12px] text-accent">{w.error}</p>}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
