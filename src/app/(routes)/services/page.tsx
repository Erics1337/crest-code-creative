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
              {service.href.startsWith('/') ? (
                <Link href={service.href} className="block h-full group">
                  <div className="bg-white rounded-2xl shadow-sm p-8 h-full group-hover:shadow-md transition-all duration-300 border border-transparent group-hover:border-primary/10" id={service.id}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        {service.icon}
                      </div>
                      <h2 className="text-2xl font-semibold group-hover:text-primary transition-colors">{service.title}</h2>
                    </div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="space-y-4">
                      {serviceDetails[service.id as ServiceType].features.map((feature: string, index: number) => (
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
                </Link>
              ) : (
                <div className="bg-white rounded-2xl shadow-sm p-8 h-full" id={service.id}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      {service.icon}
                    </div>
                    <h2 className="text-2xl font-semibold">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-4">
                    {serviceDetails[service.id as ServiceType].features.map((feature: string, index: number) => (
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
              )}
            </FadeInStaggerItem>
          ))}
        </div>
      </FadeInStagger>

      {/* Process Overview */}
      {/* Process Overview */}
      <FadeIn className="mb-32">
        <div className="relative overflow-hidden bg-slate-50 rounded-3xl p-8 md:p-16 isolate border border-slate-100 shadow-sm">
          {/* Background Gradients */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10" />

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">How We Bring Your Vision to Life</h2>
            <p className="text-lg text-slate-600">
              Our proven process ensures transparency, collaboration, and exceptional results at every stage of your project.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-teal-500/20 via-blue-500/20 to-purple-500/20" />

            {process.map((step, index) => (
              <div key={step.title} className="relative group">
                <div className="relative flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 z-10">
                    <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-teal-500 to-blue-600">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-teal-600 transition-colors">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Technologies */}
      <FadeInStagger className="mb-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Powered by Modern Tech</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We use the latest tools and frameworks to build fast, secure, and scalable solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech) => (
            <FadeInStaggerItem key={tech.name}>
              <div className="h-full bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">{tech.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{tech.description}</p>
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
    description: 'Custom, responsive websites that capture the unique character of your business.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    href: '/services/web-design',
    id: 'web-design'
  },
  {
    title: 'Software Development',
    description: 'Advanced technical solutions that give your business a competitive edge in the digital landscape.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    href: '/services/software-development',
    id: 'software-development'
  },
  {
    title: 'AI Solutions',
    description: 'Agentic chatbots and automations that boost sales, support customers, and streamline operations.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a4 4 0 00-4 4v1H6a2 2 0 00-2 2v4a6 6 0 006 6h4a6 6 0 006-6V9a2 2 0 00-2-2h-2V6a4 4 0 00-4-4zm-3 9h6m-6 3h4" />
      </svg>
    ),
    href: '#',
    id: 'ai-solutions'
  },
  {
    title: 'Mobile Apps',
    description: 'Cross-platform React Native apps for iOS and Android to reach customers on the go.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2zm5 14h.01" />
      </svg>
    ),
    href: '/services/mobile-apps',
    id: 'mobile-apps'
  },
  {
    title: 'Business Consulting',
    description: 'Strategic guidance to help your Crested Butte business thrive in the digital age.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    href: '#',
    id: 'consulting'
  },
  {
    title: 'n8n Business Automations',
    description: 'Streamline your operations with custom automated workflows that save time and reduce errors.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    href: '/services/n8n-automations',
    id: 'n8n-automations'
  }
];

type ServiceType = 'web-design' | 'software-development' | 'ai-solutions' | 'mobile-apps' | 'consulting' | 'n8n-automations';

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
  'mobile-apps': {
    features: [
      'React Native cross-platform apps for iOS and Android',
      'Push notifications and real-time updates',
      'Offline support optimized for mountain connectivity',
      'App Store and Google Play submission support',
      'Booking, loyalty, and payments integrations',
      'Secure auth and role-based access',
      'Cloud backend integration and analytics',
      'Automated testing and QA'
    ]
  },
  'ai-solutions': {
    features: [
      'Custom AI chatbots with agentic workflows to take actions on behalf of users',
      'E-commerce assistants for product discovery, cart building, checkout guidance, and order status',
      'Business automations across CRM, inventory, scheduling, and support systems',
      'RAG assistants that answer questions using your documents, website, and knowledge base',
      'Multi-channel experiences: website widgets, SMS, WhatsApp, and social DMs',
      'Human handoff, transcripts, and analytics dashboards to monitor performance',
      'Secure auth, roles, and audit logs with privacy-first data handling',
      'Integrations with Shopify, Stripe, Slack, Google Workspace, and Zapier',
      'On-premise or cloud deployment options to fit your compliance needs'
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
  },
  'n8n-automations': {
    features: [
      'Lead management automation to capture and qualify leads instantly',
      'Social media scheduling and cross-posting automation',
      'Automated invoicing and payment reconciliation',
      'Customer support ticketing and response automation',
      'CRM synchronization (HubSpot, Salesforce, Pipedrive)',
      'Custom workflow design tailored to your specific business processes',
      'Integration with over 200+ apps and services',
      'Error handling and monitoring for reliable operations',
      'Data transformation and migration between systems',
      'Scheduled tasks and cron job replacements'
    ]
  }
};

const process = [
  {
    title: 'Discovery & Strategy',
    description: 'We start by diving deep into your business goals, target audience, and market challenges to build a solid foundation.'
  },
  {
    title: 'Design & Prototyping',
    description: 'We create interactive mockups and visual designs that align with your brand, ensuring you love the look before we build.'
  },
  {
    title: 'Development',
    description: 'Our expert developers bring the designs to life using clean, modern code that ensures speed, security, and scalability.'
  },
  {
    title: 'Launch & Growth',
    description: 'We handle the technical launch and provide ongoing support and analytics to help your digital presence grow.'
  }
];

const technologies = [
  {
    name: 'Modern Web',
    description: 'React, Next.js, TypeScript for fast, reliable websites',
    icon: (
      <svg className="w-8 h-8 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    name: 'E-commerce',
    description: 'Shopify, WooCommerce for online sales',
    icon: (
      <svg className="w-8 h-8 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  },
  {
    name: 'Cloud Services',
    description: 'AWS, Google Cloud for scalable solutions',
    icon: (
      <svg className="w-8 h-8 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  },
  {
    name: 'Analytics',
    description: 'Data-driven insights for your business',
    icon: (
      <svg className="w-8 h-8 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];
