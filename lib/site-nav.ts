export const SITE_NAV_LINKS = [
  { sectionId: "home", href: "/", label: "Home" },
  { sectionId: "services", href: "/#services", label: "Services" },
  { sectionId: "about", href: "/#about", label: "About" },
  { sectionId: "pricing", href: "/#pricing", label: "Pricing" },
  { sectionId: "portfolio", href: "/#portfolio", label: "Portfolio" },
  { sectionId: "contact", href: "/#contact", label: "Contact" },
] as const;

export type SiteNavSectionId = (typeof SITE_NAV_LINKS)[number]["sectionId"];

export const SITE_NAV_SECTION_ORDER: readonly SiteNavSectionId[] = [
  "home",
  "services",
  "about",
  "pricing",
  "portfolio",
  "contact",
];
