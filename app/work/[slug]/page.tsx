import { notFound } from 'next/navigation'
import Link from 'next/link'
import { projects, type ProjectSlug } from '@/lib/projects'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: PageProps) {
  const project = projects[params.slug as ProjectSlug]
  if (!project) return {}
  return {
    title: `${project.title}, Meridian`,
    description: project.sections[0]?.body ?? '',
  }
}

export default function ProjectPage({ params }: PageProps) {
  const project = projects[params.slug as ProjectSlug]
  if (!project) notFound()

  return (
    <div style={{ paddingTop: '7rem' }}>
      {/* Back link */}
      <div style={{ padding: '0 3rem 2rem' }}>
        <Link
          href="/#work"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.72rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: 'var(--fg2)',
            transition: 'color 0.2s',
          }}
          className="back-link"
        >
          ← Back to work
        </Link>
      </div>

      {/* Hero */}
      <div
        style={{
          padding: '0 3rem 5rem',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '0.85rem',
            color: 'var(--fg2)',
            marginBottom: '1rem',
          }}
        >
          {project.num}
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: 400,
            color: 'var(--fg)',
            lineHeight: 1.05,
            marginBottom: '2rem',
          }}
        >
          {project.title}
        </h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
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
          ))}
        </div>
      </div>

      {/* Body — 2-col grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.6fr',
          gap: '6rem',
          padding: '5rem 3rem',
        }}
      >
        {/* Left — sticky stack */}
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
              marginBottom: '1.5rem',
            }}
          >
            Stack
          </span>
          <ul style={{ listStyle: 'none' }}>
            {project.stack.map((item) => (
              <li
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontSize: '0.85rem',
                  color: 'var(--fg3)',
                  padding: '0.4rem 0',
                }}
              >
                <span style={{ color: 'var(--fg)', fontSize: '0.75rem' }}>→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — content sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {project.sections.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.4rem',
                    fontWeight: 400,
                    color: 'var(--accent)',
                    marginBottom: '1rem',
                  }}
                >
                  {section.heading}
                </h3>
              )}
              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--fg3)',
                  lineHeight: 1.9,
                  ...(i === 0
                    ? {
                        borderLeft: '2px solid var(--accent)',
                        paddingLeft: '1.25rem',
                      }
                    : {}),
                }}
              >
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
