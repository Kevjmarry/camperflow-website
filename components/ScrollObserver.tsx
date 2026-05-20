'use client'
import { useEffect } from 'react'

export default function ScrollObserver() {
  useEffect(() => {
    document.documentElement.classList.add('scroll-reveal-ready')

    // ── Scroll-reveal (fade + lift) ──────────────────────────────────
    const revealTargets = Array.from(document.querySelectorAll('[data-reveal]'))
    const revealIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            revealIo.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.07, rootMargin: '0px 0px -32px 0px' }
    )
    revealTargets.forEach((el) => revealIo.observe(el))

    return () => {
      revealIo.disconnect()
    }
  }, [])
  return null
}
