import type { Metadata } from "next"
import ScrollReveal from "@/components/ScrollReveal"
import NodeGraph from "@/components/NodeGraph"

export const metadata: Metadata = {
  title: "The Map",
  description:
    "An interactive concept map of the Technospermia theory — how panspermia, psychedelics, consciousness, advanced civilizations, and fungi networks connect.",
}

const LOGIC_CHAIN = [
  {
    step: "01",
    title: "The Universe Is Old and Vast",
    body: "13.8 billion years. Hundreds of billions of galaxies. The statistical probability of advanced civilizations having existed before us approaches certainty.",
  },
  {
    step: "02",
    title: "Advanced Civilizations Would Want to Spread Good",
    body: "If good and evil are roughly balanced in the universe, constructive intelligences would seek to tip the scale — even by 1%. The motivation exists.",
  },
  {
    step: "03",
    title: "Biology Is the Most Efficient Transmission Medium",
    body: "Radio signals decay. Physical travel is slow. But biology — spores, fungi, organisms — self-replicates, self-sustains, and persists for billions of years without maintenance.",
  },
  {
    step: "04",
    title: "Panspermia Provides the Delivery Mechanism",
    body: "Organic compounds and potentially organisms travel via asteroids and comets. This is confirmed science. It provides a plausible vector for deliberate biological seeding.",
  },
  {
    step: "05",
    title: "Certain Compounds Are Suspiciously Precise",
    body: "Psilocybin, DMT, mescaline — these bind mammalian serotonin receptors with extraordinary specificity across species. Evolution doesn't produce this kind of molecular precision without selection pressure. Or without a designer.",
  },
  {
    step: "06",
    title: "The Effects Are Consistently Consciousness-Expanding",
    body: "Perspective shift. Ego dissolution. Unity. Compassion. These are the outputs. Across cultures, species, and delivery mechanisms. The software runs the same on every human brain it reaches.",
  },
  {
    step: "07",
    title: "Therefore: Psychospermia",
    body: "Psychedelic compounds, fungi networks, and consciousness-altering plants are not naturally evolved. They are engineered biological technologies, seeded across worlds, designed to alter consciousness in a direction that benefits the universe.",
  },
]

export default function MapPage() {
  return (
    <div className="pt-24 pb-40 px-6 md:px-12 max-w-5xl mx-auto">

      {/* Hero */}
      <div className="text-center mb-20">
        <ScrollReveal>
          <h1
            className="font-grotesk font-bold tracking-[0.1em] uppercase"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)", color: "#F0EEE8" }}
          >
            The Map
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-muted text-base md:text-lg mt-4">
            How the pieces connect. Tap or click any node to explore.
          </p>
        </ScrollReveal>
      </div>

      {/* Interactive graph */}
      <ScrollReveal>
        <NodeGraph />
      </ScrollReveal>

      {/* Logic chain */}
      <div className="mt-28">
        <ScrollReveal>
          <h2 className="font-grotesk text-2xl md:text-3xl tracking-wider uppercase text-cream text-center mb-4">
            The Logic Chain
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-muted text-center text-sm mb-16 max-w-lg mx-auto">
            Step by step. Each link in the argument.
          </p>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto space-y-4 relative">
          {/* Vertical connector line */}
          <div
            className="absolute left-8 top-10 bottom-10 w-px hidden md:block"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(123,94,167,0.25) 10%, rgba(123,94,167,0.25) 90%, transparent)",
            }}
          />

          {LOGIC_CHAIN.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="glass p-6 md:ml-16 relative">
                {/* Step number badge */}
                <div
                  className="md:absolute md:-left-8 md:top-6 font-mono text-xs rounded-full w-7 h-7 flex items-center justify-center mb-3 md:mb-0 shrink-0"
                  style={{
                    background: "rgba(123,94,167,0.15)",
                    border: "1px solid rgba(123,94,167,0.3)",
                    color: "#7B5EA7",
                  }}
                >
                  {item.step}
                </div>
                <h3 className="font-grotesk text-base md:text-lg tracking-wide text-cream mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{item.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
