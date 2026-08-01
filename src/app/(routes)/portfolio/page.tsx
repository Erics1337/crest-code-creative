import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Quote } from 'lucide-react';
import { CaseStudyCard } from '@/components/portfolio/case-study-card';
import { getProjects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Selected Work | Crest Code Creative',
  description: 'Websites, mobile apps, SaaS platforms, AI products, and digital systems designed and built by Crest Code Creative.',
  alternates: { canonical: '/portfolio' },
};

export default async function PortfolioPage() {
  const projects = await getProjects();
  const featured = projects[0];
  const testimonials = projects.filter((project) => project.testimonial);

  return (
    <div>
      {/*
        THESIS: Let real product work establish credibility immediately; refuse the equal-card portfolio grid.
        OWN-WORLD: Alpine-white fields, graphite type, steel-blue media stages, thin structural rules, and scarce cobalt wayfinding.
        STORY: Visitors understand the studio's range, scan outcomes, enter a case study, and leave with a clear contact path.
        FIRST VIEWPORT: A compact thesis and capability index lead into one oversized live project image crossing the fold.
        FORM: High Country Field Office, cinematic project dispatch followed by an asymmetric editorial gallery; seed ef92848b.
      */}
      <section className="bg-[#f6f8f6] pb-12 pt-16 sm:pb-16 sm:pt-20">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="field-label mb-6">Selected work · 2024–2026</p>
              <h1 className="display-title">Products made useful, clear, and ready for the real world.</h1>
            </div>
            <div className="lg:col-span-4 lg:pb-2">
              <p className="max-w-md text-lg leading-8 text-foreground/68">A working set of mobile products, SaaS platforms, AI tools, and local business experiences—each shaped around a different problem, not a house template.</p>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.11em] text-foreground/50">
                <span>Web</span><span>Mobile</span><span>SaaS</span><span>AI</span><span>Automation</span>
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-foreground/20 pt-4 text-sm text-foreground/55">
            <span>{projects.length} detailed case studies</span>
            <span className="flex items-center gap-2">Explore the work <ArrowDown className="h-4 w-4" /></span>
          </div>
        </div>
      </section>

      {featured && (
        <section className="bg-white py-12 sm:py-16">
          <div className="site-container">
            <CaseStudyCard {...featured} href={`/portfolio/${featured.slug}`} index={0} featured />
          </div>
        </section>
      )}

      <section className="bg-white pb-24 sm:pb-32">
        <div className="site-container">
          <div className="grid gap-x-9 gap-y-20 lg:grid-cols-2 lg:gap-y-28">
            {projects.slice(1).map((project, index) => (
              <div key={project.slug} className={index % 2 === 1 ? 'lg:mt-32' : ''}>
                <CaseStudyCard {...project} href={`/portfolio/${project.slug}`} index={index + 1} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {testimonials.length > 0 && (
        <section className="bg-[#dce7e8] py-24 sm:py-32">
          <div className="site-container">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <Quote className="h-9 w-9 text-accent" />
                <p className="field-label mt-5">From a local partner</p>
              </div>
              <div className="lg:col-span-8 lg:col-start-5">
                {testimonials.map((project) => (
                  <figure key={project.slug}>
                    <blockquote className="font-editorial text-3xl leading-[1.2] tracking-[-0.02em] sm:text-5xl">“{project.testimonial!.quote}”</blockquote>
                    <figcaption className="mt-8 flex items-center gap-4 border-t border-foreground/20 pt-5">
                      <Image src={project.testimonial!.avatar} alt="" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
                      <div>
                        <p className="font-semibold">{project.testimonial!.name}</p>
                        <p className="text-sm text-foreground/55">{project.testimonial!.role}</p>
                      </div>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#315cf5] py-20 text-white sm:py-24">
        <div className="site-container flex flex-col justify-between gap-10 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/65">Your project belongs here next</p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-[0.96] tracking-[-0.035em] text-white sm:text-6xl">Have a problem worth building around?</h2>
          </div>
          <Link href="/contact" className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-white px-6 font-semibold text-[#151a19] transition-transform hover:-translate-y-0.5">
            Start a project <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
