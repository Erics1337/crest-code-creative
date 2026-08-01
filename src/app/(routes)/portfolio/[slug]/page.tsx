import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ExternalLink, Quote } from 'lucide-react';
import { getProjectBySlug, getProjects } from '@/lib/projects';
import { MDXContent } from '@/components/mdx-content';

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const project = await getProjectBySlug(slug);
    return {
      title: `${project.frontmatter.title} | Crest Code Creative`,
      description: project.frontmatter.description,
      alternates: { canonical: `/portfolio/${slug}` },
    };
  } catch {
    return {};
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  let project;
  try {
    project = await getProjectBySlug(slug);
  } catch {
    notFound();
  }

  const projects = await getProjects();
  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const title = project.frontmatter.title.split(' – ')[0].split(' — ')[0];

  return (
    <article className="bg-[#f6f8f6]">
      <header className="site-container pb-14 pt-16 sm:pb-20 sm:pt-24">
        <Link href="/portfolio" className="mb-12 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-foreground/65 hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> All work
        </Link>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="field-label mb-5">Case study · {project.frontmatter.industry}</p>
            <h1 className="display-title">{title}</h1>
          </div>
          <div className="lg:col-span-4 lg:pb-2">
            <p className="text-lg leading-8 text-foreground/68">{project.frontmatter.description}</p>
            {project.frontmatter.externalUrl && (
              <a href={project.frontmatter.externalUrl} target="_blank" rel="noopener noreferrer" className="link-arrow mt-6 text-sm">
                Visit live product <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <div className="mt-14 grid gap-5 border-y border-foreground/20 py-5 text-sm sm:grid-cols-3">
          <div><span className="field-label block">Partner</span><span className="mt-2 block font-semibold">{project.frontmatter.clientName}</span></div>
          <div><span className="field-label block">Discipline</span><span className="mt-2 block font-semibold">{project.frontmatter.industry}</span></div>
          <div><span className="field-label block">Year</span><span className="mt-2 block font-semibold">{new Date(project.frontmatter.date).getFullYear()}</span></div>
        </div>
      </header>

      <section className="site-container">
        <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-[#dce7e8] sm:aspect-[16/9]">
          <Image
            src={project.frontmatter.imageUrl}
            alt={`${title} product showcase`}
            fill
            priority
            sizes="(min-width: 1440px) 1344px, 100vw"
            className="object-contain p-4 sm:p-8 lg:p-12"
          />
        </div>
      </section>

      <section className="site-container py-20 sm:py-28">
        <div className="grid border-y border-foreground/20 lg:grid-cols-3">
          <div className="py-8 lg:pr-10">
            <p className="field-label mb-5">The situation</p>
            <p className="text-lg leading-8 text-foreground/72">{project.frontmatter.challenge}</p>
          </div>
          <div className="border-t border-foreground/20 py-8 lg:border-l lg:border-t-0 lg:px-10">
            <p className="field-label mb-5">What we built</p>
            <p className="text-lg leading-8 text-foreground/72">{project.frontmatter.solution}</p>
          </div>
          <div className="border-t border-foreground/20 bg-[#21443e] p-8 text-white lg:border-l lg:border-t-0 lg:p-10">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-white/55">The outcome</p>
            <p className="font-editorial text-2xl leading-relaxed text-white">{project.frontmatter.impact}</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="field-label mb-5">Inside the work</p>
              <p className="max-w-xs text-sm leading-6 text-foreground/55">The decisions, product capabilities, and implementation behind the finished experience.</p>
              <div className="mt-8 border-t border-foreground/20 pt-5">
                <p className="field-label mb-4">Built with</p>
                <div className="flex flex-wrap gap-2">
                  {project.frontmatter.technologies.map((tech: string) => (
                    <span key={tech} className="rounded-full border border-foreground/20 px-3 py-1.5 text-xs font-medium">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
          <div className="lg:col-span-8 lg:col-start-5">
            <MDXContent source={project.content} />
          </div>
        </div>
      </section>

      {project.frontmatter.testimonial && (
        <section className="bg-[#dce7e8] py-20 sm:py-28">
          <figure className="site-container grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Quote className="h-9 w-9 text-accent" />
              <p className="field-label mt-5">Partner perspective</p>
            </div>
            <div className="lg:col-span-8 lg:col-start-5">
              <blockquote className="font-editorial text-3xl leading-[1.2] tracking-[-0.02em] sm:text-5xl">“{project.frontmatter.testimonial.quote}”</blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-foreground/20 pt-5">
                <Image src={project.frontmatter.testimonial.avatar} alt="" width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
                <div><p className="font-semibold">{project.frontmatter.testimonial.name}</p><p className="text-sm text-foreground/55">{project.frontmatter.testimonial.role}</p></div>
              </figcaption>
            </div>
          </figure>
        </section>
      )}

      {nextProject && (
        <section className="bg-[#151a19] py-20 text-white sm:py-28">
          <div className="site-container">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-white/50">Next case study</p>
            <Link href={`/portfolio/${nextProject.slug}`} className="group flex flex-col justify-between gap-8 border-t border-white/25 pt-7 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-4xl font-semibold leading-none tracking-[-0.035em] text-white sm:text-6xl">{nextProject.title.split(' – ')[0].split(' — ')[0]}</h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-white/65">{nextProject.description}</p>
              </div>
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-foreground transition-transform group-hover:translate-x-2"><ArrowRight className="h-6 w-6" /></span>
            </Link>
          </div>
        </section>
      )}
    </article>
  );
}
