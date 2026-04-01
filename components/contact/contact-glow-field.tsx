"use client";

import { motion, useReducedMotion } from "motion/react";
import { useId, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContactGlowFieldProps = {
  label: string;
  children: (props: {
    id: string;
    "aria-invalid"?: boolean;
    className: string;
    onFocus: () => void;
    onBlur: () => void;
  }) => ReactNode;
  hint?: string;
  error?: string;
  className?: string;
};

export function ContactGlowField({
  label,
  children,
  hint,
  error,
  className,
}: ContactGlowFieldProps) {
  const id = useId();
  const [focused, setFocused] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <div className={cn("space-y-2", className)}>
      <label
        htmlFor={id}
        className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-500"
      >
        {label}
      </label>
      <motion.div
        className="relative rounded-xl"
        animate={
          reduceMotion
            ? {}
            : {
                boxShadow: focused
                  ? "0 0 0 1px rgba(196, 154, 0, 0.35), 0 0 28px -8px rgba(196, 154, 0, 0.25)"
                  : "0 0 0 1px rgba(255,255,255,0.06), 0 0 0 0 transparent",
              }
        }
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      >
        {children({
          id,
          "aria-invalid": Boolean(error),
          className: cn(
            "w-full rounded-xl border border-white/[0.08] bg-zinc-950/60 px-4 py-3 text-sm text-white",
            "placeholder:text-zinc-600",
            "transition-[border-color,background-color] duration-200",
            "focus:border-gold/35 focus:bg-zinc-950/80 focus:outline-none",
            error && "border-red-500/40"
          ),
          onFocus: () => setFocused(true),
          onBlur: () => setFocused(false),
        })}
      </motion.div>
      {hint && !error && (
        <p className="text-xs text-zinc-600">{hint}</p>
      )}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
