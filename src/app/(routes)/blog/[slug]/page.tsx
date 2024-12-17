import { notFound } from 'next/navigation'
import { getPostBySlug, getPosts } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container max-w-3xl py-6 lg:py-12">
      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-bold">{post.frontmatter.title}</h1>
        <div className="text-gray-500 dark:text-gray-400">
          {formatDate(post.frontmatter.date)}
        </div>
        {post.frontmatter.description && (
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {post.frontmatter.description}
          </p>
        )}
        {post.frontmatter.tags && (
          <div className="flex gap-2">
            {post.frontmatter.tags.map((tag: string) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-800 px-2 py-1 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  )
}