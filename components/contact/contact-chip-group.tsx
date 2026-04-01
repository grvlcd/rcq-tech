"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

export type ChipOption = { id: string; label: string };

type ContactChipGroupProps = {
  label: string;
  name: string;
  value: string;
  onChange: (id: string) => void;
  options: readonly ChipOption[];
  className?: string;
};

export function ContactChipGroup({
  label,
  name,
  value,
  onChange,
  options,
  className,
}: ContactChipGroupProps) {
  return (
    <fieldset className={cn("space-y-3", className)}>
      <legend className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-500">
        {label}
      </legend>
      <div
        className="flex flex-wrap gap-2"
        role="radiogroup"
        aria-label={label}
      >
        {options.map((opt) => {
          const selected = value === opt.id;
          return (
            <motion.button
              key={opt.id}
              type="button"
              name={name}
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(opt.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "relative rounded-full border px-3.5 py-2 text-left text-sm font-medium transition-colors duration-200",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
                selected
                  ? "border-gold/50 bg-gold/15 text-white shadow-[0_0_20px_-4px_rgba(196,154,0,0.45)]"
                  : "border-white/[0.08] bg-white/[0.03] text-zinc-400 hover:border-white/[0.14] hover:bg-white/[0.06] hover:text-zinc-300"
              )}
            >
              {selected && (
                <motion.span
                  layoutId={`chip-highlight-${name}`}
                  className="pointer-events-none absolute inset-0 rounded-full bg-gold/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{opt.label}</span>
            </motion.button>
          );
        })}
      </div>
    </fieldset>
  );
}
