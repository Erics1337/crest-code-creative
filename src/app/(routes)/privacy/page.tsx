import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Crest Code',
  description: 'Privacy policy for Crest Code Creative, including website inquiries, analytics, and social media integration data.',
};

const sections = [
  {
    title: 'Information We Collect',
    body: [
      'When you contact Crest Code Creative, we may collect your name, email address, phone number, company name, project details, and any other information you choose to share.',
      'When you use a social media integration connected to tools we operate, such as a LinkedIn authorization flow, we may receive account identifiers, profile information, authorization tokens, page or organization identifiers, and permissions needed to publish or manage content you request.',
      'We may collect basic website analytics, device, browser, page view, referral, and usage information to understand site performance and improve our services.',
    ],
  },
  {
    title: 'How We Use Information',
    body: [
      'We use information to respond to inquiries, provide web design and software development services, manage client relationships, operate authorized integrations, schedule or publish content at your direction, improve our website, and protect against abuse or security issues.',
      'We do not sell personal information. We do not use connected social account data for advertising, profiling, or unrelated purposes.',
    ],
  },
  {
    title: 'Social Media Integrations',
    body: [
      'If you authorize a third-party platform such as LinkedIn, we use the access granted only to provide the feature you requested, such as connecting an account, preparing a post, publishing approved content, or reading basic account information needed to display the connection.',
      'You can revoke access through the relevant platform settings at any time. Revoking access may prevent the integration from working until it is reconnected.',
    ],
  },
  {
    title: 'Cookies and Analytics',
    body: [
      'Our website and hosting providers may use cookies or similar technologies for security, performance, analytics, and basic site functionality.',
      'You can control cookies through your browser settings, though some features may not work correctly if cookies are disabled.',
    ],
  },
  {
    title: 'Service Providers',
    body: [
      'We may use trusted service providers for hosting, analytics, email delivery, form handling, automation, and application infrastructure. These providers process information only as needed to support the services they provide to us.',
    ],
  },
  {
    title: 'Data Retention',
    body: [
      'We keep information only as long as reasonably needed for the purposes described in this policy, to provide services, comply with legal obligations, resolve disputes, maintain security, and keep business records.',
      'Authorization tokens and integration data are retained only as needed to keep an integration connected and working, unless you ask us to remove them or revoke access through the third-party platform.',
    ],
  },
  {
    title: 'Your Choices',
    body: [
      'You may request access, correction, deletion, or restriction of your personal information by contacting us. We may need to verify your request before taking action.',
      'You may unsubscribe from non-transactional communications when an unsubscribe option is provided, or by contacting us directly.',
    ],
  },
  {
    title: 'Security',
    body: [
      'We use reasonable administrative, technical, and organizational safeguards to protect information. No internet service is perfectly secure, so we cannot guarantee absolute security.',
    ],
  },
  {
    title: 'Children',
    body: [
      'Our services are not directed to children under 13, and we do not knowingly collect personal information from children under 13.',
    ],
  },
  {
    title: 'Changes to This Policy',
    body: [
      'We may update this policy from time to time. The updated version will be posted on this page with a revised effective date.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <span className="mb-4 block text-sm font-semibold uppercase tracking-wider text-primary">
              Privacy Policy
            </span>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              How Crest Code handles your information
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              This policy explains what information Crest Code Creative collects, how it is used, and how to contact us about privacy requests.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">Effective date: June 3, 2026</p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-10">
            {sections.map((section) => (
              <section key={section.title} className="border-b border-border pb-8 last:border-b-0">
                <h2 className="mb-4 text-2xl font-bold text-foreground">{section.title}</h2>
                <div className="space-y-4 text-muted-foreground">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            <section className="rounded-2xl border border-border bg-secondary/30 p-6 md:p-8">
              <h2 className="mb-3 text-2xl font-bold text-foreground">Contact Us</h2>
              <p className="leading-relaxed text-muted-foreground">
                For privacy questions or requests, contact Crest Code Creative at{' '}
                <a className="font-medium text-primary hover:underline" href="mailto:eric@crestcodecreative.com">
                  eric@crestcodecreative.com
                </a>
                .
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                You can also reach us through the{' '}
                <Link href="/contact" className="font-medium text-primary hover:underline">
                  contact page
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
