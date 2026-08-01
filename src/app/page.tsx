import type { Metadata } from 'next';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CaseStudyCard } from '@/components/portfolio/case-study-card';
import { getFeaturedProjects } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Crest Code Creative | Digital Product Partner in Crested Butte',
  description: 'Websites, mobile apps, SaaS products, AI workflows, and thoughtful digital systems built from Colorado for businesses near and far.',
  alternates: { canonical: '/' },
};

const capabilities = [
  { title: 'Websites that work harder', body: 'Fast, clear marketing and commerce experiences shaped around the way your customers actually make decisions.', href: '/services/web-design' },
  { title: 'Custom software', body: 'Practical tools, SaaS platforms, and internal systems that replace scattered workflows with one dependable product.', href: '/services/software-development' },
  { title: 'Mobile products', body: 'Native-feeling iOS and Android apps built from product strategy through launch, subscriptions, and ongoing iteration.', href: '/services/mobile-apps' },
  { title: 'AI and automation', body: 'Human-centered AI features and reliable automations that remove repetitive work without taking control away from your team.', href: '/services/n8n-automations' },
];

export default function Home() {
  ReactDOM.preload('/images/crested-butte-landscape.webp', { as: 'image', fetchPriority: 'high' });
  const projects = getFeaturedProjects().slice(0, 4);

  return (
    <div>
      {/*
        THESIS: Real product work meets real Colorado context; refuse the interchangeable gradient-agency hero.
        OWN-WORLD: Alpine white, graphite, evergreen, steel blue, cobalt wayfinding, sharp image plates, and spare field annotations.
        STORY: Visitors see where Crest Code works, what it builds, proof across projects, then a direct invitation to talk.
        FIRST VIEWPORT: The retained Crested Butte landscape fills the frame; a left-anchored offer and two actions sit over its quiet foreground.
        FORM: High Country Field Office, image-led editorial experience, using a cinematic opening followed by an asymmetric work index.
      */}
      <section className="relative min-h-[calc(100svh-72px)] overflow-hidden bg-[#151a19] text-white">
        <Image
          src="/images/crested-butte-landscape.webp"
          alt="Crested Butte and the surrounding Colorado landscape"
          fill
          sizes="100vw"
          quality={92}
          priority
          unoptimized
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,15,14,0.82)_0%,rgba(10,15,14,0.5)_46%,rgba(10,15,14,0.08)_78%)]" />

        <div className="site-container relative flex min-h-[calc(100svh-72px)] flex-col justify-between py-8 sm:py-12">
          <div className="flex items-center justify-between text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/70">
            <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Crested Butte, Colorado</span>
            <span className="hidden sm:block">Web · Mobile · SaaS · AI</span>
          </div>

          <div className="max-w-4xl py-20">
            <h1 className="text-balance text-5xl font-semibold leading-[0.91] tracking-[-0.04em] text-white sm:text-7xl lg:text-[6rem]">
              Useful digital products, built close to home.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
              Crest Code partners with local businesses and ambitious teams to design and build websites, mobile apps, software, and AI-powered workflows that hold up in the real world.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-foreground hover:bg-[#b9cfd2]">
                <Link href="/contact">Start a project <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/50 text-white hover:border-white hover:bg-white hover:text-foreground">
                <Link href="/portfolio">See the work <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>

          <div className="flex items-end justify-between border-t border-white/30 pt-5 text-sm text-white/65">
            <span>Independent product studio · Est. in the Gunnison Valley</span>
            <ArrowDown className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8f6] py-24 sm:py-32">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="field-label">A hands-on product partner</p>
            </div>
            <div className="lg:col-span-8">
              <h2 className="section-title max-w-4xl">Big-product thinking without the big-agency handoff.</h2>
              <div className="mt-10 grid gap-8 border-t border-foreground/20 pt-8 sm:grid-cols-2">
                <p className="editorial-note text-foreground/85">You work directly with the person shaping and building the product—from the first useful question through launch.</p>
                <p className="max-w-xl text-lg leading-8 text-foreground/65">That means fewer translation gaps, clearer decisions, and a digital experience grounded in your business instead of a template. Local when proximity matters; equipped for complex work anywhere.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="site-container">
          <div className="mb-14 flex flex-col justify-between gap-6 border-b border-foreground/20 pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="field-label mb-4">Selected work</p>
              <h2 className="section-title">Proof, not promises.</h2>
            </div>
            <Link href="/portfolio" className="link-arrow">View every project <ArrowUpRight className="h-4 w-4" /></Link>
          </div>

          {projects[0] && <CaseStudyCard {...projects[0]} href={`/portfolio/${projects[0].slug}`} index={0} featured />}
          <div className="mt-20 grid gap-x-8 gap-y-20 lg:grid-cols-2">
            {projects.slice(1).map((project, index) => (
              <CaseStudyCard key={project.slug} {...project} href={`/portfolio/${project.slug}`} index={index + 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#dce7e8] py-24 sm:py-32">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="field-label">What we build</p>
              <p className="mt-6 max-w-sm font-editorial text-2xl leading-relaxed text-foreground/75">One partner across strategy, design, engineering, launch, and the practical decisions between them.</p>
            </div>
            <div className="divide-y divide-foreground/20 border-y border-foreground/20">
              {capabilities.map((capability) => (
                <Link key={capability.title} href={capability.href} className="group grid gap-4 py-7 sm:grid-cols-[0.7fr_1fr_auto] sm:items-start">
                  <h3 className="text-2xl font-semibold tracking-[-0.025em]">{capability.title}</h3>
                  <p className="max-w-xl leading-7 text-foreground/65">{capability.body}</p>
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#21443e] py-24 text-white sm:py-32">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-white/55">Built here. Useful anywhere.</p>
            <h2 className="text-4xl font-semibold leading-[0.96] tracking-[-0.035em] text-white sm:text-6xl">Local understanding with the range to build beyond the obvious.</h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-lg leading-8 text-white/72">Crest Code brings years of software and product experience back to the Gunnison Valley—helping neighbors compete, and helping teams elsewhere work with a focused senior partner.</p>
            <Link href="/about" className="mt-7 inline-flex min-h-11 items-center gap-2 font-semibold underline decoration-1 underline-offset-4">Meet Eric <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
