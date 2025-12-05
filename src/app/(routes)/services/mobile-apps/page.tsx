import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Smartphone,
  Globe,
  Zap,
  Layers,
  MapPin,
  CreditCard,
  Wifi,
  CheckCircle2,
  Rocket,
  Search,
  PenTool,
  Code2,
  ShieldCheck,
  ArrowRight,
  Download
} from 'lucide-react';

export default function MobileAppsPage() {
  const benefits = [
    {
      title: 'Global Reach',
      icon: <Globe className="w-8 h-8 text-secondary" />,
      description: 'Expand your market presence by reaching customers directly on their most personal devices, anytime and anywhere.'
    },
    {
      title: 'Cost Efficiency',
      icon: <Zap className="w-8 h-8 text-secondary" />,
      description: 'Leverage React Native to build for both iOS and Android simultaneously, significantly reducing development time and costs.'
    },
    {
      title: 'Cross-Platform',
      icon: <Layers className="w-8 h-8 text-secondary" />,
      description: 'Maintain a single, robust codebase that ensures consistency and simplifies future updates across all platforms.'
    },
    {
      title: 'Premium Experience',
      icon: <Smartphone className="w-8 h-8 text-secondary" />,
      description: 'Deliver native performance and smooth animations that provide a superior user experience compared to mobile websites.'
    }
  ];

  const features = [
    {
      title: 'Custom Mobile Solutions',
      description: 'Bespoke applications designed to align perfectly with your specific business goals.',
      icon: <Smartphone className="w-10 h-10 text-primary" />,
      capabilities: [
        'Booking & reservation systems',
        'Customer loyalty programs',
        'Secure payment processing',
        'Real-time push notifications',
        'Offline-first architecture'
      ]
    },
    {
      title: 'Technical Excellence',
      description: 'Built on industry-leading standards for security, performance, and reliability.',
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
      capabilities: [
        'React Native development',
        'Biometric authentication',
        'End-to-end encryption',
        'Cloud backend synchronization',
        'Automated CI/CD pipelines'
      ]
    },
    {
      title: 'Location-Based Services',
      description: 'Leverage GPS and geolocation to provide context-aware experiences for your users.',
      icon: <MapPin className="w-10 h-10 text-primary" />,
      capabilities: [
        'Interactive maps & navigation',
        'Geofencing capabilities',
        'Local event discovery',
        'Proximity-based alerts',
        'Regional content delivery'
      ]
    }
  ];

  const process = [
    {
      title: 'Discovery',
      description: 'We analyze your market and user needs to define the core value proposition.',
      icon: <Search className="w-6 h-6" />
    },
    {
      title: 'Design',
      description: 'We craft intuitive interfaces and seamless user journeys.',
      icon: <PenTool className="w-6 h-6" />
    },
    {
      title: 'Development',
      description: 'We build robust, scalable apps for iOS and Android using React Native.',
      icon: <Code2 className="w-6 h-6" />
    },
    {
      title: 'Testing',
      description: 'Rigorous QA ensures your app performs flawlessly on all devices.',
      icon: <CheckCircle2 className="w-6 h-6" />
    },
    {
      title: 'Launch',
      description: 'We handle the submission process to the App Store and Google Play.',
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
        <Image
          src="/images/mobile-outside.jpg"
          alt="Mobile Apps Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-purple-900/20" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <Smartphone className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">Native Mobile Experiences</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
              Transform Your Business with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-teal-200">Mobile Innovation</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Reach your customers wherever they are with powerful, intuitive mobile applications built for the modern world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 text-lg px-8 h-14" asChild>
                <Link href="/contact">
                  Start Your App Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 text-lg px-8 h-14" asChild>
                <Link href="/portfolio">View Our Apps</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Abstract shapes */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-30" />
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Why Choose Mobile?
            </h2>
            <p className="text-lg text-muted-foreground">
              In a mobile-first world, having a dedicated app isn&apos;t just a luxury—it&apos;s a powerful tool to engage your audience and drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-center group">
                <div className="mb-6 inline-flex p-4 bg-white dark:bg-gray-900 rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Comprehensive Mobile Services
            </h2>
            <p className="text-lg text-muted-foreground">
              We deliver end-to-end mobile solutions, from initial concept to app store deployment and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <div className="mb-6 p-3 bg-primary/5 rounded-lg w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground mb-8">{feature.description}</p>
                <ul className="space-y-4">
                  {feature.capabilities.map((capability, index) => (
                    <li key={index} className="flex items-start text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-secondary mr-3 shrink-0" />
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
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-400">
              A streamlined path from idea to launch, ensuring transparency and quality at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={step.title} className="relative group text-center">
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[50%] w-full h-px bg-gradient-to-r from-white/20 to-transparent z-0" />
                )}
                <div className="relative z-10 mb-6 inline-flex p-4 rounded-2xl bg-white/10 group-hover:bg-secondary transition-colors duration-300">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Highlight */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gray-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Proven Expertise
                </h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  With years of experience in React Native development, we create high-performance applications that users love.
                  Our focus on quality code and intuitive design ensures your app stands out in the crowded marketplace.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/5 px-6 py-4 rounded-xl border border-white/10">
                    <div className="text-3xl font-bold text-secondary mb-1">100%</div>
                    <div className="text-sm text-gray-400">Client Satisfaction</div>
                  </div>
                  <div className="bg-white/5 px-6 py-4 rounded-xl border border-white/10">
                    <div className="text-3xl font-bold text-secondary mb-1">Cross</div>
                    <div className="text-sm text-gray-400">Platform Support</div>
                  </div>
                </div>
              </div>
              <div className="relative h-full min-h-[300px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-white/10 p-8 flex flex-col justify-center items-center text-center">
                <Download className="w-16 h-16 text-secondary mb-6" />
                <h3 className="text-2xl font-bold mb-2">Ready to Launch?</h3>
                <p className="text-gray-400 mb-8">
                  Let&apos;s turn your app idea into a reality.
                </p>
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 w-full md:w-auto" asChild>
                  <Link href="/contact">Start Your Project</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
