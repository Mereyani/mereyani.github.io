# mereyani.github.io

Personal site of Mohamed Mereyani, in English (`/`), Arabic (`/ar/`, right-to-left) and Turkish (`/tr/`).
Static [Astro](https://astro.build) site, deployed to GitHub Pages on every push to `main`.

## Run locally

Requires Node 22+.

```bash
npm install
npm run dev       # http://localhost:4321, reloads on save
npm run build     # type-checks, then builds to dist/
npm run preview   # serves dist/
```

## Where things live

| What | File |
| --- | --- |
| Name, email, GitHub, LinkedIn | `src/data/site.ts` |
| Title, tagline, about, experience, education, skills, languages, UI labels | `src/data/en.ts`, `ar.ts`, `tr.ts` |
| Project facts (order, year, tags, links, cover) | `src/content/projects.yaml` |
| Project text per language | `src/content/projects/<slug>/<en\|ar\|tr>.md` |
| Colours, spacing, typography | `src/styles/global.css` (tokens at the top) |

All three languages must stay in sync. `npm run build` fails if a locale file is missing a field or a project is missing a translation.

## Add a project

1. Add an entry to `src/content/projects.yaml`. The key becomes the URL slug:
   ```yaml
   my-project:
     order: 3          # position in the list, lower first
     year: 2026        # optional
     tags: [Python, PyTorch]
     github: https://github.com/Mereyani/my-project   # optional
     live: https://…   # optional
     video: https://…  # optional
     cover: ./projects/my-project/cover.png            # optional, optimised automatically
   ```
2. Create `src/content/projects/my-project/en.md`, `ar.md` and `tr.md`:
   ```markdown
   ---
   title: My Project
   summary: One sentence shown in the list and in search results.
   coverAlt: Describe the cover image   # only with a cover
   role: [What I did]                   # optional
   highlights: [A real, verifiable result]   # optional
   ---

   Full description in Markdown.
   ```
3. `npm run build`, then commit and push.

The home page list, the project page, the sitemap and the language links update automatically.

## Update profile or experience

Edit the same fields in `src/data/en.ts`, `ar.ts` and `tr.ts`. A new job is a new object at the top of the `experience` array in each file.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.

One-time setup: in the repository on GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**. No secrets or environment variables are needed.

## Roll back a bad deploy

```bash
git revert <bad-commit-sha>   # creates a commit that undoes it
git push                      # redeploys the previous state
```

Or, on GitHub: **Actions → Deploy to GitHub Pages**, open the last good run and click **Re-run all jobs**.
