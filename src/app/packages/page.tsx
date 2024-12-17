import { ContactForm } from '@/components/forms/contact-form'
import { FadeIn } from '@/components/ui/motion'

const packages = [
  {
    name: 'Local Business Starter',
    price: '$999',
    description: 'Perfect for small local businesses looking to establish their online presence.',
    features: [
      'Single-page professional website',
      'Mobile responsive design',
      'Contact form integration',
      'Basic SEO optimization',
      'Google Maps integration',
      'Social media links'
    ]
  },
  {
    name: 'Professional Multi-Page',
    price: '$2,499',
    description: 'Comprehensive solution for growing businesses needing more online real estate.',
    features: [
      'Up to 5 custom pages',
      'Advanced SEO optimization',
      'Content management system',
      'Blog integration',
      'Newsletter signup',
      'Analytics integration',
      'Speed optimization'
    ]
  },
  {
    name: 'E-commerce Suite',
    price: 'From $3,999',
    description: 'Complete online store solution for retail businesses.',
    features: [
      'Full e-commerce functionality',
      'Product catalog management',
      'Secure payment integration',
      'Inventory management',
      'Order tracking system',
      'Customer accounts',
      'Product reviews'
    ]
  },
  {
    name: 'Booking System',
    price: '$2,999',
    description: 'Streamlined booking solution for service-based businesses.',
    features: [
      'Online booking calendar',
      'Automated scheduling',
      'Payment integration',
      'Email notifications',
      'SMS reminders',
      'Staff management',
      'Service customization'
    ]
  },
  {
    name: 'Custom Development',
    price: 'Custom Quote',
    description: 'Tailored solutions for unique business needs.',
    features: [
      'Custom functionality',
      'Third-party integrations',
      'API development',
      'Database design',
      'Scalable architecture',
      'Performance optimization',
      'Technical documentation'
    ]
  }
]

export default function PackagesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <FadeIn>
        <h1 className="text-4xl font-bold text-center mb-8">Web Development Packages</h1>
        <p className="text-xl text-center text-gray-600 mb-16">
          Choose the perfect package for your business needs
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {packages.map((pkg, index) => (
          <FadeIn key={pkg.name} delay={index * 0.1}>
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold mb-4">{pkg.name}</h2>
              <p className="text-3xl font-bold text-blue-600 mb-4">{pkg.price}</p>
              <p className="text-gray-600 mb-6">{pkg.description}</p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2"
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
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <ContactForm />
        </div>
      </FadeIn>
    </div>
  )
}
