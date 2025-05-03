import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.formData()
    
    // Convert FormData to a plain object
    const formData = Object.fromEntries(data.entries())

    // Return success response
    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    // Return error response
    return NextResponse.json(
      { message: 'Error submitting form' },
      { status: 500 }
    )
  }
} 