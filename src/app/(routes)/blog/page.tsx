import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getPosts } from '@/lib/posts';
import { FadeIn } from '@/components/ui/motion';
import { BlogList } from '@/components/blog/blog-list';
import { formatDate } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

export const revalidate = 3600;
export const metadata: Metadata = {
  alternates: {
    canonical: '/blog',
  },
};

const blogCategories = [
  'All',
  'Web Development',
  'Design',
  'Business',
  'Technology',
  'Tutorial',
];

export default async function BlogPage() {
  const posts = await getPosts();
  const featuredPost = posts[0];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-16 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Insights & Updates
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Expert advice, technical tutorials, and industry insights to help you navigate the digital landscape.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Post */}
        {featuredPost && (
          <FadeIn className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group grid md:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-64 md:h-auto overflow-hidden">
                <Image
                  src={featuredPost.coverImage || '/images/blog/default-cover.jpg'}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Read Article <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                  <time dateTime={featuredPost.date}>{formatDate(featuredPost.date)}</time>
                  <span>•</span>
                  <span className="text-primary font-medium">Featured</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed line-clamp-3">
                  {featuredPost.description}
                </p>
              </div>
            </Link>
          </FadeIn>
        )}

        {/* Blog List */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <BlogList posts={posts} categories={blogCategories} />
        </div>
      </div>
    </div>
  );
}
