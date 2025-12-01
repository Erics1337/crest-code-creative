'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Send, Check, Clock, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactFormProps {
  selectedPackage?: string;
}

const services = [
  'Web Design',
  'Software Development',
  'Mobile Apps',
  'Automation',
  'Other'
];

export function ContactForm({ selectedPackage }: ContactFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState(selectedPackage || '');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      package: selectedService, // Use state value
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.details || 'Failed to send message');
      }

      setIsSubmitted(true);
      toast({
        title: 'Message sent!',
        description: 'We\'ll get back to you as soon as possible.',
      });

      // Scroll to top of form area
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Reset form
      const form = e.target as HTMLFormElement;
      if (form) {
        form.reset();
        setSelectedService('');
      }
    } catch (error: unknown) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center text-center space-y-6 py-8"
      >
        <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-6">
          <Image
            src="/images/snowboarder-thank-you.png"
            alt="Snowboarder carving"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-6">
            <p className="text-white font-medium text-lg">Carving out your digital future</p>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-foreground">Message Received!</h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Thanks for reaching out. We're excited to explore how we can help you with {selectedService || 'your project'}.
          </p>
        </div>

        <div className="flex items-center gap-2 text-primary font-medium bg-primary/10 px-6 py-3 rounded-full">
          <Clock className="w-5 h-5" />
          <span>Average response time: 1 business day</span>
        </div>

        <Button
          variant="outline"
          onClick={() => setIsSubmitted(false)}
          className="mt-4"
        >
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        <label className="text-sm font-medium text-foreground">
          I'm interested in...
        </label>
        <div className="flex flex-wrap gap-3">
          {services.map((service) => (
            <button
              key={service}
              type="button"
              onClick={() => setSelectedService(service)}
              className={`
                relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border
                ${selectedService === service
                  ? 'bg-primary text-primary-foreground border-primary shadow-md transform scale-105'
                  : 'bg-background text-muted-foreground border-input hover:border-primary/50 hover:text-foreground'
                }
              `}
            >
              {service}
              {selectedService === service && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
              )}
            </button>
          ))}
        </div>
        <input type="hidden" name="package" value={selectedService} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="h-12 bg-background/50 backdrop-blur-sm focus:bg-background transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="h-12 bg-background/50 backdrop-blur-sm focus:bg-background transition-colors"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-foreground">
          Phone (optional)
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(970) 555-0123"
          className="h-12 bg-background/50 backdrop-blur-sm focus:bg-background transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your project goals, timeline, and budget..."
          rows={6}
          className="resize-none bg-background/50 backdrop-blur-sm focus:bg-background transition-colors p-4"
        />
      </div>

      <Button
        type="submit"
        className="w-full h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
        disabled={isLoading}
      >
        {isLoading ? (
          'Sending...'
        ) : (
          <span className="flex items-center gap-2">
            Send Message
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        )}
      </Button>
    </form>
  );
}
