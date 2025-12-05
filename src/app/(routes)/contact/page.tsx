'use client';

import { ContactForm } from '@/components/forms/contact-form';
import { FadeIn } from '@/components/ui/motion';
import { Mail, MapPin, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left Column: Content */}
            <FadeIn>
              <div className="space-y-8">
                <div>
                  <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Get in Touch</span>
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">
                    Let&apos;s Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Conversation</span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Whether you have a specific project in mind or just want to explore possibilities, we&apos;re here to help you navigate the digital landscape.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors">
                    <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email Us</h3>
                      <p className="text-muted-foreground mb-1">For general inquiries and project discussions</p>
                      <a href="mailto:eric@crestcodecreative.com" className="text-primary hover:underline font-medium">eric@crestcodecreative.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors">
                    <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Visit Us</h3>
                      <p className="text-muted-foreground mb-1">Based in the heart of the Rockies</p>
                      <span className="text-foreground font-medium">Gunnison Valley, Colorado</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-border">
                  <h3 className="font-semibold text-lg mb-4">Why Partner With Us?</h3>
                  <ul className="space-y-3">
                    {[
                      'Local expertise with world-class technical skills',
                      'Tailored solutions that fit your specific needs',
                      'Transparent communication and reliable support',
                      'Commitment to long-term community growth'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Right Column: Form */}
            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20" />
                <div className="relative bg-card border border-border rounded-2xl shadow-2xl p-6 md:p-8 lg:p-10">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and we&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                  <ContactForm />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
