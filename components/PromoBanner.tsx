"use client"

import { useState } from "react"
import { PROMO, PROMO_ON } from "@/lib/promo"
import { trackEvent } from "@/lib/analytics"

export default function PromoBanner() {
  const [copied, setCopied] = useState(false)

  if (!PROMO_ON) return null

  // Real chain addresses are long — middle-truncate them on small screens.
  const shortAddress =
    PROMO.contractAddress.length > 14
      ? `${PROMO.contractAddress.slice(0, 5)}…${PROMO.contractAddress.slice(-4)}`
      : PROMO.contractAddress

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(PROMO.contractAddress)
      setCopied(true)
      trackEvent("promo_contract_copied", { address: PROMO.contractAddress })
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard blocked — address is still visible on screen */
    }
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-center gap-3 md:gap-5 px-3 md:px-6 overflow-hidden"
      style={{
        height: `${PROMO.height}px`,
        background:
          "linear-gradient(90deg, #2A1B46 0%, #4A3A69 30%, #7B5EA7 55%, #1ECFB0 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.14)",
        boxShadow: "0 0 40px rgba(123, 94, 167, 0.45)",
      }}
    >
      {/* Slow sheen sweep */}
      <div
        className="absolute inset-0 pointer-events-none promo-sheen"
        style={{
          background:
            "linear-gradient(100deg, transparent 35%, rgba(255,255,255,0.22) 50%, transparent 65%)",
        }}
      />

      <a
        href={PROMO.buyUrl}
        onClick={() => trackEvent("promo_buy_click", { placement: "banner_headline" })}
        className="relative z-10 flex items-baseline gap-2 whitespace-nowrap group"
      >
        <span
          className="font-grotesk font-bold uppercase tracking-[0.12em] text-cream"
          style={{ fontSize: "clamp(0.7rem, 2.6vw, 0.875rem)" }}
        >
          {PROMO.headline}
        </span>
        <span
          className="hidden sm:inline font-grotesk uppercase tracking-[0.2em]"
          style={{ fontSize: "0.65rem", color: "rgba(240,238,232,0.72)" }}
        >
          {PROMO.subhead}
        </span>
      </a>

      <button
        onClick={copyAddress}
        aria-label={`Copy contract address ${PROMO.contractAddress}`}
        className="relative z-10 flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1 rounded-full transition-colors"
        style={{
          background: "rgba(0,0,0,0.32)",
          border: "1px solid rgba(255,255,255,0.18)",
        }}
      >
        <span
          className="hidden lg:inline font-grotesk uppercase tracking-[0.18em]"
          style={{ fontSize: "0.6rem", color: "rgba(240,238,232,0.6)" }}
        >
          {PROMO.contractLabel}
        </span>
        <span className="hidden md:inline font-mono text-cream max-w-[260px] truncate" style={{ fontSize: "0.7rem" }}>
          {PROMO.contractAddress}
        </span>
        <span className="md:hidden font-mono text-cream" style={{ fontSize: "0.62rem" }}>
          {shortAddress}
        </span>
        <span
          className="font-grotesk uppercase tracking-[0.14em]"
          style={{ fontSize: "0.58rem", color: copied ? "#1ECFB0" : "rgba(240,238,232,0.5)" }}
        >
          {copied ? "COPIED" : "COPY"}
        </span>
      </button>

      <a
        href={PROMO.buyUrl}
        onClick={() => trackEvent("promo_buy_click", { placement: "banner_button" })}
        className="relative z-10 font-grotesk font-bold uppercase tracking-[0.16em] px-3 md:px-4 py-1 rounded-full whitespace-nowrap transition-transform hover:scale-105"
        style={{
          fontSize: "0.62rem",
          background: "#05050F",
          color: "#1ECFB0",
          border: "1px solid rgba(30,207,176,0.55)",
        }}
      >
        {PROMO.cta}
      </a>
    </div>
  )
}
