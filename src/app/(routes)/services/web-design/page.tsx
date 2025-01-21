import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function WebDesignPage() {
  const marketingServices = [
    {
      title: 'Search Engine Optimization (SEO)',
      description: 'In-depth and nuanced strategies to improve your Google rankings and drive organic traffic to generate new customer leads.',
      icon: '🔍',
      features: [
        'Local SEO optimization for Gunnison Valley businesses',
        'Keyword research and content strategy',
        'Technical SEO implementation',
        'Regular performance monitoring and adjustments'
      ]
    },
    {
      title: 'Customer Relationship Management (CRM)',
      description: 'Keep track of your customers using industry-leading pre-built software solutions.',
      icon: '👥',
      features: [
        'Customer database management',
        'Lead tracking and nurturing',
        'Email marketing integration',
        'Customer support tools'
      ]
    },
    {
      title: 'Digital Marketing Suite',
      description: 'Comprehensive digital marketing tools to grow your business.',
      icon: '📱',
      features: [
        'Email campaign management',
        'Google Business Profile optimization',
        'Social media integration',
        'Review collection and management'
      ]
    },
    {
      title: 'Social Media Marketing',
      description: 'Targeted advertising on platforms where your customers spend their time.',
      icon: '🎯',
      features: [
        'Facebook & Instagram ad campaigns',
        'Content creation and scheduling',
        'Audience targeting and analysis',
        'Performance tracking and optimization'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Web Design for Gunnison Valley Businesses
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Beautiful, effective websites that help your business thrive in the heart of Colorado
          </p>
          <Button size="lg" asChild className="bg-white text-primary hover:bg-gray-100">
            <Link href="/contact">Get Started Today</Link>
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

      {/* DIY Website Builder Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-6">Build Your Own Website</h2>
            <p className="text-xl text-gray-600">
              Want to take control of your online presence? We&apos;ll help you get started with modern, easy-to-use website builders.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Guided Setup</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Platform selection (Wix, Squarespace, or Shopify)
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Template customization
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Content organization strategy
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Ongoing Support</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  One-on-one training sessions
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Technical support when needed
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Regular check-ins and optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-16">
            Complete Marketing Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {marketingServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-commerce Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">E-commerce Solutions</h2>
            <p className="text-xl text-gray-600">
              Launch your online store with a platform that&apos;s perfect for your business. From boutique shops to large inventories, we&apos;ll help you sell online effectively.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="text-2xl font-bold mb-4">Shopify</h3>
              <p className="text-gray-600 mb-6">Perfect for businesses ready to scale their online presence with a robust, feature-rich platform.</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Custom theme development
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Product catalog setup
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Payment gateway integration
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Shipping & tax configuration
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-4">Squarespace</h3>
              <p className="text-gray-600 mb-6">Ideal for creative businesses looking for beautiful designs with integrated e-commerce capabilities.</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Visual merchandising
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Inventory management
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Digital product sales
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Subscription management
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">⚡️</div>
              <h3 className="text-2xl font-bold mb-4">WooCommerce</h3>
              <p className="text-gray-600 mb-6">Open-source flexibility for WordPress users who want complete control over their online store.</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  WordPress integration
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Custom plugin development
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Advanced customization
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Performance optimization
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Additional E-commerce Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-4">Marketing Tools</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Abandoned cart recovery
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Email marketing integration
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Social media selling
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Technical Features</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    SSL security
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Mobile optimization
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Analytics & reporting
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Expertise Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold mb-8">Professional Expertise</h2>
            <p className="text-xl mb-12">
              We combine modern design principles with cutting-edge technology to create websites that stand out.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-2">⚡️</div>
                <h3 className="font-bold mb-2">Fast Loading</h3>
                <p className="text-sm text-gray-300">Optimized for speed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">📱</div>
                <h3 className="font-bold mb-2">Responsive</h3>
                <p className="text-sm text-gray-300">Works on all devices</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🔒</div>
                <h3 className="font-bold mb-2">Secure</h3>
                <p className="text-sm text-gray-300">SSL encryption</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🎨</div>
                <h3 className="font-bold mb-2">Modern Design</h3>
                <p className="text-sm text-gray-300">Beautiful aesthetics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let&apos;s create a website that helps your business thrive in the Gunnison Valley.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Schedule a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
