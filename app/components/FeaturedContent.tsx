'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import AnimatedContainer from './AnimatedContainer'

const featuredContent = [
  {
    id: 1,
    title: 'Modeling Portfolio',
    description: 'Explore my latest photoshoots and campaign work with top brands.',
    image: '/images/placeholder-modeling.jpg',
    link: '/modeling',
    category: 'Modeling',
  },
  {
    id: 2,
    title: 'Acting Reels',
    description: 'Watch my performance highlights and acting showreel.',
    image: '/images/placeholder-acting.jpg',
    link: '/acting',
    category: 'Acting',
  },
  {
    id: 3,
    title: 'Latest Blog Posts',
    description: 'Behind the scenes content and personal stories.',
    image: '/images/placeholder-blog.jpg',
    link: '/blog',
    category: 'Blog',
  },
]

export default function FeaturedContent() {
  return (
    <>
      {featuredContent.map((content, index) => (
        <AnimatedContainer
          key={content.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="group relative bg-white rounded-xl shadow-lg overflow-hidden"
        >
          {/* Content Image/Placeholder */}
          <div className="relative h-64 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 flex items-center justify-center text-white/80 text-6xl">
              {content.category === 'Modeling' && '📸'}
              {content.category === 'Acting' && '🎬'}
              {content.category === 'Blog' && '✍️'}
            </div>
          </div>

          {/* Content Info */}
          <div className="p-6">
            <span className="text-sm font-medium text-primary">{content.category}</span>
            <h3 className="mt-2 text-xl font-display font-bold">{content.title}</h3>
            <p className="mt-2 text-dark/60">{content.description}</p>
            
            <Link
              href={content.link}
              className="mt-4 inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200"
            >
              Learn More
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-xl transition-colors duration-200" />
        </AnimatedContainer>
      ))}
    </>
  )
} 