'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import MusicPlayer from './components/MusicPlayer'
import FeaturedContent from './components/FeaturedContent'
import ContactForm from './components/ContactForm'
import NewsletterSignup from './components/NewsletterSignup'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-light animate-gradient-xy" />
        
        {/* Content */}
        <div className="container relative z-10 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              <span className="gradient-text">Jia The Jiant</span>
            </h1>
            <p className="text-xl md:text-2xl text-dark/80 mb-8">
              Rapper • Model • Actor • Influencer
              <br />
              <span className="text-primary">BK</span> (718) × <span className="text-secondary">RVA</span> (804)
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/music" className="btn">
                Listen to My Music
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Book Me Now
              </Link>
            </div>

            {/* Social Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-white/50 backdrop-blur-sm"
              >
                <h3 className="font-display text-3xl font-bold text-primary">215k+</h3>
                <p className="text-dark/60">Instagram Followers</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-white/50 backdrop-blur-sm"
              >
                <h3 className="font-display text-3xl font-bold text-secondary">50k+</h3>
                <p className="text-dark/60">Monthly Listeners</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-white/50 backdrop-blur-sm"
              >
                <h3 className="font-display text-3xl font-bold text-primary">100+</h3>
                <p className="text-dark/60">Live Performances</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-white/50 backdrop-blur-sm"
              >
                <h3 className="font-display text-3xl font-bold text-secondary">20+</h3>
                <p className="text-dark/60">Brand Collaborations</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-dark/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-dark/20 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Latest Music Section */}
      <section className="py-20 bg-light">
        <div className="container">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">
            Latest <span className="gradient-text">Releases</span>
          </h2>
          <MusicPlayer />
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">
            Featured <span className="gradient-text">Content</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeaturedContent />
          </div>
        </div>
      </section>

      {/* Contact & Newsletter Section */}
      <section className="py-20 bg-light">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-display font-bold mb-8">
                Get in <span className="gradient-text">Touch</span>
              </h2>
              <ContactForm />
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center">
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 