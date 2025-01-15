import type { Metadata } from 'next';
import { Inter, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/client-toaster';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
});

export const metadata: Metadata = {
  title: 'Crest Code Creative | Web Design & Development in Crested Butte',
  description: 'Custom web design and development services in Crested Butte, Colorado. We create beautiful, functional websites and applications tailored to your needs.',
  keywords: 'web design, web development, Crested Butte, Colorado, software development, mobile apps',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${sourceSans.variable} font-sans`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
