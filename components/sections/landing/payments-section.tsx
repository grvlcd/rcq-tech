"use client"

import { useRef } from "react"
import { Rocket } from "lucide-react"

import { milestones } from "@/components/sections/landing/data"
import { AnimatedBeam } from "@/components/ui/animated-beam"
import { MagicCard } from "@/components/ui/magic-card"

export function PaymentsSection() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const stepA = useRef<HTMLDivElement>(null)
  const stepB = useRef<HTMLDivElement>(null)
  const stepC = useRef<HTMLDivElement>(null)
  const stepD = useRef<HTMLDivElement>(null)

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="mb-8 flex items-center gap-2">
        <Rocket className="size-5 text-muted-foreground" />
        <h2 className="text-3xl font-semibold">How we handle payments</h2>
      </div>
      <p className="mb-10 max-w-3xl text-sm leading-7 text-muted-foreground">
        Small projects use a simple 50/50 setup. For large projects, we work in milestones so you always know where your money is going.
      </p>
      <div ref={timelineRef} className="relative grid gap-5 md:grid-cols-2">
        <div ref={stepA}>
          <MagicCard className="rounded-xl">
            <div className="rounded-xl p-5">{milestones[0]}</div>
          </MagicCard>
        </div>
        <div ref={stepB}>
          <MagicCard className="rounded-xl">
            <div className="rounded-xl p-5">{milestones[1]}</div>
          </MagicCard>
        </div>
        <div ref={stepC}>
          <MagicCard className="rounded-xl">
            <div className="rounded-xl p-5">{milestones[2]}</div>
          </MagicCard>
        </div>
        <div ref={stepD}>
          <MagicCard className="rounded-xl">
            <div className="rounded-xl p-5">{milestones[3]}</div>
          </MagicCard>
        </div>

        <AnimatedBeam containerRef={timelineRef} fromRef={stepA} toRef={stepB} curvature={40} />
        <AnimatedBeam containerRef={timelineRef} fromRef={stepB} toRef={stepC} curvature={-65} />
        <AnimatedBeam containerRef={timelineRef} fromRef={stepC} toRef={stepD} curvature={40} />
      </div>
    </section>
  )
}
