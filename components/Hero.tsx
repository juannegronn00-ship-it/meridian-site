'use client'

import { motion } from 'framer-motion'
import { GetStartedButton } from '@/components/ui/get-started-button'
import { SplineScene } from '@/components/ui/splite'

export default function Hero() {
  function handleWorkClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
      }}
    >
      {/* Left column — existing content, untouched */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          padding: '7rem 3rem 5rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
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
          <span style={{ position: 'relative', display: 'inline-block' }}>
            real world.
            <svg
              width="100%"
              height="12"
              viewBox="0 0 300 12"
              preserveAspectRatio="none"
              style={{ position: 'absolute', bottom: '-6px', left: 0 }}
            >
              <path
                d="M 0,6 Q 75,0 150,6 Q 225,12 300,6"
                stroke="var(--accent)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
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
            marginTop: 'auto',
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

          <GetStartedButton label="View Work" onClick={handleWorkClick} />
        </motion.div>
      </div>

      {/* Right column — Spline scene */}
      <div
        style={{
          flex: 1,
          position: 'relative',
          overflow: 'visible',
        }}
      >
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </section>
  )
}
