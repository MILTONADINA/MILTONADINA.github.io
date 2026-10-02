// Portfolio content. Project evidence stays with the work it supports.

export const profile = {
  name: 'Milton Adina Shisia',
  title: 'Full-Stack & Security-Focused Software Engineer',
  tagline:
    'I build client software for school operations, agency services, and family workflows, alongside open-source developer tools. My work focuses on reliable workflows, clear data models, and secure access.',
  location: 'Edmond, OK',
  email: 'miltonadina@gmail.com',
  github: 'https://github.com/MILTONADINA',
  linkedin: 'https://www.linkedin.com/in/miltonadina',
  showcase: 'https://github.com/MILTONADINA/Private-Projects-Portfolio-Showcase',
  visa: 'F-1 visa · CPT/OPT eligible',
  openTo: 'Open to internships, new-grad and junior roles in software, cybersecurity and IT',
};

export type ProfileHighlight = {
  value: string;
  label: string;
  sub: string;
  details?: string[];
};

export const stats: ProfileHighlight[] = [
  {
    value: 'Computer Science',
    label: 'B.S. · Cybersecurity specialization',
    sub: 'Oklahoma Christian University',
    details: ['GPA 3.48 · Honor Roll', 'Expected graduation April 30, 2027'],
  },
  {
    value: 'Client work & open source',
    label: 'Independent contractor since 2024',
    sub: 'School operations, bilingual agency services and family applications.',
    details: ['Client engagements, independent products and open-source work are detailed below.'],
  },
  {
    value: '10 languages',
    label: 'Used across the work below',
    sub: 'Web, backend, mobile, systems and coursework',
    details: ['TypeScript', 'JavaScript', 'Java', 'Dart', 'Python', 'SQL', 'Kotlin', 'Swift', 'C++', 'Rust'],
  },
];

export type ProjectSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Project = {
  slug: string;
  name: string;
  isPrivate: boolean;
  publicLabel?: string;
  workType: string;
  period?: string;
  audience?: string;
  stage?: string;
  domain: string;
  role: string;
  blurb: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  metricsNote?: string;
  summaryPoints: string[];
  overview: { approach: string; evidence: string; outcome?: string };
  sections: ProjectSection[];
  highlights: string[];
  accentText: string;
  accentDot: string;
  accentFrom: string;
  links: { label: string; href: string }[];
  category: 'client' | 'product' | 'open-source' | 'contribution' | 'coursework' | 'lab';
};

const projectContent: Omit<Project, 'highlights'>[] = [
  {
    slug: 'brightpath',
    name: 'BrightPath',
    overview: {
      approach: 'I treat a retry, a permission check and a completed operation as separate decisions. Payment allocation uses exact decimal arithmetic and a database transaction; imports retain an uncertain outcome for reconciliation when a provider response or checkpoint is lost. Assessment release uses a conditional state change and locks grades in the same transaction.',
      evidence: 'October 1, 2026: 43 focused backend tests passed across AI quotas, exact-money boundaries, offline authorization and import checkpoint outcomes. These isolated unit checks use simulated database/service boundaries. The image below shows the first 33; ten additional import checks passed separately. The May record covers 260 selected Vitest checks. Development and broader release verification continue.',
    },
    isPrivate: true,
    workType: 'Client engagement',
    period: 'April 2025 to present',
    audience: 'School administrators, finance staff, teachers and parents',
    stage: 'Active development',
    domain: 'School administration, payments and parent communication',
    role: 'Full-Stack & Security Engineer',
    blurb:
      'A school-management platform for African schools, connecting student records, grading, mobile-money payments, and parent communication across web and mobile.',
    stack: ['TypeScript', 'React', 'NestJS', 'Flutter', 'Dart', 'Prisma', 'PostgreSQL', 'Supabase', 'IndexedDB', 'Meilisearch', 'Jest', 'Vitest'],
    metrics: [
      { label: 'Application roles', value: '12+' },
      { label: 'Payment-provider integrations', value: '4' },
    ],
    summaryPoints: [
      'Built web/mobile workflows and shared TypeScript/Dart contracts, with explicit tenant, school and resource authorization for a privileged backend.',
      'Implemented payment retry records, invoice allocation and overpayment handling, with provider-specific callback verification for mobile-money and Stripe integrations.',
      'Built durable school-data imports with worker ownership, row checkpoints, cancellation and a recovery path for uncertain external effects.',
      'Added permission- and quota-gated AI drafting, translation and structured homework generation, reserving capacity before paid provider calls.',
      'Implemented staff-scoped offline data packs and cached replay, plus department-bound assessment approval and transactional grade locking.',
    ],
    sections: [
      {
        title: 'The school workflow',
        paragraphs: [
          'School staff need to manage enrollment, grades, attendance and fees without losing the connection between a student, a school and a payment. The platform also needs to accommodate different school types, mobile-money providers and unreliable connectivity.',
          'As the primary engineer, I worked across the React portal, NestJS business API, database authorization and Flutter client surfaces. BrightPath remains under active development, with shared API contracts supporting the growing web and mobile application.',
        ],
      },
      {
        title: 'Authorization at the right boundary',
        paragraphs: [
          'The backend uses a privileged Prisma database connection. I therefore keep tenant, school and resource checks explicit in the API, using validated identity to establish access before querying or mutating records. PostgreSQL row policies provide a separate boundary for connections that enforce RLS.',
          'The application supports 12+ application roles with granular resource.action permissions. Role metadata helps organize the model; actual assignment and access decisions use explicit capabilities.',
        ],
      },
      {
        title: 'Payments that can be retried and reconciled',
        bullets: [
          'Idempotency records bind the authenticated principal and request fingerprint, reserve work atomically, replay completed responses and reject in-progress duplicates.',
          'Invoice and payment reconciliation shares a database transaction and checks tenant/school ownership before applying allocations.',
          'Callbacks follow provider-specific mechanisms: Stripe signatures, an Airtel callback token and MTN status re-query. The integration surface also includes M-Pesa Daraja.',
        ],
      },
      {
        title: 'Recoverable imports and controlled AI usage',
        paragraphs: [
          'A background import can lose the acknowledgement of a successful action. The worker therefore separates executing a row from saving its outcome. Ownership tokens, bounded batches and row checkpoints support resumed work; uncertain effects remain available for reconciliation instead of being counted as a definitive failure or silently discarded during cancellation.',
          'AI-assisted drafting, translation and structured homework generation check tenant permissions and plan entitlements before a provider request. Guarded quota reservations account for the tenant’s day and monthly allowance, including rollover and concurrent initialization. A failed quota check stops the paid request.',
        ],
      },
      {
        title: 'School workflows across roles and connectivity',
        paragraphs: [
          'Assessment approval combines department authority with explicit workflow states. Conditional updates reject a competing transition, and releasing an assessment locks its grades inside the same transaction. Bulk release checks the entire authorized set before writing.',
          'Offline preload assembles bounded school data for authorized staff, including rosters, classes, recent attendance and messages in which the user participates. IndexedDB caching and replay complement this API work. The broader offline/BFF migration remains in progress; these components do not establish that every school workflow is available offline.',
          'Student search uses Meilisearch with tenant filters, escaped filter values and bounded results. Search, school administration and provider integrations are implemented surfaces, with activation and release checks separate from code presence.',
        ],
      },
      {
        title: 'Testing and implementation evidence',
        paragraphs: [
          'On October 1, 2026, four focused backend suites passed 43 tests: 14 AI quota checks, nine exact-money checks, ten offline authorization/preload checks and ten import outcome/checkpoint checks. The AI scope uses an SQL evaluator; the service scopes use injected boundaries. This establishes the selected logic, not live-provider operation, database crash recovery, complete type safety or a full release.',
          'The May 29, 2026 selected Vitest run passed 260 tests in 19 files across security, accessibility, internationalization, boundary, regression, rate-limiting and smoke categories. The case study describes the architecture and the scope of this dated result without exposing client source or internal artifacts.',
          'The security workflow includes consent and authorization tests, Semgrep, gitleaks, dependency auditing and scheduled/manual ZAP configuration. Offline work includes cached assets, school data packs and a replay queue. These controls are developed alongside the application workflows.',
        ],
      },
    ],
    accentText: 'text-sky-400',
    accentDot: 'bg-sky-400',
    accentFrom: 'from-sky-500/10',
    links: [{ label: 'Architecture and security case study', href: 'https://github.com/MILTONADINA/Private-Projects-Portfolio-Showcase/tree/main/BrightPath' }],
    category: 'client',
  },
  {
    slug: 'devops',
    name: 'DevOPs',
    stage: 'Active development · MIT-licensed open source',
    overview: {
      approach: 'I combined an explicit plan/code/test/review workflow with a local model gateway and project-scoped memory. Typed facts, source dependency graphs and Git-backed conflict checks help retain useful context; reproducible claim records make completed work inspectable.',
      evidence: 'October 1, 2026 at main revision 3ac20df: 187 targeted runtime tests passed across 11 files, plus 44 Jev/triage tests across four files. These use injected models, providers and databases. A separate read-only indexer run mapped 116 real source files. Context pruning remains experimental and does not alter forwarded requests.',
    },
    isPrivate: false,
    publicLabel: 'Open source · MIT',
    workType: 'Independent open-source project',
    period: '2026 to present',
    domain: 'Local workflow and memory for AI coding agents',
    role: 'Systems Engineer',
    blurb:
      'A local developer platform that carries useful context across coding sessions and connects implementation claims to inspectable evidence, with structured workflows, model routing, typed memory and source graphs.',
    stack: ['TypeScript', 'Fastify', 'PostgreSQL', 'pgvector', 'Zod', 'ONNX', 'Python', 'Docker', 'Claude Code'],
    metrics: [
      { label: 'Typed memory records', value: '6 kinds' },
      { label: 'Coding-agent adapter', value: 'Claude Code' },
    ],
    summaryPoints: [
      'Built a multi-role workflow with planner, coder, tester, reviewer, security and validator outcomes; unresolved or inconsistent results keep the cycle from being ready.',
      'Implemented typed memory, retry-safe fact persistence and bounded session recall that combines recent facts with project-scoped lexical and semantic retrieval.',
      'Added JS/TS, Rust and Python source indexing, relational graph search, and Git-based checks that distinguish confirmed, unverified and conflicting code facts.',
      'Integrated Anthropic, OpenAI, OpenRouter, Gemini and local-compatible model routing; optional Jev judgments classify ambiguous failures with confidence thresholds and escalation.',
      'Kept context-pruning candidates behind quality gates and tested their provenance, supersession and exchange-completion rules separately from the live request path.',
    ],
    sections: [
      {
        title: 'A workflow that keeps its place',
        paragraphs: [
          'A coding agent can lose useful decisions between sessions, repeat failed actions or report completion without enough evidence. DevOPs combines repository-aware commands, a local Fastify runtime and PostgreSQL storage to address those problems together.',
          'The Claude workflow decomposes a backlog item, runs coder/tester stages, and collects reviewer, security and validator decisions. Its readiness result requires the relevant checks to agree; missing or inconsistent results remain indeterminate. Journal-based continuation carries forward completed work. The workflow itself does not commit, push or deploy.',
        ],
      },
      {
        title: 'Memory that preserves useful decisions',
        paragraphs: [
          'Six validated fact kinds capture function changes, technical decisions, policies, tasks, variable changes and concrete operational references. The server assigns ownership and provenance instead of trusting model-supplied identity fields. Failed persistence retries keep stable fact IDs, avoiding duplicate extraction records.',
          'The configured session-start hook retrieves up to three recent and three relevant facts. It combines bounded warm records, project-scoped lexical search and local embedding similarity; filters suppressed and superseded decisions; and labels the result as untrusted data. If semantic retrieval is unavailable, recent facts can still be returned.',
          'Authenticated completed exchanges can be extracted through an optional local model. Hot-window eviction and warm-memory recall are also implemented as a separately tested composition. The 50-turn retention test uses an injected model and database; it is not a live-model accuracy measurement.',
        ],
      },
      {
        title: 'Source graphs and evidence-backed memory',
        bullets: [
          'A deterministic indexer records top-level declarations and local dependencies in JS/TS, Rust and Python. PostgreSQL graph tables store file/function relationships; pgvector stores embeddings with pointers back to typed source records.',
          'Graph APIs support bounded snapshots, fuzzy or semantic search, neighboring entities, paginated source dependencies and related facts. These help inspect how retained information relates to the code.',
          'Git-attestation code compares supported code facts with indexed declaration changes. It records confirmed, unverified and conflict outcomes; unsupported domain claims are not promoted to truth merely because they pass a schema.',
        ],
      },
      {
        title: 'Provider access and failure handling',
        paragraphs: [
          'The gateway accepts an Anthropic-shaped message interface and routes configured models to Anthropic, OpenAI, OpenRouter, Gemini or a local OpenAI-compatible server. Provider transport modules normalize responses and streams. Preflight estimates are labeled separately from upstream-confirmed usage.',
          'Jev is an optional third-party judgment API for proof-failure triage and residual error classification. Deterministic signatures take precedence; uncertain or unavailable judgments escalate. Known credential shapes are refused before transmission, with bounded retries and timeouts. This integration does not send the whole retained conversation history to Jev.',
        ],
      },
      {
        title: 'Verification and security boundaries',
        bullets: [
          'Completion records bind a claim to its Git revision, files, command, expected exit code and reproducibility hash; the validator can rerun the supporting command.',
          'The proxy defaults to loopback and checks Host/Origin values. Optional API-key mode supplies trusted organization/project scope; explicit route and query checks enforce that scope.',
          'Shared pattern redaction protects capture artifacts, while project-bound session recall restricts roots and allowed endpoints. Configured hooks enforce selected tool checks; available budget/secret/loop scripts require adapter wiring.',
          'Scoped backup and restore tooling checks export completeness, validates cross-table relationships and restores API keys inactive by default. Session erasure inspection reports a local database inventory without claiming complete deletion.',
        ],
      },
      {
        title: 'Measured implementation and open work',
        paragraphs: [
          'The October 1 scoped checks passed 187 runtime tests and 44 Jev/triage tests with zero failures or skipped cases. They exercise deterministic and in-process behavior with injected dependencies, not live providers, a deployed database or every suite in the repository.',
          'The real-source indexing demonstration produced 116 File entities, 459 Function entities, 232 dependency edges and 459 declaration edges, with no unresolved endpoints, from tracked runtime source, Rust and evaluation-harness files at revision 3ac20df.',
          'CQ-Extended KadaneDial, supersession handling and provenance-gated exchange selection remain experimental. Optional shadow observation records candidate behavior while full requests continue upstream. Passing full judged benchmarks, automatic long-history replacement and clean-machine setup across supported platforms remain open work. The separate Rust/WASM module is a hashing experiment.',
        ],
      },
    ],
    accentText: 'text-orange-400',
    accentDot: 'bg-orange-400',
    accentFrom: 'from-orange-500/10',
    links: [
      { label: 'Source repository', href: 'https://github.com/MILTONADINA/DevOPs' },
      { label: 'Session recall', href: 'https://github.com/MILTONADINA/DevOPs/blob/3ac20df17ebfc8e7f1614c23a1bbeecbaff7084e/runtime/scripts/session-start-context.ts' },
      { label: 'Source graph indexer', href: 'https://github.com/MILTONADINA/DevOPs/blob/3ac20df17ebfc8e7f1614c23a1bbeecbaff7084e/runtime/src/memory/source-graph.ts' },
      { label: 'Jev integration', href: 'https://github.com/MILTONADINA/DevOPs/blob/3ac20df17ebfc8e7f1614c23a1bbeecbaff7084e/scripts/jev.mjs' },
      { label: 'Architecture case study', href: 'https://github.com/MILTONADINA/Private-Projects-Portfolio-Showcase/tree/main/DevOPs' },
    ],
    category: 'open-source',
  },
  {
    slug: 'light-routines',
    name: 'Light Routines',
    stage: 'Ongoing development · Firebase closed beta and Android internal release',
    overview: {
      approach: 'I built the approved-user flow, timed session controller, persistence and platform interfaces. Session stop changes the controller state and notifies the display before awaiting a cloud write; backgrounding pauses the session. Firestore rules enforce approval and user ownership, while device-owner authentication and explicit session policies guard access to higher-frequency settings.',
      evidence: 'October 1 verification passed 56 selected domain tests, 15 beta-controller tests and 44 rules tests against an actual local Firestore emulator. These 115 scoped cases used synthetic data, without live beta access or hardware testing. The September 15 release record documents real testers since June 29 and Android internal build 1.0.0+21; current iOS distribution remains unverified.',
    },
    isPrivate: true,
    workType: 'Founder project · Closed beta',
    period: 'December 2025 to present',
    audience: 'Approved beta testers running timed routines and reviewing their session history on a phone',
    domain: 'Timed routines, session controls and mobile history',
    role: 'Founder & Sole Engineer',
    blurb:
      'A Flutter app for running timed light routines and keeping a session history, with an approved-user beta and separate native-device bridge prototypes.',
    stack: ['Flutter', 'Dart', 'Firebase', 'SQLite', 'Kotlin', 'Swift', 'BLE'],
    metrics: [
      { label: 'Packages with separate responsibilities', value: '5' },
      { label: 'Internal release', value: 'Android' },
    ],
    summaryPoints: [
      'Built sign-in, pending approval, curated routines and per-user history as one Firebase beta workflow, with recoverable auth and profile error states.',
      'Used a guarded Dart state machine and monotonic elapsed time for start, pause, resume, timeout and stop; output-off does not wait for Firestore persistence.',
      'Applied device-owner authentication, a required warning step and a minors-mode policy to higher-frequency sessions; the emergency stop stays visible as other controls hide.',
      'Enforced protected approval fields, user-scoped sessions and read-only curated routines in Firestore rules, including denial tests for privilege escalation and cross-user access.',
      'Separated five Dart packages and typed native channels. The current beta uses phone output; Kotlin/Swift accessory bridges and BLE execution remain separate prototype work.',
    ],
    sections: [
      {
        title: 'A session workflow that stays explicit',
        paragraphs: [
          'Users need to start, pause, resume and stop a routine while the app keeps a consistent session history. I built the product as its sole engineer, from Flutter screens and session policies through persistence, beta access and native interfaces.',
          'The Firebase auth gate separates an unconfigured backend, signed-out users, pending beta profiles and approved users. Auth/profile errors have retry paths. Approved users can select curated routines, adjust brightness, complete the pre-session gate, run a session and review their history; the broader search, manual and device screens are not routed during beta.',
          'A Dart controller owns idle, running, paused and ended states, guards repeated transitions, and derives elapsed time from a Stopwatch. A prolonged pause ends the session after 60 seconds. Stop changes state and notifies the display before awaiting persistence, while normal completion, early stop and timeout record distinct outcomes.',
          'The screen pauses a running session when the app moves into the background and restores brightness on exit. The emergency stop remains visible while other controls hide. Cloud persistence is best-effort; a failed write does not block output shutdown, and the controller tests do not establish physical-device timing guarantees.',
        ],
      },
      {
        title: 'Access controls and session policies',
        paragraphs: [
          'Firestore rules prevent clients from approving themselves or changing protected identity/approval fields. Routine documents are read-only to clients, and unpublished routines cannot be fetched again through history. Session reads and writes require the authenticated owner to retain beta access; permitted fields, types and outcome values are validated.',
          'The pre-session path evaluates actual routine segments, not just declared flags. The policy blocks settings at or above 5 Hz while minors mode is enabled and requires device-owner authentication plus a warning step for the adult path. Strong biometrics or an operating-system PIN/passcode can authenticate the device owner; this is not independent age verification.',
          'Authentication uses a monotonic 30-minute cache and progressive lockout after repeated failures. The verification covers software access policies and session behavior. App Check activation is implemented, but the September project record states that backend enforcement is not enabled.',
        ],
      },
      {
        title: 'Separating the beta from device work',
        paragraphs: [
          'Five packages separate domain logic, data access, UI, BLE and native bridges. SQLite repositories support local session and device data, while the beta uses Firebase authentication and cloud session records.',
          'Typed MethodChannel/EventChannel interfaces connect Flutter to Android foreground-service and Swift CoreBluetooth code. Device-owner authentication supports biometrics or the operating system’s PIN/passcode fallback. Native accessory serialization and session handlers remain prototype work; the current beta uses its separate Dart session path and a mock BLE adapter.',
        ],
      },
      {
        title: 'Release and test evidence',
        paragraphs: [
          'The Firebase closed beta began with real testers on June 29, 2026, followed by an Android internal release. The work brought together sign-in, manual access approval, session controls and recorded history as one beta workflow.',
          'At private source revision 6587fb6 on October 1, 56 selected domain tests and 15 beta-controller tests passed on Flutter 3.47.4 / Dart 3.13.3. The controller uses a fake persistence adapter in those tests. Another 44 authorization tests passed against an actual local Firestore emulator with synthetic users, covering self-approval, cross-user access, protected fields and session validation. All 115 selected cases passed without skips; this is not the full suite or a new device/store release.',
          'The May 29 package run records 354 passing tests and zero analyzer issues. The September launch record separately reports 395 package/app tests. These dated records and their original images remain separate from the current focused execution.',
          'The September 15 release record documents Android Play internal build 1.0.0+21. The last documented TestFlight upload is older, and current iOS availability is not established. The approval-email function is implemented but recorded as undeployed; manual approval and the in-app welcome flow are the beta path.',
        ],
      },
    ],
    accentText: 'text-cyan-400',
    accentDot: 'bg-cyan-400',
    accentFrom: 'from-cyan-500/10',
    links: [{ label: 'Session architecture and test evidence', href: 'https://github.com/MILTONADINA/Private-Projects-Portfolio-Showcase/tree/main/LightRoutines' }],
    category: 'product',
  },
  {
    slug: 'lumiere',
    name: 'Lumière',
    overview: {
      approach: 'Translation records keep English and Swahili content associated with the same entity. Admin API handlers verify authenticated admin membership before writing, while validated orders retain their Stripe checkout-session reference.',
      evidence: 'October 1, 2026: nine offline utility checks passed, covering sanitization and rate-limit boundaries (five existing checks plus four focused additions). The historical five-check image is separately dated. Client source and product screens remain confidential; live payment and email delivery were not part of these checks.',
    },
    isPrivate: true,
    workType: 'Client engagement',
    period: 'December 2025 to February 2026',
    audience: 'Agency staff managing content and customers making inquiries or purchases',
    stage: 'Engagement ended February 2026; CMS, localized pages and checkout implemented',
    domain: 'Bilingual agency content, CMS and checkout',
    role: 'Full-Stack Developer',
    blurb:
      'An English/Swahili agency site that lets staff maintain services, portfolio work and team content, while customers can make inquiries and place orders.',
    stack: ['TypeScript', 'Next.js 16', 'React 19', 'next-intl', 'Prisma', 'PostgreSQL', 'Supabase', 'Tailwind CSS', 'Stripe', 'Zod', 'DOMPurify'],
    metrics: [{ label: 'Supported locales', value: 'EN / SW' }],
    summaryPoints: [
      'Built localized public pages and a CMS-style admin for non-technical staff.',
      'Connected validated orders to Stripe checkout sessions.',
      'Added authenticated admin API handlers and process-local rate limits for contact, newsletter and checkout requests.',
      'Implemented editorial draft/publish states, content snapshots and restoration for selected content types, with transactional updates where related records must change together.',
      'Stored inquiries before notification attempts and handled repeat newsletter signups, including concurrent duplicate requests.',
    ],
    sections: [
      {
        title: 'Giving staff control of the content',
        paragraphs: [
          'The agency needed a bilingual public site and an internal way to keep services, portfolio entries, team profiles and testimonials current. I built the Next.js application and CMS workflow so content changes could happen through staff-facing forms.',
          'Localized content, administration, inquiries and orders share a relational data model. I separated staff-managed content from customer request handling and added explicit authorization checks to the admin API handlers.',
        ],
      },
      {
        title: 'Translation and rendering decisions',
        bullets: [
          'Localized entities use companion translation tables keyed by entity and locale. Database uniqueness constraints prevent duplicate translations for the same locale while Prisma provides typed query shapes.',
          'Server Components fetch content on the server, with client components for forms and interactive UI. The public route structure uses locale prefixes such as /en/services and /sw/services.',
          'Admin API handlers verify the Supabase user and admin membership before writing through Prisma. This keeps the application authorization check close to the operation.',
        ],
      },
      {
        title: 'From an order to checkout',
        paragraphs: [
          'The checkout handler validates the request, resolves the selected package, creates the order and opens a Stripe Checkout session. It stores the provider session ID so the application can relate the payment workflow back to the order.',
          'Contact, newsletter and checkout handlers use process-local IP-based rate limits. Input schemas, rich-text sanitization and Stripe webhook signature verification cover their respective request boundaries.',
        ],
      },
      {
        title: 'Editorial changes, recovery and repeat requests',
        bullets: [
          'Editorial handlers validate draft/published state and request cache revalidation after updates. A transactional update keeps a content record, its translations and associations together.',
          'Content snapshots support history review and restoration for selected types. Trash restoration clears deletion markers for supported content; these are application features rather than an immutable security log or universal rollback.',
          'Contact handling stores the inquiry before attempting notification and confirmation email. Newsletter signup handles existing addresses and concurrent uniqueness conflicts without creating duplicate subscriptions.',
        ],
      },
      {
        title: 'Focused utility verification',
        paragraphs: [
          'On October 1, 2026, five existing sanitization/rate-limit checks and four focused quota-boundary checks passed with no failures. The added checks cover exhaustion, identifier separation, expiry and HTTP wrapper behavior. A timer-only harness lets the checks terminate without changing production logic.',
          'These nine offline checks exercise utilities, not live authorization, database, payment or email services. The earlier five-check image remains a separate historical record, first committed February 25, 2026 with no execution timestamp recorded.',
        ],
      },
      {
        title: 'A confidential client case',
        paragraphs: [
          'The case explains the translation approach, administration boundaries and checkout flow through sanitized diagrams and descriptions. Client source, identities and product screens remain confidential.',
        ],
      },
    ],
    accentText: 'text-violet-400',
    accentDot: 'bg-violet-400',
    accentFrom: 'from-violet-500/10',
    links: [{ label: 'Bilingual CMS architecture case study', href: 'https://github.com/MILTONADINA/Private-Projects-Portfolio-Showcase/tree/main/Lumiere' }],
    category: 'client',
  },
  {
    slug: 'flourish',
    name: 'Flourish',
    overview: {
      approach: 'I separated deterministic rules evaluation from encryption, persistence and platform services. Check-ins retain content and engine versions plus encrypted reasoning traces; retry-safe submissions connect to private reports, a curated provider directory and controlled reminders.',
      evidence: 'On October 1, 2026, 45 focused unit checks passed across four files for rules-engine determinism, runtime purity and provider mapping. One property test exercised 1,000 synthetic inputs. Clinical-content approval and launch remain gated; the development catalog is synthetic.',
    },
    isPrivate: true,
    workType: 'Client engagement',
    audience: 'Parents recording developmental observations and preparing reports',
    stage: 'Implemented workflows; clinical content and launch gated',
    domain: 'Versioned family check-ins, private reports and supporting workflows',
    role: 'Full-Stack & Compliance Engineer',
    blurb:
      'A cross-platform family application that turns milestone observations into traceable results and shareable reports, with supporting provider, reminder and administration workflows.',
    stack: ['TypeScript', 'Next.js', 'Expo', 'Fastify', 'tRPC', 'Drizzle', 'PostgreSQL', 'Vercel Blob'],
    metrics: [{ label: 'Focused unit checks passed · Oct 1, 2026', value: '45' }],
    metricsNote: 'Four files: deterministic rules behavior, runtime purity and provider mapping. No failed or skipped cases.',
    summaryPoints: [
      'Built a pure rules engine with versioned catalog/rule inputs and stored reasoning traces.',
      'Connected repeat-safe check-ins to encrypted results, private reports and provider-directory refreshes.',
      'Implemented consent/deletion workflows, controlled reminders and scoped administration across web, mobile and API.',
    ],
    sections: [
      {
        title: 'From a parent observation to a traceable result',
        paragraphs: [
          'Parents need a consistent way to record developmental observations and prepare information for a professional conversation. My work connects the check-in, report and supporting administration workflows across a TypeScript web/mobile/API monorepo.',
          'The client fetches age-appropriate questions with a pinned content version. The API validates answers, evaluates the rules and stores the result with the catalog, rule and engine versions, an input hash and encrypted reasoning traces. A client token makes repeat submissions return the existing result.',
        ],
      },
      {
        title: 'Keep evaluation reproducible and separate from infrastructure',
        paragraphs: [
          'The synchronous TypeScript engine receives its inputs explicitly. It normalizes response order, applies age/date-scoped rules, aggregates domain results and records which rules contributed. Encryption, hashing and persistence stay in the API so the engine does not depend on server-side I/O or cryptography.',
          'The content loader validates versioned catalogs and rules with Zod and enforces development-content markers. The repository currently contains synthetic catalogs; regression snapshots establish software stability, not clinical validity. History-based rules exist in the engine, while the current submission path evaluates the supplied check-in without a history input.',
        ],
      },
      {
        title: 'Protect results and make reports shareable',
        paragraphs: [
          'Field encryption uses AES-256-GCM with a version marker and key identifier. Responses, domain results and reasoning-trace values are encrypted before persistence; writes use the operator-configured key and reads resolve the recorded key ID.',
          'The report handler checks account access and that the requested result belongs to the selected record before decryption and PDF generation. A storage adapter supports private uploads and expiring signed access. This keeps report rendering separate from the configured storage provider.',
        ],
      },
      {
        title: 'Refresh directories and deliver restrained reminders',
        paragraphs: [
          'The provider ingestion path parses public registry data, filters supported taxonomy and geography, and batches updates while preserving staff-curated fields. An advisory lock prevents overlapping ingestion work, and the job records counts and a source-version label.',
          'Reminder scheduling accounts for quiet hours and idempotent enqueueing. Before delivery, the worker rechecks opt-in, check-in cadence and frequency limits; permanently invalid push tokens are cleared. These are implemented workflows, separate from a claim that a live import or notification delivery succeeded.',
        ],
      },
      {
        title: 'Treat administration and data requests as workflows',
        paragraphs: [
          'Consent grant/withdraw operations handle concurrent requests. Deletion requests have a cancellation window, then a row-locked job replaces sensitive values and records fulfillment. Administrative data-request handling records the outcome and an optional export-response link; it does not generate an export file automatically.',
          'Database privileges let the application append audit records without updating or deleting them. Privileged administration is scoped separately, with an optional two-person approval gate for publishing. Subscription state is implemented as a free-preview framework; paid billing activation remains deferred.',
        ],
      },
      {
        title: 'Validation and delivery stage',
        paragraphs: [
          'The October 1 focused run passed 20 rules-engine checks and 25 provider-mapping checks, with no failed or skipped cases. The engine scope includes one fixed-seed property test covering 1,000 synthetic inputs, input-order and non-mutation checks, and runtime-purity checks. Required package dependencies built in an isolated snapshot using Node 24.',
          'The May 29, 2026 historical summary separately records 1,278 passing tests across 25 workspaces. Neither result establishes clinical efficacy or a production launch. Client content approval and operational launch requirements remain outstanding; the public case uses sanitized diagrams and result summaries.',
        ],
      },
    ],
    accentText: 'text-emerald-400',
    accentDot: 'bg-emerald-400',
    accentFrom: 'from-emerald-500/10',
    links: [{ label: 'Rules engine, workflow architecture and test evidence', href: 'https://github.com/MILTONADINA/Private-Projects-Portfolio-Showcase/tree/main/Flourish' }],
    category: 'client',
  },
  {
    slug: 'graph-engineering',
    name: 'Graph Engineering',
    stage: 'Active fork development; two upstream proposals open',
    overview: {
      approach: 'I extended the original scaffolding project with a TypeScript context and execution engine, a React dashboard, MCP access, and Laya/Jev decision adapters. Accepted requirements survive between runs, retain source references and stay in the context packet even when their evidence needs review. Coding tools share that retained knowledge while execution follows the configured approval and verification rules.',
      evidence: 'On October 1, 130 focused engine tests and 9 Laya service tests passed using synthetic fixtures; decision transports and Docker verification were mocked. A separate eight-process CLI demo confirmed memory persistence and source-change review. One synthetic 1,000-file TypeScript benchmark indexed cold in 0.73 seconds on an Apple M5 Max, with embeddings absent. These results establish specific behaviors, not autonomous coding accuracy.',
      outcome: 'September 23, 2026: a recorded task repaired UTF-8 text decoding across split input chunks using one local Qwen worker call and three Laya decisions. All four unchanged regression tests passed; the project owner reported acceptance on September 24. This is one documented repair, separate from the October synthetic checks.',
    },
    isPrivate: false,
    publicLabel: 'Public collaborative project',
    workType: 'Collaborative development and upstream proposals',
    period: 'September 2026 to present',
    audience: 'Developers using multiple coding tools who need persistent project context and reviewable execution',
    domain: 'Repository context and controlled agent execution',
    role: 'Project Partner & Fork Developer',
    blurb:
      'A local platform that lets coding tools share project knowledge across sessions, preserves reviewed requirements when source changes, and ties proposed edits to plans and required checks.',
    stack: ['TypeScript', 'Node.js', 'Python', 'React', 'SQLite / FTS5', 'Tree-sitter', 'Laya / Jev', 'Docker', 'MCP'],
    metrics: [
      { label: 'Focused engine tests passed', value: '130' },
      { label: 'Laya service tests passed', value: '9' },
    ],
    metricsNote: 'October 1, 2026 · selected synthetic tests at 5b88af9; not a full-suite or live-model result.',
    summaryPoints: [
      'Implemented SQLite snapshots, text search (FTS5), source relationships and optional local embeddings. Retrieved context stays within a size limit and cites files, lines and content hashes.',
      'Built reviewed memory with separate proposal, acceptance, sharing and exact-text export permissions. Changed source triggers review while accepted requirements and constraints remain mandatory.',
      'Integrated Laya, a local decision service, and optional Jev, a hosted judgment API, to rank explicit workflow, effort, context and recovery choices. Shadow mode records their suggestions while fixed baseline rules stay in control.',
      'Added syntax and limited compiler-assisted analysis for supported language subsets, including Dart tooling. Ambiguous or unavailable resolution remains explicit.',
      'Tied plans to source, policy and selected checks, with optional native-worker identity. Kept isolated worktrees, scoped proposals, required verification and human acceptance as separate stages.',
    ],
    sections: [
      {
        title: 'Extending an existing foundation',
        paragraphs: [
          'I collaborate on Graph Engineering with its original author, NdahayoKevin25. The original project supplies the template and scaffolding foundation; my public fork adds the local context and execution platform, dashboard, decision adapters and additional template/authentication work. These additions are identifiable in the fork history rather than attributed to the inherited scaffold.',
          'The implementation lives on my fork’s dev branch. Upstream proposals #1 and #2 remain open as of October 1, 2026; merged fork releases are not upstream acceptance. The scaffolder has an MIT license, while the platform has no project-root license yet.',
        ],
      },
      {
        title: 'Keeping useful context between coding sessions',
        paragraphs: [
          'The engine indexes the current working tree into SQLite snapshots containing files, declarations, source relationships and searchable chunks. FTS5 provides lexical lookup; graph retrieval follows relationships; an explicitly provisioned local Jina model adds vector retrieval. Missing embeddings produce a visible fallback without downloading a model automatically.',
          'CLI, dashboard and MCP users retrieve bounded packets that cite file paths, line ranges and content hashes. Accepted requirements and constraints are mandatory regardless of the query. If those rules exceed the allowed context budget, retrieval refuses instead of silently omitting them.',
          'File, directory and repository summaries use content hashes. Reusable solutions are keyed to the project, snapshot, policy and inputs; changed inputs invalidate a match. Retention protects cited evidence, while backup and restore preserve local data through explicit maintenance operations. Automatic comprehensive Git-history or chat ingestion is not claimed.',
        ],
      },
      {
        title: 'Reviewed memory and the cloud boundary',
        paragraphs: [
          'Memory begins as a private proposal. Acceptance, sharing and cloud export authorization are separate operations. Source changes and invalid supersession produce review flags; typed assertions can identify exact scoped contradictions without deciding which statement is true. Superseded records retain their history, and transactional comparisons guard concurrent updates.',
          'A mandatory memory reaches a cloud client only when it is shared, sourced inside the allowed export paths, and authorized for its exact text hash. Otherwise the whole packet is refused. Local storage alone does not make a cloud-backed coding client offline, and credential-pattern screening cannot recognize every sensitive fact.',
          'An October 1 demonstration launched eight separate CLI processes against synthetic source: an accepted constraint survived restart, appeared in retrieval, and remained mandatory after its edited source triggered review. Local CLI-to-MCP integration tests also exercised the separate export-consent flow.',
        ],
      },
      {
        title: 'What Laya and Jev actually do',
        paragraphs: [
          'These providers make bounded choices rather than write the implementation patch. The engine batches up to 12 independent questions, with explicit candidates and a deterministic baseline for each. Controllers cover worker, workflow, effort, context and retrieval choices, review scope, recovery, stopping and memory writes. Shadow mode records provider answers without replacing the baseline; promotion requires separate reviewed evidence and authority.',
          'Laya runs through a Python HTTP sidecar with a pinned SDK and checkpoint, explicit offline model provisioning, bearer authentication, bounded requests and serialized inference. The runtime observes actual model forward calls and requires one forward pass per independent batch. The October 1, 2026 service tests use fake predictors and loopback HTTP, so the nine passing checks verify the protocol rather than model accuracy.',
          'Optional hosted Jev receives separately supplied exportable state. Cost-capped calls require reviewed pricing and a durable reservation before dispatch; a batch is accounted for once, missing usage remains unknown, and ambiguous failures retain conservative accounting. Neither a confidence score nor a routing choice can waive mandatory context, verification or human acceptance.',
        ],
      },
      {
        title: 'Keeping approval tied to the actual work',
        paragraphs: [
          'A reviewed plan can become stale when its steps, worker or checks change. I added content-bound approvals so required approval follows the plan that was actually reviewed. Changed bound inputs require a fresh plan and any approval required by project policy.',
          'Opt-in native-worker identity records bind executable paths and hashes to the plan. Verification selection keeps mandatory checks while letting a plan choose supported optional checks. Explicit DAG steps declare dependencies and write scopes; proposals run through isolated worktrees and configured Docker verification. Cached proposals rerun required checks.',
          'Completion-driven decision and verification settings can remove their respective fixed deadlines while retaining cancellation and independent limits. Changing those settings changes the policy binding. A successful automated run still records human acceptance as pending; it does not authorize publication or merging.',
        ],
      },
      {
        title: 'Language support and deterministic generation',
        bullets: [
          'Dart support includes source indexing, Pub lockfile inventory, isolated analyzer work and explicit offline generator steps.',
          'The fine-grained template catalog has 53 implemented renderer registrations, with manifest validation and declared prerequisites. Three additional catalog nodes remain planned.',
          'Syntax indexing covers TypeScript, JavaScript, Python, Go, Rust, Java, C# and Dart. Bounded compiler or analyzer passes have language-specific prerequisites and limits; this is not a complete runtime call graph.',
          'The TypeScript compiler host uses indexed source and inert configuration. It does not execute project plugins or load arbitrary installed dependencies; ambiguity and unsupported dispatch remain unresolved.',
        ],
      },
      {
        title: 'Measured behavior and contribution results',
        paragraphs: [
          'At public dev commit 5b88af9 on October 1, 130 selected engine tests across 13 files and nine Python sidecar tests passed. The scope includes real SQLite maintenance, memory/assertion persistence, bounded TS/JS bindings and a local CLI-to-MCP flow, plus mocked decision and verification contracts. No fresh real-model inference or Docker isolation result is inferred from these tests.',
          'A single current-source benchmark indexed 1,000 generated TypeScript files containing 2,000 functions in 728.837 ms cold, 176.043 ms unchanged and 570.058 ms after one edit on an Apple M5 Max. All retrieval modes found the expected file; hybrid used lexical/graph fallback because embeddings were absent. This synthetic observation does not establish production throughput, coding accuracy or token savings.',
          'A separate September 23 public receipt records a real split-UTF-8 repair using one local Qwen worker call and three Laya decisions, followed by four passing unchanged regressions. The owner reported acceptance September 24. A September 25 Jev pilot recorded two planning questions in one shadow call while retaining the baseline; its later autonomous implementation attempts failed and are documented as failures.',
          'Fork PRs #118, #119, #122, #123 and #125 merged plan approval, Dart, worker identity, verification selection and completion-driven deadlines. The current focused results and dated repair receipt are separate from each PR’s historical CI record.',
        ],
      },
    ],
    accentText: 'text-sky-400',
    accentDot: 'bg-sky-400',
    accentFrom: 'from-sky-500/10',
    links: [
      { label: 'Source fork: dev branch', href: 'https://github.com/MILTONADINA/graph-engineering/tree/dev' },
      { label: 'Context and memory design', href: 'https://github.com/MILTONADINA/graph-engineering/blob/5b88af9787f9da00e312268847aee27053be8555/docs/context-lifecycle.md' },
      { label: 'Laya and Jev decision controls', href: 'https://github.com/MILTONADINA/graph-engineering/blob/5b88af9787f9da00e312268847aee27053be8555/docs/decisions.md' },
      { label: 'Recorded real repair', href: 'https://github.com/MILTONADINA/graph-engineering/blob/5b88af9787f9da00e312268847aee27053be8555/evaluation/real-utf8-repair-2026-09-23.json' },
      { label: 'Upstream context/execution proposal', href: 'https://github.com/NdahayoKevin25/graph-engineering/pull/1' },
      { label: 'Upstream template-kit proposal', href: 'https://github.com/NdahayoKevin25/graph-engineering/pull/2' },
    ],
    category: 'open-source',
  },
  {
    slug: 'private-security-contributions',
    name: 'Private Youth-Sports Platform',
    stage: 'Authored security submissions; no merged PRs in the reviewed record',
    overview: {
      approach: 'Server handlers establish identity, role and record ownership before sensitive writes. Related proposals connect webhook verification and processed-event tracking, and route deletion/retention requests through guarded operations.',
      evidence: 'The October 1, 2026 private review records 30 authored PRs across three repositories: 28 open and two closed without merge. The work includes code and operational documentation, not a claim of deployed remediation or handling a real breach.',
    },
    isPrivate: true,
    workType: 'Security engineering contributions',
    domain: 'Authorization, session handling and privacy workflows',
    role: 'Security Contributor',
    blurb:
      'Security engineering contributions to a youth-sports platform and related applications, focused on who can access records and how sensitive workflows are handled.',
    stack: ['TypeScript', 'Convex', 'SvelteKit', 'Drizzle', 'PostgreSQL'],
    metrics: [{ label: 'Repositories with authored submissions', value: '3' }],
    summaryPoints: [
      'Authored authorization, record-ownership, session and webhook-hardening changes.',
      'Submitted parent-requested data-deletion and retention workflows with supporting documentation.',
      'Prepared incident-response and security-review material alongside the code proposals.',
    ],
    sections: [
      {
        title: 'The contribution scope',
        paragraphs: [
          'I contributed security code and documentation across three private repositories for a youth-sports platform and related applications. The work focused on server-side authorization, record ownership, authentication/session handling and event-processing boundaries.',
          'In one authorization submission, I added authentication helpers and admin/ownership checks to server operations. Related submissions tightened mutation boundaries and input schemas and added consent-aware behavior to marketing dispatch.',
        ],
      },
      {
        title: 'Privacy and operational workflows',
        bullets: [
          'Implemented proposed parent-requested deletion UI/server workflows and database schema changes.',
          'Submitted Neon/Drizzle deletion and retention operations behind guarded internal handlers.',
          'Added webhook-verification and processed-event tracking logic, and proposed nonce-based CSP/header hardening.',
          'Prepared incident-response documentation and security-review reports to accompany the implementation work.',
        ],
      },
      {
        title: 'Submission status',
        paragraphs: [
          'The security patches were submitted through pull requests and remain unmerged. The repositories are private, so this case describes my contribution at a high level without publishing application code or private issue details.',
        ],
      },
    ],
    accentText: 'text-violet-400',
    accentDot: 'bg-violet-400',
    accentFrom: 'from-violet-500/10',
    links: [{ label: 'Security contribution case study', href: 'https://github.com/MILTONADINA/Private-Projects-Portfolio-Showcase/tree/main/PrivateSecurityContributions' }],
    category: 'contribution',
  },
  {
    slug: 'hive',
    name: 'Hive Contributions',
    stage: 'One upstream PR merged; four documentation proposals open',
    overview: {
      approach: 'The accepted Windows quickstart explains PowerShell execution-policy handling and the WSL setup route. Separate integration documents explain configuration and use, making technical setup steps understandable to contributors.',
      evidence: 'PR #5668 merged upstream on March 15, 2026. Four documentation proposals covering 18 integrations remain open as of October 1, 2026. These are documentation contributions; they do not imply authorship of the integration engines.',
    },
    isPrivate: false,
    publicLabel: 'Open-source contributor',
    workType: 'Upstream documentation contributions',
    domain: 'Windows onboarding and tool-integration documentation',
    role: 'Open-Source Contributor',
    blurb:
      'Documentation contributions that help Hive users set up the framework on Windows and configure its tool integrations.',
    stack: ['Python', 'PowerShell', 'Markdown', 'GitHub'],
    metrics: [
      { label: 'PR merged upstream', value: '1' },
      { label: 'Documentation PRs open', value: '4' },
    ],
    summaryPoints: [
      'Improved the Windows quickstart with PowerShell execution-policy guidance and a WSL setup link.',
      'Submitted integration documentation for data, developer, business and support tools.',
    ],
    sections: [
      {
        title: 'Helping contributors reach a working setup',
        paragraphs: [
          'Windows onboarding needs instructions that reflect PowerShell behavior as well as a clear route to WSL. My accepted quickstart contribution adds execution-policy guidance and connects readers to WSL setup documentation.',
          'PR #5668 merged upstream on March 15, 2026. The linked pull request shows the accepted change and its review history.',
        ],
      },
      {
        title: 'Integration documentation',
        paragraphs: [
          'Four open documentation PRs cover 18 integrations, including Kafka, Redis, MongoDB, Jira, HubSpot, GitLab, Salesforce, Twilio and Supabase. The work describes configuration and tool use rather than claiming authorship of the integration engines.',
          'The open submissions are #6708, #6709, #6716 and #6717. I also submitted code proposals around expression evaluation, execution limits and token refresh; those proposals closed without merge.',
        ],
      },
    ],
    accentText: 'text-emerald-400',
    accentDot: 'bg-emerald-400',
    accentFrom: 'from-emerald-500/10',
    links: [
      { label: 'Merged Windows quickstart PR', href: 'https://github.com/aden-hive/hive/pull/5668' },
      { label: 'Authored pull requests', href: 'https://github.com/aden-hive/hive/pulls?q=is%3Apr+author%3AMILTONADINA' },
    ],
    category: 'contribution',
  },
  {
    slug: 'dr-who',
    name: 'Doctor Who Knowledge API',
    stage: 'Three-person academic project; personal contribution identified',
    overview: {
      approach: 'My frontend and OpenAI integration use supplied schema relationships and sample records to answer questions. The endpoint returns text rather than executing generated SQL. JWT mutation protection and PostgreSQL migration work complement the interface.',
      evidence: 'Three Jest/Supertest authentication-route tests passed on October 1, 2026 with database calls mocked. They cover missing-token rejection, valid-token body validation and public GET access. The 16-model schema is team scope, not sole authorship.',
    },
    isPrivate: false,
    publicLabel: 'Public coursework',
    workType: 'Team coursework project',
    domain: 'Relational knowledge API and schema-aware questions',
    role: 'Frontend, AI & Authentication Contributor',
    blurb:
      'A team-built Doctor Who knowledge API with a relational data model, responsive interface and OpenAI-powered answers grounded in schema and sample records.',
    stack: ['Node.js', 'Express', 'Sequelize', 'PostgreSQL', 'OpenAI', 'Jest'],
    metrics: [
      { label: 'Team members', value: '3' },
      { label: 'Models in the team schema', value: '16' },
    ],
    summaryPoints: [
      'Built the responsive frontend and OpenAI question-answering integration.',
      'Added JWT mutation protection, PostgreSQL migration work and focused authentication-route tests.',
    ],
    sections: [
      {
        title: 'Team scope and my contribution',
        paragraphs: [
          'This three-person course project models doctors, episodes, companions, enemies and their relationships. The team schema contains 16 Sequelize models, with REST and relational-query routes for reading and maintaining the data.',
          'My documented contributions include the responsive frontend, OpenAI integration, deployment configuration and testing. Later commits add authentication middleware, route tests and PostgreSQL migration work. Teammates contributed the original model associations and API/service queries.',
        ],
      },
      {
        title: 'Schema-aware answers',
        paragraphs: [
          'The question endpoint supplies table relationships and sample records to OpenAI, then returns a text answer grounded in that schema and record context.',
          'The active endpoint answers from supplied context; database joins and detail queries live in the separate query service. It does not execute model-generated SQL.',
        ],
      },
      {
        title: 'Authentication evidence',
        paragraphs: [
          'Three Jest/Supertest authentication-route tests passed on October 1, 2026. They cover missing-token rejection, a valid token reaching body validation and public GET access with database calls mocked.',
          'The public repository includes the test file, contribution record and implementation. The project is an academic prototype, with the test result scoped to those route behaviors.',
        ],
      },
    ],
    accentText: 'text-indigo-400',
    accentDot: 'bg-indigo-400',
    accentFrom: 'from-indigo-500/10',
    links: [
      { label: 'Source repository', href: 'https://github.com/MILTONADINA/Dr.WHO' },
      { label: 'Team contribution record', href: 'https://github.com/MILTONADINA/Dr.WHO/blob/8b1012d9ae2a3c9f5c7a0c3b1acd808ecacf6a73/CONTRIBUTIONS.md' },
      { label: 'Authentication tests', href: 'https://github.com/MILTONADINA/Dr.WHO/blob/8b1012d9ae2a3c9f5c7a0c3b1acd808ecacf6a73/__tests__/auth.test.js' },
    ],
    category: 'coursework',
  },
  {
    slug: 'ebay',
    name: 'E-Commerce REST API',
    stage: 'Backend coursework; user and product API implemented',
    overview: {
      approach: 'Controllers, services and Spring Data JPA repositories have separate responsibilities. User and product controllers each implement create, list and get-by-ID operations. Bid and order entities extend the model; corresponding transaction endpoints are not implemented.',
      evidence: 'The JUnit application-context smoke test passed against isolated PostgreSQL 15 on October 1, 2026. It verifies application and persistence initialization, not every business workflow. Public source exposes all six user/product endpoints and the test.',
    },
    isPrivate: false,
    publicLabel: 'Public coursework',
    workType: 'Backend coursework project',
    domain: 'Java marketplace data and user/product endpoints',
    role: 'Backend Developer',
    blurb:
      'A Spring Boot coursework API for a marketplace, with user/product endpoints and relational models for products, bids, orders, ratings and payment methods.',
    stack: ['Java', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'Docker', 'JUnit'],
    metrics: [{ label: 'Create/read user and product endpoints', value: '6' }],
    summaryPoints: [
      'Implemented controller, service and repository layers for user/product operations.',
      'Defined JPA marketplace relationships and a Dockerized PostgreSQL development environment.',
    ],
    sections: [
      {
        title: 'Practicing a layered Java backend',
        paragraphs: [
          'The project separates HTTP controllers, service logic and Spring Data JPA repositories. User and product controllers each support create, list and get-by-ID operations, giving the API six implemented endpoints.',
          'The domain includes bid, order, rating and payment-method entities with corresponding repositories. Those models extend the marketplace schema; bidding and order transaction endpoints remain outside the implemented route surface.',
        ],
      },
      {
        title: 'Database setup and verification',
        paragraphs: [
          'Docker Compose provides PostgreSQL for local development. The Java 17/Maven project uses Spring Boot 4 and JPA for persistence and application wiring.',
          'The JUnit application-context test passed against isolated PostgreSQL 15 on October 1, 2026. That smoke check covers application and persistence initialization. The public repository exposes the controllers, entity relationships and test source.',
        ],
      },
    ],
    accentText: 'text-amber-400',
    accentDot: 'bg-amber-400',
    accentFrom: 'from-amber-500/10',
    links: [
      { label: 'Source repository', href: 'https://github.com/MILTONADINA/Ebay' },
      { label: 'Application-context test', href: 'https://github.com/MILTONADINA/Ebay/blob/c0e3c56adaf852ac602ae67c98007ae1be9f88fb/EBAY/src/test/java/com/ebay/api/ApiApplicationTests.java' },
    ],
    category: 'coursework',
  },
  {
    slug: 'application-security-lab',
    name: 'Applied AppSec Lab',
    stage: 'Documented training assessment and proposed mitigations',
    overview: {
      approach: 'The STRIDE model distinguishes identity from tenant/resource authorization and records residual risks. In the separate Juice Shop exercise, I traced CSP, cross-origin and browser-isolation alerts to their affected behavior, risk and proposed mitigation.',
      evidence: 'The May 30, 2026 local passive baseline crawled 158 URLs and reported ten alert types: two medium, five low and three informational. Original scan outputs support the findings. This was a training target, with no claim of deployed fixes or a clean rescan.',
    },
    isPrivate: false,
    workType: 'Independent security practice',
    domain: 'Threat modeling, passive assessment and finding triage',
    role: 'Security Analyst',
    blurb: 'A documented application-security exercise connecting a STRIDE threat model with an OWASP ZAP assessment of a local, intentionally vulnerable training application.',
    stack: ['OWASP ZAP', 'STRIDE', 'Docker', 'CSP', 'CORS', 'Semgrep', 'gitleaks'],
    metrics: [{ label: 'Dated passive scan', value: 'May 30, 2026' }],
    summaryPoints: [
      'Documented trust boundaries, threat scenarios and residual risks in a STRIDE model.',
      'Triaged passive-scan alerts and linked proposed mitigations to the original scan artifacts.',
    ],
    sections: [
      {
        title: 'From an architecture to its trust boundaries',
        paragraphs: [
          'I authored a sanitized BrightPath data-flow diagram and STRIDE model covering browser/mobile clients, authentication, the business API, database access and payment callbacks. The analysis separates authentication from tenant and resource authorization.',
          'The model explains why a backend database connection that bypasses row-level security needs explicit API predicates. It records residual risks alongside controls so the diagram does not imply that a design decision eliminates every attack path.',
        ],
      },
      {
        title: 'A bounded assessment and reproducible evidence',
        paragraphs: [
          'For the scanning exercise, I used OWASP ZAP against OWASP Juice Shop in local Docker. The May 30, 2026 baseline traversed 158 URLs and reported ten alert types: two medium, five low and three informational. This was a passive baseline and spider run against a training target.',
          'The report traces findings back to the preserved JSON, HTML and Markdown outputs. The finding assessment covers missing content-security policy, cross-origin configuration and browser-isolation headers, and explains where endpoint-specific investigation is still needed.',
        ],
      },
      {
        title: 'Turning alerts into a technical explanation',
        paragraphs: [
          'I documented the affected behavior, risk and a proposed mitigation for each finding group. The exercise demonstrates investigation and communication of security findings; the record does not claim deployed remediation or a clean rescan.',
          'The evidence index describes static analysis, secret scanning, dependency auditing and SBOM generation as separate engineering controls. Client workflow files remain private, and their configuration is separate from the result of this lab.',
        ],
      },
    ],
    accentText: 'text-rose-400',
    accentDot: 'bg-rose-400',
    accentFrom: 'from-rose-500/10',
    links: [
      { label: 'Security evidence index', href: 'https://github.com/MILTONADINA/Private-Projects-Portfolio-Showcase/tree/main/BrightPath/security' },
      { label: 'Assessment and original scan outputs', href: 'https://github.com/MILTONADINA/Private-Projects-Portfolio-Showcase/blob/main/BrightPath/security/scans/OWASP-JuiceShop-ZAP-assessment.md' },
      { label: 'STRIDE threat model and data-flow diagram', href: 'https://github.com/MILTONADINA/Private-Projects-Portfolio-Showcase/blob/main/BrightPath/security/threat-models/BrightPath-STRIDE-threat-model.md' },
    ],
    category: 'lab',
  },
];

export const projects: Project[] = projectContent.map((project) => ({
  ...project,
  highlights: project.summaryPoints,
}));

export const focusAreas = [
  {
    id: 'software',
    title: 'Software engineering',
    summary: 'APIs, relational data models and user interfaces, connected through tested application workflows.',
    examples: [
      { label: 'BrightPath: authorization and payments', href: '/work/brightpath/', description: 'Built tenant-aware APIs, request-bound payment retries and transactional invoice reconciliation across shared web/mobile contracts.' },
      { label: 'Lumière: bilingual CMS and checkout', href: '/work/lumiere/', description: 'Implemented English/Swahili content, authenticated admin API handlers and validated orders connected to Stripe checkout sessions.' },
      { label: 'DevOPs: runtime and verification', href: '/work/devops/', description: 'Built planning commands, scoped memory and claim records that connect a change to its revision, command and expected result. Development is ongoing.' },
    ],
  },
  {
    id: 'security',
    title: 'Cybersecurity and AppSec',
    summary: 'Authorization reviews, privacy controls, threat modeling and documented security-finding analysis.',
    examples: [
      { label: 'Flourish: encryption and audit privileges', href: '/work/flourish/', description: 'Implemented versioned field encryption, controlled report access and database privileges that let the application append audit records without changing prior entries.' },
      { label: 'Private platform: security submissions', href: '/work/private-security-contributions/', description: 'Authored authorization, ownership, session and privacy-workflow patches across three private repositories. The submissions remain unmerged.' },
      { label: 'AppSec lab: threat modeling and assessment', href: '/work/application-security-lab/', description: 'Documented STRIDE trust boundaries and triaged a passive ZAP scan of local Juice Shop, separating findings and proposed mitigations from deployed fixes.' },
    ],
  },
  {
    id: 'application-support',
    title: 'IT and application support',
    summary: 'Application setup documentation, reproducible problem investigation and data-quality work.',
    examples: [
      { label: 'Hive: Windows onboarding', href: '/work/hive/', description: 'Contributed Windows, PowerShell and WSL setup guidance accepted upstream, helping developers follow the project’s installation workflow.' },
      { label: 'Graph Engineering: controlled verification', href: '/work/graph-engineering/', description: 'Added plan-bound approvals, isolated execution and explicit verification selection so proposed changes can be investigated and checked reproducibly.' },
      { label: 'HealthIT: data quality and reporting', href: '/#experience', description: 'Cleaned and analyzed 5,000+ monthly health-record submissions across 47 county facilities, aligning datasets with Ministry of Health standards.' },
    ],
  },
];

export const skills: { group: string; items: string[]; context?: string }[] = [
  {
    group: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Java', 'Dart', 'Python', 'SQL', 'Kotlin', 'Swift', 'C++', 'Rust (WASM)'],
    context: 'TypeScript/JavaScript for web and APIs; Dart, Kotlin and Swift for mobile; Java and C++ coursework; Python model-sidecar and evaluation tooling; experimental Rust hashing.',
  },
  {
    group: 'Frontend',
    items: ['React', 'Next.js (App Router)', 'Vue 3', 'Flutter', 'Tailwind CSS', 'shadcn/ui'],
    context: 'Client portals, a translated CMS, a Flutter beta and public coursework interfaces.',
  },
  {
    group: 'Backend',
    items: ['Node.js', 'NestJS', 'Express', 'Fastify', 'tRPC', 'Spring Boot', 'Convex', 'Deno Edge Functions'],
    context: 'Tenant-aware APIs, local agent services, team coursework and submitted authorization work.',
  },
  {
    group: 'Data',
    items: ['PostgreSQL', 'Supabase', 'MySQL', 'SQLite', 'Firebase', 'Drizzle', 'Prisma', 'Sequelize', 'Meilisearch', 'Pinecone', 'Neo4j'],
    context: 'Application schemas, local/mobile persistence and memory retrieval. Pinecone/Neo4j experience comes from earlier memory-store implementations.',
  },
  {
    group: 'Application Security',
    items: ['OWASP Top 10', 'Threat modeling', 'RLS', 'RBAC', 'Semgrep', 'gitleaks', 'OWASP ZAP', 'JWT', 'bcrypt', 'CycloneDX SBOM'],
    context: 'Authorization and privacy engineering, configured security checks, and an OWASP Juice Shop assessment with published artifacts.',
  },
  {
    group: 'Testing',
    items: ['Vitest', 'Playwright', 'Jest', 'Supertest', 'JUnit 5', 'Mocha', 'flutter_test', 'Python unittest'],
    context: 'Unit, route, persistence, browser, mobile-package and sidecar tests. Project evidence states the date and scope of each recorded result.',
  },
  {
    group: 'AI and developer tooling',
    items: ['MCP', 'SQLite FTS5', 'pgvector', 'Source indexing', 'Context retrieval', 'Model gateways', 'Evaluation harnesses'],
    context: 'Graph Engineering and DevOPs connect source-backed memory, coding workflows and bounded model decisions. Live model results, synthetic checks and experimental paths are identified separately.',
  },
  {
    group: 'Development & Cloud',
    items: ['Docker', 'Git', 'GitHub Actions', 'Maven', 'pnpm', 'Turborepo', 'Vercel', 'Cloudflare Workers', 'Supabase Edge'],
    context: 'Containerized databases, CI workflows, monorepo tooling and server/edge adapters.',
  },
];

export type BackgroundEntry = {
  role: string;
  org: string;
  period: string;
  points: string[];
  projects?: string[];
};

export const experience: BackgroundEntry[] = [
  {
    role: 'Freelance Software Engineer (Contract)',
    org: 'Independent Contractor · Remote',
    period: '2024 to present',
    projects: ['brightpath', 'lumiere', 'flourish'],
    points: [
      'Deliver web and mobile applications for private clients across architecture, implementation, testing and deployment using TypeScript, React/Next.js, Node.js and Flutter/Dart.',
      'Build application security into the work through tenant authorization, RBAC, security scanning and unit, integration and end-to-end tests. The project cases explain the implementation and delivery stage of each system.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    org: 'USAID HealthIT · Nairobi, Kenya',
    period: 'June to November 2022',
    points: [
      'Performed data cleaning and statistical analysis on 5,000+ monthly health-record submissions across 47 county facilities.',
      'Aligned datasets with Kenya Ministry of Health standards and contributed to work recognized by the Ministry for a 20% report-efficiency improvement.',
    ],
  },
  {
    role: 'Freelance Data Analyst & Research Assistant',
    org: 'Various Contracts · Kenya',
    period: '2020 to 2022',
    points: [
      'Designed and deployed mobile data-collection tools using ODK, KoBo and CommCare for health, education and industrial research.',
      'Managed cross-functional teams and analyzed datasets to deliver reports guiding policy and community-development work.',
    ],
  },
  {
    role: 'Data Entry Specialist Intern',
    org: 'Kisumu County Hospital · Kenya',
    period: 'June to November 2019',
    points: [
      'Managed patient data entry into Kenya’s EMR system at 98% accuracy, strengthening record integrity.',
      'Coordinated client enrollment and follow-ups, contributing to an 80% improvement in treatment compliance.',
    ],
  },
];

export const education = [
  {
    school: 'Oklahoma Christian University',
    degree: 'B.S. Computer Science (Cybersecurity)',
    detail: 'Expected April 30, 2027 · GPA 3.48 · Honor Roll · Ultimate Frisbee Scholarship',
    extra: 'Coursework includes Network Security, Operating Systems, Software Engineering I–IV, Data Structures & Algorithms, Database Systems, Cloud Architecture & Security, and Artificial Intelligence.',
  },
  {
    school: 'Masinde Muliro University of Science and Technology',
    degree: 'B.S. Epidemiology & Biostatistics',
    detail: '2019 · Second-Class Honors',
    extra: 'Research methods, data analysis, disease modeling and clinical-trial design inform how I approach data quality and sensitive application workflows.',
  },
];

export const certification = {
  name: 'CompTIA Security+',
  status: 'In progress',
  detail: 'Exam planned for January 2027',
};

export const leadership: BackgroundEntry[] = [
  {
    role: 'CS Team: Cyber Contest',
    org: 'Oklahoma Christian University',
    period: 'Collegiate cybersecurity competition',
    points: ['Participate in the university’s annual collegiate cybersecurity competition.'],
  },
  {
    role: 'Ultimate Frisbee Coach',
    org: 'International School of Kenya',
    period: 'March to May 2023',
    points: ['Mentored student-athletes and organized training programs in an international-school environment.'],
  },
  {
    role: 'Ultimate Frisbee Founder & Coach',
    org: 'Masinde Muliro University of Science and Technology',
    period: '2018 to 2023',
    points: ['Founded and coached a team of more than 40 members and organized inter-university tournaments.'],
  },
];
