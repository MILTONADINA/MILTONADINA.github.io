import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import EvidenceGallery from '@/components/EvidenceGallery';
import { projects } from '@/lib/data';

export const dynamicParams = false;
export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }

type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} | Milton Adina Shisia`,
    description: project.blurb,
    alternates: { canonical: `https://miltonadina.github.io/work/${project.slug}/` },
    openGraph: { title: `${project.name} | Milton Adina Shisia`, description: project.blurb, url: `https://miltonadina.github.io/work/${project.slug}/`, type: 'article', images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Milton Adina Shisia, software engineering and application security' }] },
    twitter: { card: 'summary_large_image', title: `${project.name} | Milton Adina Shisia`, description: project.blurb, images: ['/og.png'] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = projects.find(project => project.slug === slug);
  if (!p) notFound();
  const related = projects.filter(project => project.slug !== p.slug && project.category === p.category).slice(0, 2);
  return <>
    <Nav />
    <main id="main-content" tabIndex={-1}>
      <header className={`border-b border-ink-700 bg-gradient-to-b ${p.accentFrom} to-ink-950`}>
        <div className="mx-auto max-w-6xl px-5 pb-12 pt-8 sm:pb-16">
          <Link href="/#work" className="text-link inline-flex min-h-11 items-center text-base">← All projects</Link>
          <p className="mt-6 text-base font-medium text-slate-300">{p.workType}{p.period && ` · ${p.period}`}</p>
          <h1 className={`mt-3 text-3xl font-bold leading-tight tracking-tight min-[360px]:text-4xl sm:text-6xl ${p.accentText}`}>{p.name}</h1>
          <p className="mt-5 max-w-4xl text-xl font-medium leading-relaxed text-slate-100 sm:text-2xl">{p.domain}</p>
          <p className="mt-4 text-base text-slate-300">My role: <span className="font-medium text-white">{p.role}</span></p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">{p.blurb}</p>
          {p.audience && <dl className="mt-8 grid max-w-4xl gap-5 rounded-xl border border-ink-600/70 bg-ink-900/60 p-5 sm:grid-cols-2">
            <div><dt className="text-sm font-semibold text-slate-200">Built for</dt><dd className="mt-2 text-base leading-relaxed text-slate-300">{p.audience}</dd></div>
            <div><dt className="text-sm font-semibold text-slate-200">Delivery stage</dt><dd className="mt-2 text-base leading-relaxed text-slate-300">{p.stage}</dd></div>
          </dl>}
          {!p.audience && p.stage && <p className="mt-5 max-w-4xl text-base leading-relaxed text-slate-300"><span className="font-semibold text-slate-200">Stage:</span> {p.stage}</p>}
          {p.category === 'client' && <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300">Client identities, source code and product screens remain confidential. The technical account and permitted evidence below explain my contribution.</p>}
        </div>
      </header>
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-14">
        <article className="min-w-0 space-y-10">
          {p.sections.map(section => <section key={section.title}>
            <h2 className="text-2xl font-semibold leading-snug text-white">{section.title}</h2>
            {section.paragraphs?.map(paragraph => <p key={paragraph} className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">{paragraph}</p>)}
            {section.bullets && <ul className="mt-4 space-y-3">{section.bullets.map(point => <li key={point} className="flex gap-3 text-base leading-7 text-slate-300"><span aria-hidden="true" className={`mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full ${p.accentDot}`} /><span>{point}</span></li>)}</ul>}
          </section>)}
          <EvidenceGallery project={p} />
        </article>
        <aside aria-label="Project details" className="min-w-0 space-y-8">
          <section className="rounded-xl border border-ink-600/70 bg-ink-900 p-5">
            <h2 className="text-lg font-semibold text-white">Technology</h2>
            <ul className="mt-4 flex flex-wrap gap-2">{p.stack.map(tool => <li key={tool} className="rounded-md border border-ink-600 px-2.5 py-1.5 text-sm text-slate-200">{tool}</li>)}</ul>
          </section>
          {p.metrics.length > 0 && <section className="rounded-xl border border-ink-600/70 p-5">
            <h2 className="text-lg font-semibold text-white">At a glance</h2>
            <dl className="mt-4 space-y-4">{p.metrics.map(metric => <div key={metric.label}><dt className="text-sm text-slate-300">{metric.label}</dt><dd className="mt-1 text-lg font-semibold text-white">{metric.value}</dd></div>)}</dl>
            {p.metricsNote && <p className="mt-4 text-sm leading-relaxed text-slate-300">{p.metricsNote}</p>}
          </section>}
          {p.links.length > 0 && <section>
            <h2 className="text-lg font-semibold text-white">Explore the work</h2>
            <ul className="mt-4 space-y-5">{p.links.map(link => <li key={link.href}><a href={link.href} target="_blank" rel="noreferrer" className="text-link block text-base font-medium">{link.label} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span><span className="mt-1 block break-all text-sm font-normal leading-relaxed">{link.href.replace(/^https?:\/\//, '')}</span></a></li>)}</ul>
          </section>}
          <Link href="/resume/" className="button-secondary">View résumé <span aria-hidden="true">→</span></Link>
        </aside>
      </div>
      <section className="border-t border-ink-700 bg-ink-900/40">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <h2 className="text-xl font-semibold text-white">More of my work</h2>
          <div className="mt-5 flex flex-wrap gap-3">{related.map(project => <Link key={project.slug} href={`/work/${project.slug}/`} className="button-secondary">{project.name} <span aria-hidden="true">→</span></Link>)}<Link href="/#work" className="button-secondary">All projects</Link></div>
          <p className="mt-7 text-base text-slate-300">Discuss this work: <a className="text-link" href="mailto:miltonadina@gmail.com">miltonadina@gmail.com</a></p>
        </div>
      </section>
    </main>
  </>;
}
