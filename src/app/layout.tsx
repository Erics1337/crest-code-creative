import type { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/next";
import { Archivo, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/client-toaster';

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.crestcodecreative.com'),
  title: 'Crest Code | Web Design & Development in Crested Butte & Gunnison Valley Colorado',
  description: 'Custom web design and development services in Crested Butte & Gunnison Valley, Colorado. We create beautiful, functional websites and applications tailored to your needs.',
  keywords: 'web design, web development, Crested Butte, Gunnison Valley, Colorado, software development, mobile apps',
  icons: {
    icon: '/crest-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${archivo.variable} ${sourceSerif.variable} font-sans`} suppressHydrationWarning>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-[72px]">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
