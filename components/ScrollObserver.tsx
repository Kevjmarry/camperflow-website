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

    // ── Screenshot pan-reveal ────────────────────────────────────────
    // Skipped for users who prefer reduced motion.
    // Progress formula:
    //   0  — frame top at viewport top  (user sees top of screenshot)
    //   1  — frame is 75 % scrolled past viewport top (pan completes while
    //         the bottom 25 % of the frame is still visible)
    // Clamped to [0, 1] so it stays static before entry and after exit.
    // Both scroll directions handled naturally — no one-time trigger.
    const panEls = Array.from(
      document.querySelectorAll<HTMLElement>('[data-sc-pan]')
    )
    let removePan: (() => void) | undefined

    if (
      panEls.length &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      const updatePan = () => {
        for (const el of panEls) {
          const img = el.querySelector<HTMLImageElement>('img')
          if (!img) continue
          const { top, height: elH } = el.getBoundingClientRect()
          if (!elH) continue
          const imgH = img.offsetHeight
          // How many px of image are hidden below the container's bottom edge.
          const hiddenH = Math.max(0, imgH - elH)
          if (hiddenH === 0) {
            // Image fits fully — nothing to pan, clear any stale transform.
            img.style.transform = ''
            continue
          }
          // Cap at 12 % of image height so heroes stay cinematic and the
          // pan never overshoots the hidden content on any viewport width.
          const maxPanPct = Math.min(12, (hiddenH / imgH) * 90)
          // progress: 0 when frame top at viewport top; 1 when 75 % scrolled past.
          const progress = Math.max(0, Math.min(1, -top / (elH * 0.75)))
          img.style.transform = `translateY(${(-maxPanPct * progress).toFixed(2)}%)`
        }
      }

      updatePan()
      window.addEventListener('scroll', updatePan, { passive: true })
      window.addEventListener('resize', updatePan, { passive: true })
      removePan = () => {
        window.removeEventListener('scroll', updatePan)
        window.removeEventListener('resize', updatePan)
      }
    }

    return () => {
      revealIo.disconnect()
      removePan?.()
    }
  }, [])
  return null
}
