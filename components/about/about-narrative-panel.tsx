"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import { MagicCard } from "@/components/ui/magic-card";
import { motion } from "motion/react";

import { aboutNarrative, aboutPrincipleTags } from "./data";

type AboutNarrativePanelProps = {
  inView: boolean;
};

export function AboutNarrativePanel({ inView }: AboutNarrativePanelProps) {
  return (
    <motion.div
      className="relative lg:col-span-7"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="relative overflow-hidden rounded-[1.35rem] border border-white/[0.09] bg-zinc-950/50 p-[1px] shadow-[0_24px_80px_-40px_rgba(196,154,0,0.35)]">
        <BorderBeam
          size={100}
          duration={18}
          colorFrom="#c49a00"
          colorTo="#c49a00"
          borderWidth={1}
        />
        <MagicCard
          className="rounded-[1.3rem]"
          gradientSize={280}
          gradientFrom="rgba(196, 154, 0, 0.5)"
          gradientTo="rgba(196, 154, 0, 0.5)"
          gradientColor="rgba(196, 154, 0, 0.5)"
          gradientOpacity={0.75}
        >
          <div className="relative rounded-[1.28rem] bg-linear-to-br from-zinc-950/95 via-zinc-950/90 to-zinc-950/95 px-6 py-8 sm:px-9 sm:py-10">
            <p className="text-base leading-relaxed text-zinc-400 sm:text-[1.05rem] sm:leading-relaxed">
              {aboutNarrative}
            </p>
            <div
              className="mt-8 flex flex-wrap gap-2"
              aria-label="Operating principles"
            >
              {aboutPrincipleTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-[family-name:var(--font-geist-mono)] text-[0.65rem] uppercase tracking-[0.2em] text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </MagicCard>
      </div>
    </motion.div>
  );
}
