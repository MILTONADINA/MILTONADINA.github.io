import { projects, type Project } from '@/lib/data';

function ProjectCard({ p }: { p: Project }) {
  return (
    <article
      className={`card-hover relative overflow-hidden rounded-2xl border border-ink-700 bg-gradient-to-b ${p.accentFrom} to-ink-900/40 p-6`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className={`text-xl font-bold ${p.accentText}`}>{p.name}</h3>
            {p.isPrivate ? (
              <span className="rounded-full border border-ink-600 bg-ink-800 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-slate-400">
                Private
              </span>
            ) : (
              <span className="rounded-full border border-emerald-700/40 bg-emerald-900/20 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-400">
                Open Source
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-slate-400">{p.domain}</p>
          <p className="mt-0.5 text-xs font-medium text-slate-500">{p.role}</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-300">{p.blurb}</p>

      <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {p.metrics.map((m) => (
          <div key={m.label} className="rounded-lg border border-ink-700 bg-ink-950/50 px-3 py-2">
            <div className="text-base font-bold text-white">{m.value}</div>
            <div className="text-[11px] leading-tight text-slate-500">{m.label}</div>
          </div>
        ))}
      </div>

      <ul className="mt-5 space-y-2">
        {p.highlights.map((h, i) => (
          <li key={i} className="flex gap-2 text-sm text-slate-400">
            <span className={`mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full ${p.accentDot}`} />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      {p.evidence && (
        <a
          href={p.links[0]?.href}
          target="_blank"
          rel="noreferrer"
          className="mt-5 block overflow-hidden rounded-lg border border-ink-700"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/evidence/${p.evidence}`}
            alt={`${p.name} — real test/run evidence`}
            width={1040}
            height={760}
            className="w-full"
            loading="lazy"
          />
        </a>
      )}

      <div className="mt-5 flex flex-wrap gap-1.5">
        {p.stack.map((t) => (
          <span
            key={t}
            className="rounded-md border border-ink-700 bg-ink-800/60 px-2 py-0.5 font-mono text-[11px] text-slate-400"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        {p.links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className={`text-sm font-semibold ${p.accentText} hover:underline`}
          >
            {l.label} →
          </a>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  const flagship = projects.filter((p) => p.category === 'flagship');
  const oss = projects.filter((p) => p.category === 'open-source');
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-5 py-20">
      <div className="mb-3 flex items-center gap-3">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Featured Work</h2>
        <span className="h-px flex-1 bg-ink-700" />
      </div>
      <p className="mb-10 max-w-2xl text-slate-400">
        Real client and product systems where I was the primary engineer. Source is private; full
        case studies — architecture diagrams, ER schemas, security patterns, and dated test-run
        evidence — live in the{' '}
        <a
          href="https://github.com/MILTONADINA/Private-Projects-Portfolio-Showcase"
          target="_blank"
          rel="noreferrer"
          className="text-accent hover:underline"
        >
          Portfolio Showcase
        </a>
        . Every number on this page was re-verified against the real repos on 2026-05-29.
      </p>

      <div className="grid gap-6 lg:grid-cols-2">
        {flagship.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>

      <div className="mb-3 mt-16 flex items-center gap-3">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Open-Source & Coursework</h2>
        <span className="h-px flex-1 bg-ink-700" />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {oss.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>
    </section>
  );
}
