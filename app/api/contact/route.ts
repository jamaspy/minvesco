import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend only when needed to avoid build errors
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('RESEND_API_KEY environment variable is not set')
  }
  return new Resend(apiKey)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, investmentAmount, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Send email using Resend
    const resend = getResend()
    const data = await resend.emails.send({
      from: 'MinVesco Contact <noreply@yourdomain.com>', // Replace with your domain
      to: ['info@minvesco.com'], // Replace with your actual email
      subject: `New Investment Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <header style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Investment Inquiry</h1>
          </header>
          
          <div style="padding: 30px; background: #f8f9fa;">
            <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #1e293b; margin-top: 0;">Contact Details</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><strong>Name:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><strong>Email:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${email}</td>
                </tr>
                ${company ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><strong>Company:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${company}</td>
                </tr>` : ''}
                ${investmentAmount ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><strong>Investment Amount:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${investmentAmount}</td>
                </tr>` : ''}
              </table>
              
              <h3 style="color: #1e293b; margin-top: 25px; margin-bottom: 15px;">Message</h3>
              <div style="background: #f1f5f9; padding: 15px; border-radius: 6px; border-left: 4px solid #0ea5e9;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          
          <footer style="background: #1e293b; color: #94a3b8; padding: 20px; text-align: center; font-size: 14px;">
            <p style="margin: 0;">This inquiry was submitted through the MinVesco website contact form.</p>
          </footer>
        </div>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}