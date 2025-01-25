import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
// import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { useMDXComponents } from '@/mdx-components'

interface MDXContentProps {
  source: string
}

export function MDXContent({ source }: MDXContentProps) {
  const components = useMDXComponents({})
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold">
      <MDXRemote
        source={source}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeSlug,
              rehypeRaw,
              [rehypePrismPlus, { ignoreMissing: true }],
              [rehypeAutolinkHeadings, { behavior: 'wrap' }],
            ],
          },
        }}
        components={components}
      />
    </div>
  )
}
