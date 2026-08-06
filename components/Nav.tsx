"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Logo from "./Logo"

const links = [
  { href: "/", label: "The Theory" },
  { href: "/evidence", label: "The Evidence" },
  { href: "/map", label: "The Map" },
  { href: "/entities", label: "The Entities" },
  { href: "/blog", label: "Transmissions" },
  { href: "/spread", label: "Spread the Signal" },
]

const STARS = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  w: ((i * 13) % 15) / 10 + 1,
  left: ((i * 37 + 7) % 100),
  top: ((i * 61 + 13) % 100),
  opacity: ((i * 23) % 50) / 100 + 0.1,
  dur: ((i * 17) % 30) / 10 + 2,
  delay: ((i * 11) % 20) / 10,
}))

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10"
        style={{
          height: "64px",
          background: scrolled ? "rgba(0,0,0,0.65)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
          transition: "background 0.4s, border-color 0.4s",
        }}
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 font-grotesk text-xs tracking-[0.25em] uppercase text-cream opacity-80 hover:opacity-100 transition-opacity"
        >
          <Logo size={24} withRing={false} withStars={false} withRays={false} />
          TECHNOSPERMIA
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-grotesk text-xs tracking-wider uppercase transition-colors duration-200"
              style={{
                color: pathname === link.href ? "#1ECFB0" : "#8A8A9A",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
            transition={{ duration: 0.22 }}
            className="block w-6 bg-cream"
            style={{ height: "1px", transformOrigin: "center" }}
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
            transition={{ duration: 0.22 }}
            className="block w-6 bg-cream"
            style={{ height: "1px" }}
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
            transition={{ duration: 0.22 }}
            className="block w-6 bg-cream"
            style={{ height: "1px", transformOrigin: "center" }}
          />
        </button>
      </nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden"
            style={{ background: "rgba(0,0,0,0.97)" }}
          >
            {/* Shimmer stars */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {STARS.map((star) => (
                <motion.div
                  key={star.id}
                  className="absolute rounded-full bg-cream"
                  style={{
                    width: star.w + "px",
                    height: star.w + "px",
                    left: star.left + "%",
                    top: star.top + "%",
                    opacity: star.opacity,
                  }}
                  animate={{ opacity: [star.opacity, star.opacity * 4, star.opacity] }}
                  transition={{ duration: star.dur, repeat: Infinity, delay: star.delay }}
                />
              ))}
            </div>

            <div className="flex flex-col items-center gap-10 relative z-10">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className="block font-grotesk text-2xl tracking-[0.15em] uppercase transition-colors duration-200"
                    style={{ color: pathname === link.href ? "#1ECFB0" : "#F0EEE8" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
