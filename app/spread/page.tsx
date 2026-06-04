"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ScrollReveal from "@/components/ScrollReveal"
import ShareButtons from "@/components/ShareButtons"
import ShareableCards from "@/components/ShareableCards"
import { trackEvent } from "@/lib/analytics"

const SITE_URL = "https://www.technospermia.com"

const SHARE_HOOKS = [
  {
    angle: "The Scientific Angle",
    text: "Did you know DMT is endogenous to mammalian brains, psilocybin binds serotonin receptors with molecular precision, and organic compounds arrive on Earth via meteorites? Technospermia explains why. technospermia.com",
  },
  {
    angle: "The Philosophical Angle",
    text: "If good and evil are roughly balanced in the universe, what kind of technology could a constructive civilization deploy across planets to tip the scale even 1%? technospermia.com",
  },
  {
    angle: "The What-If Angle",
    text: "What if mushrooms, plants, and psychedelics aren't naturally evolved — but engineered biological technologies, seeded across the universe by advanced civilizations? technospermia.com",
  },
]

interface Submission {
  id: string
  name: string
  text: string
  ts: number
}

function SubmissionSection() {
  const [name, setName] = useState("")
  const [text, setText] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [submissions, setSubmissions] = useState<Submission[]>([])

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("ts_submissions") || "[]")
      setSubmissions(stored)
    } catch {
      /* ignore */
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim()) return

    const entry: Submission = {
      id: Date.now().toString(),
      name: name.trim() || "Anonymous",
      text: text.trim(),
      ts: Date.now(),
    }

    trackEvent("community_theory_submitted")
    const next = [entry, ...submissions].slice(0, 20)
    setSubmissions(next)
    try {
      localStorage.setItem("ts_submissions", JSON.stringify(next))
    } catch {
      /* ignore */
    }
    setName("")
    setText("")
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="glass p-6 md:p-8 space-y-4 mb-10">
        <input
          type="text"
          placeholder="Name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={60}
          className="w-full bg-transparent border-b text-cream text-sm py-2 outline-none placeholder:text-muted/50 font-sans"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        />
        <textarea
          placeholder="Your extension of the theory…"
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={800}
          rows={5}
          className="w-full bg-transparent border text-cream text-sm p-3 rounded-xl outline-none resize-none placeholder:text-muted/50 font-sans"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
          required
        />
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-muted/40">{text.length}/800</span>
          <button
            type="submit"
            className="font-grotesk text-xs tracking-widest uppercase px-6 py-2.5 min-h-[44px] rounded-full transition-all duration-200"
            style={{
              background: "rgba(123,94,167,0.2)",
              border: "1px solid rgba(123,94,167,0.4)",
              color: "#D0C0E8",
            }}
          >
            {submitted ? "TRANSMITTED ✓" : "TRANSMIT"}
          </button>
        </div>
      </form>

      {submissions.length > 0 && (
        <div className="space-y-4">
          <p className="font-mono text-xs text-muted/50 tracking-widest uppercase text-center mb-6">
            Community extensions — unverified, speculative, and that&apos;s the point
          </p>
          <AnimatePresence>
            {submissions.map((s) => (
              <motion.blockquote
                key={s.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass p-5"
                style={{ borderLeft: "2px solid rgba(123,94,167,0.4)" }}
              >
                <p className="font-mono text-sm text-cream leading-relaxed">{s.text}</p>
                <p className="font-mono text-xs text-muted/50 mt-3">— {s.name}</p>
              </motion.blockquote>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}

function EmailSection() {
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    trackEvent("email_signup_submitted")
    setDone(true)
  }

  return (
    <div className="max-w-md mx-auto text-center">
      <p className="font-grotesk text-xs tracking-widest uppercase text-muted mb-4">
        Get notified when the theory evolves
      </p>
      {done ? (
        <p className="font-mono text-sm" style={{ color: "#1ECFB0" }}>
          Signal received. We&apos;ll be in touch.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-transparent glass text-cream text-sm px-4 py-2.5 outline-none placeholder:text-muted/40 font-sans rounded-xl min-h-[44px]"
          />
          <button
            type="submit"
            className="font-grotesk text-xs tracking-widest uppercase px-5 min-h-[44px] rounded-xl transition-all duration-200"
            style={{
              background: "rgba(30,207,176,0.12)",
              border: "1px solid rgba(30,207,176,0.3)",
              color: "#1ECFB0",
            }}
          >
            JOIN
          </button>
        </form>
      )}
    </div>
  )
}

export default function SpreadPage() {
  const [copiedHook, setCopiedHook] = useState<number | null>(null)

  const copyHook = async (text: string, i: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedHook(i)
      setTimeout(() => setCopiedHook(null), 2000)
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="pt-24 pb-40 px-6 md:px-12 max-w-4xl mx-auto">

      {/* Hero */}
      <div className="text-center mb-16">
        <ScrollReveal>
          <h1
            className="font-grotesk font-bold tracking-[0.1em] uppercase"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)", color: "#F0EEE8" }}
          >
            Spread the Signal
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p
            className="font-grotesk text-xl md:text-2xl mt-6 max-w-xl mx-auto leading-snug"
            style={{ color: "#E8C872" }}
          >
            IF THIS MAKES SENSE TO YOU,<br />
            SEND THE SITE TO A FRIEND.
          </p>
        </ScrollReveal>
      </div>

      {/* Share buttons */}
      <ScrollReveal delay={0.1}>
        <ShareButtons large />
      </ScrollReveal>

      {/* Shareable cards — Weapons for the Signal */}
      <div className="mt-28">
        <ShareableCards />
      </div>

      {/* Pre-written hooks */}
      <div className="mt-24">
        <ScrollReveal>
          <h2 className="font-grotesk text-xl md:text-2xl tracking-wider uppercase text-cream text-center mb-2">
            Ready-to-Send Signals
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-muted text-sm text-center mb-10">
            Pick your angle. Copy and paste.
          </p>
        </ScrollReveal>

        <div className="space-y-4 max-w-2xl mx-auto">
          {SHARE_HOOKS.map((hook, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="glass p-5">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className="font-grotesk text-xs tracking-widest uppercase text-muted">
                    {hook.angle}
                  </span>
                  <button
                    onClick={() => copyHook(hook.text, i)}
                    className="font-mono text-xs tracking-wide shrink-0 min-h-[32px] px-3 rounded-lg transition-colors"
                    style={{
                      color: copiedHook === i ? "#1ECFB0" : "#8A8A9A",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {copiedHook === i ? "copied ✓" : "copy"}
                  </button>
                </div>
                <p className="font-mono text-sm text-cream/80 leading-relaxed">{hook.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Community extensions */}
      <div className="mt-24">
        <ScrollReveal>
          <h2 className="font-grotesk text-xl md:text-2xl tracking-wider uppercase text-cream text-center mb-2">
            Add Your Theory
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-muted text-sm text-center mb-10 max-w-lg mx-auto">
            Extend the signal. What does the theory suggest that we haven&apos;t said yet?
          </p>
        </ScrollReveal>
        <SubmissionSection />
      </div>

      {/* Email capture */}
      <div className="mt-20 pt-12 border-t border-white/5">
        <ScrollReveal>
          <EmailSection />
        </ScrollReveal>
      </div>
    </div>
  )
}
