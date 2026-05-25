"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ReactNode, useEffect, useState } from "react"

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
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    setMobile(window.innerWidth < 768 || navigator.maxTouchPoints > 0)
  }, [])

  // Mobile + reduced-motion: just fade, no transforms, fast
  const simple = reduce || mobile

  const initial = simple
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
      transition={{
        duration: simple ? 0.25 : 0.75,
        delay: simple ? Math.min(delay * 0.4, 0.08) : delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  )
}
