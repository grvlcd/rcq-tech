"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

import { services } from "./data";
import { ServiceTitle } from "./service-title";
import { ServicesIntro } from "./services-intro";
import { ServicesStackPanel } from "./services-stack-panel";

export function ServicesSection() {
  const rootRef = useRef<HTMLElement>(null);
  const inView = useInView(rootRef, { once: true, margin: "-12% 0px" });

  return (
    <section
      ref={rootRef}
      id="services"
      className="scroll-mt-24 sm:scroll-mt-28"
      aria-labelledby="services-heading"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8 lg:gap-y-6">
        <ServicesIntro inView={inView} />
        <ServicesStackPanel />
      </div>

      <motion.div
        className="mt-12 grid auto-rows-auto sm:auto-rows-fr grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12"
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.09, delayChildren: 0.15 },
          },
        }}
      >
        {services.map((item) => (
          <ServiceTitle key={item.id} item={item} />
        ))}
      </motion.div>
    </section>
  );
}
