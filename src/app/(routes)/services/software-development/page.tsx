import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Code2,
  Server,
  Cloud,
  Database,
  Smartphone,
  Globe,
  Cpu,
  GitBranch,
  Layers,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  Terminal
} from 'lucide-react';

export default function SoftwareDevelopmentPage() {
  const technologies = [
    {
      category: 'Frontend Engineering',
      icon: <Globe className="w-6 h-6 text-secondary" />,
      items: [
        { name: 'React', description: 'Component-based UI architecture' },
        { name: 'Next.js', description: 'Production-grade React framework' },
        { name: 'TypeScript', description: 'Static typing for robust code' },
        { name: 'Tailwind CSS', description: 'Utility-first styling engine' }
      ]
    },
    {
      category: 'Backend Systems',
      icon: <Server className="w-6 h-6 text-secondary" />,
      items: [
        { name: 'Node.js', description: 'Scalable network applications' },
        { name: 'Python', description: 'Advanced data processing' },
        { name: 'PostgreSQL', description: 'ACID-compliant relational database' },
        { name: 'MongoDB', description: 'Flexible document storage' }
      ]
    },
    {
      category: 'DevOps & Cloud',
      icon: <Cloud className="w-6 h-6 text-secondary" />,
      items: [
        { name: 'AWS', description: 'Enterprise cloud infrastructure' },
        { name: 'Docker', description: 'Containerized deployment' },
        { name: 'CI/CD', description: 'Automated delivery pipelines' },
        { name: 'Git', description: 'Distributed version control' }
      ]
    }
  ];

  const services = [
    {
      title: 'Custom Software Solutions',
      icon: <Code2 className="w-10 h-10 text-primary" />,
      description: 'Bespoke applications engineered to solve complex business challenges with precision and scalability.',
      features: [
        'Enterprise web applications',
        'API design and integration',
        'Legacy system modernization',
        'Real-time data processing'
      ]
    },
    {
      title: 'Technical Strategy',
      icon: <Cpu className="w-10 h-10 text-primary" />,
      description: 'Strategic guidance to align technology initiatives with your long-term business objectives.',
      features: [
        'System architecture design',
        'Technology stack evaluation',
        'Scalability planning',
        'Security auditing'
      ]
    },
    {
      title: 'Cloud Infrastructure',
      icon: <Database className="w-10 h-10 text-primary" />,
      description: 'Robust, secure, and scalable cloud environments designed for high availability.',
      features: [
        'Serverless architecture',
        'Microservices implementation',
        'Database optimization',
        'Automated deployment workflows'
      ]
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We begin by deeply understanding your business requirements, user needs, and technical constraints to define a clear roadmap.',
      icon: <Terminal className="w-6 h-6" />
    },
    {
      step: '02',
      title: 'Architecture & Design',
      description: 'Our team creates detailed technical specifications and UI/UX designs to ensure the solution is robust, scalable, and user-friendly.',
      icon: <Layers className="w-6 h-6" />
    },
    {
      step: '03',
      title: 'Agile Development',
      description: 'We build your software in iterative sprints, providing regular updates and opportunities for feedback to ensure alignment.',
      icon: <Code2 className="w-6 h-6" />
    },
    {
      step: '04',
      title: 'Testing & Deployment',
      description: 'Rigorous testing ensures quality and reliability before we deploy your solution to a secure, production-ready environment.',
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
        <Image
          src="/images/polygon-mountain.jpg"
          alt="Polygon Mountain Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/20" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">Enterprise-Grade Solutions</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
              Engineering the Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Your Business</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              We build robust, scalable, and high-performance software solutions tailored to drive your digital transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100 text-lg px-8 h-14" asChild>
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 text-lg px-8 h-14" asChild>
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Abstract shapes */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30" />
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-primary dark:text-white">
              Comprehensive Software Services
            </h2>
            <p className="text-lg text-muted-foreground">
              From concept to deployment, we provide end-to-end development services designed to help your business thrive in the digital age.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="mb-6 p-4 bg-primary/5 rounded-xl w-fit group-hover:bg-primary/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary dark:text-white">{service.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">{service.description}</p>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm font-medium text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-secondary mr-3 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Modern Technology Stack
              </h2>
              <p className="text-lg text-muted-foreground">
                We leverage the latest frameworks and tools to build software that is fast, secure, and easy to maintain.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/contact">Discuss Your Tech Needs</Link>
            </Button>
          </div>

          <div className="grid gap-12">
            {technologies.map((tech) => (
              <div key={tech.category} className="border-b border-gray-100 last:border-0 pb-12 last:pb-0">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    {tech.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{tech.category}</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {tech.items.map((item) => (
                    <div key={item.name} className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <h4 className="font-bold text-lg mb-2">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-400">
              A transparent, agile approach that ensures we deliver value at every step of the journey.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative group text-center">
                {/* Connecting Line */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[50%] w-[calc(100%+2rem)] h-px bg-white/10 z-0" />
                )}

                <div className="mb-6 relative inline-block">
                  {/* Icon Container */}
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-secondary group-hover:border-secondary group-hover:scale-110 transition-all duration-300 relative z-10 shadow-lg">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">
                  <span className="text-secondary mr-2">{item.step}.</span>
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[250px] mx-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Ready to Build Something Extraordinary?
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                Let&apos;s collaborate to turn your vision into a powerful, scalable software solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 text-lg px-8 h-14" asChild>
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 text-lg px-8 h-14" asChild>
                  <Link href="/portfolio">View Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
