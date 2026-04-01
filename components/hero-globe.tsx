"use client";

import dynamic from "next/dynamic";

export const HeroGlobe = dynamic(
  () => import("@/components/ui/globe").then((m) => m.Globe),
  { ssr: false },
);
