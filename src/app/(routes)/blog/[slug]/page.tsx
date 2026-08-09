import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import { getPostBySlug, getPosts } from '@/lib/posts';
import { formatDate } from '@/lib/utils';
import { MDXContent } from '@/components/mdx-content';

export const revalidate = 3600;
export const dynamicParams = false;

const aiPostSlug = 'ai-for-small-business-gunnison-valley';
const aiCoverImage = 'https://gunnisoncrestedbutte.com/wp-content/uploads/elk-avenue-crested-butte-colorado-summer-scaled.jpg';

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return { title: `${post.frontmatter.title} | Crest Code Field Notes`, description: post.frontmatter.description, alternates: { canonical: `/blog/${post.slug}` } };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();
  const isAiPost = post.slug === aiPostSlug;

  return (
    <article className="bg-[#f6f8f6]">
      <header className="site-container py-16 sm:py-24">
        <Link href="/blog" className="mb-12 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-foreground/60 hover:text-foreground"><ArrowLeft className="h-4 w-4" /> All field notes</Link>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8"><p className="field-label mb-6">Field note · {formatDate(post.frontmatter.date)}</p><h1 className="display-title">{post.frontmatter.title}</h1></div>
          {post.frontmatter.description && <p className="text-lg leading-8 text-foreground/68 lg:col-span-4">{post.frontmatter.description}</p>}
        </div>
        {isAiPost && (
          <figure className="mt-12 overflow-hidden rounded-sm sm:mt-16">
            <img src={aiCoverImage} alt="Elk Avenue in Crested Butte on a summer day, with downtown businesses and Mount Crested Butte in the background" className="aspect-[3/2] w-full object-cover" />
            <figcaption className="mt-3 text-xs leading-5 text-foreground/45">Elk Avenue, Crested Butte.</figcaption>
          </figure>
        )}
      </header>
      <section className="bg-white py-16 sm:py-24">
        <div className="site-container grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-3"><div className="lg:sticky lg:top-28"><p className="field-label mb-4">From Crest Code</p><p className="text-sm leading-6 text-foreground/55">Practical observations from designing, building, and operating digital products.</p></div></aside>
          <div className="lg:col-span-8 lg:col-start-5"><MDXContent source={post.content} /></div>
        </div>
      </section>
    </article>
  );
}
