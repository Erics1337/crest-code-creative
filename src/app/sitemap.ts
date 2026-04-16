import type { MetadataRoute } from 'next';
import { getPosts } from '@/lib/posts';
import { getProjects } from '@/lib/projects';

// Use www as canonical — this must match what's configured in Vercel/DNS
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.crestcodecreative.com';

const staticRoutes = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/services/web-design', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/services/mobile-apps', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/services/software-development', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/services/n8n-automations', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/portfolio', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/blog', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/contact', priority: 0.7, changeFrequency: 'yearly' as const },
  { path: '/about', priority: 0.6, changeFrequency: 'yearly' as const },
  { path: '/packages', priority: 0.6, changeFrequency: 'monthly' as const },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, projects] = await Promise.all([getPosts(), getProjects()]);

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: new URL(path, baseUrl).toString(),
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: new URL(`/blog/${post.slug}`, baseUrl).toString(),
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: new URL(`/portfolio/${project.slug}`, baseUrl).toString(),
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...projectEntries, ...postEntries];
}

