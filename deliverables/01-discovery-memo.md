# Discovery & framing memo — Basira

**Wedge:** Basira (بصيرة) — a live patient-flow visibility layer for hospital operations directors.
**Live prototype:** https://tactful-ai-codequest.pages.dev

---

## Primary user — and why

The hospital **Operations Director** (or COO at smaller hospitals). One person, accountable for throughput, with budget authority. Doctors, admins, and patients all live downstream of her decisions but cannot change the system. She can.

Front-desk admins are overwhelmed but have no budget. Doctors are blind but resist software. The director is the only persona who is *both* hurting and able to act — and the cheapest customer to acquire: one demo, one yes, one rollout.

## Job-to-be-done (one sentence)

*"Tell me, right now, where my hospital is bleeding patient-time, so I can intervene before the day is lost."*

## The wedge — and why this one

Three directors said "patient flow is broken." The instinctive product is a queue board or WhatsApp check-in. I went deeper:

- The bottleneck people *see* (front desk) is rarely the one that matters. Operations literature shows the choke sits inside clinical workflow — consultant late-arrival (20-49 min) and lab/imaging turnaround. Patients wait *invisibly*; admins have no instrument that surfaces it.
- Egypt is not greenfield: Vezeeta owns bookings; Cleopatra-tier groups run Clinisys. A new HMS or queue board competes with two good-enough incumbents.

So the wedge is **visibility, not replacement**. Basira sits on top of whatever HMS the hospital runs and surfaces what nobody else does: *where are patients stalled right now, and why?*

The director clicks one screen, sees Lab is red, drills in, finds Dr. Hassan's CT orders averaging 47 min vs 18 baseline. Tomorrow's conversation is grounded in a number, not a complaint.

## What I decided NOT to build

- **WhatsApp patient check-in** — obvious answer, but compliance-hostile (PDPL, no audit trail, data on personal phones). Phase 2 with a managed compliance partner once we know which delays are worth surfacing.
- **Doctor's "next patient" mobile card** — narrow, doesn't address the director's pain, doctors resist new tools.
- **Generic queue board** — shows symptoms, not causes.
- **Triage bot** — clinical liability, regulatory burden.
- **Insurance pre-auth automation** — long sales cycle, deeper integration; not a Day-1 wedge.

## Assumptions

**Desirability (mine to test)**
- Directors want a visibility tool, not another HMS.
- They will check it daily if the bottleneck callout is sharp.
- Showing per-doctor breakdowns won't make doctors revolt and block adoption.

**Viability (mine to test)**
- Mid-size private hospitals (50-200 beds) will pay $300-800/month per facility for a visibility layer.
- The director can authorize this without a full procurement cycle.
- Onboarding fits in two weeks via CSV import or webhook from an existing HMS.

**Feasibility (engineers' to confirm)**
- Reliable real-time ingestion from Clinisys / OpenMRS / paper-and-Excel hybrids.
- Sub-5-minute freshness SLA without ballooning infra cost.
- Data residency in Egypt or PDPL-compliant region.

## Riskiest assumption + cheapest test

**Riskiest:** *Directors will act on what Basira shows.* If the screen confirms what they already suspect but they don't change behavior, we built a thermometer in a room with no AC.

**Cheapest test (next week):** Three 30-minute calls with operations directors at private hospitals in Cairo (Andalusia, Alfa Cure, Heliopolis Polyclinic). Show the demo. Ask one question: *"If you saw Lab was red on a Tuesday morning, what's the first thing you'd do — and would you actually do it?"* Three "I'd call the radiologist before lunch" answers = green light. Three "interesting, but..." answers = wedge is a thermometer.

---

*Word count: under 600.*
