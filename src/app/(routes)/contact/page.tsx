'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/components/forms/contact-form';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/ui/motion';

const packages = [
  {
    name: 'Local Business Starter',
    price: '$1,499',
    description: 'Perfect for small businesses looking to establish their online presence',
    features: [
      'Single-page professional website',
      'Mobile responsive design',
      'Contact form',
      'Business hours & location',
      'Social media integration',
      'Basic SEO setup',
      '3 rounds of revisions',
      '1 hour training session',
    ],
    popular: false,
  },
  {
    name: 'Professional Multi-Page',
    price: '$2,999',
    description: 'Comprehensive solution for growing businesses',
    features: [
      'Up to 5 custom pages',
      'Professional copywriting',
      'Advanced SEO optimization',
      'Blog setup (optional)',
      'Newsletter integration',
      'Google Analytics setup',
      'Custom contact forms',
      'Content management system',
      '5 rounds of revisions',
      '2 hours of training',
    ],
    popular: true,
  },
  {
    name: 'E-commerce Suite',
    price: 'From $3,999',
    description: 'Complete online store setup for retail businesses',
    features: [
      'Full e-commerce functionality',
      'Up to 100 products',
      'Secure payment gateway',
      'Inventory management',
      'Order tracking system',
      'Customer accounts',
      'Product reviews',
      'Shipping integration',
      'Email marketing setup',
      '3 hours of training',
    ],
    popular: false,
  },
  {
    name: 'Booking System',
    price: 'From $2,999',
    description: 'Ideal for service-based businesses and rentals',
    features: [
      'Online booking calendar',
      'Automated scheduling',
      'Payment processing',
      'Email notifications',
      'Customer management',
      'Service customization',
      'Mobile app integration',
      'Analytics dashboard',
      '2 hours of training',
    ],
    popular: false,
  },
  {
    name: 'Custom Development',
    price: 'Custom Quote',
    description: 'Tailored solutions for unique business needs',
    features: [
      'Custom web applications',
      'Third-party integrations',
      'API development',
      'Database design',
      'Advanced security features',
      'Scalable architecture',
      'Performance optimization',
      'Ongoing support options',
    ],
    popular: false,
  },
  {
    name: 'Mobile App Development',
    price: 'From $7,999',
    description: 'Native mobile apps for iOS and Android',
    features: [
      'Custom mobile app design',
      'Native iOS & Android apps',
      'Push notifications',
      'User authentication',
      'Offline functionality',
      'App store submission',
      'Analytics integration',
      '3 months of support',
    ],
    popular: false,
  },
];

const specializedPackages = [
  {
    name: 'Restaurant Package',
    price: '$2,499',
    description: 'Specialized for restaurants and cafes',
    features: [
      'Online menu management',
      'Table reservations',
      'Integration with delivery services',
      'Special events calendar',
      'Photo gallery',
      'Customer reviews integration',
    ],
  },
  {
    name: 'Real Estate Showcase',
    price: '$2,799',
    description: 'Perfect for realtors and property managers',
    features: [
      'Property listings',
      'Virtual tours integration',
      'Property search filters',
      'Lead capture forms',
      'MLS integration (optional)',
      'Mortgage calculator',
    ],
  },
  {
    name: 'Vacation Rental',
    price: '$2,999',
    description: 'Ideal for vacation rental properties',
    features: [
      'Availability calendar',
      'Online booking system',
      'Property showcase',
      'Guest reviews',
      'Local area information',
      'Integration with Airbnb/VRBO',
    ],
  },
];

export default function PackagesPage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  return (
    <div className="py-20">
      <FadeIn>
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Investment Plans</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect package for your business. All packages include hosting setup, 
            SSL certificate, and ongoing support options.
          </p>
        </div>
      </FadeIn>

      {/* Main Packages */}
      <div className="container mx-auto px-4 mb-20">
        <FadeInStagger>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <FadeInStaggerItem key={pkg.name}>
                <div className={`relative bg-white rounded-xl shadow-sm overflow-hidden border-2 ${
                  pkg.popular ? 'border-primary' : 'border-transparent'
                }`}>
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm">
                      Popular Choice
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 mb-4">{pkg.description}</p>
                    <div className="text-3xl font-bold text-primary mb-6">{pkg.price}</div>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-600">
                          <svg
                            className="w-5 h-5 text-primary mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full"
                      onClick={() => setSelectedPackage(pkg.name)}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </FadeInStaggerItem>
            ))}
          </div>
        </FadeInStagger>
      </div>

      {/* Specialized Packages */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">
              Specialized Solutions
            </h2>
          </FadeIn>
          <FadeInStagger>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specializedPackages.map((pkg) => (
                <FadeInStaggerItem key={pkg.name}>
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 mb-4">{pkg.description}</p>
                    <div className="text-2xl font-bold text-primary mb-6">{pkg.price}</div>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-600">
                          <svg
                            className="w-5 h-5 text-primary mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => setSelectedPackage(pkg.name)}
                    >
                      Learn More
                    </Button>
                  </div>
                </FadeInStaggerItem>
              ))}
            </div>
          </FadeInStagger>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 py-20">
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {selectedPackage ? `Get Started with ${selectedPackage}` : 'Contact Us'}
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours to discuss your project.
              </p>
            </div>
            <ContactForm selectedPackage={selectedPackage || undefined} />
          </div>
        </FadeIn>
      </div>

      {/* Additional Information */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Local Support</h3>
                  <p className="text-gray-600">
                    Based in Crested Butte, we provide personalized, face-to-face support when you need it.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
                  <p className="text-gray-600">
                    Every business is unique. We tailor our solutions to match your specific needs.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                  <p className="text-gray-600">
                    We're here for the long haul with maintenance and support packages available.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
