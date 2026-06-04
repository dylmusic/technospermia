"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { trackEvent } from "@/lib/analytics"

interface Node {
  id: string
  label: string
  x: number
  y: number
  radius: number
  color: string
  description: string
}

const NODES: Node[] = [
  {
    id: "center",
    label: "PSYCHOSPERMIA",
    x: 450,
    y: 295,
    radius: 58,
    color: "#7B5EA7",
    description:
      "The central theory: biological compounds — psychedelics, plants, fungi — are engineered technologies seeded across the universe by advanced civilizations to alter consciousness and spread perspective.",
  },
  {
    id: "panspermia",
    label: "Panspermia",
    x: 450,
    y: 90,
    radius: 40,
    color: "#1ECFB0",
    description:
      "The scientific hypothesis that life's building blocks spread through space via asteroids and comets. Now mainstream. The delivery mechanism that makes Psychospermia physically possible.",
  },
  {
    id: "psychedelics",
    label: "Psychedelics",
    x: 688,
    y: 163,
    radius: 42,
    color: "#1ECFB0",
    description:
      "Psilocybin, DMT, LSD, mescaline — compounds that bind serotonin receptors with extraordinary precision. Their molecular specificity and cross-species effects suggest engineering, not accident.",
  },
  {
    id: "consciousness",
    label: "Consciousness",
    x: 792,
    y: 295,
    radius: 40,
    color: "#1ECFB0",
    description:
      "The target. If you wanted to improve a civilization's capacity for cooperation, empathy, and perspective — you would need a technology that modifies consciousness. That's what these compounds do.",
  },
  {
    id: "civilizations",
    label: "Advanced\nCivilizations",
    x: 688,
    y: 427,
    radius: 42,
    color: "#1ECFB0",
    description:
      "Statistically near-certain given the universe's 13.8 billion year age and billions of star systems. The Fermi Paradox's silence doesn't disprove them — it suggests they operate below electromagnetic detection.",
  },
  {
    id: "darktech",
    label: "Dark Tech?",
    x: 450,
    y: 500,
    radius: 38,
    color: "#C0392B",
    description:
      "If constructive forces can seed beneficial technology, destructive forces can seed harmful ones. Cancer, parasitic systems, addictive compounds — possibly engineered counter-weapons from opposing intelligences.",
  },
  {
    id: "fungi",
    label: "Fungi\nNetworks",
    x: 212,
    y: 427,
    radius: 40,
    color: "#1ECFB0",
    description:
      "Mycorrhizal networks connect 90% of land plants and predate them by hundreds of millions of years. Fungi are more genetically related to animals than plants. They are the planetary distribution infrastructure.",
  },
  {
    id: "evolution",
    label: "Evolution",
    x: 108,
    y: 295,
    radius: 38,
    color: "#8A8A9A",
    description:
      "Conventional evolution explains biological diversity but struggles with the precision of psychedelic compound-receptor interactions. Unless that specificity was engineered — in which case evolution was the medium, not the designer.",
  },
  {
    id: "goodevil",
    label: "Good vs.\nEvil Force",
    x: 212,
    y: 163,
    radius: 40,
    color: "#E8C872",
    description:
      "If the universe trends toward balance, constructive and destructive intelligences are roughly equal in number. The theory depends on at least one constructive force motivated to improve universal consciousness — even by 1%.",
  },
]

const EDGES = [
  ["center", "panspermia"],
  ["center", "psychedelics"],
  ["center", "consciousness"],
  ["center", "civilizations"],
  ["center", "darktech"],
  ["center", "fungi"],
  ["center", "evolution"],
  ["center", "goodevil"],
  ["panspermia", "civilizations"],
  ["fungi", "psychedelics"],
  ["goodevil", "darktech"],
  ["evolution", "consciousness"],
]

const CARD_NODES: Array<{ id: string; label: string; color: string; description: string }> = NODES

function getNode(id: string) {
  return NODES.find((n) => n.id === id)!
}

export default function NodeGraph() {
  const [selected, setSelected] = useState<string | null>(null)
  const selectedNode = selected ? NODES.find((n) => n.id === selected) : null

  useEffect(() => {
    trackEvent("map_page_viewed")
  }, [])

  const handleNode = (id: string) => {
    const next = selected === id ? null : id
    setSelected(next)
    if (next) {
      const node = NODES.find((n) => n.id === id)
      if (node) trackEvent("node_clicked", { node_name: node.label.replace("\n", " ") })
    }
  }

  return (
    <div>
      {/* SVG Graph — hidden on very small screens */}
      <div className="hidden sm:block">
        <svg
          viewBox="0 0 900 590"
          className="w-full"
          style={{ maxHeight: "520px" }}
          aria-label="Interactive concept map of Psychospermia theory"
        >
          {/* Edges */}
          {EDGES.map(([a, b], i) => {
            const na = getNode(a)
            const nb = getNode(b)
            const isHighlighted = selected === a || selected === b
            return (
              <line
                key={i}
                x1={na.x}
                y1={na.y}
                x2={nb.x}
                y2={nb.y}
                stroke={isHighlighted ? "rgba(123,94,167,0.5)" : "rgba(255,255,255,0.07)"}
                strokeWidth={isHighlighted ? 1.5 : 1}
                style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
              />
            )
          })}

          {/* Nodes */}
          {NODES.map((node) => {
            const isSelected = selected === node.id
            const isCenter = node.id === "center"
            return (
              <g
                key={node.id}
                onClick={() => handleNode(node.id)}
                style={{ cursor: "pointer" }}
                role="button"
                tabIndex={0}
                aria-label={node.label.replace("\n", " ")}
                onKeyDown={(e) => e.key === "Enter" && handleNode(node.id)}
              >
                {/* Glow ring when selected */}
                {isSelected && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.radius + 10}
                    fill="none"
                    stroke={node.color}
                    strokeWidth="1"
                    opacity="0.35"
                  />
                )}

                {/* Main circle */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.radius}
                  fill={isSelected ? `${node.color}28` : "rgba(5,5,15,0.8)"}
                  stroke={node.color}
                  strokeWidth={isSelected ? 2 : isCenter ? 1.5 : 1}
                  style={{ transition: "fill 0.3s, stroke-width 0.3s" }}
                />

                {/* Pulse animation on center node */}
                {isCenter && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.radius + 4}
                    fill="none"
                    stroke={node.color}
                    strokeWidth="0.5"
                    opacity="0.2"
                  >
                    <animate attributeName="r" values={`${node.radius + 4};${node.radius + 14};${node.radius + 4}`} dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.2;0;0.2" dur="3s" repeatCount="indefinite" />
                  </circle>
                )}

                {/* Label */}
                {node.label.split("\n").map((line, li, arr) => (
                  <text
                    key={li}
                    x={node.x}
                    y={node.y + (li - (arr.length - 1) / 2) * 13 + 1}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={isCenter ? "#F0EEE8" : node.color === "#8A8A9A" ? "#8A8A9A" : "#D0EDE8"}
                    fontSize={isCenter ? "9.5" : "8.5"}
                    fontFamily="var(--font-space-grotesk)"
                    letterSpacing="0.04em"
                    style={{ userSelect: "none", pointerEvents: "none" }}
                  >
                    {line}
                  </text>
                ))}
              </g>
            )
          })}
        </svg>
      </div>

      {/* Info panel — shown when a node is selected */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.35 }}
            className="glass mt-6 p-6 max-w-2xl mx-auto"
            style={{ borderLeft: `2px solid ${selectedNode.color}` }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3
                  className="font-grotesk text-lg tracking-wide mb-2"
                  style={{ color: selectedNode.color }}
                >
                  {selectedNode.label.replace("\n", " ")}
                </h3>
                <p className="text-sm md:text-base text-cream leading-relaxed">
                  {selectedNode.description}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="shrink-0 text-muted hover:text-cream transition-colors text-lg leading-none mt-0.5"
                aria-label="Close"
              >
                ×
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile fallback — card list */}
      <div className="sm:hidden space-y-4">
        {CARD_NODES.map((node) => (
          <button
            key={node.id}
            className="w-full text-left glass p-4"
            onClick={() => handleNode(node.id)}
          >
            <span
              className="font-grotesk text-sm tracking-wide"
              style={{ color: node.color }}
            >
              {node.label.replace("\n", " ")}
            </span>
            <AnimatePresence>
              {selected === node.id && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-xs text-muted mt-2 leading-relaxed"
                  style={{ overflow: "hidden" }}
                >
                  {node.description}
                </motion.p>
              )}
            </AnimatePresence>
          </button>
        ))}
      </div>
    </div>
  )
}
