"use client"

import { useEffect, useRef } from "react"

const STAR_COUNT = 220

export default function CSSStarfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const W = window.innerWidth
    const H = window.innerHeight
    const dpr = Math.min(window.devicePixelRatio, 2)

    canvas.width = W * dpr
    canvas.height = H * dpr
    ctx.scale(dpr, dpr)

    ctx.fillStyle = "#000000"
    ctx.fillRect(0, 0, W, H)

    // Deterministic star positions (seeded by index, no Math.random)
    for (let i = 0; i < STAR_COUNT; i++) {
      const x = ((i * 37 + 7) % 97) / 100 * W
      const y = ((i * 61 + 13) % 97) / 100 * H
      const r = Math.max(0.4, ((i * 17) % 15) / 10)
      const opacity = ((i * 23) % 55 + 20) / 100
      ctx.beginPath()
      ctx.arc(x, y, r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255,255,255,${opacity})`
      ctx.fill()
    }
    // Second pass — brighter accent stars
    for (let i = 0; i < 30; i++) {
      const x = ((i * 53 + 29) % 95) / 100 * W
      const y = ((i * 79 + 41) % 95) / 100 * H
      ctx.beginPath()
      ctx.arc(x, y, 1.2, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(200,210,255,0.9)"
      ctx.fill()
    }
  }, [])

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, background: "#000" }}
      aria-hidden="true"
    >
      {/* Violet nebula smear */}
      <div
        style={{
          position: "absolute",
          width: "60vw",
          height: "45vh",
          top: "4%",
          left: "18%",
          background:
            "radial-gradient(ellipse, rgba(123,94,167,0.07) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      {/* Teal nebula smear */}
      <div
        style={{
          position: "absolute",
          width: "45vw",
          height: "35vh",
          bottom: "12%",
          right: "4%",
          background:
            "radial-gradient(ellipse, rgba(30,207,176,0.04) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  )
}
