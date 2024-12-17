import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/ui/motion';

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 mb-12">
          Comprehensive web solutions tailored to your business needs.
        </p>
      </FadeIn>

      {/* Main Services */}
      <FadeInStagger className="mb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <FadeInStaggerItem key={service.title} id={service.href.split('#')[1]}>
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-semibold">{service.title}</h2>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-4">
                  {serviceDetails[service.href.split('#')[1]].features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1">
                        <svg
                          className="w-5 h-5 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-600">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInStaggerItem>
          ))}
        </div>
      </FadeInStagger>

      {/* Process Overview */}
      <FadeIn className="mb-20">
        <div className="bg-primary/5 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-8 text-center">Our Development Process</h2>
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
        </div>
      </FadeIn>

      {/* Technologies */}
      <FadeInStagger className="mb-20">
        <h2 className="text-2xl font-semibold mb-8 text-center">Technologies We Use</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech) => (
            <FadeInStaggerItem key={tech.name}>
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="font-semibold mb-1">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            </FadeInStaggerItem>
          ))}
        </div>
      </FadeInStagger>

      {/* CTA Section */}
      <FadeIn>
        <div className="bg-primary/5 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our comprehensive web solutions.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </FadeIn>
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

const serviceDetails = {
  'web-design': {
    features: [
      'Custom website design and development',
      'Responsive layouts for all devices',
      'SEO optimization and best practices',
      'Performance optimization',
      'Content management systems',
      'E-commerce solutions',
    ],
  },
  'software': {
    features: [
      'Custom web applications',
      'API development and integration',
      'Database design and optimization',
      'Cloud infrastructure setup',
      'Business process automation',
      'Third-party integrations',
    ],
  },
  'mobile': {
    features: [
      'Native iOS and Android apps',
      'Cross-platform development',
      'Progressive Web Apps (PWA)',
      'App Store optimization',
      'Push notifications',
      'Offline functionality',
    ],
  },
  'custom': {
    features: [
      'Brand-aligned design systems',
      'UI/UX design',
      'Interactive prototypes',
      'Accessibility compliance',
      'Design system documentation',
      'Brand identity integration',
    ],
  },
};

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

const technologies = [
  {
    name: 'React',
    icon: '⚛️',
    description: 'Modern UI development',
  },
  {
    name: 'Node.js',
    icon: '🟢',
    description: 'Server-side solutions',
  },
  {
    name: 'TypeScript',
    icon: '📘',
    description: 'Type-safe development',
  },
  {
    name: 'Next.js',
    icon: '▲',
    description: 'Full-stack framework',
  },
  {
    name: 'Tailwind',
    icon: '🎨',
    description: 'Utility-first CSS',
  },
  {
    name: 'PostgreSQL',
    icon: '🐘',
    description: 'Reliable database',
  },
  {
    name: 'AWS',
    icon: '☁️',
    description: 'Cloud infrastructure',
  },
  {
    name: 'Docker',
    icon: '🐳',
    description: 'Container platform',
  },
];
