import { ImageResponse } from "next/og"
import { readFileSync } from "fs"
import { join } from "path"
import Logo from "@/components/Logo"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = "Technospermia & Psychospermia — A Theory of Consciousness Technology"

const STARS = Array.from({ length: 90 }, (_, i) => ({
  x: (i * 37 + 7) % 100,
  y: (i * 61 + 13) % 100,
  r: ((i * 17) % 2) + 1,
  o: ((i * 23) % 50 + 15) / 100,
}))

export default function Image() {
  const font = readFileSync(join(process.cwd(), "public/fonts/SpaceGrotesk-Bold.woff"))

  return new ImageResponse(
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

        {/* Violet nebula glow */}
        <div
          style={{
            position: "absolute",
            width: "800px",
            height: "500px",
            top: "65px",
            left: "200px",
            background:
              "radial-gradient(ellipse at center, rgba(123,94,167,0.28) 0%, rgba(123,94,167,0.08) 45%, transparent 70%)",
          }}
        />

        {/* Second softer glow */}
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "300px",
            bottom: "60px",
            right: "80px",
            background:
              "radial-gradient(ellipse at center, rgba(30,207,176,0.06) 0%, transparent 70%)",
          }}
        />

        {/* Main content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0px",
          }}
        >
          <div style={{ display: "flex", marginBottom: "18px" }}>
            <Logo size={100} withRing withStars withRays />
          </div>

          <div
            style={{
              fontFamily: "SpaceGrotesk",
              fontSize: "100px",
              fontWeight: 700,
              color: "#F0EEE8",
              letterSpacing: "0.07em",
              lineHeight: 1,
            }}
          >
            TECHNOSPERMIA
          </div>

          <div
            style={{
              fontFamily: "SpaceGrotesk",
              fontSize: "38px",
              fontWeight: 700,
              color: "#7B5EA7",
              letterSpacing: "0.18em",
              marginTop: "16px",
            }}
          >
            & PSYCHOSPERMIA
          </div>

          <div
            style={{
              width: "120px",
              height: "1px",
              background: "rgba(123,94,167,0.4)",
              marginTop: "32px",
              marginBottom: "32px",
            }}
          />

          <div
            style={{
              fontFamily: "SpaceGrotesk",
              fontSize: "18px",
              color: "#8A8A9A",
              letterSpacing: "0.22em",
            }}
          >
            WHAT IF PSYCHEDELICS ARE ALIEN TECHNOLOGY?
          </div>
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            fontFamily: "SpaceGrotesk",
            fontSize: "12px",
            color: "rgba(138,138,154,0.45)",
            letterSpacing: "0.35em",
          }}
        >
          TECHNOSPERMIA.COM
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "SpaceGrotesk",
          data: font,
          weight: 700,
          style: "normal",
        },
      ],
    }
  )
}
