import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { getPromoAdminEmail, getPromoApplicantEmail } from '@/lib/email-templates/promo';
import { enforceRateLimit, enforceSameOrigin, isFilled } from '@/lib/request-guards';

export const runtime = 'edge';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const sameOriginError = enforceSameOrigin(request);
        if (sameOriginError) {
            return sameOriginError;
        }

        const rateLimitError = enforceRateLimit(request, 'promo', 5, 60_000);
        if (rateLimitError) {
            return rateLimitError;
        }

        const body = await request.json();
        const {
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
            companyWebsite
        } = body;

        // Honeypot field for simple bot filtering.
        if (isFilled(companyWebsite)) {
            return NextResponse.json({ success: true });
        }

        // Validate required fields
        if (!name || !businessName || !email || !phone || !employees || !yearsInBusiness || !painPoints || !businessImpact) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const targetEmail = process.env.CONTACT_EMAIL || 'eric@crestcodecreative.com';
        console.log('Promo application received:', { businessName, email });
        console.log('Sending admin notification to:', targetEmail);

        // 1. Send Admin Notification
        const adminEmail = await resend.emails.send({
            from: 'Crest Code <eric@crestcodecreative.com>',
            to: [targetEmail],
            subject: `New Automation Promo Application - ${businessName}`,
            replyTo: email,
            html: getPromoAdminEmail({
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
            }),
        });

        if (adminEmail.error) {
            console.error('Error sending admin email:', adminEmail.error);
            throw new Error(adminEmail.error.message);
        }

        // 2. Send Applicant Confirmation
        const applicantEmail = await resend.emails.send({
            from: 'Crest Code <eric@crestcodecreative.com>',
            to: [email],
            subject: 'We received your automation application!',
            html: getPromoApplicantEmail(name, businessName),
        });

        if (applicantEmail.error) {
            console.error('Error sending applicant email:', applicantEmail.error);
            // We don't throw here to avoid failing the whole request if just the confirmation fails,
            // but we log it. Or maybe we should throw? For now, let's just log.
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Promo submission error:', error);
        return NextResponse.json(
            { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}
