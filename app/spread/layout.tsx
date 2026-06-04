import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Spread The Signal — Share The Technospermia Theory",
  description:
    "Screenshot-ready share cards, pre-written captions, and copy-paste hooks. Send the Technospermia theory to a friend. The theory spreads the way the tech does — organically.",
  alternates: { canonical: "https://www.technospermia.com/spread" },
  openGraph: {
    type: "website",
    title: "Spread The Signal — Share The Technospermia Theory",
    description:
      "Ready-to-share cards and captions for Instagram, X, and TikTok. The theory spreads the way the tech does — organically.",
    url: "https://www.technospermia.com/spread",
    images: [{ url: "https://www.technospermia.com/og?title=Spread+The+Signal&category=THEORY", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spread The Signal — Share The Technospermia Theory",
    description: "Screenshot-ready share cards, pre-written captions, and copy-paste hooks for Instagram, X, and TikTok. Spread the signal.",
    images: ["https://www.technospermia.com/og?title=Spread+The+Signal&category=THEORY"],
  },
}

export default function SpreadLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
