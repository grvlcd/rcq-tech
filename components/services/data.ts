import {
  LayoutTemplate,
  Sparkles,
  Smartphone,
  Workflow,
} from "lucide-react";

export const services = [
  {
    id: "01",
    title: "Custom App Development",
    description:
      "Web and mobile apps built from scratch, tailored to your exact needs.",
    icon: Smartphone,
    className: "lg:col-span-7 lg:row-span-2 lg:min-h-[420px]",
    accent: "from-amber-500/25 to-gold/10",
    featured: true,
    iconClass:
      "size-[min(92vw,18rem)] sm:size-[min(85vw,20rem)] lg:size-[min(100%,22rem)] xl:size-[min(100%,26rem)] text-gold/[0.18] stroke-[0.85] group-hover:text-gold/[0.26]",
  },
  {
    id: "02",
    title: "Automation and Workflows",
    description:
      "Automate the repetitive stuff so your team focuses on what matters.",
    icon: Workflow,
    className: "lg:col-span-5",
    accent: "from-emerald-500/20 to-gold/5",
    iconClass:
      "absolute -bottom-[10%] -right-[6%] size-[min(65%,13rem)] max-md:size-[min(58vw,11rem)]",
  },
  {
    id: "03",
    title: "AI-Powered Solutions",
    description:
      "Practical AI integration, from chatbots to smart data tools.",
    icon: Sparkles,
    className: "lg:col-span-5",
    accent: "from-violet-500/20 to-gold/5",
    iconClass:
      "absolute -bottom-[10%] -right-[6%] size-[min(65%,13rem)] max-md:size-[min(58vw,11rem)]",
  },
  {
    id: "04",
    title: "Web and Landing Pages",
    description:
      "Clean, fast, and built to convert. Your website should work hard.",
    icon: LayoutTemplate,
    className: "lg:col-span-7",
    accent: "from-sky-500/20 to-gold/5",
    iconClass:
      "absolute -bottom-[8%] -right-[5%] size-[min(52%,14rem)] max-md:size-[min(50vw,12rem)]",
  },
] as const;

export type ServiceItem = (typeof services)[number];

export const stackTeasers = [
  { id: "01", label: "Custom apps" },
  { id: "02", label: "Automation" },
  { id: "03", label: "AI tools" },
  { id: "04", label: "Landing pages" },
] as const;
