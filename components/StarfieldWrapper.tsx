"use client"

import dynamic from "next/dynamic"

const StarfieldBackground = dynamic(
  () => import("@/components/StarfieldBackground"),
  { ssr: false }
)

export default function StarfieldWrapper() {
  return <StarfieldBackground />
}
