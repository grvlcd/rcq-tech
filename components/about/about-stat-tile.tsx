"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import { motion } from "motion/react";

import type { AboutStat } from "./data";

export function AboutStatTile({
  value,
  label,
  index,
}: AboutStat & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{
        duration: 0.4,
        delay: 0.06 * index,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-linear-to-br from-zinc-900/80 to-zinc-950 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]"
    >
      <BorderBeam
        size={70}
        duration={10 + index * 2}
        delay={index * 1.2}
        reverse={index % 2 === 1}
        colorFrom="#c49a00"
        colorTo="#6b21ef"
        borderWidth={1}
      />
      <p
        className="font-[family-name:var(--font-geist-mono)] text-2xl font-semibold tracking-tight text-gold sm:text-3xl"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {value}
      </p>
      <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
        {label}
      </p>
    </motion.div>
  );
}
