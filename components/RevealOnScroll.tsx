'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface RevealOnScrollProps {
  children: React.ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
}

export default function RevealOnScroll({
  children,
  delay = 0,
  className,
  style,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
