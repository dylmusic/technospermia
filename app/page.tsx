import type { Metadata } from "next"
import ScrollReveal from "@/components/ScrollReveal"
import ShareButtons from "@/components/ShareButtons"
import Hero from "@/components/Hero"

export const metadata: Metadata = {
  title: "Technospermia & Psychospermia — A Theory of Consciousness Technology",
  description:
    "What if psychedelics, plants, and fungi aren't naturally evolved — but engineered technologies seeded across the universe to alter consciousness? A theory of technospermia and psychospermia.",
}

const QUESTION_LINES = [
  "Do you believe in aliens?",
  "Do you know what panspermia is?",
  "(ingredients of life spreading through space via asteroids/comets)",
  "If both are true, there's probably advanced organisms out there",
  "It's likely they've interacted with us, probably hidden from us on purpose",
  "Now… what's the ratio of good to evil in the universe?",
  "Probably close to 50/50, right?",
  "So what if “the good guys” want to increase the net good of the universe…even just by 1%?",
  "What kind of technology could do that across planets, species, and civilizations?",
]

const REQUIREMENTS = [
  "Be self replicating",
  "Spread automatically",
  "Effect conscious beings",
  "Have a self sustaining medium",
]

const EVIDENCE_LINES = [
  "There are plants and compounds that do this now— psilocybin, weed, LSD, even nicotine or cocaine",
  "Most interact with our brain in extremely specific ways, often tied to serotonin, dopamine, etc.",
  "But many of these substances seem to create a net good effect, like psychedelics",
  "Some of these effects seem too precise to be random",
]

const PIVOT_LINES = [
  "So maybe these aren't just naturally evolved substances",
  "maybe they’re technologies",
]

const DISTRIBUTION_LINES = [
  "Distributed through biological mediums (plants, fungi)",
  "Designed to alter consciousness in a way that spreads perspective & energy",
]

const KEYWORDS = [
  "technospermia", "psychospermia", "panspermia", "exogenesis", "astrobiology",
  "directed panspermia", "cosmic seeding", "alien life", "alien dna", "alien consciousness",
  "non-human intelligence", "post-biological intelligence", "consciousness transfer",
  "interstellar biology", "mycelial intelligence", "fungal networks", "spore theory",
  "abduction phenomenon", "hybrid program", "ancient astronauts", "ancient aliens",
  "astrotheology", "annunaki", "pleiadians", "arcturians", "reptilians", "greys",
  "nordics", "orion group", "zeta reticuli", "sirians", "draconians", "mantids",
  "insectoids", "tall whites", "galactic federation", "uap", "ufos", "simulation theory",
  "alien overlords", "von neumann probes", "biotech evolution",
]

export default function TheoryPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <Hero />

      {/* Main content — scrollytelling */}
      <div className="px-6 md:px-12 max-w-3xl mx-auto pb-40 space-y-32">

        {/* The Questions */}
        <section className="space-y-6 text-center">
          {QUESTION_LINES.map((line, i) => {
            const isParenthetical = line.startsWith("(")
            const isBig = line.startsWith("So what if") || line.startsWith("What kind")
            return (
              <ScrollReveal key={i} delay={i * 0.06}>
                <p
                  className={
                    isParenthetical
                      ? "text-sm md:text-base text-muted italic"
                      : isBig
                      ? "text-xl md:text-3xl text-cream leading-snug"
                      : "text-lg md:text-2xl text-cream leading-snug"
                  }
                  style={isBig ? { color: "#D4D0C8" } : undefined}
                >
                  {line}
                </p>
              </ScrollReveal>
            )
          })}
        </section>

        {/* Pivot: the technology premise */}
        <section className="text-center space-y-12">
          <ScrollReveal>
            <p className="text-2xl md:text-4xl text-cream leading-relaxed">
              Maybe something that could alter the perspective of conscious organisms
            </p>
          </ScrollReveal>

          {/* Requirements card */}
          <ScrollReveal delay={0.1}>
            <div
              className="glass max-w-xl mx-auto text-left"
              style={{
                borderLeft: "2px solid rgba(123, 94, 167, 0.6)",
                borderRadius: "16px",
              }}
            >
              <p className="font-grotesk text-xs tracking-widest uppercase text-muted mb-5 px-6 pt-6">
                It would need to:
              </p>
              <ul className="space-y-3 px-6 pb-6">
                {REQUIREMENTS.map((req, i) => (
                  <ScrollReveal key={req} delay={0.15 + i * 0.08}>
                    <li className="flex items-center gap-3 text-base md:text-lg text-cream">
                      <span
                        className="shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ background: "#7B5EA7" }}
                      />
                      {req}
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </section>

        {/* Evidence lines */}
        <section className="space-y-6 text-center">
          {EVIDENCE_LINES.map((line, i) => (
            <ScrollReveal key={i} delay={i * 0.07}>
              <p className="text-lg md:text-xl text-cream leading-relaxed">{line}</p>
            </ScrollReveal>
          ))}
        </section>

        {/* The pivot moment */}
        <section className="text-center space-y-4">
          <ScrollReveal>
            <p className="text-xl md:text-2xl text-cream">
              {PIVOT_LINES[0]}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p
              className="text-4xl md:text-6xl font-grotesk tracking-wide leading-tight"
              style={{ color: "#7B5EA7" }}
            >
              {PIVOT_LINES[1]}
            </p>
          </ScrollReveal>
        </section>

        {/* Distribution lines */}
        <section className="space-y-5 text-center">
          {DISTRIBUTION_LINES.map((line, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <p className="text-lg md:text-xl text-muted italic">{line}</p>
            </ScrollReveal>
          ))}
        </section>

        {/* The dark side */}
        <section className="text-center space-y-5">
          <ScrollReveal>
            <p className="text-xl md:text-2xl text-cream">
              By this logic, the bad guys could also create tech.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.18}>
            <p
              className="text-xl md:text-2xl"
              style={{ color: "#C0392B" }}
            >
              So whatever cancer is the bad guys probably made that shit
            </p>
          </ScrollReveal>
        </section>

        {/* The conclusion */}
        <section className="text-center">
          <ScrollReveal>
            <p className="text-xl md:text-2xl text-cream leading-relaxed max-w-2xl mx-auto">
              So the theory is that drugs, psychedelics, plants, mushrooms etc. could be
              highly engineered biological technologies, each with their own purpose.
              Probably created by highly advanced aliens of some kind.
            </p>
          </ScrollReveal>
        </section>

        {/* Definition — glassmorphism quote card */}
        <section>
          <ScrollReveal>
            <blockquote
              className="glass max-w-2xl mx-auto px-8 py-8"
              style={{
                borderLeft: "3px solid #7B5EA7",
                borderRadius: "16px",
              }}
            >
              <p
                className="font-mono text-base md:text-lg leading-relaxed"
                style={{ color: "#E0DCF4" }}
              >
                &ldquo;Technospermia is the broader category&mdash;the seeding of different
                technologies across the universe. Psychospermia is a subset&mdash;technologies
                specifically designed to alter consciousness.&rdquo;
              </p>
            </blockquote>
          </ScrollReveal>
        </section>

        {/* ChatGPT terminal line */}
        <section className="text-center">
          <ScrollReveal>
            <p
              className="font-mono text-sm"
              style={{ color: "#8A8A9A" }}
            >
              ChatGPT says we invented these words, and that this theory is unheard of before.
            </p>
          </ScrollReveal>
        </section>

        {/* CTA */}
        <section className="text-center space-y-8">
          <ScrollReveal>
            <p
              className="text-3xl md:text-5xl font-grotesk tracking-widest uppercase leading-tight"
              style={{
                color: "#E8C872",
                textShadow: "0 0 80px rgba(232, 200, 114, 0.25)",
              }}
            >
              IF THIS MAKES SENSE TO YOU,<br className="hidden md:block" />
              {" "}SEND THE SITE TO A FRIEND.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <ShareButtons />
          </ScrollReveal>
        </section>

        {/* SEO keyword signal tags */}
        <section className="text-center pt-8 border-t border-white/5">
          <ScrollReveal>
            <p
              className="font-mono text-xs leading-8 max-w-3xl mx-auto"
              style={{ color: "rgba(138, 138, 154, 0.35)" }}
            >
              {KEYWORDS.join(" · ")}
            </p>
          </ScrollReveal>
        </section>
      </div>
    </div>
  )
}
