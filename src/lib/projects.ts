import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const projectsDirectory = path.join(process.cwd(), 'content/projects')

export type ProjectMetadata = {
  title: string
  date: string
  description: string
  slug: string
  clientName: string
  industry: string
  challenge: string
  solution: string
  impact: string
  imageUrl: string
  technologies: string[]
  testimonial?: {
    name: string
    role: string
    quote: string
    avatar: string
  }
}

export async function getProjectBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(projectsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug: realSlug,
    frontmatter: data,
    content
  }
}

export async function getProjects(): Promise<ProjectMetadata[]> {
  const files = fs.readdirSync(projectsDirectory)
  const projects = files
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => {
      const fullPath = path.join(projectsDirectory, file)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      const slug = file.replace(/\.mdx$/, '')

      return {
        ...data,
        slug,
        date: new Date(data.date).toISOString(),
      } as ProjectMetadata
    })
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))

  return projects
}

export async function getProjectMetadata(slug: string): Promise<ProjectMetadata | null> {
  try {
    const { frontmatter, slug: projectSlug } = await getProjectBySlug(slug)
    return {
      ...frontmatter,
      slug: projectSlug,
    } as ProjectMetadata
  } catch {
    return null
  }
}
