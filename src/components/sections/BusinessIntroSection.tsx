'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/motion';
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';

export function BusinessIntroSection() {
  return (
    <section className="pt-40 pb-24 bg-teal-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Column */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/client-meeting.jpg"
                  alt="Eric Swanson - Founder of Crest Code"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-bold text-lg">Eric Swanson</p>
                  <p className="text-white/80 text-sm">Founder, Crest Code</p>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-border/50 hidden md:block animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Located in</p>
                    <p className="font-bold text-gray-900">Gunnison Valley</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-wide uppercase mb-6">
                  Founder&apos;s Message
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                  Big Tech Experience, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Local Focus
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  At Crest Code, we bring world-class web development expertise directly to the Gunnison Valley.
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Having worked with major tech companies from Denver to New York, we understand exactly what makes digital products successful at scale. Now, we&apos;re applying that enterprise-level expertise to help our local business community thrive.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Enterprise-Grade Quality",
                    "Local Market Understanding",
                    "Scalable Solutions",
                    "Personalized Support"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Button size="lg" className="group text-lg px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-primary/25" asChild>
                  <Link href="/about">
                    Learn About Our Approach
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
