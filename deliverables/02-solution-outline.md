# Solution outline · Basira

**Live prototype:** https://tactful-ai-codequest.pages.dev
**AI tools used:** detailed in `03-ai-tools-and-prototype.md`

## Minimum Lovable Product

A read-only operations dashboard that ingests patient-status events from whatever the hospital already runs (HIS / Clinisys / a tablet check-in app / nightly CSV) and renders a single live view: where every patient is now, how long they've been there, and which stage is the bottleneck. One funnel, one heatmap, one drill-down. No clinical decisions, no patient-facing surface in v1.

What makes it *lovable*: the dashboard is opinionated. Not 30 charts, one funnel and one callout: *"Lab/Imaging is your bottleneck right now, investigate."* The director glances once at 9am and knows what to do.

## User flow (happy path)

```
Director arrives → opens Basira on phone or laptop
   ↓
Sees Live funnel: 5 stages green, 1 red (Lab, 38 min vs 25 threshold)
   ↓
Taps the red tile → drill-down → Ahmed M. waiting 47 min for CT, ordered by Dr. Hassan
   ↓
Taps Ahmed → timeline confirms the stall is in Lab, not upstream
   ↓
Opens History → Tue/Thu pattern, Dr. Hassan averages 23 min above peers
   ↓
Calls the radiologist; reviews CT staffing for next sprint
```

End-to-end, the director closes the loop in 90 seconds. That's the demo.

## Key screens (5)

1. **Sign-in**, branded entry, hospital select, mock SSO. Establishes persona.
2. **Live patient flow** *(the money screen)*, 6-stage funnel with count + median wait per stage, heatmap, and a single bottleneck callout that names the action.
3. **Stage drill-down (Lab/Imaging)**, patients in this stage now, sorted by wait. Click expands a per-patient timeline showing where they stalled.
4. **History**, 7-day stacked-bar by stage, with a written insight ("Lab is your bottleneck on Tue/Thu") and a per-doctor breakdown.
5. **Settings + integrations**, configurable stage thresholds, integration tiles (HIS, Clinisys lab, Vezeeta connected; WhatsApp Patient Updates marked *Coming Q2, requires compliance partner*). Frames the roadmap honestly.

The prototype ships trilingual, English, Modern Standard Arabic, and Egyptian Arabic, with full RTL and dark mode. A custom pre-edit hook blocks any CSS that would break right-to-left, so the same files render LTR for English and RTL for Arabic with no rewrite.

## Commercial fit (one paragraph)

**Buyer:** the COO / Operations Director at a mid-size private hospital (50-200 beds), or the Head of Patient Experience at a hospital group (Cleopatra-tier). **Evaluation:** 30-minute demo + 2-week pilot on one outpatient clinic; success = the director uses it daily by week 2 and books a follow-up site. **Pricing hypothesis:** $400/month per facility (self-serve, CSV or tablet check-in); $1,500/month connected tier (HIS webhooks, Clinisys integration, multi-clinic); custom for groups. Sales cycle is short because buyer and user are the same person. **Onboarding scales to maturity:** Tier 1 (full HIS) wires up via webhooks in two weeks; Tier 2 (partial digital, most mid-size private hospitals) deploys a tablet check-in app at each nurse station; Tier 3 (paper-and-Excel, only ~314 Egyptian hospitals had EHR as of October 2024) starts with nightly CSV and graduates upward. Expansion story = hospital groups: prove at one site, roll the chain. Phase 2 (WhatsApp patient updates via a Unifonic-class compliance partner, required by Saudi PDPL and similar regional laws) becomes the upsell that justifies the connected tier.
