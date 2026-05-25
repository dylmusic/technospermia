"use client"

import { Canvas } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import { Suspense, useEffect, useState } from "react"

function StarScene({ count }: { count: number }) {
  const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 1.5) : 1

  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      gl={{ antialias: false, alpha: true }}
      dpr={dpr}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <Stars
          radius={100}
          depth={50}
          count={count}
          factor={4}
          saturation={0}
          fade
          speed={0.3}
        />
      </Suspense>
    </Canvas>
  )
}

export default function StarfieldBackground() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(window.innerWidth >= 768 ? 5000 : 2000)
  }, [])

  if (count === 0) return null

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Deep violet nebula smear — top center */}
      <div
        className="absolute"
        style={{
          width: "60vw",
          height: "45vh",
          top: "2%",
          left: "20%",
          background:
            "radial-gradient(ellipse, rgba(123, 94, 167, 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
          transform: "rotate(-8deg)",
        }}
      />
      {/* Teal nebula smear — bottom right */}
      <div
        className="absolute"
        style={{
          width: "45vw",
          height: "35vh",
          bottom: "10%",
          right: "5%",
          background:
            "radial-gradient(ellipse, rgba(30, 207, 176, 0.05) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      {/* Second violet patch — lower left */}
      <div
        className="absolute"
        style={{
          width: "30vw",
          height: "25vh",
          bottom: "30%",
          left: "5%",
          background:
            "radial-gradient(ellipse, rgba(123, 94, 167, 0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <StarScene count={count} />
    </div>
  )
}
