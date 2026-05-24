import RevealOnScroll from './RevealOnScroll'

const STATS = [
  { num: '2', label: 'Live bots' },
  { num: '2', label: 'Active clients' },
  { num: '∞', label: 'Iterations' },
]

export default function About() {
  return (
    <section
      id="about"
      style={{
        borderTop: '1px solid var(--border)',
        padding: '8rem 3rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1.4fr',
        gap: '6rem',
      }}
    >
      {/* Left — sticky */}
      <div style={{ position: 'sticky', top: '8rem', alignSelf: 'start' }}>
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.72rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--fg2)',
            fontWeight: 400,
            display: 'block',
            marginBottom: '2rem',
          }}
        >
          About
        </span>

        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 3vw, 2.6rem)',
            fontWeight: 400,
            lineHeight: 1.2,
            marginBottom: '3rem',
          }}
        >
          Small team.
          <br />
          Real clients.
          <br />
          Live systems.
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            borderTop: '1px solid var(--border)',
            paddingTop: '1.75rem',
            gap: '1rem',
          }}
        >
          {STATS.map(({ num, label }) => (
            <div key={label}>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.4rem',
                  fontWeight: 400,
                  color: 'var(--accent)',
                  lineHeight: 1,
                  marginBottom: '0.4rem',
                }}
              >
                {num}
              </div>
              <div
                style={{
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--fg2)',
                  fontWeight: 400,
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — paragraphs */}
      <RevealOnScroll>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <p style={{ fontSize: '0.95rem', color: 'var(--fg2)', lineHeight: 1.85 }}>
            Meridian is an AI automation studio based in{' '}
            <strong>San Juan, Puerto Rico</strong>. We build intelligent systems
            that run in production — bots, agents, and pipelines for clients who
            need precision, not buzzwords.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'var(--fg2)', lineHeight: 1.85 }}>
            Our clients include a professional{' '}
            <strong>energy and commodities trader</strong> and a{' '}
            <strong>creator monetization company</strong>. We built and deployed
            a live DA-LMP electricity price forecast bot that runs daily, pulls
            real market signals, and delivers structured forecasts via Telegram.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'var(--fg2)', lineHeight: 1.85 }}>
            We work at the intersection of{' '}
            <strong>AI inference, financial data, and automation infrastructure</strong>
            . Every system we build is production-grade — hosted, monitored, and
            maintained.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'var(--fg2)', lineHeight: 1.85 }}>
            If you have a problem that repeats itself every day and you&apos;re
            solving it manually — we can probably automate it better than you
            think is possible.
          </p>
        </div>
      </RevealOnScroll>
    </section>
  )
}
