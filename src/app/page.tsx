import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/ui/motion';
import { AnimatedProjectBox } from '@/components/AnimatedProjectBox';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TestimonialCard } from '@/components/testimonials/testimonial-card';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { TechnologySection } from '@/components/sections/TechnologySection';
import { LocalFocusSection } from '@/components/sections/LocalFocusSection';
import { getFeaturedProjects } from '@/lib/mdx';
import { CTASection } from '@/components/sections/CTASection';
import { BusinessIntroSection } from '@/components/sections/BusinessIntroSection';

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="flex flex-col gap-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/crested-butte-landscape.webp"
            alt="Crested Butte Landscape"
            fill
            sizes="100vw"
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJyEwPNRCQDzUQkY+Sjp6VUtXWlZ2eot8f42IjY6RkqGys7W+wMHQ2f/2wBDARUXFyMFIxUZGVdENHw3h4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4f/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1fr,auto] gap-4 items-center min-h-[60vh]">
            <FadeIn delay={0.2}>
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Crafting Websites that Inspire and Perform
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  Crest Code helps businesses thrive online with beautiful, functional websites 
                  and applications tailored to your needs.
                </p>
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Schedule a Free Consultation
                  </Link>
                </Button>
              </div>
            </FadeIn>
            
            {/* Featured Project Image */}
            <div className="relative" style={{ marginBottom: '-120px' }}>
              <AnimatedProjectBox 
                variant="website"
                imageSrc="/clients/earthy-soul-living.webp"
                imageAlt="Earthy Soul Living Website"
                urlText="earthysoulliving.com"
              />
            </div>
          </div>
        </div>

        {/* Curved bottom SVG */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            className="relative w-full h-[120px]"
            preserveAspectRatio="none"
          >
            <path
              fill="white"
              d="M600,112C400,112,200,88,0,64V120H1200V64C1000,88,800,112,600,112Z"
            />
          </svg>
        </div>
      </section>

      {/* Business Intro Section */}
      <BusinessIntroSection />

      {/* Local Focus Section */}
      <LocalFocusSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Featured Projects Section */}
      <FeaturedProjects projects={featuredProjects} />

      {/* Technology Section */}
      <TechnologySection />

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-lg text-gray-600">
                Don&apos;t just take our word for it - hear from some of our satisfied clients
              </p>
            </div>
          </FadeIn>
          <FadeInStagger>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <FadeInStaggerItem key={testimonial.author}>
                  <TestimonialCard {...testimonial} />
                </FadeInStaggerItem>
              ))}
            </div>
          </FadeInStagger>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />


    </div>
  );
}

const testimonials = [
  {
    quote: "Eric's attention to detail and understanding of our needs resulted in a website that perfectly represents our brand.",
    author: 'Chelsey Wilson',
    role: 'Owner',
    company: 'Earthy Soul Wellness',
  },
  {
    quote: 'Working with Crest Code was a game-changer for our business. Our online bookings have increased significantly.',
    author: 'Mike Thompson',
    role: 'Founder',
    company: 'Mountain Bike Adventures',
  },
  {
    quote: "The website exceeded our expectations. It's not just beautiful, but also incredibly functional and easy to manage.",
    author: 'Lisa Martinez',
    role: 'Manager',
    company: 'Local Food Market',
  },
];
