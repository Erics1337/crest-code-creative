---
name: Crest Code Creative
description: High-country clarity with product-studio precision.
colors:
  alpine-white: "#F6F8F6"
  snow: "#FFFFFF"
  graphite: "#151A19"
  evergreen: "#21443E"
  steel-blue: "#477681"
  glacial: "#B9CFD2"
  cobalt-marker: "#315CF5"
  granite: "#D8DBD6"
  rule: "#B8BFBA"
typography:
  display:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "clamp(3.75rem, 9vw, 8.5rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 5rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.11em"
rounded:
  control: "999px"
  image: "2px"
  panel: "8px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.snow}"
    rounded: "{rounded.control}"
    padding: "14px 22px"
  button-primary-hover:
    backgroundColor: "{colors.evergreen}"
    textColor: "{colors.snow}"
    rounded: "{rounded.control}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.graphite}"
    rounded: "{rounded.control}"
    padding: "13px 21px"
---

# Design System: Crest Code Creative

## Overview

**Creative North Star: "High Country Field Office"**

Crest Code feels like a small, highly capable product studio working from a field office at the edge of the mountains: observant, precise, resourceful, and close to the people it serves. The visual system pairs Bay Area editorial discipline with Colorado clarity: alpine light, graphite equipment, evergreen depth, steel-blue water, and expansive landscape rhythm.

The system is image-led and confident without presenting as a large anonymous agency. It uses generous negative space, asymmetrical editorial grids, concise outcome language, and small field-note annotations to make evidence easy to scan. Natural references stay abstract and functional; the work should never resemble resort marketing or generic outdoor branding.

**Key Characteristics:**
- Cinematic project imagery with decisive crops
- Editorial scale shifts between serif display and plainspoken sans-serif copy
- Fine rules, coordinates, index numbers, and restrained survey marks
- Cool alpine surfaces with graphite structure and sparse cobalt wayfinding
- Flat, tactile composition with motion used for reveal and orientation

## Colors

The palette combines clean alpine whites and graphite with evergreen, steel-blue water, and a scarce cobalt route marker. It deliberately avoids Link Loom's cream, dark green, and orange identity.

### Primary
- **Alpine White** (`#F6F8F6`): Default atmospheric ground for editorial sections.
- **Graphite** (`#151A19`): Primary text, dark fields, and decisive controls.
- **Evergreen** (`#21443E`): Brand anchor for selected surfaces and local context.

### Secondary
- **Steel Blue** (`#477681`): Supporting accent for service and process groupings.
- **Cobalt Marker** (`#315CF5`): Scarce emphasis for calls to action, route markers, and key outcomes.
- **Glacial** (`#B9CFD2`): Quiet field tint and illustrated data layer.

### Neutral
- **Snow** (`#FFFFFF`): Reading surfaces and high-contrast light fields.
- **Granite** (`#D8DBD6`): Secondary panels and inactive states.
- **Rule** (`#B8BFBA`): Dividers, card boundaries, and structural grid lines.

**The Cobalt Marker Rule.** Cobalt marks consequential action or one focal fact and should remain under roughly five percent of a view.

## Typography

**Display Font:** Archivo (with Arial fallback)
**Body Font:** Archivo (with Arial fallback)
**Editorial Font:** Source Serif 4 (with Georgia fallback)
**Label/Mono Font:** SF Mono-compatible system monospace

**Character:** Archivo brings the crisp, assured scale of a contemporary product studio. Source Serif 4 appears only for human perspective, testimony, and reflective notes. Monospace is reserved for real code or measurement rather than used as a technical costume.

### Hierarchy
- **Display** (400, `clamp(3.75rem, 9vw, 8.5rem)`, 0.9): One expressive statement per major surface.
- **Headline** (600, `clamp(2.25rem, 5vw, 5rem)`, 0.98): Section and case-study claims.
- **Title** (600, 1.25–2rem, 1.1): Project and component titles.
- **Body** (400, 1rem–1.25rem, 1.55–1.7): Plain-language narrative with a 68ch maximum.
- **Label** (600, 0.75rem, 0.11em, uppercase): Sparse metadata and field annotations.

**The Two Voices Rule.** Archivo carries the offer, facts, and action; Source Serif carries human perspective. Do not use both to compete at the same scale.

## Layout

Use a twelve-column editorial grid on large screens with visible asymmetry: images may span seven or eight columns while outcome text occupies the remaining field. Content width tops out near 1440px, with outer gutters scaling from 20px on phones to 48px on desktop. Vertical rhythm is expansive, generally 80–144px between major sections.

Project lists should vary composition while retaining a repeatable metadata rail. Mobile collapses to one reading order, keeps labels close to their subjects, and favors full-width imagery over miniature grids. Decorative coordinates and rules may simplify, but content and actions remain unchanged.

## Elevation & Depth

The system is flat by default. Depth comes from overlapping image plates, tonal paper changes, inset rules, and occasional offset borders rather than soft dashboard shadows. Hover may lift an image by 2–4px with a crisp shadow, but static reading surfaces remain materially flat.

**The Field Table Rule.** Content should feel arranged on a working surface, not floated inside a stack of generic cards.

## Shapes

Images and editorial panels use nearly square corners (2–8px) to preserve a printed, architectural character. Interactive controls use pill shapes for comfortable touch targets and clear contrast with the rectilinear content. Fine one-pixel rules and occasional clipped corner or survey-tick details establish the field-office grammar.

## Components

### Buttons
- **Shape:** Fully rounded control (`999px`) with a minimum 44px touch target.
- **Primary:** Graphite fill, snow label, compact horizontal padding, and an arrow or directional cue when useful.
- **Hover / Focus:** Shift to evergreen, translate no more than 2px, and expose a high-contrast two-pixel focus ring.
- **Secondary:** Transparent with a one-pixel graphite rule; cobalt may appear only as a small directional detail.

### Chips
- **Style:** Small monospace labels with a rule or quiet mist fill; avoid decorative pill clouds.
- **State:** Selected filters become ink-on-paper or mineral-on-clear-paper and remain legible without color alone.

### Cards / Containers
- **Corner Style:** Nearly square (`2px` for imagery, up to `8px` for panels).
- **Background:** Paper tones rather than pure floating white.
- **Shadow Strategy:** Flat at rest; crisp, restrained response on interactive media only.
- **Border:** Fine structural rules when separation is needed.
- **Internal Padding:** 24–48px depending on density.

### Inputs / Fields
- **Style:** Clear paper, one-pixel ink or rule border, compact label above, and 8px corners.
- **Focus:** Cobalt outline plus visible text caret; never glow-only.
- **Error / Disabled:** Pair color with direct text and icon or symbol.

### Navigation
- A quiet fixed or sticky paper header with compact sans-serif links, a visible active route, and one dark consultation action. Mobile navigation must feel like a deliberate index page, not a floating dropdown card.

### Project Plate
- Large image, numeric index, project category, concise business outcome, and a single clear case-study action. Metadata aligns to a consistent rail even when the image composition varies.

## Do's and Don'ts

### Do:
- **Do** let real project imagery carry the first impression.
- **Do** write outcomes in concise, non-technical language before exposing implementation detail.
- **Do** use field annotations to orient, number, and contextualize real information.
- **Do** preserve broad whitespace and strong crop decisions at every breakpoint.
- **Do** make the local Colorado connection feel lived-in and specific.

### Don't:
- **Don't** use generic gradient blobs, floating SaaS cards, or repeated rounded rectangles as the primary visual language.
- **Don't** turn topographic lines, mountains, coordinates, or trail marks into empty decoration.
- **Don't** imitate a large agency through inflated claims or anonymous team language.
- **Don't** let any individual project palette—especially Link Loom's cream/orange system—become the Crest Code identity.
- **Don't** hide essential context behind hover or motion.
