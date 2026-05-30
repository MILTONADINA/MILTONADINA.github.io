import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="bg-grid flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-accent-cyan">404 — page not found</p>
      <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
        Lost in the stack.
      </h1>
      <p className="mt-4 max-w-md text-slate-400">
        That route doesn&apos;t exist. Let&apos;s get you back to the work that does.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:-translate-y-0.5"
      >
        ← Back to portfolio
      </Link>
    </main>
  );
}
