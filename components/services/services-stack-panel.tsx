"use client";

import { AnimatedList } from "@/components/ui/animated-list";
import { BorderBeam } from "@/components/ui/border-beam";
import { Globe } from "lucide-react";

import { stackTeasers } from "./data";

export function ServicesStackPanel() {
  return (
    <div className="relative lg:col-span-5">
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-950/60 p-1 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]">
        <BorderBeam
          size={60}
          duration={14}
          delay={2}
          reverse
          colorFrom="#c49a00"
          colorTo="#c49a00"
          borderWidth={1}
        />
        <div className="relative rounded-[0.9rem] bg-linear-to-b from-zinc-900/90 to-zinc-950 p-5 sm:p-6">
          <div className="mb-4 flex items-center gap-2 text-zinc-500">
            <Globe className="size-4 text-gold/80" aria-hidden />
            <span className="font-[family-name:var(--font-geist-mono)] text-[0.65rem] uppercase tracking-[0.25em]">
              Capability stack
            </span>
          </div>
          <AnimatedList
            delay={550}
            className="w-full max-w-none items-stretch gap-3"
          >
            {[...stackTeasers].reverse().map((t) => (
              <div
                key={t.id}
                className="flex w-full items-center justify-between rounded-xl border border-white/[0.06] bg-black/30 px-4 py-3 backdrop-blur-sm transition-colors hover:border-gold/20"
              >
                <span className="font-[family-name:var(--font-geist-mono)] text-xs text-gold/70">
                  {t.id}
                </span>
                <span className="text-sm font-medium text-zinc-200">
                  {t.label}
                </span>
              </div>
            ))}
          </AnimatedList>
        </div>
      </div>
    </div>
  );
}
