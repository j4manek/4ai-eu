"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary, Locale } from "@/lib/dictionaries";
import { Reveal } from "./Reveal";
import { trackAdsConversion, trackEvent } from "@/lib/analytics";
import { submitForm } from "@/lib/submit";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact({
  dict,
  locale,
  topic = "general",
}: {
  dict: Dictionary;
  locale: Locale;
  topic?: "general" | "training";
}) {
  const [status, setStatus] = useState<Status>("idle");
  const f = dict.contact.form;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      await submitForm({
        ...data,
        topic,
        _subject: `Nová poptávka${topic === "training" ? " (školení)" : ""} od ${data.company}`,
      });
      setStatus("success");
      trackEvent("generate_lead", { method: "contact_form", topic });
      trackAdsConversion();
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-line py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            {dict.contact.eyebrow}
          </p>
          <h2 className="mt-5 max-w-md text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            {dict.contact.heading}
          </h2>
          <p className="mt-5 max-w-sm text-ink-dim">{dict.contact.sub}</p>
          <ul className="mt-8 flex flex-col gap-3">
            {dict.contact.assurances.map((a) => (
              <li key={a} className="flex items-start gap-3 text-sm text-ink-dim">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                {a}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 rounded-2xl border border-line-strong bg-bg/85 p-6 backdrop-blur-md sm:p-8">
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden
            />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-ink-dim">
                  {f.company}
                </span>
                <input
                  required
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder={f.companyPlaceholder}
                  className="border-b border-line bg-transparent py-2.5 text-ink placeholder:text-ink-dim/80 focus:border-accent focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-ink-dim">
                  {f.revenue}
                </span>
                <div className="relative">
                  <select
                    required
                    name="revenue"
                    defaultValue=""
                    className="w-full appearance-none border-b border-line bg-transparent py-2.5 pr-6 text-ink focus:border-accent focus:outline-none [&>option]:bg-bg-raised"
                  >
                    <option value="" disabled>
                      {f.revenuePlaceholder}
                    </option>
                    {f.revenueOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                  <span aria-hidden className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-ink-faint">
                    ▾
                  </span>
                </div>
              </label>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-ink-dim">
                  {f.email}
                </span>
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder={f.emailPlaceholder}
                  className="border-b border-line bg-transparent py-2.5 text-ink placeholder:text-ink-dim/80 focus:border-accent focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-ink-dim">
                  {f.phone}
                </span>
                <input
                  required
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder={f.phonePlaceholder}
                  className="border-b border-line bg-transparent py-2.5 text-ink placeholder:text-ink-dim/80 focus:border-accent focus:outline-none"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-ink-dim">
                {f.message}
              </span>
              <textarea
                required
                name="message"
                rows={5}
                placeholder={f.messagePlaceholder}
                className="resize-none border-b border-line bg-transparent py-2.5 text-ink placeholder:text-ink-dim/80 focus:border-accent focus:outline-none"
              />
            </label>

            <p className="text-xs text-ink-faint">
              {f.consent}{" "}
              <a href={`/${locale}/privacy/`} className="underline underline-offset-2 hover:text-ink">
                {f.consentLink}
              </a>
              .
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-1">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 font-mono text-[12px] uppercase tracking-wider text-bg transition-transform hover:scale-105 disabled:opacity-60 sm:w-auto sm:py-3.5"
              >
                {status === "submitting" ? f.submitting : f.submit}
                {status !== "submitting" && <span>→</span>}
              </button>

              {status === "success" && (
                <p role="status" className="font-mono text-[12px] text-signal">{f.success}</p>
              )}
              {status === "error" && (
                <p role="alert" className="font-mono text-[12px] text-accent">{f.error}</p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
