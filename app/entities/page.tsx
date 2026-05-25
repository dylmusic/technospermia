"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import EntityCard, { Entity } from "@/components/EntityCard"
import ScrollReveal from "@/components/ScrollReveal"

const ENTITIES: Entity[] = [
  {
    name: "Psilocybin Mushrooms",
    classification: "PSYCHO-TECH",
    category: "tech",
    accent: "#7B5EA7",
    description:
      "Ancient, widespread, and neurologically precise. Psilocybin converts to psilocin in the body and binds 5-HT2A receptors with extraordinary accuracy. Found on every continent, used in ritual contexts for at least 10,000 years, yet their mechanism of action goes far beyond what random evolution would produce.",
    role: "Primary consciousness-alteration vector — the flagship delivery system.",
  },
  {
    name: "DMT",
    classification: "PSYCHO-TECH",
    category: "tech",
    accent: "#7B5EA7",
    description:
      "Dimethyltryptamine is endogenous to mammalian brains — your body produces it. Found in dozens of plant species across every continent. Produces the most intense altered states known, often involving apparent contact with non-human intelligences. The fact that your brain synthesizes this compound has no satisfying evolutionary explanation.",
    role: "Endogenous consciousness interface — already inside you.",
  },
  {
    name: "LSD",
    classification: "SYNTHETIC REDISCOVERY?",
    category: "tech",
    accent: "#1ECFB0",
    description:
      "Synthesized 'accidentally' by Albert Hofmann in 1943 from ergot fungus compounds. Produces profound consciousness shifts at microgram doses — a precision that implies engineered design. Suppressed globally in 1971. Now re-emerging as one of the most promising therapeutic tools in neuroscience.",
    role: "Possible synthetic replication — or rediscovery — of existing biological technology.",
  },
  {
    name: "Cannabis",
    classification: "WIDE-SPECTRUM TECH",
    category: "tech",
    accent: "#1ECFB0",
    description:
      "The human body maintains a dedicated endocannabinoid system with CB1 and CB2 receptors distributed throughout the brain and body, tuned specifically for cannabis compounds. Evolutionary biology does not build elaborate receptor networks for accidental environmental chemicals.",
    role: "Low-frequency consciousness tuning with broad population reach.",
  },
  {
    name: "Mycorrhizal Networks",
    classification: "DISTRIBUTION MEDIUM",
    category: "medium",
    accent: "#1ECFB0",
    description:
      "Underground fungal threads connect up to 90% of land plant species, exchanging nutrients, water, and chemical signals across entire ecosystems. The Wood Wide Web predates the internet by hundreds of millions of years. Fungi are genetically closer to animals than to plants.",
    role: "Planetary delivery infrastructure for biological technologies.",
  },
  {
    name: "Tardigrades",
    classification: "CARRIER ORGANISM",
    category: "medium",
    accent: "#8A8A9A",
    description:
      "Microscopic animals surviving vacuum, radiation extremes, and dehydration indefinitely. Found in every environment on Earth. Their near-indestructibility makes them plausible vessels for transporting biological material across interstellar distances and through atmospheric entry.",
    role: "Potential interstellar transport mechanism for seeded organisms.",
  },
  {
    name: "Cancer",
    classification: "DARK TECH (HOSTILE)",
    category: "hostile",
    accent: "#C0392B",
    description:
      "Cancer cells hijack cellular replication machinery with disturbing efficiency, disable immune surveillance, and spread through biological systems in ways that mirror the design logic of beneficial technologies. \"Whatever cancer is, the bad guys probably made that shit.\" The counter-seeding hypothesis.",
    role: "Hostile biological technology — the dark side's counterpart to consciousness-expanding tech.",
  },
  {
    name: "The Overview Effect",
    classification: "CONSCIOUSNESS PATCH",
    category: "tech",
    accent: "#E8C872",
    description:
      "Astronauts consistently describe a profound shift upon seeing Earth from orbit: ego dissolution, unity with the universe, overwhelming compassion. The structure of this experience is statistically identical to psilocybin-induced mystical states. Multiple delivery vectors, identical software.",
    role: "Perspective-forcing mechanism triggered by altitude — a consciousness upgrade trigger.",
  },
  {
    name: "Advanced Civilizations",
    classification: "ORIGIN UNKNOWN",
    category: "unknown",
    accent: "#8A8A9A",
    description:
      "Given the universe's 13.8 billion year age and billions of star systems, civilizations far more advanced than ours are statistically near-certain. The Fermi Paradox asks why there's silence. One answer: they operate biologically, not electromagnetically. Seeds, not signals.",
    role: "The hypothetical designers and distributors of consciousness technology.",
  },
]

type Filter = "all" | "tech" | "medium" | "hostile" | "unknown"

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "ALL" },
  { key: "tech", label: "TECH" },
  { key: "medium", label: "MEDIUM" },
  { key: "hostile", label: "HOSTILE" },
  { key: "unknown", label: "UNKNOWN" },
]

export default function EntitiesPage() {
  const [filter, setFilter] = useState<Filter>("all")

  const visible = filter === "all" ? ENTITIES : ENTITIES.filter((e) => e.category === filter)

  return (
    <div className="pt-24 pb-40 px-6 md:px-12 max-w-5xl mx-auto">

      {/* Hero */}
      <div className="text-center mb-16">
        <ScrollReveal>
          <h1
            className="font-grotesk font-bold tracking-[0.1em] uppercase"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)", color: "#F0EEE8" }}
          >
            The Entities
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-muted text-base md:text-lg mt-4">
            The players in the seeding. A field guide.
          </p>
        </ScrollReveal>
      </div>

      {/* Filter bar */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className="font-grotesk text-xs tracking-widest uppercase px-4 py-2.5 rounded-full transition-all duration-200 min-h-[44px]"
            style={{
              background: filter === key ? "rgba(123,94,167,0.2)" : "rgba(255,255,255,0.04)",
              border: filter === key ? "1px solid rgba(123,94,167,0.5)" : "1px solid rgba(255,255,255,0.08)",
              color: filter === key ? "#D0C0E8" : "#8A8A9A",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Entity grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((entity) => (
            <motion.div
              key={entity.name}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3 }}
            >
              <EntityCard entity={entity} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
