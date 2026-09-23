---
name: Mohamed Mereyani
description: Trilingual (EN / AR-RTL / TR) personal site of a computer engineer; the record scrolls past a fixed identity.
colors:
  teal: "#0f766e"
  teal-wash: "rgb(15 118 110 / 0.08)"
  paper: "#fafafa"
  surface: "#ffffff"
  ink: "#0a0a0a"
  graphite: "#4b4b4b"
  pewter: "#6b6b6b"
  hairline: "#e4e4e4"
  teal-dark: "#2dd4bf"
  teal-wash-dark: "rgb(45 212 191 / 0.1)"
  paper-dark: "#0a0a0a"
  surface-dark: "#121212"
  ink-dark: "#ededed"
  graphite-dark: "#a8a8a8"
  pewter-dark: "#8c8c8c"
  hairline-dark: "#262626"
typography:
  display:
    fontFamily: "'Geist Variable', 'IBM Plex Sans Arabic', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.6rem + 2.6vw, 3rem)"
    fontWeight: 650
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "'Geist Variable', 'IBM Plex Sans Arabic', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.5rem + 2.5vw, 2.75rem)"
    fontWeight: 650
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  title-lg:
    fontFamily: "'Geist Variable', 'IBM Plex Sans Arabic', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    letterSpacing: "-0.01em"
  title:
    fontFamily: "'Geist Variable', 'IBM Plex Sans Arabic', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 550
    lineHeight: 1.45
  body:
    fontFamily: "'Geist Variable', 'IBM Plex Sans Arabic', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  small:
    fontFamily: "'Geist Variable', 'IBM Plex Sans Arabic', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
  label:
    fontFamily: "'Geist Variable', 'IBM Plex Sans Arabic', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.12em"
  mono-meta:
    fontFamily: "'Geist Mono Variable', 'IBM Plex Sans Arabic', ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: "0.8125rem"
    lineHeight: 1.5
    fontFeature: "tnum"
  mono-tag:
    fontFamily: "'Geist Mono Variable', 'IBM Plex Sans Arabic', ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  code: "0.25rem"
  sm: "0.375rem"
  md: "0.5rem"
  row: "0.625rem"
  lg: "0.75rem"
  pill: "99rem"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "3rem"
  xl: "6rem"
  2xl: "8rem"
components:
  tag-pill:
    textColor: "{colors.graphite}"
    typography: "{typography.mono-tag}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 0.625rem"
  row-linked:
    rounded: "{rounded.row}"
    padding: "1.25rem"
  row-linked-hover:
    backgroundColor: "{colors.surface}"
  nav-item:
    textColor: "{colors.pewter}"
    typography: "{typography.label}"
    padding: "0.625rem 0"
  nav-item-active:
    textColor: "{colors.ink}"
  text-link:
    textColor: "{colors.ink}"
    typography: "{typography.small}"
  back-link:
    textColor: "{colors.pewter}"
    typography: "{typography.small}"
    padding: "0.25rem 0"
  code-inline:
    backgroundColor: "{colors.teal-wash}"
    textColor: "{colors.ink}"
    rounded: "{rounded.code}"
    padding: "0.1em 0.35em"
---

# Design System: Mohamed Mereyani

## Overview

**Creative North Star: "The Fixed Identity, The Scrolling Record"**

This is a standard developer portfolio, done carefully. The system is a quiet neutral ground with near-black ink, 1px hairlines and one teal accent. On desktop the identity stays fixed in a sticky left column while the evidence scrolls past on the right. Text comes first. The only images are real notebook figures, and they appear as small plates inside the record. They never serve as hero art.

Density is calm and editorial: 1rem body at a 1.7 line-height, section gaps of 6rem to 8rem, and entries set as rows separated by space, with no boxes around them. Light and dark are exact sibling themes that follow the system setting. Neither is derived from the other at runtime. The system works in three languages: Arabic uses its own font, a looser line-height (1.9) and no letter-spacing. Every directional value is a logical property, so RTL mirrors without overrides.

The look is deliberately conventional (brittanychiang.com's two-column record, leerob.com's restraint, Geist's hairline precision). Quality comes from execution, not from novelty.

**Key Characteristics:**
- Sticky identity column (5fr) beside a scrolling record (6fr) at 64rem and up. The columns stack below that.
- Rows, not cards: a gutter column holds dates or project images, and the content column holds everything else.
- One teal accent, used only for interaction.
- Flat surfaces. Depth comes from hairlines and a single surface step on hover, never from shadows.
- Geist Sans for text and Geist Mono for machine-shaped data (dates, years, tech tags, code). IBM Plex Sans Arabic is in both stacks.

## Colors

A monochrome ground of paper, ink and two greys, plus one teal. Light and dark are separate, exact palettes.

### Primary
- **Record Teal** (`teal` light / `teal-dark` dark): links inside prose and on the 404 page; the underline color on hover for external and contact links; the active section's nav line; the focus ring (2px, 3px offset); the outline on a project image when its row is hovered; text selection.
- **Teal Wash** (`teal-wash` / `teal-wash-dark`): only the background tint of inline code.

### Neutral
- **Paper** (`paper` / `paper-dark`): the page ground. It is also the background of the sticky mobile section heading, so rows slide under it cleanly.
- **Surface** (`surface` / `surface-dark`): one step lighter than paper (light) or lifted (dark). Used only for the hovered project row.
- **Ink** (`ink` / `ink-dark`): headings, the name, role line, `dt` terms, strong text, key links.
- **Graphite** (`graphite` / `graphite-dark`): running body text. Body is deliberately set one step below ink.
- **Pewter** (`pewter` / `pewter-dark`): meta text such as dates, organisations, nav items at rest, social icons, the footer and list markers.
- **Hairline** (`hairline` / `hairline-dark`): every 1px line. This includes tag pill rings, image outlines, the borders around the facts block, the footer rule and the resting underline on links.

### Named Rules
**The One Teal Rule.** Teal marks interaction and nothing else: links, the active nav line, focus and hover states. Never use it for a heading, an icon at rest, a fill or decoration. The one tinted exception is Teal Wash, which is reserved for inline code.

**The Two Exact Themes Rule.** Every color token has a hand-set dark value. A new token gets both values or it doesn't ship.

## Typography

**Display Font:** Geist Variable (with IBM Plex Sans Arabic, then system sans)
**Body Font:** Geist Variable (same stack)
**Label/Mono Font:** Geist Mono Variable (with IBM Plex Sans Arabic, then ui-monospace)

**Character:** A neutral grotesk set tight at display sizes and relaxed in body copy, paired with a mono that marks data rather than decorating it.

### Hierarchy
- **Display** (650, clamp 2.25–3rem, 1.08, -0.035em): the owner's name in the identity column. Used once per page.
- **Headline** (650, clamp 2–2.75rem, 1.1, -0.035em): the project page title.
- **Title Large** (500, 1.125rem, -0.01em): the role line, the project lede and prose subheads (at 600).
- **Title** (550, 1rem, 1.45): row titles such as a job, project or degree, and the Languages sub-heading.
- **Body** (400, 1rem, 1.7; 1.9 in Arabic): all running text. Measure is capped at 40rem for About and prose, and 25rem for the tagline.
- **Small** (0.875rem): organisation lines, facts terms, back link, external links.
- **Label** (600–650, 0.75rem, 0.12em, uppercase): only the in-page nav items and the mobile section headings, which are the real `h2`s. In Arabic it becomes 0.875rem with no tracking.
- **Mono Meta** (0.8125rem, 1.5, tabular numbers): dates in the row gutter, the project year.
- **Mono Tag** (500, 0.75rem, 1.4): tech tag pills.

### Named Rules
**The Mono Is Data Rule.** Geist Mono is used only for dates, years, tech tags and code. Never set a heading, a label or prose in it.

**The Arabic Has Its Own Metrics Rule.** Under `:lang(ar)`, remove letter-spacing, raise line-height to 1.9 and enlarge uppercase-style labels to 0.875rem. Never apply uppercase tracking to Arabic.

## Layout

The container is capped at 78rem with an inline gutter of 1.5rem, or 3rem from 64rem up. At 64rem and up the shell becomes a 5fr / 6fr grid with a 4rem gap. The identity column is `position: sticky`, full viewport height, with 6rem block padding. The name, role and tagline sit at the top, the in-page nav follows 4rem below, and the socials and language switch are pushed to the bottom. Below 64rem the columns stack, the nav is hidden, and each section shows its `h2` as a sticky label on the paper ground.

Rows use a 9rem gutter column and a fluid content column from 40rem up (gap 1.5rem). Below that they stack. The gutter holds either a mono date or a project image, never both. A project's year goes in the content column as a mono meta line. Skills and languages use a 12rem term column.

Rhythm: rows are 3rem apart (1rem for linked project rows, which have their own padding), sections 6rem apart (8rem on desktop), and the project page caps at 46rem.

## Elevation & Depth

Flat. No shadows are in use. Depth comes from the 1px hairline, one tonal step (paper to surface) on a hovered project row, and opacity: sibling rows dim to 0.5 while one is hovered. Image edges use a 1px inset outline in hairline instead of a border or shadow.

### Named Rules
**The Hairline Not Shadow Rule.** Separate things with space first and a 1px hairline second. Raise a surface only as a hover response, and only by one tonal step.

## Shapes

Corners are small and scale with the object: inline code 0.25rem, project images and the skip link 0.375rem, prose figures 0.5rem, the hovered row 0.625rem, the project cover 0.75rem. The one full-round shape is the tag pill (99rem). Borders are always 1px hairlines. On images and pills they are drawn as an inset outline or inset box-shadow ring, so they add nothing to layout size.

## Components

### Chips (tech tags)
Neutral and quiet. They carry information and are not buttons.
- **Style:** a full pill with a 1px inset hairline ring, no fill, graphite text in Mono Tag, padding 0.3rem 0.625rem, and 0.5rem gaps with wrapping.
- **State:** static. Tags have no hover state and never take the accent.

### Rows (experience, education, projects)
The signature container. These are rows, not cards.
- **Corner Style:** none at rest. Linked project rows get a 0.625rem radius so their hover surface has soft edges.
- **Background:** transparent at rest. A hovered linked row takes the surface color.
- **Shadow Strategy:** none (see Elevation).
- **Border:** none.
- **Internal Padding:** linked rows use 1.25rem and a matching negative inline margin, so their text stays aligned with plain rows.
- **Behavior:** the whole project row is one link, because the title's `::after` stretches across it. External links sit above it at `z-index: 1`. On hover, siblings dim to 0.5 (only for hover-capable pointers at 64rem and up), the title turns teal, the arrow nudges 0.125rem toward the reading direction's top-end corner, and the image outline turns teal. Keyboard focus outlines the whole row in teal.

### Navigation
- **In-page nav (desktop only):** Label type in pewter, preceded by a 4rem hairline drawn at half scale. Hovering or reaching the active section turns the text ink and extends the line to full length (0.4s, expo-out ease). Only the active item's line turns teal. The active item comes from an IntersectionObserver setting `aria-current`.
- **Language switch:** three native-script names at 0.8125rem in pewter. The current one is ink at weight 600.
- **Socials:** 20px SVG icons in pewter that turn ink on hover. Every icon is a real inline SVG with an aria-label on its link.
- **Back link (project page):** Small at 500 in pewter, with an arrow that slides 0.25rem backward on hover. The arrow is mirrored in RTL.

### Links
- **External / fact links:** ink at 500 with a 1px hairline underline (0.22em offset). On hover the underline turns teal.
- **Contact email:** clamp 1.25–1.75rem at 550 with a 2px hairline underline that turns teal on hover.
- **Prose links:** teal.

### Figures
Project images and notebook plates carry a 1px inset hairline outline. Prose figures and chart-shaped covers are capped at 24rem so they read as evidence, not banners. In dark mode every image is dimmed with `brightness(0.85)` so white plates don't glare. A caption is an `em` alone in a paragraph, rendered as 0.8125rem pewter text.

## Do's and Don'ts

### Do:
- **Do** use logical properties everywhere (`margin-inline`, `padding-inline-start`, `inset-inline-start`, `border-block`). Mirror directional icons and nudges under `[dir='rtl']`.
- **Do** give every new color token an exact dark value inside the `prefers-color-scheme: dark` block.
- **Do** put dates in the row gutter as Mono Meta. Project images go in the gutter only, and the year moves to the content column.
- **Do** cap figures at 24rem and outline them with a 1px inset hairline.
- **Do** keep transitions to color, opacity, background and small translates, using `cubic-bezier(0.16, 1, 0.3, 1)`. Reduced motion collapses them.

### Don't:
- **Don't** wrap entries in cards, borders or shadows. Rows are separated by space, and only a hovered linked row gets a surface.
- **Don't** use teal for anything except links, the active nav line, focus and hover states.
- **Don't** set headings, labels or prose in Geist Mono.
- **Don't** apply letter-spacing or uppercase tracking to Arabic text.
- **Don't** give tag pills a fill, an accent or a hover state.

## Arabic face and PDFs

Arabic is set in IBM Plex Sans Arabic (static weights 400–700). It was chosen for a functional reason: of the faces tested (Noto Sans Arabic, Noto Naskh Arabic, Geeza Pro, SF Arabic, IBM Plex Sans Arabic), it is the only one whose text survives Chrome's PDF export intact, so the Arabic CV stays readable by ATS parsers. Do not swap it without re-running `npm run cv` and checking the text layer with `osascript -l JavaScript scripts/pdf-text.js public/cv/Mohamed-Mereyani-CV-AR.pdf`.

## Domain colours and motion (2026-09-23)

Each project has a `domain` in `src/content/projects.yaml` that sets `--d` / `--d-bg` via `[data-domain]`:

| Domain | Light | Dark |
|---|---|---|
| medical (medical imaging) | #0f766e | #2dd4bf |
| clinical (clinical data) | #be123c | #fb7185 |
| agents (LLM agents) | #6d28d9 | #a78bfa |
| hardware (hardware & vision) | #92400e | #fbbf24 |

Used for the domain label (dot + text), tech tags, row title hover, thumbnail ring, key-result rules and the sidebar legend. Tag text on its tint is ≥4.6:1 in light mode. The page ground stays neutral; teal `--accent` still marks links, the active nav line and focus.

Motion, all disabled or reduced under `prefers-reduced-motion`:
- Cross-document view transitions: a project's thumbnail (`view-transition-name: cover-<slug>`) grows into its cover.
- X-ray scan: a band of the domain colour sweeps a thumbnail once per hover/focus.
- Project rows rise in once with a scroll-driven `view()` timeline (filter, not opacity, so hover dimming still works). Keep `animation-timeline` in its own rule: the minifier folds it into the shorthand otherwise.
- Hovering or focusing a legend chip dims the other domains' rows (pure CSS `:has`).

