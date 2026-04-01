"use client";

import { motion } from "motion/react";

type ContactIntroProps = {
  inView: boolean;
};

export function ContactIntro({ inView }: ContactIntroProps) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="font-[family-name:var(--font-geist-mono)] text-xs font-medium uppercase tracking-[0.2em] text-gold">
        Contact
      </p>
      <h2
        id="contact-heading"
        className="mt-3 max-w-xl font-[family-name:var(--font-sans)] text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl"
      >
        Let&apos;s build something together.
      </h2>
      <p className="mt-4 max-w-lg text-base leading-relaxed text-zinc-400">
        Have a project in mind? Tell us about it. We will get back to you
        within 24 hours with a free consultation.
      </p>
    </motion.div>
  );
}
