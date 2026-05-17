# Tactful PO take-home review · Mohamed Negm

## Verdict
- **Score:** 7.5 / 10
- **Hire decision:** HIRE
- One-sentence summary: Above-bar product thinking and unusual writing discipline, dragged down by a clear time-budget breach, two sloppy regional facts, and a prototype that signals scope insecurity in the places where the memo could have been sharper.

---

## Per-criterion breakdown

Brief does not assign weights, so I scored against the five named deliverables with implicit weighting matching the brief's emphasis ("picking the wedge is part of the exercise", "tangible enough to show to a hospital director tomorrow", "tell us which AI tools").

### 1. Discovery & framing memo — 25 / 30
The framing is the strongest piece of the submission. The JTBD line — *"Tell me, right now, where my hospital is bleeding patient-time, so I can intervene before the day is lost"* — is the single sharpest sentence in the pack: action-oriented, time-bounded, and written from the buyer's chair, not the builder's. The riskiest-assumption test ("three 30-minute calls… *'If Lab was red on Tuesday morning, what's the first thing you'd do — and would you actually do it?'*") is genuinely cheap and falsifiable. The wedge contrast against the obvious queue-board move is real reasoning, not hand-waving, and the *"thermometer in a room with no AC"* metaphor is reused as the kill criterion in the measurement plan — the candidate is thinking in one connected argument, not five disconnected docs. **Single weakest thing:** the citation discipline. The "Al Habib Medical Journal 2024: waiting-to-see-doctor was 85.7% of total OPD time" stat is borrowed from a Saudi journal but presented as if it speaks to Egyptian hospital flow; and "PDPL" is used as a blocking constraint without naming that Egypt's actual law is Law 151 of 2020 (PDPL is Saudi). A grader from MENA will catch this in 30 seconds.

### 2. Solution outline — 12 / 15
Tight, on-page, and the MLP line is the right kind of opinionated: *"Not 30 charts — one funnel and one callout."* The 6-stage funnel → drill-down → timeline → history → settings flow maps cleanly to the five screens and the demo flow in the video script, so a hospital director could be walked through this tomorrow without ambiguity. The three-tier ingestion model (full HIS / tablet micro-app / nightly CSV) is the right answer to the Egypt-context "mixed paper and digital" call-out in the brief. **Single weakest thing:** the pricing inconsistency. The memo says *"$300-800/month per facility"*, the outline says *"$400/month per facility (self-serve), $1,500/month connected tier"*. Both are hypotheses, but they're not the same hypothesis — and the commercial paragraph is so dense (compliance partner, group expansion, three tiers, Saudi PDPL, Unifonic, 314-hospital EHR penetration all in one paragraph) that the reader has to work to find the actual price.

### 3. Clickable prototype + AI tools doc — 21 / 25
The prototype is real. `/basira` renders the live funnel with Lab/Imaging at 38 min against a 25-min threshold; `/stage-lab` shows Ahmed M., 47 minutes waiting for CT, ordered by Dr. Hassan; `/history` has the per-doctor table with Dr. Hassan's 23-min-above-average callout. The hero flow described in the AI-tools doc is the flow that actually exists on the live URL — a level of consistency I rarely see in take-homes. Cloudflare Pages with GitHub Actions push-to-deploy is overkill for a take-home but it works, and the trilingual EN/MSA/Egyptian Arabic with `dir="rtl"` and a custom CSS-rule pre-commit hook (`.claude/hooks/check-css-rules.mjs` referenced in the AI-tools doc) is the kind of production-thinking the brief signals it cares about ("Flag where Arabic and right-to-left would matter in production."). **Single weakest thing:** scope insecurity. The brief says *English-only is fine*, and *"a sharp 3-hour submission is better than a sprawling 6-hour one."* Trilingual UI, dark mode, custom logo, custom design tokens, persistent theme/lang preferences, CI/CD, three video scripts (EN + MSA + EG) — these are all the candidate insisting *"look how much I built"* when the brief explicitly asked for restraint. The AI-tools doc compounds this by reading like a pitch: *"the differentiator was *how* the assistant was instrumented, not which model was chosen"* and *"this is the workflow I'd bring into a real product team"* are sentences a senior PM writes when they're unsure the work will speak for itself.

### 4. Measurement plan — 13 / 15
The right structure (three input, two output), explicit desirability/viability tagging, instrumentation source named per metric, and the kill criterion is memorable: *"A thermometer is not a $400/month product."* That sentence is a reuse of the framing metaphor from the memo — coherent thinking across docs is a real PO signal. The "Bottleneck-to-action latency" metric is genuinely clever — it tests behavior, not engagement. **Single weakest thing:** the double-down threshold (*"Daily Active Director ≥ 70%"*) is plucked from the air with no justification — for a 1-hospital pilot, what does 70% even mean (a single director, so it's binary almost-every-day vs not)? The kill threshold (*"DAD ≤ 30% by end of week 2"*) has the same problem with n=1. Pick a number that makes sense at the pilot's actual sample size.

### 5. Walkthrough video — 8 / 15
YouTube embed is live at `/video` (iframe `_pi1rij3Urg`) and the script in the repo is concrete: cued to specific screens, with fallback language ("If you blank during recording: look at the current screen and describe what's on it"). The structure (problem → wedge → demo → measurement → tools/cuts) hits everything the brief asks for. I cannot judge the actual video performance — delivery, pacing, whether the demo runs cleanly — from the script alone, and the brief explicitly says the video is "how we hear you reason." **Single weakest thing:** I cannot evaluate it. The brief said "unscripted is fine, mistakes are fine, we want to hear how you reason, not a polished pitch" — and the candidate wrote a fully cued script with verbatim quotes for every section. That is the opposite of unscripted. Whether the on-camera delivery sounds rehearsed or natural will swing this score 4 points in either direction; I'm scoring the middle.

---

## What worked

1. **JTBD line.** *"Tell me, right now, where my hospital is bleeding patient-time, so I can intervene before the day is lost."* That is the line. Action verb, time bound, written from the user's chair. Most PO take-homes give you something like "help hospitals improve patient flow" — this one names the moment.

2. **Cross-doc coherence.** The "thermometer in a room with no AC" metaphor appears in the memo's riskiest-assumption section, then again in the measurement plan as the kill criterion: *"A thermometer is not a $400/month product."* One argument, told consistently across five artifacts. That's a senior writing tic.

3. **The three-tier ingestion model is the right answer to the Egypt brief.** The brief flagged "mixed paper and digital records" as context — most candidates ignore that or pick one. Tier 1 webhook / Tier 2 tablet-at-nurse-station / Tier 3 nightly CSV plus a WhatsApp text-bot is the exact shape of a wedge that can actually onboard an Egyptian mid-tier hospital next week, and it gives the AE a real talk-track for three different prospect types.

4. **"What I decided NOT to build" with reasoning.** Five rejected wedges, each with a one-line reason (queue board = symptoms not causes; triage bot = clinical liability; WhatsApp check-in = PDPL audit trail). Most candidates either skip this section or list one rejected idea. This is where I'd want a PO to live.

5. **The prototype is the prototype the memo describes.** Ahmed M., 47 minutes for CT, Dr. Hassan, the per-doctor table on `/history`, the "Coming Q2, requires compliance partner" tag on WhatsApp in settings — every claim in the memo is visible on a click-through. The Lab tile is genuinely red. The drill-down opens. The fact that I could verify the demo flow from a markdown doc says the candidate didn't write fiction.

---

## What I'd push back on in the live review

1. **PDPL is Saudi, not Egyptian.** Walk me through which actual Egyptian law you'd cite to a hospital director who asks "what stops you from connecting WhatsApp to patient data?" If you can't name Law 151 of 2020 unprompted, your compliance frame is borrowed, not researched.

2. **You cite Al Habib Medical Journal 2024 for the 85.7% wait-time figure.** Al Habib is a Saudi hospital group. Show me you read that paper. What was the sample size, what was the patient pathway, and why does an outpatient OPD waiting-time stat from a Riyadh tertiary hospital generalise to a 100-bed private hospital in New Cairo?

3. **"$300-800/month per facility" in the memo, "$400 self-serve and $1,500 connected" in the outline.** Which is it, and where does each number come from? Did you talk to anyone, or did you anchor on a SaaS gut feel? At $400/month, your CAC has to be under ~$1,200 for the unit economics to work in year one — does that match a sales cycle that needs a 30-minute demo plus a 2-week pilot?

4. **A live patient-flow view requires sub-5-minute event freshness from systems you don't own.** You flagged this as a feasibility item for engineers. Fine. But as PO you have to know the shape of the answer before you sell it. What's the failure mode when Tier 2's tablet check-in is missed at the nurse station — is the funnel quietly wrong, and how does the director know to distrust it? A dashboard that lies silently is worse than no dashboard.

5. **You're betting the wedge on one persona — the Operations Director.** What's the failure case where she likes it but cannot procurement-budget $400/month without IT and finance? Who else has to sign? And if the answer is "we sell to hospital groups (Cleopatra-tier)," your sales cycle just went from 4 weeks to 4 months and the runway math breaks.

6. **The brief said 4 hours. Your first commit is May 9 22:12, your last is May 14 09:00 — 32 commits over 4.5 days, including dark mode, a custom logo, three video scripts (EN/MSA/EG), and a CI/CD pipeline.** Tell me honestly how many hours this took. If the answer is more than 6, talk to me about why you didn't trust the brief's constraint, because this role is going to ask you to ship inside tighter ones.

7. **Show me three lines from the discovery memo you wrote without AI assistance, and three lines you'd be uncomfortable claiming as yours.** I want to see whether you can separate the two — that's the AI-native skill, not "I used Claude Code."

8. **Your kill criterion at 4 weeks is *"DAD ≤ 30% by end of week 2 *and* the director cannot name one decision triggered by Basira."* With n=1 director, DAD is essentially binary. Re-define a kill threshold that makes sense at pilot scale — and tell me which qualitative signal beats which quantitative one when they conflict.

---

## Red flags

- **Time budget breach.** Brief: "4 hours total. A sharp 3-hour submission is better than a sprawling 6-hour one." Commit history: 4.5 calendar days, 32 commits, polish sweeps for em-dashes and dark-mode contrast. Either the candidate didn't read the constraint or didn't respect it. For a PO role, that's a tell.

- **PDPL / Egyptian context error.** The memo uses "PDPL" to justify cutting WhatsApp, then the outline says *"required by Saudi PDPL and similar regional laws."* Medicena is Egyptian. The right citation is Egypt's Personal Data Protection Law (Law 151 of 2020) plus the EDPC. This isn't a typo — it's a researched-it-but-from-the-wrong-country error.

- **Pricing inconsistency between memo and outline.** $300-800 in one doc, $400 / $1,500 in the other. Not catastrophic, but the kind of thing that tells me the writing wasn't proofread end-to-end against itself.

- **AI-tools doc reads as pitching.** *"The differentiator was *how* the assistant was instrumented"* and *"this is the workflow I'd bring into a real product team"* are not the voice of someone confident the work speaks for itself. Compare to the memo, which is much more direct. Two different writers in the same submission, or one writer trying to sell.

- **Scripted "unscripted" video.** Brief asks for unscripted reasoning. Repo contains a fully cued, verbatim-quoted, 5-minute script in three languages. The contradiction is the candidate not trusting themselves to think on camera.

- **Settings page integrations rely on JS to render.** Not a bug for a human user (page renders fine in a browser), but a reviewer who right-clicks → view-source sees an empty `<ul id="integration-list">`. Defensible choice given the stack, but worth knowing the failure mode of a no-JS view-source review.

I did not find: fabricated team members, plagiarised text I could identify, broken links, broken core flows, AI-slop adjectives in the deliverables (the candidate's own `CLAUDE.md` enforces against them and the discipline mostly held).

---

## What this submission is missing

**A single piece of direct primary discovery.** One sentence saying "I cold-called/messaged X private hospital directors or COOs in Cairo and here's what two of them said." The memo's riskiest-assumption test is *next week's* discovery, which is honest, but the brief gave 4 hours and the candidate spent them building a CI/CD pipeline instead of WhatsApping three operations directors at Andalusia, Cleopatra, or Alfa Cure to test the wedge. One real quote from one real director — even a 20-minute conversation — would have moved this from "well-reasoned hypothesis" to "evidence-backed wedge" and pushed the score to 9+.

---

## If I had 60 seconds with the candidate

You think in metaphors and you write in argument, which is rare and valuable — keep doing it. But you spent four days proving you can build a workflow when the brief was testing whether you can pick the right problem inside a constraint. The CI/CD pipeline and the trilingual UI are how a junior PM signals competence; a senior PM signals it by closing the laptop after three hours and sending two WhatsApp messages to actual hospital directors. The wedge is the work. Everything else is varnish.

---

## If I were the candidate, here's what I'd change before submitting

- **deliverables/01-discovery-memo.md · Severity: critical**
  - What to change: The two PDPL references and the "Al Habib Medical Journal" citation. Currently: *"compliance-hostile (PDPL, no audit trail)"* and *"(Al Habib Medical Journal 2024: waiting-to-see-doctor was 85.7% of total OPD time)"*.
  - Why: Medicena targets Egyptian hospitals; PDPL is the Saudi Personal Data Protection Law. A MENA-aware reviewer reads this as borrowed research. Same problem with sourcing an Egyptian wait-time stat from a Saudi journal.
  - Suggested replacement or fix: Replace "PDPL" with "Egypt's Data Protection Law (Law 151 of 2020) and the EDPC's WhatsApp restrictions on patient identifiers." Replace the Al Habib stat with either an explicitly-labelled regional reference (*"Saudi outpatient ops data (Al Habib 2024) puts the choke at 85.7% of OPD time, and I'd expect Egypt to be similar or worse given the lower EHR penetration"*) or drop the percentage and lean on the structural argument.

- **deliverables/02-solution-outline.md · Severity: critical**
  - What to change: The pricing inconsistency vs the memo. Memo says *"$300-800/month per facility"*. Outline says *"$400/month per facility (self-serve, CSV or tablet check-in); $1,500/month connected tier"*.
  - Why: Two different pricing hypotheses across two docs read as not having proofread the submission as one artifact.
  - Suggested replacement or fix: Update the memo line to: *"Mid-size hospitals (50–200 beds) pay $400/month self-serve, $1,500/month for the connected tier — pricing detailed in the outline."* Pick one set of numbers and use it everywhere.

- **deliverables/02-solution-outline.md · Severity: high**
  - What to change: The commercial-fit paragraph. Currently one dense paragraph mixing buyer, evaluation, pricing, onboarding tiers, expansion, Phase 2, Saudi PDPL, Unifonic, and the 314-hospital EHR stat.
  - Why: A grader has to re-read it twice to extract the actual commercial argument. Density isn't depth.
  - Suggested replacement or fix: Break into four labelled lines: *Buyer:* / *Evaluation:* / *Pricing:* / *Expansion:* / *Phase 2 lever:*. Keep total length the same; the lift is structural.

- **deliverables/03-ai-tools-and-prototype.md · Severity: high**
  - What to change: The two pitch lines — *"the differentiator was *how* the assistant was instrumented, not which model was chosen"* and *"this is the workflow I'd bring into a real product team."*
  - Why: They read as selling, not describing. The brief asked which tools and where each helped; not for a manifesto.
  - Suggested replacement or fix: Cut the "Why this approach over v0/Lovable/Bolt" section entirely (six paragraphs), or compress it to one line: *"I chose hand-written HTMX over v0/Lovable because the reviewer can View Source and see the data shape — no generated bundle to read past."* Let the table do the rest of the work.

- **deliverables/04-measurement-plan.md · Severity: high**
  - What to change: The double-down threshold *"Daily Active Director ≥ 70%"* and the kill threshold *"DAD ≤ 30% by end of week 2"*.
  - Why: At one hospital with one director, DAD is essentially a binary count. 70% and 30% sound rigorous but are arithmetic noise at n=1.
  - Suggested replacement or fix: Re-frame for the pilot scale. Something like *"Double down: director opens Basira ≥ 4 of 5 workdays in week 4 AND volunteers one unprompted decision she made because of it. Kill: fewer than 2 days/week in week 2 with no decision attributable to Basira."*

- **public/video.html + deliverables/05-video-script.md · Severity: high**
  - What to change: Re-record the video without the verbatim script.
  - Why: Brief explicitly asks for unscripted reasoning. A fully cued script with quote-marked lines reads as performance, not thinking.
  - Suggested replacement or fix: Keep the cue list (section beats, screens to click, the 3 numbers to remember: 38, 47, 23). Delete every blockquoted sentence. Re-record in one take, mistakes included. The brief literally says "mistakes are fine."

- **deliverables/01-discovery-memo.md · Severity: medium**
  - What to change: Add one paragraph of primary discovery, even if it's small.
  - Why: The "single thing missing" identified above. The whole framing rests on hypothetical director behavior.
  - Suggested replacement or fix: Add one line under "Riskiest assumption + cheapest test": *"I sent the wedge brief to two private-hospital ops contacts in Cairo (one COO at a 120-bed group, one ops manager at a polyclinic). Both said [X]. Both flagged [Y] as the real blocker I'd missed. Sample of two, not signal — but enough to know the question is the right shape."* If you actually have not done this discovery, do it on Sunday and add the paragraph. Two WhatsApp messages.

- **public/project.html · Severity: medium**
  - What to change: The submission landing page's tagline *"The wedge, the prototype, and the writing, in one place."*
  - Why: Reads as marketing. The reviewer is already on the page; they don't need the elevator pitch.
  - Suggested replacement or fix: Replace with a single line of orientation: *"Five deliverables. Memo first. Prototype at `/`. Video at `/video`."*

- **Repo / commit history · Severity: medium**
  - What to change: Add a single line in the repo `README.md` (or in `03-ai-tools-and-prototype.md`) acknowledging actual time spent.
  - Why: The 4.5-day commit window is visible to any reviewer who clicks "Insights → Contributors." Pre-empting it shows self-awareness; ignoring it invites the question I asked above.
  - Suggested replacement or fix: One sentence: *"Actual time on this take-home was ~N hours across 4 days (built in evenings). The brief's 4-hour cap is the constraint I'd respect on a second pass — what I'd cut next time: trilingual UI, dark mode, CI/CD. Keep: the memo, the funnel, the per-doctor table, the kill criterion."*

- **deliverables/01-discovery-memo.md · Severity: low**
  - What to change: The phrase *"the only persona who is *both* hurting and able to act"* in the Primary User section.
  - Why: Strong line, but "the only persona" is overclaim. The COO of a hospital group, the Head of Patient Experience, the Medical Director — at least three other personas hurt and can act.
  - Suggested replacement or fix: *"the persona where hurting and able-to-act overlap most cleanly at the price point we can sell into."*
