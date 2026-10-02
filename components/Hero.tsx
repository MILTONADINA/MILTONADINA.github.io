import Link from 'next/link';
import { profile, stats } from '@/lib/data';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-grid">
      <div aria-hidden="true" className="glow-orb left-[-10%] top-[-20%] h-[420px] w-[420px] bg-accent/15" />
      <div aria-hidden="true" className="glow-orb right-[-10%] top-[10%] h-[380px] w-[380px] bg-accent-violet/15" />
      <div className="relative mx-auto max-w-6xl px-5 py-8 md:py-10">
        <p className="max-w-3xl text-base font-medium leading-relaxed text-accent-cyan">{profile.openTo}</p>
        <h1 className="mt-4 max-w-5xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-4 max-w-4xl text-xl font-medium leading-snug text-slate-200 sm:text-3xl">{profile.title}</p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">Edmond, Oklahoma · Computer Science (Cybersecurity) · Expected graduation April 30, 2027</p>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">{profile.tagline}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#project-brightpath" className="button-primary">View projects <span aria-hidden="true">↓</span></a>
          <Link href="/resume/" className="button-secondary">View résumé <span aria-hidden="true">→</span></Link>
        </div>
        <div className="mt-5 flex flex-col items-start gap-x-7 gap-y-2 text-base sm:flex-row sm:flex-wrap" role="group" aria-label="Professional profiles and email">
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-link break-all">
            github.com/MILTONADINA <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-link break-all">
            linkedin.com/in/miltonadina <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={`mailto:${profile.email}`} className="text-link break-all">{profile.email}</a>
        </div>
        <div className="mt-6 space-y-2 border-t border-ink-700 pt-4 text-sm leading-relaxed text-slate-300" role="group" aria-label="Background at a glance">
          <p><span className="font-medium text-slate-200">{stats[0].sub}</span> · {stats[0].label} · {stats[0].details?.[0]}</p>
          <p>{stats[1].label}</p>
          <p><span className="font-medium text-slate-200">Languages used:</span> {stats[2].details?.join(' · ')}</p>
        </div>
      </div>
    </section>
  );
}
