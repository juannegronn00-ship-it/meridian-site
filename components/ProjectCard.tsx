'use client'

import { useState } from 'react'
import Link from 'next/link'

interface ProjectCardProps {
  num: string
  title: string
  description: string
  tag: string
  href: string
  isCta?: boolean
  onClick?: (e: React.MouseEvent) => void
  style?: React.CSSProperties
}

export default function ProjectCard({
  num,
  title,
  description,
  tag,
  href,
  isCta = false,
  onClick,
  style,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false)

  const cardStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    flexDirection: isCta ? 'row' : 'column',
    alignItems: isCta ? 'center' : 'flex-start',
    justifyContent: isCta ? 'space-between' : 'flex-start',
    minHeight: isCta ? '240px' : '400px',
    padding: '3rem',
    background: hovered ? 'var(--card-hover)' : 'var(--card-bg)',
    transition: 'background 0.3s ease',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'inherit',
    ...style,
  }

  const arrowStyle: React.CSSProperties = {
    position: 'absolute',
    top: '2rem',
    right: '2rem',
    width: '34px',
    height: '34px',
    borderRadius: '50%',
    border: '1px solid var(--border)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.9rem',
    background: hovered ? 'var(--fg)' : 'transparent',
    color: hovered ? 'var(--bg)' : 'var(--fg)',
    transform: hovered ? 'rotate(45deg)' : 'rotate(0deg)',
    transition: 'all 0.3s ease',
    flexShrink: 0,
  }

  const inner = (
    <>
      <div
        style={{
          flex: isCta ? 1 : undefined,
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '0.85rem',
            color: 'var(--accent)',
            marginBottom: '0.75rem',
          }}
        >
          {num}
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)',
            fontWeight: 400,
            color: 'var(--fg)',
            lineHeight: 1.1,
            marginBottom: '1rem',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: '0.83rem',
            color: 'var(--fg2)',
            lineHeight: 1.75,
            maxWidth: isCta ? '480px' : undefined,
          }}
        >
          {description}
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: isCta ? 0 : 'auto',
          paddingTop: isCta ? 0 : '2rem',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            border: '1px solid var(--border)',
            padding: '0.35rem 0.85rem',
            borderRadius: '999px',
            fontSize: '0.68rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--fg2)',
          }}
        >
          {tag}
        </span>
      </div>

      <div style={arrowStyle} aria-hidden="true">
        ↗
      </div>
    </>
  )

  if (onClick) {
    return (
      <div
        style={cardStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onClick(e as unknown as React.MouseEvent)
        }}
      >
        {inner}
      </div>
    )
  }

  return (
    <Link
      href={href}
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {inner}
    </Link>
  )
}
