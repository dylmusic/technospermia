import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
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
        <svg width="150" height="150" viewBox="0 0 100 100">
          <circle cx="50" cy="55" r="46" fill="none" stroke="#7B5EA7" strokeWidth="1" opacity="0.35" />
          <path
            d="M20,55 A30,30 0 0 1 80,55"
            fill="none"
            stroke="#F0EEE8"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <line x1="20" y1="55" x2="80" y2="55" stroke="#F0EEE8" strokeWidth="3" strokeLinecap="round" />
          <g stroke="#F0EEE8" strokeWidth="1.4" strokeLinecap="round" opacity="0.85">
            <line x1="50" y1="60" x2="20" y2="55" />
            <line x1="50" y1="60" x2="24" y2="40" />
            <line x1="50" y1="60" x2="35" y2="29" />
            <line x1="50" y1="60" x2="50" y2="25" />
            <line x1="50" y1="60" x2="65" y2="29" />
            <line x1="50" y1="60" x2="76" y2="40" />
            <line x1="50" y1="60" x2="80" y2="55" />
          </g>
          <path
            d="M43,58 L40,88 L60,88 L57,58 Z"
            fill="none"
            stroke="#F0EEE8"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <line x1="44" y1="68" x2="56" y2="68" stroke="#1ECFB0" strokeWidth="1.6" opacity="0.8" />
          <line x1="42" y1="78" x2="58" y2="78" stroke="#1ECFB0" strokeWidth="1.6" opacity="0.8" />
          <path d="M50,90 L53,93 L50,96 L47,93 Z" fill="#7B5EA7" opacity="0.85" />
        </svg>
      </div>
    ),
    size
  )
}
