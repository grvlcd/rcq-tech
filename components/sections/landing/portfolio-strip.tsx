import { whyChoose } from "@/components/sections/landing/data"
import { Marquee } from "@/components/ui/marquee"

export function PortfolioStrip() {
  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-6 pb-10 lg:px-10">
      <Marquee pauseOnHover className="[--duration:32s]">
        {whyChoose.map((item) => (
          <div
            key={item}
            className="mx-3 rounded-2xl border border-border bg-card px-5 py-3 text-sm text-card-foreground"
          >
            {item}
          </div>
        ))}
      </Marquee>
    </section>
  )
}
