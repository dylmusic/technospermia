import { ImageResponse } from "next/og"
import Logo from "@/components/Logo"

export const size = { width: 512, height: 512 }
export const contentType = "image/png"

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Logo size={416} withRing withStars withRays />
      </div>
    ),
    size
  )
}
