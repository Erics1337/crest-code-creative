import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import type { PostMetadata } from '@/lib/posts'

interface PostsProps {
  posts: PostMetadata[]
}

export function Posts({ posts }: PostsProps) {
  return (
    <div className="space-y-10">
      {posts.map((post) => (
        <article key={post.slug} className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:underline"
              >
                {post.title}
              </Link>
            </h2>
            <div className="text-gray-500 dark:text-gray-400">
              {formatDate(post.date)}
            </div>
          </div>
          {post.description && (
            <p className="text-gray-600 dark:text-gray-300">
              {post.description}
            </p>
          )}
          <div className="flex gap-2">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-800 px-2 py-1 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}
