'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Check, CircleAlert, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

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
  const [submittedService, setSubmittedService] = useState('');
  const [formError, setFormError] = useState('');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setFormError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      package: selectedService, // Use state value
      companyWebsite: formData.get('companyWebsite'),
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

      setSubmittedService(selectedService);
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
      const message = error instanceof Error ? error.message : 'Unable to send your note right now. Please try again or email Eric directly.';
      setFormError(message);
      toast({
        title: 'Error',
        description: message,
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
        className="flex flex-col items-center space-y-6 py-8 text-center"
      >
        <div className="relative mb-6 aspect-[4/3] w-full max-w-md overflow-hidden rounded-sm">
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
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-foreground">Message received.</h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Eric will review your note personally and reply within one business day about the best next step for {submittedService || 'your project'}.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-[#dce7e8] px-6 py-3 font-medium text-foreground">
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
      <input
        type="text"
        name="companyWebsite"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="space-y-4">
        <div className="flex items-baseline justify-between gap-4">
          <label id="service-fit-label" className="field-label block">Closest fit</label>
          <span className="text-xs text-foreground/50">Optional</span>
        </div>
        <p className="text-sm leading-6 text-foreground/60">Pick one if it helps. A rough description of the problem is more important.</p>
        <div className="flex flex-wrap gap-3" role="radiogroup" aria-labelledby="service-fit-label">
          {services.map((service) => {
            const isSelected = selectedService === service;
            return (
              <button
                key={service}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => setSelectedService(isSelected ? '' : service)}
                className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-200 ${isSelected ? 'border-foreground bg-foreground text-background' : 'border-foreground/25 bg-white text-foreground/65 hover:border-foreground hover:text-foreground'}`}
              >
                {isSelected && <Check className="h-4 w-4" aria-hidden="true" />}
                {service}
              </button>
            );
          })}
        </div>
        <input type="hidden" name="package" value={selectedService} />
      </div>

      {formError && (
        <div role="alert" className="flex gap-3 border border-destructive/35 bg-destructive/5 p-4 text-sm leading-6 text-foreground">
          <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-destructive" aria-hidden="true" />
          <p>{formError} You can also email <a href="mailto:eric@crestcodecreative.com" className="font-semibold underline underline-offset-4">eric@crestcodecreative.com</a>.</p>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="field-label">
            Name
          </label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="h-12 rounded-lg border-foreground/25 bg-white focus:border-accent"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="field-label">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="h-12 rounded-lg border-foreground/25 bg-white focus:border-accent"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="field-label">
          Phone (optional)
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(970) 555-0123"
          className="h-12 rounded-lg border-foreground/25 bg-white focus:border-accent"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="field-label">
          What needs to work better?
        </label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="A few details are plenty: what you do, who it serves, and what would feel like a win."
          rows={6}
          className="resize-none rounded-lg border-foreground/25 bg-white p-4 focus:border-accent"
        />
      </div>

      <Button
        type="submit"
        className="group h-14 w-full text-lg font-semibold"
        disabled={isLoading}
      >
        {isLoading ? (
          'Sending...'
        ) : (
          <span className="flex items-center gap-2">
            Send project note
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        )}
      </Button>
      <p className="text-center text-sm leading-6 text-foreground/55">Eric reads every note personally. No pressure, no sales sequence—just a clear next step.</p>
    </form>
  );
}
