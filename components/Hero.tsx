"use client"

import { useEffect, type ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { trackEvent } from "@/lib/analytics"

interface HeroProps {
  articleRow?: ReactNode
}

export default function Hero({ articleRow }: HeroProps) {
  const reduce = useReducedMotion()

  useEffect(() => {
    const device = window.innerWidth < 768 || navigator.maxTouchPoints > 0 ? "mobile" : "desktop"
    trackEvent("hero_loaded", { device })
  }, [])

  const fade = (delay: number) =>
    reduce
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.4, delay } }
      : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, delay, ease: "easeOut" as const } }

  return (
    <section
      className="relative flex flex-col items-center text-center px-6"
      style={{ minHeight: "100svh" }}
    >
      {/* Violet glow behind title */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "600px",
          height: "400px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -55%)",
          background: "radial-gradient(ellipse, rgba(123, 94, 167, 0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Title area — flex-1 so it takes remaining space and centers its content */}
      <div className="flex-1 flex items-center justify-center relative z-10 w-full">
        <div className="space-y-4">
          <motion.h1
            {...fade(0.3)}
            className="font-grotesk font-bold leading-none tracking-[0.08em]"
            style={{ fontSize: "clamp(2.5rem, 10vw, 7rem)", color: "#F0EEE8" }}
          >
            TECHNOSPERMIA
          </motion.h1>

          <motion.p
            {...fade(0.7)}
            className="font-grotesk font-light tracking-[0.12em]"
            style={{ fontSize: "clamp(1.2rem, 4vw, 2.8rem)", color: "#7B5EA7" }}
          >
            &amp; PSYCHOSPERMIA
          </motion.p>

          <motion.p
            {...fade(1.1)}
            className="font-sans text-sm md:text-base tracking-widest text-muted mt-6 max-w-md mx-auto"
          >
            a theory based on technology, philosophy, spirituality, and astrobiology
          </motion.p>
        </div>
      </div>

      {/* Article row — natural flow at bottom, above scroll indicator */}
      {articleRow && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="relative z-10 w-full max-w-4xl mx-auto pb-32"
        >
          {articleRow}
        </motion.div>
      )}

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.span
          className="font-grotesk text-xs tracking-widest uppercase text-muted"
          animate={{ opacity: reduce ? 1 : [0.4, 1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          scroll to explore
        </motion.span>
        <motion.div
          className="w-px bg-gradient-to-b from-muted to-transparent"
          style={{ height: "40px" }}
          animate={reduce ? {} : { scaleY: [1, 0.6, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}
