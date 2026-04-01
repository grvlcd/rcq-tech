"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState, type FormEvent } from "react";
import { Check, Send } from "lucide-react";

import { BorderBeam } from "@/components/ui/border-beam";
import { MagicCard } from "@/components/ui/magic-card";
import { ShinyButton } from "@/components/ui/shiny-button";
import { cn } from "@/lib/utils";

import { ContactChipGroup } from "./contact-chip-group";
import { ContactGlowField } from "./contact-glow-field";
import {
  CONTACT_BUDGET_OPTIONS,
  CONTACT_SERVICE_OPTIONS,
  type ContactBudgetId,
  type ContactServiceId,
} from "./data";

const DESC_MAX = 2000;

type ContactFormProps = {
  inView: boolean;
};

export function ContactForm({ inView }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState<ContactServiceId>("web");
  const [budget, setBudget] = useState<ContactBudgetId>("discuss");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [showRequiredHint, setShowRequiredHint] = useState(false);
  const allRequiredFilled =
    Boolean(name.trim()) && Boolean(email.trim()) && Boolean(description.trim());
  const visibleRequiredHint = showRequiredHint && !allRequiredFilled;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !description.trim()) {
      setShowRequiredHint(true);
      return;
    }
    setShowRequiredHint(false);
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
  }

  return (
    <motion.div
      className="relative lg:pl-4"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={cn(
          "relative rounded-3xl border border-white/[0.07] bg-zinc-950/30 p-[1px]",
          "shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_24px_80px_-32px_rgba(0,0,0,0.7)]"
        )}
      >
        <MagicCard
          className="rounded-3xl"
          mode="orb"
          glowFrom="rgba(196, 154, 0, 0.55)"
          glowTo="rgba(90, 70, 20, 0.35)"
          glowSize={380}
          glowBlur={72}
          glowOpacity={0.55}
        >
          <div className="relative overflow-hidden rounded-3xl bg-zinc-950/92 p-6 sm:p-8">
            <BorderBeam
              size={120}
              duration={10}
              borderWidth={1}
              colorFrom="rgba(196, 154, 0, 0.35)"
              colorTo="rgba(196, 154, 0, 0.08)"
            />

            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10 flex min-h-[320px] flex-col items-center justify-center gap-5 py-8 text-center"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 18,
                      delay: 0.05,
                    }}
                    className="flex size-16 items-center justify-center rounded-full border border-gold/30 bg-gold/15 text-gold"
                    aria-hidden
                  >
                    <Check className="size-8" strokeWidth={2} />
                  </motion.span>
                  <div>
                    <h3 className="font-[family-name:var(--font-sans)] text-xl font-semibold text-white">
                      Message received
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-500">
                      Thanks{", "}
                      {name.trim() || "there"}. We will reply within 24 hours
                      with next steps for your consultation.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="text-sm font-medium text-gold underline-offset-4 hover:underline"
                    onClick={() => {
                      setStatus("idle");
                      setName("");
                      setEmail("");
                      setDescription("");
                      setService("web");
                      setBudget("discuss");
                    }}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={
                    visibleRequiredHint
                      ? { opacity: 1, x: [0, -7, 7, -5, 5, 0] }
                      : { opacity: 1, x: 0 }
                  }
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, x: { duration: 0.45 } }}
                  onSubmit={handleSubmit}
                  className="relative z-10 space-y-6"
                  noValidate
                >
                  <AnimatePresence>
                    {visibleRequiredHint && (
                      <motion.p
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="rounded-lg border border-amber-500/25 bg-amber-500/10 px-3 py-2 text-sm text-amber-200/90"
                        role="alert"
                      >
                        Please add your name, email, and a short project
                        description so we can help.
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <ContactGlowField label="Name">
                      {(field) => (
                        <input
                          {...field}
                          name="name"
                          autoComplete="name"
                          placeholder="Your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      )}
                    </ContactGlowField>
                    <ContactGlowField label="Email">
                      {(field) => (
                        <input
                          {...field}
                          name="email"
                          type="email"
                          autoComplete="email"
                          inputMode="email"
                          placeholder="you@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      )}
                    </ContactGlowField>
                  </div>

                  <ContactChipGroup
                    label="Service needed"
                    name="service"
                    value={service}
                    onChange={(id) => setService(id as ContactServiceId)}
                    options={CONTACT_SERVICE_OPTIONS}
                  />

                  <ContactGlowField
                    label="Project description"
                    hint={`${description.length} / ${DESC_MAX}`}
                  >
                    {(field) => (
                      <textarea
                        {...field}
                        name="description"
                        placeholder="Goals, timeline, integrations, links — anything that helps us prepare."
                        maxLength={DESC_MAX}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className={cn(field.className, "min-h-[128px] resize-y")}
                      />
                    )}
                  </ContactGlowField>

                  <ContactChipGroup
                    label="Budget range"
                    name="budget"
                    value={budget}
                    onChange={(id) => setBudget(id as ContactBudgetId)}
                    options={CONTACT_BUDGET_OPTIONS}
                  />

                  <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-zinc-600">
                      By sending, you agree we may email you about this inquiry.
                    </p>
                    <ShinyButton
                      type="submit"
                      disabled={status === "sending"}
                      className={cn(
                        "inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-8 py-3.5",
                        "font-[family-name:var(--font-geist-mono)] text-xs font-semibold uppercase tracking-[0.16em]",
                        "bg-gold text-zinc-950",
                        "shadow-[0_0_0_1px_rgba(255,255,255,0.12)_inset,0_4px_24px_rgba(196,154,0,0.35)]",
                        "transition-[transform,box-shadow,filter] hover:brightness-105 disabled:opacity-60",
                        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                      )}
                    >
                      {status === "sending" ? (
                        <span className="inline-flex items-center gap-2">
                          <motion.span
                            className="size-3.5 rounded-full border-2 border-zinc-950/30 border-t-zinc-950"
                            animate={{ rotate: 360 }}
                            transition={{
                              repeat: Infinity,
                              duration: 0.7,
                              ease: "linear",
                            }}
                            aria-hidden
                          />
                          Sending
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-2">
                          <Send className="size-3.5" strokeWidth={2.5} />
                          Send message
                        </span>
                      )}
                    </ShinyButton>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </MagicCard>
      </div>
    </motion.div>
  );
}
