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

export const metadata: Metadata = {
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
    "psychedelics consciousness",
    "alien technology",
    "psilocybin meteorites",
    "fungi network",
    "DMT consciousness",
    "directed panspermia",
    "astrobiology",
    "cosmic seeding",
  ],
  openGraph: {
    type: "website",
    siteName: "Technospermia",
    title: "Technospermia & Psychospermia — A Theory of Consciousness Technology",
    description:
      "What if psychedelics, plants, and fungi aren't naturally evolved — but engineered technologies seeded across the universe?",
  },
  robots: { index: true, follow: true },
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
