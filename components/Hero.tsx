'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const { scrollY } = useScroll()
  const ghostY = useTransform(scrollY, [0, 600], [0, -80])

  function handleWorkClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 3rem 5rem',
        overflow: 'hidden',
      }}
    >
      {/* Ghost background text — outer div handles centering, motion.div handles parallax */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <motion.div
          style={{
            y: ghostY,
            fontFamily: 'var(--font-serif)',
            fontSize: '17vw',
            lineHeight: 1,
            color: 'transparent',
            WebkitTextStroke: '1px rgba(13,13,13,0.06)',
            whiteSpace: 'nowrap',
            userSelect: 'none',
          }}
        >
          Meridian
        </motion.div>
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: '32px',
              height: '1px',
              background: 'var(--fg2)',
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--fg2)',
              fontWeight: 400,
            }}
          >
            AI Automation Studio — Est. 2026
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(3rem, 6.5vw, 5.5rem)',
            lineHeight: 1.0,
            fontWeight: 400,
            marginBottom: '3rem',
          }}
        >
          Intelligent systems
          <br />
          <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>
            built for the
          </em>
          <br />
          real world.
        </motion.h1>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <p
            style={{
              fontSize: '0.875rem',
              color: 'var(--fg2)',
              maxWidth: '300px',
              lineHeight: 1.75,
            }}
          >
            We build AI-powered bots and automation systems for finance
            professionals and businesses who need real solutions, not demos.
          </p>

          <HeroCta onClick={handleWorkClick} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.75rem',
        }}
        aria-hidden="true"
      >
        <span className="scroll-line" />
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--fg2)',
            writingMode: 'vertical-rl',
          }}
        >
          Scroll
        </span>
      </div>
    </section>
  )
}

function HeroCta({
  onClick,
}: {
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void
}) {
  return (
    <a
      href="#work"
      onClick={onClick}
      id="hero-cta"
      style={{
        display: 'inline-block',
        border: '1px solid var(--fg)',
        padding: '0.85rem 1.75rem',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.75rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--fg)',
        textDecoration: 'none',
      }}
    >
      <span style={{ position: 'relative', zIndex: 1 }}>View work →</span>
    </a>
  )
}
