'use client'
import { Suspense, lazy, useState, useEffect } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

const loader = (
  <div className="w-full h-full flex items-center justify-center">
    <span
      style={{
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        border: '2px solid var(--border)',
        borderTopColor: 'var(--accent)',
        display: 'inline-block',
        animation: 'spin 0.8s linear infinite',
      }}
    />
  </div>
)

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return loader

  return (
    <Suspense fallback={loader}>
      <Spline scene={scene} className={className} />
    </Suspense>
  )
}
