export type TierId = "simple" | "standard" | "complex";

export interface PricingTier {
  id: TierId;
  label: string;
  summary: string;
  timeline: string;
  php: number;
  usd: number;
}

export interface PricingCategory {
  id: string;
  title: string;
  tagline: string;
  icon: "globe" | "smartphone" | "workflow" | "sparkles";
  gradientFrom: string;
  gradientTo: string;
  beamFrom: string;
  beamTo: string;
  tiers: Record<TierId, PricingTier>;
}

const tier = (
  id: TierId,
  label: string,
  summary: string,
  timeline: string,
  php: number,
  usd: number
): PricingTier => ({ id, label, summary, timeline, php, usd });

export const PRICING_CATEGORIES: PricingCategory[] = [
  {
    id: "web",
    title: "Web & landing pages",
    tagline: "Sites that load fast, read clearly, and convert.",
    icon: "globe",
    gradientFrom: "#c49a00",
    gradientTo: "#f5e6a8",
    beamFrom: "#c49a00",
    beamTo: "#f59e0b",
    tiers: {
      simple: tier(
        "simple",
        "Simple",
        "1–3 pages, standard layout, contact form, mobile-ready.",
        "3–5 days",
        8000,
        150
      ),
      standard: tier(
        "standard",
        "Standard",
        "Up to 6 pages, custom design, basic SEO, content management.",
        "1–2 weeks",
        18000,
        320
      ),
      complex: tier(
        "complex",
        "Complex",
        "Full website, e-commerce or booking, animations, custom features.",
        "3–4 weeks",
        35000,
        620
      ),
    },
  },
  {
    id: "app",
    title: "Custom app development",
    tagline: "Products built around your workflow—not templates.",
    icon: "smartphone",
    gradientFrom: "#38bdf8",
    gradientTo: "#818cf8",
    beamFrom: "#38bdf8",
    beamTo: "#6366f1",
    tiers: {
      simple: tier(
        "simple",
        "Simple",
        "Single feature, basic UI, one platform, no user accounts.",
        "1–2 weeks",
        25000,
        450
      ),
      standard: tier(
        "standard",
        "Standard",
        "Multiple features, user login, database, admin panel.",
        "3–5 weeks",
        60000,
        1100
      ),
      complex: tier(
        "complex",
        "Complex",
        "Full system, API integrations, web & mobile, scalable architecture.",
        "6–12 weeks",
        120000,
        2100
      ),
    },
  },
  {
    id: "automation",
    title: "Automation & workflows",
    tagline: "Less copy-paste, fewer errors, more time back.",
    icon: "workflow",
    gradientFrom: "#a78bfa",
    gradientTo: "#e879f9",
    beamFrom: "#a78bfa",
    beamTo: "#d946ef",
    tiers: {
      simple: tier(
        "simple",
        "Simple",
        "Single-task automation—e.g. form → spreadsheet, auto email reply.",
        "1–3 days",
        5000,
        90
      ),
      standard: tier(
        "standard",
        "Standard",
        "Multi-step flows, conditional logic, connected tools.",
        "1–2 weeks",
        15000,
        270
      ),
      complex: tier(
        "complex",
        "Complex",
        "End-to-end automation across multiple platforms and teams.",
        "2–4 weeks",
        40000,
        700
      ),
    },
  },
  {
    id: "ai",
    title: "AI-powered solutions",
    tagline: "Practical intelligence—not hype bolted on at the end.",
    icon: "sparkles",
    gradientFrom: "#f472b6",
    gradientTo: "#fb923c",
    beamFrom: "#f472b6",
    beamTo: "#f97316",
    tiers: {
      simple: tier(
        "simple",
        "Simple",
        "Basic chatbot or AI feature added to an existing site or app.",
        "3–7 days",
        12000,
        210
      ),
      standard: tier(
        "standard",
        "Standard",
        "Custom AI tool, smart recommendations, data processing.",
        "2–4 weeks",
        45000,
        800
      ),
      complex: tier(
        "complex",
        "Complex",
        "Full AI-powered product: custom models, pipelines, dashboard.",
        "6–10 weeks",
        100000,
        1800
      ),
    },
  },
];

export const TIER_ORDER: TierId[] = ["simple", "standard", "complex"];
