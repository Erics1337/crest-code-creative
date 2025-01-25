import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold mt-6 mb-3">{children}</h4>,
    h5: ({ children }) => <h5 className="text-lg font-bold mt-4 mb-2">{children}</h5>,
    h6: ({ children }) => <h6 className="text-base font-bold mt-4 mb-2">{children}</h6>,
    p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
    a: ({ href, children }) => {
      const isExternal = href?.startsWith('http')
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {children}
          </a>
        )
      }
      return (
        <Link href={href || '/'} className="text-blue-600 hover:underline">
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
        className="my-8 rounded-lg"
      />
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-900 text-white p-4 rounded-lg my-6 overflow-x-auto">
        {children}
      </pre>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5">
        {children}
      </code>
    ),
    ul: ({ children }) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
    li: ({ children }) => <li className="mb-1">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
    ...components,
  }
}
