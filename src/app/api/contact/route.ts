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

    const emailParams = {
      Source: process.env.SES_FROM_EMAIL,
      Destination: {
        ToAddresses: [process.env.SES_TO_EMAIL],
      },
      Message: {
        Subject: {
          Data: `New Contact Form Submission - ${selectedPackage}`,
        },
        Body: {
          Text: {
            Data: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Package: ${selectedPackage}

Message:
${message}
            `,
          },
        },
      },
    };

    await ses.send(new SendEmailCommand(emailParams));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
