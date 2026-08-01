import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }) => <h1 {...props} className="mb-6 mt-16 text-5xl font-semibold">{children}</h1>,
    h2: ({ children, ...props }) => <h2 {...props} className="mb-5 mt-16 text-4xl font-semibold">{children}</h2>,
    h3: ({ children, ...props }) => <h3 {...props} className="mb-4 mt-10 text-2xl font-semibold">{children}</h3>,
    h4: ({ children, ...props }) => <h4 {...props} className="mb-3 mt-6 text-xl font-bold">{children}</h4>,
    h5: ({ children, ...props }) => <h5 {...props} className="mb-2 mt-4 text-lg font-bold">{children}</h5>,
    h6: ({ children, ...props }) => <h6 {...props} className="mb-2 mt-4 text-base font-bold">{children}</h6>,
    p: ({ children }) => <p className="mb-6 leading-8">{children}</p>,
    a: ({ href, children }) => {
      if (href?.startsWith('#')) {
        return <a href={href} className="text-inherit no-underline">{children}</a>
      }
      const isExternal = href?.startsWith('http')
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent underline decoration-1 underline-offset-4"
          >
            {children}
          </a>
        )
      }
      return (
        <Link href={href || '/'} className="font-semibold text-accent underline decoration-1 underline-offset-4">
          {children}
        </Link>
      )
    },
    img: ({ src, alt }) => (
      <Image
        src={src || ''}
        alt={alt || ''}
        width={720}
        height={480}
        className="my-10 rounded-sm"
      />
    ),
    pre: ({ children }) => (
      <pre className="my-8 overflow-x-auto rounded-lg bg-[#151a19] p-5 text-white">
        {children}
      </pre>
    ),
    code: ({ children }) => (
      <code className="rounded bg-[#dce7e8] px-1 py-0.5">
        {children}
      </code>
    ),
    ul: ({ children }) => <ul className="mb-8 list-disc space-y-2 pl-6">{children}</ul>,
    ol: ({ children }) => <ol className="mb-8 list-decimal space-y-2 pl-6">{children}</ol>,
    li: ({ children }) => <li className="pl-1 leading-7">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="my-10 border-l border-accent pl-6 font-editorial text-2xl not-italic leading-relaxed">
        {children}
      </blockquote>
    ),
    ...components,
  }
}
