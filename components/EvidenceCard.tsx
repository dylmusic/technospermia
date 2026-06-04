"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { trackEvent } from "@/lib/analytics"

export interface EvidenceItem {
  title: string
  summary: string
  significance: string
  significanceColor: string
  theoryTake: string
}

export default function EvidenceCard({ item }: { item: EvidenceItem }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="glass cursor-pointer select-none"
      onClick={() => {
        const next = !expanded
        setExpanded(next)
        if (next) trackEvent("evidence_card_expanded", { card_title: item.title })
      }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setExpanded((v) => !v)}
      aria-expanded={expanded}
    >
      <div className="p-6">
        {/* Significance tag */}
        <span
          className="font-grotesk text-xs tracking-widest uppercase px-2.5 py-1 rounded-full"
          style={{
            color: item.significanceColor,
            background: `${item.significanceColor}18`,
            border: `1px solid ${item.significanceColor}30`,
          }}
        >
          {item.significance}
        </span>

        <h3 className="font-grotesk text-lg md:text-xl tracking-wide text-cream mt-4 mb-3">
          {item.title}
        </h3>

        <p className="text-sm md:text-base text-muted leading-relaxed">{item.summary}</p>

        {/* Expand hint */}
        <p className="font-mono text-xs text-muted/50 mt-4">
          {expanded ? "▲ collapse" : "▼ what the theory says"}
        </p>
      </div>

      {/* Expanded theory interpretation */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              className="mx-6 mb-6 p-4 rounded-xl"
              style={{
                background: "rgba(123, 94, 167, 0.08)",
                borderLeft: "2px solid rgba(123, 94, 167, 0.5)",
              }}
            >
              <p className="font-mono text-xs text-muted/60 tracking-widest uppercase mb-2">
                The theory says:
              </p>
              <p className="text-sm text-cream leading-relaxed">{item.theoryTake}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
