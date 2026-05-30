// Single source of truth for the portfolio. All metrics verified 2026-05-29
// against the real (private) repos. Do not edit numbers without re-measuring.

export const profile = {
  name: 'Milton Adina Shisia',
  title: 'Full-Stack & Security-Focused Software Engineer',
  tagline:
    'I build secure, test-driven web and mobile systems — and I have the architecture diagrams, schemas, and real test runs to prove it.',
  location: 'Edmond, OK',
  email: 'miltonadina@gmail.com',
  github: 'https://github.com/MILTONADINA',
  linkedin: 'https://www.linkedin.com/in/miltonadina',
  showcase: 'https://github.com/MILTONADINA/Private-Projects-Portfolio-Showcase',
  visa: 'F-1 visa · CPT/OPT eligible',
  openTo: 'Open to internships, new-grad & junior software / security roles',
};

export const stats = [
  { value: '3.48', label: 'GPA · Honor Roll', sub: 'Oklahoma Christian University' },
  { value: '6', label: 'Production Systems', sub: 'client + product work' },
  { value: '2,200+', label: 'Tests Passing', sub: 'real green-bar runs' },
  { value: '8', label: 'Languages Shipped', sub: 'TS · Dart · Java · Rust · …' },
];

export type Project = {
  slug: string;
  name: string;
  isPrivate: boolean;
  domain: string;
  role: string;
  blurb: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  highlights: string[];
  accentText: string;
  accentDot: string;
  accentFrom: string;
  links: { label: string; href: string }[];
  evidence?: string;
  category: 'flagship' | 'open-source';
};

export const projects: Project[] = [
  {
    slug: 'brightpath',
    name: 'BrightPath',
    isPrivate: true,
    domain: 'Multi-Tenant School-Management SaaS',
    role: 'Full-Stack & Security Engineer',
    blurb:
      'A production-scale, multi-tenant platform for African schools — student lifecycle, grading, mobile-money payments, and parent communications, with tenant isolation enforced at the database engine.',
    stack: ['React 18', 'TypeScript', 'Supabase', 'PostgreSQL', 'Deno Edge', 'Docker'],
    metrics: [
      { label: 'Tables', value: '403' },
      { label: 'RLS policies', value: '1,063' },
      { label: 'Edge functions', value: '69' },
      { label: 'Test files', value: '2,228' },
      { label: 'Test cases', value: '19,639' },
      { label: 'Source LOC', value: '~485K' },
    ],
    highlights: [
      'Tenant isolation via 1,063 PostgreSQL Row-Level Security policies — derived server-side from the JWT, never trusted from the client.',
      '12+ hierarchical roles with granular resource.action permissions (RBAC).',
      'Multi-provider payments: M-Pesa (Daraja), Airtel, MTN, Stripe — with HMAC webhook verification.',
      'COPPA-focused AppSec: custom Playwright consent/age-gate scripts, Semgrep, gitleaks, OWASP ZAP, dependency CVE auditing in CI.',
    ],
    accentText: 'text-sky-400',
    accentDot: 'bg-sky-400',
    accentFrom: 'from-sky-500/10',
    links: [{ label: 'Case study', href: 'https://github.com/MILTONADINA/Private-Projects-Portfolio-Showcase/tree/main/BrightPath' }],
    evidence: 'brightpath-vitest-passing.png',
    category: 'flagship',
  },
  {
    slug: 'flourish',
    name: 'Flourish',
    isPrivate: true,
    domain: 'Compliance-Engineered Health Platform',
    role: 'Full-Stack & Compliance Engineer',
    blurb:
      'A clinical/health platform engineered around privacy and consent — HIPAA-ready posture, FDA SaMD-avoidance, and multi-jurisdiction privacy controls anchored by an append-only, tamper-evident audit ledger.',
    stack: ['Next.js 16', 'Expo', 'Fastify', 'tRPC', 'Drizzle', 'PostgreSQL', 'Turborepo'],
    metrics: [
      { label: 'Tests passing', value: '1,278' },
      { label: 'Workspaces', value: '25' },
      { label: 'ADRs', value: '25' },
      { label: 'Apps', value: '4' },
      { label: 'Packages', value: '21' },
    ],
    highlights: [
      '1,278 automated tests across a 25-workspace Turborepo monorepo, all green.',
      'Privacy controls mapping to HIPAA, COPPA, CCPA, GDPR, and Washington MHMDA.',
      'Append-only audit-log schema enforced at the data layer (REVOKE UPDATE/DELETE), proven by an immutability test.',
      'Security CI: Semgrep SAST, gitleaks, CycloneDX SBOM, dependency audit — gated on every PR.',
    ],
    accentText: 'text-emerald-400',
    accentDot: 'bg-emerald-400',
    accentFrom: 'from-emerald-500/10',
    links: [{ label: 'Case study', href: 'https://github.com/MILTONADINA/Private-Projects-Portfolio-Showcase/tree/main/Flourish' }],
    evidence: 'flourish-test-passing.png',
    category: 'flagship',
  },
  {
    slug: 'light-routines',
    name: 'Light Routines',
    isPrivate: true,
    domain: 'Cross-Platform Mobile + Native Engines',
    role: 'Founder & Sole Engineer',
    blurb:
      'A cross-platform Flutter app on a 5-package Clean Architecture monorepo, with offline-first SQLite as the source of truth and native iOS/Android session engines behind a BLE hardware-abstraction layer.',
    stack: ['Flutter', 'Dart', 'Kotlin', 'Swift', 'SQLite', 'BLE', 'Firebase'],
    metrics: [
      { label: 'Tests passing', value: '354' },
      { label: 'Packages', value: '5' },
      { label: 'Kotlin (native)', value: '740 LOC' },
      { label: 'Swift (native)', value: '475 LOC' },
    ],
    highlights: [
      '5-package Clean Architecture — the analyzer physically prevents the domain layer from importing Flutter or platform code.',
      'Native session engines: Kotlin Foreground Service (Android) + Swift CoreBluetooth (iOS) behind a typed MethodChannel/EventChannel contract.',
      '354 tests passing across all five packages, 0 analyzer issues.',
      'Firebase Auth + Firestore sync repositories implemented and gated behind a v2 cutover (current build runs on mock auth).',
    ],
    accentText: 'text-cyan-400',
    accentDot: 'bg-cyan-400',
    accentFrom: 'from-cyan-500/10',
    links: [{ label: 'Case study', href: 'https://github.com/MILTONADINA/Private-Projects-Portfolio-Showcase/tree/main/LightRoutines' }],
    evidence: 'lightroutines-flutter-test.png',
    category: 'flagship',
  },
  {
    slug: 'devops-stratum',
    name: 'DevOPs + Stratum',
    isPrivate: true,
    domain: 'Operating System + Memory Backend for AI Coding Agents',
    role: 'Systems Engineer',
    blurb:
      'A verification-first operating layer for AI coding agents (Claude Code, Codex, Cursor, and more) with deterministic safety hooks, plus Stratum — a three-tier memory backend with a Rust/WASM hot path on Cloudflare Workers.',
    stack: ['TypeScript', 'Rust (WASM)', 'Cloudflare Workers', 'Supabase', 'Pinecone', 'Neo4j'],
    metrics: [
      { label: 'Agents supported', value: '8' },
      { label: 'Universal skills', value: '64' },
      { label: 'Safety hooks', value: '12' },
      { label: 'Memory tiers', value: '3' },
    ],
    highlights: [
      'Three-tier memory: hot in-RAM → warm Supabase → cold Pinecone + Neo4j, with a Cloudflare Workers + Rust/WASM hot path.',
      'CQ-Extended KadaneDial scheduling algorithm (extending DyCP, arXiv:2601.07994).',
      'Deterministic safety hooks run outside the LLM cognitive space — loop detection, budget brakes, secret/prod-write blocks.',
      'Self-configuring layer that provisions agent-specific configs across 8 coding agents via universal SKILL.md / AGENTS.md formats.',
    ],
    accentText: 'text-orange-400',
    accentDot: 'bg-orange-400',
    accentFrom: 'from-orange-500/10',
    links: [{ label: 'Case study', href: 'https://github.com/MILTONADINA/Private-Projects-Portfolio-Showcase/tree/main/DevOPs' }],
    category: 'flagship',
  },
  {
    slug: 'lumiere',
    name: 'Lumière',
    isPrivate: true,
    domain: 'Bilingual Next.js Agency Platform',
    role: 'Full-Stack Developer',
    blurb:
      'A bilingual (EN/SW) agency platform built on the Next.js App Router with React Server Components, a CMS-style admin over 17 Prisma content models, Stripe checkout, and RLS-gated admin access.',
    stack: ['Next.js 16', 'React 19', 'Prisma', 'Supabase', 'Tailwind', 'Stripe'],
    metrics: [
      { label: 'Content models', value: '17' },
      { label: 'App Router pages', value: '40' },
      { label: 'API routes', value: '25' },
      { label: 'Locales', value: 'EN / SW' },
    ],
    highlights: [
      '40 App Router pages + 25 API routes, with React Server Components for data fetching.',
      'CMS-style admin over 17 Prisma content models with a translation pattern for every entity.',
      'Stripe checkout, three rate-limited API endpoints, and RLS-gated admin access on Supabase/PostgreSQL.',
    ],
    accentText: 'text-violet-400',
    accentDot: 'bg-violet-400',
    accentFrom: 'from-violet-500/10',
    links: [{ label: 'Case study', href: 'https://github.com/MILTONADINA/Private-Projects-Portfolio-Showcase/tree/main/Lumiere' }],
    evidence: 'lumiere-home.png',
    category: 'flagship',
  },
  {
    slug: 'dr-who',
    name: 'Doctor Who Knowledge API',
    isPrivate: false,
    domain: 'Node/Express/Supabase API · Team of 3',
    role: 'Backend & Security Engineer',
    blurb:
      'A team final project: a Node/Express/Sequelize API over a 16-model PostgreSQL schema with JWT-protected routes and OpenAI natural-language-to-SQL querying.',
    stack: ['Node.js', 'Express', 'Sequelize', 'Supabase', 'OpenAI', 'Jest'],
    metrics: [
      { label: 'Data models', value: '16' },
      { label: 'Endpoints', value: '18' },
      { label: 'Team size', value: '3' },
    ],
    highlights: [
      '16-model relational schema with many-to-many join tables.',
      'JWT auth middleware covered by a Jest/Supertest suite.',
      'OpenAI natural-language-to-SQL querying over the schema.',
    ],
    accentText: 'text-indigo-400',
    accentDot: 'bg-indigo-400',
    accentFrom: 'from-indigo-500/10',
    links: [{ label: 'Source', href: 'https://github.com/MILTONADINA/Dr.WHO' }],
    category: 'open-source',
  },
  {
    slug: 'ebay',
    name: 'E-Commerce REST API',
    isPrivate: false,
    domain: 'Spring Boot Auction/Bidding API',
    role: 'Backend Developer',
    blurb:
      'A Spring Boot REST API for an auction-style marketplace — users, products, bids, and orders — with a multi-layer architecture, Dockerized PostgreSQL, and JUnit + Maven CI.',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'JUnit', 'Maven'],
    metrics: [
      { label: 'Architecture', value: 'controller / service / repo' },
      { label: 'CI', value: 'JUnit + Maven' },
    ],
    highlights: [
      'Multi-layer Spring Boot architecture with Spring Data JPA repositories.',
      'Containerized PostgreSQL via Docker Compose for reproducible local dev.',
      'Automated verification through JUnit + Maven build workflows.',
    ],
    accentText: 'text-amber-400',
    accentDot: 'bg-amber-400',
    accentFrom: 'from-amber-500/10',
    links: [{ label: 'Source', href: 'https://github.com/MILTONADINA/Ebay' }],
    category: 'open-source',
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Java', 'Dart', 'Python', 'Rust (WASM)', 'C++', 'SQL'] },
  { group: 'Frontend', items: ['React 18/19', 'Next.js (App Router)', 'Vue 3', 'Flutter', 'Tailwind CSS', 'shadcn/ui'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'Fastify', 'tRPC', 'Spring Boot', 'Deno Edge Functions'] },
  { group: 'Data', items: ['PostgreSQL', 'Supabase', 'MySQL', 'SQLite', 'Drizzle', 'Prisma', 'Sequelize', 'Pinecone', 'Neo4j'] },
  { group: 'Security', items: ['OWASP Top 10', 'Multi-tenant RLS', 'RBAC', 'SAST/DAST', 'Semgrep', 'gitleaks', 'OWASP ZAP', 'JWT', 'bcrypt', 'CycloneDX SBOM'] },
  { group: 'Testing', items: ['Vitest', 'Playwright', 'Jest', 'Supertest', 'JUnit 5', 'flutter_test', 'Maestro'] },
  { group: 'DevOps / Cloud', items: ['Docker', 'GitHub Actions', 'Vercel', 'Cloudflare Workers', 'Supabase Edge'] },
];

export const experience = [
  {
    role: 'Freelance Software Engineer (Contract)',
    org: 'Independent Contractor · Remote',
    period: '2024 – Present',
    points: [
      'Deliver production web and mobile applications for private clients end-to-end — architecture, implementation, testing, and deployment — across TypeScript/React/Next.js, Node.js, and Flutter/Dart.',
      'Ship with production rigor: multi-tenant Row-Level Security and RBAC, OWASP-aligned hardening, automated SAST/DAST scanning, and full unit/integration/E2E test suites.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    org: 'USAID HealthIT · Nairobi, Kenya',
    period: 'Jun 2022 – Nov 2022',
    points: [
      'Performed data cleaning and statistical analysis on 5,000+ monthly health-record submissions across 47 county facilities.',
      'Aligned datasets with Kenya Ministry of Health standards; contributed to work recognized by the Ministry for a 20% report-efficiency improvement.',
    ],
  },
  {
    role: 'Freelance Data Analyst & Research Assistant',
    org: 'Various Contracts · Kenya',
    period: '2020 – 2022',
    points: [
      'Designed and deployed mobile data-collection tools (ODK, KoBo, CommCare) for health, education, and industrial research.',
      'Managed cross-functional teams and analyzed datasets to deliver reports guiding policy and community-development work.',
    ],
  },
];

export const education = [
  {
    school: 'Oklahoma Christian University',
    degree: 'B.S. Computer Science (Cybersecurity)',
    detail: 'Expected 2027 · Honor Roll · GPA 3.48',
    extra: 'Network Security · Operating Systems · Software Engineering I–IV · Data Structures & Algorithms · Database Systems · Cloud Architecture & Security · AI · CS Team — Cyber Contest',
  },
  {
    school: 'Masinde Muliro University of Science & Technology',
    degree: 'B.S. Epidemiology & Biostatistics',
    detail: '2019 · Second-Class Honors',
    extra: 'Research methods, data analysis, disease modeling, clinical-trial design.',
  },
];
