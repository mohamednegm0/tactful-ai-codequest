# Discovery & framing memo · Basira

**Wedge:** Basira (بصيرة) - a live patient-flow visibility layer for hospital operations directors.
**Live prototype:** https://tactful-ai-codequest.pages.dev

---

## Primary user

The hospital **Operations Director** (or COO at smaller hospitals). Accountable for throughput, with budget authority. Doctors, admins, and patients sit downstream of her decisions but can't change the system. She's the persona where *hurting* and *able to act* overlap most cleanly at a price point we can sell into.

## Job-to-be-done

*"Tell me, right now, where my hospital is bleeding patient-time, so I can intervene before the day is lost."*

## The wedge

The instinctive answer to "patient flow is broken" is a queue board or WhatsApp check-in. I went deeper:

- The bottleneck people *see* (front desk) isn't the one that matters. Regional OPD research puts the choke inside clinical workflow - waiting to see the doctor and lab/imaging turnaround dominate total visit time (Saudi outpatient data, Al Habib 2024, puts waiting-to-see-doctor at 85.7% of OPD time; Egypt-specific operational data is thin, which is itself a reason to instrument it).
- Egypt has tools but a gap: Vezeeta owns bookings (10M+ patients, 80 cities); Cleopatra runs Clinisys for HIS/ERP/lab; smaller hospitals use local vendors or paper. None surface a live patient-flow ops view for the director. Epic's Capacity Command Center is the global analogue, and no Egyptian private hospital runs Epic.

The wedge is **visibility, not replacement**. Basira sits on top of whatever the hospital runs and surfaces *where patients are stalled right now, and why.* The director sees Lab is red, drills in, finds Dr. Hassan's CT orders averaging 47 min vs 18 baseline. Tomorrow's conversation is grounded in a number.

## One primary-source check, already done

My fiancée, a bioinformatics graduate currently revising clinical and admin papers for Egypt's disability office, pushed back: *wait time alone is the wrong sort key.* In Egyptian outpatient flow, "who sees the doctor next" is a priority question, not a queue question - acuity, age, disability status, and referral source jump patients up the line. **Implication:** v1 surfaces median wait (the COO's metric). v1.5 needs a *priority-aware* view - each stage also showing median wait for the highest-priority cohort. That's the version a Medical Director buys, and the path from ops into clinical leadership.

## What I decided NOT to build

- **WhatsApp patient check-in** - blocked by Egypt's Personal Data Protection Law (Law 151 of 2020) and EDPC restrictions on patient identifiers in consumer apps. Phase 2 with a Unifonic-class partner.
- **Doctor's mobile card** - vitamin not painkiller; wrong buyer.
- **Generic queue board** - shows symptoms, not causes.
- **Triage bot** - clinical liability.
- **Insurance pre-auth** - long sales cycle; not Day 1.

## Assumptions

**Desirability (mine to test).** Directors want visibility, not another HMS. They check it daily if the callout is sharp. Per-doctor breakdowns won't make doctors block adoption.

**Viability (mine to test).** Mid-size hospitals (50-200 beds) pay $400/month self-serve, $1,500/month connected (pricing detail in outline). Director authorizes without full procurement. Onboarding fits two weeks via the right tier (detailed in outline).

**Feasibility (engineers' to confirm).** Sub-5-minute event freshness without ballooning infra. Data residency in Egypt or a compliant region.

## Riskiest assumption + cheapest test

**Riskiest:** *Directors will act on what Basira shows.* If the screen confirms what they suspect but no behavior changes, we built a thermometer in a room with no AC.

**Cheapest test next week:** three 30-minute calls with directors at private Cairo hospitals (Andalusia, Alfa Cure, Heliopolis). One question: *"If Lab was red on Tuesday morning, what's the first thing you'd do - and would you actually do it?"* Three "I'd call the radiologist before lunch" = green light. Three "interesting, but…" = thermometer.
