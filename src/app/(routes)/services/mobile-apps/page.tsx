import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function MobileAppsPage() {
  const benefits = [
    {
      title: 'Wider Reach',
      icon: '🌎',
      description: 'Expand your business beyond the boundaries of your physical location by reaching customers directly on their mobile devices.'
    },
    {
      title: 'Cost Effective',
      icon: '💰',
      description: 'Efficient development process using React Native ensures faster delivery and lower development costs.'
    },
    {
      title: 'Cross Platform',
      icon: '📱',
      description: 'One codebase for both iOS and Android means maintaining consistency while reducing costs.'
    },
    {
      title: 'Enhanced Services',
      icon: '⭐️',
      description: 'Offer unique, specialized services that set your business apart in the Gunnison Valley.'
    }
  ];

  const features = [
    {
      title: 'Custom Mobile Solutions',
      description: 'Tailored mobile applications that align with your business goals and customer needs.',
      capabilities: [
        'Booking and reservation systems',
        'Customer loyalty programs',
        'Mobile payment integration',
        'Real-time notifications',
        'Offline functionality for mountain areas'
      ]
    },
    {
      title: 'Technical Excellence',
      description: 'Built with industry-leading technologies for reliable, high-performance applications.',
      capabilities: [
        'React Native development',
        'Cross-platform compatibility',
        'Secure data management',
        'Cloud backend integration',
        'Automated testing and quality assurance'
      ]
    },
    {
      title: 'Local Business Focus',
      description: 'Specialized features for Crested Butte and Gunnison Valley businesses.',
      capabilities: [
        'Trail status and conditions updates',
        'Local event integration',
        'Seasonal service scheduling',
        'Location-based features',
        'Integration with local business networks'
      ]
    }
  ];

  const process = [
    {
      title: 'Discovery',
      description: 'Understanding your business needs and target audience',
      icon: '🎯'
    },
    {
      title: 'Design',
      description: 'Creating intuitive user interfaces and experiences',
      icon: '✏️'
    },
    {
      title: 'Development',
      description: 'Building your app with React Native for both iOS and Android',
      icon: '⚛️'
    },
    {
      title: 'Testing',
      description: 'Ensuring quality and reliability across devices',
      icon: '✅'
    },
    {
      title: 'Launch',
      description: 'Publishing to App Store and Google Play',
      icon: '🚀'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden">
        <Image
          src="/images/mobile-outside.jpg"
          alt="Mobile Development Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Mobile App Development for Small Businesses
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            You dont need to be a big company to have a mobile app anymore. With advancements in technology, it is now more accessible than ever to reach your customers on the go. Transform your company&apos;s reach with cost-effective, custom mobile solutions
          </p>
          <Button size="lg" asChild className="bg-white text-primary hover:bg-gray-100">
            <Link href="/contact">Start Your Mobile Journey</Link>
          </Button>
        </div>
                {/* Curved bottom SVG */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
          <svg
            viewBox="0 0 1200 120"
            className="relative w-full h-[120px]"
            preserveAspectRatio="none"
          >
            <path
              fill="rgb(249 250 251)"
              d="M600,112C400,112,200,88,0,64V120H1200V64C1000,88,800,112,600,112Z"
            />
          </svg>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-16">
            Why Choose Mobile?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-16">
            Services & Capabilities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.capabilities.map((capability, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-16">
            Development Process
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <div key={step.title} className="relative">
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/20" />
                  )}
                  <div className="relative">
                    <div className="text-4xl mb-4 text-center">{step.icon}</div>
                    <h3 className="text-xl font-bold text-center mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-center text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Highlight */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold mb-8">Proven Expertise</h2>
            <p className="text-xl mb-8">
              With experience in developing successful mobile applications like Social Brain Contacts, 
              I bring proven expertise in creating innovative, user-friendly mobile solutions. Using React Native 
              and modern development practices, I deliver efficient, cost-effective applications that help 
              businesses thrive in the digital age.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">2+</div>
                <p className="text-gray-400">Years React Native Experience</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <p className="text-gray-400">App Downloads</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-gray-400">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-8">Ready to Go Mobile?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let&apos;s create a mobile app that helps your business reach new heights in the Gunnison Valley.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Schedule a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
