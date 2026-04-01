export const aboutValues = [
  {
    letter: "R",
    title: "Reliability",
    body: "We show up and deliver, every time.",
  },
  {
    letter: "C",
    title: "Consistency",
    body: "Same quality across every project.",
  },
  {
    letter: "Q",
    title: "Quality",
    body: "High standards, no exceptions.",
  },
] as const;

export type AboutValue = (typeof aboutValues)[number];

export const aboutStats = [
  { value: "24h", label: "Response guarantee" },
  { value: "0", label: "Middlemen" },
  { value: "Any", label: "Timezone" },
  { value: "100%", label: "Direct communication" },
] as const;

export type AboutStat = (typeof aboutStats)[number];

export const aboutNarrative =
  "We are RCQ Tech, a two-person development team. We do not outsource. We do not cut corners. Every project gets our full attention, from the first conversation to the final delivery. We work with clients worldwide, across any timezone.";

export const aboutPrincipleTags = [
  "No outsourcing",
  "No corners cut",
  "Global timezone",
] as const;
