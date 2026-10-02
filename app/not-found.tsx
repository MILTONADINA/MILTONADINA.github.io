import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="bg-grid flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-base font-medium text-accent-cyan">404 · Page not found</p>
      <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
        This page isn&apos;t here.
      </h1>
      <p className="mt-4 max-w-md text-lg text-slate-300">
        Return to the portfolio to explore my projects, experience, and résumé.
      </p>
      <Link
        href="/"
        className="button-primary mt-8"
      >
        ← Back to portfolio
      </Link>
    </main>
  );
}
