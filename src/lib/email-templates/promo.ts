interface PromoEmailProps {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  website?: string;
  employees: string;
  yearsInBusiness: string;
  aiUsage: string;
  currentAutomations?: string;
  painPoints: string;
  businessImpact: string;
}

export const getPromoAdminEmail = ({
  name,
  businessName,
  email,
  phone,
  website,
  employees,
  yearsInBusiness,
  aiUsage,
  currentAutomations,
  painPoints,
  businessImpact,
}: PromoEmailProps) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Promo Application</title>
</head>
<body style="font-family: sans-serif; line-height: 1.6; color: #333;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="text-align: center; margin-bottom: 20px;">
      <img src="https://crestcodecreative.com/crest-logo.png" alt="Crest Code Creative" style="max-width: 150px; height: auto;">
    </div>
    <h1 style="color: #2563eb;">New Automation Promo Application</h1>
    
    <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
      <h2 style="margin-top: 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">Business Info</h2>
      <p><strong>Contact Name:</strong> ${name}</p>
      <p><strong>Business Name:</strong> ${businessName}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Website:</strong> ${website || 'Not provided'}</p>
      <p><strong>Employees:</strong> ${employees}</p>
      <p><strong>Years in Business:</strong> ${yearsInBusiness}</p>
    </div>

    <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px;">
      <h2 style="margin-top: 0; border-bottom: 1px solid #bfdbfe; padding-bottom: 10px; color: #1e40af;">Automation Details</h2>
      
      <p><strong>AI Usage:</strong> ${aiUsage}</p>
      
      <p><strong>Current Automations:</strong></p>
      <p style="white-space: pre-wrap; background-color: white; padding: 10px; border-radius: 4px;">${currentAutomations || 'None listed'}</p>
      
      <p><strong>Pain Points / Ideas:</strong></p>
      <p style="white-space: pre-wrap; background-color: white; padding: 10px; border-radius: 4px;">${painPoints}</p>

      <p><strong>Business Impact:</strong></p>
      <p style="white-space: pre-wrap; background-color: white; padding: 10px; border-radius: 4px;">${businessImpact}</p>
    </div>
  </div>
</body>
</html>
`;

export const getPromoApplicantEmail = (name: string, businessName: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Application Received</title>
</head>
<body style="font-family: sans-serif; line-height: 1.6; color: #333;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="text-align: center; margin-bottom: 20px;">
      <img src="https://crestcodecreative.com/crest-logo.png" alt="Crest Code Creative" style="max-width: 150px; height: auto;">
    </div>
    <h1 style="color: #2563eb;">Thanks for applying!</h1>
    <p>Hi ${name},</p>
    <p>We've received your application for the Gunnison Valley Automation Promo.</p>
    <p>Please note that due to limited availability, we will only be able to get back to you if your business is chosen for this opportunity, but please feel free to use the contact form on the website to get in touch with me for any questions or to schedule a paid consultation.</p>
    <p>If selected, you will receive a free automation implementation which includes a consultation and assistance setting up an automation of your idea that solves a need of yours. Applications are chosen based on our availability and the specific needs of the applicant.</p>
    <p>I will review your details and reach out if we can move forward.</p>
    <br>
    <p>Best regards,</p>
    <p><strong>Eric Swanson</strong><br>Crest Code Creative</p>
  </div>
</body>
</html>
`;
