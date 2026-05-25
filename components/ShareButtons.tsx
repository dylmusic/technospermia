"use client"

import { useState, useEffect } from "react"

const SITE_URL = "https://technospermia.com"
const TWEET_TEXT =
  "What if psychedelics, plants, and fungi aren't naturally evolved — but engineered technologies seeded across the universe to alter consciousness? technospermia.com"

export default function ShareButtons({ large = false }: { large?: boolean }) {
  const [copied, setCopied] = useState(false)
  const [hasShare, setHasShare] = useState(false)

  useEffect(() => {
    setHasShare(!!navigator.share)
  }, [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SITE_URL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      /* clipboard denied */
    }
  }

  const handleTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(TWEET_TEXT)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const handleNativeShare = () => {
    navigator.share?.({
      title: "Technospermia & Psychospermia",
      text: "A theory of consciousness technology seeded across the universe.",
      url: SITE_URL,
    })
  }

  const cls = large
    ? "min-h-[52px] px-8 py-3 glass font-grotesk text-sm tracking-widest uppercase transition-all duration-200 cursor-pointer"
    : "min-h-[44px] px-6 py-2.5 glass font-grotesk text-xs tracking-widest uppercase transition-all duration-200 cursor-pointer"

  return (
    <div className="flex flex-wrap justify-center gap-3 mt-8">
      <button
        onClick={handleCopy}
        className={cls}
        style={{ color: copied ? "#1ECFB0" : "#F0EEE8" }}
      >
        {copied ? "LINK COPIED ✓" : "COPY LINK"}
      </button>
      <button
        onClick={handleTwitter}
        className={cls}
        style={{ color: "#F0EEE8" }}
      >
        SHARE ON X
      </button>
      {hasShare && (
        <button
          onClick={handleNativeShare}
          className={cls}
          style={{ color: "#F0EEE8" }}
        >
          SHARE
        </button>
      )}
    </div>
  )
}
