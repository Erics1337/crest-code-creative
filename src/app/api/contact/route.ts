import { Resend } from 'resend';
import { NextResponse } from 'next/server';

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
    const targetEmail = process.env.CONTACT_EMAIL || 'erics1337@gmail.com';
    console.log('Sending email to:', targetEmail);

    try {
      const data = await resend.emails.send({
        from: 'Crest Code <noreply@updates.teamcrestapp.com>',
        to: [targetEmail],
        subject: `New Contact Form Submission - ${selectedPackage || 'General Inquiry'}`,
        replyTo: email,
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Submission</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f5; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
    
    <!-- Header -->
    <div style="background: linear-gradient(to right, #3b82f6, #8b5cf6); padding: 32px 24px; text-align: center;">
      <img src="https://crestcodecreative.com/crest-logo.png" alt="Crest Code Logo" style="width: 64px; height: 64px; margin-bottom: 16px; background-color: white; border-radius: 12px; padding: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">New Inquiry Received</h1>
      <p style="color: rgba(255, 255, 255, 0.9); margin: 8px 0 0 0; font-size: 16px;">Crest Code Website</p>
    </div>

    <!-- Content -->
    <div style="padding: 32px 24px;">
      <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px; margin-bottom: 24px; border: 1px solid #e2e8f0;">
        <h2 style="color: #1e293b; margin-top: 0; font-size: 18px; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px; margin-bottom: 16px;">Contact Details</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; width: 100px; font-weight: 500;">Name:</td>
            <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; width: 100px; font-weight: 500;">Email:</td>
            <td style="padding: 8px 0; color: #0f172a; font-weight: 600;"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; width: 100px; font-weight: 500;">Phone:</td>
            <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${phone || '<span style="color: #94a3b8; font-style: italic;">Not provided</span>'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; width: 100px; font-weight: 500;">Interest:</td>
            <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">
              <span style="background-color: #eff6ff; color: #2563eb; padding: 4px 12px; border-radius: 9999px; font-size: 14px;">
                ${selectedPackage || 'General Inquiry'}
              </span>
            </td>
          </tr>
        </table>
      </div>

      <div style="margin-top: 24px;">
        <h2 style="color: #1e293b; font-size: 18px; margin-bottom: 12px;">Message</h2>
        <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px; border: 1px solid #e2e8f0; color: #334155; white-space: pre-wrap;">${message}</div>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #f8fafc; padding: 24px; text-align: center; border-top: 1px solid #e2e8f0;">
      <p style="margin: 0; color: #64748b; font-size: 14px;">
        This email was sent automatically from the <strong>Crest Code</strong> contact form.
      </p>
      <p style="margin: 8px 0 0 0; color: #94a3b8; font-size: 12px;">
        &copy; ${new Date().getFullYear()} Crest Code. All rights reserved.
      </p>
    </div>
  </div>
</body>
</html>
        `,
        text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Package: ${selectedPackage || 'General Inquiry'}

Message:
${message}
        `,
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
