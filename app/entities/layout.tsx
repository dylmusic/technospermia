import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Entities — Psilocybin, Cannabis & The Psycho-Tech Field Guide",
  description:
    "A field guide to the players: psilocybin mushrooms, DMT, cannabis, LSD, mycorrhizal networks, tardigrades, and the dark tech — every entity in the Technospermia theory.",
  alternates: { canonical: "https://www.technospermia.com/entities" },
  openGraph: {
    type: "website",
    title: "The Entities — Psilocybin, Cannabis & The Psycho-Tech Field Guide",
    description:
      "From psilocybin mushrooms to mycorrhizal networks to cancer — every entity in the Technospermia theory, classified and explained.",
    url: "https://www.technospermia.com/entities",
    images: [{ url: "https://www.technospermia.com/og?title=The+Entities&category=PHARMACOLOGY", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Entities — Psilocybin, Cannabis & The Psycho-Tech Field Guide",
    description: "Psilocybin mushrooms, DMT, cannabis, mycorrhizal networks, tardigrades, and cancer — every entity in the Technospermia theory, classified and explained.",
    images: ["https://www.technospermia.com/og?title=The+Entities&category=PHARMACOLOGY"],
  },
}

export default function EntitiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
