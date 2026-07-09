import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yoga Flow Terms of Service | Crest Code',
  description: 'Terms of Service for the Yoga Flow mobile application.',
};

const sections = [
  {
    title: 'Use of the App',
    body: 'Yoga Flow provides tools for creating and following yoga practices. The app is for general wellness and informational purposes only. It is not medical advice. Stop any practice that causes pain or discomfort and consult a qualified professional for health concerns.',
  },
  {
    title: 'Accounts',
    body: 'You are responsible for keeping your account secure and for activity that happens through your account. You can delete your account from Settings.',
  },
  {
    title: 'Purchases',
    body: 'Yoga Flow Pro purchases are processed by the applicable app store and managed through RevenueCat. Yoga Flow Pro includes unlimited AI sequence generation while your subscription is active. One-time credit packs add a fixed number of AI sequence generations and do not renew. App store refund and subscription rules apply.',
  },
  {
    title: 'Generated Content',
    body: 'AI-generated sequences may be incomplete, inaccurate, or inappropriate for your specific body, ability, or medical history. Review each practice before starting and use your judgment.',
  },
  {
    title: 'Availability',
    body: 'We may update, change, suspend, or discontinue parts of the app at any time.',
  },
];

export default function YogaFlowTermsPage() {
  return (
    <div className="bg-background py-16 sm:py-24">
      <article className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-primary">Yoga Flow</p>
        <h1 className="mt-2 text-4xl font-bold text-foreground">Terms of Service</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: June 9, 2026</p>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
          By using Yoga Flow, you agree to these terms.
        </p>

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
              Questions about these terms can be sent to{' '}
              <a className="font-medium text-primary hover:underline" href="mailto:erics1337@gmail.com">
                erics1337@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
