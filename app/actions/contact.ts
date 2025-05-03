'use server'

import { z } from 'zod'

const formSchema = z.object({
  inquiryType: z.enum(['booking', 'collaboration', 'press', 'other']),
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
})

export type ContactFormData = z.infer<typeof formSchema>

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validate form data
    const validatedData = formSchema.parse(formData)

    // Create the form submission body
    const body = new URLSearchParams()
    body.append('form-name', 'contact')
    
    // Add honeypot field
    body.append('bot-field', '')
    
    // Add form data
    Object.entries(validatedData).forEach(([key, value]) => {
      body.append(key, value)
    })

    // Submit to Netlify Forms
    const response = await fetch('/.netlify/functions/submission-created', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body.toString(),
    })

    if (!response.ok) {
      throw new Error('Failed to submit form')
    }

    return { success: true }
  } catch (error) {
    console.error('Form submission error:', error)
    return { success: false, error: 'Failed to submit form' }
  }
} 