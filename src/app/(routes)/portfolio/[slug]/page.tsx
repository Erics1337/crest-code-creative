import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getProjectBySlug, getProjects } from '@/lib/projects'
import { Button } from '@/components/ui/button'
import { MDXContent } from '@/components/mdx-content'
import { FadeIn } from '@/components/ui/motion'

export async function generateStaticParams() {
  const projects = await getProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: PageProps) {
  const resolvedParams = await params
  const project = await getProjectBySlug(resolvedParams.slug)

  if (!project) {
    notFound()
  }

  return (
    <article className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <Image
          src={project.frontmatter.imageUrl}
          alt={project.frontmatter.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-slate-50/90" />

        {/* Back Navigation */}
        <div className="absolute top-24 left-0 right-0 z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              href="/portfolio"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-end pb-40 items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm backdrop-blur-md border border-white/20 mb-8 shadow-lg">
                <span className="font-medium">{project.frontmatter.clientName}</span>
                <span className="w-1 h-1 rounded-full bg-white/50" />
                <span className="font-medium">{project.frontmatter.industry}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
                {project.frontmatter.title}
              </h1>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10 pb-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Summary Card */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
                {project.frontmatter.description}
              </p>

              {project.frontmatter.externalUrl && (
                <div className="mt-8 pt-8 border-t border-slate-100 flex justify-center">
                  <Button asChild size="lg" className="rounded-full">
                    <a
                      href={project.frontmatter.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Live Website
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </FadeIn>

          {/* Challenge & Solution Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 h-full">
                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">The Challenge</h2>
                <p className="text-slate-600 leading-relaxed">
                  {project.frontmatter.challenge}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 h-full">
                <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Solution</h2>
                <p className="text-slate-600 leading-relaxed">
                  {project.frontmatter.solution}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Impact Section */}
          <FadeIn delay={0.3}>
            <div className="bg-slate-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl shadow-slate-200/50">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-teal-400">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </span>
                  The Impact
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                  {project.frontmatter.impact}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Deep Dive Content */}
          <FadeIn delay={0.4}>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg shadow-slate-200/50 border border-slate-100">
              <div className="prose prose-lg max-w-none prose-slate prose-headings:font-bold prose-headings:text-slate-800 prose-p:text-slate-600 prose-a:text-teal-600 hover:prose-a:text-teal-700 prose-img:rounded-2xl">
                <MDXContent source={project.content} />
              </div>

              {/* Technologies Used - Subtle Footer */}
              <div className="mt-12 pt-8 border-t border-slate-100">
                <p className="text-sm font-medium text-slate-400 mb-4 uppercase tracking-wider">Technologies Used</p>
                <div className="flex flex-wrap gap-2">
                  {project.frontmatter.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-50 text-slate-600 text-sm rounded-full border border-slate-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Testimonial */}
          {project.frontmatter.testimonial && (
            <FadeIn delay={0.5}>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg shadow-slate-200/50 border border-slate-100 text-center">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <Image
                    src={project.frontmatter.testimonial.avatar}
                    alt={project.frontmatter.testimonial.name}
                    fill
                    className="rounded-full object-cover border-4 border-slate-50"
                  />
                </div>
                <blockquote className="text-2xl font-medium text-slate-900 mb-6 leading-relaxed">
                  &quot;{project.frontmatter.testimonial.quote}&quot;
                </blockquote>
                <div>
                  <div className="font-bold text-slate-900 text-lg">
                    {project.frontmatter.testimonial.name}
                  </div>
                  <div className="text-teal-600 font-medium">
                    {project.frontmatter.testimonial.role}
                  </div>
                </div>
              </div>
            </FadeIn>
          )}

          {/* Next Steps CTA */}
          <FadeIn delay={0.6}>
            <div className="text-center pt-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to start your success story?</h2>
              <Button asChild size="lg" className="rounded-full px-8 h-12 text-base">
                <a href="/contact">Schedule Your Consultation</a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </article>
  )
}
