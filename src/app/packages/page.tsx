import { ContactForm } from '@/components/forms/contact-form';

const packages = [
  { name: 'Local Business Starter', price: '$999', description: 'A focused single-page presence for a small local business that needs a credible place to send customers.', features: ['Responsive one-page website', 'Contact and map integration', 'Foundational local SEO', 'Social profile connections'] },
  { name: 'Professional Multi-Page', price: '$2,499', description: 'A broader marketing site for a growing business with multiple services, audiences, or content needs.', features: ['Up to five custom pages', 'Content management system', 'Analytics and technical SEO', 'Performance optimization'] },
  { name: 'E-commerce Suite', price: 'From $3,999', description: 'A practical online store with the product, payment, and operating tools needed to sell confidently.', features: ['Product catalog and inventory', 'Secure payments', 'Orders and customer accounts', 'Reviews and store setup'] },
  { name: 'Booking System', price: '$2,999', description: 'A streamlined scheduling experience for service businesses ready to reduce manual coordination.', features: ['Online booking calendar', 'Payments and reminders', 'Staff and service setup', 'Automated notifications'] },
  { name: 'Custom Development', price: 'Custom quote', description: 'A scoped engagement for products and workflows that do not fit a predefined website package.', features: ['Custom functionality', 'APIs and integrations', 'Data and architecture', 'Technical documentation'] },
];

export default function PackagesPage() {
  return (
    <main className="bg-[#f6f8f6]">
      <section className="site-container py-20 sm:py-28"><p className="field-label mb-6">Website starting points</p><div className="grid gap-10 lg:grid-cols-12 lg:items-end"><h1 className="display-title lg:col-span-8">Clear scopes for common business needs.</h1><p className="text-lg leading-8 text-foreground/65 lg:col-span-4">Packages make the first conversation easier. Every final scope still reflects your content, constraints, and business.</p></div></section>
      <section className="bg-white py-16 sm:py-24"><div className="site-container divide-y divide-foreground/20 border-y border-foreground/20">{packages.map((pkg, index) => <article key={pkg.name} className="grid gap-6 py-9 lg:grid-cols-12"><span className="text-sm font-semibold text-accent lg:col-span-1">0{index + 1}</span><div className="lg:col-span-3"><h2 className="text-2xl font-semibold tracking-[-0.03em]">{pkg.name}</h2><p className="mt-2 font-semibold">{pkg.price}</p></div><p className="leading-7 text-foreground/65 lg:col-span-4">{pkg.description}</p><ul className="space-y-1.5 text-sm leading-6 text-foreground/55 lg:col-span-3 lg:col-start-10">{pkg.features.map((feature) => <li key={feature}>— {feature}</li>)}</ul></article>)}</div></section>
      <section className="bg-[#dce7e8] py-20 sm:py-24"><div className="site-container grid gap-12 lg:grid-cols-12"><div className="lg:col-span-5"><p className="field-label mb-5">Request a scope</p><h2 className="section-title">Choose a starting point. Then make it yours.</h2></div><div className="bg-white p-6 sm:p-10 lg:col-span-6 lg:col-start-7"><ContactForm /></div></div></section>
    </main>
  );
}
