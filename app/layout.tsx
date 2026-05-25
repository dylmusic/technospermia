import type { Metadata } from "next"
import { Space_Grotesk, Inter, Space_Mono } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import Nav from "@/components/Nav"
import StarfieldWrapper from "@/components/StarfieldWrapper"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
})

const BASE_URL = "https://technospermia.com"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Technospermia & Psychospermia — A Theory of Consciousness Technology",
    template: "%s — Technospermia",
  },
  description:
    "What if psychedelics, plants, and fungi aren't naturally evolved — but engineered technologies seeded across the universe to alter consciousness? A theory of technospermia and psychospermia.",
  keywords: [
    "technospermia",
    "psychospermia",
    "panspermia",
    "psilocybin space",
    "psilocybin meteorite",
    "psychedelics alien technology",
    "are mushrooms alien",
    "psilocybin consciousness",
    "cannabis alien origin",
    "DMT endogenous",
    "fungi ancient technology",
    "mycorrhizal network intelligence",
    "psychedelics engineered",
    "consciousness expansion alien",
    "overview effect psilocybin",
    "fermi paradox psychedelics",
    "astrobiology consciousness",
    "alien seeding theory",
    "psychedelic renaissance 2024 2025",
    "psilocybin therapy research",
    "cannabis receptor system alien",
    "caffeine adenosine alien tech",
    "are psychedelics natural",
    "universe consciousness technology",
    "good vs evil universe theory",
    "advanced civilization seeding",
    "technospermia theory",
    "psychospermia definition",
    "psilocybin organic compounds space",
    "fungi older than plants",
    "tardigrade space survival",
    "panspermia evidence 2024",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Technospermia",
    title: "Technospermia & Psychospermia — A Theory of Consciousness Technology",
    description:
      "What if psychedelics, plants, and fungi aren't naturally evolved — but engineered technologies seeded across the universe?",
    url: BASE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Technospermia & Psychospermia — A Theory of Consciousness Technology",
    description:
      "What if psychedelics, plants, and fungi aren't naturally evolved — but engineered technologies seeded across the universe?",
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Technospermia",
      description:
        "A speculative theory proposing that psychedelics, fungi, and consciousness-altering plants are engineered biological technologies seeded across the universe.",
    },
    {
      "@type": "Article",
      "@id": `${BASE_URL}/#article`,
      headline: "Technospermia & Psychospermia: A Theory of Consciousness Technology",
      description:
        "A speculative theory proposing that psychedelics, fungi, and consciousness-altering plants are engineered biological technologies seeded across the universe by advanced civilizations.",
      keywords:
        "technospermia, psychospermia, panspermia, psilocybin, consciousness, alien technology, fungi networks",
      author: {
        "@type": "Person",
        name: "Dylan Rhodes",
      },
      publisher: {
        "@type": "Organization",
        name: "Technospermia",
        url: BASE_URL,
      },
      datePublished: "2026-05-24",
      dateModified: "2026-05-24",
      url: BASE_URL,
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${spaceMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Suspense fallback={null}>
          <StarfieldWrapper />
        </Suspense>
        <Nav />
        <main className="relative z-10 min-h-screen">{children}</main>
      </body>
    </html>
  )
}
