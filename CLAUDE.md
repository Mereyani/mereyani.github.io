# Maintainer notes

This is Mohamed Mereyani's personal portfolio. Claude maintains it on his behalf; see README.md for the structure.

- Never invent facts (jobs, results, metrics, dates, technologies). Sources: his CV, his GitHub, or what he says. Mark unknowns as `TODO(owner)` in content files and tell him.
- Every content change goes into all three languages (`en`, `ar`, `tr`). Arabic is RTL: use logical CSS properties, never `left`/`right`.
- Public contact is email only. No phone number, no referees' details.
- Design: category-standard developer portfolio, chosen by the owner. Keep the existing look; `PRODUCT.md` and `.impeccable/` hold the design context.
- Before finishing a change: `npm run build` (includes `astro check`), and check desktop and mobile in at least EN and AR.
- Reply to the owner in Arabic.
