import Link from 'next/link';
import { projects, profile, type Project } from '@/lib/data';
import EvidenceGallery from '@/components/EvidenceGallery';

const projectGroups: { categories: Project['category'][]; title: string; intro: string }[] = [
  { categories: ['client'], title: 'Client engagements', intro: 'Freelance engineering for education, agency services and family applications. Client identities and source remain confidential; the accounts below explain my responsibilities, implementation decisions and permitted evidence.' },
  { categories: ['open-source'], title: 'Developer tools and collaborative engineering', intro: 'DevOPs is my independent open-source project. Graph Engineering extends a collaborative project, with the original foundation and upstream proposals credited separately.' },
  { categories: ['product'], title: 'Independent product', intro: 'Founder-led product development, separate from client engagements.' },
  { categories: ['contribution'], title: 'Contributions to other teams', intro: 'Security submissions and public documentation work, with authored scope and acceptance status stated separately.' },
  { categories: ['coursework', 'lab'], title: 'Coursework and security practice', intro: 'University projects and a documented application-security lab, with learning context and personal contribution explained.' },
];

// Keep the overview and detailed accounts in the same reading order.
const orderedGroups = projectGroups.map(group => ({
  ...group,
  projects: projects.filter(project => group.categories.includes(project.category)),
}));

function ProjectCard({ project: p, grouped = false }: { project: Project; grouped?: boolean }) {
  const Heading = grouped ? 'h4' : 'h3';
  const Subheading = grouped ? 'h5' : 'h4';
  return (
    <article id={`project-${p.slug}`} aria-labelledby={`${p.slug}-heading`} className={`min-w-0 rounded-2xl border border-ink-600/70 bg-gradient-to-b ${p.accentFrom} to-ink-900/60 p-5 focus-within:border-accent-cyan sm:p-8`}>
      <p className="text-sm font-medium leading-relaxed text-slate-300">{p.workType}{p.period && ` · ${p.period}`}</p>
      <Heading id={`${p.slug}-heading`} className={`mt-2 text-2xl font-bold sm:text-3xl ${p.accentText}`}>{p.name}</Heading>
      <p className="mt-3 text-base font-medium text-slate-100">{p.role}</p>
      {p.stage && <p className="mt-3 text-base leading-relaxed text-slate-300"><span className="font-semibold text-slate-200">Stage:</span> {p.stage}</p>}
      <p className="mt-4 max-w-4xl text-lg leading-relaxed text-slate-200">{p.blurb}</p>
      {p.audience && <p className="mt-3 text-base leading-relaxed text-slate-300"><span className="font-semibold text-slate-200">Built for:</span> {p.audience}</p>}
      <div className="mt-7 grid gap-7 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        <section aria-labelledby={`${p.slug}-heading ${p.slug}-contribution`}>
          <Subheading id={`${p.slug}-contribution`} className="text-lg font-semibold text-white">My contribution</Subheading>
          <ul className="mt-3 space-y-3 text-base leading-7 text-slate-300">{p.summaryPoints.map(point => <li key={point} className="flex gap-3"><span aria-hidden="true" className={`mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full ${p.accentDot}`} /><span>{point}</span></li>)}</ul>
        </section>
        <div className="space-y-6">
          <section aria-labelledby={`${p.slug}-heading ${p.slug}-approach`}>
            <Subheading id={`${p.slug}-approach`} className="text-lg font-semibold text-white">Engineering decisions</Subheading>
            <p className="mt-3 text-base leading-7 text-slate-300">{p.overview.approach}</p>
          </section>
          <section aria-labelledby={`${p.slug}-heading ${p.slug}-evidence`}>
            <Subheading id={`${p.slug}-evidence`} className="text-lg font-semibold text-white">Evidence and current scope</Subheading>
            {p.overview.outcome && <p className="mt-3 text-base leading-7 text-slate-200"><span className="font-semibold">Recorded repair: </span>{p.overview.outcome}</p>}
            <p className="mt-3 text-base leading-7 text-slate-300">{p.overview.evidence}</p>
          </section>
        </div>
      </div>
      <section aria-labelledby={`${p.slug}-heading ${p.slug}-tools`} className="mt-6 border-t border-ink-600/60 pt-5">
        <Subheading id={`${p.slug}-tools`} className="text-base font-semibold text-slate-200">Languages and tools</Subheading>
        <ul className="mt-3 flex flex-wrap gap-2">{p.stack.map(tool => <li key={tool} className="rounded-md border border-ink-600 bg-ink-900/60 px-2.5 py-1.5 text-sm text-slate-200">{tool}</li>)}</ul>
      </section>
      <EvidenceGallery project={p} className="mt-7" />
      <div className="mt-6 flex flex-wrap gap-x-7 gap-y-2 border-t border-ink-600/60 pt-4">
        <Link href={`/work/${p.slug}/`} className={`inline-flex min-h-11 items-center gap-2 text-base font-semibold underline decoration-current/50 underline-offset-4 hover:decoration-current ${p.accentText}`}>
          Full project account<span className="sr-only">: {p.name}</span><span aria-hidden="true">→</span>
        </Link>
        {p.links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="text-link inline-flex min-h-11 items-center gap-2 text-base">{link.label}<span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>)}
      </div>
    </article>
  );
}

export default function Projects() {
  const clients = orderedGroups[0];
  return <section id="work" className="section-shell !pb-6 !pt-6 md:!pb-8">
    <nav aria-label="Project index" className="rounded-xl border border-ink-700 bg-ink-900/60 p-4 sm:px-5">
      <p className="font-semibold text-white">Jump to a project</p>
      <div className="mt-3 grid gap-x-6 gap-y-3 md:grid-cols-3">
        {orderedGroups.map(group => <div key={group.title}>
          <p className="text-sm font-medium text-slate-300">{group.title}</p>
          <ul className="flex flex-wrap gap-x-4">{group.projects.map(p => <li key={p.slug}>
            <a className="text-link inline-flex min-h-11 items-center text-base font-medium" href={`#project-${p.slug}`}>{p.name}</a>
          </li>)}</ul>
        </div>)}
      </div>
    </nav>
    <div className="section-heading mt-8"><h2>{clients.title}</h2><span aria-hidden="true" /></div>
    <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">{clients.intro}</p>
    <div className="mt-8 space-y-8">{clients.projects.map(p => <ProjectCard key={p.slug} project={p} />)}</div>
  </section>;
}

export function MoreProjects() {
  return <section id="more-work" className="section-shell !pt-6 md:!pt-8">
    <div className="section-heading"><h2>Independent work and contributions</h2><span aria-hidden="true" /></div>
    {orderedGroups.slice(1).map((group, i) => <div key={group.title} className={i ? 'mt-12' : 'mt-8'}>
      <h3 className="text-xl font-semibold text-white sm:text-2xl">{group.title}</h3>
      <p className="mb-6 mt-3 max-w-3xl text-base leading-relaxed text-slate-300">{group.intro}</p>
      <div className="space-y-8">{group.projects.map(p => <ProjectCard key={p.slug} project={p} grouped />)}</div>
      {group.categories.includes('coursework') && <a href={`${profile.showcase}/tree/main/Coursework`} target="_blank" rel="noreferrer" className="text-link mt-6 inline-flex min-h-11 items-center gap-2 text-base">
        Additional coursework: Java, web, C++ and algorithms<span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span>
      </a>}
    </div>)}
  </section>;
}
