# Solution outline — Basira

**Live prototype:** https://tactful-ai-codequest.pages.dev
**AI tools used:** detailed in `03-ai-tools-and-prototype.md`

## Minimum Lovable Product

A read-only operations dashboard that ingests patient-status events from the hospital's existing HMS (Clinisys, OpenMRS, custom) and renders a single live view: where every patient is right now, how long they've been there, and which stage is the bottleneck. One number per stage, one heatmap, one drill-down. No clinical decisions, no patient-facing surface in v1.

What makes it *lovable* (not just usable): the dashboard is opinionated. It doesn't show 30 charts. It shows one funnel and one callout: *"Lab/Imaging is your bottleneck right now — investigate."* The director arrives in the morning, glances once, knows what to do. That's the love.

## User flow (happy path)

```
Director arrives at hospital → opens Basira on phone or laptop
   ↓
Sees Live funnel: 5 stages green, 1 stage red (Lab/Imaging, 38 min vs 25 threshold)
   ↓
Taps the red tile → drill-down screen
   ↓
Sees patient list: Ahmed M. waiting 47 min for CT, ordered by Dr. Hassan at 09:14
   ↓
Taps Ahmed → timeline confirms the stall is in Lab, not upstream
   ↓
Opens History → confirms it's a Tuesday/Thursday pattern, Dr. Hassan averages 23 min above peers
   ↓
Calls the radiologist; reviews CT staffing for Tue/Thu next sprint
```

End-to-end the director closes the loop in 90 seconds. That's the demo.

## Key screens (5)

1. **Sign-in** — branded entry, hospital select, mock SSO. Establishes context (director persona, hospital name).
2. **Live patient flow** *(the money screen)* — 6-stage funnel with current count + median wait per stage, threshold heatmap, and a single bottleneck callout that names the action to take.
3. **Stage drill-down (Lab/Imaging)** — the patients in this stage right now, sorted by wait time. One-click expand to see a single patient's journey timeline with the stalled stage flagged.
4. **History** — 7-day stacked-bar of median wait per stage per day, with a written insight ("Lab is your bottleneck on Tue/Thu") and a per-doctor breakdown of lab-order turnaround.
5. **Settings + integrations** — configurable yellow/red thresholds per stage; integration tiles showing Vezeeta and Clinisys connected, WhatsApp Patient Updates marked "Coming Q2 — requires compliance partner." Frames the roadmap honestly.

A localisation card on Settings shows English/LTR active, Arabic/RTL queued for Phase 2 — the layout already uses CSS logical properties, so flipping is a config change, not a rewrite.

## Commercial fit (one paragraph)

**Buyer:** the COO / Operations Director at a mid-size private hospital (50-200 beds), or the Head of Patient Experience at a hospital group. **Evaluation:** 30-minute demo + 2-week pilot on one outpatient clinic with CSV import; success = the director uses it daily by week 2 and books a follow-up with a second site. **Pricing hypothesis:** $400/month per facility on a self-serve tier (single clinic, CSV import, no integrations); $1,500/month on a connected tier (HMS webhooks, multi-clinic, exportable reports); custom for hospital groups. Sales cycle is short because the buyer and the user are the same person — no procurement-vs-IT split. The expansion story is hospital groups: prove value at one site, roll out to the chain. Phase 2 (WhatsApp patient updates with a compliance partner) becomes the upsell that justifies the connected tier.
