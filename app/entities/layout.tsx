import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Entities — Psilocybin, Cannabis & The Psycho-Tech Field Guide",
  description:
    "A field guide to the players: psilocybin mushrooms, DMT, cannabis, LSD, mycorrhizal networks, tardigrades, and the dark tech. The cast of the Technospermia theory.",
  alternates: { canonical: "https://technospermia.com/entities" },
  openGraph: {
    title: "The Entities — Psilocybin, Cannabis & The Psycho-Tech Field Guide",
    description:
      "From psilocybin mushrooms to mycorrhizal networks to cancer — every entity in the Technospermia theory, classified and explained.",
    url: "https://technospermia.com/entities",
  },
}

export default function EntitiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
