import { BlogCard } from '@/components/blog/blog-card';
import { getPosts } from '@/lib/posts';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/ui/motion';

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-gray-600 mb-12">
          Insights, tutorials, and updates from our team.
        </p>
      </FadeIn>

      {/* Filter Tags */}
      <FadeIn className="mb-12">
        <div className="flex flex-wrap gap-4">
          {blogCategories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Blog Grid */}
      <FadeInStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <FadeInStaggerItem key={post.slug}>
            <BlogCard
              {...post}
              author="Team"
              readingTime="5 min read"
              coverImage="/images/blog/default-cover.jpg"
            />
          </FadeInStaggerItem>
        ))}
      </FadeInStagger>
    </div>
  );
}

const blogCategories = [
  'All',
  'Web Development',
  'Design',
  'Business',
  'Technology',
  'Tutorial',
];
