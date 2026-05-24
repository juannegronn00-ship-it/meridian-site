'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    const hash = href.replace('/#', '#')
    if (isHome) {
      e.preventDefault()
      const el = document.querySelector(hash)
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 3rem',
        background: 'rgba(245,243,238,0.92)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 100,
        borderBottom: '1px solid var(--border)',
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.1rem',
          color: 'var(--fg)',
          textDecoration: 'none',
        }}
      >
        Meridian
      </Link>

      <div style={{ display: 'flex', gap: '2.5rem' }}>
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            onClick={(e) => handleNavClick(e, href)}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--fg2)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLAnchorElement).style.color = 'var(--fg)')
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLAnchorElement).style.color = 'var(--fg2)')
            }
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}
