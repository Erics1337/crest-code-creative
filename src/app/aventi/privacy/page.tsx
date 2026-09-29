import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aventi Privacy Policy | Crest Code Creative',
  description: 'How Aventi handles account, location, event preference, and purchase data.',
};

const sections = [
  {
    title: 'Information Aventi handles',
    paragraphs: [
      'When you use Aventi, we handle the information needed to provide event discovery: your account identifier and email if you create a permanent account; location coordinates or a destination you choose; discovery preferences and filters; likes, passes, saved events, and reports; and the technical information needed to operate and secure the service, such as request logs and IP addresses.',
      'If you purchase Premium, Apple or Google processes your payment. Aventi and RevenueCat receive purchase identifiers and subscription status to determine access. We do not receive your full payment card number. If you contact support, we handle the message and contact details you provide.',
    ],
  },
  {
    title: 'How we use it',
    paragraphs: [
      'We use this information to authenticate your account, find and rank eligible events, remember your preferences and saved events, enforce free-use limits, provide Premium features, prevent abuse, respond to reports and support requests, and maintain service reliability. Device location is used for nearby discovery when you grant permission. You can instead choose a supported destination with Travel Mode when that feature is available to your account.',
      'Premium match explanations, insider tips, event pairings, and event imagery may be generated with AI. These features use event and venue information and relevant preference or filter inputs. Generated content is labeled in the app and may be unavailable when source information or provider capacity is insufficient.',
    ],
  },
  {
    title: 'Providers and event links',
    paragraphs: [
      'We use Supabase for accounts and application data, AWS for the API and background processing, RevenueCat for subscription status, Google services for destination lookup and time zones, and event discovery, verification, and AI providers such as SerpApi, Gemini, and Pollinations when those features are enabled. These providers receive only information needed for the relevant task. Event booking links lead to independent sites with their own privacy practices.',
    ],
  },
  {
    title: 'Your choices and deletion',
    paragraphs: [
      'You can decline device location permission, change your discovery settings, remove saved events, and request account deletion in the app. You can also use our external account-deletion page. Deletion removes the Aventi account and associated application records through a resumable process. A limited deletion request record may remain to prevent a deleted account from being recreated by an old session and to document completion. Records may also be retained where required for security, legal, or financial obligations.',
      'Deleting your Aventi account does not cancel a subscription billed by Apple or Google. Manage or cancel that subscription in the relevant app store. You can contact us to ask about your information or request help with deletion.',
    ],
  },
  {
    title: 'Security and changes',
    paragraphs: [
      'We use access controls and other safeguards designed to limit access to account data. No internet service can promise perfect security. We may update this policy as Aventi changes; the date on this page shows the latest version.',
    ],
  },
];

export default function AventiPrivacyPage() {
  return (
    <div className="bg-background py-16 sm:py-24">
      <article className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-primary">Aventi</p>
        <h1 className="mt-2 text-4xl font-bold text-foreground">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: September 28, 2026</p>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
          Aventi is an event discovery app operated by Crest Code Creative. This policy describes the information used to provide the app and your choices about it.
        </p>
        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-relaxed text-muted-foreground">{paragraph}</p>
              ))}
            </section>
          ))}
          <section>
            <h2 className="text-2xl font-bold text-foreground">Contact</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Email <a className="font-medium text-primary hover:underline" href="mailto:admin@crestcodecreative.com">admin@crestcodecreative.com</a> for privacy questions. See our <Link className="font-medium text-primary hover:underline" href="/aventi/delete-account">account-deletion instructions</Link>.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
