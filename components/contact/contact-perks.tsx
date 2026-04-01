"use client";

import { Clock, MessageSquare, Sparkles } from "lucide-react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

const perks = [
  {
    icon: Clock,
    title: "Under 24 hours",
    body: "A real human reviews every inquiry — no ticket bots.",
  },
  {
    icon: MessageSquare,
    title: "Free consultation",
    body: "Scope, risks, and a sane path forward — zero obligation.",
  },
  {
    icon: Sparkles,
    title: "Technical depth",
    body: "You talk to builders who ship, not a sales script.",
  },
] as const;

type ContactPerksProps = {
  inView: boolean;
};

export function ContactPerks({ inView }: ContactPerksProps) {
  return (
    <ul className="mt-10 space-y-4 sm:mt-12">
      {perks.map((item, i) => (
        <motion.li
          key={item.title}
          initial={{ opacity: 0, x: -12 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.45,
            delay: 0.12 + i * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={cn(
            "flex gap-4 rounded-xl border border-white/[0.06] bg-zinc-950/35 p-4",
            "backdrop-blur-sm transition-colors hover:border-white/[0.1]"
          )}
        >
          <span
            className={cn(
              "flex size-10 shrink-0 items-center justify-center rounded-lg",
              "border border-gold/20 bg-gold/10 text-gold"
            )}
            aria-hidden
          >
            <item.icon className="size-[18px]" strokeWidth={1.75} />
          </span>
          <div>
            <h3 className="font-[family-name:var(--font-sans)] text-sm font-semibold text-white">
              {item.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-zinc-500">
              {item.body}
            </p>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}
