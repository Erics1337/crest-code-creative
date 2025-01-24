export const runtime = 'edge';

import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { NextResponse } from 'next/server';

const ses = new SESClient({
  region: process.env.AWS_REGION || 'us-west-2',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
});

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

    if (!process.env.SES_FROM_EMAIL || !process.env.SES_TO_EMAIL) {
      console.error('Missing SES environment variables');
      return NextResponse.json(
        { error: 'Server configuration error', details: 'Email service is not properly configured' },
        { status: 500 }
      );
    }

    const emailParams = {
      Source: process.env.SES_FROM_EMAIL,
      Destination: {
        ToAddresses: [process.env.SES_TO_EMAIL],
      },
      Message: {
        Subject: {
          Data: `New Contact Form Submission - ${selectedPackage}`,
          Charset: 'UTF-8',
        },
        Body: {
          Text: {
            Data: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Package: ${selectedPackage}

Message:
${message}`,
            Charset: 'UTF-8',
          },
        },
      },
    };

    try {
      await ses.send(new SendEmailCommand(emailParams));
      return NextResponse.json({ success: true });
    } catch (sesError: unknown) {
      console.error('AWS SES Error:', sesError);
      return NextResponse.json(
        { 
          error: 'Email service error', 
          details: sesError instanceof Error ? sesError.message : 'Failed to send email through the email service'
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
