"use client";

import { ShinyButton } from "@/components/ui/shiny-button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

type ServicesIntroProps = {
  inView: boolean;
};

export function ServicesIntro({ inView }: ServicesIntroProps) {
  return (
    <motion.div
      className="lg:col-span-7"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="font-[family-name:var(--font-geist-mono)] text-xs font-medium uppercase tracking-[0.2em] text-gold">
        Services
      </p>
      <h2
        id="services-heading"
        className="mt-3 max-w-3xl font-[family-name:var(--font-sans)] text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.35rem] lg:leading-[1.15]"
      >
        Apps, automation, and everything in between.
      </h2>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
        We build whatever you need. From a simple landing page to a full
        AI-powered product. No templates. No limits. Just clean, working
        software.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <ShinyButton
          className={cn(
            "rounded-lg px-7 py-3.5",
            "font-[family-name:var(--font-geist-mono)] text-xs font-semibold uppercase tracking-[0.18em]",
            "bg-gold text-zinc-950",
            "shadow-[0_0_0_1px_rgba(255,255,255,0.12)_inset,0_4px_24px_rgba(196,154,0,0.35)]",
            "transition-[transform,box-shadow,filter] hover:brightness-105 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.18)_inset,0_8px_32px_rgba(196,154,0,0.45)]",
            "active:translate-y-px active:brightness-95",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          )}
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Start a project
        </ShinyButton>
      </div>
    </motion.div>
  );
}
