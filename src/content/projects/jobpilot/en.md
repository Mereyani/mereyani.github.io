---
title: JobPilot
summary: A multi-agent system that finds matching jobs, sends a tailored application to a real contact email and handles the replies, all from a local dashboard.
cv: "Multi-agent job-search pipeline: resume parsing, LLM-generated search keywords, 0–100 job matching, tailored applications and reply handling."
---

JobPilot turns a resume into a job search pipeline. Five agents, each a separate module, are coordinated by one orchestrator:

1. **Profile agent** parses the resume PDF into a candidate profile: skills, experience and languages.
2. **Search agent** asks the LLM to turn that profile into 4–8 search keywords per country, in the language local postings are written in, then searches Bayt's public listings.
3. **Matching agent** scores every job from 0 to 100 against the profile. Seniority is a hard gate, so a senior posting scores low even when the skills match.
4. **Application agent** finds a contact email on the listing, writes a tailored cover letter and sends it with the resume attached, in throttled batches.
5. **Email agent** watches the inbox, classifies replies (interview, rejection, request for information) and drafts or sends a response.

### Design decisions

- **No logging in to job boards.** Automating LinkedIn or Indeed forms conflicts with their terms of service and puts the user's account at risk, so "apply" means finding an email and writing a good letter.
- **Rate limited by design.** Applications go out in fixed-size batches with a cooldown between them, so the tool never behaves like a spam bot.
- **Bring your own model.** Anthropic (Claude), Google (Gemini), or a local model through Ollama with no API key.
- **Data stays local.** The resume, API keys and email credentials live in a local SQLite database, never in committed files.

The dashboard is built with FastAPI and Jinja2. Playwright renders pages that sit behind a JavaScript bot challenge. MIT licensed.
