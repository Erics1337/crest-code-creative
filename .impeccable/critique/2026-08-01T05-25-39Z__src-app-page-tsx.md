---
target: what else can we do to make this Crest Code site awesome?
total_score: 23
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
timestamp: 2026-08-01T05-25-39Z
slug: src-app-page-tsx
---
## Design specificity

**Verdict: 3/4 — authored, but not fully lived-in yet.** The home page establishes the High Country Field Office confidently through the Crested Butte hero, graphite/alpine palette, editorial scale, and restrained cobalt. The identity is distinct from a generic agency or Link Loom. The lower pages, especially Services, repeat a successful large-headline + flat-color-field + ruled-list pattern often enough that the visual world becomes less evidence-led and could belong to another capable studio.

## Heuristic scorecard

| Heuristic | Score | Evidence |
| --- | ---: | --- |
| Visibility of system status | 3/4 | Active navigation and form sending state are clear; service selection relies mostly on visual inversion. |
| Match with the real world | 4/4 | Problem-first language translates digital-product work into owner language. |
| User control and freedom | 3/4 | Direct routes and email alternative help; contact category selection has no explicit reset/deselect state. |
| Consistency and standards | 3/4 | Typography, rules, and controls are coherent; CTA and menu affordances need more precision. |
| Error prevention | 2/4 | Native required-field validation exists, but category choice and message quality lack enough guidance. |
| Recognition over recall | 3/4 | Service cards and contact checklist help; technical proof lists still ask nontechnical visitors to decode terms. |
| Flexibility and efficiency | n/a | Persuade/portfolio surface, not a productivity workflow. |
| Aesthetic and minimalist design | 3/4 | Calm and legible, but page cadence repeats rather than responding to each story. |
| Error recovery | 2/4 | Failed contact submission is toast-only; no durable inline recovery is evident. |
| Help and documentation | n/a | Supporting explanation belongs in the marketing pages rather than separate documentation. |

**Total: 23/32 applicable points.**

## Strengths

1. **The home makes a specific promise immediately.** “Useful digital products, built close to home” gains credibility from real location imagery without falling into Colorado-resort cliché.
2. **The portfolio earns trust with evidence.** Five case studies, outcome-led summaries, project imagery, and the named Earthy Soul Living testimonial form a convincing progression for skeptical referrals and local search visitors.
3. **The conversion copy is unusually approachable.** “Tell me what needs to work better” and the one-business-day reply promise reduce fear for people who do not know how to buy digital work.

## Priority issues

### P1 — Make the field-office system prove the work, not only style it

`/services` becomes a uniform catalogue after its strong opening. Home and portfolio also reuse the same headline/color-field rhythm. Bring a compact visual artifact, decision note, before/after workflow, or relevant project fragment into each service path. Lead every evidence plate with the business outcome; use field annotations to orient that evidence rather than decorate it.

### P1 — Simplify the highest-intent contact decision

The five equally weighted “What are we talking about?” options arrive before the visitor explains the problem, and “Other” gives no relief. Make this “Closest fit (optional),” keep the message field primary, and add a direct post-submit contract near the action: “I’ll review this personally within one business day; then we’ll decide whether a short fit call makes sense.”

### P2 — Strengthen form states for accessibility and recovery

Service chips visually invert on selection but do not expose `aria-pressed` or selected state. A failed message only appears as a toast. Use a radiogroup or toggle buttons with programmatic state plus a visible checkmark/label; render field-level errors and a stable fallback email path near the form.

### P2 — Move technical proof behind business relevance

Terms such as authentication, billing, data, integrations, React Native, Expo, and Convex are valuable to technical founders but can make a local business owner feel the studio is not for them. Put outcome and human/business context first; collapse stacks under “Built with” or reduce them to the one capability that matters.

## Cognitive load and emotional journey

The first viewport and portfolio are appropriately simple: one claim, one proof path, and one contact path. Contact is the only major decision point with more than four equal options. Services carries a little too much infrastructure vocabulary before relevance is established. The emotional peak is the home/portfolio proof; the final contact step needs the reassurance of an explicit “what happens next” contract.

## Persona red flags

- **Local nontechnical owner:** The site speaks their language well, but category-first contact intake and infrastructure terminology may make them second-guess whether they are qualified to inquire.
- **Mobile visitor:** Controls appear large enough and mobile navigation is intentional, but five category buttons plus an unconstrained mini-brief create work at the most interruption-prone point.
- **Keyboard or screen-reader visitor:** Global focus treatment and semantic navigation are good. Service selection is not announced programmatically, and toast-only failures are easy to miss.

## Minor observations

- `/contact` metadata says “Free Web Design Consultation,” which narrows the broader product-partner offer.
- “Start a project” is consistent but overused; the final conversion point can be more human, such as “Talk through the problem.”
- Portfolio capability labels look like filters but do not filter.
- The Services nav link now both navigates and exposes a hover/focus menu, which needs a clearer keyboard interaction contract.

## Questions to consider

1. Which evidence would make each service feel truly local and hands-on: a decision note, a workflow before/after, a client artifact, or a founder observation?
2. If a visitor answers just one question on Contact, should it be “What needs to work better?” rather than “Which service are you buying?”
3. Are stacks meant to qualify visitors before a call, or would they be more effective as optional proof after business outcomes?
