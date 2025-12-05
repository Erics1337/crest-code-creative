'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Loader2, Send } from 'lucide-react';

import Image from 'next/image';

export default function PromoPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/promo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to submit application');
            }

            setIsSuccess(true);
        } catch (err) {
            setError('Something went wrong. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    }

    if (isSuccess) {
        return (
            <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md w-full bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 text-center"
                >
                    <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Application Received!</h2>
                    <p className="text-slate-600 dark:text-slate-300 mb-8">
                        Thanks for applying for the automation promo. We've received your details and will be in touch shortly to discuss how we can help streamline your business.
                    </p>
                    <a
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                    >
                        Back to Home
                    </a>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="relative w-full h-64 sm:h-80 mb-8 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/20151230_CB_bona_001.avif"
                            alt="Gunnison Valley Landscape"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-4">
                        Gunnison Valley Automation Promo
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
                        Apply for a free custom n8n automation workflow designed to save you time and boost your business efficiency.
                    </p>


                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-10 text-left">
                        <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4 flex items-center">
                            <span className="mr-2">⚡</span> What can we automate?
                        </h3>
                        <div className="grid gap-4 sm:grid-cols-2 text-sm text-slate-700 dark:text-slate-300">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                                <strong className="block text-slate-900 dark:text-white mb-1">Lead Capture & Follow-up</strong>
                                Automatically add website leads to your CRM and send personalized welcome emails.
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                                <strong className="block text-slate-900 dark:text-white mb-1">Social Media Management</strong>
                                Schedule and cross-post content from one platform to all your social channels.
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                                <strong className="block text-slate-900 dark:text-white mb-1">Invoicing & Payments</strong>
                                Generate invoices and track payments automatically when a project is marked complete.
                            </div>
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                                <strong className="block text-slate-900 dark:text-white mb-1">Customer Support</strong>
                                Auto-categorize support tickets and draft AI-generated responses for review.
                            </div>
                        </div>
                        <p className="mt-6 text-center text-slate-700 dark:text-slate-300 font-medium">
                            And so much more! Our business automation workflows can do pretty much anything you can think of.
                        </p>
                        <div className="mt-6 text-center">
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                                Want to learn more about our services?
                            </p>
                            <a
                                href="/services/n8n-automations"
                                className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Explore Business Automation Services
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-6 sm:p-10"
                >
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Contact Details */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                                Business & Contact Info
                            </h3>

                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                        Contact Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        className="block w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="businessName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                        Business Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="businessName"
                                        id="businessName"
                                        required
                                        className="block w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        className="block w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        required
                                        className="block w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="website" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                    Website URL
                                </label>
                                <input
                                    type="url"
                                    name="website"
                                    id="website"
                                    placeholder="https://"
                                    className="block w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border"
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="employees" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                        Number of Employees *
                                    </label>
                                    <select
                                        name="employees"
                                        id="employees"
                                        required
                                        className="block w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border"
                                    >
                                        <option value="">Select...</option>
                                        <option value="1">Just me (Solopreneur)</option>
                                        <option value="2-5">2-5 employees</option>
                                        <option value="6-10">6-10 employees</option>
                                        <option value="11-20">11-20 employees</option>
                                        <option value="20+">20+ employees</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="yearsInBusiness" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                        Years in Business *
                                    </label>
                                    <input
                                        type="text"
                                        name="yearsInBusiness"
                                        id="yearsInBusiness"
                                        required
                                        className="block w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Automation Details */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                                Automation & AI
                            </h3>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Do you currently use any AI tools? *
                                </label>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <input
                                            id="ai-none"
                                            name="aiUsage"
                                            type="radio"
                                            value="none"
                                            className="h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-500"
                                            required
                                        />
                                        <label htmlFor="ai-none" className="ml-3 block text-sm font-medium text-slate-700 dark:text-slate-300">
                                            No, not yet
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="ai-chatgpt"
                                            name="aiUsage"
                                            type="radio"
                                            value="chatgpt"
                                            className="h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <label htmlFor="ai-chatgpt" className="ml-3 block text-sm font-medium text-slate-700 dark:text-slate-300">
                                            Yes, ChatGPT (Free or Plus)
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="ai-other"
                                            name="aiUsage"
                                            type="radio"
                                            value="other"
                                            className="h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <label htmlFor="ai-other" className="ml-3 block text-sm font-medium text-slate-700 dark:text-slate-300">
                                            Yes, other tools (Claude, Midjourney, Jasper, etc.)
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="currentAutomations" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                    Do you currently have any automations or integrations set up?
                                </label>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                                    (e.g., Zapier, Make, email autoresponders, etc.)
                                </p>
                                <textarea
                                    name="currentAutomations"
                                    id="currentAutomations"
                                    rows={3}
                                    className="block w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border"
                                />
                            </div>

                            <div>
                                <label htmlFor="painPoints" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                    What repetitive tasks would you love to automate? *
                                </label>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                                    Describe any processes that take up too much of your time or where you think automation could help.
                                </p>
                                <textarea
                                    name="painPoints"
                                    id="painPoints"
                                    required
                                    rows={4}
                                    className="block w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border"
                                />
                            </div>

                            <div>
                                <label htmlFor="businessImpact" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                    Why does your business need the extra support that AI and automations can provide? *
                                </label>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                                    (e.g., Save 10 hours/week, allow us to take on more clients, reduce errors, etc.)
                                </p>
                                <textarea
                                    name="businessImpact"
                                    id="businessImpact"
                                    required
                                    rows={3}
                                    className="block w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border"
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="rounded-md bg-red-50 dark:bg-red-900/30 p-4">
                                <div className="flex">
                                    <div className="ml-3">
                                        <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                                            Error submitting application
                                        </h3>
                                        <div className="mt-2 text-sm text-red-700 dark:text-red-300">
                                            <p>{error}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        Submit Application
                                        <Send className="ml-2 -mr-1 h-5 w-5" />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </motion.div>

                <div className="mt-8 text-center max-w-2xl mx-auto px-4">
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        Please note: This is a competitive opportunity. Applications are chosen based on our availability and the need of the applicant. Selected businesses will receive a free automation implementation, including a consultation and setup assistance. We will only contact you if your business is selected.
                    </p>
                </div>
            </div>
        </div>
    );
}
