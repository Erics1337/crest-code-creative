import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { getContactAdminEmail, getContactAdminText } from '@/lib/email-templates/contact';

export const runtime = 'edge';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, message, package: selectedPackage } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields', details: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Debug logging
    console.log('Contact form submission received:', { name, email, package: selectedPackage });
    const targetEmail = process.env.CONTACT_EMAIL || 'eric@crestcodecreative.com';
    console.log('Sending email to:', targetEmail);

    try {
      const data = await resend.emails.send({
        from: 'Crest Code <eric@crestcodecreative.com>',
        to: [targetEmail],
        subject: `New Contact Form Submission - ${selectedPackage || 'General Inquiry'}`,
        replyTo: email,
        html: getContactAdminEmail({
          name,
          email,
          phone,
          message,
          selectedPackage,
        }),
        text: getContactAdminText({
          name,
          email,
          phone,
          message,
          selectedPackage,
        }),
      });

      if (data.error) {
        throw new Error(data.error.message);
      }

      return NextResponse.json({ success: true, data });
    } catch (emailError: unknown) {
      console.error('Resend Error:', emailError);
      return NextResponse.json(
        {
          error: 'Email service error',
          details: emailError instanceof Error ? emailError.message : 'Failed to send email'
        },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    console.error('General error:', error);
    return NextResponse.json(
      {
        error: 'Server error',
        details: error instanceof Error ? error.message : 'An unexpected error occurred'
      },
      { status: 500 }
    );
  }
}
