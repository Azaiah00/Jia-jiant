'use client'

import React from 'react'
import Link from 'next/link'
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
      <div className="max-w-md w-full space-y-8 p-6">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-display font-bold text-dark">
            Message Sent Successfully!
          </h2>
          <p className="mt-2 text-sm text-dark/60">
            Thank you for reaching out. We'll get back to you as soon as possible.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 