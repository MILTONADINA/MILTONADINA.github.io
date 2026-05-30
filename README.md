# MILTONADINA.github.io

Personal portfolio site for **Milton Adina Shisia** — full-stack & security-focused software engineer.

**Live:** https://miltonadina.github.io

Built with **Next.js 15 (App Router) + Tailwind CSS**, statically exported (`output: 'export'`)
and deployed to GitHub Pages via GitHub Actions. Every metric shown on the site was verified
against the real source repositories on 2026-05-29.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export -> ./out
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the static export and
publishes it to GitHub Pages.

## Structure

- `lib/data.ts` — single source of truth for all content + verified metrics
- `components/` — Hero, Projects, Skills, Experience, Education, Contact
- `public/evidence/` — real, dated test-run screenshots
