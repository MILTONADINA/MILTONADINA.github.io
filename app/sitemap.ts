import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://miltonadina.github.io',
      lastModified: new Date('2026-05-30'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
