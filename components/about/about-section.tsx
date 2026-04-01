"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

import { AboutBackground } from "./about-background";
import { AboutNarrativePanel } from "./about-narrative-panel";
import { AboutStatTile } from "./about-stat-tile";
import { AboutValueCard } from "./about-value-card";
import { aboutStats, aboutValues } from "./data";

export function AboutSection() {
  const rootRef = useRef<HTMLElement>(null);
  const inView = useInView(rootRef, { once: true, margin: "-10% 0px" });

  return (
    <section
      ref={rootRef}
      id="about"
      className="relative scroll-mt-24 sm:scroll-mt-28"
      aria-labelledby="about-heading"
    >
      <AboutBackground />

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="font-[family-name:var(--font-geist-mono)] text-xs font-medium uppercase tracking-[0.2em] text-gold">
            About
          </p>
          <h2
            id="about-heading"
            className="mt-3 font-[family-name:var(--font-sans)] text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.35rem] lg:leading-[1.12]"
          >
            A small team with a big commitment.
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-12 lg:gap-6 lg:items-start">
          <AboutNarrativePanel inView={inView} />

          <div className="grid gap-4 lg:col-span-5">
            {aboutValues.map((v, i) => (
              <AboutValueCard key={v.letter} {...v} delay={0.12 + i * 0.08} />
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:mt-8 lg:grid-cols-4">
          {aboutStats.map((s, i) => (
            <AboutStatTile key={s.label} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
