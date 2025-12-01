'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/ui/motion';
import { BoltIcon, CurrencyDollarIcon, RocketLaunchIcon } from '@heroicons/react/24/solid';

export function TechnologySection() {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-950">
      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl translate-y-1/2 pointer-events-none" />

      {/* Background Pattern */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          }}
        >
          <Image
            src="/Geometric Stars Seamless Pattern.svg"
            alt="Background Pattern"
            fill
            className="object-cover opacity-20"
            priority={false}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Modern Technology, Maximum Value</h2>
            <p className="text-lg mb-8">
              Using cutting-edge technologies and efficient development practices, we deliver 
              high-quality solutions faster and more cost-effectively than traditional approaches.
            </p>
          </div>
        </FadeIn> */}
        <FadeInStagger>
          <div className="grid md:grid-cols-3 gap-8">
            <FadeInStaggerItem>
              <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                <div className="p-3 bg-teal-500/10 rounded-xl mb-6 group-hover:bg-teal-500/20 transition-colors">
                  <BoltIcon className="w-10 h-10 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Rapid Development</h3>
                <p className="text-slate-300 leading-relaxed">
                  Modern frameworks and development tools allow us to build robust solutions in a fraction of the time.
                </p>
              </div>
            </FadeInStaggerItem>
            <FadeInStaggerItem>
              <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                <div className="p-3 bg-blue-500/10 rounded-xl mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <CurrencyDollarIcon className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Cost Effective</h3>
                <p className="text-slate-300 leading-relaxed">
                  Efficient processes and reusable components mean lower development costs without sacrificing quality.
                </p>
              </div>
            </FadeInStaggerItem>
            <FadeInStaggerItem>
              <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                <div className="p-3 bg-purple-500/10 rounded-xl mb-6 group-hover:bg-purple-500/20 transition-colors">
                  <RocketLaunchIcon className="w-10 h-10 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Future Ready</h3>
                <p className="text-slate-300 leading-relaxed">
                  Built with scalable, maintainable technologies that grow with your business needs.
                </p>
              </div>
            </FadeInStaggerItem>
          </div>
        </FadeInStagger>
        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <Button variant="secondary" size="lg" asChild className="rounded-full px-8">
              <Link href="/services">Explore Our Solutions</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
