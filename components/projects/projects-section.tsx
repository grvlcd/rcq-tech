"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

import { projectMarqueeItems, projects } from "./data";
import { ProjectShowcaseCard } from "./project-showcase-card";

function MarqueeChip({ label }: { label: string }) {
  return (
    <span
      className={cn(
        "mx-3 inline-flex items-center rounded-full border border-white/[0.05]",
        "bg-white/[0.02] px-4 py-1.5 font-[family-name:var(--font-geist-mono)]",
        "text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500"
      )}
    >
      {label}
    </span>
  );
}

export function ProjectsSection() {
  const rootRef = useRef<HTMLElement>(null);
  const inView = useInView(rootRef, { once: true, margin: "-10% 0px" });

  return (
    <section
      ref={rootRef}
      id="portfolio"
      className="scroll-mt-24 sm:scroll-mt-28"
      aria-labelledby="portfolio-heading"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-zinc-950/25 px-1 py-8 sm:px-4 sm:py-10">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.2]"
          aria-hidden
        >
          <div className="absolute -left-1/4 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <div className="absolute -right-1/4 bottom-0 h-px w-1/2 bg-gradient-to-l from-transparent via-gold/15 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative px-3 sm:px-2"
        >
          <p className="font-[family-name:var(--font-geist-mono)] text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Portfolio
          </p>
          <h2
            id="portfolio-heading"
            className="mt-3 max-w-3xl font-[family-name:var(--font-sans)] text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl"
          >
            Products we ship in production.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-500">
            Live platforms spanning talent marketplaces and AI customer
            experience — engineered for real operators, not slide decks.
          </p>
        </motion.div>

        <div className="relative mt-10 space-y-3 mask-[linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <Marquee
            pauseOnHover
            durationSeconds={24}
            className="[--gap:0.35rem] py-0"
          >
            {projectMarqueeItems.map((item) => (
              <MarqueeChip key={item} label={item} />
            ))}
          </Marquee>
          <Marquee
            reverse
            pauseOnHover
            durationSeconds={20}
            className="[--gap:0.35rem] py-0 opacity-70"
          >
            {projectMarqueeItems.map((item) => (
              <MarqueeChip key={`${item}-rev`} label={item} />
            ))}
          </Marquee>
        </div>

        <div className="relative mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectShowcaseCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
