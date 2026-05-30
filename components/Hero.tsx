import { profile, stats } from '@/lib/data';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-grid">
      <div className="glow-orb left-[-10%] top-[-20%] h-[420px] w-[420px] animate-glow bg-accent/20" />
      <div className="glow-orb right-[-10%] top-[10%] h-[380px] w-[380px] animate-glow bg-accent-violet/20" />
      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-20 md:pt-28">
        <p className="animate-fade-up font-mono text-sm text-accent-cyan">{profile.openTo}</p>
        <h1 className="mt-4 animate-fade-up text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-4 animate-fade-up text-xl font-medium text-slate-300 sm:text-2xl">
          {profile.title}
        </p>
        <p className="mt-5 max-w-2xl animate-fade-up text-base leading-relaxed text-slate-400 sm:text-lg">
          {profile.tagline}
        </p>

        <div className="mt-7 flex animate-fade-up flex-wrap items-center gap-3">
          <a
            href={profile.showcase}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:-translate-y-0.5"
          >
            View Case Studies
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg border border-ink-600 bg-ink-800 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-accent/50"
          >
            Get in touch
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-ink-600 bg-ink-800 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-accent/50"
          >
            GitHub ↗
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-ink-600 bg-ink-800 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-accent/50"
          >
            LinkedIn ↗
          </a>
        </div>

        <div className="mt-14 grid animate-fade-up grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-ink-700 bg-ink-900/60 p-4 text-center"
            >
              <div className="text-3xl font-bold text-white sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm font-medium text-slate-300">{s.label}</div>
              <div className="mt-0.5 text-xs text-slate-500">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
