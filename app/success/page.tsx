'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Success() {
  const router = useRouter()

  useEffect(() => {
    // Redirect back to home after 5 seconds
    const timeout = setTimeout(() => {
      router.push('/')
    }, 5000)

    return () => clearTimeout(timeout)
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-light">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center p-8"
      >
        <div className="text-6xl mb-6">✨</div>
        <h1 className="text-4xl font-display font-bold mb-4">Thank You!</h1>
        <p className="text-lg text-dark/80 mb-8">
          Your message has been received. We'll get back to you soon.
        </p>
        <p className="text-sm text-dark/60">
          Redirecting you back to the homepage in a few seconds...
        </p>
      </motion.div>
    </div>
  )
} 