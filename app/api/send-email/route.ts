import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { z } from 'zod';

// Initialize SendGrid with your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

// Validation schema for the request body
const emailSchema = z.object({
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Validate the request body
    const { email, subject, message } = emailSchema.parse(body);

    // Prepare the email message
    const msg = {
      to: process.env.RECIPIENT_EMAIL as string, // The email address where you want to receive messages
      from: process.env.SENDGRID_VERIFIED_SENDER as string, // Your verified sender email in SendGrid
      replyTo: email,
      subject: subject,
      text: `Message from: ${email}\n\n${message}`,
      html: `
        <h2>New message from contact form</h2>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email using SendGrid
    await sgMail.send(msg);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    
    console.error('Error sending email:', error); // Add detailed error logging
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}