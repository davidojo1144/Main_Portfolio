'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  // Basic validation
  if (!name || !email || !subject || !message) {
    return {
      success: false,
      error: 'All fields are required'
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: 'Please enter a valid email address'
    }
  }

  try {
    // Send email to yourself
    await resend.emails.send({
      from: 'Contact Form <noreply@yourdomain.com>', // Replace with your verified domain
      to: ['davco1144@email.com'], // Your email address
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #4f46e5; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px;">
            <h3 style="color: #4f46e5; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #ecfdf5; border-left: 4px solid #10b981; border-radius: 4px;">
            <p style="margin: 0; color: #065f46;">
              <strong>Reply to:</strong> ${email}
            </p>
          </div>
        </div>
      `,
    })

    // Send confirmation email to the user
    await resend.emails.send({
      from: 'David Ojo <noreply@yourdomain.com>', // Replace with your verified domain
      to: [email],
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">
            Thank You for Reaching Out!
          </h2>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for contacting me! I've received your message about "${subject}" and will get back to you as soon as possible.</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #4f46e5; margin-top: 0;">Your Message Summary</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p>I typically respond within 24-48 hours. If you have any urgent questions, feel free to reach out to me directly.</p>
          
          <p>Best regards,<br>David Ojo</p>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #f1f5f9; border-radius: 4px; text-align: center;">
            <p style="margin: 0; color: #64748b; font-size: 14px;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        </div>
      `,
    })

    return {
      success: true,
      message: 'Message sent successfully! I\'ll get back to you soon.'
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return {
      success: false,
      error: 'Failed to send message. Please try again later.'
    }
  }
}
