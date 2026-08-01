import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { getPosts } from '@/lib/posts';
import { BlogList } from '@/components/blog/blog-list';
import { formatDate } from '@/lib/utils';

export const revalidate = 3600;
export const metadata: Metadata = {
  title: 'Field Notes | Crest Code Creative',
  description: 'Practical notes on digital products, web development, automation, and building technology for real businesses.',
  alternates: { canonical: '/blog' },
};

const blogCategories = ['All', 'Web Development', 'Design', 'Business', 'Technology', 'Tutorial'];

export default async function BlogPage() {
  const posts = await getPosts();
  const featuredPost = posts[0];

  return (
    <main className="bg-[#f6f8f6]">
      <section className="py-20 sm:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8"><p className="field-label mb-6">Field notes</p><h1 className="display-title">Useful thinking from inside the work.</h1></div>
          <p className="max-w-md text-lg leading-8 text-foreground/65 lg:col-span-4">Practical notes on product decisions, software, automation, and helping businesses use technology with more clarity.</p>
        </div>
      </section>

      {featuredPost && (
        <section className="bg-white py-16 sm:py-24">
          <div className="site-container">
            <Link href={`/blog/${featuredPost.slug}`} className="group grid border-y border-foreground/20 py-5 lg:grid-cols-12 lg:gap-8">
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-[#dce7e8] lg:col-span-7">
                <Image src={featuredPost.coverImage || '/images/blog/n8n-automation-hub.png'} alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
              </div>
              <div className="flex flex-col justify-between py-6 lg:col-span-5 lg:py-3">
                <div><p className="field-label">Featured note · {formatDate(featuredPost.date)}</p><h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.035em] sm:text-5xl">{featuredPost.title}</h2><p className="mt-5 text-lg leading-8 text-foreground/65">{featuredPost.description}</p></div>
                <span className="link-arrow mt-8">Read the note <ArrowUpRight className="h-4 w-4" /></span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="bg-white pb-24 sm:pb-32">
        <div className="site-container"><div className="mb-8 border-b border-foreground/20 pb-5"><h2 className="text-3xl font-semibold tracking-[-0.03em]">All notes</h2></div><BlogList posts={posts} categories={blogCategories} /></div>
      </section>
    </main>
  );
}
