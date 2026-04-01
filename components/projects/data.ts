export const projectMarqueeItems = [
  "Virtual teams",
  "AI front desk",
  "Filipino talent",
  "Omni-channel inbox",
  "Human handoff",
  "24/7 coverage",
  "Taglish & English",
  "Enterprise automation",
] as const;

export const projects = [
  {
    id: "zopop",
    title: "Zopop",
    subtitle: "Virtual hiring",
    description:
      "Connect with reliable Filipino professionals for admin, support, finance, and technical roles — matching and onboarding without traditional agency overhead.",
    href: "https://www.zopop.com/",
    imageSrc: "/assets/zopop.png",
    imageAlt: "Zopop virtual hiring product screenshot",
    tags: ["Hiring", "Operations", "Long-term teams"],
  },
  {
    id: "magphai",
    title: "MaGPHAI",
    subtitle: "AI automation",
    description:
      "Context-aware chat automation tuned for how people message businesses in the Philippines — Filipino, Taglish, and English with seamless escalation to humans.",
    href: "https://www.magphai.tech/",
    imageSrc: "/assets/magphai.png",
    imageAlt: "MaGPHAI AI automation product screenshot",
    tags: ["LLM", "CX", "Omnichannel"],
  },
] as const;

export type Project = (typeof projects)[number];
