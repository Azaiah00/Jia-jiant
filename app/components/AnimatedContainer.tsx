'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedContainerProps {
  children: ReactNode
  className?: string
  initial?: any
  animate?: any
  transition?: any
  whileHover?: any
  whileInView?: any
  viewport?: any
}

export default function AnimatedContainer({
  children,
  className,
  initial,
  animate,
  transition,
  whileHover,
  whileInView,
  viewport,
}: AnimatedContainerProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      whileHover={whileHover}
      whileInView={whileInView}
      viewport={viewport}
    >
      {children}
    </motion.div>
  )
} 