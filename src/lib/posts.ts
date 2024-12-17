import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export type PostMetadata = {
  title: string
  date: string
  description: string
  slug: string
  tags?: string[]
}

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug: realSlug,
    frontmatter: data,
    content
  }
}

export async function getPosts(): Promise<PostMetadata[]> {
  const files = fs.readdirSync(postsDirectory)
  const posts = files
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => {
      const fullPath = path.join(postsDirectory, file)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      const slug = file.replace(/\.mdx$/, '')

      return {
        ...data,
        slug,
        date: new Date(data.date).toISOString(),
      } as PostMetadata
    })
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))

  return posts
}

export async function getPostMetadata(slug: string): Promise<PostMetadata | null> {
  try {
    const { frontmatter, slug: postSlug } = await getPostBySlug(slug)
    return {
      ...frontmatter,
      slug: postSlug,
      date: new Date(frontmatter.date).toISOString(),
    } as PostMetadata
  } catch {
    return null
  }
}
