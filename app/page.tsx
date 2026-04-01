import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact";
import { HeroSection } from "@/components/hero-section";
import { PricingSection } from "@/components/pricing";
import { ProjectsSection } from "@/components/projects";
import { ServicesSection } from "@/components/services";

export default function Home() {
  return (
    <div className="relative min-h-svh">
      <HeroSection />
      <div className="mx-auto max-w-6xl space-y-32 px-4 pb-32 sm:px-6 lg:px-8">
        <ServicesSection />
        <AboutSection />
        <PricingSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
}
