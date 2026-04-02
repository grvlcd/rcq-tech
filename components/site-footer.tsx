"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { BorderBeam } from "@/components/ui/border-beam";
import { SITE_NAV_LINKS } from "@/lib/site-nav";
import { SITE_SOCIAL_LINKS } from "@/lib/site-social";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  const reduceMotion = useReducedMotion();

  return (
    <footer
      className="relative mt-auto overflow-hidden border-t border-white/[0.06] bg-[#070707]"
      aria-labelledby="site-footer-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-30%,rgba(196,154,0,0.14),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-950/40 shadow-[0_0_0_1px_rgba(196,154,0,0.06)_inset,0_28px_80px_-32px_rgba(0,0,0,0.9)] backdrop-blur-sm">
          <BorderBeam
            size={120}
            duration={14}
            borderWidth={1}
            colorFrom="#c49a00"
            colorTo="#f0e6c8"
            initialOffset={12}
          />

          <div className="relative grid gap-12 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-10 lg:px-12 lg:py-14">
            <div className="space-y-5">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="bg-gradient-to-r from-[#e8d089] via-gold to-[#a67c00] bg-clip-text font-[family-name:var(--font-geist-mono)] text-lg font-semibold tracking-[0.18em] text-transparent uppercase">
                  RCQ
                </span>
                <span className="font-[family-name:var(--font-geist-mono)] text-gold/40 text-xs">
                  {"//"}
                </span>
                <span
                  id="site-footer-heading"
                  className="font-[family-name:var(--font-sans)] text-lg font-medium tracking-tight text-zinc-100"
                >
                  Tech
                </span>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
                We ship dependable software—apps, automation, and sites engineered for clarity,
                speed, and measurable outcomes.
              </p>
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-2 rounded-xl border border-gold/25 bg-gold/[0.08] px-4 py-2.5 text-sm font-medium text-gold outline-none transition-colors hover:border-gold/45 hover:bg-gold/[0.14] focus-visible:ring-2 focus-visible:ring-gold/40"
                >
                  Start a project
                  <ArrowUpRight className="size-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
              <div className="pt-1">
                <p className="mb-3 font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                  Social
                </p>
                <ul className="flex flex-wrap gap-2" aria-label="Social media">
                  {SITE_SOCIAL_LINKS.map(({ label, href, Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${label} (opens in a new tab)`}
                        className={cn(
                          "inline-flex size-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-400 outline-none transition-colors",
                          "hover:border-gold/35 hover:bg-gold/[0.08] hover:text-gold",
                          "focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0c]"
                        )}
                      >
                        <Icon className="size-[22px]" aria-hidden />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <p className="mb-4 font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                Navigate
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 sm:gap-y-2.5">
                {SITE_NAV_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="group inline-flex items-center text-sm text-zinc-400 outline-none transition-colors hover:text-gold focus-visible:text-gold focus-visible:ring-2 focus-visible:ring-gold/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0c0c] rounded-sm"
                    >
                      <span className="relative">
                        {label}
                        <span
                          className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gold/80 transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
                          aria-hidden
                        />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:border-l lg:border-white/[0.06] lg:pl-10">
              <p className="mb-4 font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                Studio
              </p>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li>
                  <span className="text-zinc-500">Based worldwide</span>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="text-zinc-300 underline decoration-gold/25 underline-offset-4 transition-colors hover:text-gold hover:decoration-gold/50"
                  >
                    Contact &amp; availability
                  </Link>
                </li>
                <li className="pt-1 font-[family-name:var(--font-geist-mono)] text-xs text-zinc-600">
                  Response within one business day.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-center sm:flex-row sm:text-left">
          <p className="font-[family-name:var(--font-geist-mono)] text-xs text-zinc-600">
            © {new Date().getFullYear()} RCQ Tech. All rights reserved.
          </p>
          <p className="max-w-md text-xs leading-relaxed text-zinc-600">
            Crafted with attention to reliability, consistency, and quality—every line, every
            launch.
          </p>
        </div>
      </div>
    </footer>
  );
}
