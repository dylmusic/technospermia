"use client"

import { useEffect } from "react"
import { trackEvent } from "@/lib/analytics"

export default function TheoryScrollTracker() {
  useEffect(() => {
    let fired = false
    const handler = () => {
      if (fired) return
      const total = document.documentElement.scrollHeight - window.innerHeight
      if (total > 0 && window.scrollY / total >= 0.9) {
        fired = true
        trackEvent("theory_scroll_complete")
        window.removeEventListener("scroll", handler)
      }
    }
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])
  return null
}
