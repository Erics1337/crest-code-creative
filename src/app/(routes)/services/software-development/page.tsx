import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function SoftwareDevelopmentPage() {
  const technologies = [
    {
      category: 'Frontend Development',
      items: [
        { name: 'React', icon: '⚛️', description: 'Modern web applications' },
        { name: 'Next.js', icon: '▲', description: 'Server-side rendering' },
        { name: 'TypeScript', icon: '📘', description: 'Type-safe code' },
        { name: 'Tailwind CSS', icon: '🎨', description: 'Responsive design' }
      ]
    },
    {
      category: 'Backend Development',
      items: [
        { name: 'Node.js', icon: '🟢', description: 'Server runtime' },
        { name: 'Python', icon: '🐍', description: 'Data processing' },
        { name: 'PostgreSQL', icon: '🐘', description: 'Relational databases' },
        { name: 'MongoDB', icon: '🍃', description: 'NoSQL databases' }
      ]
    },
    {
      category: 'Cloud & DevOps',
      items: [
        { name: 'AWS', icon: '☁️', description: 'Cloud infrastructure' },
        { name: 'Docker', icon: '🐳', description: 'Containerization' },
        { name: 'CI/CD', icon: '🔄', description: 'Automated deployment' },
        { name: 'Git', icon: '📦', description: 'Version control' }
      ]
    }
  ];

  const services = [
    {
      title: 'Custom Software Development',
      description: 'Tailored solutions built with modern technologies to solve your unique business challenges.',
      features: [
        'Full-stack web applications',
        'RESTful API development',
        'Database design and optimization',
        'Third-party integrations'
      ]
    },
    {
      title: 'Technical Consulting',
      description: 'Expert guidance on technology decisions and implementation strategies.',
      features: [
        'Architecture planning',
        'Technology stack selection',
        'Performance optimization',
        'Security best practices'
      ]
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable and reliable cloud infrastructure for your applications.',
      features: [
        'AWS cloud architecture',
        'Serverless computing',
        'Microservices design',
        'Container orchestration'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Expert Software Development
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Building robust, scalable solutions with modern technologies
          </p>
          <Button size="lg" asChild className="bg-white text-primary hover:bg-gray-100">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-16">
            Technology Stack
          </h2>
          <div className="grid gap-16">
            {technologies.map((tech) => (
              <div key={tech.category}>
                <h3 className="text-2xl font-bold mb-8 text-center">{tech.category}</h3>
                <div className="grid md:grid-cols-4 gap-8">
                  {tech.items.map((item) => (
                    <div key={item.name} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 text-center">
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <h4 className="font-bold mb-2">{item.name}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-16">
            Services & Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
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

      {/* Development Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-16">
            Development Process
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="relative">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Discovery</h3>
                <p className="text-gray-600 text-center">Understanding your requirements and business goals</p>
              </div>
              <div className="relative">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Planning</h3>
                <p className="text-gray-600 text-center">Architecture design and technology selection</p>
              </div>
              <div className="relative">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Development</h3>
                <p className="text-gray-600 text-center">Agile development with regular updates</p>
              </div>
              <div className="relative">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">4</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Deployment</h3>
                <p className="text-gray-600 text-center">Testing, deployment, and ongoing support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-8">Ready to Build Something Amazing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that meets your needs.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
