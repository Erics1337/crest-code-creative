'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/motion';
import { EnvelopeIcon, BoltIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';

export function N8nAutomationSection() {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <FadeIn>
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 lg:p-16 text-white overflow-hidden relative">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block bg-primary/20 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-primary/20">
                                New Service
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Automate Your Business with n8n
                            </h2>
                            <p className="text-lg text-gray-300 mb-8">
                                Stop wasting time on repetitive tasks. We build custom automated workflows that connect your favorite apps—from CRM updates and social media posting to invoicing and customer support.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" variant="secondary" asChild>
                                    <Link href="/services/n8n-automations">Explore Automations</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                                    <Link href="/contact">Get a Free Audit</Link>
                                </Button>
                            </div>
                        </div>

                        {/* Visual representation of automation */}
                        <div className="relative">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center text-white">
                                            <EnvelopeIcon className="w-6 h-6" />
                                        </div>
                                        <div className="h-1 w-12 bg-gray-600 rounded-full animate-pulse" />
                                        <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center text-white">
                                            <BoltIcon className="w-6 h-6" />
                                        </div>
                                        <div className="h-1 w-12 bg-gray-600 rounded-full animate-pulse" />
                                        <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center text-white">
                                            <CurrencyDollarIcon className="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-sm text-gray-300">
                                        <div className="w-2 h-2 rounded-full bg-green-400" />
                                        <span>New lead received from website</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-300">
                                        <div className="w-2 h-2 rounded-full bg-green-400" />
                                        <span>Added to CRM automatically</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-300">
                                        <div className="w-2 h-2 rounded-full bg-green-400" />
                                        <span>Welcome email sent</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-300">
                                        <div className="w-2 h-2 rounded-full bg-green-400" />
                                        <span>Team notified on Slack</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}
