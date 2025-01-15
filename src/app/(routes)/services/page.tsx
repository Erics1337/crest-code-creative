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
            <FadeInStaggerItem key={service.title}>
              <div className="bg-white rounded-2xl shadow-sm p-8" id={service.href.split('#')[1]}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-semibold">{service.title}</h2>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-4">
                  {serviceDetails[service.href.split('#')[1] as ServiceType].features.map((feature: string, index: number) => (
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
            Let&apos;s discuss your project and create something amazing together.
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
    title: 'Web Design',
    description: 'Custom, responsive websites that capture the unique character of your Crested Butte business.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    href: '#web-design'
  },
  {
    title: 'Software Development',
    description: 'Advanced technical solutions that give your business a competitive edge in the digital landscape.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    href: '#software-development'
  },
  {
    title: 'Business Consulting',
    description: 'Strategic guidance to help your Crested Butte business thrive in the digital age.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    href: '#consulting'
  }
];

type ServiceType = 'web-design' | 'software-development' | 'consulting';

const serviceDetails: Record<ServiceType, { features: string[] }> = {
  'web-design': {
    features: [
      'Custom website design tailored to Crested Butte\'s unique mountain town aesthetic',
      'Responsive design optimized for all devices - mobile, tablet, and desktop',
      'SEO optimization to help local customers find your business',
      'Content management systems (WordPress, Shopify) for easy updates',
      'High-performance websites that load quickly even with slower mountain internet',
      'Integration with booking systems and payment processors',
      'Local business listing optimization (Google My Business, Yelp)',
      'Social media integration and sharing capabilities',
      'Photo galleries and virtual tours for hospitality businesses',
      'Seasonal content management for ski season/summer season transitions'
    ]
  },
  'software-development': {
    features: [
      'Custom booking and reservation systems for tourism businesses',
      'Point of sale (POS) system integration for retail and restaurants',
      'Inventory management systems for equipment rental shops',
      'Custom API development for third-party integrations',
      'E-commerce solutions for local artisans and retailers',
      'Mobile app development for business management',
      'Real-time availability and scheduling systems',
      'Customer relationship management (CRM) system integration',
      'Automated email marketing and notification systems',
      'Data analytics and reporting dashboards'
    ]
  },
  'consulting': {
    features: [
      'Digital strategy planning for seasonal business cycles',
      'User experience optimization for tourist-focused websites',
      'Market research and competitive analysis in the mountain town context',
      'Technical audit of existing systems and websites',
      'Digital marketing strategy for reaching tourists and locals',
      'Performance optimization for existing websites',
      'Security assessment and implementation',
      'Training and support for staff on new systems',
      'Growth strategy consulting for expanding businesses',
      'Data-driven business insights and recommendations'
    ]
  }
};

const process = [
  {
    title: 'Discovery',
    description: 'Understanding your business goals, target audience, and unique challenges in the Crested Butte market'
  },
  {
    title: 'Planning',
    description: 'Creating a detailed roadmap tailored to your business needs and seasonal considerations'
  },
  {
    title: 'Development',
    description: 'Building your solution with regular check-ins and feedback integration'
  },
  {
    title: 'Launch & Support',
    description: 'Seamless deployment and ongoing support to ensure your success'
  }
];

const technologies = [
  {
    name: 'Modern Web',
    description: 'React, Next.js, TypeScript for fast, reliable websites',
    icon: '⚡'
  },
  {
    name: 'E-commerce',
    description: 'Shopify, WooCommerce for online sales',
    icon: '🛍️'
  },
  {
    name: 'Cloud Services',
    description: 'AWS, Google Cloud for scalable solutions',
    icon: '☁️'
  },
  {
    name: 'Analytics',
    description: 'Data-driven insights for your business',
    icon: '📊'
  }
];
