'use client'

import { SplineScene } from '@/components/ui/splite'
import { Card } from '@/components/ui/card'
import { Spotlight } from '@/components/ui/spotlight'

export default function SplineHero() {
  return (
    <section style={{ padding: '0 3rem' }}>
      <Card
        className="w-full h-[500px] relative overflow-hidden"
        style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--border)',
          borderRadius: '0',
          boxShadow: 'none',
        }}
      >
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="var(--fg)"
        />

        <div className="flex h-full">
          {/* Left content */}
          <div
            className="flex-1 relative z-10 flex flex-col justify-center"
            style={{ padding: '2rem 2.5rem' }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 400,
                color: 'var(--fg)',
                lineHeight: 1.05,
              }}
            >
              Systems that think.
            </h2>
            <p
              style={{
                marginTop: '1.25rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                color: 'var(--fg2)',
                lineHeight: 1.75,
                maxWidth: '380px',
              }}
            >
              We build AI-powered automation and custom websites for businesses
              that want to move faster.
            </p>
          </div>

          {/* Right content */}
          <div className="flex-1 relative">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </section>
  )
}
