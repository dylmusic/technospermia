import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"
import Logo from "@/components/Logo"

export const runtime = "edge"

const CATEGORY_COLORS: Record<string, string> = {
  ASTROBIOLOGY: "#1ECFB0",
  CONSCIOUSNESS: "#7B5EA7",
  PHARMACOLOGY: "#E8C872",
  THEORY: "#E8C872",
}

const STARS = Array.from({ length: 180 }, (_, i) => ({
  x: (i * 37 + 7) % 100,
  y: (i * 61 + 13) % 100,
  r: ((i * 17) % 2) + 1,
  o: ((i * 23) % 45 + 10) / 100,
}))

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get("title") || "Technospermia"
    const category = searchParams.get("category") || ""

    const accentColor = CATEGORY_COLORS[category] || "#7B5EA7"

    // Load font from public directory using the request origin
    const fontUrl = new URL("/fonts/SpaceGrotesk-Bold.woff", request.url)
    const fontData = await fetch(fontUrl).then((r) => r.arrayBuffer())

    const displayTitle = title.length > 62 ? title.slice(0, 59) + "…" : title
    const fontSize = title.length > 48 ? "42px" : title.length > 32 ? "52px" : "62px"

    const response = new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#000000",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Stars */}
          {STARS.map((s, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${s.x}%`,
                top: `${s.y}%`,
                width: `${s.r}px`,
                height: `${s.r}px`,
                borderRadius: "50%",
                background: `rgba(255,255,255,${s.o})`,
              }}
            />
          ))}

          {/* Violet radial glow */}
          <div
            style={{
              position: "absolute",
              width: "900px",
              height: "500px",
              top: "65px",
              left: "150px",
              background:
                "radial-gradient(ellipse at center, rgba(123,94,167,0.22) 0%, rgba(123,94,167,0.06) 50%, transparent 70%)",
            }}
          />

          {/* Top-left site mark */}
          <div
            style={{
              position: "absolute",
              top: "36px",
              left: "56px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Logo size={26} withRing={false} withStars={false} withRays={false} />
            <div
              style={{
                fontFamily: "SpaceGrotesk",
                fontSize: "12px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.3)",
                letterSpacing: "0.38em",
              }}
            >
              TECHNOSPERMIA.COM
            </div>
          </div>

          {/* Center content */}
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "0 80px",
              maxWidth: "1100px",
            }}
          >
            {/* Category pill */}
            {category && (
              <div
                style={{
                  fontFamily: "SpaceGrotesk",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#000000",
                  background: accentColor,
                  letterSpacing: "0.2em",
                  padding: "6px 20px",
                  borderRadius: "100px",
                  marginBottom: "28px",
                }}
              >
                {category}
              </div>
            )}

            {/* Title */}
            <div
              style={{
                fontFamily: "SpaceGrotesk",
                fontSize,
                fontWeight: 700,
                color: "#F0EEE8",
                letterSpacing: "0.02em",
                lineHeight: 1.18,
                textAlign: "center",
              }}
            >
              {displayTitle}
            </div>

            {/* Thin violet rule */}
            <div
              style={{
                width: "80px",
                height: "1px",
                background: "rgba(123,94,167,0.5)",
                marginTop: "32px",
              }}
            />
          </div>

          {/* Bottom URL */}
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              fontFamily: "SpaceGrotesk",
              fontSize: "13px",
              fontWeight: 700,
              color: "#1ECFB0",
              letterSpacing: "0.28em",
            }}
          >
            WWW.TECHNOSPERMIA.COM
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [{ name: "SpaceGrotesk", data: fontData, weight: 700, style: "normal" }],
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      }
    )

    return response
  } catch {
    // Fallback to root OG image on any error
    return new Response(null, {
      status: 302,
      headers: { Location: "/opengraph-image" },
    })
  }
}
