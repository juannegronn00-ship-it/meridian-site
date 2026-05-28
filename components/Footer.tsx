import { LocationTag } from './ui/location-tag'

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '2rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1rem',
          color: 'var(--fg)',
        }}
      >
        Meridian
      </span>
      <LocationTag city="San Juan" country="PR" timezone="AST" />
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.72rem',
          color: 'var(--fg2)',
          letterSpacing: '0.05em',
        }}
      >
        © 2026 · San Juan, Puerto Rico
      </span>
    </footer>

  )
}
