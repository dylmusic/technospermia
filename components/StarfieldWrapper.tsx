"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import CSSStarfield from "@/components/CSSStarfield"

const ThreeStarfield = dynamic(
  () => import("@/components/StarfieldBackground"),
  {
    ssr: false,
    loading: () => (
      <div
        style={{ position: "fixed", inset: 0, background: "#000", zIndex: 0 }}
        aria-hidden="true"
      />
    ),
  }
)

function isMobile() {
  return window.innerWidth < 768 || navigator.maxTouchPoints > 0
}

export default function StarfieldWrapper() {
  const [mobile, setMobile] = useState<boolean | null>(null)

  useEffect(() => {
    setMobile(isMobile())
  }, [])

  // Before hydration — show black so there's no flash
  if (mobile === null) {
    return (
      <div
        style={{ position: "fixed", inset: 0, background: "#000", zIndex: 0 }}
        aria-hidden="true"
      />
    )
  }

  // Mobile: lightweight canvas 2D, no WebGL, no Three.js bundle
  if (mobile) return <CSSStarfield />

  // Desktop: full Three.js WebGL starfield
  return <ThreeStarfield />
}
