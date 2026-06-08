import type { Metadata } from "next"
import { Space_Grotesk, Inter, Space_Mono } from "next/font/google"
import { Suspense } from "react"
import { GoogleAnalytics } from "@next/third-parties/google"
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

const BASE_URL = "https://www.technospermia.com"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Technospermia & Psychospermia — A Theory of Consciousness Technology",
    template: "%s — Technospermia",
  },
  description:
    "Technospermia and Psychospermia: The theory that psychedelics, fungi, and consciousness-altering plants are engineered biological technologies seeded across the universe. Is it conspiracy theory or the most important question in science? Explore the evidence.",
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
    "psychedelic conspiracy theory",
    "government suppressing psychedelics",
    "consciousness suppression conspiracy",
    "cia psychedelics conspiracy",
    "mkultra psychedelics",
    "are psychedelics suppressed",
    "conspiracy theory aliens real",
    "ufo conspiracy theory",
    "alien coverup conspiracy",
    "government alien cover up",
    "consciousness control conspiracy",
    "technospermia conspiracy",
    "psychospermia conspiracy theory",
    "are mushrooms alien conspiracy",
    "deep state psychedelics",
    "war on drugs conspiracy",
    "psychedelic suppression conspiracy",
    "government hiding alien technology",
    "cia drug experiments conspiracy",
    "mkultra mind control",
    "consciousness awakening conspiracy",
    "red pill consciousness",
    "hidden knowledge psychedelics",
    "forbidden knowledge consciousness",
    "suppressed science psychedelics",
    "big pharma psychedelics conspiracy",
    "who controls consciousness",
    "psychedelics and the elite",
    "ancient knowledge suppressed",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Technospermia",
    title: "Technospermia & Psychospermia — A Theory of Consciousness Technology",
    description:
      "Technospermia: the theory that psychedelic plants and fungi are engineered biological technologies seeded across the universe by advanced civilizations.",
    url: BASE_URL,
    images: [{ url: `${BASE_URL}/og?title=Technospermia+%26+Psychospermia&type=homepage`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technospermia & Psychospermia — A Theory of Consciousness Technology",
    description:
      "Technospermia: the theory that psychedelic plants and fungi are engineered biological technologies seeded across the universe by advanced civilizations.",
    images: [`${BASE_URL}/og?title=Technospermia+%26+Psychospermia&type=homepage`],
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
        "technospermia, psychospermia, panspermia, psilocybin, consciousness, alien technology, conspiracy theory, psychedelic suppression, government psychedelics, alien cover up, consciousness awakening, forbidden knowledge",
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
      <GoogleAnalytics gaId="G-6R6ZK7CNKX" />
    </html>
  )
}
