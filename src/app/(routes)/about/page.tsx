import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/ui/motion';
import {
  MapPin,
  Code2,
  ArrowRight,
  Compass,
  Shield,
  Brain,
  Zap,
  TrendingUp,
  Users
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Me | Crest Code',
  description: 'Learn about Eric Swanson and Crest Code - bringing tech expertise to the Gunnison Valley.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-4xl">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">About Me</span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-foreground">
                World-Class Technology with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Mountain Town Soul</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                I&apos;m Eric Swanson, a developer dedicated to bringing digital solutions to the Gunnison Valley community I call home.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/linkedin-profile.jpeg"
                    alt="Eric Swanson"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full blur-2xl opacity-50" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500 rounded-full blur-2xl opacity-30" />
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">My Journey</h2>
                  <div className="space-y-6 text-lg text-muted-foreground">
                    <p>
                      My connection to the Gunnison Valley began in 2015. Drawn by the stunning beauty and vibrant community, I immersed myself in local life—working at Crested Butte Mountain Resort, Gunnison Valley Health, and local small businesses.
                    </p>
                    <p>
                      These experiences weren&apos;t just jobs; they were an education in the unique spirit and challenges of our valley. Inspired to make a difference, I pursued Computer Science at Western Colorado University, combining technical rigor with local insight.
                    </p>
                    <p>
                      After honing my skills with big tech companies and remote roles, I&apos;ve returned to my roots. Now, I bring enterprise-level expertise to local businesses, helping them thrive in the digital age without losing their authentic character.
                    </p>
                    <p>
                      Check out my developer portfolio at{' '}
                      <a
                        href="https://www.ericsdevportfolio.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-medium hover:underline"
                      >
                        www.ericsdevportfolio.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <MapPin className="w-5 h-5" />
                    Based in Gunnison Valley
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <Code2 className="w-5 h-5" />
                    Full-Stack Expert
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <div>
                <h2 className="text-2xl font-bold mb-4">Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Crest Code empowers businesses with innovative and thoughtful technology, breaking down barriers to unlock their highest potential and create a deeper impact.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Crest Code envisions a thriving community of inspired business owners, empowered by innovative technology to transform their ideas into impactful, creative solutions that elevate their goals.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeInStagger>
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold">Values</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <FadeInStaggerItem key={index} className="h-full">
                  <div className="group h-full p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </FadeInStaggerItem>
              ))}
            </div>
          </FadeInStagger>
        </div>
      </section>

      {/* Stats/Impact Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {impact.map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/80 font-medium">
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Community Commitment */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary/30 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-8">
                <FadeIn>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Community Commitment</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    My commitment goes beyond just providing services—it&apos;s about being a true partner in our community&apos;s growth. I understand the unique rhythm of our valley&apos;s economy.
                  </p>

                  <div className="space-y-4">
                    {commitments.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                          <ArrowRight className="w-3 h-3" />
                        </div>
                        <span className="text-foreground/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>

              <FadeIn delay={0.2} className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src="/images/coffee-shop.jpg"
                  alt="Community Meeting"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="font-medium text-lg">Building relationships,</p>
                  <p className="text-white/80">one cup at a time.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-gradient-to-br from-primary to-blue-600 rounded-3xl p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
                <p className="text-xl text-white/90 mb-10">
                  Let&apos;s discuss how we can create a digital solution that works for you and our community.
                </p>
                <Button asChild size="lg" variant="secondary" className="text-primary font-bold text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all">
                  <Link href="/contact">Start a Conversation</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

const values = [
  {
    title: 'Adventure',
    description: 'Willing to take bold risks and explore new frontiers to find the best solutions.',
    icon: <Compass className="w-6 h-6" />
  },
  {
    title: 'Community',
    description: 'Building deep connections and supporting the ecosystem that sustains us all.',
    icon: <Users className="w-6 h-6" />
  },
  {
    title: 'Strength',
    description: 'Resilience and capability to endure through complex and difficult challenges.',
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: 'Wisdom',
    description: 'Blending technical knowledge with intuition for holistic decision making.',
    icon: <Brain className="w-6 h-6" />
  },
  {
    title: 'Passion',
    description: 'Bringing energy and excitement to nurture the emotional connection with your dream.',
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: 'Prosperity',
    description: 'Creating abundance and growth that ripples out to the entire community.',
    icon: <TrendingUp className="w-6 h-6" />
  }
];

const commitments = [
  "Deep understanding of local business needs through years of hands-on experience",
  "Affordable, high-quality tech solutions tailored to our community",
  "Active participation in local business networks and events",
  "Flexible support schedules adapting to seasonal patterns",
  "Preserving our valley's unique character while embracing innovation"
];

const impact = [
  {
    value: '5+',
    label: 'Years Experience'
  },
  {
    value: '3+',
    label: 'Businesses Helped'
  },
  {
    value: '100%',
    label: 'Client Satisfaction'
  },
  {
    value: '24/7',
    label: 'Local Support'
  }
];
