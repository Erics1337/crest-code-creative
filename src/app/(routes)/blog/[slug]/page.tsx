import { notFound } from 'next/navigation'
import { getPostBySlug, getPosts } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params
  const post = await getPostBySlug(resolvedParams.slug)

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
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  )
}