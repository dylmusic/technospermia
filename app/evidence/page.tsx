import type { Metadata } from "next"
import ScrollReveal from "@/components/ScrollReveal"
import EvidenceCard, { EvidenceItem } from "@/components/EvidenceCard"
import Timeline from "@/components/Timeline"

export const metadata: Metadata = {
  title: "The Evidence",
  description:
    "Psilocybin in space, fungi older than plants, DMT in mammalian brains. The scientific findings that rhyme with the Technospermia theory.",
}

const CARDS: EvidenceItem[] = [
  {
    title: "Organic Compounds in Meteorites",
    summary:
      "In 2023, Japan's Hayabusa2 mission returned samples from the Ryugu asteroid confirming the presence of amino acids, uracil (a nucleobase component of RNA), and dozens of complex organic compounds. Similar findings have been confirmed in the Murchison and Orgueil meteorites. The chemical building blocks of life arrive from space.",
    significance: "CONFIRMED",
    significanceColor: "#1ECFB0",
    theoryTake:
      "If basic organic chemistry distributes through space via rocks, then more complex biologically active molecules — including the precursors to psychedelic compounds — are the logical next step. The universe is already in the seeding business.",
  },
  {
    title: "Panspermia Is Now Mainstream Science",
    summary:
      "The hypothesis that life's ingredients — or life itself — spread through space via asteroids, comets, and cosmic dust is no longer fringe. Tardigrades survive vacuum and radiation. Bacteria survive atmospheric re-entry. Wickramasinghe and Hoyle proposed directed panspermia decades ago. Nobel laureate Francis Crick co-authored the theory in 1973.",
    significance: "ESTABLISHED SCIENCE",
    significanceColor: "#1ECFB0",
    theoryTake:
      "If biology can travel through space at all, designed biology can too. Panspermia validates the delivery mechanism. Psychospermia only asks: what if some of what was seeded was intentional?",
  },
  {
    title: "Psilocybin Binds Receptors With Extraordinary Specificity",
    summary:
      "Psilocybin converts to psilocin in the body and binds 5-HT2A serotonin receptors with extraordinary molecular precision. DMT — which is endogenous to mammalian brains, produced naturally by your body — activates the identical receptor complex. The degree of lock-and-key specificity between these compounds and human neurobiology goes far beyond what random evolutionary chemistry would predict.",
    significance: "CONFIRMED PHARMACOLOGY",
    significanceColor: "#E8C872",
    theoryTake:
      "Engineered compounds have engineered targets. This level of specificity is a signature. Random evolution produces broad-spectrum effects; engineered systems produce precision.",
  },
  {
    title: "Fungi Are Older Than Plants — And Closer to You",
    summary:
      "Fungi diverged from animals roughly 1.5 billion years ago and are genetically more related to you than to plants. The mycorrhizal network — the 'Wood Wide Web' — connects up to 90% of land plant species through underground mycelial threads, transferring nutrients, water, and chemical signals across entire ecosystems. Individual networks span thousands of acres and have operated for hundreds of millions of years.",
    significance: "ESTABLISHED SCIENCE",
    significanceColor: "#1ECFB0",
    theoryTake:
      "Fungi aren't just hosts for psilocybin — they are the distribution infrastructure. The internet of the living world, already in place before animals walked on land. If you were engineering a delivery system for biological technology, you would build exactly this.",
  },
  {
    title: "Astronauts and Psychedelic Users Report Identical Experiences",
    summary:
      "The 'Overview Effect' — the cognitive shift reported by astronauts viewing Earth from orbit — involves ego dissolution, unity with the cosmos, and overwhelming compassion. Johns Hopkins psilocybin studies (Griffiths et al., 2006–2024) document statistically identical reports from study participants. Neither experience has a satisfying evolutionary explanation. Both are triggered by radically different delivery mechanisms.",
    significance: "DOCUMENTED PHENOMENON",
    significanceColor: "#E8C872",
    theoryTake:
      "Multiple vectors — altitude and chemistry — produce the same consciousness update. When two different delivery systems produce identical outputs, that convergence suggests a single source. The same patch, deployed two different ways.",
  },
  {
    title: "The Great Silence May Be The Point",
    summary:
      "The Fermi Paradox: if advanced civilizations are statistically near-certain given the universe's age and scale, why no contact? Advanced civilizations may not broadcast — they seed. Biological information persists for billions of years without energy expenditure. An electromagnetic signal requires continuous transmission. A genome, a spore, a fungal network — those transmit themselves.",
    significance: "THEORETICAL",
    significanceColor: "#8A8A9A",
    theoryTake:
      "Silence isn't absence. It's efficiency. The transmission is biological. The signal has already arrived. We are already running it.",
  },
]

export default function EvidencePage() {
  return (
    <div className="pt-24 pb-40 px-6 md:px-12 max-w-5xl mx-auto">

      {/* Hero */}
      <div className="text-center mb-24">
        <ScrollReveal>
          <h1
            className="font-grotesk font-bold tracking-[0.1em] uppercase"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)", color: "#F0EEE8" }}
          >
            The Evidence
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-muted font-sans text-base md:text-lg mt-4 max-w-xl mx-auto">
            Real scientific findings that rhyme with the theory. We&apos;re not saying
            it&apos;s aliens. We&apos;re saying the data is interesting.
          </p>
        </ScrollReveal>
      </div>

      {/* Section heading */}
      <ScrollReveal>
        <p className="font-grotesk text-xs tracking-widest uppercase text-muted mb-8">
          What Science Has Actually Found
        </p>
      </ScrollReveal>

      {/* Evidence cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-32">
        {CARDS.map((card, i) => (
          <ScrollReveal key={i} delay={i * 0.07}>
            <EvidenceCard item={card} />
          </ScrollReveal>
        ))}
      </div>

      {/* Timeline */}
      <div className="mb-16">
        <ScrollReveal>
          <h2
            className="font-grotesk text-2xl md:text-3xl tracking-wider uppercase text-cream text-center mb-4"
          >
            The Timeline
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-muted text-center text-sm mb-16 max-w-lg mx-auto">
            From the formation of the solar system to the psychedelic renaissance —
            the sequence of events, if you were looking for a signal.
          </p>
        </ScrollReveal>
        <Timeline />
      </div>
    </div>
  )
}
