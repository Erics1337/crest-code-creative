'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/motion';

export function BusinessIntroSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <FadeIn>
        <div className="grid md:grid-cols-2 gap-12 items-center relative">
          <div className="relative aspect-square">
            <Image
              src="/images/client-meeting.jpg"
              alt="Eric Swanson - Founder of Crest Code"
              fill
              className="object-cover rounded-2xl shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Big Tech Experience, Local Focus</h2>
            <p className="text-lg text-gray-600 mb-4">
              At Crest Code, we bring Silicon Valley quality web development to the Gunnison Valley. 
              Having worked with tech companies from Denver to New York, we understand what makes digital products successful at scale.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Now, we&apos;re applying that expertise to help local businesses thrive in the digital landscape. 
              Our mission is to give Gunnison Valley businesses access to the same high-quality web solutions used by industry leaders, 
              but tailored to our unique mountain community.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">Learn About Our Approach</Link>
            </Button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
