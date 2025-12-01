'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/motion';
import { EnvelopeIcon, BoltIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';

export function N8nAutomationSection() {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <FadeIn>
                <div className="bg-gradient-to-br from-teal-50 via-slate-50 to-blue-50 rounded-3xl p-8 md:p-12 lg:p-16 text-slate-900 overflow-hidden relative border border-teal-100/50">
                    {/* Background decoration with n8n magenta accent */}
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-pink-500/20 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                                New Service
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-slate-900">
                                Automate Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">n8n</span>
                            </h2>
                            <div className="space-y-4 mb-8 text-lg text-slate-700">
                                <p>
                                    75% of small businesses are using AI tools in 2025. This isn&apos;t just enterprise technology anymore.
                                </p>
                                <p>
                                    The median annual investment threshold for small businesses is just $1,800—that&apos;s less than $150/m for technology that was science fiction just a couple years ago.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 border-none shadow-lg" asChild>
                                    <Link href="/services/n8n-automations">Explore Automations</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="bg-white/60 backdrop-blur-sm text-slate-900 border-slate-300 hover:bg-white hover:border-slate-400" asChild>
                                    <Link href="/contact">Get a Free Audit</Link>
                                </Button>
                            </div>
                        </div>

                        {/* Visual representation of automation */}
                        <div className="space-y-6">
                            {/* n8n Logo Badge - centered above */}
                            <div className="flex justify-center">
                                <Link
                                    href="https://n8n.io"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block rounded-2xl p-3 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                                >
                                    <Image
                                        src="/n8n-logo.png"
                                        alt="n8n Logo - Click to visit n8n.io"
                                        width={64}
                                        height={64}
                                        className="transition-transform duration-300 group-hover:rotate-12 drop-shadow-2xl"
                                    />
                                    <span className="sr-only">Visit n8n.io</span>
                                </Link>
                            </div>
                            <div className="bg-white/40 backdrop-blur-md border border-slate-200/50 rounded-2xl p-8 shadow-xl">
                                <div className="flex items-center justify-between mb-10 relative">
                                    {/* Connecting line with glow */}
                                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-pink-400 to-green-400 opacity-30 blur-sm" />
                                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-green-500 opacity-50" />

                                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-blue-500/10 border-2 border-blue-500/30 flex items-center justify-center text-blue-600 shadow-lg">
                                        <EnvelopeIcon className="w-8 h-8" />
                                    </div>
                                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-pink-500/10 border-2 border-pink-500/30 flex items-center justify-center text-pink-600 shadow-lg">
                                        <BoltIcon className="w-8 h-8" />
                                    </div>
                                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-green-500/10 border-2 border-green-500/30 flex items-center justify-center text-green-600 shadow-lg">
                                        <CurrencyDollarIcon className="w-8 h-8" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50 hover:bg-white/80 transition-colors duration-200 shadow-sm">
                                        <div className="flex items-center gap-3 text-sm">
                                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-lg shadow-blue-400/50" />
                                            <span className="font-semibold text-slate-900">Trigger:</span>
                                            <span className="text-slate-600">New lead form submission</span>
                                        </div>
                                    </div>
                                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50 hover:bg-white/80 transition-colors duration-200 shadow-sm">
                                        <div className="flex items-center gap-3 text-sm">
                                            <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse shadow-lg shadow-pink-400/50" />
                                            <span className="font-semibold text-slate-900">Process:</span>
                                            <span className="text-slate-600">Enrich data with AI & add to CRM</span>
                                        </div>
                                    </div>
                                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50 hover:bg-white/80 transition-colors duration-200 shadow-sm">
                                        <div className="flex items-center gap-3 text-sm">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-400/50" />
                                            <span className="font-semibold text-slate-900">Action:</span>
                                            <span className="text-slate-600">Send personalized quote & notify team</span>
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
