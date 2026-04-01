import { pricingGroups } from "@/components/sections/landing/data"
import { MagicCard } from "@/components/ui/magic-card"
import { ShineBorder } from "@/components/ui/shine-border"

export function PricingSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="mb-8">
        <p className="text-sm text-muted-foreground">Pricing by Complexity</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">Clear starting rates, no surprises.</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          All prices are starting rates. Final price depends on your specific requirements.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {pricingGroups.map((group) => (
          <MagicCard key={group.category} className="rounded-2xl">
            <ShineBorder
              borderWidth={1.5}
              duration={12}
              shineColor={["#a78bfa", "#22d3ee", "#f472b6"]}
              className="rounded-2xl"
            />
            <article className="rounded-2xl p-6">
              <h3 className="text-lg font-semibold">{group.category}</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item} className="rounded-lg border border-border/70 bg-card/50 px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </MagicCard>
        ))}
      </div>
    </section>
  )
}
