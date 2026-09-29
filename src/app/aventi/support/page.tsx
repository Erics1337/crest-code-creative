import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aventi Support | Crest Code Creative',
  description: 'Contact Aventi support and find account and billing help.',
};

export default function AventiSupportPage() {
  return (
    <div className="bg-background py-16 sm:py-24">
      <article className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-primary">Aventi</p>
        <h1 className="mt-2 text-4xl font-bold text-foreground">Support</h1>
        <p className="mt-8 leading-relaxed text-muted-foreground">
          For Aventi account, event, privacy, or subscription-access help, email <a className="font-medium text-primary hover:underline" href="mailto:admin@crestcodecreative.com">admin@crestcodecreative.com</a>. Describe the issue and the email associated with your account if you have one. Never send a password, payment card number, or verification code.
        </p>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Apple and Google handle subscription cancellation and payment refunds. You can manage a subscription in your device&apos;s store settings. To remove your Aventi account, use the app or our <Link className="font-medium text-primary hover:underline" href="/aventi/delete-account">account-deletion instructions</Link>.
        </p>
      </article>
    </div>
  );
}
