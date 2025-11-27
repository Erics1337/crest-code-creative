'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/ui/motion';
import { BoltIcon, CurrencyDollarIcon, RocketLaunchIcon } from '@heroicons/react/24/solid';

export function TechnologySection() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-gray-900 to-primary text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-y-0 right-0 w-full">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 50%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 50%)',
          }}
        >
          <Image
            src="/Geometric Stars Seamless Pattern.svg"
            alt="Background Pattern"
            fill
            className="object-cover opacity-30"
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
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 flex flex-col items-center text-center">
                <BoltIcon className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-bold mb-4">Rapid Development</h3>
                <p className="text-gray-200">
                  Modern frameworks and development tools allow us to build robust solutions in a fraction of the time.
                </p>
              </div>
            </FadeInStaggerItem>
            <FadeInStaggerItem>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 flex flex-col items-center text-center">
                <CurrencyDollarIcon className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-bold mb-4">Cost Effective</h3>
                <p className="text-gray-200">
                  Efficient processes and reusable components mean lower development costs without sacrificing quality.
                </p>
              </div>
            </FadeInStaggerItem>
            <FadeInStaggerItem>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 flex flex-col items-center text-center">
                <RocketLaunchIcon className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-bold mb-4">Future Ready</h3>
                <p className="text-gray-200">
                  Built with scalable, maintainable technologies that grow with your business needs.
                </p>
              </div>
            </FadeInStaggerItem>
          </div>
        </FadeInStagger>
        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/services">Explore Our Solutions</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
