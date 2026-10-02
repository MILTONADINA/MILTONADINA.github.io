import Link from 'next/link';
import { projects, focusAreas, skills, experience, education, certification, leadership, profile } from '@/lib/data';

export function Skills() {
  return <section id="skills" className="border-y border-ink-800 bg-ink-900/40">
    <div className="section-shell">
      <div className="section-heading"><h2>Technical strengths</h2><span aria-hidden="true" /></div>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">My work connects application development, security controls and practical problem solving. These examples show what I have implemented and where I have contributed.</p>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {focusAreas.map(area => <article key={area.id} id={`focus-${area.id}`} className="rounded-xl border border-ink-700 bg-ink-900/60 p-6">
          <h3 className="text-xl font-semibold text-accent-cyan">{area.title}</h3>
          <p className="mt-3 text-base leading-relaxed text-slate-300">{area.summary}</p>
          <ul className="mt-5 space-y-5">{area.examples.map(example => <li key={example.href}>
            <Link href={example.href} className="text-link inline-flex min-h-11 items-center py-2 text-base font-medium leading-relaxed">{example.label}</Link>
            <p className="mt-1 text-base leading-relaxed text-slate-300">{example.description}</p>
          </li>)}</ul>
        </article>)}
      </div>
      <section aria-labelledby="tools-heading" className="mt-10 rounded-xl border border-ink-600 bg-ink-900/60">
        <h3 id="tools-heading" className="px-6 py-5 text-xl font-semibold text-white">Languages and tools used in this work</h3>
        <div className="grid gap-8 border-t border-ink-700 p-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map(s => <div key={s.group} className={s.group === 'Languages' ? 'md:col-span-2 lg:col-span-3' : undefined}>
            <h4 className="text-lg font-semibold text-accent-cyan">{s.group}</h4>
            <p className="mt-3 text-base leading-7 text-slate-200">{s.items.join(' · ')}</p>
            {s.context && <p className="mt-3 text-sm leading-relaxed text-slate-300">{s.context}</p>}
          </div>)}
        </div>
      </section>
    </div>
  </section>;
}

export function Experience() {
  return <section id="experience" className="section-shell">
    <div className="section-heading"><h2>Experience</h2><span aria-hidden="true" /></div>
    <div className="mt-8 space-y-8">
      {experience.map(e => <article key={e.role} className="border-l-2 border-ink-600 pl-5 sm:pl-7">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <h3 className="text-xl font-semibold text-white">{e.role}</h3>
          <p className="text-sm font-medium text-slate-300">{e.period}</p>
        </div>
        <p className="mt-2 text-base font-medium text-accent-cyan">{e.org}</p>
        <ul className="mt-4 max-w-4xl space-y-3">
          {e.points.map(point => <li key={point} className="flex gap-3 text-base leading-relaxed text-slate-300"><span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" /><span>{point}</span></li>)}
        </ul>
        {e.projects && <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2" role="group" aria-label="Related client engagements">{e.projects.map(slug => {
          const project = projects.find(p => p.slug === slug)!;
          return <Link key={slug} href={`/work/${slug}/`} className="text-link inline-flex min-h-11 items-center text-base">{project.name}<span aria-hidden="true" className="ml-2">→</span></Link>;
        })}</div>}
      </article>)}
    </div>
    <h3 className="mt-12 text-2xl font-semibold text-white">Leadership and community</h3>
    <div className="mt-6 grid gap-5 md:grid-cols-2">
      {leadership.map(e => <article key={e.role + e.org} className="rounded-xl border border-ink-700 p-6">
        <h4 className="text-lg font-semibold text-white">{e.role}</h4>
        <p className="mt-2 text-base text-slate-200">{e.org}</p>
        <p className="mt-1 text-sm text-slate-300">{e.period}</p>
        {e.points.map(p => <p key={p} className="mt-3 text-base leading-relaxed text-slate-300">{p}</p>)}
      </article>)}
    </div>
  </section>;
}

export function Education() {
  return <section id="education" className="border-y border-ink-800 bg-ink-900/40">
    <div className="section-shell">
      <div className="section-heading"><h2>Education</h2><span aria-hidden="true" /></div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {education.map(e => <article key={e.school} className="rounded-xl border border-ink-600/70 bg-ink-900 p-6">
          <h3 className="text-xl font-semibold leading-snug text-white">{e.degree}</h3>
          <p className="mt-3 text-base font-medium text-accent-cyan">{e.school}</p>
          <p className="mt-3 text-base font-medium leading-relaxed text-slate-200">{e.detail}</p>
          <p className="mt-4 text-base leading-relaxed text-slate-300">{e.extra}</p>
        </article>)}
      </div>
      <div className="mt-6 rounded-xl border border-ink-600/70 p-6">
        <h3 className="text-lg font-semibold text-white">Certification in progress</h3>
        <p className="mt-3 text-base leading-relaxed text-slate-200">{certification.name} · {certification.status} · {certification.detail}</p>
      </div>
    </div>
  </section>;
}

export function Contact() {
  return <section id="contact" className="relative overflow-hidden bg-grid">
    <div aria-hidden="true" className="glow-orb left-1/2 top-0 h-[250px] w-[500px] -translate-x-1/2 bg-accent/10" />
    <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Let&apos;s talk.</h2>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">{profile.openTo}. Based in {profile.location}.</p>
      <p className="mt-2 text-base text-slate-300">{profile.visa}</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          {label: 'Email', href: `mailto:${profile.email}`, text: profile.email, external: false},
          {label: 'LinkedIn', href: profile.linkedin, text: 'linkedin.com/in/miltonadina', external: true},
          {label: 'GitHub', href: profile.github, text: 'github.com/MILTONADINA', external: true},
        ].map(link => <div key={link.label} className="rounded-xl border border-ink-600 bg-ink-900/80 p-5">
          <p className="text-sm font-medium text-slate-300">{link.label}</p>
          <a href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined}
            className="text-link mt-3 inline-block break-all text-base font-medium text-slate-100">
            {link.text}{link.external && <><span aria-hidden="true"> ↗</span><span className="sr-only"> (opens in a new tab)</span></>}
          </a>
        </div>)}
      </div>
      <Link href="/resume/" className="button-secondary mt-7">View résumé <span aria-hidden="true">→</span></Link>
    </div>
    <footer className="relative border-t border-ink-700 px-5 py-6 text-sm leading-relaxed text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-x-8 gap-y-3">
        <p>Milton Adina Shisia · Built with Next.js and Tailwind CSS</p>
        <a href="https://github.com/MILTONADINA/MILTONADINA.github.io" target="_blank" rel="noreferrer" className="text-link break-all">github.com/MILTONADINA/MILTONADINA.github.io <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
      </div>
    </footer>
  </section>;
}
