'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/motion';

export function LocalFocusSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <FadeIn>
        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
          <div className="absolute inset-0">
            <Image
              src="/images/STS_8082-jpg-ebf9f5b1.webp"
              alt="Gunnison Valley Landscape"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
          </div>
          <div className="relative z-10 px-8 py-24 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Proudly Serving The Gunnison Valley</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              As a local business, we understand the unique challenges and opportunities of our 
              mountain community. Let&apos;s work together to bring your digital vision to life.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
