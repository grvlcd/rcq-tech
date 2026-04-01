"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { LiquidGlass } from "@liquidglass/react";
import { cn } from "@/lib/utils";

const navLinks = [
  { sectionId: "home", href: "/", label: "Home" },
  { sectionId: "services", href: "/#services", label: "Services" },
  { sectionId: "about", href: "/#about", label: "About" },
  { sectionId: "pricing", href: "/#pricing", label: "Pricing" },
  { sectionId: "portfolio", href: "/#portfolio", label: "Portfolio" },
  { sectionId: "contact", href: "/#contact", label: "Contact" },
] as const;

type SectionId = (typeof navLinks)[number]["sectionId"];

const SECTION_ORDER: readonly SectionId[] = [
  "home",
  "services",
  "about",
  "pricing",
  "portfolio",
  "contact",
];

const SCROLL_SPY_OFFSET_PX = 100;

const FLOATING_GLASS_RADIUS_PX = 18;

function getActiveSectionId(): SectionId | null {
  let active: SectionId | null = null;
  for (const id of SECTION_ORDER) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= SCROLL_SPY_OFFSET_PX) active = id;
  }
  return active;
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<SectionId | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const sync = () => {
      setScrolled(window.scrollY > 16);
      setActiveSectionId(getActiveSectionId());
      ticking = false;
    };
    const onScrollOrResize = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(sync);
      }
    };
    sync();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const bar = (
    <div className="mx-auto flex h-16 w-full max-w-6xl shrink-0 items-center justify-between px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
      <Link
        href="/"
        className="group/logo relative flex items-center gap-3 rounded-xl py-1.5 pr-1.5 outline-none focus-visible:ring-2 focus-visible:ring-gold/45 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:gap-3.5"
        onClick={() => setOpen(false)}
        aria-label="RCQ Tech home"
      >
        <span className="flex min-w-0 items-baseline gap-2">
          <span className="bg-gradient-to-r from-[#e8d089] via-gold to-[#a67c00] bg-clip-text font-[family-name:var(--font-geist-mono)] text-base font-semibold tracking-[0.16em] text-transparent uppercase sm:text-lg">
            RCQ
          </span>
          <span
            className="font-[family-name:var(--font-geist-mono)] text-gold/35 text-xs transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/logo:translate-x-px group-hover/logo:text-gold/55 sm:text-sm"
            aria-hidden
          >
            //
          </span>
          <span className="font-[family-name:var(--font-sans)] text-base font-medium tracking-tight text-zinc-500 transition-colors duration-300 group-hover/logo:text-zinc-100 sm:text-lg">
            Tech
          </span>
        </span>
      </Link>

      <nav className="hidden items-center gap-0.5 md:flex" aria-label="Main">
        {navLinks.map(({ sectionId, href, label }) => {
          const isActive = activeSectionId === sectionId;
          return (
            <Link
              key={href}
              href={href}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "group relative rounded-lg px-3.5 py-2 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-gold/35",
                isActive
                  ? "text-gold"
                  : "text-zinc-400 hover:text-gold focus-visible:text-gold"
              )}
            >
              {label.toUpperCase()}
              <span
                className={cn(
                  "pointer-events-none absolute inset-x-3 bottom-1.5 h-px origin-center bg-gold transition-transform duration-300 ease-out",
                  isActive
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                )}
                aria-hidden
              />
            </Link>
          );
        })}
      </nav>

      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gold/20 bg-gold/[0.06] text-gold shadow-sm outline-none transition-colors hover:border-gold/35 hover:bg-gold/[0.1] focus-visible:ring-2 focus-visible:ring-gold/40 md:hidden"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>
    </div>
  );

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-[padding] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled ? "px-3 pt-2.5 sm:px-6 sm:pt-4" : "border-b border-transparent"
        )}
      >
        {scrolled ? (
          <div
            className="mx-auto w-full max-w-6xl p-px shadow-[0_22px_56px_-16px_rgba(0,0,0,0.88),0_10px_28px_-12px_rgba(0,0,0,0.55),0_0_0_1px_rgba(232,201,109,0.22),inset_0_1px_0_0_rgba(255,255,255,0.14)] ring-1 ring-white/[0.06]"
            style={{ borderRadius: FLOATING_GLASS_RADIUS_PX }}
          >
            <LiquidGlass
              borderRadius={FLOATING_GLASS_RADIUS_PX}
              zIndex={50}
              blur={14}
              contrast={1.18}
              brightness={1.06}
              saturation={1.28}
              shadowIntensity={0.42}
              displacementScale={0.85}
              elasticity={0.5}
              className="w-full min-h-16 sm:min-h-[4.25rem]"
            >
              {bar}
            </LiquidGlass>
          </div>
        ) : (
          bar
        )}
      </header>

      <AnimatePresence>
        {open ? (
          <motion.button
            type="button"
            aria-label="Close menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 cursor-default bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          />
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav-panel"
            role="navigation"
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "fixed left-3 right-3 z-50 overflow-hidden rounded-2xl border border-gold/15 bg-black/75 shadow-[0_1px_0_0_rgba(232,201,109,0.1)_inset,0_24px_48px_-16px_rgba(0,0,0,0.75)] backdrop-blur-2xl backdrop-saturate-150 md:hidden",
              scrolled ? "top-[5.75rem]" : "top-[4.75rem]"
            )}
            aria-label="Mobile main"
          >
            <ul className="flex flex-col p-2">
              {navLinks.map(({ sectionId, href, label }, i) => {
                const isActive = activeSectionId === sectionId;
                return (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.22 }}
                  >
                    <Link
                      href={href}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "block rounded-xl border-l-2 border-transparent px-4 py-3.5 text-[15px] font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold/30",
                        isActive
                          ? "border-gold bg-gold/[0.1] text-gold"
                          : "text-zinc-300 hover:border-gold/25 hover:bg-gold/[0.06] hover:text-gold focus-visible:bg-gold/[0.06]"
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {label}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </>
  );
}
