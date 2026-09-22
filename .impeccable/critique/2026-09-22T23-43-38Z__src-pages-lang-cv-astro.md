---
target: CV page (EN/AR/TR, print + web)
total_score: 19
max_score: 28
na_heuristics: 5,9,10
p0_count: 1
p1_count: 3
target_identity: "file:/Users/macbook/Projects/mereyani.github.io/src/pages/[...lang]/cv.astro"
target_fingerprint: "sha256:6a0f8b0386f8571fb451671839a644636807e679c929ee9f452372e60151eef7"
target_path: /Users/macbook/Projects/mereyani.github.io/src/pages/[...lang]/cv.astro
timestamp: 2026-09-22T23-43-38Z
slug: src-pages-lang-cv-astro
---
Method: dual-agent (A: design+content review · B: detector+browser evidence)

## Design Health Score: 19/28 (68%, Acceptable, n/a: 5, 9, 10)
| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of status | 3 | Current status (job ended 04/2026, M.Sc. ongoing) inferable but never stated |
| 2 | Match real world | 2 | "HBYS" unexplained for non-Turkish readers; "Claude Code skill", "0–100 matching" jargon |
| 3 | User control | 3 | Web: back, language, download. PDF: links hidden as plain text |
| 4 | Consistency | 3 | Same structure in 3 languages; 4 of 6 projects lack a year; EN "controls" vs AR/TR "buttons" |
| 5 | Error prevention | n/a | static document |
| 6 | Recognition | 3 | standard sections, visible URLs |
| 7 | Efficiency (skim) | 2 | no emphasis on metrics; must read paragraphs |
| 8 | Minimalism | 3 | tidy but filler bullets/rows, "References: available on request" |
| 9 | Error recovery | n/a | static document |
| 10 | Help | n/a | not applicable |

## Specificity
Well-crafted but category-generic single-column template; strongest facts (≈90 hospitals, 98.2%, first-ranked) buried mid-sentence. Detector: page file clean; 3 advisory font-size findings in CV CSS (intentional print scale; 0.6875rem below DESIGN.md ramp). Browser overlay: line-length flags on full-width A4 prose (partial false positive; median 40–47 chars/line in print).

## Priority issues
1. [P0/P1] Arabic PDF text layer garbled (presentation-form glyphs, dotless letters; "مرعياني" not findable). Fix: embed a static Arabic font for print, re-verify extraction.
2. [P1] EN/TR PDF text order hurts ATS: letter-spaced headings extract as "E X PE R I E N C E"; dates detached from entries; tags merged into project titles. Fix: letter-spacing 0 in print, tags out of h3, dates inline in reading order.
3. [P1] Type 8.25–8.75pt while ~12% of the public page is empty. Fix: 9.5–10pt body, remove public References block, reuse space.
4. [P1] Only job lists duties; "nearly 90 hospitals" repeated in profile and bullet; two filler bullets. Fix: merge bullets, state once, ask owner for real specifics.
5. [P2] Keywords/order: LLM, FastAPI, SQL, transfer learning, computer vision missing from Skills; low-value rows (LCD, serial, remote task mgmt); graduation project (best metric) ranked third. Fix: rebuild Skills, reorder projects.

## Personas
Recruiter: sees only "Computer Engineer"; no specialty; best facts not emphasized; "Turkey" only. ATS: spaced headings, detached dates, Arabic text unreadable, HBYS not a matchable keyword. Hiring engineer: small test sets without validation method; code links not visible in print. Sam: 8.25pt text; h3 includes tag list.

## Minor
EN "telling immature from mature" → "distinguishing". TR titles → "Sınıflandırması"; "arayüz bileşenleri"; "anahtar kelimeler". AR/TR mixed voice (3rd person profile, 1st person bullets). AR comma between Latin terms. Long LinkedIn URL wraps contact row.

## Questions
Two targeted builds (AI/ML vs backend/DB)? Is "Available on request" earning its lines? Why do personal tools outrank the graduation project?
