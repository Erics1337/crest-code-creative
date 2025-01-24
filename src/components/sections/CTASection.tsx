'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/motion';

export function CTASection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <FadeIn>
        <div className="relative bg-primary text-white rounded-[2rem] p-16 text-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 rotate-180">
              <Image
                src="/05.svg"
                alt="Background Pattern"
                fill
                className="object-cover"
                priority={false}
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Let&apos;s Create Something Amazing Together</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ready to take your digital presence to the next level? Let&apos;s discuss your project.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
