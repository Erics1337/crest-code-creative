import type { MetadataRoute } from 'next';
import { getPosts } from '@/lib/posts';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://crestcodecreative.com';

const staticRoutes = [
  '/',
  '/about',
  '/contact',
  '/portfolio',
  '/services',
  '/services/web-design',
  '/services/mobile-apps',
  '/services/software-development',
  '/services/n8n-automations',
  '/blog',
  '/packages',
  '/promo',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: new URL(route, baseUrl).toString(),
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: new URL(`/blog/${post.slug}`, baseUrl).toString(),
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
