import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { TestimonialCard } from '@/components/testimonials/testimonial-card';
import { PortfolioCard } from '@/components/portfolio/portfolio-card';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/ui/motion';

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/crested-butte-landscape.jpg"
            alt="Crested Butte Landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn delay={0.2}>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Crafting Websites that Inspire and Perform
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Crest Code Creative helps businesses thrive online with beautiful, functional websites 
                and applications tailored to your needs.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Schedule a Free Consultation
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square">
              <Image
                src="/images/eric-headshot.jpg"
                alt="Eric Swanson - Founder of Crest Code Creative"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Hi, I&apos;m Eric Swanson</h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 5 years of experience in web development and design, I&apos;ve helped businesses 
                of all sizes establish their digital presence. Based in beautiful Crested Butte, 
                I combine technical expertise with a deep understanding of our local community&apos;s needs.
              </p>
              <Button variant="outline" asChild>
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          </FadeIn>
          <FadeInStagger>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <FadeInStaggerItem key={service.title}>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link href={service.href} className="text-primary hover:underline">
                      Learn more →
                    </Link>
                  </div>
                </FadeInStaggerItem>
              ))}
            </div>
          </FadeInStagger>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600">
              Take a look at some of our recent work
            </p>
          </div>
        </FadeIn>
        <FadeInStagger>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <FadeInStaggerItem key={project.title}>
                <PortfolioCard {...project} />
              </FadeInStaggerItem>
            ))}
          </div>
        </FadeInStagger>
        <FadeIn delay={0.4}>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </FadeIn>
      </section>

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

      {/* Local Focus Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/images/crested-butte-town.jpg"
                alt="Crested Butte Town"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="relative z-10 px-8 py-16 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Proudly Serving Crested Butte</h2>
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

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <div className="bg-primary text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Create Something Amazing Together</h2>
            <p className="text-lg mb-8">
              Ready to take your digital presence to the next level? Let&apos;s discuss your project.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

const services = [
  {
    title: 'Web Design & Development',
    description: 'Custom websites built to reflect your brand and drive results.',
    href: '/services#web-design',
    icon: (
      <svg
        className="w-6 h-6 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Full-Stack Software',
    description: 'Scalable solutions for web and business automation.',
    href: '/services#software',
    icon: (
      <svg
        className="w-6 h-6 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: 'Mobile App Development',
    description: 'User-friendly mobile apps that bring your ideas to life.',
    href: '/services#mobile',
    icon: (
      <svg
        className="w-6 h-6 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Custom Web Design',
    description: 'Bespoke web designs crafted to meet your vision.',
    href: '/services#custom',
    icon: (
      <svg
        className="w-6 h-6 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

const featuredProjects = [
  {
    title: 'Earthy Soul Wellness',
    description: 'A modern video streaming platform for yoga and wellness content.',
    imageUrl: '/images/portfolio/earthy-soul.jpg',
    tags: ['Next.js', 'Stripe', 'Video Streaming'],
    href: '/portfolio/earthy-soul',
  },
  {
    title: 'Mountain Bike Adventures',
    description: 'Custom booking system for guided mountain bike tours.',
    imageUrl: '/images/portfolio/mountain-bike.jpg',
    tags: ['React', 'Node.js', 'Booking System'],
    href: '/portfolio/mountain-bike',
  },
  {
    title: 'Local Food Market',
    description: 'E-commerce platform connecting local farmers with customers.',
    imageUrl: '/images/portfolio/food-market.jpg',
    tags: ['E-commerce', 'WordPress', 'WooCommerce'],
    href: '/portfolio/food-market',
  },
];

const testimonials = [
  {
    quote: "Eric's attention to detail and understanding of our needs resulted in a website that perfectly represents our brand.",
    author: 'Sarah Johnson',
    role: 'Owner',
    company: 'Earthy Soul Wellness',
  },
  {
    quote: 'Working with Crest Code Creative was a game-changer for our business. Our online bookings have increased significantly.',
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
