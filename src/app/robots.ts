import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.crestcodecreative.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'GPTBot',
        disallow: ['/'],
      },
      {
        userAgent: 'OAI-SearchBot',
        disallow: ['/'],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
