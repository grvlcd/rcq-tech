"use client";

import { useInView } from "motion/react";
import { useRef } from "react";

import { ContactForm } from "./contact-form";
import { ContactIntro } from "./contact-intro";
import { ContactPerks } from "./contact-perks";

export function ContactSection() {
  const rootRef = useRef<HTMLElement>(null);
  const inView = useInView(rootRef, { once: true, margin: "-12% 0px" });

  return (
    <section
      ref={rootRef}
      id="contact"
      className="scroll-mt-24 sm:scroll-mt-28"
      aria-labelledby="contact-heading"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-zinc-950/20 px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          aria-hidden
        >
          <div className="absolute -left-1/3 top-0 h-[420px] w-[420px] rounded-full bg-gold/[0.06] blur-[100px]" />
          <div className="absolute -right-1/4 bottom-0 h-[320px] w-[320px] rounded-full bg-gold/[0.04] blur-[90px]" />
        </div>

        <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16 lg:items-start">
          <div>
            <ContactIntro inView={inView} />
            <ContactPerks inView={inView} />
          </div>
          <ContactForm inView={inView} />
        </div>
      </div>
    </section>
  );
}
