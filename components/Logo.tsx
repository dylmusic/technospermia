interface LogoProps {
  size?: number
  className?: string
  withRing?: boolean
  withStars?: boolean
  withRays?: boolean
  glow?: boolean
}

const STAR_DOTS = [
  { cx: 14, cy: 16, r: 1.1, o: 0.9 },
  { cx: 86, cy: 14, r: 0.8, o: 0.6 },
  { cx: 92, cy: 46, r: 1, o: 0.7 },
  { cx: 88, cy: 84, r: 0.9, o: 0.5 },
  { cx: 62, cy: 96, r: 0.7, o: 0.6 },
  { cx: 12, cy: 90, r: 1, o: 0.8 },
  { cx: 6, cy: 52, r: 0.8, o: 0.5 },
  { cx: 30, cy: 8, r: 0.7, o: 0.7 },
  { cx: 70, cy: 6, r: 0.9, o: 0.4 },
]

// A tribal-sigil mushroom mark: domed cap, radiating gill lines, a
// notched stem, and a thin sigil ring with a scatter of stars — echoes
// the site's own starfield rather than a literal illustration.
export default function Logo({
  size = 40,
  className = "",
  withRing = true,
  withStars = true,
  withRays = true,
  glow = false,
}: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={glow ? { filter: "drop-shadow(0 0 10px rgba(123,94,167,0.5))" } : undefined}
      aria-hidden="true"
    >
      {withRing && (
        <circle cx="50" cy="55" r="46" fill="none" stroke="#7B5EA7" strokeWidth="1" opacity="0.35" />
      )}

      {withStars &&
        STAR_DOTS.map((s, i) => (
          <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="#F0EEE8" opacity={s.o} />
        ))}

      {/* cap dome */}
      <path
        d="M20,55 A30,30 0 0 1 80,55"
        fill="none"
        stroke="#F0EEE8"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line x1="20" y1="55" x2="80" y2="55" stroke="#F0EEE8" strokeWidth="2.5" strokeLinecap="round" />

      {withRays && (
        <g stroke="#F0EEE8" strokeWidth="1.4" strokeLinecap="round" opacity="0.85">
          <line x1="50" y1="60" x2="20" y2="55" />
          <line x1="50" y1="60" x2="24" y2="40" />
          <line x1="50" y1="60" x2="35" y2="29" />
          <line x1="50" y1="60" x2="50" y2="25" />
          <line x1="50" y1="60" x2="65" y2="29" />
          <line x1="50" y1="60" x2="76" y2="40" />
          <line x1="50" y1="60" x2="80" y2="55" />
        </g>
      )}

      {/* stem */}
      <path
        d="M43,58 L40,88 L60,88 L57,58 Z"
        fill="none"
        stroke="#F0EEE8"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* tribal notches on stem */}
      <line x1="44" y1="68" x2="56" y2="68" stroke="#1ECFB0" strokeWidth="1.4" opacity="0.8" />
      <line x1="42" y1="78" x2="58" y2="78" stroke="#1ECFB0" strokeWidth="1.4" opacity="0.8" />

      {/* base glyph */}
      <path d="M50,90 L53,93 L50,96 L47,93 Z" fill="#7B5EA7" opacity="0.85" />
    </svg>
  )
}
