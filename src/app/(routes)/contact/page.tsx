'use client';

import { ContactForm } from '@/components/forms/contact-form';
import { FadeIn } from '@/components/ui/motion';

export default function ContactPage() {
  return (
    <div className="py-20">
      <FadeIn>
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll get back to you within 24 hours to discuss your project.
          </p>
        </div>
      </FadeIn>

      <div className="container mx-auto px-4 py-10">
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </FadeIn>
      </div>

      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Local Support</h3>
                  <p className="text-gray-600">
                    Based in the Gunnison Valley, we provide personalized, face-to-face support when you need it.
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
                    We&apos;re here for the long haul with maintenance and support packages available.
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
