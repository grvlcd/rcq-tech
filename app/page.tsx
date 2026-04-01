import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services";

export default function Home() {
  return (
    <div className="relative min-h-svh">
      <HeroSection />

      <div className="mx-auto max-w-6xl space-y-32 px-4 pb-32 sm:px-6 lg:px-8">
        <ServicesSection />
        <section id="about" className="scroll-mt-24 sm:scroll-mt-28">
          <h2 className="font-[family-name:var(--font-sans)] text-2xl font-semibold text-white">
            About
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-500">
            RCQ Tech focuses on durable engineering: clear interfaces, honest
            timelines, and systems you can evolve.
          </p>
        </section>
        <section id="pricing" className="scroll-mt-24 sm:scroll-mt-28">
          <h2 className="font-[family-name:var(--font-sans)] text-2xl font-semibold text-white">
            Pricing
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-500">
            Engagement models tailored to scope—from fixed discovery sprints to
            ongoing product partnerships.
          </p>
        </section>
        <section id="contact" className="scroll-mt-24 sm:scroll-mt-28">
          <h2 className="font-[family-name:var(--font-sans)] text-2xl font-semibold text-white">
            Contact
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-500">
            Tell us what you are building; we will respond with a concrete next
            step, not a generic pitch deck.
          </p>
        </section>
      </div>
    </div>
  );
}
