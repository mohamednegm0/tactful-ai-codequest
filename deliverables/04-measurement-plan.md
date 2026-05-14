# Measurement plan · Basira

The two things I own as PO: **desirability** (will the director use it daily?) and **viability** (will hospitals pay and renew?). Engineers own feasibility - not measured here.

## Three input metrics (leading)

**1. Daily Active Director - desirability.**
% of subscribed hospitals where the director opens the dashboard at least once per workday. Source: app analytics, role-keyed. The earliest signal that the bottleneck callout is changing behavior.

**2. Bottleneck-to-action latency - desirability.**
Median time between a stage going red and the director drilling in or clicking the callout. Source: in-app event log (`stage_state_changed` + `drilldown_opened`). Target during business hours: under 30 min. A director who looks but never acts is using Basira as a thermometer.

**3. Per-doctor breakdown engagement - desirability.**
% of weekly sessions where the director filters or scrolls into the per-doctor table on History. Source: event log. This is where harder conversations start; engagement here predicts whether Basira graduates from "interesting" to "weekly ops review tool."

## Two output metrics (lagging)

**4. Pilot-to-paid conversion at 4 weeks - viability.**
% of 2-week pilots that convert to paid annual contracts within 4 weeks. Source: CRM + Stripe. Only honest signal that the wedge is commercially real.

**5. Median wait reduction in the flagged stage - viability proxy.**
Per hospital, change in median wait at the most-flagged stage from week 1 to week 8. Source: the HMS event stream we already ingest. This is the renewal narrative: "your Tue/Thu Lab wait dropped 38→24 min" makes the customer's case for them.

## After 4 weeks live with one hospital

**Double down if:**
- Daily Active Director ≥ 70%
- Bottleneck-to-action latency under 30 min in business hours
- The director volunteers, unprompted, a decision they made because of Basira

**Kill the wedge if:**
- DAD ≤ 30% by end of week 2 *and* the director cannot name one decision triggered by Basira
- Median wait at the flagged stage is unchanged or worse
- The director says "this confirms what I already knew" with no behavioral change

The kill condition isn't "the dashboard is wrong." It's "the dashboard is right and nothing changes" - meaning we built a thermometer. A thermometer is not a $400/month product.

---

*Word count: under 400.*
