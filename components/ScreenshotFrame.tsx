'use client'
import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  src: string
  alt: string
  width: number
  height: number
  containerStyle?: React.CSSProperties
  imageStyle?: React.CSSProperties
  viewLabel: string
  priority?: boolean
  children?: React.ReactNode
}

export default function ScreenshotFrame({
  src,
  alt,
  width,
  height,
  containerStyle,
  imageStyle,
  viewLabel,
  priority,
  children,
}: Props) {
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const lightbox = (
    <div
      className="sc-lightbox"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button
        type="button"
        className="sc-lightbox-close"
        onClick={(e) => { e.stopPropagation(); close() }}
        aria-label="Close"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
      <div className="sc-lightbox-inner" onClick={(e) => e.stopPropagation()}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="sc-lightbox-img" />
      </div>
    </div>
  )

  return (
    <>
      <div style={{ overflow: 'hidden', position: 'relative', ...containerStyle }}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={imageStyle ?? { width: '100%', height: 'auto', display: 'block' }}
          priority={priority}
        />
        {children}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="sc-view-btn"
          aria-label={viewLabel}
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path d="M1 4.5V1h3.5M8.5 1H12v3.5M12 8.5V12H8.5M4.5 12H1V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {viewLabel}
        </button>
      </div>
      {open && createPortal(lightbox, document.body)}
    </>
  )
}
