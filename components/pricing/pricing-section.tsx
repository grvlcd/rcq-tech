"use client";

import Link from "next/link";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { useRef, useState } from "react";
import { Globe, Smartphone, Workflow, Sparkles, ChevronRight } from "lucide-react";

import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { MagicCard } from "@/components/ui/magic-card";
import { cn } from "@/lib/utils";

import {
  PRICING_CATEGORIES,
  TIER_ORDER,
  type PricingCategory,
  type TierId,
} from "./data";

const icons = {
  globe: Globe,
  smartphone: Smartphone,
  workflow: Workflow,
  sparkles: Sparkles,
} as const;

function formatPhp(n: number) {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  }).format(n);
}

function formatUsd(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export function PricingSection() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [tierId, setTierId] = useState<TierId>("standard");
  const sectionRef = useRef<HTMLElement>(null);

  const category: PricingCategory = PRICING_CATEGORIES[categoryIndex]!;
  const tier = category.tiers[tierId];
  const Icon = icons[category.icon];

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="scroll-mt-24 sm:scroll-mt-28"
      aria-labelledby="pricing-heading"
    >
      <div className="relative">
        <div
          className="pointer-events-none absolute -inset-x-8 -top-24 h-64 opacity-40 blur-3xl"
          style={{
            background: `radial-gradient(ellipse 70% 60% at 50% 0%, ${category.gradientFrom}33, transparent 70%)`,
          }}
          aria-hidden
        />

        <header className="relative max-w-3xl">
          <p className="font-[family-name:var(--font-geist-mono)] text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Pricing by complexity
          </p>
          <h2
            id="pricing-heading"
            className="mt-3 font-[family-name:var(--font-sans)] text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Starting rates.{" "}
            <span className="text-zinc-500">Final scope defines the rest.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            All prices are starting rates—your quote reflects requirements,
            integrations, and timeline. Not sure which tier fits?{" "}
            <Link
              href="/#contact"
              className="text-gold underline-offset-4 hover:text-gold/90 hover:underline"
            >
              Contact us
            </Link>{" "}
            and we will map it together.
          </p>
        </header>

        <div className="relative mt-10 lg:mt-12 lg:grid lg:grid-cols-12 lg:gap-8 lg:gap-y-6">
          {/* Category rail */}
          <nav
            className="lg:col-span-5"
            aria-label="Service categories"
          >
            <p className="mb-3 font-[family-name:var(--font-geist-mono)] text-[0.65rem] font-medium uppercase tracking-[0.18em] text-zinc-500">
              Pick a track
            </p>
            <LayoutGroup id="pricing-cats">
              <ul className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-col lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
                {PRICING_CATEGORIES.map((cat, i) => {
                  const active = i === categoryIndex;
                  const CIcon = icons[cat.icon];
                  return (
                    <li key={cat.id} className="shrink-0 lg:w-full">
                      <button
                        type="button"
                        onClick={() => setCategoryIndex(i)}
                        className={cn(
                          "relative flex w-full items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-colors lg:px-4 lg:py-4",
                          active
                            ? "border-white/15 bg-white/[0.06] text-white"
                            : "border-transparent bg-transparent text-zinc-500 hover:border-white/10 hover:bg-white/[0.03] hover:text-zinc-300"
                        )}
                      >
                        {active && (
                          <motion.span
                            layoutId="pricing-cat-highlight"
                            className="absolute inset-0 rounded-2xl border border-white/10 bg-linear-to-br from-white/[0.07] to-transparent"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 34,
                            }}
                          />
                        )}
                        <span
                          className={cn(
                            "relative z-10 flex size-10 shrink-0 items-center justify-center rounded-xl border",
                            active
                              ? "border-white/15 bg-black/30 text-white"
                              : "border-white/5 bg-black/20 text-zinc-500"
                          )}
                          style={
                            active
                              ? {
                                boxShadow: `0 0 24px -4px ${cat.gradientFrom}55`,
                              }
                              : undefined
                          }
                        >
                          <CIcon className="size-5" aria-hidden />
                        </span>
                        <span className="relative z-10 min-w-0 flex-1">
                          <span className="block font-medium leading-snug">
                            {cat.title}
                          </span>
                          <span className="mt-0.5 block text-sm leading-snug text-zinc-500">
                            {cat.tagline}
                          </span>
                        </span>
                        <ChevronRight
                          className={cn(
                            "relative z-10 size-4 shrink-0 transition-transform",
                            active
                              ? "translate-x-0 text-gold"
                              : "-translate-x-1 opacity-0 lg:opacity-40"
                          )}
                          aria-hidden
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </LayoutGroup>
          </nav>

          {/* Detail panel */}
          <div className="relative mt-8 lg:col-span-7 lg:mt-0">
            <div className="relative overflow-hidden rounded-3xl">
              <MagicCard
                className="rounded-3xl"
                gradientFrom={category.gradientFrom}
                gradientTo={category.gradientTo}
                gradientSize={280}
                gradientColor="#0a0a0a"
                gradientOpacity={0.55}
              >
                <div className="rounded-[inherit] p-6 sm:p-8">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <span
                        className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-white"
                        style={{
                          boxShadow: `0 0 32px -8px ${category.gradientFrom}66`,
                        }}
                      >
                        <Icon className="size-6" aria-hidden />
                      </span>
                      <div>
                        <p className="font-[family-name:var(--font-geist-mono)] text-[0.65rem] font-medium uppercase tracking-[0.2em] text-zinc-500">
                          {category.title}
                        </p>
                        <p className="mt-1 max-w-md text-sm text-zinc-400">
                          Choose complexity—scope and integrations adjust the
                          estimate.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tier segmented control */}
                  <div
                    key={category.id}
                    className="mt-8"
                    role="group"
                    aria-label="Complexity tier"
                  >
                    <div className="relative grid grid-cols-3 gap-1 rounded-2xl border border-white/10 bg-black/40 p-1">
                      {TIER_ORDER.map((id) => {
                        const t = category.tiers[id];
                        const selected = tierId === id;
                        return (
                          <button
                            key={id}
                            type="button"
                            onClick={() => setTierId(id)}
                            className={cn(
                              "relative z-10 rounded-xl px-2 py-2.5 text-center text-sm font-medium transition-colors sm:py-3",
                              selected
                                ? "text-white"
                                : "text-zinc-500 hover:text-zinc-300"
                            )}
                          >
                            {selected && (
                              <motion.span
                                layoutId="pricing-tier-pill"
                                className="absolute inset-0 rounded-xl border border-white/10 bg-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                                transition={{
                                  type: "spring",
                                  stiffness: 400,
                                  damping: 35,
                                }}
                              />
                            )}
                            <span className="relative z-10 block truncate">
                              {t.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${category.id}-${tierId}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      className="mt-8 space-y-6"
                    >
                      <p className="text-base leading-relaxed text-zinc-300">
                        {tier.summary}
                      </p>

                      <dl className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4">
                          <dt className="font-[family-name:var(--font-geist-mono)] text-[0.65rem] font-medium uppercase tracking-[0.16em] text-zinc-500">
                            Timeline
                          </dt>
                          <dd className="mt-2 text-lg font-semibold text-white">
                            {tier.timeline}
                          </dd>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 sm:col-span-1">
                          <dt className="font-[family-name:var(--font-geist-mono)] text-[0.65rem] font-medium uppercase tracking-[0.16em] text-zinc-500">
                            Starting at
                          </dt>
                          <dd className="mt-2 space-y-1">
                            <span className="block text-lg font-semibold text-white">
                              {formatPhp(tier.php)}
                            </span>
                            <span className="block text-sm text-zinc-500">
                              ≈ {formatUsd(tier.usd)} USD
                            </span>
                          </dd>
                        </div>
                      </dl>

                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        <Button asChild size="lg" className="rounded-xl">
                          <Link href="/#contact">Get a tailored quote</Link>
                        </Button>
                        <p className="text-xs text-zinc-500 sm:max-w-[14rem]">
                          Share goals and constraints—we reply with a clear next
                          step.
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </MagicCard>

              <BorderBeam
                size={100}
                duration={10}
                borderWidth={1.5}
                colorFrom={category.beamFrom}
                colorTo={category.beamTo}
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
