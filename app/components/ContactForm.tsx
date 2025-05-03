'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Create the static HTML that Netlify needs
  const formHTML = `
    <form name="contact" netlify netlify-honeypot="bot-field" hidden>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="text" name="subject" />
      <textarea name="message"></textarea>
      <select name="inquiryType">
        <option value="booking">Booking Inquiry</option>
        <option value="collaboration">Collaboration</option>
        <option value="press">Press/Media</option>
        <option value="other">Other</option>
      </select>
    </form>
  `

  return (
    <>
      {/* Insert the static form HTML */}
      <div dangerouslySetInnerHTML={{ __html: formHTML }} />

      {/* The actual form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </div>

        <div>
          <label htmlFor="inquiryType" className="block text-sm font-medium text-dark/80">
            Inquiry Type
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            className="mt-1 block w-full rounded-md border-dark/10 shadow-sm focus:border-primary focus:ring-primary"
            required
          >
            <option value="booking">Booking Inquiry</option>
            <option value="collaboration">Collaboration</option>
            <option value="press">Press/Media</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dark/80">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full rounded-md border-dark/10 shadow-sm focus:border-primary focus:ring-primary"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark/80">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full rounded-md border-dark/10 shadow-sm focus:border-primary focus:ring-primary"
            required
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-dark/80">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="mt-1 block w-full rounded-md border-dark/10 shadow-sm focus:border-primary focus:ring-primary"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-dark/80">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 block w-full rounded-md border-dark/10 shadow-sm focus:border-primary focus:ring-primary"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`btn w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            onClick={() => setIsSubmitting(true)}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </motion.form>
    </>
  )
} 