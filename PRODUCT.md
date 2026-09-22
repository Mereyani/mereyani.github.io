# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (static output), plain CSS, Astro Content Collections for projects. Proposed by me, approved by the owner on 2026-09-22. Deployed to GitHub Pages via GitHub Actions at `mereyani.github.io`.

## Users

Four audiences, all confirmed by the owner:
- Recruiters and engineers at AI/ML companies.
- Recruiters and engineers at software and database companies, including healthcare information systems.
- Academics and researchers (professors, possible PhD supervisors, research groups).
- Freelance clients looking for someone to build a project.

Typical situation: they arrive from a CV, LinkedIn, GitHub or an email and spend a minute or two deciding whether this person is credible and worth contacting.

## Product Purpose

The personal professional site of Mohamed Mereyani. It presents who he is, what he has built and how to contact him, in English (default), Arabic (RTL) and Turkish. Success means the visitor understands his profile quickly and contacts him, opens a project or downloads the CV.

## Positioning

Headline title chosen by the owner: **Computer Engineer**. What sets the profile apart is real production work on a hospital information system (HBYS: Delphi, Oracle) combined with applied AI projects, several of them on medical imaging and clinical data, plus recent LLM-agent tools.

## Operating Context

- Visitors come from links in a CV, LinkedIn, GitHub or job-application emails, often on a phone.
- The site is maintained by Claude Code on the owner's behalf. New projects, jobs and certifications arrive as chat messages and must be added without redesigning pages.

## Capabilities and Constraints

- Three languages: `en` at `/`, `ar` at `/ar/` (right-to-left), `tr` at `/tr/`. Every piece of content must exist in all three.
- Static only, free hosting, no backend.
- No availability or "open to work" signal (owner's decision).
- No personal photo (owner's decision).
- Only the email is public. Phone number and referees' contact details stay off the site.

## Brand Commitments

- The owner chose the category-standard developer portfolio on 2026-09-22, over bolder concepts. The craft bar is a blend of brittanychiang.com (sticky identity column with a scrolling experience/projects column), leerob.com (typographic restraint, text first) and vercel.com/Geist (precise hairline grid, exact light/dark). The design stays conventional and focuses on execution; no novelty concepts.

## Evidence on Hand

All facts come from the owner's CV (`~/Downloads/Mohamed Mereyani_CV_EN (1).pdf`) and public GitHub (`github.com/Mereyani`):
- B.Sc. Computer Engineering, Siirt University, 2021–2025, GPA 3.56/4.00, first-rank student in the Faculty of Engineering.
- M.Sc. Computer Engineering (thesis program, first year), Siirt University Institute of Science and Technology, 2026–present, GPA 86.75/100.
- Software and Database Specialist, Sinerji Bilişim (Bizmed), 07/2024 – 04/2026.
- Projects: Hand Signal Classification, Bone Fracture Classification (graduation project), Cataract Classification, Heart Disease Detection, JobPilot, install-from-video.
- Languages: Arabic (native), Turkish (fluent), English (intermediate).

- Kaggle (`kaggle.com/mereyani`): public notebooks for Bone Fracture (VGG16, 98.2% test accuracy on 506 X-rays), Cataract (VGG16 + 2 conv, 86.6% on 82 images, immature vs mature) and Heart Disease (Naive Bayes 84.0%, KNN 79.8% on 238 records). Figures on the site come from these notebooks; dataset licences: fracture data PDDL, cataract data CC BY-SA 4.0 (credited on the page).

Missing, and not to be fabricated: code link and photos for Hand Signal Classification, thesis topic, screenshots of JobPilot and install-from-video.

## Product Principles

1. Never invent. Every claim must be traceable to the CV, GitHub or the owner.
2. Substance over decoration. Real projects and real experience lead the page.
3. Equal quality in all three languages, including correct RTL for Arabic.
4. Easy to extend: adding a project is one content file per language, not a page redesign.

## Accessibility & Inclusion

WCAG 2.2 AA. Keyboard navigable, respects reduced motion, correct `lang`/`dir` for each language.
