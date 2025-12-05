interface ContactEmailProps {
  name: string;
  email: string;
  phone?: string;
  message: string;
  selectedPackage?: string;
}

export const getContactAdminEmail = ({
  name,
  email,
  phone,
  message,
  selectedPackage,
}: ContactEmailProps) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Submission</title>
</head>
<body style="font-family: sans-serif; line-height: 1.6; color: #333;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="text-align: center; margin-bottom: 20px;">
      <img src="https://crestcodecreative.com/crest-logo.png" alt="Crest Code Creative" style="max-width: 150px; height: auto;">
    </div>
    <h1 style="color: #2563eb;">New Contact Form Submission</h1>
    
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
`;

export const getContactAdminText = ({
  name,
  email,
  phone,
  message,
  selectedPackage,
}: ContactEmailProps) => `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Package: ${selectedPackage || 'General Inquiry'}

Message:
${message}
`;
