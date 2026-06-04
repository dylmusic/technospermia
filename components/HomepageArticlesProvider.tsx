"use client"

import { createContext, useContext, useState, useEffect } from "react"
import type { PostMeta } from "@/lib/blog"

const ShuffledPostsCtx = createContext<PostMeta[]>([])
export const useShuffledPosts = () => useContext(ShuffledPostsCtx)

export default function HomepageArticlesProvider({
  posts,
  children,
}: {
  posts: PostMeta[]
  children: React.ReactNode
}) {
  const [shuffled, setShuffled] = useState<PostMeta[]>(posts)

  useEffect(() => {
    setShuffled([...posts].sort(() => Math.random() - 0.5))
  }, [])

  return (
    <ShuffledPostsCtx.Provider value={shuffled}>
      {children}
    </ShuffledPostsCtx.Provider>
  )
}
