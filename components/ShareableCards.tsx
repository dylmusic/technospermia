"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

interface CardData {
  id: number
  headline: string
  body: string
  caption: string
  accentColor: string
  glowColor: string
}

const CARDS: CardData[] = [
  {
    id: 1,
    headline: "WHAT IF PSILOCYBIN ISN'T NATURAL?",
    body: "It binds human serotonin receptors with extraordinary precision. Found in dozens of unrelated fungi species across every continent. Too specific to be random.",
    caption:
      "What if psilocybin mushrooms aren't naturally evolved — but engineered technology seeded across the universe? The precision is too specific to be random. 🍄 #technospermia #psilocybin #consciousness",
    accentColor: "#7B5EA7",
    glowColor: "rgba(123, 94, 167, 0.32)",
  },
  {
    id: 2,
    headline: "YOUR BODY HAS RECEPTORS FOR CANNABIS EVERYWHERE",
    body: "CB1 and CB2 receptors throughout your entire body — brain, gut, immune system. We evolved a full system perfectly tuned to receive it. Why?",
    caption:
      "Your body has cannabinoid receptors EVERYWHERE. Brain, gut, immune system. We evolved a full system perfectly tuned to receive cannabis. That's not an accident. #technospermia #cannabis #alientech",
    accentColor: "#1ECFB0",
    glowColor: "rgba(30, 207, 176, 0.22)",
  },
  {
    id: 3,
    headline: "60+ PLANTS MAKE CAFFEINE",
    body: "Evolved independently. On multiple continents. All targeting the exact same human receptor. The most consumed psychoactive on Earth. Coincidence?",
    caption:
      "Caffeine is produced by 60+ plant species that evolved independently across multiple continents — all targeting the exact same human receptor. The most consumed psychoactive on Earth. Coincidence? #technospermia #caffeine",
    accentColor: "#E8C872",
    glowColor: "rgba(232, 200, 114, 0.2)",
  },
  {
    id: 4,
    headline: "WHAT IF THE GOOD GUYS WANT TO INCREASE NET GOOD IN THE UNIVERSE — EVEN JUST BY 1%?",
    body: "What kind of technology could do that across planets, species, and civilizations?",
    caption:
      'What if "the good guys" want to increase the net good of the universe, even just by 1%? What technology could do that across planets, species, and civilizations? #technospermia #psychospermia',
    accentColor: "#7B5EA7",
    glowColor: "rgba(123, 94, 167, 0.18)",
  },
  {
    id: 5,
    headline: "PANSPERMIA IS REAL SCIENCE",
    body: "Organic compounds confirmed in meteorites. Tardigrades survive space. Life spreads. So why not technology? Why not consciousness tech?",
    caption:
      "Panspermia — life spreading through space via asteroids — is accepted science. Organic compounds confirmed in meteorites. So why not consciousness technology? #technospermia #panspermia #astrobiology",
    accentColor: "#1ECFB0",
    glowColor: "rgba(30, 207, 176, 0.18)",
  },
  {
    id: 6,
    headline: "CANCER MIGHT BE BAD GUY TECH",
    body: "If advanced civilizations seeded consciousness technology across the universe... the bad guys probably made something too.",
    caption:
      "If consciousness-altering plants are good guy tech seeded across the universe... cancer might be what the bad guys made. #technospermia #psychospermia",
    accentColor: "#C0392B",
    glowColor: "rgba(192, 57, 43, 0.25)",
  },
]

function getStars(seed: number) {
  return Array.from({ length: 60 }, (_, i) => ({
    x: (i * 37 + seed * 23) % 95 + 1,
    y: (i * 61 + seed * 11) % 95 + 1,
    r: ((i * 17 + seed) % 2) + 1,
    o: ((i * 13 + seed * 3) % 45 + 15) / 100,
  }))
}

function ShareCard({ card }: { card: CardData }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const stars = getStars(card.id)

  const download = async () => {
    if (!cardRef.current || downloading) return
    setDownloading(true)
    try {
      const html2canvas = (await import("html2canvas")).default
      const canvas = await html2canvas(cardRef.current, {
        scale: 3,
        useCORS: true,
        logging: false,
        backgroundColor: "#000000",
      })
      const link = document.createElement("a")
      link.download = `technospermia-${card.id}.png`
      link.href = canvas.toDataURL("image/png")
      link.click()
    } catch (e) {
      console.error("Download failed:", e)
    } finally {
      setDownloading(false)
    }
  }

  const copyCaption = async () => {
    try {
      await navigator.clipboard.writeText(card.caption)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      /* clipboard denied */
    }
  }

  return (
    <div>
      {/* The visual card — captured by html2canvas */}
      <div
        ref={cardRef}
        style={{
          aspectRatio: "1 / 1",
          width: "100%",
          background: "#000000",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "clamp(24px, 6%, 40px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px",
        }}
      >
        {/* Stars */}
        {stars.map((star, i) => (
          <div
            key={i}
            aria-hidden="true"
            style={{
              position: "absolute",
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.r}px`,
              height: `${star.r}px`,
              borderRadius: "50%",
              background: `rgba(255,255,255,${star.o})`,
              pointerEvents: "none",
            }}
          />
        ))}

        {/* Glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse at 25% 25%, ${card.glowColor} 0%, transparent 60%)`,
            pointerEvents: "none",
          }}
        />

        {/* Headline */}
        <div style={{ position: "relative" }}>
          <p
            style={{
              fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
              fontSize: "clamp(0.95rem, 3.5vw, 1.5rem)",
              fontWeight: 700,
              color: card.accentColor,
              lineHeight: 1.2,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            {card.headline}
          </p>
        </div>

        {/* Body */}
        <div style={{ position: "relative" }}>
          <p
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "clamp(0.7rem, 2vw, 0.95rem)",
              color: "#C8C4BC",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            {card.body}
          </p>
        </div>

        {/* Footer URL */}
        <div style={{ position: "relative" }}>
          <span
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "clamp(0.5rem, 1.2vw, 0.6rem)",
              color: "rgba(138,138,154,0.45)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            TECHNOSPERMIA.COM
          </span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2 mt-3">
        <button
          onClick={download}
          disabled={downloading}
          className="flex-1 min-h-[40px] font-grotesk text-xs tracking-wider uppercase transition-all duration-200 rounded-lg"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: downloading ? "#8A8A9A" : "#F0EEE8",
            cursor: downloading ? "wait" : "pointer",
          }}
        >
          {downloading ? "RENDERING…" : "↓ DOWNLOAD PNG"}
        </button>
        <button
          onClick={copyCaption}
          className="flex-1 min-h-[40px] font-grotesk text-xs tracking-wider uppercase transition-all duration-200 rounded-lg"
          style={{
            background: copied ? "rgba(30,207,176,0.1)" : "rgba(255,255,255,0.04)",
            border: `1px solid ${copied ? "rgba(30,207,176,0.3)" : "rgba(255,255,255,0.1)"}`,
            color: copied ? "#1ECFB0" : "#8A8A9A",
            cursor: "pointer",
          }}
        >
          {copied ? "COPIED ✓" : "COPY CAPTION"}
        </button>
      </div>
    </div>
  )
}

export default function ShareableCards() {
  return (
    <div>
      {/* Section header */}
      <div className="text-center mb-12">
        <h2
          className="font-grotesk text-2xl md:text-3xl tracking-wider uppercase"
          style={{ color: "#F0EEE8" }}
        >
          Weapons for the Signal
        </h2>
        <p className="text-muted text-sm mt-3 max-w-md mx-auto leading-relaxed">
          Screenshot these. Send them. The theory spreads the way the tech does — organically.
        </p>
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {CARDS.map((card, i) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
          >
            <ShareCard card={card} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
