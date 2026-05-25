"use client"

import dynamic from "next/dynamic"

const NodeGraph = dynamic(() => import("@/components/NodeGraph"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full flex items-center justify-center"
      style={{ minHeight: "420px" }}
    >
      <span className="font-mono text-xs text-muted animate-pulse tracking-widest">
        LOADING MAP…
      </span>
    </div>
  ),
})

export default function NodeGraphWrapper() {
  return <NodeGraph />
}
