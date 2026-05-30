import type { Metadata } from 'next';
import './globals.css';

const SITE = 'https://miltonadina.github.io';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Milton Adina Shisia — Software Engineer',
  description:
    'Full-stack & security-focused software engineer. Multi-tenant SaaS, compliance-engineered health platforms, cross-platform mobile, and AI systems — with real, verifiable test evidence.',
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
    title: 'Milton Adina Shisia — Software Engineer',
    description:
      'Secure, test-driven full-stack & mobile systems. 6 production systems, 2,200+ real passing tests.',
    url: SITE,
    siteName: 'Milton Adina Shisia',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Milton Adina Shisia — Software Engineer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Milton Adina Shisia — Software Engineer',
    description:
      'Secure, test-driven full-stack & mobile systems. 6 production systems, 2,200+ real passing tests.',
    images: ['/og.png'],
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
