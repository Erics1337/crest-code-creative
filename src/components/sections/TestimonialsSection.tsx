'use client';

import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/ui/motion';
import { TestimonialCard } from '@/components/testimonials/testimonial-card';

const testimonials = [
    {
        quote: "Eric truly captured the essence of Earthy Soul Living. He built a beautiful, calming space online that my clients love, and the booking system he integrated has made my life so much easier. I couldn't be happier!",
        author: 'Chelsey Wilson',
        role: 'Owner',
        company: 'Earthy Soul Living',
        image: '/images/testimonials/chelsey-wilson.jpg',
    },
    {
        quote: 'Working with Crest Code was a game-changer for our business. Our online bookings have increased significantly.',
        author: 'Mike Thompson',
        role: 'Founder',
        company: 'Mountain Bike Adventures',
    },
    {
        quote: "The website exceeded our expectations. It's not just beautiful, but also incredibly functional and easy to manage.",
        author: 'Lisa Martinez',
        role: 'Manager',
        company: 'Local Food Market',
    },
];

export function TestimonialsSection() {
    return (
        <section className="bg-slate-50 py-24 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <FadeIn>
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">Testimonials</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                            What Our Clients Say
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Don&apos;t just take our word for it - hear from some of our satisfied clients in the Gunnison Valley.
                        </p>
                    </div>
                </FadeIn>

                <FadeInStagger>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <FadeInStaggerItem key={testimonial.author}>
                                <TestimonialCard {...testimonial} />
                            </FadeInStaggerItem>
                        ))}
                    </div>
                </FadeInStagger>
            </div>
        </section>
    );
}
