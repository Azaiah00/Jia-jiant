import React from 'react'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://jiathejiant.com'),
  title: 'Jia The Jiant | Rapper, Model, Actor & Influencer',
  description: 'Official website of Jia The Jiant - Brooklyn & Richmond based rapper, model, actor, and social media influencer. Book now for performances, modeling, and collaborations.',
  keywords: 'Jia The Jiant, rapper, model, actor, influencer, Brooklyn, Richmond, BK 718, RVA 804, music',
  openGraph: {
    title: 'Jia The Jiant | Rapper, Model, Actor & Influencer',
    description: 'Official website of Jia The Jiant - Brooklyn & Richmond based rapper, model, actor, and social media influencer.',
    url: 'https://jiathejiant.com',
    siteName: 'Jia The Jiant',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jia The Jiant',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Jia The Jiant',
    card: 'summary_large_image',
    creator: '@GedgiWorld',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-light text-dark">
        {children}
      </body>
    </html>
  )
} 