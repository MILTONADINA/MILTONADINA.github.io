import type { Project } from '@/lib/data';
import { evidenceAssets } from '@/lib/evidence';

export default function EvidenceGallery({ project, className = '' }: { project: Project; className?: string }) {
  const assets = evidenceAssets.filter(asset => asset.project === project.slug);
  if (!assets.length) return null;
  return <div className={`grid gap-6 md:grid-cols-2 ${className}`}>
    {assets.map(asset => <figure key={asset.file} className="min-w-0">
      <a href={`/evidence/${asset.file}`} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-xl border border-ink-600" aria-label={`Open ${project.name}: ${asset.title}, full size in a new tab`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/evidence/${asset.file}`} alt={`${project.name}: ${asset.title}`} width={asset.width} height={asset.height} loading="lazy" className="h-auto w-full bg-ink-950" />
      </a>
      <figcaption className="mt-3 text-sm leading-6 text-slate-300"><span className="mb-1 block font-semibold text-slate-100">{asset.title}</span>{asset.caption}</figcaption>
    </figure>)}
  </div>;
}
