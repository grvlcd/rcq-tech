import { AboutSection } from "@/components/sections/landing/about-section"
import { ContactSection } from "@/components/sections/landing/contact-section"
import { FadeInSection } from "@/components/sections/landing/fade-in-section"
import { HeroSection } from "@/components/sections/landing/hero-section"
import { PaymentsSection } from "@/components/sections/landing/payments-section"
import { PortfolioStrip } from "@/components/sections/landing/portfolio-strip"
import { PricingSection } from "@/components/sections/landing/pricing-section"
import { ServicesSection } from "@/components/sections/landing/services-section"
import { SiteFooter } from "@/components/sections/landing/site-footer"
import { SiteHeader } from "@/components/sections/landing/site-header"
import { ScrollProgress } from "@/components/ui/scroll-progress"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <ScrollProgress className="h-1" />
      <SiteHeader />

      <main className="overflow-hidden">
        <FadeInSection>
          <HeroSection />
        </FadeInSection>
        <FadeInSection delay={0.05}>
          <PortfolioStrip />
        </FadeInSection>
        <FadeInSection delay={0.05}>
          <ServicesSection />
        </FadeInSection>
        <FadeInSection delay={0.05}>
          <AboutSection />
        </FadeInSection>
        <FadeInSection delay={0.05}>
          <PricingSection />
        </FadeInSection>
        <FadeInSection delay={0.05}>
          <PaymentsSection />
        </FadeInSection>
        <FadeInSection delay={0.05}>
          <ContactSection />
        </FadeInSection>
      </main>
      <FadeInSection className="block">
        <SiteFooter />
      </FadeInSection>
    </div>
  )
}
