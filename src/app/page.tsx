import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/motion';
import { AnimatedProjectBox } from '@/components/AnimatedProjectBox';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { TechnologySection } from '@/components/sections/TechnologySection';
import { LocalFocusSection } from '@/components/sections/LocalFocusSection';
import { getFeaturedProjects } from '@/lib/mdx';
import { CTASection } from '@/components/sections/CTASection';
import { BusinessIntroSection } from '@/components/sections/BusinessIntroSection';
import { N8nAutomationSection } from '@/components/sections/N8nAutomationSection';

import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-20 z-10">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/crested-butte-landscape.webp"
            alt="Crested Butte Landscape"
            fill
            sizes="100vw"
            quality={90}
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJyEwPNRCQDzUQkY+Sjp6VUtXWlZ2eot8f42IjY6RkqGys7W+wMHQ2f/2wBDARUXFyMFIxUZGVdENHw3h4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4f/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-900/90" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
          <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 items-center min-h-[60vh]">
            <FadeIn delay={0.2}>
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-white/90 mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                  </span>
                  Accepting New Projects for 2025
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight drop-shadow-lg">
                  Crafting Websites that <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Inspire</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Perform</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl drop-shadow-md">
                  Crest Code helps businesses thrive online with beautiful, functional websites
                  and applications tailored to your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="rounded-full text-lg px-8 h-14 bg-white text-slate-900 hover:bg-gray-100 shadow-xl hover:scale-105 transition-all duration-300">
                    <Link href="/contact">
                      Schedule a Free Consultation
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="rounded-full text-lg px-8 h-14 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                    <Link href="/portfolio">
                      View Our Work
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeIn>

            {/* Featured Project Image */}
            <div className="relative hidden lg:block perspective-1000 z-30 translate-y-24">
              <div className="transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 ease-out">
                <AnimatedProjectBox
                  variant="website"
                  imageSrc="/clients/earthy-soul-living.webp"
                  imageAlt="Earthy Soul Living Website"
                  urlText="earthysoulliving.com"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Curved bottom SVG */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden z-20">
          <svg
            viewBox="0 0 1200 120"
            className="relative w-full h-[120px] text-teal-50"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M600,112C400,112,200,88,0,64V120H1200V64C1000,88,800,112,600,112Z"
            />
          </svg>
        </div>
      </section>

      {/* Business Intro Section */}
      <BusinessIntroSection />

      {/* n8n Automation Section */}
      <N8nAutomationSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Local Focus Section */}
      <LocalFocusSection />

      {/* Featured Projects Section */}
      <FeaturedProjects projects={featuredProjects} />

      {/* Technology Section */}
      <TechnologySection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />


    </div>
  );
}
