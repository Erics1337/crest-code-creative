import { Button } from '@/components/ui/button';
import { PortfolioCard } from '@/components/portfolio/portfolio-card';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/ui/motion';

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
        <p className="text-lg text-gray-600 mb-8">
          We&apos;re proud to showcase our diverse portfolio of successful projects. Explore our latest projects and see how we&apos;ve helped businesses succeed in the digital world.
        </p>
      </FadeIn>

      {/* Filter Tabs */}
      <FadeIn className="mb-12">
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="rounded-full"
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>
      </FadeIn>

      {/* Portfolio Grid */}
      <FadeInStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {projects.map((project) => (
          <FadeInStaggerItem key={project.title}>
            <PortfolioCard {...project} />
          </FadeInStaggerItem>
        ))}
      </FadeInStagger>

      {/* Process Section */}
      <FadeIn className="bg-primary/5 rounded-2xl p-8 mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Project Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <div key={step.title} className="relative">
              {index < process.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/20" />
              )}
              <div className="relative">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">{step.title}</h3>
                <p className="text-gray-600 text-center text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* CTA Section */}
      <FadeIn>
        <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We&apos;ve had the privilege of working with amazing clients. Let&apos;s create something amazing together. Our team is ready to bring your vision to life.
          </p>
          <Button asChild size="lg">
            <a href="/contact">Get Started Today</a>
          </Button>
        </div>
      </FadeIn>
    </div>
  );
}

const categories = [
  'All',
  'Web Development',
  'E-commerce',
  'Mobile Apps',
  'Branding',
  'UI/UX Design',
];

const process = [
  {
    title: 'Discovery',
    description: 'Understanding your goals and requirements through detailed consultation.',
  },
  {
    title: 'Planning',
    description: 'Creating a comprehensive roadmap for your project success.',
  },
  {
    title: 'Development',
    description: 'Building your solution with the latest technologies and best practices.',
  },
  {
    title: 'Launch',
    description: 'Thorough testing and deployment to ensure a smooth release.',
  },
];

const projects = [
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
  {
    title: 'Tech Innovators Hub',
    description: 'Community platform for tech professionals and startups.',
    imageUrl: '/images/portfolio/tech-hub.jpg',
    tags: ['Next.js', 'TypeScript', 'Community'],
    href: '/portfolio/tech-hub',
  },
  {
    title: 'Fitness Tracker Pro',
    description: 'Mobile app for tracking workouts and nutrition.',
    imageUrl: '/images/portfolio/fitness-app.jpg',
    tags: ['React Native', 'Firebase', 'Mobile App'],
    href: '/portfolio/fitness-tracker',
  },
  {
    title: 'Creative Agency Website',
    description: 'Modern website for a digital creative agency.',
    imageUrl: '/images/portfolio/agency.jpg',
    tags: ['Web Design', 'Animation', 'Branding'],
    href: '/portfolio/creative-agency',
  },
  {
    title: 'Real Estate Platform',
    description: 'Property listing and management system.',
    imageUrl: '/images/portfolio/real-estate.jpg',
    tags: ['React', 'Maps API', 'Dashboard'],
    href: '/portfolio/real-estate',
  },
  {
    title: 'Event Planning App',
    description: 'Mobile app for planning and managing events.',
    imageUrl: '/images/portfolio/event-app.jpg',
    tags: ['Mobile App', 'React Native', 'Calendar'],
    href: '/portfolio/event-planner',
  },
  {
    title: 'Restaurant Ordering',
    description: 'Online ordering system for restaurants.',
    imageUrl: '/images/portfolio/restaurant.jpg',
    tags: ['E-commerce', 'Payment', 'Dashboard'],
    href: '/portfolio/restaurant',
  },
];
