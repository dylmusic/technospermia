// ───────────────────────────────────────────────────────────────────
// PROMO BANNER CONFIG
//
// TOGGLE: flip `enabled` below to true/false, then commit + push.
// Or set NEXT_PUBLIC_PROMO_BANNER=off (or =on) in Vercel env vars to
// override this file without touching code.
// ───────────────────────────────────────────────────────────────────

const override = process.env.NEXT_PUBLIC_PROMO_BANNER

export const PROMO = {
  /** ◀── MASTER SWITCH. false hides the bar everywhere. */
  enabled: false,

  headline: "BUY $LSD NOW",
  subhead: "OFFICIAL TECHNOSPERMIA TOKEN",
  cta: "BUY NOW",
  contractLabel: "Contract Address",
  contractAddress: "XXXXXXX",

  /** Where BUY NOW points. Leave "#" until the listing is live. */
  buyUrl: "#",

  /** Bar height in px — drives the nav offset and hero height. */
  height: 44,
} as const

/** Env var wins over the file constant when it is set. */
export const PROMO_ON =
  override === undefined || override === ""
    ? PROMO.enabled
    : override === "on" || override === "true" || override === "1"

/** Fed into --promo-h so nav/hero/main shift by exactly the bar height. */
export const PROMO_OFFSET = PROMO_ON ? `${PROMO.height}px` : "0px"
