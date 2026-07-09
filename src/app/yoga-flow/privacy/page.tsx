import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yoga Flow Privacy Policy | Crest Code',
  description: 'Privacy Policy for the Yoga Flow mobile application.',
};

type PrivacySection =
  | { title: string; body: string }
  | { title: string; items: string[] };

const sections: PrivacySection[] = [
  {
    title: 'Information We Collect',
    items: [
      'Account information, such as your email address and profile name, when you create or recover an account.',
      'App content and settings, such as saved flows, notification preferences, privacy preferences, and generated practice settings.',
      'Purchase information needed to unlock Yoga Flow Pro, provided through Apple, Google, and RevenueCat. We do not receive your full payment card details.',
      'AI generation requests, including the practice settings and prompt text you submit when asking Yoga Flow to generate a sequence.',
      'Basic diagnostics and service logs needed to keep authentication, purchases, and generation features working.',
    ],
  },
  {
    title: 'How We Use Information',
    body: 'We use this information to provide the app, sync your account, restore purchases, generate yoga sequences, improve reliability, respond to support requests, and comply with legal obligations.',
  },
  {
    title: 'Service Providers',
    body: 'Yoga Flow uses third-party service providers to operate the app, including Supabase for authentication and storage, RevenueCat for purchase entitlement management, and OpenAI for AI-assisted sequence generation.',
  },
  {
    title: 'Sharing',
    body: 'We do not sell your personal information. We share information only with service providers that help operate Yoga Flow, when you ask us to do so, or when required by law.',
  },
  {
    title: 'Your Choices',
    body: 'You can update profile, notification, and privacy settings in the app. You can export or delete account data from Settings. For help, contact support at erics1337@gmail.com.',
  },
];

export default function YogaFlowPrivacyPage() {
  return (
    <div className="bg-background py-16 sm:py-24">
      <article className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-primary">Yoga Flow</p>
        <h1 className="mt-2 text-4xl font-bold text-foreground">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: June 9, 2026</p>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
          Yoga Flow helps people create and practice yoga sequences. This policy explains what information the app handles and how it is used.
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
              {'items' in section ? (
                <ul className="mt-4 list-disc space-y-3 pl-6 leading-relaxed text-muted-foreground">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 leading-relaxed text-muted-foreground">{section.body}</p>
              )}
            </section>
          ))}

          <section>
            <h2 className="text-2xl font-bold text-foreground">Contact</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Questions about this policy can be sent to{' '}
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
