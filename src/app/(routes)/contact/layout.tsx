import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Free Web Design Consultation | Crest Code Creative',
  description: 'Get in touch with Crest Code Creative for a free consultation. We help businesses in Crested Butte and Gunnison Valley build beautiful, effective websites and apps.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
