export default function Nav() {
  const links = [
    { href: '#work', label: 'Work' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-ink-700/60 bg-ink-950/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight text-white">
          MA<span className="text-accent">.</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="https://github.com/MILTONADINA/Private-Projects-Portfolio-Showcase"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
        >
          Portfolio Showcase ↗
        </a>
      </nav>
    </header>
  );
}
