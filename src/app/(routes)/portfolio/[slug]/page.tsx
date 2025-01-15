import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getProjectBySlug, getProjects } from '@/lib/projects'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Button } from '@/components/ui/button'

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
    <article className="container max-w-4xl py-12">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden">
        <Image
          src={project.frontmatter.imageUrl}
          alt={project.frontmatter.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Project Header */}
      <div className="space-y-4 mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.frontmatter.technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary/5 text-primary rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <h1 className="text-4xl font-bold">{project.frontmatter.title}</h1>
        <div className="text-gray-600">
          {project.frontmatter.clientName} • {project.frontmatter.industry}
        </div>
        <p className="text-xl text-gray-600">
          {project.frontmatter.description}
        </p>
      </div>

      {/* Project Details */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">The Challenge</h2>
            <p className="text-gray-600">{project.frontmatter.challenge}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">Our Solution</h2>
            <p className="text-gray-600">{project.frontmatter.solution}</p>
          </div>
        </div>
        <div>
          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">Impact</h2>
            <p className="text-gray-600">{project.frontmatter.impact}</p>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="prose dark:prose-invert max-w-none mb-12">
        <MDXRemote source={project.content} />
      </div>

      {/* Testimonial */}
      {project.frontmatter.testimonial && (
        <div className="bg-primary/5 rounded-2xl p-8 mb-12">
          <blockquote className="text-xl text-gray-600 italic mb-4">
            &quot;{project.frontmatter.testimonial.quote}&quot;
          </blockquote>
          <div className="flex items-center gap-4">
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
    </article>
  )
}
