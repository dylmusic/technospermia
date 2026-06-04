const ACCENT_COLORS = {
  violet: { border: "#7B5EA7", bg: "rgba(123,94,167,0.08)", glow: "rgba(123,94,167,0.15)" },
  teal: { border: "#1ECFB0", bg: "rgba(30,207,176,0.08)", glow: "rgba(30,207,176,0.12)" },
  amber: { border: "#E8C872", bg: "rgba(232,200,114,0.08)", glow: "rgba(232,200,114,0.12)" },
  red: { border: "#C0392B", bg: "rgba(192,57,43,0.08)", glow: "rgba(192,57,43,0.12)" },
}

export function ComparisonTable({
  headers,
  rows,
}: {
  headers: string[]
  rows: string[][]
}) {
  return (
    <div className="my-10 overflow-x-auto rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
      <table className="w-full text-sm">
        <thead>
          <tr style={{ background: "rgba(123,94,167,0.15)" }}>
            {headers.map((h, i) => (
              <th
                key={i}
                className="font-grotesk text-xs tracking-widest uppercase text-left px-4 py-3"
                style={{ color: "#D0C0E8", borderBottom: "1px solid rgba(123,94,167,0.2)" }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              style={{ background: ri % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className="px-4 py-3 font-sans text-sm"
                  style={{
                    color: ci === 0 ? "#F0EEE8" : "#8A8A9A",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function DataPoint({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center p-6">
      <div
        className="font-grotesk font-bold leading-none mb-2"
        style={{
          fontSize: "clamp(2.5rem, 8vw, 4rem)",
          color: "#7B5EA7",
          textShadow: "0 0 40px rgba(123,94,167,0.4)",
        }}
      >
        {value}
      </div>
      <div className="font-sans text-sm text-muted leading-snug max-w-[160px] mx-auto">{label}</div>
    </div>
  )
}

export function StatGrid({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div
      className="my-10 grid gap-0 rounded-2xl overflow-hidden"
      style={{
        gridTemplateColumns: `repeat(${Math.min(stats.length, 3)}, 1fr)`,
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.03)",
      }}
    >
      {stats.map((stat, i) => (
        <div
          key={i}
          style={{
            borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
          }}
        >
          <DataPoint value={stat.value} label={stat.label} />
        </div>
      ))}
    </div>
  )
}

export function TimelineGraphic({ events }: { events: { year: string; event: string }[] }) {
  return (
    <div className="my-10">
      {/* Desktop: horizontal scroll */}
      <div className="hidden md:block overflow-x-auto pb-4">
        <div className="flex items-start gap-0 min-w-max">
          {events.map((ev, i) => (
            <div key={i} className="flex items-center">
              <div className="flex flex-col items-center" style={{ width: "160px" }}>
                <div
                  className="font-mono text-xs mb-3 text-center leading-snug"
                  style={{ color: "#1ECFB0" }}
                >
                  {ev.year}
                </div>
                <div
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{
                    background: "#7B5EA7",
                    boxShadow: "0 0 10px rgba(123,94,167,0.6)",
                  }}
                />
                <div className="w-px mt-2" style={{ height: "24px", background: "rgba(123,94,167,0.3)" }} />
                <p className="font-sans text-xs text-muted text-center leading-snug mt-2 px-2">
                  {ev.event}
                </p>
              </div>
              {i < events.length - 1 && (
                <div
                  className="shrink-0"
                  style={{
                    width: "40px",
                    height: "1px",
                    background: "rgba(123,94,167,0.25)",
                    marginTop: "-60px",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical */}
      <div className="md:hidden space-y-5 relative pl-10">
        <div
          className="absolute left-3 top-2 bottom-2 w-px"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(123,94,167,0.3) 10%, rgba(123,94,167,0.3) 90%, transparent)" }}
        />
        {events.map((ev, i) => (
          <div key={i} className="relative">
            <div
              className="absolute -left-7 top-1 w-2 h-2 rounded-full"
              style={{ background: "#7B5EA7", boxShadow: "0 0 8px rgba(123,94,167,0.6)" }}
            />
            <div className="font-mono text-xs mb-1" style={{ color: "#1ECFB0" }}>{ev.year}</div>
            <p className="font-sans text-sm text-muted leading-snug">{ev.event}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function PullQuote({ text }: { text: string }) {
  return (
    <blockquote
      className="my-12 px-8 py-6"
      style={{
        borderLeft: "3px solid #7B5EA7",
        background: "rgba(123,94,167,0.05)",
        borderRadius: "0 12px 12px 0",
      }}
    >
      <p
        className="font-mono text-base md:text-lg leading-relaxed"
        style={{ color: "#E0DCF4", fontStyle: "italic" }}
      >
        {text}
      </p>
    </blockquote>
  )
}

export function GlowCard({
  title,
  body,
  color = "violet",
}: {
  title: string
  body: string
  color?: "violet" | "teal" | "amber" | "red"
}) {
  const c = ACCENT_COLORS[color]
  return (
    <div
      className="my-8 p-6 rounded-2xl"
      style={{
        background: c.bg,
        border: `1px solid ${c.border}30`,
        borderTop: `2px solid ${c.border}`,
        boxShadow: `0 0 40px ${c.glow}`,
      }}
    >
      <h4
        className="font-grotesk text-base font-bold tracking-wide mb-3"
        style={{ color: c.border }}
      >
        {title}
      </h4>
      <p className="font-sans text-sm md:text-base text-muted leading-relaxed">{body}</p>
    </div>
  )
}

export function ConceptDiagram({
  nodes,
  connections,
}: {
  nodes: { label: string }[]
  connections: { from: number; to: number }[]
}) {
  const W = 500
  const H = 300
  const cx = W / 2
  const cy = H / 2
  const r = Math.min(cx, cy) - 60

  const coords = nodes.map((_, i) => {
    const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    }
  })

  return (
    <div className="my-10 rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(5,5,15,0.6)" }}>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxHeight: "300px" }}>
        {connections.map(({ from, to }, i) => (
          <line
            key={i}
            x1={coords[from].x}
            y1={coords[from].y}
            x2={coords[to].x}
            y2={coords[to].y}
            stroke="rgba(123,94,167,0.25)"
            strokeWidth="1"
          />
        ))}
        {nodes.map((node, i) => (
          <g key={i}>
            <circle
              cx={coords[i].x}
              cy={coords[i].y}
              r="28"
              fill="rgba(5,5,15,0.8)"
              stroke="#7B5EA7"
              strokeWidth="1"
            />
            <text
              x={coords[i].x}
              y={coords[i].y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#D0C0E8"
              fontSize="7.5"
              fontFamily="var(--font-space-grotesk)"
              letterSpacing="0.04em"
              style={{ userSelect: "none" }}
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}
