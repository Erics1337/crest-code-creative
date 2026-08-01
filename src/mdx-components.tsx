import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="mb-6 mt-16 text-5xl font-semibold">{children}</h1>,
    h2: ({ children }) => <h2 className="mb-5 mt-16 text-4xl font-semibold">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-4 mt-10 text-2xl font-semibold">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold mt-6 mb-3">{children}</h4>,
    h5: ({ children }) => <h5 className="text-lg font-bold mt-4 mb-2">{children}</h5>,
    h6: ({ children }) => <h6 className="text-base font-bold mt-4 mb-2">{children}</h6>,
    p: ({ children }) => <p className="mb-6 leading-8">{children}</p>,
    a: ({ href, children }) => {
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
