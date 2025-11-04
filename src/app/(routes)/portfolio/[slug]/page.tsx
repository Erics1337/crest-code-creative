import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getProjectBySlug, getProjects } from '@/lib/projects'
import { Button } from '@/components/ui/button'
import { MDXContent } from '@/components/mdx-content'

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
    <article className="py-8">
      {/* Hero Section */}
      <div className="relative h-[420px] w-full mb-10 overflow-hidden">
        <Image
          src={project.frontmatter.imageUrl}
          alt={project.frontmatter.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-6">
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
                {project.frontmatter.title}
              </h1>
              <div className="text-white/90 mb-4">
                {project.frontmatter.clientName} • {project.frontmatter.industry}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.frontmatter.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white/15 text-white text-xs backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Summary Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <p className="text-lg text-gray-700">{project.frontmatter.description}</p>
            </div>

            {/* Project Details Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-semibold text-primary mb-3">The Challenge</h2>
                <p className="text-gray-700 leading-relaxed">{project.frontmatter.challenge}</p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-semibold text-primary mb-3">Our Solution</h2>
                <p className="text-gray-700 leading-relaxed">{project.frontmatter.solution}</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-primary mb-3">Impact</h2>
              <p className="text-gray-700 leading-relaxed">{project.frontmatter.impact}</p>
            </div>

            {/* Project Content */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="prose max-w-none prose-headings:scroll-mt-24 prose-p:leading-relaxed prose-a:text-primary prose-a:font-medium prose-a:underline underline-offset-4 prose-a:decoration-primary/30 hover:prose-a:text-primary/80 hover:prose-a:decoration-primary/50 focus-visible:prose-a:outline-none focus-visible:prose-a:ring-2 focus-visible:prose-a:ring-primary/30 prose-a:rounded-sm">
                <MDXContent source={project.content} />
              </div>
            </div>

            {/* Testimonial */}
            {project.frontmatter.testimonial && (
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <blockquote className="relative text-lg text-gray-700 italic leading-relaxed">
                  <span className="block border-l-4 border-primary pl-4">
                    “{project.frontmatter.testimonial.quote}”
                  </span>
                </blockquote>
                <div className="flex items-center gap-4 mt-6">
                  <div className="relative w-12 h-12">
                    <Image
                      src={project.frontmatter.testimonial.avatar}
                      alt={project.frontmatter.testimonial.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">
                      {project.frontmatter.testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {project.frontmatter.testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="text-center">
              <Button asChild size="lg">
                <a href="/contact">Start Your Project</a>
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 h-max space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold mb-4">Project Details</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-600">Client</dt>
                  <dd className="font-medium">{project.frontmatter.clientName}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Industry</dt>
                  <dd className="font-medium">{project.frontmatter.industry}</dd>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <dt className="text-gray-600 mb-2">Technologies</dt>
                  <dd className="flex flex-wrap gap-2">
                    {project.frontmatter.technologies.map((tech: string) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-800 text-xs">
                        {tech}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </div>
    </article>
  )
}
