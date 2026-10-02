"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const sections = [
  { id: 'work', label: 'Client work' },
  { id: 'more-work', label: 'Independent work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const toggle = useRef<HTMLButtonElement>(null);
  const home = pathname === '/';

  useEffect(() => {
    if (!home) return;
    const ids = new Set(['top', ...sections.map(section => section.id)]);
    const targets = [...document.querySelectorAll<HTMLElement>('section[id]')].filter(section => ids.has(section.id));
    let frame = 0;
    const updateActive = () => {
      frame = 0;
      // A short final section may never reach the normal reading position.
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        setActive('contact');
        return;
      }
      const readingPosition = window.innerHeight * 0.35;
      const section = targets.filter(target => target.getBoundingClientRect().top <= readingPosition).at(-1);
      setActive(section?.id ?? '');
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActive);
    };
    updateActive();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, [home]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); }
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  return (
    <header className="site-header sticky top-0 z-50 border-b border-ink-700 bg-ink-950/95 backdrop-blur-md">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <nav aria-label="Main navigation" className="mx-auto max-w-6xl px-5">
        <div className="flex min-h-[76px] items-center justify-between gap-5">
          <Link href={home ? '#top' : '/'} aria-label="Milton Adina Shisia, home" className="inline-flex min-h-11 items-center font-mono text-2xl font-bold tracking-tight text-white">
            MA<span className="text-accent-cyan">.</span>
          </Link>
          <div className="hidden items-center gap-5 lg:flex">
            {sections.map(({ id, label }) => {
              return <Link key={id} href={home ? `#${id}` : `/#${id}`}
                aria-current={home && active === id ? 'location' : undefined}
                className="nav-link inline-flex min-h-11 items-center border-b-2 border-transparent text-base font-medium text-slate-300 transition-colors hover:text-white aria-[current=location]:border-accent-cyan aria-[current=location]:text-white">
                {label}
              </Link>;
            })}
          </div>
          <div className="flex items-center gap-3">
            <Link href="/resume/" className="button-secondary px-4 py-2 text-sm sm:text-base">View résumé</Link>
            <button ref={toggle} type="button" aria-expanded={open} aria-controls="mobile-navigation"
              onClick={() => setOpen(!open)} className="button-secondary px-3 py-2 text-base lg:hidden">
              {open ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
        <div id="mobile-navigation" hidden={!open} className="border-t border-ink-700 pb-4 pt-2 lg:!hidden">
          {sections.map(({ id, label }) => <Link key={id} href={home ? `#${id}` : `/#${id}`}
            aria-current={home && active === id ? 'location' : undefined}
            onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-base font-medium text-slate-200 hover:bg-ink-800 aria-[current=location]:text-accent-cyan">
            {label}
          </Link>)}
        </div>
      </nav>
    </header>
  );
}
