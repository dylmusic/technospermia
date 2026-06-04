"use client"

import { useEffect, useRef } from "react"
import ScrollReveal from "@/components/ScrollReveal"
import { trackEvent } from "@/lib/analytics"

interface TimelineEvent {
  year: string
  label: string
  highlight?: boolean
}

const EVENTS: TimelineEvent[] = [
  { year: "4.5 billion BCE", label: "Solar system forms" },
  { year: "3.8 billion BCE", label: "First life on Earth" },
  { year: "1.5 billion BCE", label: "Fungi diverge from animals", highlight: true },
  { year: "500 million BCE", label: "Psilocybin-producing fungi species emerge", highlight: true },
  { year: "300,000 BCE", label: "Homo sapiens appear" },
  { year: "~10,000 BCE", label: "First recorded ritual psychedelic use", highlight: true },
  { year: "1943 CE", label: "LSD synthesized — accidental rediscovery?", highlight: true },
  { year: "1971 CE", label: "War on Drugs begins — suppression of the tech?", highlight: true },
  { year: "2006 CE", label: "Johns Hopkins publishes landmark psilocybin study" },
  { year: "2019 CE", label: "Denver decriminalizes psilocybin — first US city" },
  { year: "2023 CE", label: "Ryugu asteroid samples confirm complex organic molecules", highlight: true },
  { year: "2024 CE", label: "Organic compounds including nucleobases confirmed in meteorites worldwide", highlight: true },
  { year: "NOW", label: "Global psychedelic research renaissance — the signal is getting louder", highlight: true },
]

export default function Timeline() {
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sentinelRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackEvent("timeline_scrolled")
          obs.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Vertical line */}
      <div
        className="absolute left-[7.5rem] md:left-40 top-0 bottom-0 w-px"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(123,94,167,0.3) 5%, rgba(123,94,167,0.3) 95%, transparent)" }}
      />

      <div className="space-y-8">
        {EVENTS.map((event, i) => (
          <ScrollReveal key={i} delay={i * 0.04}>
            <div ref={i === EVENTS.length - 1 ? sentinelRef : undefined} className="flex items-start gap-6">
              {/* Year */}
              <div className="w-28 md:w-36 shrink-0 text-right pt-0.5">
                <span
                  className="font-mono text-xs leading-tight"
                  style={{ color: event.highlight ? "#1ECFB0" : "#8A8A9A" }}
                >
                  {event.year}
                </span>
              </div>

              {/* Dot */}
              <div className="relative shrink-0 flex items-center justify-center" style={{ width: "16px", marginTop: "4px" }}>
                <div
                  className="rounded-full"
                  style={{
                    width: event.highlight ? "10px" : "6px",
                    height: event.highlight ? "10px" : "6px",
                    background: event.highlight ? "#7B5EA7" : "rgba(138,138,154,0.4)",
                    boxShadow: event.highlight ? "0 0 12px rgba(123,94,167,0.6)" : "none",
                  }}
                />
              </div>

              {/* Label */}
              <p
                className="text-sm md:text-base leading-snug pt-0.5"
                style={{ color: event.highlight ? "#F0EEE8" : "#8A8A9A" }}
              >
                {event.label}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
