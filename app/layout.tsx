import type { Metadata } from 'next';
import './globals.css';

const SITE = 'https://miltonadina.github.io';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Milton Adina Shisia | Software Engineer',
  description:
    'Software engineering and application security by Milton Adina Shisia. Explore web and mobile projects, technical decisions, open-source contributions, and his résumé.',
  keywords: [
    'Milton Adina Shisia',
    'software engineer',
    'full-stack engineer',
    'cybersecurity',
    'TypeScript',
    'React',
    'Next.js',
    'Flutter',
    'Java',
    'Spring Boot',
    'PostgreSQL',
    'Supabase',
    'new grad software engineer',
    'software engineer intern',
  ],
  authors: [{ name: 'Milton Adina Shisia', url: SITE }],
  creator: 'Milton Adina Shisia',
  alternates: { canonical: SITE },
  openGraph: {
    title: 'Milton Adina Shisia | Software Engineer',
    description:
      'Web and mobile projects, application security, open-source contributions, and the engineering decisions behind the work.',
    url: SITE,
    siteName: 'Milton Adina Shisia',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Milton Adina Shisia, software engineering and application security' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og.png'],
    title: 'Milton Adina Shisia | Software Engineer',
    description:
      'Web and mobile projects, application security, open-source contributions, and the engineering decisions behind the work.',
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#0a0e14',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
