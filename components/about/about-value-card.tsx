"use client";

import { MagicCard } from "@/components/ui/magic-card";
import { motion } from "motion/react";

import type { AboutValue } from "./data";

export function AboutValueCard({
  letter,
  title,
  body,
  delay,
}: AboutValue & { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{
        duration: 0.45,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative h-full min-h-[7.5rem] rounded-2xl border border-white/[0.07] bg-zinc-950/40 p-[1px] shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]"
    >
      <MagicCard
        className="h-full rounded-2xl"
        gradientSize={220}
        gradientFrom="rgba(196, 154, 0, 0.5)"
        gradientTo="rgba(196, 154, 0, 0.5)"
        gradientColor="rgba(196, 154, 0, 0.5)"
        gradientOpacity={0.85}
      >
        <div className="flex h-full gap-4 rounded-2xl bg-zinc-950/88 p-5 sm:p-6">
          <span
            className="font-[family-name:var(--font-geist-mono)] text-3xl font-semibold tabular-nums text-gold sm:text-4xl"
            aria-hidden
          >
            {letter}
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="font-[family-name:var(--font-sans)] text-base font-semibold tracking-tight text-white">
              {title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">{body}</p>
          </div>
        </div>
      </MagicCard>
    </motion.div>
  );
}
