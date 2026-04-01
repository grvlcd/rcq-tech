import { MagicCard } from "@/components/ui/magic-card"

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <MagicCard className="rounded-2xl">
          <div className="rounded-2xl p-8">
            <p className="text-sm text-muted-foreground">About</p>
            <h2 className="mt-2 text-3xl font-semibold">A small team with a big commitment.</h2>
            <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">
              We are RCQ Tech, a two-person development team built on three values: Reliability, Consistency, and Quality. We do not outsource. We do not cut corners. Every project we take on gets our full attention, from the first conversation to the final delivery.
            </p>
          </div>
        </MagicCard>
        <MagicCard className="rounded-2xl">
          <div className="rounded-2xl p-8">
            <p className="text-sm text-muted-foreground">Tagline</p>
            <h3 className="mt-3 text-2xl font-semibold">Built right. Every time.</h3>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              You can count on us to show up, deliver consistently, and build products that meet a high standard every single time.
            </p>
          </div>
        </MagicCard>
      </div>
    </section>
  )
}
