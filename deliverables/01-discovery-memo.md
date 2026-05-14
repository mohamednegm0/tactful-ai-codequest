# Discovery & framing memo · Basira

**Wedge:** Basira (بصيرة) - a live patient-flow visibility layer for hospital operations directors.
**Live prototype:** https://tactful-ai-codequest.pages.dev

---

## Primary user - and why

The hospital **Operations Director** (or COO at smaller hospitals). Accountable for throughput, with budget authority. Doctors, admins, and patients live downstream of her decisions but cannot change the system. She can - and she's the only persona who is *both* hurting and able to act, which makes her the cheapest customer to acquire.

## Job-to-be-done (one sentence)

*"Tell me, right now, where my hospital is bleeding patient-time, so I can intervene before the day is lost."*

## The wedge - and why this one

The instinctive answer to "patient flow is broken" is a queue board or WhatsApp check-in. I went deeper:

- The bottleneck people *see* (front desk) isn't the one that matters. Ops literature puts the choke inside clinical workflow, consultant late-arrival and lab/imaging turnaround (Al Habib Medical Journal 2024: waiting-to-see-doctor was 85.7% of total OPD time). Patients wait *invisibly*.
- Egypt has tools but a gap: Vezeeta owns bookings (10M+ patients, 80 cities); Cleopatra runs an integrated Clinisys HIS/ERP/lab suite; smaller hospitals use local vendors or paper. None surface a live patient-flow ops view for the director. Epic's Capacity Command Center (Johns Hopkins, Yale, UC San Diego) is the global analogue, and no Egyptian private hospital runs Epic.

The wedge is **visibility, not replacement**. Basira sits on top of whatever the hospital runs and surfaces what nobody else does: *where are patients stalled right now, and why?* The director clicks one screen, sees Lab is red, drills in, finds Dr. Hassan's CT orders averaging 47 min vs 18 baseline. Tomorrow's conversation is grounded in a number.

## What I decided NOT to build

- **WhatsApp patient check-in** - compliance-hostile (PDPL, no audit trail). Phase 2 with a managed partner.
- **Doctor's mobile card** - narrow, ignores the director, doctors resist new tools.
- **Generic queue board** - shows symptoms, not causes.
- **Triage bot** - clinical liability and regulatory burden.
- **Insurance pre-auth** - long sales cycle, deeper integration; not Day 1.

## Assumptions

**Desirability (mine to test)**
- Directors want visibility, not another HMS.
- They check it daily if the bottleneck callout is sharp.
- Per-doctor breakdowns won't make doctors block adoption.

**Viability (mine to test)**
- Mid-size hospitals (50-200 beds) pay $300-800/month per facility.
- The director authorizes without full procurement.
- Onboarding fits in two weeks via the right ingestion tier.

**Feasibility (engineers' to confirm)**
- Sub-5-minute event freshness without ballooning infra cost.
- Data residency in Egypt or PDPL-compliant region.
- Three ingestion tiers, matched to hospital maturity:
  - *Tier 1 - full HMS:* webhook events from the hospital's HIS (lab orders, consult-started, etc). Fastest, cleanest. Two weeks integration.
  - *Tier 2 - partial digital:* a staff micro-app on tablets at each nurse station. Front desk taps "registered → triage", triage nurse taps "→ consult", and so on. One week + 30-min training.
  - *Tier 3 - paper-and-Excel:* nightly CSV upload of the day's flow log, or a WhatsApp bot the front desk types short messages into ("Ahmed M. → lab"). Crude but ships in a day. Phase-2 upgrade path to Tier 1 or 2.

## Riskiest assumption + cheapest test

**Riskiest:** *Directors will act on what Basira shows.* If the screen confirms what they already suspect but no behavior changes, we built a thermometer in a room with no AC.

**Cheapest test next week:** three 30-minute calls with directors at private Cairo hospitals (Andalusia, Alfa Cure, Heliopolis). Show the demo, ask one question: *"If Lab was red on Tuesday morning, what's the first thing you'd do - and would you actually do it?"* Three "I'd call the radiologist before lunch" = green light. Three "interesting, but…" = thermometer.

---

*Word count: under 600.*
