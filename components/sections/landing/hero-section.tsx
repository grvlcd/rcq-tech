"use client"

import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { LightRays } from "@/components/ui/light-rays"
import { MagicCard } from "@/components/ui/magic-card"

export function HeroSection() {
  return (
    <section id="home" className="relative mx-auto max-w-7xl px-6 pb-24 pt-18 lg:px-10">
      <MagicCard mode="orb" className="rounded-3xl border border-border/40">
        <div className="relative overflow-hidden rounded-3xl">
          <LightRays
            count={9}
            speed={12}
            blur={34}
            length="75vh"
            color="rgba(146, 198, 255, 0.28)"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/45 via-background/70 to-background" />
          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-8 py-26 text-center">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Reliability. Consistency. Quality.
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
              Turn your ideas into working software.
            </h1>
            <p className="mt-6 max-w-3xl text-balance text-base text-muted-foreground sm:text-lg">
              RCQ Tech is a development studio that builds custom apps, automates workflows, and creates websites that get results.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <InteractiveHoverButton onClick={() => (window.location.href = "#contact")}>
                Get a free quote
              </InteractiveHoverButton>
              <Button size="lg" variant="outline" asChild>
                <a href="#portfolio">
                  See our work <ChevronRight />
                </a>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a href="#contact">Let&apos;s talk</a>
              </Button>
            </div>
          </div>
        </div>
      </MagicCard>
    </section>
  )
}
