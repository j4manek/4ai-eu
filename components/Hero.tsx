"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/dictionaries";
import { HeroIllustration } from "./HeroIllustration";

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

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      <HeroIllustration />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg from-35% via-bg/85 via-48% to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-12"
      >
        <motion.p
          variants={fade}
          className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent"
        >
          {dict.hero.eyebrow}
        </motion.p>

        <h1 className="font-display text-[13vw] font-semibold leading-[0.92] tracking-tight sm:text-[9vw] lg:text-[6.4vw]">
          {dict.hero.headline.map((l, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span variants={line} className="block">
                {l}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          variants={fade}
          className="mt-7 max-w-md text-balance text-base text-ink-dim sm:text-lg"
        >
          {dict.hero.sub}
        </motion.p>

        <motion.div variants={fade} className="mt-9">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-mono text-[12px] uppercase tracking-wider text-bg transition-transform hover:scale-105"
          >
            {dict.hero.ctaPrimary}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#services"
        variants={fade}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.9 }}
        className="absolute bottom-8 left-6 z-10 font-mono text-[11px] uppercase tracking-wider text-ink-faint lg:left-12"
      >
        {dict.hero.skip}
      </motion.a>
    </section>
  );
}
