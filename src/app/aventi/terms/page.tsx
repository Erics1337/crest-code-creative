import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aventi Terms of Service | Crest Code Creative',
  description: 'Terms for using the Aventi event discovery mobile app.',
};

const sections = [
  {
    title: 'Using Aventi',
    body: 'Aventi helps you discover and save events. You are responsible for using the app lawfully, keeping a permanent account secure, and providing accurate information when you contact support or report an event. Do not interfere with the service, misuse other accounts, or attempt to evade use limits.',
  },
  {
    title: 'Event information and booking',
    body: 'Event details come from third-party sources and can change, be cancelled, or contain errors. Verify the date, location, admission rules, availability, and price with the organizer before traveling or buying a ticket. A booking link takes you to an independent provider; Aventi does not sell event tickets or control that provider’s terms or refunds.',
  },
  {
    title: 'Premium subscriptions',
    body: 'Premium offers unlimited preference actions, adjustable discovery radius, supported admission filters, travel planning, and eligible event insights while your subscription is active. Monthly and annual subscriptions renew automatically unless cancelled through Apple or Google. The app store shows the applicable local price and billing period before purchase. There is no introductory trial. The store handles payment, cancellation, and refunds under its rules. Cancelling normally preserves access through the paid period, subject to the store’s subscription status. Deleting an Aventi account does not cancel store billing; cancel it separately in your Apple or Google subscription settings.',
  },
  {
    title: 'Availability and generated content',
    body: 'Event coverage varies by location and verified inventory. Search, maps, AI content, and other provider-backed features may be unavailable or delayed. AI-generated explanations, tips, imagery, and pairings are informational and can be incomplete or inaccurate; check source links and organizer information before acting on them. We may change or suspend features to maintain safety, reliability, or spending limits.',
  },
  {
    title: 'Accounts and changes',
    body: 'You can request account deletion in the app or through our external deletion page. We may update these terms as Aventi changes. Continued use after updated terms take effect means you accept the updated terms, where permitted by applicable law.',
  },
];

export default function AventiTermsPage() {
  return (
    <div className="bg-background py-16 sm:py-24">
      <article className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-primary">Aventi</p>
        <h1 className="mt-2 text-4xl font-bold text-foreground">Terms of Service</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: September 28, 2026</p>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">By using Aventi, you agree to these terms.</p>
        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{section.body}</p>
            </section>
          ))}
          <section>
            <h2 className="text-2xl font-bold text-foreground">Contact</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Questions about these terms can be sent to <a className="font-medium text-primary hover:underline" href="mailto:admin@crestcodecreative.com">admin@crestcodecreative.com</a>. You can also read our <Link className="font-medium text-primary hover:underline" href="/aventi/privacy">Privacy Policy</Link>.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
