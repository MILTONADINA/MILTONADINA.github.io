import { skills, experience, education, profile } from '@/lib/data';

export function Skills() {
  return (
    <section id="skills" className="relative border-t border-ink-800 bg-ink-900/30">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="mb-10 flex items-center gap-3">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Skills</h2>
          <span className="h-px flex-1 bg-ink-700" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.group} className="rounded-xl border border-ink-700 bg-ink-900/60 p-5">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent-cyan">
                {s.group}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {s.items.map((i) => (
                  <span
                    key={i}
                    className="rounded-md border border-ink-700 bg-ink-800/60 px-2 py-1 font-mono text-xs text-slate-300"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-5 py-20">
      <div className="mb-10 flex items-center gap-3">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Experience</h2>
        <span className="h-px flex-1 bg-ink-700" />
      </div>
      <div className="space-y-8 border-l border-ink-700 pl-6">
        {experience.map((e) => (
          <div key={e.role} className="relative">
            <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-ink-950" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-white">{e.role}</h3>
              <span className="font-mono text-xs text-slate-500">{e.period}</span>
            </div>
            <p className="text-sm text-accent-cyan">{e.org}</p>
            <ul className="mt-2 space-y-1.5">
              {e.points.map((p, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-400">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-slate-600" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="relative border-t border-ink-800 bg-ink-900/30">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="mb-10 flex items-center gap-3">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Education</h2>
          <span className="h-px flex-1 bg-ink-700" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((e) => (
            <div key={e.school} className="rounded-xl border border-ink-700 bg-ink-900/60 p-6">
              <h3 className="text-lg font-semibold text-white">{e.school}</h3>
              <p className="mt-1 text-accent">{e.degree}</p>
              <p className="mt-0.5 text-sm font-medium text-slate-300">{e.detail}</p>
              <p className="mt-3 text-sm text-slate-500">{e.extra}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-grid">
      <div className="glow-orb left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 animate-glow bg-accent/15" />
      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Let&apos;s build something secure.</h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          {profile.openTo}. Based in {profile.location} · {profile.visa}.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:-translate-y-0.5"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-ink-600 bg-ink-800 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-accent/50"
          >
            LinkedIn ↗
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-ink-600 bg-ink-800 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-accent/50"
          >
            GitHub ↗
          </a>
        </div>
      </div>
      <footer className="border-t border-ink-800 py-6 text-center text-xs text-slate-600">
        Built with Next.js + Tailwind · Static-exported · Deployed on GitHub Pages ·{' '}
        <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-slate-400">
          Source
        </a>
      </footer>
    </section>
  );
}
