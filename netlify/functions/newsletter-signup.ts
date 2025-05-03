import { Handler } from '@netlify/functions'
import * as SibApiV3Sdk from '@sendinblue/client'

// Initialize Brevo API client
const apiInstance = new SibApiV3Sdk.ContactsApi()
apiInstance.setApiKey(SibApiV3Sdk.ContactsApiApiKeys.apiKey, process.env.BREVO_API_KEY)

const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' }),
    }
  }

  try {
    const { email } = JSON.parse(event.body || '{}')

    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Email is required' }),
      }
    }

    // Create contact in Brevo
    const createContact = new SibApiV3Sdk.CreateContact()
    createContact.email = email
    createContact.listIds = [parseInt(process.env.BREVO_LIST_ID || '0')]
    createContact.updateEnabled = true

    await apiInstance.createContact(createContact)

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Thank you for subscribing! Please check your email to confirm.',
      }),
    }
  } catch (error: any) {
    // Handle Brevo API errors
    if (error.response?.text) {
      const apiError = JSON.parse(error.response.text)
      if (apiError.code === 'duplicate_parameter') {
        return {
          statusCode: 400,
          body: JSON.stringify({ message: 'You are already subscribed to our newsletter.' }),
        }
      }
    }

    console.error('Newsletter signup error:', error)

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Something went wrong. Please try again later.' }),
    }
  }
}

export { handler } 