export const CONTACT_SERVICE_OPTIONS = [
  { id: "web", label: "Web app" },
  { id: "mobile", label: "Mobile app" },
  { id: "automation", label: "Automation" },
  { id: "ai", label: "AI - Agents & Chatbots" },
  { id: "design", label: "Design + build" },
  { id: "other", label: "Not sure yet" },
] as const;

export const CONTACT_BUDGET_OPTIONS = [
  { id: "under-5k", label: "Under $5k" },
  { id: "5k-15k", label: "$5k – $15k" },
  { id: "15k-50k", label: "$15k – $50k" },
  { id: "50k-plus", label: "$50k+" },
  { id: "discuss", label: "Let's discuss" },
] as const;

export type ContactServiceId = (typeof CONTACT_SERVICE_OPTIONS)[number]["id"];
export type ContactBudgetId = (typeof CONTACT_BUDGET_OPTIONS)[number]["id"];
