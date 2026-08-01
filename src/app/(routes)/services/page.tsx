import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services | Crest Code Creative',
  description: 'Web design, custom software, mobile products, and practical business automation from a hands-on Colorado product partner.',
  alternates: { canonical: '/services' },
};

const services = [
  { number: '01', title: 'Web design & development', body: 'Distinct, responsive websites designed around your business, your customers, and the actions that matter most.', proof: ['Strategy and information architecture', 'Visual design and responsive build', 'Content systems, analytics, and launch'], href: '/services/web-design' },
  { number: '02', title: 'Custom software', body: 'Purpose-built tools and SaaS platforms that bring complex workflows into one clear, dependable system.', proof: ['Product strategy and prototyping', 'Full-stack application development', 'Authentication, billing, data, and integrations'], href: '/services/software-development' },
  { number: '03', title: 'Mobile apps', body: 'Native-feeling iOS and Android products, shaped from early experience design through App Store-ready delivery.', proof: ['React Native and Expo', 'Subscriptions, notifications, and analytics', 'Release infrastructure and ongoing iteration'], href: '/services/mobile-apps' },
  { number: '04', title: 'AI & automation', body: 'Practical AI features and reliable workflows that reduce repetitive work while keeping consequential decisions with your team.', proof: ['n8n workflow automation', 'AI assistants and knowledge systems', 'Connected operations and monitoring'], href: '/services/n8n-automations' },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-[#21443e] py-24 text-white sm:py-32">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.14em] text-white/55">Capabilities</p>
            <h1 className="text-balance text-5xl font-semibold leading-[0.92] tracking-[-0.035em] text-white sm:text-7xl lg:text-[5.75rem]">One partner from useful question to working product.</h1>
          </div>
          <p className="max-w-md text-lg leading-8 text-white/70 lg:col-span-4">Bring Crest Code a business problem, an unfinished idea, or a system that no longer works. We&apos;ll determine what should be built—and then build it well.</p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="site-container divide-y divide-foreground/20 border-y border-foreground/20">
          {services.map((service) => (
            <article key={service.number} className="grid gap-7 py-10 lg:grid-cols-12 lg:py-14">
              <div className="lg:col-span-1"><span className="field-label">{service.number}</span></div>
              <div className="lg:col-span-4"><h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{service.title}</h2></div>
              <div className="lg:col-span-4"><p className="text-lg leading-8 text-foreground/68">{service.body}</p></div>
              <div className="lg:col-span-3">
                <ul className="space-y-2 text-sm leading-6 text-foreground/60">{service.proof.map((item) => <li key={item}>— {item}</li>)}</ul>
                <Link href={service.href} className="link-arrow mt-5 text-sm">Explore service <ArrowUpRight className="h-4 w-4" /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#dce7e8] py-24 sm:py-32">
        <div className="site-container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4"><p className="field-label">How the work moves</p><h2 className="mt-6 text-4xl font-semibold leading-none tracking-[-0.03em]">Clear stages.<br />Shared decisions.</h2></div>
          <div className="lg:col-span-7 lg:col-start-6">
            {[['Understand', 'Clarify the business problem, users, constraints, and evidence before deciding what the product needs.'], ['Shape', 'Turn the best direction into a concrete experience, technical plan, and prioritized path to value.'], ['Build', 'Design and engineer in working increments, with regular reviews and decisions made in the open.'], ['Launch & learn', 'Ship carefully, measure what matters, and improve the product from real use rather than assumptions.']].map(([title, body], index) => (
              <div key={title} className="grid grid-cols-[3rem_1fr] gap-5 border-t border-foreground/20 py-7">
                <span className="text-sm font-semibold text-accent">0{index + 1}</span><div><h3 className="text-xl font-semibold">{title}</h3><p className="mt-2 max-w-xl leading-7 text-foreground/65">{body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#315cf5] py-20 text-white">
        <div className="site-container flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
          <h2 className="max-w-3xl text-4xl font-semibold leading-[0.96] tracking-[-0.035em] text-white sm:text-5xl">Not sure which service your problem fits?</h2>
          <Link href="/contact" className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-white px-6 font-semibold text-foreground">Start with the problem <ArrowRight className="h-5 w-5" /></Link>
        </div>
      </section>
    </div>
  );
}
