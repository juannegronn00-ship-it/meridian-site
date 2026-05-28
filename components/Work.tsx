'use client'

import ProjectCard from './ProjectCard'
import RevealOnScroll from './RevealOnScroll'

const CARDS = [
  {
    num: '01',
    title: 'DA-LMP Forecast Bot',
    description:
      'Real-time day-ahead electricity price forecasting for a professional commodities trader. Live in production, daily delivery via Telegram.',
    tag: 'Finance · Forecasting',
    href: '/work/da-lmp-forecast-bot',
  },
  {
    num: '02',
    title: 'Grip',
    description:
      'Personal finance Telegram bot. Log transactions in plain language, track income across clients, get automated insights. Always on, always listening.',
    tag: 'Finance · Automation',
    href: '/work/grip',
  },
]

export default function Work() {
  function handleCtaClick(e: React.MouseEvent) {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="work" style={{ padding: '8rem 3rem' }}>
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
          }}
        >
          Selected Work
        </span>
        <span
          style={{ flex: 1, height: '1px', background: 'var(--border)' }}
        />
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2px',
        }}
      >
        {CARDS.map((card, i) => (
          <RevealOnScroll key={card.href} delay={i * 0.1}>
            <ProjectCard
              num={card.num}
              title={card.title}
              description={card.description}
              tag={card.tag}
              href={card.href}
              style={{ height: '100%' }}
            />
          </RevealOnScroll>
        ))}

        {/* CTA card spans both columns */}
        <RevealOnScroll delay={0.2} style={{ gridColumn: 'span 2' }}>
          <ProjectCard
            num="Next"
            title="Your problem, our next system."
            description="If you have a process that repeats daily and you're solving it manually, we can automate it better than you think is possible."
            tag="Get in touch →"
            href="#contact"
            isCta
            onClick={handleCtaClick}
          />
        </RevealOnScroll>
      </div>
    </section>
  )
}
