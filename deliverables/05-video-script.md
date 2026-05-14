# Walkthrough video, script + cue list (5 min target)

The brief: unscripted is fine, mistakes are fine, they want to hear how you reason. Don't memorize. Use this as scaffolding. Speak slowly. If you blank, look at the screen and describe what you see, that always works.

**Setup before recording:**
- Open https://tactful-ai-codequest.pages.dev in a fresh browser window
- Close other tabs and notifications
- Quick water sip
- Loom or QuickTime, screen + face camera if you can

---

## Section 1 · 0:00–0:30 · The problem (camera on you, no screen yet)

> "Hi, I'm Mohamed. I'm walking through my Tactful Product Owner take-home. The brief was: pick a product wedge for Medicena, a fictional Cairo healthtech startup helping private hospitals where, quote, *patient flow is broken*. Three hospital directors said the same thing, they can't see bottlenecks, doctors run blind, admin is overwhelmed, patients are angry. I had four hours to pick a wedge, prototype it, and tell you how I'd measure it."

## Section 2 · 0:30–1:15 · Why this wedge and not the obvious one

> "The obvious wedge is a queue board with WhatsApp check-in. I almost built that. Then I did 20 minutes of operations research and changed my mind. Two things stopped me:

> "**One**, the front desk isn't the bottleneck. Hospital ops literature consistently shows the choke is *inside* the clinical workflow, consultant late-arrival, lab and imaging turnaround. Patients wait invisibly. A queue board solves a visible problem that isn't the real one.

> "**Two**, Egypt has tools but a real gap. Vezeeta owns patient bookings, 10 million patients across 80 cities, but it's appointments and payments, not operations. Cleopatra Hospitals runs an integrated Clinisys HIS suite, smaller hospitals run local vendors, and most of the country is still paper, only about 314 hospitals had EHR as of October 2024. None of these systems surface a live patient-flow view for the director. Epic's Capacity Command Center, used at Johns Hopkins and Yale, is the global analogue, but no Egyptian private hospital runs Epic.

> "So I picked a different wedge: **visibility, not replacement**. I called it Basira, بصيرة, Arabic for *insight*. The deeper sense of seeing what others miss. The product makes the invisible clinical queue visible to the one person who can act on it: the operations director."

## Section 3 · 1:15–3:30 · The demo (share screen)

**Cue 1, Sign-in screen** *(say while clicking through):*
> "I'll sign in as Dr. Mona Khalil, the Operations Director at El Salam Hospital in New Cairo."

**Cue 2, Live dashboard** *(let it load, point at the funnel):*
> "This is the money screen. Six stages, registration through discharge. Each tile shows current count and median wait. Five are green. **Lab/Imaging is red**, 38 minutes against a 25-minute threshold. The product doesn't just show the number, it tells me what to do." *(point at the callout)* "Right here: Lab/Imaging is your bottleneck right now, top contributor is Dr. Hassan's CT orders."

**Cue 3, Click "Investigate Lab/Imaging"** *(drill-down screen):*
> "I drill in. Here's the queue. Top of the list: Ahmed M., waiting 47 minutes for a CT, ordered by Dr. Hassan at 09:14. Below him, two more of Dr. Hassan's CTs."

**Cue 4, Scroll to Ahmed's timeline:**
> "And here's Ahmed's journey. Registration was four minutes. Triage was eight. Consultation was twelve. Lab is **47 and counting**. The stall is in Lab, not upstream. That's the kind of thing a director would never see from a paper sheet."

**Cue 5, Click History tab:**
> "Now I want to know if this is a fluke or a pattern. History view, last seven days. The red bar is Lab. **Tuesday and Thursday are spikes**, 39 to 41 minutes versus 22 on other days. The insight callout flags it: review CT staffing on those days." *(scroll to per-doctor table)* "And per doctor: Dr. Hassan averages 23 minutes above the next-fastest doctor. That's a conversation."

**Cue 6, Click Settings tab:**
> "Settings shows two things. First, integrations: we layer on top of the hospital's HIS, on Clinisys for lab events, and Vezeeta for bookings, we don't replace any of them. Second, and this matters, WhatsApp Patient Updates is marked *Coming Q2, requires compliance partner*. The brief mentions WhatsApp twice. I deliberately did not lead with it. Healthcare WhatsApp is compliance-hostile in MENA, PDPL audit trail, no medical-grade by default. We'd need a Unifonic-class partner. So WhatsApp is Phase 2, once we know which delays are worth surfacing."

## Section 4 · 3:30–4:15 · Measurement & decision criteria (back to camera)

> "I'd measure two things. **Desirability**, does the director actually use it. The leading metric is *bottleneck-to-action latency*: when a stage goes red, how long before the director drills in. Target under 30 minutes during business hours. If she looks but doesn't act, I built a thermometer.

> "**Viability**, pilot-to-paid conversion at 4 weeks. After 4 weeks live with one hospital, I double down if Daily Active Director is over 70% and the director volunteers a decision she made because of Basira. I kill it if she says, *this confirms what I already knew*, with no behavior change."

## Section 5 · 4:15–5:00 · Tools, what I cut, what's next

> "On AI tools, I used Claude Code with Opus 4.7 as the orchestrator. But the differentiator wasn't the model. I built a small AI-native dev setup: a project constitution in CLAUDE.md, a custom hook that blocks any CSS that would break right-to-left support, persistent memory rules. The assistant moved fast inside enforced guardrails. Stitch generated the design system. Bun and HTMX as the stack, no framework, no build step. Cloudflare Pages with GitHub Actions for the live URL.

> "**What I cut:** WhatsApp queue check-in, doctor mobile card, triage bot, insurance pre-auth. Each one is in the memo with the reasoning.

> "**What I'd do next:** Phase 2 is the WhatsApp patient-updates layer with a compliance partner. Phase 3 is predictive, *next Tuesday will be a Lab bottleneck because of these scheduled CTs*. Phase 4 is multi-hospital benchmarking for groups.

> "Thanks for watching. Happy to dig into any of it in the review session."

---

## If you blank during recording

- **Forgot what to say?** Look at the current screen and describe what's on it. Always works.
- **Camera on you and you froze?** Switch to screen-share and describe a screen.
- **Made a mistake in a number?** Don't backtrack, say "let me re-check that, actually it's X." Sounds confident.
- **Demo broke?** Hit refresh. Say "let me reload, that's the prototype's only piece of magic."
- **Going over 5 min?** Skip Section 5's "what I cut" line. Get to "thanks for watching."
- **Way under 5 min?** Add: "One more thing, this is on a real CI/CD pipeline. Every push deploys in 30 seconds. That's the workflow I'd bring to your team."

You've got this.
