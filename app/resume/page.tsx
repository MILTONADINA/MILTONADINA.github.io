import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import ResumeViewer from '@/components/ResumeViewer';

export const metadata: Metadata = {
  title: 'Résumé | Milton Adina Shisia',
  description: 'Read Milton Adina Shisia’s software engineering résumé. View both pages, print a copy, or download the PDF.',
  alternates: { canonical: 'https://miltonadina.github.io/resume/' },
  openGraph: {
    title: 'Résumé | Milton Adina Shisia',
    description: 'View, print or download Milton Adina Shisia’s software engineering résumé.',
    url: 'https://miltonadina.github.io/resume/',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Milton Adina Shisia, software engineering and application security' }],
  },
  twitter: { card: 'summary_large_image', title: 'Résumé | Milton Adina Shisia', description: 'View, print or download the résumé.', images: ['/og.png'] },
};

export default function Resume() {
  return <>
    <Nav />
    <main id="main-content" className="resume-main mx-auto max-w-5xl px-5 py-10 sm:py-14" tabIndex={-1}>
      <div className="resume-chrome mb-8">
        <Link href="/" className="text-link inline-flex min-h-11 items-center text-base">← Back to portfolio</Link>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">Résumé</h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-300">Milton Adina Shisia · Full-stack software engineering and application security</p>
      </div>
      <ResumeViewer />
    </main>
  </>;
}
