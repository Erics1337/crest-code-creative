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
                            <div className="space-y-4 mb-8 text-lg text-gray-300">
                                <p>
                                    75% of small businesses are using AI tools in 2025. This isn&apos;t just enterprise technology anymore.
                                </p>
                                <p>
                                    The median annual investment threshold for small businesses is just $1,800—that&apos;s less than $150/m for technology that was science fiction just a couple years ago.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 border-none" asChild>
                                    <Link href="/services/n8n-automations">Explore Automations</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="bg-transparent text-white border-white/20 hover:bg-white/10 hover:border-white" asChild>
                                    <Link href="/contact">Get a Free Audit</Link>
                                </Button>
                            </div>
                        </div>

                        {/* Visual representation of automation */}
                        <div className="relative">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                <div className="flex items-center justify-between mb-8 relative">
                                    {/* Connecting line */}
                                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-orange-500 to-green-500 opacity-30" />

                                    <div className="relative z-10 w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/50 flex items-center justify-center text-blue-400">
                                        <EnvelopeIcon className="w-6 h-6" />
                                    </div>
                                    <div className="relative z-10 w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/50 flex items-center justify-center text-orange-400">
                                        <BoltIcon className="w-6 h-6" />
                                    </div>
                                    <div className="relative z-10 w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/50 flex items-center justify-center text-green-400">
                                        <CurrencyDollarIcon className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                                        <div className="flex items-center gap-3 text-sm text-gray-200">
                                            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                                            <span className="font-medium">Trigger:</span>
                                            <span className="text-gray-400">New lead form submission</span>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                                        <div className="flex items-center gap-3 text-sm text-gray-200">
                                            <div className="w-2 h-2 rounded-full bg-orange-400" />
                                            <span className="font-medium">Process:</span>
                                            <span className="text-gray-400">Enrich data with AI & add to CRM</span>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                                        <div className="flex items-center gap-3 text-sm text-gray-200">
                                            <div className="w-2 h-2 rounded-full bg-green-400" />
                                            <span className="font-medium">Action:</span>
                                            <span className="text-gray-400">Send personalized quote & notify team</span>
                                        </div>
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
