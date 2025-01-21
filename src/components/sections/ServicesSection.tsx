'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/ui/motion';
import { ServiceCard } from '@/components/ui/service-card';
import { ComputerDesktopIcon, CodeBracketIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/solid';

export function ServicesSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  useEffect(() => {
    let scrollHandler: number;

    const handleScroll = () => {
      if (!ref.current) return;
      const element = ref.current as HTMLElement;
      const rect = element.getBoundingClientRect();
      const scrollProgress = 1 - (rect.top + rect.height) / (window.innerHeight + rect.height);
      
      if (scrollProgress >= 0 && scrollProgress <= 1) {
        controls.set({
          y: scrollProgress * 100
        });
      }
    };

    if (typeof window !== 'undefined') {
      scrollHandler = window.requestAnimationFrame(() => handleScroll());
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
        window.cancelAnimationFrame(scrollHandler);
      }
    };
  }, [controls]);

  return (
    <section 
      ref={ref}
      className="bg-gray-50 py-20 relative overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        animate={controls}
        initial={{ y: 0 }}
        style={{ top: '-100px', height: 'calc(100% + 200px)' }}
      >
        <Image
          src="/assets/08.svg"
          alt=""
          fill
          className="object-cover opacity-[0.15]"
          priority
        />
      </motion.div>
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative"
        animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        </FadeIn>
        <FadeInStagger>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInStaggerItem>
              <ServiceCard
                title="Web Design"
                icon={<ComputerDesktopIcon className="w-6 h-6 text-primary" />}
                href="/services/web-design"
                shortDescription="Modern, responsive websites that capture your brand's essence"
                features={[
                  "Custom modern designs that reflect your brand",
                  "Responsive layouts for all devices",
                  "User experience optimization",
                  "Brand-aligned visual elements"
                ]}
                fullDescription="Transform your online presence with our expert web design services. We create stunning, modern websites that not only look great but also drive results. Our designs are carefully crafted to be responsive across all devices while maintaining your brand's unique identity and message."
              />
            </FadeInStaggerItem>

            <FadeInStaggerItem>
              <ServiceCard
                title="Full Stack Development"
                icon={<CodeBracketIcon className="w-6 h-6 text-primary" />}
                href="/services/software-development"
                shortDescription="End-to-end software solutions for your business needs"
                features={[
                  "Custom web applications",
                  "API development and integration",
                  "Database design and optimization",
                  "Cloud infrastructure setup"
                ]}
                fullDescription="From concept to deployment, we build robust full-stack solutions that power your business. Our expertise spans front-end interfaces, back-end systems, and everything in between. We use cutting-edge technologies and best practices to ensure your software is scalable, secure, and maintainable."
              />
            </FadeInStaggerItem>

            <FadeInStaggerItem>
              <ServiceCard
                title="Mobile App Development"
                icon={<DevicePhoneMobileIcon className="w-6 h-6 text-primary" />}
                href="/services/mobile-apps"
                shortDescription="Native and cross-platform mobile applications"
                features={[
                  "iOS and Android development",
                  "Cross-platform solutions",
                  "Progressive Web Apps (PWA)",
                  "App Store optimization"
                ]}
                fullDescription="Extend your reach with custom mobile applications that engage users on their preferred devices. We specialize in both native and cross-platform development, ensuring your app delivers a seamless experience while maintaining performance and functionality across all platforms."
              />
            </FadeInStaggerItem>
          </div>
        </FadeInStagger>
      </motion.div>
    </section>
  );
}
