import dynamic from "next/dynamic";
import { HeroSection } from "@/components/hero-section";

const lazySectionLoading = () => (
  <div className="min-h-[28rem] w-full" aria-hidden />
);

const ServicesSection = dynamic(
  () => import("@/components/services").then((m) => m.ServicesSection),
  { loading: lazySectionLoading },
);

const AboutSection = dynamic(
  () => import("@/components/about-section").then((m) => m.AboutSection),
  { loading: lazySectionLoading },
);

const PricingSection = dynamic(
  () => import("@/components/pricing").then((m) => m.PricingSection),
  { loading: lazySectionLoading },
);

const ProjectsSection = dynamic(
  () => import("@/components/projects").then((m) => m.ProjectsSection),
  { loading: lazySectionLoading },
);

const ContactSection = dynamic(
  () => import("@/components/contact").then((m) => m.ContactSection),
  { loading: lazySectionLoading },
);

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
