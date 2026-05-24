import RevealOnScroll from './RevealOnScroll'

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        borderTop: '1px solid var(--border)',
        padding: '8rem 3rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div style={{ width: '100%', marginBottom: '3rem' }}>
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
          Get in touch
        </span>
      </div>

      <RevealOnScroll>
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(3rem, 7vw, 6.5rem)',
            fontWeight: 400,
            lineHeight: 1.0,
            textAlign: 'center',
          }}
        >
          Let&apos;s build
          <br />
          <em style={{ fontStyle: 'italic', color: 'var(--fg2)' }}>
            something real.
          </em>
        </h2>
      </RevealOnScroll>
    </section>
  )
}
