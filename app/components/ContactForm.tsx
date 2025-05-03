'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { contactFormConfig } from './forms'
import { submitContactForm, type ContactFormData } from '../actions/contact'

export default function ContactForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formState, setFormState] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'booking'
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await submitContactForm(formState)
      
      if (result.success) {
        // Clear form and redirect
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
          inquiryType: 'booking'
        })
        router.push('/success')
      } else {
        throw new Error(result.error)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      {/* Hidden form for Netlify Forms detection */}
      <form
        name={contactFormConfig.name}
        data-netlify="true"
        netlify-honeypot="bot-field"
        hidden
      >
        {contactFormConfig.fields.map(field => {
          if (field.type === 'select') {
            return (
              <select key={field.name} name={field.name}>
                {field.options?.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            )
          }
          return <input key={field.name} type={field.type} name={field.name} />
        })}
      </form>

      {/* Actual form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
        name={contactFormConfig.name}
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value={contactFormConfig.name} />
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
            value={formState.inquiryType}
            onChange={handleChange}
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
            value={formState.name}
            onChange={handleChange}
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
            value={formState.email}
            onChange={handleChange}
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
            value={formState.subject}
            onChange={handleChange}
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
            value={formState.message}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full rounded-md border-dark/10 shadow-sm focus:border-primary focus:ring-primary"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </motion.form>
    </>
  )
} 