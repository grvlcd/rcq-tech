"use client";

import { AnimatedList } from "@/components/ui/animated-list";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";
import {
    Globe,
    LayoutTemplate,
    Sparkles,
    Smartphone,
    Workflow,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ServiceTitle } from "@/components/service-title";
import { ShinyButton } from "./ui/shiny-button";

export const services = [
    {
        id: "01",
        title: "Custom App Development",
        description:
            "Web and mobile apps built from scratch, tailored to your exact needs.",
        icon: Smartphone,
        className: "lg:col-span-7 lg:row-span-2 lg:min-h-[420px]",
        accent: "from-amber-500/25 to-gold/10",
        featured: true,
        iconClass:
            "size-[min(92vw,18rem)] sm:size-[min(85vw,20rem)] lg:size-[min(100%,22rem)] xl:size-[min(100%,26rem)] text-gold/[0.18] stroke-[0.85] group-hover:text-gold/[0.26]",
    },
    {
        id: "02",
        title: "Automation and Workflows",
        description:
            "Automate the repetitive stuff so your team focuses on what matters.",
        icon: Workflow,
        className: "lg:col-span-5",
        accent: "from-emerald-500/20 to-gold/5",
        iconClass:
            "absolute -bottom-[10%] -right-[6%] size-[min(65%,13rem)] max-md:size-[min(58vw,11rem)]",
    },
    {
        id: "03",
        title: "AI-Powered Solutions",
        description:
            "Practical AI integration, from chatbots to smart data tools.",
        icon: Sparkles,
        className: "lg:col-span-5",
        accent: "from-violet-500/20 to-gold/5",
        iconClass:
            "absolute -bottom-[10%] -right-[6%] size-[min(65%,13rem)] max-md:size-[min(58vw,11rem)]",
    },
    {
        id: "04",
        title: "Web and Landing Pages",
        description:
            "Clean, fast, and built to convert. Your website should work hard.",
        icon: LayoutTemplate,
        className: "lg:col-span-7",
        accent: "from-sky-500/20 to-gold/5",
        iconClass:
            "absolute -bottom-[8%] -right-[5%] size-[min(52%,14rem)] max-md:size-[min(50vw,12rem)]",
    },
] as const;

export const stackTeasers = [
    { id: "01", label: "Custom apps" },
    { id: "02", label: "Automation" },
    { id: "03", label: "AI tools" },
    { id: "04", label: "Landing pages" },
] as const;


export function ServicesSection() {
    const rootRef = useRef<HTMLElement>(null);
    const inView = useInView(rootRef, { once: true, margin: "-12% 0px" });

    return (
        <section
            ref={rootRef}
            id="services"
            className="scroll-mt-24 sm:scroll-mt-28"
            aria-labelledby="services-heading"
        >
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-8 lg:gap-y-6">
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

                <div className="relative lg:col-span-5">
                    <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-950/60 p-1 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]">
                        <BorderBeam
                            size={60}
                            duration={14}
                            delay={2}
                            reverse
                            colorFrom="#6b21ef"
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
            </div>

            <motion.div
                className="mt-12 grid auto-rows-fr grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12"
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                variants={{
                    hidden: {},
                    show: {
                        transition: { staggerChildren: 0.09, delayChildren: 0.15 },
                    },
                }}
            >
                {services.map((item) => (
                    <ServiceTitle key={item.id} item={item} />
                ))}
            </motion.div>
        </section>
    );
}
