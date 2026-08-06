import { ImageResponse } from "next/og"

export const size = { width: 64, height: 64 }
export const contentType = "image/png"

export default function Icon() {
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
        <svg width="54" height="54" viewBox="0 0 100 100">
          <path
            d="M20,55 A30,30 0 0 1 80,55"
            fill="none"
            stroke="#F0EEE8"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <line x1="20" y1="55" x2="80" y2="55" stroke="#F0EEE8" strokeWidth="5" strokeLinecap="round" />
          <path
            d="M43,58 L40,88 L60,88 L57,58 Z"
            fill="none"
            stroke="#F0EEE8"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <line x1="44" y1="70" x2="56" y2="70" stroke="#1ECFB0" strokeWidth="3" />
          <path d="M50,90 L54,94 L50,98 L46,94 Z" fill="#7B5EA7" />
        </svg>
      </div>
    ),
    size
  )
}
