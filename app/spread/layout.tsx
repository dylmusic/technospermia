import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Spread The Signal — Share The Technospermia Theory",
  description:
    "Screenshot shareable cards, copy pre-written hooks, and send the Technospermia theory to a friend. IF THIS MAKES SENSE TO YOU, SEND THE SITE TO A FRIEND.",
  alternates: { canonical: "https://www.technospermia.com/spread" },
  openGraph: {
    title: "Spread The Signal — Share The Technospermia Theory",
    description:
      "Ready-to-share cards and captions for Instagram, X, and TikTok. The theory spreads the way the tech does — organically.",
    url: "https://www.technospermia.com/spread",
  },
}

export default function SpreadLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
