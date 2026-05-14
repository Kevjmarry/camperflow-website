'use client'
import { useEffect } from 'react'

export default function ScrollObserver() {
  useEffect(() => {
    document.documentElement.classList.add('scroll-reveal-ready')
    const targets = Array.from(document.querySelectorAll('[data-reveal]'))
    if (!targets.length) return undefined
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.07, rootMargin: '0px 0px -32px 0px' }
    )
    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return null
}
