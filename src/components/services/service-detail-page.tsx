import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

type ServiceItem = { title: string; body: string; details: string[] };

interface ServiceDetailPageProps {
  eyebrow: string;
  title: string;
  introduction: string;
  image: string;
  imageAlt: string;
  premise: string;
  services: ServiceItem[];
  process: Array<{ title: string; body: string }>;
  fit: string[];
}

export function ServiceDetailPage({ eyebrow, title, introduction, image, imageAlt, premise, services, process, fit }: ServiceDetailPageProps) {
  return (
    <main>
      <section className="bg-[#f6f8f6] py-20 sm:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8"><p className="field-label mb-6">{eyebrow}</p><h1 className="display-title">{title}</h1></div>
          <div className="lg:col-span-4"><p className="text-lg leading-8 text-foreground/68">{introduction}</p><Link href="/contact" className="link-arrow mt-6 text-sm">Discuss your project <ArrowUpRight className="h-4 w-4" /></Link></div>
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-28">
        <div className="site-container">
          <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-[#dce7e8]"><Image src={image} alt={imageAlt} fill priority className="object-cover" /></div>
          <div className="mt-10 grid gap-8 border-y border-foreground/20 py-8 lg:grid-cols-12"><p className="field-label lg:col-span-3">The useful starting point</p><p className="font-editorial text-2xl leading-relaxed text-foreground/82 lg:col-span-8 lg:col-start-5">{premise}</p></div>
        </div>
      </section>

      <section className="bg-white pb-24 sm:pb-32">
        <div className="site-container">
          <div className="mb-12 grid gap-6 lg:grid-cols-12"><p className="field-label lg:col-span-3">What the engagement can include</p><h2 className="section-title lg:col-span-8 lg:col-start-5">The right scope for the actual problem.</h2></div>
          <div className="divide-y divide-foreground/20 border-y border-foreground/20">
            {services.map((service, index) => (
              <article key={service.title} className="grid gap-6 py-9 lg:grid-cols-12">
                <span className="text-sm font-semibold text-accent lg:col-span-1">0{index + 1}</span>
                <h3 className="text-2xl font-semibold tracking-[-0.03em] lg:col-span-3">{service.title}</h3>
                <p className="leading-7 text-foreground/65 lg:col-span-4">{service.body}</p>
                <ul className="space-y-1.5 text-sm leading-6 text-foreground/55 lg:col-span-3 lg:col-start-10">{service.details.map((detail) => <li key={detail}>— {detail}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#21443e] py-24 text-white sm:py-32">
        <div className="site-container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">Working rhythm</p><h2 className="mt-6 text-4xl font-semibold leading-none tracking-[-0.03em] text-white">From ambiguity<br />to working release.</h2></div>
          <div className="lg:col-span-7 lg:col-start-6">
            {process.map((step, index) => <div key={step.title} className="grid grid-cols-[3rem_1fr] gap-5 border-t border-white/25 py-7"><span className="text-sm font-semibold text-[#b9cfd2]">0{index + 1}</span><div><h3 className="text-xl font-semibold text-white">{step.title}</h3><p className="mt-2 max-w-xl leading-7 text-white/65">{step.body}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="bg-[#dce7e8] py-20 sm:py-24">
        <div className="site-container grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5"><p className="field-label mb-5">Good fit when</p><h2 className="text-4xl font-semibold leading-[0.98] tracking-[-0.035em]">The existing way of working is costing time, clarity, or opportunity.</h2></div>
          <div className="lg:col-span-6 lg:col-start-7"><ul className="divide-y divide-foreground/20 border-y border-foreground/20">{fit.map((item) => <li key={item} className="flex gap-3 py-4 text-foreground/70"><ArrowRight className="mt-1 h-4 w-4 shrink-0 text-accent" />{item}</li>)}</ul><Link href="/contact" className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-foreground px-6 font-semibold text-background">Start with your problem <ArrowUpRight className="h-5 w-5" /></Link></div>
        </div>
      </section>
    </main>
  );
}
