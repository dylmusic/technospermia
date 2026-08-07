import { ImageResponse } from "next/og"
import { readFileSync } from "fs"
import { join } from "path"
import Logo from "@/components/Logo"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = "Technospermia & Psychospermia — A Theory of Consciousness Technology"

const STARS = Array.from({ length: 80 }, (_, i) => ({
  x: (i * 43 + 11) % 100,
  y: (i * 67 + 19) % 100,
  r: ((i * 13) % 2) + 1,
  o: ((i * 29) % 45 + 15) / 100,
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

        <div
          style={{
            position: "absolute",
            width: "700px",
            height: "450px",
            top: "90px",
            left: "250px",
            background:
              "radial-gradient(ellipse at center, rgba(123,94,167,0.25) 0%, rgba(123,94,167,0.07) 50%, transparent 70%)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", marginBottom: "16px" }}>
            <Logo size={90} withRing withStars withRays />
          </div>

          <div
            style={{
              fontFamily: "SpaceGrotesk",
              fontSize: "90px",
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
              fontSize: "32px",
              fontWeight: 700,
              color: "#7B5EA7",
              letterSpacing: "0.18em",
              marginTop: "14px",
            }}
          >
            & PSYCHOSPERMIA
          </div>
          <div
            style={{
              fontFamily: "SpaceGrotesk",
              fontSize: "17px",
              color: "#8A8A9A",
              letterSpacing: "0.22em",
              marginTop: "36px",
            }}
          >
            WHAT IF PSYCHEDELICS ARE ALIEN TECHNOLOGY?
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "32px",
            fontFamily: "SpaceGrotesk",
            fontSize: "11px",
            color: "rgba(138,138,154,0.4)",
            letterSpacing: "0.35em",
          }}
        >
          TECHNOSPERMIA.COM
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "SpaceGrotesk", data: font, weight: 700, style: "normal" }],
    }
  )
}
