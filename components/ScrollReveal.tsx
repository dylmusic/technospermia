"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "left" | "right" | "none"
  amount?: number | "some" | "all"
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  amount = 0.2,
}: Props) {
  const reduce = useReducedMotion()

  const initial = reduce
    ? { opacity: 0 }
    : {
        opacity: 0,
        y: direction === "up" ? 28 : 0,
        x: direction === "left" ? -28 : direction === "right" ? 28 : 0,
      }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
