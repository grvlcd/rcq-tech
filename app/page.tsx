import { AboutSection } from "@/components/about-section";
import { HeroSection } from "@/components/hero-section";
import { PricingSection } from "@/components/pricing";
import { ServicesSection } from "@/components/services";

export default function Home() {
  return (
    <div className="relative min-h-svh">
      <HeroSection />
      <div className="mx-auto max-w-6xl space-y-32 px-4 pb-32 sm:px-6 lg:px-8">
        <ServicesSection />
        <AboutSection />
        <PricingSection />
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
