"use client"

import type { ReactNode } from "react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

interface FadeInSectionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function FadeInSection({ children, className, delay = 0 }: FadeInSectionProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px 0px" }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
