"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";

import { MagicCard } from "@/components/ui/magic-card";
import { cn } from "@/lib/utils";

import type { Project } from "./data";

const spring = { stiffness: 280, damping: 22, mass: 0.4 };

export function ProjectShowcaseCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const disableTilt = reduceMotion === true;
  const wrapRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, spring);
  const sy = useSpring(my, spring);
  const rotateX = useTransform(sy, [0, 1], [7, -7]);
  const rotateY = useTransform(sx, [0, 1], [-9, 9]);

  const shineX = useTransform(sx, [0, 1], [10, 90]);
  const shineY = useTransform(sy, [0, 1], [10, 90]);
  const shine = useMotionTemplate`radial-gradient(420px circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.06), transparent 55%)`;

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }

  function onLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex h-full flex-col"
    >
      <div
        className={cn(
          "relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-[22px]",
          "border border-white/[0.06] bg-zinc-950/75 shadow-lg shadow-black/40"
        )}
      >
        <div className="relative flex h-full flex-col gap-5 p-1 sm:p-2">
          <div className="flex flex-wrap items-start justify-between gap-3 px-3 pt-3 sm:px-4 sm:pt-4">
            <div>
              <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500">
                {project.subtitle}
              </p>
              <h3 className="mt-1 font-[family-name:var(--font-sans)] text-2xl font-semibold tracking-tight text-white sm:text-[1.65rem]">
                {project.title}
              </h3>
            </div>
            <Link
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-gold/30 hover:bg-gold/[0.06] hover:text-gold"
            >
              Visit
              <ArrowUpRight className="size-3.5 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
            </Link>
          </div>

          <p className="px-3 text-sm leading-relaxed text-zinc-400 sm:px-4">
            {project.description}
          </p>

          <ul className="flex flex-wrap gap-2 px-3 sm:px-4">
            {project.tags.map((t) => (
              <li
                key={t}
                className="rounded-md border border-white/[0.06] bg-black/30 px-2 py-0.5 font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-wider text-zinc-500"
              >
                {t}
              </li>
            ))}
          </ul>

          <div className="relative mt-auto px-3 pb-3 sm:px-4 sm:pb-4">
            <MagicCard
              mode="gradient"
              className="rounded-2xl border border-white/[0.06] bg-zinc-950/90"
              gradientSize={280}
              gradientFrom="rgba(196, 154, 0, 0.22)"
              gradientTo="rgba(45, 42, 38, 0.45)"
              gradientColor="rgba(24, 22, 21, 0.88)"
              gradientOpacity={0.38}
            >
              <div className="relative overflow-hidden rounded-[inherit] p-2 sm:p-3">
                <div
                  ref={wrapRef}
                  onPointerMove={onMove}
                  onPointerLeave={onLeave}
                  className="relative aspect-[16/10] w-full [perspective:1200px]"
                >
                  <motion.div
                    className="relative size-full overflow-hidden rounded-xl border border-white/[0.06] bg-black/50 shadow-inner"
                    style={{
                      rotateX: disableTilt ? 0 : rotateX,
                      rotateY: disableTilt ? 0 : rotateY,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <motion.div
                      className="pointer-events-none absolute inset-0 z-10"
                      style={{
                        background: shine,
                        opacity: disableTilt ? 0 : 1,
                      }}
                    />
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top"
                      priority={index === 0}
                    />
                  </motion.div>
                </div>
                {!disableTilt ? (
                  <p className="mt-2 text-center font-[family-name:var(--font-geist-mono)] text-[10px] text-zinc-600">
                    Move the pointer to tilt the preview
                  </p>
                ) : null}
              </div>
            </MagicCard>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
