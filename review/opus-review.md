# Tactful PO take-home review · Mohamed Negm

*Reviewer: Claude Opus 4.7 (1M context) · combined senior recruiter + HR generalist + senior PM hiring manager*

## Verdict
- **Score: 8.0 / 10**
- **Hire decision: HIRE** (one nudge from STRONG HIRE)
- One-sentence summary: The thinking is sharper than 90% of what crosses my desk, the prototype is real production infra rather than a v0 mockup, but a handful of self-inflicted wounds (memo over the word cap, AI-slop checked into DESIGN.md, one weak commercial number) keep this from being a hand-on-the-table "fight for it" hire.

---

## Per-criterion breakdown

Weights inferred (brief gives none), in order of what the brief most cares about: Discovery 30, Solution outline 20, Prototype 20, Measurement 15, Video 10, Egypt context (cross-cutting) 5.

### Discovery & framing memo - 25 / 30
The framing has a real spine. The wedge is named ("visibility, not replacement") and defended against the obvious queue-board alternative with one specific data point (consultant late-arrival / lab turnaround) and one specific competitive observation (Vezeeta does bookings; Epic CCC is the global analogue; nobody else does live ops view for the director). The "thermometer in a room with no AC" metaphor for the riskiest assumption is the sharpest single line in the submission. The five things explicitly cut (WhatsApp check-in, doctor's mobile card, queue board, triage bot, insurance pre-auth) each have a one-clause reason that doesn't waffle. **Weakest:** the memo is ~640 prose words against a 600 cap, and the brief explicitly rewards discipline ("a sharp 3-hour submission is better than a sprawling 6-hour one"). On a PO take-home that asks for a word cap, blowing through it is a tell.

### Solution outline - 17 / 20
The MLP paragraph is opinionated rather than describing 30 charts ("one funnel and one callout"). The user flow ends with a concrete action ("Calls the radiologist") instead of "user gains insight." The five screens are differentiated, not five names for one screen. The three-tier ingestion (HMS / tablet / paper-CSV) is the kind of nuance that lands with a hospital ops buyer because it acknowledges the actual EMEA digital-maturity gradient. **Weakest:** the commercial paragraph is one wall of prose that buries the pricing. "$400/month per facility" and "$1,500/month connected tier" should be a two-line list, not embedded mid-sentence. Also pricing in outline ($400/$1500) doesn't reconcile cleanly with the memo's "$300-800/month per facility" range. Pick one.

### Clickable prototype - 17 / 20
A real URL on Cloudflare Pages with push-to-deploy via GitHub Actions, five working screens, hardcoded mock data in [data.js](../public/data.js), trilingual EN / MSA / Egyptian Arabic with `dir=rtl` flipping driven by [strings.js](../public/strings.js), dark mode with `prefers-color-scheme` honored, persistent localStorage for both. The [check-css-rules.mjs](../.claude/hooks/check-css-rules.mjs) hook actively blocks `margin-left` / `padding-right` / `text-align: left` at the tool-call level - this is not theater, the file is 73 lines of working code and would actually deny an Edit. The Egyptian variant in strings.js ("اللي طلع معانا" for "Insight", "مستنيين" for "waiting") is genuinely colloquial, not MSA-with-a-hat. **Weakest:** the Live dashboard's bottleneck callout says Lab is "13 minutes above the threshold" but the data file has Lab `yellow: 25, red: 35` and `medianWaitMin: 38` - that's 3 min above the red threshold, not 13. The text is comparing to yellow. A reviewer asking "is this red or yellow" gets two different answers from the same screen.

### Measurement plan - 13 / 15
Three input + two output, every metric tagged desirability or viability as the brief asked, every metric has an explicit source of truth (app analytics, in-app event log, CRM + Stripe, HMS event stream). The bottleneck-to-action latency metric is the right leading indicator and the line "A director who looks but never acts is using Basira as a thermometer" mirrors the memo's framing without copy-pasting it. The kill criteria are concrete: "DAD ≤ 30% by end of week 2 *and* the director cannot name one decision triggered by Basira" - that's a falsifiable bar, not "if engagement seems low." **Weakest:** metric #5 "median wait reduction in the flagged stage" is labelled "viability proxy" but it's really a product-impact / desirability metric. A hospital director can love the dashboard, never write a check, and still see wait times drop. Calling it viability conflates a renewal narrative with the renewal itself.

### Walkthrough video - 7 / 10
The YouTube embed is live at `_pi1rij3Urg` in [video.html](../public/video.html). The script in [05-video-script.md](../deliverables/05-video-script.md) is structured to the 5-min cap with clear section timings, has Arabic and Egyptian variants checked in (`05-video-script-ar.md`, `05-video-script-eg.md`), and includes a recovery list ("If you blank during recording"). I can't grade the actual delivery from text. **Weakest:** I'm scoring this lower than I'd like because I can only score what I can verify. The risk: if the actual recording trails off or mumbles through Section 5 ("what I cut"), nothing else in this submission compensates.

### Egypt / regional context - 4 / 5
Trilingual UI with a meaningful Egyptian variant, PDPL referenced as the reason WhatsApp is Phase 2, Unifonic named as the compliance partner class, "314 hospitals had EHR as of October 2024" used as the wedge for the Tier 3 (paper/CSV) ingestion path, Cleopatra and Vezeeta named correctly, and the named cold-call targets (Andalusia, Alfa Cure, Heliopolis) are real Cairo chains. **Weakest:** the Al Habib Medical Journal 2024 citation in the memo is a Saudi source being used to anchor an Egypt thesis. Not wrong, but if a director asks "is this Egypt data?" the answer is no.

**Roll-up: 83 / 100 → 8.0 / 10.**

---

## What worked

1. **"We built a thermometer in a room with no AC."** Line in [01-discovery-memo.md](../deliverables/01-discovery-memo.md). This is the framing in a fortune cookie. It survives in the measurement plan kill criterion verbatim, which means the candidate understands a good metaphor is a hiring tool, not a decoration.

2. **The CSS hook is the differentiator.** [check-css-rules.mjs](../.claude/hooks/check-css-rules.mjs) actually denies Edit/Write calls that introduce `margin-left` or inline `style=` attributes. Most candidates *say* "RTL-ready"; this one wired the discipline into the build loop. In the AI-tools writeup the candidate calls it "what a linter is to engineering: automated discipline, not after-the-fact review" - that's a defensible articulation of how to make AI useful in production rather than just demo-ware.

3. **Cut list with reasons, not just a list.** The "WhatsApp patient check-in - compliance-hostile (PDPL, no audit trail). Phase 2 with a managed partner" line is the right answer. The brief mentions WhatsApp twice and most candidates will overreach into a check-in bot. This one explicitly didn't, and named the regulatory reason instead of hand-waving "compliance."

4. **The Egyptian Arabic isn't a translation, it's a register switch.** [strings.js](../public/strings.js) uses "اللي طلع معانا" for "Insight" instead of the MSA "تحليل" - that's how an Egyptian ops director would actually phrase a takeaway in a meeting. The MSA version uses the more formal "تحليل" in the same key. Two distinct registers, both shipped. For a PO role at Tactful selling to Egyptian hospitals, this is the *interview-clinching* detail.

5. **The kill condition is falsifiable.** [04-measurement-plan.md](../deliverables/04-measurement-plan.md): "DAD ≤ 30% by end of week 2 *and* the director cannot name one decision triggered by Basira." Most candidates write soft kill criteria ("if engagement is low"). This one has a date, a number, and a qualitative test, and joins them with AND not OR.

---

## What I'd push back on in the live review

1. **"Al Habib Medical Journal 2024: waiting-to-see-doctor was 85.7% of total OPD time."** Al Habib is Saudi, not Egyptian. Did you only find Saudi data, or did you find Egyptian data and discard it because the Saudi number was sharper? If a Cairo hospital director challenges that number in a sales call, what's your response?

2. **You list Andalusia, Alfa Cure, and Heliopolis as the three directors you'd call next week. Have you actually got a path into any of those three, or is this a list you generated by knowing the names of Cairo hospital chains?** I want to test whether "cheapest test next week" is a real plan or a confident-sounding plan.

3. **Show me your `grep` for Stitch in the repo.** The DESIGN.md you checked in says "robust," "leverage," "intuitive," "powerful" - the exact words your own CLAUDE.md forbids. Was that file reviewed before commit, or did it ship because Stitch generated it and you didn't read it? If the answer is the second, what does that say about your discipline with AI output you don't author yourself?

4. **The memo claims "Cleopatra runs an integrated Clinisys HIS/ERP/lab suite" but commit `5abf68c` is titled "fact-check + logo: corrected ... Clinisys (HIS+ERP suite at Cleopatra)" and commit `7177d09` mentions "Clinisys-as-LIS corrections."** Walk me through what Clinisys actually is and whether your memo is using the corrected understanding or the original one. (*Commercial / feasibility test - this is the kind of vendor specificity you cannot fake in a sales meeting.*)

5. **Pricing.** Memo says $300-800/month per facility. Outline says $400 self-serve and $1,500 connected. With 50-200 bed hospitals, $400/month is well under 1 FTE-hour/month of an ops director's time. What's the basis - bottom-up cost-to-serve, or top-down "what do EMR add-ons charge"? And what does the floor look like if the buyer says "I'll take it at $99"?

6. **Why are you the COO's vendor, not the CIO's?** You picked the operations director as the buyer because she has budget and pain. The CIO usually controls integration approvals and security review for anything that touches the HIS. In an Egyptian private hospital, who actually wins the political fight when the CIO says "no new data pipes"?

7. **Daily Active Director ≥ 70% as the double-down threshold.** With n=1 hospital and a sample of one director, that's 5/7 workdays in week 4. What does the confidence interval on that look like, and would you really make a "double down" capital allocation decision on n=1?

8. **Feasibility question for engineers, but I want your read first.** Tier 1 (HIS webhooks) assumes the hospital's HIS *has* outgoing webhooks. Most Egyptian private hospital HMSes don't. How does your two-week onboarding promise survive if the actual answer is "we need to write a polling integration against a SQL replica"? Is that still two weeks?

---

## Red flags

- **Memo word count exceeds the cap.** [01-discovery-memo.md](../deliverables/01-discovery-memo.md) clocks at ~640 prose words against a stated 600 max. Footer says "*Word count: under 600*" which is just wrong. A PO writing under a word cap who silently misses it and then declares compliance in the footer is a small honesty signal I'd want to talk about.

- **DESIGN.md is AI-slop checked into a repo whose CLAUDE.md explicitly bans AI slop.** [DESIGN.md](../DESIGN.md) has "robust," "leverage," "intuitive," "calm power," "engineered and precise." The candidate's own copy in the deliverables is clean - this is Stitch output left unedited. It's the only file in the repo where the discipline lapses, but it's the design document.

- **The dashboard callout math contradicts itself.** The screen says "13 minutes above the threshold" while the data has Lab at red threshold 35. 13 = 38-25 (yellow), not 38-35 (red). A reviewer who looks twice notices.

- **One commit history tell.** Commit `89d63c1 remove all em dashes from the project` and the follow-up `eab3603 polish` suggest the candidate noticed late that AI had been auto-inserting em dashes and did a mass sweep. Not damning, but it confirms the writing throughout was substantially AI-assisted with a clean-up pass at the end rather than human-first prose. Worth probing on which sentences are the candidate's voice and which are model output.

- **No red flag on:** broken links (all five prototype routes load), made-up vendor names (Vezeeta, Cleopatra, Clinisys, Epic CCC, Unifonic all real), scope creep (the /project landing page and /read renderer are mild but reasonable convenience for the reviewer), or contradictions between memo and video (the script is consistent).

---

## What this submission is missing

**Evidence that the candidate actually talked to a human about this problem.** Everything in the memo is desk research and reasoning. The "Three private hospital directors" who said "patient flow is broken" exist only in the brief. The closest the submission comes is the line "*Cheapest test next week: three 30-minute calls with directors at private Cairo hospitals*" - i.e., the discovery is something the candidate *plans* to do. A single quote from an actual Cairo hospital admin (a friend's mother, a LinkedIn cold message, a Reddit r/Egypt thread, anything human) would move this from "well-reasoned" to "this person already does discovery and would do it on day 1." That's the difference between a HIRE and a STRONG HIRE for a PO role.

---

## If you had 60 seconds with the candidate

You frame well and you respect the reader's time, which is rare. The next level of PO craft isn't another sharp metaphor - it's resisting the part of you that wants the framing to land before you've talked to anyone real. The "thermometer in a room with no AC" line is excellent, but you wrote it before you found out whether the director would even pick up the phone. From now on, when you're tempted to write a beautiful argument from secondary research, pause and spend 90 minutes trying to get one primary-source conversation instead. Beautiful arguments unbacked by one real human's words are how PMs slowly stop being trusted by their CEOs.

---

## If I were the candidate, here's what I'd change before submitting

- **[deliverables/01-discovery-memo.md](../deliverables/01-discovery-memo.md) · Severity: critical**
  - What to change: The memo is ~640 prose words. The footer "*Word count: under 600*" is wrong.
  - Why: The brief sets a hard 600-word cap and explicitly rewards discipline. Missing the cap *and* asserting you met it is a credibility hit on a PO writing sample.
  - Suggested replacement or fix: Cut these specific lines without losing the spine: (a) under "The wedge", delete "*The instinctive answer to 'patient flow is broken' is a queue board or WhatsApp check-in. I went deeper:*" - the next bullet implies it. (b) Under "What I decided NOT to build", collapse the "WhatsApp" and "Triage bot" reasons into one line each ("PDPL audit-trail risk; Phase 2 with managed partner" / "Clinical liability"). (c) Under "Feasibility", remove the three-tier ingestion paragraph entirely and link to the outline where it belongs. Target 560 words so you have margin; re-verify the count with `wc -w` on the prose-only body.

- **[DESIGN.md](../DESIGN.md) · Severity: critical**
  - What to change: Strip every Stitch-generated AI-slop phrase: "robust," "leverage," "intuitive," "powerful," "calm power," "engineered and precise," "effortlessly smart," "sophisticated dark-to-teal color progression."
  - Why: Your CLAUDE.md forbids exactly these words. A reviewer doing a 30-second `grep` on the words your own rules ban will find them in your design doc. It's the only file in the repo where the discipline breaks and it's the one that frames the design system.
  - Suggested replacement or fix: Replace the first paragraph with: "Design system for Basira. Teal-on-white with a gold warning accent. Plus Jakarta Sans for headlines, Inter for body. Built to read clearly in EN, MSA, and Egyptian Arabic with no per-language CSS." Delete the "Brand & Style" paragraph entirely; the colors and tokens speak for themselves.

- **[public/data.js](../public/data.js) and [public/strings.js](../public/strings.js) · Severity: high**
  - What to change: The dashboard callout text "Median wait is 38 minutes, 13 minutes above the threshold" disagrees with the red threshold of 35 min in the same file.
  - Why: The wedge is "make the invisible visible with one trustworthy number." The first number on the live screen is internally inconsistent. A hospital director will catch it.
  - Suggested replacement or fix: In `strings.js` change `callout.bottleneck.body` (EN/MSA/EG) to: "Median wait is 38 minutes, 3 minutes above the red threshold. 19 patients waiting. Top contributor: Dr. Hassan's CT orders." Update the Arabic and Egyptian variants identically (change "13 دقيقة" to "3 دقائق" and adjust the phrase).

- **[deliverables/02-solution-outline.md](../deliverables/02-solution-outline.md) · Severity: high**
  - What to change: Pricing in the outline ($400 / $1,500 / custom) doesn't match the memo's "$300-800/month per facility."
  - Why: Two pricing stories in one submission reads as not-yet-thought-through. A reviewer will pick the lower number and use it against you.
  - Suggested replacement or fix: Pick one and reconcile both files. Recommended: keep the outline's tiered structure and update the memo's viability assumption to read "Mid-size hospitals (50-200 beds) pay $400/month (self-serve) to $1,500/month (HIS-connected) per facility." Then break the outline's commercial paragraph pricing into a two-line list so it's scannable.

- **[deliverables/01-discovery-memo.md](../deliverables/01-discovery-memo.md) · Severity: medium**
  - What to change: The "Al Habib Medical Journal 2024: waiting-to-see-doctor was 85.7% of total OPD time" citation is a Saudi journal used to anchor an Egypt thesis.
  - Why: A reviewer who looks up the citation will see it's not Egyptian. Better to caveat than to be caught.
  - Suggested replacement or fix: Rewrite as: "*The bottleneck people see (front desk) isn't the one that matters. Regional OPD studies put the choke inside clinical workflow - waiting to see the doctor and lab/imaging turnaround consistently dominate total visit time. Egypt-specific operational data is thin, which is itself a reason to instrument it.*" That last clause turns the data gap into a wedge advantage.

- **[deliverables/04-measurement-plan.md](../deliverables/04-measurement-plan.md) · Severity: medium**
  - What to change: Metric #5 ("Median wait reduction in the flagged stage") is labelled "viability proxy" but it's a product-impact / desirability outcome.
  - Why: Mislabelling a metric in a measurement plan is the kind of thing a PM with rigor notices first. Get it right.
  - Suggested replacement or fix: Relabel to "**desirability (outcome)**." Then add a true viability lagging metric: "**6. Net Revenue Retention at month 12** - viability. Source: Stripe + CRM. Below 100% with one renewal lost means the wedge doesn't expand inside the customer; above 130% means we're selling more facilities into the same group."

- **[deliverables/02-solution-outline.md](../deliverables/02-solution-outline.md) · Severity: medium**
  - What to change: The commercial paragraph is one wall of prose burying buyer, pricing, sales cycle, and onboarding.
  - Why: The brief asks for a *paragraph* but the buyer needs to be able to skim. A reviewer reading on a phone will give up halfway through.
  - Suggested replacement or fix: Restructure as: "**Buyer:** COO / Operations Director at 50-200 bed private hospitals. **Evaluation:** 30-min demo + 2-week pilot on one outpatient clinic; success = director uses it daily by week 2. **Pricing:** $400/month self-serve, $1,500/month connected, custom for groups. **Sales cycle:** short - buyer and user are the same person." Keep the onboarding-tiers and Phase 2 lines as a follow-up paragraph.

- **[public/basira.html](../public/basira.html) and the four other app pages · Severity: medium**
  - What to change: Add one piece of evidence on the Live dashboard that the data is *live*-shaped, not a screenshot.
  - Why: Your wedge is "live visibility." Today, refreshing the page shows identical data every time. A reviewer demoing this on their phone in a meeting will say "is this real-time or a mock?"
  - Suggested replacement or fix: In [data.js](../public/data.js), randomise the `medianWaitMin` for Lab/Imaging on each page load by ±3 minutes (`38 + Math.floor((Math.random() - 0.5) * 6)`) and update the callout text to match. Add a subtle "Last updated: 10:42:17" line that ticks every 15 seconds. 20 lines of JS. Sells the wedge.

- **[public/read.html](../public/read.html) · Severity: low**
  - What to change: Page title typo: `<title>Basira ·Read</title>` - missing space after the middle dot.
  - Why: A PO with a typo in a `<title>` tag is the kind of detail a senior reviewer notices and silently downgrades.
  - Suggested replacement or fix: Change `<title>Basira ·Read</title>` to `<title>Basira · Read</title>` (add the space).

- **[deliverables/03-ai-tools-and-prototype.md](../deliverables/03-ai-tools-and-prototype.md) · Severity: low**
  - What to change: "Streamline icons (API key wired in `.env`, not yet rendered)" admits a TODO in the prototype writeup.
  - Why: It's an honest line but it draws the reviewer's eye to something missing rather than something present. Either ship the icons or remove the line.
  - Suggested replacement or fix: Replace with: "Streamline icons - decided against in v1. Inline SVG matches the type weight better at small sizes and saves an API hop per page load. Revisit if the icon set grows past ten." Reframes a gap as a judgment call.

- **Walkthrough video (YouTube `_pi1rij3Urg`) · Severity: low**
  - What to change: I cannot evaluate this directly; the script reads tight (5 min, sectioned, with a recovery plan) but I haven't watched the recording.
  - Why: If the actual delivery rushes Section 5 or skips the "what I cut" reasoning, the cut-list strength in the memo doesn't reach the reviewer who watches the video first.
  - Suggested replacement or fix: Re-record once with a timer visible off-camera. Hit each section's start time within 5 seconds. If Section 5 goes over time, drop "Phase 3 predictive" and "Phase 4 benchmarking" rather than rushing "what I cut" - the cut-list is your single best signal that you have judgment.
