import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Milton Adina Shisia — Software Engineer',
  description:
    'Full-stack & security-focused software engineer. Multi-tenant SaaS, compliance-engineered health platforms, cross-platform mobile, and AI systems — with real, verifiable test evidence.',
  keywords: [
    'Milton Adina Shisia',
    'software engineer',
    'full-stack',
    'cybersecurity',
    'TypeScript',
    'React',
    'Next.js',
    'Flutter',
    'Java',
    'Spring Boot',
    'PostgreSQL',
    'Supabase',
  ],
  authors: [{ name: 'Milton Adina Shisia' }],
  openGraph: {
    title: 'Milton Adina Shisia — Software Engineer',
    description:
      'Secure, test-driven full-stack & mobile systems. 6 production systems, 2,200+ real passing tests.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
