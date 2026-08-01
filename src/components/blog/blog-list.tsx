'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { PostMetadata } from '@/lib/posts';
import { BlogCard } from './blog-card';

interface BlogListProps {
  posts: PostMetadata[];
  categories: string[];
}

export function BlogList({ posts, categories }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.tags?.includes(selectedCategory);
    const matchesSearch = `${post.title} ${post.description}`.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12">
      <div className="flex flex-col justify-between gap-6 border-b border-foreground/20 pb-8 md:flex-row md:items-center">
        <div className="flex flex-wrap gap-2" aria-label="Filter field notes by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
              className={`min-h-10 rounded-full px-4 text-sm font-semibold transition-colors ${selectedCategory === category ? 'bg-foreground text-background' : 'border border-foreground/20 bg-white text-foreground/60 hover:border-foreground hover:text-foreground'}`}
            >
              {category}
            </button>
          ))}
        </div>
        <label className="relative block w-full md:w-72">
          <span className="sr-only">Search field notes</span>
          <MagnifyingGlassIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/40" />
          <input
            type="search"
            placeholder="Search field notes"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="block min-h-11 w-full rounded-full border border-foreground/25 bg-white py-2 pl-11 pr-4 text-sm placeholder:text-foreground/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        </label>
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => <BlogCard key={post.slug} {...post} author="Crest Code" />)}
        </div>
      ) : (
        <div className="border-y border-foreground/20 py-20 text-center">
          <p className="text-xl text-foreground/55">No notes match those filters.</p>
          <button type="button" onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }} className="mt-4 font-semibold text-accent underline underline-offset-4">Clear filters</button>
        </div>
      )}
    </div>
  );
}
