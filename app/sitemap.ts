import type { MetadataRoute } from 'next';
import { projects } from '@/lib/data';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://miltonadina.github.io',
      lastModified: new Date('2026-10-01'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    { url: 'https://miltonadina.github.io/resume/', lastModified: new Date('2026-10-01'), changeFrequency: 'monthly', priority: 0.8 },
    ...projects.map(project => ({
      url: `https://miltonadina.github.io/work/${project.slug}/`,
      lastModified: new Date('2026-10-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
