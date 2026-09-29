import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Delete an Aventi Account | Crest Code Creative',
  description: 'How to request deletion of an Aventi account and associated data.',
};

export default function AventiDeleteAccountPage() {
  return (
    <div className="bg-background py-16 sm:py-24">
      <article className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-primary">Aventi</p>
        <h1 className="mt-2 text-4xl font-bold text-foreground">Delete your Aventi account</h1>
        <p className="mt-8 leading-relaxed text-muted-foreground">
          In the Aventi app, open Profile and choose Delete account. If you cannot access the app, request deletion by emailing <a className="font-medium text-primary hover:underline" href="mailto:admin@crestcodecreative.com?subject=Aventi%20account%20deletion%20request">admin@crestcodecreative.com</a> with the subject “Aventi account deletion request.” Send the request from your account email if possible. We may need to verify account ownership before processing it. Do not send your password or payment details.
        </p>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Deletion removes your Aventi profile and associated preferences, actions, favorites, and account data. A limited deletion record may remain to prevent recreation by an old sign-in token and document completion; information may also be retained where required for security, legal, or financial obligations. See the <Link className="font-medium text-primary hover:underline" href="/aventi/privacy">Privacy Policy</Link> for details.
        </p>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Deleting your Aventi account does not cancel a subscription billed through Apple or Google. Cancel it separately through your store subscription settings to stop future charges.
        </p>
      </article>
    </div>
  );
}
