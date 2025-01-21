import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY as string);

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

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.SENDGRID_VERIFIED_SENDER as string,
      to: [process.env.RECIPIENT_EMAIL as string],
      subject: subject,
      react: EmailTemplate({ firstName: email, subject, message }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
