"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import { MagicCard } from "@/components/ui/magic-card";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

import type { ServiceItem } from "./data";

export function ServiceTitle({
  item,
  style,
}: {
  item: ServiceItem;
  style?: React.CSSProperties;
}) {
  const Icon = item.icon;
  const isFeatured = "featured" in item && item.featured === true;

  return (
    <motion.article
      style={style}
      className={cn("group relative h-full min-h-[200px]", item.className)}
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0 },
      }}
    >
      <div
        className={cn(
          "relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-950/40 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]"
        )}
      >
        <BorderBeam
          size={70}
          duration={10}
          borderWidth={1.5}
          colorFrom="#c49a00"
          colorTo="#f5e6a3"
          className="opacity-80"
        />
        <div
          className={cn(
            "pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-linear-to-br blur-3xl transition-opacity duration-500 group-hover:opacity-100",
            item.accent,
            "opacity-60"
          )}
        />
        <MagicCard
          className="h-full min-h-[inherit] rounded-2xl border-0 bg-transparent shadow-none"
          gradientSize={220}
          gradientFrom="rgba(196,154,0,0.55)"
          gradientTo="rgba(245,230,163,0.2)"
          gradientColor="rgba(15,15,15,0.92)"
          gradientOpacity={0.75}
        >
          {isFeatured ? (
            <div className="relative grid h-full min-h-0 grid-cols-1 gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-10">
              <div className="relative z-10 flex flex-col justify-center gap-4 lg:py-2">
                <span className="font-[family-name:var(--font-geist-mono)] text-xs font-medium tracking-[0.2em] text-gold/90">
                  {item.id}
                </span>
                <h3 className="font-[family-name:var(--font-sans)] text-2xl font-semibold leading-[1.15] tracking-tight text-white sm:text-3xl">
                  {item.title}
                </h3>
                <p className="max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                  {item.description}
                </p>
              </div>
              <div className="relative z-10 flex min-h-[200px] items-center justify-center lg:min-h-[280px]">
                <Icon
                  aria-hidden
                  className={cn(
                    "pointer-events-none shrink-0 transition-transform duration-500 group-hover:scale-[1.04]",
                    item.iconClass
                  )}
                />
              </div>
            </div>
          ) : (
            <div className="relative flex h-full min-h-0 flex-col justify-between gap-6 p-6 sm:p-8">
              <Icon
                aria-hidden
                className={cn(
                  "pointer-events-none absolute text-gold/[0.14] stroke-[1]",
                  "transition-all duration-500 group-hover:scale-[1.03] group-hover:text-gold/[0.22]",
                  item.iconClass
                )}
              />
              <div className="relative z-10 flex items-start justify-between gap-4">
                <span className="font-[family-name:var(--font-geist-mono)] text-xs font-medium tracking-[0.2em] text-gold/90">
                  {item.id}
                </span>
              </div>
              <div className="relative z-10 mt-auto max-w-[min(100%,28rem)] space-y-2">
                <h3 className="font-[family-name:var(--font-sans)] text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {item.title}
                </h3>
                <p className="max-w-prose text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          )}
        </MagicCard>
      </div>
    </motion.article>
  );
}
