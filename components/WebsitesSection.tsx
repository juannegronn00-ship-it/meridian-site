'use client'

import { useState } from 'react'
import RevealOnScroll from './RevealOnScroll'
import { GetStartedButton } from '@/components/ui/get-started-button'

interface CardData {
  icon: React.ReactNode
  title: string
  body: string
}

function IconSpeed() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}

function IconCraft() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  )
}

function IconShield() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  )
}

const CARDS: CardData[] = [
  {
    icon: <IconSpeed />,
    title: 'Fast by default',
    body: "Every site is built in Next.js and deployed on Vercel's edge network. No page builders, no bloat.",
  },
  {
    icon: <IconCraft />,
    title: 'Built to convert',
    body: 'Clean layouts, clear CTAs, and copy that actually communicates what you do.',
  },
  {
    icon: <IconShield />,
    title: 'We handle the rest',
    body: 'Hosting, updates, and maintenance included. You focus on your business.',
  },
]

function FeatureCard({ icon, title, body }: CardData) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        background: hovered ? 'var(--card-hover)' : 'var(--card-bg)',
        transition: 'background 0.3s ease',
        padding: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ color: 'var(--accent)' }}>{icon}</div>
      <h3
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.15rem, 1.8vw, 1.4rem)',
          fontWeight: 400,
          color: 'var(--fg)',
          lineHeight: 1.2,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: '0.83rem',
          color: 'var(--fg2)',
          lineHeight: 1.75,
        }}
      >
        {body}
      </p>
    </div>
  )
}

export default function WebsitesSection() {
  function handleCtaClick(e: React.MouseEvent) {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="websites"
      style={{
        borderTop: '1px solid var(--border)',
        padding: '8rem 3rem',
      }}
    >
      {/* Section label */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          marginBottom: '3rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.72rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--fg2)',
            fontWeight: 400,
            whiteSpace: 'nowrap',
          }}
        >
          We Also Build Websites
        </span>
        <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
      </div>

      {/* Heading */}
      <RevealOnScroll>
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
            fontWeight: 400,
            lineHeight: 1.05,
            marginBottom: '1.5rem',
          }}
        >
          We build websites
          <br />
          <em style={{ fontStyle: 'italic', color: 'var(--fg2)' }}>that work.</em>
        </h2>
      </RevealOnScroll>

      {/* Subheading */}
      <RevealOnScroll delay={0.08}>
        <p
          style={{
            fontSize: '0.95rem',
            color: 'var(--fg2)',
            lineHeight: 1.85,
            maxWidth: '560px',
            marginBottom: '4rem',
          }}
        >
          Clean, fast, production-ready sites for creators, businesses, and brands.
          Built in Next.js, deployed on Vercel, maintained by us.
        </p>
      </RevealOnScroll>

      {/* Feature cards */}
      <div className="websites-cards-grid">
        {CARDS.map((card, i) => (
          <RevealOnScroll key={card.title} delay={i * 0.1}>
            <FeatureCard {...card} />
          </RevealOnScroll>
        ))}
      </div>

      {/* CTA */}
      <RevealOnScroll delay={0.3}>
        <div
          style={{
            marginTop: '4rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.88rem',
              color: 'var(--fg2)',
            }}
          >
            Have a project in mind?
          </span>
          <GetStartedButton onClick={handleCtaClick} />
        </div>
      </RevealOnScroll>
    </section>
  )
}
