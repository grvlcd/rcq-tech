import { services } from "@/components/sections/landing/data"
import { MagicCard } from "@/components/ui/magic-card"

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="mb-10">
        <p className="text-sm font-medium text-muted-foreground">Services</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Apps, automation, and everything in between.
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service, idx) => (
          <MagicCard key={service.title} className="rounded-2xl" mode="gradient">
            <article className="rounded-2xl p-7">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.body}</p>
            </article>
          </MagicCard>
        ))}
      </div>
    </section>
  )
}
