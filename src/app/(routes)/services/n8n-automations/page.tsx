import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  UserGroupIcon,
  ShareIcon,
  CurrencyDollarIcon,
  LifebuoyIcon,
  BoltIcon,
  PuzzlePieceIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  MagnifyingGlassIcon,
  TableCellsIcon
} from '@heroicons/react/24/solid';

export default function N8nAutomationsPage() {
  const automationWorkflows = [
    {
      title: 'Lead Management & CRM',
      description: 'Automatically capture, qualify, and route leads from your website directly to your CRM.',
      icon: <UserGroupIcon className="w-12 h-12 text-primary mb-4" />,
      features: [
        'Instant lead capture from forms',
        'Automatic email follow-ups',
        'Lead scoring and qualification',
        'CRM synchronization (HubSpot, Salesforce, etc.)'
      ]
    },
    {
      title: 'Social Media Automation',
      description: 'Streamline your social media presence with automated content scheduling and cross-posting.',
      icon: <ShareIcon className="w-12 h-12 text-primary mb-4" />,
      features: [
        'Cross-platform posting',
        'Content calendar automation',
        'Social listening and engagement tracking',
        'Automated reporting'
      ]
    },
    {
      title: 'Invoicing & Payments',
      description: 'Reduce manual data entry by automating your invoicing and payment reconciliation processes.',
      icon: <CurrencyDollarIcon className="w-12 h-12 text-primary mb-4" />,
      features: [
        'Auto-generate invoices from time tracking',
        'Payment reminders and follow-ups',
        'Sync with accounting software (QuickBooks, Xero)',
        'Expense tracking automation'
      ]
    },
    {
      title: 'Customer Support',
      description: 'Enhance your customer service with automated ticketing and response systems.',
      icon: <LifebuoyIcon className="w-12 h-12 text-primary mb-4" />,
      features: [
        'Ticket creation from emails',
        'Automated response templates',
        'SLA monitoring and alerts',
        'Customer satisfaction surveys'
      ]
    }
  ];

  const impactStats = [
    {
      title: 'Marketing ROI',
      value: '22%',
      description: 'Increase in ROI for AI-driven campaigns',
      icon: <ArrowTrendingUpIcon className="w-8 h-8 text-white" />
    },
    {
      title: 'Customer Service',
      value: '60%',
      description: 'Reduction in response time with 80% automated resolution',
      icon: <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
    },
    {
      title: 'Supply Chain',
      value: '10%',
      description: 'Reduction in transportation costs via optimized routing',
      icon: <BoltIcon className="w-8 h-8 text-white" />
    },
    {
      title: 'SEO Impact',
      value: '200%',
      description: 'Improvement in search rankings for small businesses',
      icon: <MagnifyingGlassIcon className="w-8 h-8 text-white" />
    },
    {
      title: 'Insurance Queries',
      value: '15m',
      description: 'Reduced resolution time from 48 hours to just 15 minutes',
      icon: <ClockIcon className="w-8 h-8 text-white" />
    },
    {
      title: 'Data Entry',
      value: '15h',
      description: 'Weekly hours saved on routine data entry and updates',
      icon: <TableCellsIcon className="w-8 h-8 text-white" />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-orange-600 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/services/n8n-hero.png"
            alt="n8n Automation Hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            n8n Business Automations
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Streamline your operations and save time with powerful automated workflows tailored for Gunnison Valley businesses.
          </p>
          <Button size="lg" asChild className="bg-white text-primary hover:bg-gray-100">
            <Link href="/contact">Automate Your Business</Link>
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

      {/* Intro Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-6">Why Automate with n8n?</h2>
            <p className="text-xl text-gray-600">
              n8n is a fair-code workflow automation tool that allows you to connect your apps and automate your workflows. It&apos;s powerful, flexible, and cost-effective.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center">
              <BoltIcon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Efficiency</h3>
              <p className="text-gray-600">Eliminate repetitive tasks and focus on what matters most—growing your business.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center">
              <PuzzlePieceIcon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Integration</h3>
              <p className="text-gray-600">Connect over 200+ apps and services seamlessly without writing a single line of code.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center">
              <ChartBarIcon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Cost Savings</h3>
              <p className="text-gray-600">Reduce operational costs by automating manual processes and minimizing errors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Impact Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">Real-World Impact</h2>
            <p className="text-xl text-white/90">
              See how AI and automation are transforming small businesses across industries.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    {stat.icon}
                  </div>
                  <span className="text-4xl font-bold text-white">{stat.value}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{stat.title}</h3>
                <p className="text-white/80">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Workflows Section */}
      < section className="py-20" >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-16">
            Top Ways to Automate Your Business
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {automationWorkflows.map((workflow, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <div className="flex justify-center md:justify-start">{workflow.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{workflow.title}</h3>
                <p className="text-gray-600 mb-6">{workflow.description}</p>
                <ul className="space-y-3">
                  {workflow.features.map((feature, featureIndex) => (
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
      </section >

      {/* CTA Section */}
      < section className="py-20 bg-primary text-white" >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-8">Ready to Save Time & Money?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let&apos;s build custom automated workflows that work for your unique business needs.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Start Automating Today</Link>
          </Button>
        </div>
      </section >
    </div >
  );
}
