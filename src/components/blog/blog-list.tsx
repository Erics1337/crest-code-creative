'use client';

import { useState } from 'react';
import { PostMetadata } from '@/lib/posts';
import { BlogCard } from './blog-card';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/ui/motion';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface BlogListProps {
    posts: PostMetadata[];
    categories: string[];
}

export function BlogList({ posts, categories }: BlogListProps) {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPosts = posts.filter((post) => {
        const matchesCategory =
            selectedCategory === 'All' || post.tags?.includes(selectedCategory);
        const matchesSearch =
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.description.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    return (
        <div className="space-y-12">
            {/* Controls */}
            <FadeIn>
                <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    {/* Categories */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                        ? 'bg-primary text-white shadow-md'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-64">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-colors"
                        />
                    </div>
                </div>
            </FadeIn>

            {/* Results */}
            {filteredPosts.length > 0 ? (
                <FadeInStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post) => (
                        <FadeInStaggerItem key={post.slug}>
                            <BlogCard {...post} author="Team" />
                        </FadeInStaggerItem>
                    ))}
                </FadeInStagger>
            ) : (
                <FadeIn>
                    <div className="text-center py-20">
                        <p className="text-xl text-gray-500">No articles found matching your criteria.</p>
                        <button
                            onClick={() => {
                                setSelectedCategory('All');
                                setSearchQuery('');
                            }}
                            className="mt-4 text-primary font-medium hover:underline"
                        >
                            Clear filters
                        </button>
                    </div>
                </FadeIn>
            )}
        </div>
    );
}
