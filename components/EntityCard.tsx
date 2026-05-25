import { ReactNode } from "react"

export interface Entity {
  name: string
  classification: string
  category: "tech" | "medium" | "hostile" | "unknown"
  description: string
  role: string
  accent: string
}

function BackgroundGlyph({ category }: { category: Entity["category"] }) {
  if (category === "tech") {
    return (
      <svg className="absolute bottom-4 right-4 opacity-5 pointer-events-none" width="80" height="80" viewBox="0 0 80 80" aria-hidden>
        <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="40" cy="40" r="20" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="40" cy="40" r="5" fill="currentColor" />
      </svg>
    )
  }
  if (category === "medium") {
    return (
      <svg className="absolute bottom-4 right-4 opacity-5 pointer-events-none" width="80" height="80" viewBox="0 0 80 80" aria-hidden>
        <path d="M40,10 Q70,25 70,40 Q70,55 40,70 Q10,55 10,40 Q10,25 40,10Z" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M40,20 Q60,30 60,40 Q60,50 40,60 Q20,50 20,40 Q20,30 40,20Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
      </svg>
    )
  }
  if (category === "hostile") {
    return (
      <svg className="absolute bottom-4 right-4 opacity-5 pointer-events-none" width="80" height="80" viewBox="0 0 80 80" aria-hidden>
        <polygon points="40,5 75,70 5,70" stroke="currentColor" strokeWidth="1" fill="none" />
        <line x1="40" y1="25" x2="40" y2="50" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="40" cy="58" r="2" fill="currentColor" />
      </svg>
    )
  }
  return (
    <svg className="absolute bottom-4 right-4 opacity-5 pointer-events-none" width="80" height="80" viewBox="0 0 80 80" aria-hidden>
      <rect x="15" y="15" width="50" height="50" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(45 40 40)" />
      <circle cx="40" cy="40" r="5" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  )
}

export default function EntityCard({ entity }: { entity: Entity }) {
  return (
    <div
      className="glass relative overflow-hidden h-full"
      style={{ borderTop: `2px solid ${entity.accent}30` }}
    >
      <div className="p-6">
        {/* Classification tag */}
        <span
          className="font-mono text-xs tracking-widest uppercase"
          style={{ color: entity.accent }}
        >
          {entity.classification}
        </span>

        <h3 className="font-grotesk text-lg md:text-xl tracking-wide text-cream mt-3 mb-3">
          {entity.name}
        </h3>

        <p className="text-sm text-muted leading-relaxed mb-4">{entity.description}</p>

        {/* Role */}
        <div
          className="rounded-lg px-3 py-2.5"
          style={{ background: `${entity.accent}0D`, border: `1px solid ${entity.accent}20` }}
        >
          <p className="font-mono text-xs text-muted/60 tracking-widest uppercase mb-1">Role</p>
          <p className="text-xs text-cream leading-relaxed">{entity.role}</p>
        </div>
      </div>

      <BackgroundGlyph category={entity.category} />
    </div>
  )
}
