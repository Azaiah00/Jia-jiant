'use client'

import React from 'react'
import Link from 'next/link'
import AnimatedContainer from './AnimatedContainer'

// Sample music data - replace with actual data from your API/CMS
const latestReleases = [
  {
    id: 1,
    title: "Latest Single",
    coverArt: "/images/placeholder-cover.jpg",
    streamUrl: "https://distrokid.com/jia-latest",
    releaseDate: "2024",
  },
  {
    id: 2,
    title: "Featured Album",
    coverArt: "/images/placeholder-album.jpg",
    streamUrl: "https://distrokid.com/jia-album",
    releaseDate: "2023",
  },
  {
    id: 3,
    title: "Collaboration EP",
    coverArt: "/images/placeholder-ep.jpg",
    streamUrl: "https://distrokid.com/jia-collab",
    releaseDate: "2023",
  },
]

export default function MusicPlayer() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {latestReleases.map((release) => (
        <AnimatedContainer
          key={release.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-lg shadow-xl overflow-hidden"
        >
          <div className="relative aspect-square">
            {/* Placeholder for cover art - replace src with actual images */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl text-white/80">🎵</span>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-display font-bold mb-2">{release.title}</h3>
            <p className="text-dark/60 mb-4">{release.releaseDate}</p>
            
            <Link
              href={release.streamUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn w-full justify-center"
            >
              Stream Now
            </Link>
          </div>
        </AnimatedContainer>
      ))}
    </div>
  )
} 