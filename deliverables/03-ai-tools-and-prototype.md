# Prototype + AI tools used

**Live URL:** https://tactful-ai-codequest.pages.dev
**Repo:** https://github.com/mohamednegm0/tactful-ai-codequest
**Stack:** Bun + TypeScript + HTMX, deployed to Cloudflare Pages via GitHub Actions.

## Hero flow to demo (90 seconds)

1. Land on `/`, sign in as Dr. Mona Khalil, Operations Director, El Salam Specialist Hospital
2. `/basira`, Live patient flow. Lab/Imaging is red.
3. Click the bottleneck callout → `/stage-lab`
4. Top of the queue: Ahmed M., 47 min waiting for CT, ordered by Dr. Hassan
5. Scroll to timeline: confirms the stall is in Lab, not upstream
6. `/history`, 7-day pattern shows Tue/Thu Lab spikes, Dr. Hassan averages 23 min above peers
7. `/settings`, integrations tile shows the hospital's HIS, Vezeeta, and Clinisys (Lab) connected, WhatsApp deferred to Q2

## AI tools used, and where each one helped

This prototype was built end-to-end with AI assistance, but the differentiator was *how* the assistant was instrumented, not which model was chosen. I treated the AI like a junior engineer: gave it a constitution, then let it move fast inside the constraints.

| Tool | What it did |
|---|---|
| **Claude Code (Opus 4.7)** | Orchestrated the full session, research, framing, code, copy, deploy. Single agent, no hand-offs to other tools. |
| **Custom CLAUDE.md** | Project-level constitution: stack rules, output style (no AI slop, no em dashes, surgical edits), separation of concerns, simplicity gates. Made the assistant a disciplined collaborator instead of a verbose intern. |
| **Custom Claude hook** | A pre-edit hook (`.claude/hooks/check-css-rules.mjs`) that scans every file write before it lands. It blocks any CSS using physical properties (`margin-left`, `padding-right`, `text-align: left`) and forces logical equivalents (`margin-inline-start`, `text-align: start`). It also blocks inline `style=` attributes in markup. The result: the prototype is RTL-ready by construction. Switching to Arabic is `dir="rtl"` plus a string file, not a stylesheet rewrite. |
| **Persistent memory rules** | Two feedback rules saved to Claude's memory (`feedback_rtl_logical.md`, `feedback_separation_concerns.md`) so the same constraints survive across sessions and apply to future projects without restating. |
| **Custom Egyptian-Arabic skill** | A user-level Skill (`~/.claude/skills/egyptian-arabic/SKILL.md`), a guide for translating UI/copy into real Egyptian dialect, not Modern Standard Arabic. Used to write the trilingual strings file shipping in the prototype today (English, MSA, Egyptian). The brand name *Basira* (بصيرة, meaning "insight") came from this thinking, not from English-first translation. |
| **Stitch (Google's AI design tool)** | Generated the design system: colors (deep teal `#0b636d`, secondary cyan, gold for warnings), typography (Plus Jakarta Sans + Inter), spacing scale, component tokens. Fetched via Stitch's MCP server and exported to `DESIGN.md` + `design-tokens.json`. |
| **Bun + TypeScript + HTMX** | Stack chosen deliberately: no build step, no framework boilerplate, static HTML + 30 lines of vanilla JS per screen. The grader can View Source and immediately understand the data shape. Reads as honest hand-written code, not a generated v0 mockup. |
| **GitHub Actions + Cloudflare Pages + Wrangler CLI** | Push-to-deploy pipeline. Every commit goes live in ~30 seconds. API token stored as a GitHub Secret. Real production infrastructure, set up in this session. |

## Why this approach over v0 / Lovable / Bolt

A typical PO take-home produces a v0 mockup: clickable, beautiful, throwaway. I made a different bet, a small AI-native dev workflow where the assistant operates inside enforced guardrails (RTL discipline, separation of concerns, no inline styles, surgical edits) and ships to a real URL.

The argument for the role: this is the workflow I'd bring into a real product team. Instrument the assistant with project constraints, then move fast inside them. The hook is to AI-coding what a linter is to engineering, automated discipline, not after-the-fact review.

## What ships with the prototype today

- Five screens, all reachable from the nav, with mock data hardcoded in `data.js`
- Trilingual UI, English, Modern Standard Arabic, Egyptian Arabic, with persistent language preference
- Full dark mode with persistent theme preference
- RTL layout that flips correctly for Arabic without a single CSS rewrite (the hook enforces it)
- A `/project` landing page that indexes the four written deliverables for non-technical reviewers
- A `/video` page with the embedded walkthrough

## What I would add with more time

- A short "Day in the life" demo recording inline on the dashboard
- Real-time toggle to demo a "what if Dr. Hassan moves to fewer CT orders?" simulation
- Streamline icons (API key wired in `.env`, not yet rendered)
- Live tablet-input demo for Tier 2 onboarding
