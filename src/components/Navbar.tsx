"use client"
import Link from "next/link"
import { useState } from "react"

const links = [
  { href: "/news", label: "Global News" },
  { href: "/topics", label: "Topics" },
  { href: "/briefs", label: "Student Briefs" },
  { href: "/mind-body", label: "Mind & Body" },
  { href: "/take-action", label: "Take Action" },
  { href: "/resources", label: "Resources" },
  { href: "/about-me", label: "About Me" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{ backgroundColor: "var(--navy)" }} className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span
            className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-sm"
            style={{ backgroundColor: "var(--green)" }}
          >
            M
          </span>
          <span className="text-white font-semibold tracking-tight text-sm">MindBridge Global</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-300 hover:text-white text-sm transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ backgroundColor: "var(--navy)" }} className="md:hidden border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-300 hover:text-white text-sm"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
