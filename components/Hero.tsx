"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/dictionaries";
import { HeroIllustration } from "./HeroIllustration";
import { HeroDemo } from "./HeroDemo";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const line = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const fade = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Hero({ dict, course }: { dict: Dictionary; course: { href: string; label: string } }) {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden pt-24 pb-12 sm:pb-16">
      <HeroIllustration />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg from-35% via-bg/85 via-48% to-transparent" />

      <div className="pointer-events-none absolute inset-0 z-10 hidden xl:block">
        <div className="relative mx-auto h-full max-w-[1400px] px-12">
          <div className="absolute right-12 top-1/2 -translate-y-1/2">
            <HeroDemo demo={dict.hero.demo} />
          </div>
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 items-center px-6 lg:px-12"
      >
        <div className="w-full min-w-0">
        <motion.p
          variants={fade}
          className="mb-5 font-mono text-[10px] uppercase tracking-[0.16em] text-accent sm:text-[11px] sm:tracking-[0.2em]"
        >
          {dict.hero.eyebrow}
        </motion.p>

        <h1 className="font-display text-[8.4vw] font-semibold leading-[0.9] tracking-tight sm:text-[7.5vw] lg:text-[5.2vw]">
          {dict.hero.headline.map((l, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                variants={line}
                className={`block pt-[0.12em] pb-[0.04em] ${i === dict.hero.headline.length - 1 ? "text-shimmer" : ""}`}
              >
                {l}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          variants={fade}
          className="mt-7 max-w-xl text-balance text-base text-ink-dim sm:text-lg"
        >
          {dict.hero.sub}
        </motion.p>

        <motion.div variants={fade} className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 font-mono text-[12px] uppercase tracking-wider text-bg transition-transform hover:scale-105 sm:w-auto"
          >
            {dict.hero.ctaPrimary}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#projects"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line-strong px-7 py-4 font-mono text-[12px] uppercase tracking-wider text-ink transition-colors hover:border-ink sm:w-auto"
          >
            {dict.hero.ctaSecondary}
          </a>
          <Link
            href={course.href}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-signal/60 px-7 py-4 font-mono text-[12px] uppercase tracking-wider text-signal transition-colors hover:bg-signal/10 sm:w-auto"
          >
            {course.label}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>

        <motion.ul variants={fade} className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
          {dict.hero.trust.map((t) => (
            <li key={t} className="flex items-center gap-2 text-sm text-ink-dim">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              {t}
            </li>
          ))}
        </motion.ul>

        <motion.div variants={fade} className="mt-10 xl:hidden">
          <HeroDemo demo={dict.hero.demo} />
        </motion.div>
        </div>
      </motion.div>

    </section>
  );
}
