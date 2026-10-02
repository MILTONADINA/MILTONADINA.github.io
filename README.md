# Milton Adina Shisia portfolio

Employer-facing portfolio built with Next.js 15 and Tailwind CSS. The static export runs on GitHub Pages.

## Local development

Use Node.js 22.13 or newer. The GitHub Pages workflow uses Node.js 22.

```bash
npm ci
npm run dev
npm run build
```

`npm run build` checks TypeScript and exports the site to `out/`. `npm run preview` serves it at `http://127.0.0.1:4173` using Python 3. `npm run typecheck` checks TypeScript without rebuilding.

## Content and routes

- `lib/data.ts`: profile, project stories, skills, experience, leadership and education. `lib/evidence.ts` supplies public image captions and dimensions.
- `/`: introduction, project index, client engagements, independent work and contributions, experience, technical strengths, education and contact.
- `/work/[slug]/`: individual project stories with source links and evidence.
- `/resume/`: selectable two-page PDF preview with zoom, print and download.
- `public/evidence/`: sanitized test records, conceptual diagrams and permitted independent-project evidence, visible alongside each relevant project.
- `public/resume/Milton_Adina_Shisia_Resume.pdf`: the public résumé.

The 11 cases distinguish client engagements, independent products, original open-source work, fork development, contributions, coursework and security practice. Client engagements flow directly into the remaining work before experience and skills. The compact project index uses the same group order as the accounts; the header links directly to client and independent work. The hero's project action goes straight to the first account. Within independent work, developer tools and the owned mobile product precede contributions and coursework. The software, application-security and IT/application-support pathways link to relevant work; all skills and their language/tooling context are visible by default. Wide project accounts put role, dates and stage near the title, then show contributions, decisions, full stacks and evidence without requiring expansion or navigation. Recorded outcomes retain dates and scope, including Graph Engineering's single documented repair. Individual case pages add further detail, and the coursework group links to the additional public projects.

Use the product name DevOPs. Write for an employer, without em dashes, editing-process narration, unsupported outcomes or unexplained totals. Put the date and scope beside a test result. Distinguish authored work from team scope and submitted work from merged contributions. A recorded test result does not establish deployment, adoption or client acceptance.

Client identities, private repository URLs, source files and product screens must remain confidential. Use established portfolio labels and sanitized explanations of personal contribution, design decisions and delivery stage. Do not add client endorsements, user numbers or business outcomes without permission and evidence. Keep private audit records outside this public repository; preserve permitted public artifacts when changing captions. Label diagrams as diagrams, distinguish historical summaries from fresh scoped results, and never present a redrawn record as a raw terminal capture.

Regenerate the sharing image with `npm run social-card`. Its code-native design uses bundled fonts and does not fetch remote assets.

## Updating the résumé

Preserve the approved original résumé layout. The public export omits the private phone number but retains location, email and professional links. Review both pages and extracted text before replacing the stable PDF path.

The viewer reads that exact file with a locally bundled PDF.js worker. No separate image résumé or external viewer service must be synchronized. After a replacement, check both rendered pages, text selection and links, print preview, mobile zoom, download-file hash, and the browser-PDF fallback. Print output uses the same rendered document pages; Download PDF provides the original file.

## Publishing

The existing GitHub Actions workflow publishes on a push to `main`. Local build or preview does not publish anything. Keep publication separate from content review.
