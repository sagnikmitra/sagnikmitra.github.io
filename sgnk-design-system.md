---
version: 1.3
name: sgnk-design-system
description: An editorial research-page aesthetic where pixel-art identity meets Google Sans typography on a calm white canvas, interrupted only by a single electric blue (#1a5cff). The system frames long-form technical writing — flowcharts walk-through-able, paper-deep-links scattered through prose, reading-scaffolding (progress bar, active TOC, drop-cap lead, back-to-top) doing the work of decoration. Chrome stays hairline-thin so the writing and the diagrams carry the page. The voice (earnest, plain, "in my usage" first-person) lives inseparably with the visual restraint — together they form one coherent designer-engineer signature. v1.2 adds the Typography Laws — nine practical rules (hierarchy, proximity, leading-by-size, chunking, placement, font-as-voice, the measure, alignment, contrast). v1.3 adds the Design Principles — a 16-point judgment layer (context-before-verdict, taste, systems-not-screens, hierarchy-across-the-flow, eye choreography, leverage point, friction & flow, grids, transferability, motion-as-spatial-logic, copy-that-decides, prompt-like-a-designer) covering everything beyond type; together they are the human audit pass over any AI-scaffolded surface.

colors:
  primary: "#1a5cff"
  primary-soft: "#e8efff"
  primary-on-dark: "#1a5cff"
  ink: "#0a0a0a"
  ink-soft: "#3a3a3a"
  body: "#0a0a0a"
  body-muted: "#6b6b6b"
  body-faint: "#b8b8b8"
  canvas: "#ffffff"
  canvas-soft: "#f5f5f5"
  hairline: "#e5e5e5"
  surface-code: "#0a0a0a"
  surface-cite: "#0a0a0a"
  on-primary: "#ffffff"
  on-dark: "#e8efff"
  pure-black: "#000000"

typography:
  title-display: { fontFamily: "Google Sans", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.02em" }
  formal-title: { fontSize: 19px, fontWeight: 600, lineHeight: 1.35, letterSpacing: "-0.01em" }
  subtitle: { fontSize: 18px, fontWeight: 400, lineHeight: 1.5 }
  lead: { fontSize: 19px, fontWeight: 400, lineHeight: 1.6, firstLetter: "58px / 800 / primary / float left" }
  section-heading: { fontSize: 30px, fontWeight: 800, lineHeight: 1.18, letterSpacing: "-0.02em" }
  sub-heading: { fontSize: 18px, fontWeight: 700, lineHeight: 1.35 }
  body: { fontSize: 16px, fontWeight: 400, lineHeight: 1.65 }
  pull-quote: { fontSize: 17px, fontWeight: 400, lineHeight: 1.55 }
  readout: { fontSize: 14.5px, fontWeight: 400, lineHeight: 1.62 }
  kicker-mono: { fontFamily: "Google Sans Code", fontSize: 12px, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }
  kicker-mono-small: { fontFamily: "Google Sans Code", fontSize: 10px, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" }
  eyebrow: { fontSize: 12px, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" }
  topbar-brand: { fontSize: 22px, fontWeight: 700, letterSpacing: "0.04em" }
  topbar-tagline: { fontSize: 15px, fontWeight: 600, letterSpacing: "0.01em" }
  topbar-nav: { fontSize: 14px, fontWeight: 600, letterSpacing: "0.02em" }
  meta-strip: { fontSize: 13px, fontWeight: 400, lineHeight: 1.4 }
  button: { fontSize: 13px, fontWeight: 600 }
  paperlink: { fontSize: 13px, fontWeight: 600, lineHeight: 1.5 }
  code-block: { fontFamily: "Google Sans Code", fontSize: 13px, fontWeight: 400, lineHeight: 1.6 }
  code-inline: { fontFamily: "Google Sans Code", fontSize: "0.92em" }
  caption-mono: { fontFamily: "Google Sans Code", fontSize: 12px, fontWeight: 400, lineHeight: 1.5 }
  table-th: { fontSize: 12px, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" }
  table-body: { fontSize: 14px, fontWeight: 400, lineHeight: 1.5 }
  toc-item: { fontSize: 14px, fontWeight: 500, lineHeight: 1.65 }
  footer-small: { fontFamily: "Google Sans Code", fontSize: 11px, fontWeight: 400 }
  diagram-node: { fontFamily: "Google Sans Code", fontSize: 12px, fontWeight: 400, lineHeight: 1.4 }
  chip: { fontFamily: "Google Sans Code", fontSize: 10px, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" }
  brand-logo: "image asset (sgnk.png) — pixel-art Silkscreen, never typeset"

rounded:
  none: 0px
  sm: 2px
  md: 8px
  lg: 12px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 18px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 64px
  header-top: 72px
  reading-column: 760px

elevation:
  none: "none"
  hairline: "1px solid {colors.hairline}"
  topbar-rest: "border-bottom: 1px solid {colors.hairline}"
  topbar-scrolled: "box-shadow: 0 4px 24px rgba(10, 10, 10, 0.06); border-bottom-color: transparent"
  node-rest: "0 1px 3px rgba(10, 10, 10, 0.06)"
  node-rest-blue: "0 1px 3px rgba(26, 92, 255, 0.12)"
  node-hover: "0 8px 20px rgba(26, 92, 255, 0.14); transform: translateY(-2px)"
  to-top-button: "0 6px 20px rgba(10, 10, 10, 0.18)"
  focus-ring: "outline: 2px solid {colors.primary}; outline-offset: 2px"

motion:
  micro: "transition: opacity .15s ease"
  ui: "transition: box-shadow .2s ease, border-color .2s ease"
  node-lift: "transition: transform .13s ease, box-shadow .13s ease"
  progress-fill: "transition: width .08s linear"
  smooth-scroll: "scroll-behavior: smooth"
---

## Overview

sgnk.ai's writing surface is **an editorial research-page built like a museum monograph**: a single 760px reading column, a pixel-art logo strip at the top, hairline-thin chrome, and a single electric blue (`{colors.primary}` — #1a5cff) carrying every interactive signal. Long-form technical writing sits in flowing Google Sans, broken by **flowcharts that explain themselves** via blue-bordered "How to read it" walk-throughs, **pull-quotes** for one-line theses, and **paper deep-links** scattered through the prose handing off to the formal PDF. Decoration is replaced with **reading scaffolding** — a top reading-progress bar, an active-section-highlighting TOC, a drop-cap on the lead paragraph, a back-to-top floating button, a topbar that lifts on scroll. Chrome recedes; the writing carries the page.

The chassis is unusually disciplined. Every page is one reading column, one accent color, two typefaces (Google Sans for everything textual, Google Sans Code for code, captions, and kickers). Pixel-art lettering (`Silkscreen`) lives **only in image assets** — the `sgnk.ai` topbar wordmark, the `sagnik → sgnk · ai` lightrail hero, the corner mark — never as body type. Square corners dominate; the only rounding is a hairline 8px on diagram nodes, 12px on diagram cards, and a true pill (`{rounded.pill}`) on the back-to-top button. The system has **zero gradients, zero shadow chrome, one elevation rule** (a soft 8px lift under diagram nodes on hover), and a single hard-edged code block with a blue left border.

The voice — earnest, plain, "in my usage" first-person, ~one bracketed aside per 1000 words, never snark — is **inseparable from the visual restraint**. Together they form a designer-engineer signature: a long-form post here reads as a person who happens to have rigorous taste, not a brand performing rigor.

**Key Characteristics:**
- Single 760px-wide reading column; full-bleed only for the topbar, lightrail hero, and footer.
- One accent: Electric Blue (`{colors.primary}` — #1a5cff). Every link, kicker, blue diagram node, pull-quote border, button-primary, drop-cap, paperlink — all one blue.
- Two typefaces: Google Sans (text) and Google Sans Code (code, captions, kickers). Pixel-art `Silkscreen` is the logo, never typeset.
- Square corners as the default; one 8px / 12px / pill scale used sparingly and precisely.
- Hairline borders everywhere — `{colors.hairline}` 1px on table rows, TOC, figure outlines, topbar separator, footer.
- One drop-shadow rule, and only on hover for diagram nodes (`{elevation.node-hover}`); chrome stays flat at rest.
- Reading scaffolding takes the place of decoration: progress bar, active-TOC, drop-cap lead, back-to-top, topbar lift-on-scroll, paperlink deep-jumps.
- Flowcharts are accompanied by `readout` walk-throughs ("How to read it") that narrate the diagram in the writer's voice — the diagrams *explain themselves*.
- "How to cite this work" + BibTeX + plain-text + Copy buttons live at the bottom of every page — research artifact, not blog post.

## Contents

Jump to the section you need — this is a load-on-demand reference, not a read-top-to-bottom doc.

- [Drop-in CSS](#drop-in-css) — `:root` custom properties; paste-first starting point.
- [Starter Article Shell](#starter-article-shell) — copy → rename → fill workflow.
- [Minimum Viable Post Checklist](#minimum-viable-post-checklist) — the publish gate.
- [Colors](#colors) · [Typography](#typography) · [Layout](#layout) · [Elevation & Depth](#elevation--depth) · [Shapes](#shapes) — the token foundations.
- [Typography Laws](#typography-laws--direction-not-decoration) — the nine practical rules behind the tokens; **the audit pass for any AI-scaffolded page**.
- [Design Principles](#design-principles--the-judgment-layer) — the 16-point judgment layer beyond type (composition, flow, motion, copy, systems thinking, the AI-era method).
- [Brand Assets](#brand-assets) — logo inventory + path discipline.
- [Components](#components) · [State Chips](#state-chips) — paste-ready markup per component.
- [Sub-brand Variants](#sub-brand-variants) — what inheriting surfaces keep vs. change.
- [Information Architecture](#information-architecture) — URL + asset layout.
- [Accessibility](#accessibility) — skip-link, focus, contrast floors.
- [SEO, OG & Structured Data](#seo-og--structured-data) — meta tags, OG card, JSON-LD, sitemap.
- [Print Stylesheet](#print-stylesheet) · [Interactive States](#interactive-states) — `@media print` + hover/focus/active.
- [Do's and Don'ts](#dos-and-donts) — the drift checklist for audits.
- [Responsive Behavior](#responsive-behavior) — breakpoints.
- [Voice & Visual Pairing](#voice--visual-pairing) — why prose and chrome are one system.
- [Extending the System: A Worked Example](#extending-the-system-a-worked-example) · [Iteration Guide](#iteration-guide) — adding components without drift.
- [Known Gaps (v1.1)](#known-gaps-v11) — what is not yet specified.

## Drop-in CSS

Paste these custom properties into the `:root` of any new sgnk.ai surface. Every component in this system resolves against them; nothing else in the CSS should reference raw hex values, pixel sizes, or motion durations directly.

```css
:root {
  /* === Color === */
  --blue: #1a5cff;
  --blue-soft: #e8efff;
  --ink: #0a0a0a;
  --ink-soft: #3a3a3a;
  --grey: #6b6b6b;
  --grey-soft: #b8b8b8;
  --grey-bg: #f5f5f5;
  --grey-line: #e5e5e5;
  --code-bg: #0a0a0a;
  --code-fg: #e8efff;
  --canvas: #ffffff;

  /* === Layout === */
  --max: 760px;

  /* === Spacing (8px base) === */
  --gap-xxs: 4px;
  --gap-xs:  8px;
  --gap-sm:  12px;
  --gap-md:  18px;
  --gap-lg:  24px;
  --gap-xl:  32px;
  --gap-xxl: 48px;
  --gap-section:   64px;
  --gap-header-top: 72px;

  /* === Radius === */
  --r-none: 0;
  --r-sm:   2px;
  --r-md:   8px;
  --r-lg:   12px;
  --r-pill: 9999px;

  /* === Motion === */
  --t-micro: .15s ease;
  --t-ui:    .2s ease;
  --t-node:  .13s ease;
}

/* Base resets */
* { box-sizing: border-box; }
html { -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; scroll-behavior: smooth; scroll-padding-top: 80px; }
body {
  margin: 0;
  font-family: 'Google Sans', 'Product Sans', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  color: var(--ink);
  background: var(--canvas);
  font-size: 16px;
  line-height: 1.65;
}
::selection { background: var(--blue); color: var(--canvas); }
:focus-visible { outline: 2px solid var(--blue); outline-offset: 2px; border-radius: var(--r-sm); }

/* Law 7 — lock the body measure; structure spans the full column.
   NB: ch is font-relative — for Google Sans 1ch ≈ 10.3px, so 60ch ≈ 617px ≈ ~88 chars/line
   (a deliberate balance: tighter than the old ~100, slightly above the 60–65 ideal,
   chosen to keep the editorial density of the reading column). */
main p, main li { max-width: 60ch; }   /* ≈ 617px ≈ ~88 CPL */
main p.lead     { max-width: 50ch; }   /* ≈ 611px ≈ ~72 CPL (19px lead) */
figure, table, pre, .diagram, .flow { max-width: none; }

/* Fonts */
@import url('https://fonts.googleapis.com/css?family=Google+Sans:400,500,600,700,800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Google+Sans+Code:wght@400;500;600&display=swap');
```

### Tailwind config (optional)

If a project uses Tailwind, mirror the token system into `tailwind.config.js` instead of fighting it:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        blue: { DEFAULT: '#1a5cff', soft: '#e8efff' },
        ink: { DEFAULT: '#0a0a0a', soft: '#3a3a3a' },
        grey: { DEFAULT: '#6b6b6b', soft: '#b8b8b8', bg: '#f5f5f5', line: '#e5e5e5' },
      },
      fontFamily: {
        sans: ['Google Sans', 'Product Sans', 'system-ui', 'sans-serif'],
        mono: ['Google Sans Code', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: { reading: '760px' },
      borderRadius: { none: '0', sm: '2px', md: '8px', lg: '12px', pill: '9999px' },
    },
  },
}
```

## Starter Article Shell

A drop-in HTML scaffold lives at [`sgnk-article-shell.html`](./sgnk-article-shell.html) in this repo. It carries the complete CSS, full topbar + lightrail hero + paper header + main column + footer + reading-progress / active-TOC / back-to-top JavaScript, plus a skip-to-content link and the `@media print` stylesheet. **Copy it as the starting point for any new sgnk Writes / research piece**, then replace the `{{PLACEHOLDERS}}` and fill the prose.

To use it:

```bash
# From sagnikmitra.github.io repo root.
# The shell lives at the repo root; the brand PNGs currently live under harness/.
cp sgnk-article-shell.html  <slug>/index.html
cp harness/sgnk-lightrail.png <slug>/
cp harness/sgnk.png           <slug>/
# Edit <slug>/index.html — replace {{PLACEHOLDERS}}, add prose
```

The shell mirrors `harness/index.html` (the canonical reference implementation) but stripped of harness-specific content. It is the **operational v1.1** entry point — opening a new piece without the shell is allowed but adds ~3 hours of re-wiring the topbar, hero, JS, and breakpoints that this file already encodes.

## Minimum Viable Post Checklist

Before publishing any sgnk Writes piece, it **must** carry:

- [ ] **Topbar** with brand-group (`sgnk.ai · Craft. Harness. Deploy.`) + `sgnk` pixel logo link → `https://sgnk.ai`.
- [ ] **Lightrail hero image** (`sgnk-lightrail.png`) — edge-to-edge, 3:1.
- [ ] **Eyebrow** — `sgnk Writes · <YEAR>` (or appropriate sub-brand kicker).
- [ ] **h1.title** — the iconic short title (with the period).
- [ ] **formal-title** — the longer formal title (under the small `THE PAPER` / `THE PIECE` kicker, in a blue-bordered block).
- [ ] **subtitle** — one short paragraph in the writer's voice.
- [ ] **Meta strip** — Author, Published, Reading time, Status.
- [ ] **Actions** — at least `Cite this work` + `Start reading` buttons; primary CTA (`Download paper`) if a formal PDF exists.
- [ ] **TOC** — `What's inside`, anchor-linked to every `<h2 id="sN">`.
- [ ] **§ 01 lead paragraph** wrapped in `<p class="lead">` so the drop-cap renders. Exactly one drop-cap per page.
- [ ] **At least one** of: a pull-quote (`.pull`) thesis, a flowchart (`<figure class="diagram">`) with a `.readout` walk-through.
- [ ] **References list** (`#refs`) with anchor-targets matching inline `[<a href="#refN">N</a>]` markers.
- [ ] **Cite block** (`#cite`) with BibTeX + plain text + Copy buttons.
- [ ] **Footer** with brand wordmark, tagline, nav, copyright.
- [ ] **Reading scaffolding**: progress bar, topbar lift-on-scroll, active-TOC highlight, back-to-top button — all four behaviors wired in the JS at the bottom.
- [ ] **OG / Twitter meta tags** with a designed share card image (1200×630 — see _SEO, OG & Structured Data_ below).
- [ ] **Skip-to-content link** (`<a class="skip-link" href="#main">`) — accessibility floor.
- [ ] **Absolute asset paths** (`/<slug>/sgnk.png` etc.) — Vercel serves the no-trailing-slash URL and relative paths break.

If any item is missing, the piece is not ready to publish. The shell file enforces the structure; the checklist enforces the content.

## Colors

> **Canonical reference page:** [sgnk.ai/harness](https://sgnk.ai/harness). The token system is intended to extend identically to future `sgnk Writes` pieces, the `/writing` index, and the `sgnk.ai/` homepage.

### Brand & Accent
- **Electric Blue** (`{colors.primary}` — #1a5cff): The single accent. Carries every interactive signal: hyperlinks (default + hover), the kicker dash + label above section headings, the pull-quote left border, the lead drop-cap, the readout left border, the diagram blue nodes and connector arrows (`↓` / `→`), the active-TOC highlight, the button-primary fill, the paperlink dashed underline, the reading-progress bar, the back-to-top hover, the brand wordmark `.ai` and `sgnk.ai` topbar accent. **No second accent exists.** Hover variations darken to ink (`{colors.ink}`), never shift hue.
- **Soft Blue Wash** (`{colors.primary-soft}` — #e8efff): The pull-quote background, the table-row hover background, the cite-block foreground (text color against the dark cite surface). A whisper of the accent used as a calm fill.
- **Primary on Dark Surface** (`{colors.primary-on-dark}` — #1a5cff): Identical hex to primary. The accent holds its readability against the deep ink surface (`{colors.surface-code}` / `{colors.surface-cite}`), so no shifted-blue variant is needed.

### Surface
- **Canvas White** (`{colors.canvas}` — #ffffff): The dominant page surface.
- **Canvas Soft** (`{colors.canvas-soft}` — #f5f5f5): The signature "research-page" off-white. TOC fill, code-inline chips, diagram-figure container backgrounds.
- **Hairline** (`{colors.hairline}` — #e5e5e5): The 1px workhorse — every non-accent border in the system.
- **Ink Surface (Code/Cite)** (`{colors.surface-code}` / `{colors.surface-cite}` — #0a0a0a): The dark code-block and cite-block fills.
- **Pure Black** (`{colors.pure-black}` — #000000): Reserved for the **black panel of the lightrail hero asset only**. Never used in CSS chrome.

### Text
- **Ink** (`{colors.ink}` — #0a0a0a): All headlines, body, table cells, button text on white.
- **Ink Soft** (`{colors.ink-soft}` — #3a3a3a): The subtitle, the readout body, the footer nav links.
- **Body Muted** (`{colors.body-muted}` — #6b6b6b): Meta-strip labels, figure/listing captions, the footer body.
- **Body Faint** (`{colors.body-faint}` — #b8b8b8): The footer copyright micro-line.
- **On Primary** (`{colors.on-primary}` — #ffffff): Text on the blue button-primary and on the cite-copy button.
- **On Dark** (`{colors.on-dark}` — #e8efff): Code-block + cite-block foreground (soft blue-wash on ink, not pure white).

### Hairlines & Borders
The single hairline tone (`{colors.hairline}` — #e5e5e5) carries every non-accent border. Borders are **always** hairline-thin (1px) except for the deliberate **4px primary** on pull-quotes and TOCs and the **3px primary** on readouts and the formal-title, which act as accent-bar typographic dividers, not chrome.

### Brand Gradient
**No decorative gradients.** The lightrail hero asset supplies any "atmospheric" interest via flat color panels.

### Contrast (WCAG AA)
- Body text (`{colors.ink}` on `{colors.canvas}`): **20.2 : 1** — AAA.
- Blue links (`{colors.primary}` on `{colors.canvas}`): **5.16 : 1** — AA passes for body text.
- Blue on `{colors.canvas-soft}` (TOC, diagram figures): **4.96 : 1** — AA passes.
- Blue on `{colors.surface-code}` (code-block inline links): **3.95 : 1** — AA Large only. **Inline links inside code blocks should rely on underline + bold, not color alone.**
- Body muted (`{colors.body-muted}` on `{colors.canvas}`): **5.74 : 1** — AA passes.
- Body faint (`{colors.body-faint}` on `{colors.canvas}`): **2.14 : 1** — *fails AA*. Reserved for **decorative micro-copy only** (footer copyright); never for content the reader needs.

**Contrast is not only color (Law 9).** The floors are 4.5:1 for normal body text and 3:1 for large text (≥18px bold or ≥24px regular) — but size contrast, weight contrast, and style contrast carry hierarchy too. **Never lean on color alone** to separate two things (the system already applies this: dark-code-block links use underline + weight, not hue). The classic failure is light-grey-on-white that "looks clean" and can't be read in sunlight or on a cheap panel. And because AI-generated designs repeat the contrast mistakes baked into their training data, **check every generated surface manually** — Stark, the WebAIM contrast checker, or Figma's built-in checker. It takes seconds and prevents a real accessibility failure. See [Law 9](#law-9--contrast-makes-the-path-visible).

## Typography

### Font Family
- **Text & UI:** `Google Sans, Product Sans, system-ui, -apple-system, sans-serif`.
- **Code, Captions, Kickers:** `Google Sans Code, ui-monospace, SFMono-Regular, Menlo, monospace`.
- **Logo Lettering:** `Silkscreen` (pixel-art display face) — **rendered as PNG assets only**.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.title-display}` | clamp(32, 5vw, 52)px | 800 | 1.08 | -0.02em | The piece title under the eyebrow |
| `{typography.section-heading}` | 30px | 800 | 1.18 | -0.02em | Numbered `§` section headings |
| `{typography.sub-heading}` | 18px | 700 | 1.35 | -0.005em | Sub-headings within sections |
| `{typography.formal-title}` | 19px | 600 | 1.35 | -0.01em | The formal title under the iconic title |
| `{typography.lead}` | 19px | 400 | 1.6 | 0 | First paragraph of `§ 01` (drop-cap) |
| `{typography.subtitle}` | 18px | 400 | 1.5 | 0 | Casual subtitle under formal-title |
| `{typography.pull-quote}` | 17px | 400 | 1.55 | 0 | Pull-quote body |
| `{typography.body}` | 16px | 400 | 1.65 | 0 | Default paragraph |
| `{typography.readout}` | 14.5px | 400 | 1.62 | 0 | "How to read it" body |
| `{typography.toc-item}` | 14px | 500 | 1.65 | 0 | TOC entries (700 + blue when active) |
| `{typography.table-body}` | 14px | 400 | 1.5 | 0 | Table cells; references |
| `{typography.meta-strip}` | 13px | 400 | 1.4 | 0 | Header meta strip; footer body |
| `{typography.button}` | 13px | 600 | 1.0 | 0 | Action buttons |
| `{typography.paperlink}` | 13px | 600 | 1.5 | 0 | "→ in the paper" links |
| `{typography.code-block}` | 13px | 400 mono | 1.6 | 0 | Listings, BibTeX, JSON |
| `{typography.diagram-node}` | 12px | 400 mono | 1.4 | 0 | Inside diagram node cards |
| `{typography.eyebrow}` | 12px | 600 | 1.0 | 0.14em uppercase | `sgnk Writes · YEAR` |
| `{typography.kicker-mono}` | 12px | 600 mono | 1.0 | 0.12em uppercase | `— § 04`; TOC label |
| `{typography.caption-mono}` | 12px | 400 mono | 1.5 | 0 | Figure / Table / Listing captions |
| `{typography.kicker-mono-small}` | 10px | 600 mono | 1.0 | 0.14em uppercase | Pull-quote labels; chip; cite copy |
| `{typography.footer-small}` | 11px | 400 mono | 1.5 | 0 | Footer copyright |
| `{typography.topbar-brand}` | 22px | 700 | 1.0 | 0.04em | `sgnk.ai` wordmark |
| `{typography.topbar-tagline}` | 15px | 600 | 1.0 | 0.01em | `Craft. Harness. Deploy.` |
| `{typography.topbar-nav}` | 14px | 600 | 1.0 | 0.02em | Topbar nav links |
| `{typography.code-inline}` | 0.92em | 400 mono | inherit | 0 | Inline `<code>` chips |

### Principles

- **Two faces, two jobs.** Google Sans for prose; Google Sans Code for code, captions, kickers. The split is the design system.
- **Reverent capitalization, not decorative.** Sentence-case headings; `UPPERCASE` is functional (kickers, eyebrows, table headers, pull-quote labels).
- **Tight tracking at display sizes; default at reading sizes.** `-0.02em` on the title and `h2`; everything else at `0`.
- **Wide tracking only on micro-uppercase.** `+0.04em` on the topbar brand; `+0.12em` to `+0.14em` on all mono kickers / eyebrow.
- **Body at 16px / 1.65, not 17px / 1.5.** sgnk.ai's reading pace.
- **Weight ladder:** 400 / 500 (TOC items only) / 600 / 700 / 800. Weight 500 outside the TOC, and weight 800 outside `h1` / `h2`, are anti-patterns.
- **Line-height context-specific.** Headings 1.08–1.35 (tight). Body 1.65 (relaxed). Pull-quote 1.55. Code 1.6. Captions 1.4–1.5. The rule behind the numbers: **leading scales inverse to size** — bigger type, tighter multiplier (see [Law 3](#law-3--line-height-controls-reading-comfort-and-scales-inverse-to-size)).
- **The values are half the story.** These tokens are *what*; the [Typography Laws](#typography-laws--direction-not-decoration) section is *why* — hierarchy, proximity, leading-by-size, chunking, placement, font-as-voice, the measure, alignment, and contrast. Run the laws as an audit pass on any page, especially an AI-scaffolded one.

### Note on Font Substitutes
Google Sans is loaded via the Google Fonts CSS endpoint. For non-Google environments, the closest open replacement is **Plus Jakarta Sans** or **DM Sans** — both on Google Fonts, free-licensed. **Inter** is a passable but looser substitute; tighten display tracking by an additional `-0.005em` when swapping in Inter. Google Sans Code is ungated and needs no substitute. As **Law 6** below puts it, Inter is the plain grey t-shirt of UI design — it works everywhere and says nothing; sgnk deliberately chooses Google Sans so the type carries a little personality.

## Typography Laws — Direction, Not Decoration

The token tables above give you the *values*. These nine laws give you the *judgment* — why one value beats another in context. Typography here is not the thing you style after the layout is done; **typography is the layout**. Strip the type out of any sgnk surface — every heading, label, button, error, empty state, pricing row — and what is left is colored rectangles. Type is what people actually read, and reading order is a thing you *design*, not a thing that happens to you. The job of type is **direction, not decoration**: tell the eye where to look first, what belongs together, where to pause, what to trust, and where to act.

> **Why this section exists — the AI angle.** Most sgnk pages are now AI-scaffolded (`sgnk-next`, `sgnk-react`, `gvc`, generated landing pages). AI tools produce a whole screen in seconds and most of them look *fine* from a distance — which is exactly the problem. A model returns the **average of what already exists**, and the average of the web is weak hierarchy, generic spacing, unchecked contrast, and the safest, most forgettable font. "Fine" reads as a template; typography is what separates a template from a product someone trusts. **Run these nine laws as an explicit audit pass over anything a model generated** — they are the human-judgment layer the scaffold can't supply.

Each law below carries: the principle, the cognitive reason it holds, the **sgnk rule** (bound to tokens), and an **Audit** check to run against a built page.

### Law 1 — Hierarchy controls attention
What the eye sees first is a decision, not an accident. Size, weight, and color decide reading order before a single word is read. *(Von Restorff / isolation effect: the brain notices and remembers the element that looks different from its neighbours. Aesthetic-usability effect: a clearly-ranked page is perceived as easier to use before it has been used.)*
- **sgnk rule.** One element wins per view. The hierarchy ladder is the type scale — `{typography.title-display}` → `{typography.section-heading}` → `{typography.sub-heading}` → `{typography.body}` → muted/faint — plus the single accent `{colors.primary}` for the one thing that should be touched. Make difference *obvious*: a half-step of size or weight reads as a mistake, not a level. Never raise importance with a second color — raise it with size, weight, or the accent.
- **Audit.** Squint at the screen. If two things fight for first read, or nothing wins, the hierarchy is flat — widen the size/weight gap or pull the accent back to a single target.

### Law 2 — Spacing shows relationship
Space is the cheapest, most-ignored tool in the system, and it is what tells people *what belongs together*. *(Gestalt proximity: things close together feel related; things far apart feel separate.)* A heading floating equidistant between two paragraphs belongs to neither — pull it toward the one it introduces and the relationship is instantly legible. Nothing else has to change.
- **sgnk rule.** **Asymmetric spacing is mandatory:** the gap *above* a heading is always larger than the gap *below* it, so the heading binds to the content it owns. This is already encoded — `h2` carries `margin-top: 76px` with only `padding-top: 22px` above its kicker and a tight gap to the body that follows. The same law governs every pair: label↔input, section-title↔content, card padding, the distance from a price to its CTA. If your spacing does not reflect the relationship, the layout is lying to the user — and they will feel it as "messy" or "off" without being able to name it.
- **Audit.** For every heading and label, measure the space above vs. below. Above must be greater. Equal spacing around a heading is a bug.

### Law 3 — Line height controls reading comfort, and scales *inverse* to size
Leading is reading comfort. The common ~1.5× rule is right for body and wrong for everything large: a 64px heading at 1.5 puts 96px between lines and the words drift apart like they stopped talking. **As font size goes up, the line-height multiplier comes down.**
- **sgnk rule.** Body `{typography.body}` at **1.65**; sub-headings ~**1.3**; large display headings **1.08–1.2** (`{typography.title-display}` ships at 1.08, `{typography.section-heading}` at 1.18 — already correct). Letter-spacing follows the same shape: tighten display tracking (`-0.02em` on title/`h2`), leave body at `0`, and **never** tighten small or caption text — it kills legibility immediately. Body line-height never drops below 1.6.
- **Audit.** Any heading whose lines look detached → multiplier too high for its size. Any body block that feels cramped → below 1.6.

### Law 4 — Chunking controls pace
People do not read interfaces like novels; they scan, jump, and look for anchors. One giant correct paragraph still fails, because the layout is asking the reader to do unnecessary work. *(Miller's law: working memory holds only a few chunks at once — the exact number is debated, the lesson isn't: don't dump everything at once.)* Chunking is **spacing at the macro scale** — the same instinct that sets the gap between a heading and a paragraph also structures a whole page.
- **sgnk rule.** Break content into scannable pieces: short paragraphs, real section headings (`§ 0N` with kicker), `{spacing.section}` (64px) air between blocks, the TOC as the page-level chunk map, bullets only when they genuinely help. The 760px single column plus numbered `h2`s is the chunking chassis — *use it*; don't ship a wall of text inside it. This composes with [[sgnk-writer]]: the prose chunks at the sentence level, the design chunks at the block level.
- **Audit.** Any screen with a paragraph over ~4–5 lines or a section with no internal breaks → re-chunk.

### Law 5 — Placement controls memory
Readers do not give equal attention across a screen — they read the first thing, skim the middle, and hunt for the decision point. *(Serial-position effect: first and last items in a sequence are remembered best; the middle blurs.)* So *where* a thing sits changes whether it sticks.
- **sgnk rule.** **Front-load the point, support in the middle, reinforce/act at the end.** The header block already encodes it — eyebrow → iconic title → formal title → subtitle → meta → actions — context first, action last. Apply the same to any pricing card, onboarding screen, or product page: name + price early (context), features in the middle (scan), CTA where the decision happens (end). Do not bury the key takeaway in the middle of a section.
- **Audit.** Read only the first and last block of each section/card. If they don't carry the context and the action, the placement is fighting attention.

### Law 6 — Font choice is voice
More fonts is not more design — it is usually more confusion. *(Every extra family is another voice in the room; if the voices aren't playing clearly different roles, the page feels harder for no reason.)* The real pairing principle is **contrast, not category** — "a serif and a sans" is a heuristic, not the rule. You want faces clearly different in structure and personality but sharing an underlying quality (x-height, width, proportion) so they feel like they belong to the same room. Two too-similar fonts are the worst case: the brain registers a difference it can't explain.
- **sgnk rule.** The system is already at the disciplined end: **one strong family (Google Sans) carrying all prose, plus one mono (Google Sans Code) playing a clearly different role** — code, captions, kickers. That is a contrast pairing by *role*, not a decorative second voice. Do not add a third family. Inter is the plain grey t-shirt — fine, safe, anonymous; sgnk picks Google Sans precisely so the type says something. Hierarchy comes from weight/size/style within the family, never from font-swapping per section.
- **Audit.** Count families. More than the two sanctioned roles → drift. Two faces that look *almost* the same → the bad pairing; collapse to one.

### Law 7 — Line length controls rhythm (the measure)
Too wide and the eye struggles to find the next line; too narrow and the line breaks chop the rhythm. The comfortable **measure is 45–75 characters per line, sweet spot 60–65** — roughly **600–700px of content for a 16px body**. For responsive work, think in *measure*, not breakpoints: **lock the measure, let the margins flex.**
- **sgnk rule + known variance (verified, then fixed).** The reading column is `{spacing.reading-column}` (760px); with 24px gutters the body content width is **712px**. Measured live on `sgnk.ai/harness` (16px Google Sans, canvas glyph metrics), uncapped body paragraphs ran **~100 characters per line** — well above the 45–75 target, because Google Sans is narrower than the "typical" font the 600–700px pixel proxy assumes. **Watch out for `ch`:** it is font-relative (1ch = the width of `0`), and Google Sans's `0` is wide (~10.3px), so a naive `max-width: 70ch` resolves to ~720px and caps *nothing* — verify the rendered character count, never trust the `ch` number. **Resolution (applied):** cap the *paragraph* measure while figures, tables, and code keep the full 760px column — "lock the measure, let the structure breathe":

```css
/* Law 7 — lock the body measure; structure spans the full column */
main p, main li { max-width: 60ch; }   /* ≈ 617px ≈ ~88 CPL for Google Sans */
main p.lead     { max-width: 50ch; }   /* ≈ 611px ≈ ~72 CPL (19px lead)     */
figure, table, pre, .diagram, .flow { max-width: none; }
```

`60ch` lands the body at **~88 characters** — a deliberate balance: meaningfully tighter than the old ~100, while keeping the editorial density the reading column is known for (a strict 60–65 ideal would need ~50ch / ~515px, which narrows the column more than the research-page aesthetic wants). The lead, being 19px, lands ~72 CPL — inside the band. If a future surface wants a globally tighter measure, drop the cap toward `50ch` or reduce `{spacing.reading-column}`.
- **Audit.** Drop a 3-line paragraph on the page and count characters on a full line — *count, don't read the `ch` value.* Target ≤ ~90 for this editorial surface (≤ 75 for a stricter one). Under ~45 → too narrow for body.

### Law 8 — Alignment gives the eye a path
For any left-to-right language, **left-align body text** — it gives every new line the same starting point, which means faster reading and less fatigue. Centering is not evil; it is for *short* things — a hero headline, a one-line quote, a small emotional block. The moment more than 3–4 lines are centered, both ragged edges force the eye to re-hunt for each line start, and the small cost compounds.
- **sgnk rule.** Body, headings, readouts, TOC, tables — all left-aligned (the system already is). Center is reserved for short display moments only, never paragraphs. **Consistency is part of the law:** if headings are left-aligned, sub-headings are too; don't center one card because it "feels nice." Each inconsistency is a micro-friction the reader won't consciously notice but will read as *less reliable*. Good typography is a system, and systems only work when they're consistent.
- **Audit.** Scan for any centered block over 3 lines, or one element aligned against its siblings → fix to the column's default.

### Law 9 — Contrast makes the path visible
None of the other eight laws matter if the text can't be read — not just on your MacBook, but in sunlight, on a cheap panel, with tired or older eyes. **WCAG floors: 4.5:1 for normal body text, 3:1 for large text (≥18px bold or ≥24px regular).** The classic offender is light-grey-on-white because it "looks clean" — users simply can't read it. And **contrast is not only color:** size contrast, weight contrast, and style contrast all carry hierarchy — never lean on color alone.
- **sgnk rule.** The measured [Contrast table](#contrast-wcag-aa) is the source of truth: body ink 20.2:1 (AAA), blue links 5.16:1 (AA), `{colors.body-faint}` is decorative-only because it *fails* AA — never use it for content. Inside dark code blocks, links rely on underline + weight, not hue (3.95:1 is AA-Large only). Because AI-generated designs repeat the contrast mistakes baked into their training data, **check every generated surface manually** — Stark, the WebAIM contrast checker, or Figma's built-in checker; it takes seconds and saves a real accessibility failure.
- **Audit.** Run every text/background pair through a checker. Any body pair under 4.5:1, or any state communicated by color alone, fails.

### Start a screen by asking
When you (or a model) open a new sgnk surface, do **not** start with "which font looks nice." Start with the questions the nine laws answer, in order:

1. What should the user read **first**? *(hierarchy)*
2. What **belongs together**? *(spacing / proximity)*
3. Does the text **breathe** line-to-line? *(line height)*
4. Where should they **pause**? *(chunking)*
5. What must they **remember**, and is it at the start or end? *(placement)*
6. What **voice** should the type carry — and is it doing that with the two sanctioned faces? *(font choice)*
7. Is the **measure** in the 45–75 band? *(line length)*
8. Does every line have a predictable **start**? *(alignment)*
9. Can everyone actually **read it**? *(contrast)*

Done right, typography disappears — the reader just reads, understands, and acts. Done wrong, they feel it immediately: something noisy, something cheap, something harder than it should be. The rules haven't changed in the AI era; the designer applying them with judgment matters more.

## Design Principles — The Judgment Layer

The Typography Laws govern *type*. These principles govern **everything else a designer decides** — composition, flow, motion, copy, systems thinking, and how to work in the AI era without producing the generic average. They are the senior layer: the difference between a page that *looks* fine and a product that *feels* intentional. Each is bound to sgnk and cross-referenced to the relevant Typography Law so nothing is said twice. Run them as an audit alongside the laws — **especially on anything a model scaffolded**, because a generator gives you competent screens and none of this judgment.

> **The one-level-higher test.** Beginners design what they can *see* — a screen, a button, a transition. Seniors design what the screen is *part of* — a flow, a system, a spatial model. Almost every principle below is an instance of thinking one level higher than the artifact in front of you. *(Sources at the end of this section.)*

### A. Judgment over rules

**1. Context before verdict.** There is no "better" without context. The same login screen is right for a consumer app (social buttons up front, fast re-entry) and wrong for a bank (formal, isolated, 2FA — social login *lowers* trust). Before ranking any two options, ask: what is the product, who uses it, on what device, how often, what is the trust threshold? sgnk's own answer is fixed — a research-reading surface for a technical reader who returns to think — which is *why* the chassis is calm and chrome-light. When a new surface (a product UI, a marketing page) doesn't fit that context, re-derive the decision; don't copy the harness reflexively.

**2. Taste is the moat.** AI generates competent layouts instantly, so execution is no longer the edge — judgment is. Taste is not talent; it is exposure. Observe great products, then *reverse-engineer*: why this color, why this radius, why this button here and not there. Over time the brain builds a library of good decisions and better choices become automatic. This whole design system is that library, written down — extend it the same way: study, ask *why*, then encode.

**3. Feel the laws, don't memorize them.** A UX/Gestalt law you can recite is worth less than one you have *felt*. Move elements together until they read as a group (common fate), pull a heading toward its paragraph until the relationship snaps into place (proximity, [Law 2](#law-2--spacing-shows-relationship)) — then break it and watch it fail. Internalized this way, no definition can talk you out of the right call. When extending sgnk, prototype the rule live before committing it to the spec.

**4. Systems, not screens.** A screen is one expression of a problem that lives in many places. A bill row appears in the cart, the receipt, the email, the settings page — so you are not designing a card, you are designing a **master pattern** that must hold across contexts (this is the system's component discipline: one row element, many combinations). Two corollaries: **second-order effects** — every change touches things elsewhere ("if I emphasize this, what am I de-emphasizing?"); and **what you don't design is also design** — the empty, error, and loading states are part of the work, not an afterthought (sgnk already specifies all three — see [Interactive States](#interactive-states)). A senior's mockups always have *more* screens for the same feature, because they designed the system of states, not just the happy path.

**5. Consistency is the work, not a bonus.** A design is a system, and systems only pay off when they're consistent — same spacing, same alignment, same component behaving the same way everywhere. The skill of producing a *repeatable* style (so the 1st, 50th, and 500th asset match) is what separates a directed visual system from a lucky one-off. This is the entire premise of the single-accent, two-typeface, square-corner discipline. Every "but this one looks nicer centered/rounded/in-a-second-blue" is the system leaking.

### B. Composition & flow

**6. Hierarchy across the flow — and emphasis is a budget.** [Law 1](#law-1--hierarchy-controls-attention) ranks attention *within* a view; this ranks it *across a journey*. Visual energy should trend with the job of each step — a storefront runs high-energy (discovery), a product page calms down (decision), a checkout goes quietest of all (trust). Shape cognitive load across screens, not just inside them. And treat **emphasis as a fixed budget**: every bold, color, size bump, or shadow spends from the reader's finite attention. If everything is emphasized, nothing is. The senior move is deciding what *doesn't* stand out — sgnk spends its whole emphasis budget on one accent and one or two type weights.
- **Audit.** Lay the screens of a flow side by side. Does energy trend with intent, or does every screen shout equally? Count emphasized elements per view; if more than ~3, cut back to neutral.

**7. Eye choreography (movement & flow).** A still layout still *moves* — you choreograph the path. It escalates: (i) literal **direction** (an arrow, a gaze); (ii) **weight-driven** flow (size/contrast set the order with no arrows — the elegant default); (iii) **multiple paths** (a main route plus small side-loops that buy time-on-page); (iv) **implied motion** (repetition, progressive scale, blur, directional pattern); (v) **flow disruption** (a deliberate interruption that forces re-engagement at a key point); (vi) **temporal flow** — the one ~99% of designers miss: controlling *when* the eye arrives and *how long it lingers*. Rhythm = **impact → linger → release** (Apple product pages: hero hits hard, specs slow you down, whitespace lets go). sgnk's long-form pacing is exactly this — lightrail impact, prose linger, 96px closing whitespace release.

**8. Leverage point.** Ask "what is the single most important thing here?" — that is the leverage point. Make it dominate with scale, contrast, position, or isolation, then push everything competing into a supporting role. One clear leverage point per view leads the eye even on a busy layout. On a sgnk page the leverage point is the title (or the one blue CTA); the rest is deliberately recessive chrome so it can win.

**9. Friction & flow.** Friction (tight spacing, an interrupting object) is usually a defect — but *strategic* friction is a tool: it grabs the eye and slows the reader at a point that matters. The rule is zoned: smooth reading zones vs. a deliberate friction zone, never friction smeared everywhere. **Good friction grabs; bad friction loses the message.** sgnk's stance is deliberately **low-friction** — calm reading is the product — so its only sanctioned "disruptions" are the single accent and the one hover-lift. Treat friction like seasoning: a pinch for emphasis, never the dish.

**10. Grids & baseline rhythm.** A grid determines hierarchy (span more columns = more dominance), creates white space, and keeps the eye comfortable. sgnk's grid is intentionally minimal: **one 760px reading column** plus the **8px baseline** ([spacing system](#spacing-system)) that aligns type and components — that *is* the grid for reading surfaces. The richer grid vocabulary (column, modular, manuscript, asymmetric, rule-of-thirds, golden-ratio ≈ 1.618) applies when building **composed surfaces** — the homepage, sub-brand landings, OG cards — where you *may* break the grid deliberately for impact (keep most elements aligned, break one). Golden ratio and rule-of-thirds are *starting points* to nudge proportion, not rigid rules. Baseline tip: relate type sizes by multiples of the base leading (e.g. body 16/lead-ish, headings on the same rhythm) so alignment stays crisp.

**11. Transferability.** A design that only works in one perfect setting is a problem, not a solution. The identity must survive being shrunk to a thumbnail, placed on light *and* dark, and moved across formats (mobile, print, OG card, motion). Test by doing exactly that. sgnk's invariant system (one blue, two faces, square corners, pixel mark) is built for transfer — it is recognizably the same brand on a 320px phone, a printed PDF, and a 1200×630 share card. See [Responsive Behavior](#responsive-behavior) and the [OG card spec](#og--share-card-image-ogpng).

### C. Motion

**12. Motion is spatial logic, not decoration.** The standard advice ("don't animate for its own sake; use it for feedback") is the surface. The senior insight: **motion teaches where things live in the system.** A modal that scales up from the strip you tapped says *I belong to that strip*; a side panel slides from the side because that is where it lives; a confirmation scales from center because it is temporary; you move horizontally across a hierarchy and vertically when going deeper. The best motion is **felt, not noticed** — if a user *remembers* a transition, it probably failed its job. When a sgnk surface needs more than the sanctioned set (hover-lift, progress-fill, smooth-scroll, button-scale), the new motion must *explain spatial relationships*, not perform. And when motion is genuinely interactive, model it as **explicit states + transitions** (a state machine — inputs drive transitions), not one flat timeline; ship it as designer-owned `dot-lottie` rather than hand-coded one-offs. This stays subordinate to the system's calm — motion earns its place by clarifying, never by impressing.

### D. Copy

**13. Copy decides, it doesn't describe.** Most interface text either *describes* ("Transform your workflow", "Continue", "No results found") or *decides* — names the problem the user already feels and takes a position ("Stop losing track of who's doing what", "Yes, delete my account", "Try a broader search — most filters here are strict"). Beginners describe; pros decide. Copy that could sit on five other products without anyone noticing is doing a smaller job. This binds directly to [[sgnk-writer]]: the design system hosts the voice, and the voice is a *point of view*, never neutral filler. Buttons, empty states, and errors are copy decisions, not labels.

### E. The AI-era working method

**14. AI returns the average — judgment is the differentiator.** A model gives you the average of what already exists, and the average of the web is generic. That is why these principles and the [Typography Laws](#typography-laws--direction-not-decoration) exist: they are the judgment a generator can't supply. AI did not kill design; it exposed who was only pushing pixels. The edge is knowing what to keep, what to cut, and what makes a thing feel intentional — i.e. taste (#2) applied on top of the scaffold.

**15. Prompt like a designer.** When you drive `sgnk-next` / `sgnk-react` / `gvc` (or any model) to generate a surface, a vague prompt yields a vague, generic result; a sharp prompt narrows the output to a usable starting point. A strong brief states the **goal** (what the user must accomplish), the **context** (who, what product, what device, what matters in the moment), and the **constraints** (platform, tone, hierarchy, density, brand personality, what to avoid) — and breaks the problem **one layer at a time** ("design the restaurant *card*: name, cuisine, rating, price, offer, big appetizing thumbnail; scannable; optimized for comparison" beats "design a food-delivery app"). For sgnk work, the constraints line is half-written for you: *one blue, Google Sans + Google Sans Code, square corners, hairline borders, 760px column, ~88-char body measure (`60ch`), reading-scaffolding not decoration.*

**16. Then run the audit.** Generation gets you to a draft faster; your judgment takes it from acceptable to on-system. The closing step is always the same pass: the **nine Typography Laws** + the **principles above**, plus the contrast check by tool. "Looks fine" is the trap — fine is the average. The audit is where a sgnk surface stops being a template and becomes the brand.

> **Sources.** Principles distilled from: *9 UI/UX Typography Laws*, *5 UI/UX Design Mistakes That Scream You're a Beginner*, *7 Skills To Get Ahead of 99% UI/UX Designers*, and *Interactive UI/UX Animations (LottieFiles State Machines)* — **Saptarshi Prakash** (@saptarshipr); and *The FULL 2026 Guide To Layout & Composition* — **Satori Graphics**. Adapted to and bound by the sgnk system; where a source's advice (heavy grids, decorative motion, high-friction posters) conflicts with sgnk's calm reading-surface stance, the system's restraint wins and the conflict is noted inline.

## Layout

### Spacing System
Base 8px. Tokens: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 18px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 64px · `{spacing.header-top}` 72px.

**Section heading rhythm:** `margin-top: 76px` on every `h2`. `padding-top: 22px` above the kicker. **Header padding:** `72px 24px 48px`. **Main padding:** `0 24px 96px`.

**Proximity & asymmetric spacing (Law 2).** Space is what tells the reader what belongs together. The non-negotiable rule: **the gap above a heading or label is always larger than the gap below it**, so the heading binds to the content it introduces, not the block before it. The `h2` rhythm above encodes this (76px above, tight below); apply the same asymmetry to every label↔input, section-title↔content, and price↔CTA pair. Equal spacing around a heading is a bug, not a style choice — see [Law 2](#law-2--spacing-shows-relationship).

### Grid & Container
- **Reading column:** `760px` max-width.
- **Full-bleed regions:** topbar, lightrail hero, footer.
- **Gutters:** 24px desktop, 22px tablet, 18px mobile.
- **TOC columns:** 2 desktop, 1 mobile.

### Whitespace Philosophy
Whitespace is the page's confidence. Every section starts with at least 64px above its kicker. The 96px below the cite block is intentional — research artifacts close with whitespace, not nav.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat (default) | None | Body, headings, TOC, pull-quote, lead |
| Hairline border | 1px solid `{colors.hairline}` | Table rows, h2 top rule, topbar rest, footer, diagram outline, meta strip |
| Accent border | 3–4px solid `{colors.primary}` left | Pull-quote, TOC, readout, formal-title |
| Topbar scrolled | `0 4px 24px rgba(10,10,10,0.06)` | Lift-on-scroll |
| Node at rest | `0 1px 3px rgba(10,10,10,0.06)` or blue tinted | Diagram nodes |
| Node on hover | `0 8px 20px rgba(26,92,255,0.14); translateY(-2px)` | The single lift motion |
| Back-to-top | `0 6px 20px rgba(10,10,10,0.18)` | Floating action button |
| Focus ring | `outline: 2px solid {colors.primary}; outline-offset: 2px` | All interactive elements via `:focus-visible` |

**Shadow philosophy.** Shadow is functional, not decorative. Used only for interactivity (hover-lift, focus-ring), floating state (back-to-top, topbar scrolled), or ambient presence (node-rest at 6% opacity). It never carves hierarchy.

## Shapes

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | The dominant shape — buttons, code blocks, pull-quotes, TOC, tables, cite block. |
| `{rounded.sm}` | 2px | Inline `<code>` chips; focus-ring inner radius. |
| `{rounded.md}` | 8px | Diagram nodes. |
| `{rounded.lg}` | 12px | Diagram figure container. |
| `{rounded.pill}` | 9999px | Topbar CTA pill, if present. |
| `{rounded.full}` | 9999px (50%) | The back-to-top circular button. |

## Brand Assets

The complete logo inventory. The source PNGs currently live under `harness/` in `sagnikmitra.github.io` (`harness/sgnk.png`, `harness/sgnk-lightrail.png`); `favicon.png` lives at the repo root. Each new piece copies the marks it needs into its own `<slug>/` directory so they serve as page-local absolute paths (`/<slug>/sgnk.png`, `/<slug>/sgnk-lightrail.png`) — see the copy workflow under _Starter Article Shell_.

| Asset | File | Dimensions | Aspect | Use |
|---|---|---|---|---|
| **Lightrail hero** | `sgnk-lightrail.png` | 7036 × 2347 px | 3:1 | Full-bleed hero on every long-form piece. White / blue / black tri-panel. |
| **Corner wordmark** | `sgnk.png` | rasterized pixel art, target render ~26px tall | n/a | Top-right of the topbar; links to `https://sgnk.ai`. |
| **Favicon** | `favicon.png` + `favicon.ico` | 32×32, 16×16 fallback | 1:1 | Browser tab icon, bookmarks. |
| **Apple touch icon** | `favicon.png` (reused) | 180×180 ideally | 1:1 | iOS home-screen shortcut. |

**Source typeface:** all logo lettering is `Silkscreen` (pixel art, on Google Fonts), but the system **never typesets it live** — every appearance is a pre-rendered PNG so sub-pixel rendering is locked in. If sub-brand variants need their own marks, regenerate them as PNGs with the same `Silkscreen` source and pixel grid.

**Path discipline:** Vercel serves the no-trailing-slash URL (`sgnk.ai/harness`) which makes relative asset paths fail. **Always use absolute paths** (`/sgnk.png`, `/sgnk-lightrail.png`, `/favicon.png`) inside any new piece. This is encoded as a hard rule in the article shell.

**Voice of the lightrail:** the three panels — `sagnik` (white) → `s gn k` (blue) → `a i` (black) — are not three logos, they are one identity in motion. The brand thesis (`sagnik → sgnk + ai`) is encoded in the asset's left-to-right read. Cropping the lightrail or showing only one panel breaks the thesis; always render edge-to-edge.

## Components

Each component below is described **with its markup pattern**, so a new piece can copy-paste the structure and replace content. CSS for every component is already in the [drop-in CSS](#drop-in-css) block above and the [`sgnk-article-shell.html`](./sgnk-article-shell.html) starter.

### Reading Progress Bar

3px tall, full-width, fixed top. Width interpolates `0% → 100%` on scroll. Wired by JS in the shell.

```html
<div class="progress" id="progress"></div>
```

### Top Navigation

Sticky 13×28px padded bar, frosted-glass (`backdrop-filter: blur(12px) saturate(1.4)`). Lifts on scroll via the `.scrolled` class added by JS.

```html
<div class="topbar">
  <div class="brand-group">
    <a class="brand" href="/"><b>sgnk</b>.ai</a>
    <span class="tagline">Craft. <b>Harness.</b> Deploy.</span>
  </div>
  <nav>
    <a class="logo-link" href="https://sgnk.ai" aria-label="sgnk.ai">
      <img src="/sgnk.png" alt="sgnk" />
    </a>
  </nav>
</div>
```

### Hero Lightrail Image

Full-bleed image, no padding, hairline bottom border.

```html
<img class="hero-img" src="/sgnk-lightrail.png" alt="sagnik → sgnk · ai" />
```

### Header Paper

The post header block — eyebrow, iconic title, formal title block, subtitle, meta strip, actions.

```html
<header class="paper">
  <div class="eyebrow">sgnk Writes · 2026</div>
  <h1 class="title">The Harness.</h1>
  <p class="formal-title">
    <span class="kicker">The piece</span>
    Multi-Agent Harnessing Architecture and Orchestration Patterns in Specialized Autonomous Systems
  </p>
  <p class="subtitle">
    Pretty much everyone has a multi-agent system now. But after building a few...
  </p>

  <div class="meta">
    <div><span>Author</span> Sagnik Mitra <b>· sgnk</b></div>
    <div><span>Published</span> 2026</div>
    <div><span>Reading time</span> ~13 min</div>
    <div><span>Status</span> Original research</div>
  </div>

  <div class="actions">
    <a href="/harness/paper.pdf" class="btn primary" download>↓ Download the full paper (PDF)</a>
    <a href="#cite" class="btn">⌘ Cite this work</a>
    <a href="#s1" class="btn">→ Start reading</a>
  </div>
</header>
```

### Lead Paragraph (with drop-cap)

The first paragraph of `§ 01`. The CSS `:first-letter` rule renders a 58px blue drop-cap. **Use exactly once per page.**

```html
<p class="lead">
  You will say that why another write-up on multi-agent systems in 2026...
</p>
```

### Section Heading (`h2`)

Each numbered chapter — hairline top rule, mono kicker with a 24×2px blue dash, then the sentence-case headline.

```html
<h2 id="s1"><span class="num">§ 01</span>More agents do not make an architecture.</h2>
```

### Sub-Heading (`h3`)

Used to subdivide long sections. Optional numbered prefix in mono.

```html
<h3><span class="num">4.1</span> Control Plane</h3>
```

### Pull-Quote (`.pull`)

Editorial thesis block — blue-soft fill, 4px blue left border, small uppercase label, body in 17px.

```html
<div class="pull">
  <span class="label">The one idea to hold on to</span>
  Agents can be autonomous inside their own lane, but the system as a whole
  must never be uncontrolled.
</div>
```

### Walk-through Readout ("How to read it")

The signature block that follows every flowchart. White fill, 3px blue left border, the `HOW TO READ IT` mono label, body in `{typography.readout}`.

```html
<div class="readout">
  <span class="lbl">How to read it</span>
  Top to bottom. Every action an agent wants to take walks in at the top, and
  before it is allowed to touch anything it clears three quick checks — does
  it match the <b>schema</b>, does this agent have <b>permission</b>...
</div>
```

### Code Block (`<pre>`)

Dark ink fill, blue-soft text, 4px blue left border, horizontal scroll inside.

```html
<figure class="code">
<pre><code>agent:
  id: verifier.payment_policy.v1
  role: independent_verifier
  allowed_tools:    [policy_lookup, transaction_limit_checker]
  forbidden_tools:  [payment_execute, database_write]
  output_schema:
    decision: approve | reject | repair | escalate</code></pre>
<div class="caption"><b>Listing 1.</b> An agent contract — allowed tools, forbidden tools.</div>
</figure>
```

### Inline Code

Used inside body prose. Soft grey fill, 2px radius.

```html
<p>A verifier that cannot call <code>payment_execute</code> won't pay anyone.</p>
```

### Figure: Diagram

A flowchart container — soft fill, hairline outline, 12px rounded, centered caption underneath.

```html
<figure class="diagram">
  <div class="flow flow-grid">
    <div class="node">Mission Intake</div>
    <span class="sep">→</span>
    <div class="node blue">Specialist Work</div>
    <span class="sep">→</span>
    <div class="node alt">Independent Verification</div>
    <span class="sep">→</span>
    <div class="node blue">Commit State</div>
  </div>
  <div class="caption"><b>Figure 1.</b> Mission-to-commit — state is committed only after verification.</div>
</figure>
```

### Diagram Node

The basic node. Variants: `.blue` (entry/exit emphasis), `.alt` (critical/gate). Hover lifts 2px with a tinted blue shadow.

```html
<div class="node">Default node (white, ink border)</div>
<div class="node blue">Emphasized node (blue text + border)</div>
<div class="node alt">Critical / gate node (ink fill, white text)</div>
```

### Diagram Connectors

Inline glyphs between nodes — `→` horizontal, `↩` loop-back, `↓` vertical (used inside column-direction flows as `<div class="arrow">↓</div>`).

```html
<!-- Inside .flow-grid (horizontal) -->
<span class="sep">→</span>
<span class="sep">↩</span>

<!-- Inside .flow with flex-direction:column (vertical) -->
<div class="arrow">↓</div>
```

### Diagram Layouts

Three containers — `.flow` (basic), `.flow-grid` (horizontal pipeline with `.sep` arrows), `.flow-row` (3-node row that wraps cleanly on mobile).

```html
<!-- Horizontal pipeline -->
<div class="flow flow-grid">
  <div class="node">A</div>
  <span class="sep">→</span>
  <div class="node">B</div>
</div>

<!-- Vertical column flow -->
<div class="flow" style="flex-direction: column; gap: 6px;">
  <div class="node">A</div>
  <div class="arrow">↓</div>
  <div class="node">B</div>
  <div class="arrow">↓</div>
  <!-- 3-node row inside a column flow needs flow-row to wrap on mobile -->
  <div class="flow-row">
    <div class="node">X</div>
    <div class="node">Y</div>
    <div class="node alt">Z</div>
  </div>
</div>
```

### Table

```html
<table>
  <thead>
    <tr><th>What you need</th><th>Pattern that fits</th></tr>
  </thead>
  <tbody>
    <tr><td>Mission control</td><td>Hierarchical supervisor</td></tr>
    <tr><td>Dynamic allocation</td><td>Auction / market</td></tr>
  </tbody>
  <caption><b>Table 1.</b> Choosing the pattern by the job it has to do.</caption>
</table>
```

### Table of Contents

```html
<div class="toc">
  <h4>What's inside</h4>
  <ol>
    <li><a href="#s1">More agents do not make an architecture</a></li>
    <li><a href="#s2">A few definitions first</a></li>
    <li><a href="#refs">References</a></li>
    <li><a href="#cite">How to cite</a></li>
  </ol>
</div>
```

### Paper Deep-Link (`.paperlink`)

The signature hand-off to a fuller source — blue text with a dashed underline that goes solid on hover.

```html
<a class="paperlink" href="/harness/paper.pdf#page=4">
  → the mission-to-commit and product-factory diagrams (paper, §7 &amp; §14)
</a>
```

### References

```html
<div class="refs">
  <ol>
    <li id="ref1">National Institute of Standards and Technology.
      <em>AI Risk Management Framework</em>.
      <a href="https://www.nist.gov/itl/ai-risk-management-framework">nist.gov/itl/ai-risk-management-framework</a>
    </li>
  </ol>
</div>
```

In-prose citation marker:

```html
<p>NIST treats AI risk as a lifecycle problem [<a href="#ref1">1</a>].</p>
```

### Cite Block

Dark ink fill, blue-soft mono text, top-right Copy button. Two blocks per page: BibTeX + plain text.

```html
<div class="cite-block" id="bibtex">@misc{mitra2026harnessing,
  author       = {Mitra, Sagnik},
  title        = {Multi-Agent Harnessing Architecture...},
  year         = {2026},
  howpublished = {\url{https://sgnk.ai/harness}},
  note         = {sgnk Writes}
}<button class="copy" onclick="copyCite(this)">Copy BibTeX</button></div>

<div class="cite-block" id="plaintext">Mitra, Sagnik. (2026). Multi-Agent Harnessing Architecture...
sgnk Writes. https://sgnk.ai/harness<button class="copy" onclick="copyCite(this)">Copy</button></div>
```

### Buttons

```html
<a href="#" class="btn primary">↓ Download the paper (PDF)</a>
<a href="#" class="btn">⌘ Cite this work</a>
<a href="#" class="btn">→ Start reading</a>
```

### Back to Top

```html
<button class="to-top" id="toTop" aria-label="Back to top" title="Back to top">↑</button>
```

Wired by the JS in the shell — appears after `scrollY > 700`.

### Footer

```html
<footer>
  <div class="brand"><b>sgnk</b>.ai</div>
  <div>Craft. Harness. Deploy.</div>
  <nav>
    <a href="/">Home</a>
    <a href="/harness">The Harness</a>
    <a href="mailto:sagnik@sgnk.ai">sagnik@sgnk.ai</a>
  </nav>
  <div class="small">© 2026 Sagnik Mitra · sgnk · all rights reserved</div>
</footer>
```

### Skip-to-Content Link

```html
<a class="skip-link" href="#main">Skip to content</a>
```

Renders off-screen until focused; the first focusable element on every page.

## State Chips

When a piece must signal a state (`[Updated]`, `[Draft]`, `[Note]`, `[Sponsored]`), the system uses a **mono uppercase chip** — same typographic voice as the kickers, not a new color. Three styles:

```html
<span class="chip">Updated</span>           <!-- default: blue border + text -->
<span class="chip muted">Draft</span>       <!-- muted: grey for secondary -->
<span class="chip solid">Sponsored</span>   <!-- solid: filled blue for emphasis -->
```

Use chips inline in the meta strip (e.g., `<span>Status</span> Original research <span class="chip">Updated 2026-06</span>`) or as a marker beside the title. **Never introduce a second color for state** — green-OK / red-WARN / amber-PENDING fight the single-accent rule. The chip's color comes from `{colors.primary}` or `{colors.grey}` only; emphasis comes from `solid` vs `default` vs `muted`, not from hue.

## Sub-brand Variants

The system is **intentionally invariant** across sub-brands. `sgnk Advox`, `sgnk HQ`, `sgnk MD`, `sgnk CareerOS`, `sgnk Markex`, and `sgnk Writes` all inherit the parent system *unchanged*: same blue, same typography, same components, same lightrail hero, same topbar pattern.

What changes between sub-brands is only:

| Element | What sub-brands customize |
|---|---|
| **Topbar brand wordmark** | `<b>sgnk</b>.ai` → `<b>sgnk</b>.advox`, `<b>sgnk</b>.hq`, etc. The `.<subbrand>` half is always in `{colors.ink}`, never coloured. |
| **Eyebrow** | `sgnk Writes · 2026` → `sgnk Advox · Citation-Gated Retrieval`, `sgnk HQ · Operations Control Plane`. |
| **Tagline** | `Craft. Harness. Deploy.` stays as the parent tagline. Sub-brand tagline lives elsewhere (eyebrow, subtitle), not in the topbar. |
| **Pixel mark** | The `sgnk.png` top-right mark stays unchanged — it represents the parent identity, and links to `sgnk.ai`. Sub-brand marks (if needed for `sgnk.advox`, etc.) are regenerated PNGs at the same pixel grid, but the *top-right corner* always carries the parent mark on any page that inherits this system. |
| **Lightrail hero** | Stays the parent `sgnk-lightrail.png` for any inherited surface. A sub-brand-specific hero is allowed for sub-brand *homepages* (e.g. an `sgnk-advox-lightrail.png` rendered in the same grid + blue/white/black panels), but inherited content pages (writing, research) use the parent. |
| **Accent colour** | **Never changes.** All sub-brands use `{colors.primary}`. A sub-brand introducing its own accent breaks the system. |

The rule: **inherit by default; document the exception**. If a sub-brand has a real reason to vary (e.g. `sgnk Advox` needs a legal-citation chip), add it to this design system as a documented variant, not as a sub-brand-only override.

## Information Architecture

URL conventions for sgnk.ai:

| Pattern | Purpose | Example |
|---|---|---|
| `sgnk.ai/` | Homepage / portfolio root | (to-be-built) |
| `sgnk.ai/<slug>` | First-class long-form pieces with their own iconic title | `sgnk.ai/harness` |
| `sgnk.ai/writing/` | The writing index (when more pieces exist) | (to-be-built) |
| `sgnk.ai/writing/<slug>` | Indexed shorter pieces | (to-be-built) |
| `sgnk.ai/<slug>/paper.pdf` | The accompanying formal paper (when one exists) | `sgnk.ai/harness/multi_agent_harnessing_sgnk.pdf` |
| `sgnk.ai/<slug>/og.png` | The piece's social share card (1200×630) | `sgnk.ai/harness/og.png` |
| `sgnk.ai/sgnk-design-system.md` | This document | live |
| `sgnk.ai/sgnk-article-shell.html` | The starter shell | live |
| `<subbrand>.sgnk.ai/` | Sub-brand surfaces (separate Vercel projects) | `hq.sgnk.ai`, `advox.sgnk.ai`, `md.sgnk.ai`, `os.sgnk.ai` |

The **slug rule:** lowercase, ASCII, hyphen-separated, single-word preferred for first-class pieces (`harness`, not `the-harness-paper`). The slug **is** the iconic title's compressed form.

**Trailing slashes:** Vercel serves both `/<slug>` and `/<slug>/`. Asset paths inside pages must always be absolute (`/<slug>/sgnk.png`), never relative — relative paths break on the no-trailing-slash URL.

## Accessibility

The system targets WCAG **AA** on all content surfaces.

### Focus

Every interactive element receives a 2px blue focus ring with 2px offset via the global `:focus-visible` rule. Mouse clicks don't show the ring (`:focus-visible`, not `:focus`); keyboard navigation does.

```css
:focus-visible {
  outline: 2px solid var(--blue);
  outline-offset: 2px;
  border-radius: var(--r-sm);
}
```

### Skip Link

Every page carries a skip-to-content link as the first focusable element. Off-screen by default, visible on focus.

```html
<a class="skip-link" href="#main">Skip to content</a>
```

`<main>` carries `id="main"` so the link lands.

### Semantic HTML

- Page uses `<header>`, `<main>`, `<footer>` as landmarks.
- Section headings use `<h2 id="sN">` with sequential numbering — no skipping levels.
- Lists use `<ol>` / `<ul>` (never styled `<div>` sequences).
- Inline citations use anchor links: `[<a href="#ref1">1</a>]`.
- Images carry alt text; the lightrail hero's alt is `"sagnik → sgnk · ai"` (the brand thesis described, not the literal pixels).
- Buttons that don't navigate use `<button>` with `aria-label` (e.g. the back-to-top).
- Code blocks wrap `<code>` inside `<pre>` for screen readers.

### Tab Order

Predictable, follows DOM order. The interactive sequence is:
1. Skip-to-content link
2. Topbar brand → topbar logo link
3. Action buttons in the header
4. TOC entries
5. Inline body links (in reading order)
6. Cite copy buttons
7. Footer nav links
8. Back-to-top button

The progress bar and the topbar lift-on-scroll are non-interactive and out of tab order.

### Contrast

See the [Contrast table in Colors](#contrast-wcag-aa). All body content passes AA. The body-faint tone is reserved for decorative micro-copy only.

### Motion

The hover-lift on diagram nodes and the smooth-scroll behavior should respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
  html { scroll-behavior: auto; }
  .node:hover { transform: none; }
}
```

Add this rule to any new project's CSS.

### ARIA

The system is mostly semantic-HTML driven and avoids ARIA where native elements suffice. ARIA attributes are used only for:

- `aria-label="sgnk.ai"` on the topbar pixel-mark link (which has no text).
- `aria-label="Back to top"` on the floating button.
- `aria-current="page"` could be added to the active TOC item (currently visual-only); recommended for future builds.

## SEO, OG & Structured Data

Every sgnk Writes piece carries the same meta scaffold. Replace the placeholders; everything else stays.

### Required `<head>` meta

```html
<title>{ICONIC_TITLE} — {SUBTITLE} · sgnk</title>
<meta name="description" content="{120-160 CHAR DESCRIPTION}" />
<meta name="author" content="Sagnik Mitra" />
<meta name="theme-color" content="#1a5cff" />

<!-- Open Graph -->
<meta property="og:type" content="article" />
<meta property="og:title" content="{ICONIC_TITLE} — {SUBTITLE}" />
<meta property="og:description" content="{OG DESCRIPTION}" />
<meta property="og:url" content="https://sgnk.ai/{slug}" />
<meta property="og:site_name" content="sgnk.ai" />
<meta property="og:image" content="https://sgnk.ai/{slug}/og.png" />
<meta property="article:author" content="Sagnik Mitra" />
<meta property="article:published_time" content="{YYYY-MM-DD}" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{ICONIC_TITLE} — {SUBTITLE}" />
<meta name="twitter:description" content="{TWITTER DESCRIPTION}" />
<meta name="twitter:image" content="https://sgnk.ai/{slug}/og.png" />
```

### JSON-LD structured data

Use `ScholarlyArticle` for research-shaped pieces, `BlogPosting` for short-form. Place inside `<head>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "headline": "{FORMAL_TITLE}",
  "alternativeHeadline": "{ICONIC_TITLE}",
  "author": {
    "@type": "Person",
    "name": "Sagnik Mitra",
    "url": "https://sgnk.ai",
    "email": "sagnik@sgnk.ai"
  },
  "datePublished": "{YYYY-MM-DD}",
  "publisher": {
    "@type": "Organization",
    "name": "sgnk Writes",
    "url": "https://sgnk.ai"
  },
  "url": "https://sgnk.ai/{slug}",
  "image": "https://sgnk.ai/{slug}/og.png"
}
</script>
```

### OG / Share Card Image (`og.png`)

The designed social card. **Spec:**

- **Dimensions:** 1200×630 px (Twitter / Facebook / LinkedIn safe ratio).
- **Composition:**
  - **Left two-thirds** — the three-panel lightrail extracted from `sgnk-lightrail.png` (or a piece-specific variant), edge-to-edge.
  - **Right one-third** — `{colors.canvas}` panel with:
    - The eyebrow (`SGNK WRITES · 2026`) in `{typography.eyebrow}`, blue, 16px.
    - The iconic title in `{typography.title-display}`-equivalent (~64–72px to fit on share-card), `{colors.ink}`.
    - The subtitle truncated to ~70 chars in `{typography.subtitle}`-equivalent, `{colors.ink-soft}`.
    - `sgnk.ai/<slug>` at the bottom in `{typography.kicker-mono}`, `{colors.primary}`.
- **Padding:** 64px around the text panel; lightrail is edge-to-edge on its side.
- **No shadows, no gradients, no decorative chrome.** Same restraint as the page.
- **Generation:** rendered from Figma / Sketch / a static HTML-to-image pipeline (`og-image.vercel.app` or `playwright screenshot`); committed as `og.png` alongside `index.html` for the piece.

**Placement:** `sgnk.ai/<slug>/og.png` referenced from `og:image` and `twitter:image` meta tags.

### Sitemap

`sagnikmitra.github.io` should carry a `sitemap.xml` at the root listing every published `sgnk Writes` slug. Update on every new piece. (Currently absent — known gap.)

## Print Stylesheet

The full set of `@media print` rules in the article shell. Already wired in the drop-in CSS; documented here for awareness.

```css
@media print {
  /* Hide chrome that doesn't make sense on paper */
  .topbar, .progress, .to-top, .actions, .cite-block .copy { display: none; }

  /* Black text, no antialiasing tricks, smaller body size */
  body { color: #000; font-size: 11pt; line-height: 1.5; }

  /* Links: print the URL after the link text */
  a { color: #000; border-bottom: none; }
  a[href]::after { content: " (" attr(href) ") "; font-size: 9pt; color: #555; }

  /* Strip the reading column width — let the page width carry */
  main { max-width: 100%; padding: 0; }

  /* Keep h2 with the section that follows */
  h2 { page-break-after: avoid; border-top: 1pt solid #888; }

  /* Don't break inside blocks */
  .pull, figure.diagram { page-break-inside: avoid; border: 1pt solid #888; background: #fff; }
  pre { background: #fff; color: #000; border: 1pt solid #888; }
}
```

Research pieces should print readably. The above ruleset converts the screen experience into a paper-friendly version: strip chrome, surface URLs, prevent diagram tearing across pages.

## Interactive States

The current system is a **reading surface** — its primary interactions are scroll, click-to-anchor, hover-lift, and click-to-copy. When a future surface introduces real interactivity (form submission, search, comments, configurators), it needs:

### Loading

A subtle skeleton — `{colors.canvas-soft}` blocks at the size of the eventual content, with a slow blue-soft sheen left → right via CSS animation:

```css
.skeleton {
  background: var(--grey-bg);
  border-radius: var(--r-md);
  position: relative; overflow: hidden;
}
.skeleton::after {
  content: ""; position: absolute; inset: 0;
  background: linear-gradient(90deg, transparent, var(--blue-soft), transparent);
  animation: shimmer 1.6s infinite;
}
@keyframes shimmer { to { transform: translateX(100%); } }
```

Loading skeletons replicate the eventual layout exactly — same height, same gutters, same border-radius — so the layout doesn't shift when content lands.

### Empty

A `<div>` with the `.empty` class — centered, `{typography.body-muted}`, optional small `Get started →` paperlink. Never an illustration, never a "no results found" sad cartoon.

```html
<div class="empty">
  <p>Nothing here yet.</p>
  <a class="paperlink" href="/writing">→ Browse all posts</a>
</div>
```

### Error

A muted block, ink-soft text, no red. Errors are stated plainly; the design system never uses red for warning because red would break the single-accent rule.

```html
<div class="readout" style="border-left-color: var(--ink);">
  <span class="lbl" style="color: var(--ink);">Something went wrong</span>
  We couldn't load that. <a href="/">Back to home</a>.
</div>
```

For form errors specifically, use a `caption-mono` inline beneath the input, in `{colors.ink}`. State is signalled by **tone of voice + the chip pattern**, never by a red border or icon.

## Do's and Don'ts

### Do
- Use `{colors.primary}` (#1a5cff) as the **only** accent.
- Run body text at `{typography.body}` (16px / 1.65 / Google Sans / weight 400).
- Run the nine [Typography Laws](#typography-laws--direction-not-decoration) as an audit pass on every page — **especially anything a model scaffolded**.
- Keep the body **measure** tight (≤ ~88 chars on this editorial surface); cap paragraphs at `60ch` (lead `50ch`) and let figures/tables/code keep the full column — verify the rendered count, not the `ch` value (Law 7).
- Make heading spacing **asymmetric** — more space above than below, so the heading binds to what it introduces (Law 2).
- Tighten line-height as type gets bigger; loosen as it gets smaller — leading scales inverse to size (Law 3).
- Front-load the point and put the action at the end — context first, decision last (Law 5).
- Left-align all body, headings, and structural text; reserve centering for short hero/quote blocks only (Law 8).
- Check every text/background pair against WCAG (4.5:1 body, 3:1 large) with a real tool — never by eye (Law 9).
- Ask context before judging a design "better" — product, user, device, frequency, trust threshold (Principle 1).
- Spend the emphasis budget on a few elements; decide what *doesn't* stand out (Principle 6).
- Give every feature its empty, error, and loading states — design the system, not just the happy path (Principle 4).
- Write copy that takes a position and names the user's problem; buttons and empty states decide, they don't describe (Principle 13).
- When motion is added, make it explain spatial relationships (where things live), and keep it felt-not-noticed (Principle 12).
- Brief AI with goal + context + constraints, one layer at a time; then run the full law + principle audit on the output (Principles 15–16).
- Use **square corners** (`{rounded.none}`) for every structural element.
- Reserve the 8px–12px rounding for diagram nodes and figures only.
- Pair every flowchart with a walk-through readout ("HOW TO READ IT").
- Use accent-bar dividers (`3–4px solid {colors.primary}` on left) for pull-quotes, the TOC, the readout, and the formal-title.
- Apply the `lead` drop-cap to the **first paragraph of `§ 01` only**. One per page.
- Set every `<h2>` with the `— § 0X` mono kicker above, and a `1px {colors.hairline}` top rule.
- Use `.paperlink` (dashed-underline blue) liberally to hand off to the formal PDF or external sources.
- Keep diagrams in `.flow-row` containers (with `flex-wrap`) so they collapse cleanly on mobile.
- Let code blocks scroll *inside* their own box; never the page.
- Use `↓` and `→` blue arrows between diagram nodes — `↓` for column flow, `→` (and `↩` for loop-back) for horizontal pipelines.
- Reference design tokens, never inline values. Every new rule resolves to `--blue`, `--gap-lg`, `--r-md`, etc.
- Use `:focus-visible` for focus rings, never `:focus` (so mouse clicks don't show a ring).
- Always serve assets via absolute paths (`/sgnk.png`, `/sgnk-lightrail.png`).

### Don't
- Don't add gradients, photographic textures, or color washes.
- Don't add drop-shadows to cards, TOC, cite-block, pull-quotes, or buttons.
- Don't round buttons — buttons are square.
- Don't use weight 800 anywhere except `h1.title` and `h2` section headings.
- Don't introduce a second typeface family.
- Don't use uppercase prose. Uppercase is functional only.
- Don't replace `{colors.primary}` with a different blue per section — every blue is the same blue.
- Don't tighten body line-height below 1.6.
- Don't introduce a second accent for state — use the chip pattern.
- Don't add tooltips, dropdowns, or interactive overlays — the system is a reading surface.
- Don't put humour in the visual system. Humour lives in the prose.
- Don't use relative asset paths — Vercel's no-slash URL will break them.
- Don't skip heading levels (`<h1>` → `<h3>`); it breaks accessibility.
- Don't let body paragraphs run the full 760px column — that pushes the measure past ~100 chars (Law 7). Cap at `60ch`.
- Don't space a heading equally above and below — it orphans the heading from its content (Law 2).
- Don't apply one line-height multiplier to every size — a 1.5× heading drifts apart (Law 3).
- Don't center paragraphs or any text block over 3–4 lines — ragged starts cost the eye on every line (Law 8).
- Don't signal hierarchy or state with color alone — size, weight, and style must carry it too (Law 9).
- Don't ship a model-generated page without the nine-law audit — "looks fine" is the AI-average trap.
- Don't rank two designs without context — "better" is meaningless until you know the product, user, and trust threshold (Principle 1).
- Don't emphasize everything — a screen with twelve bold elements has no hierarchy (Principle 6).
- Don't design only the happy path — missing empty/error/loading states is unfinished work (Principle 4).
- Don't write neutral, translatable filler copy that could sit on five other products (Principle 13).
- Don't add motion as polish — if a user remembers the transition, it failed; motion is spatial logic, not decoration (Principle 12).
- Don't smear friction everywhere — sgnk is a low-friction calm surface; friction is a pinch of seasoning, zoned and deliberate (Principle 9).

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤ 419px | Mobile rules; lead drop-cap auto-shrinks |
| Phone | 420–640px | Mobile rule-set kicks in (see below) |
| Tablet | 641–820px | Header padding tightens; tagline hides in topbar |
| Small desktop | 821–1023px | Full layout returns; tagline reappears |
| Desktop | 1024–1280px | Default rules — 24px gutters, 76px section margins, 760px reading column |
| Wide desktop | ≥ 1281px | Content locks at 760px; whitespace absorbs extra width |

The structural breakpoints that matter: **820px** (tagline hides, header pad tightens) and **640px** (full mobile rule-set kicks in).

### Mobile rule-set (≤ 640px)

- `html, body { overflow-x: hidden }` safety guard.
- `header.paper` padding 72→44 top, 24→18 horizontal.
- `h1.title` becomes 32px; `h2` becomes 24px.
- `formal-title` shrinks to 15px.
- Lead drop-cap scales 58→48px.
- `figure.diagram` padding tightens; `.node` font 12→11px.
- `.flow-row` wraps so 3-node rows collapse to 2+1.
- Code blocks shrink to 11.5px font.
- `.cite-block` adds `padding-top: 56px` so the Copy button doesn't overlap.
- TOC collapses to a single column.
- Meta strip wraps to multiple rows.
- `.to-top` shrinks 44→40px.

### Touch Targets

- Minimum **44×44px** for primary actions (back-to-top, primary CTA buttons).
- Topbar logo-link is 26px tall but lives inside a larger flex hit area.
- TOC link rows are ~28px line — acceptable for sequential nav, not actions.

## Voice & Visual Pairing

The design system is half the brand. The other half is the writing voice — earnest, plain, "in my usage" first-person, with the word-level texture (`pretty`, `to be honest`, So/Now/Though sentence-openers, ASCII emoticons `:) :D :P`) that makes prose read as Sagnik vs a clean imitation. The visual restraint and the voice restraint are inseparable: a polished page filled with marketing-tone prose would break both; a humble plain page with cutting zingers would break both. Together they form a designer-engineer signature.

**The full voice profile lives in the `sgnk-writer` skill** at `~/.claude/skills/sgnk-writer/references/voice-profile.md` and `diction-and-tics.md`. When building any sgnk.ai surface that will host writing, both this design system **and** the writer skill should be loaded — they compose.

## Extending the System: A Worked Example

Say a future piece needs a **footnote drawer** — a small inline marker `[†]` in prose that, when clicked, reveals a panel with the footnote body. How does this earn a place in the system?

### Step 1: Could existing components carry the role?

- **Pull-quote?** No — too heavy for a footnote.
- **Paperlink?** Close, but a paperlink hands off to an external resource; a footnote is *inline content*.
- **Readout?** Close, but a readout is paired with a flowchart, not a marker.
- **Hover tooltip?** The system explicitly forbids tooltips.

Verdict: **no existing component carries the role**. Earning a new one is justified.

### Step 2: Draft the component against the system

Following the [Iteration Guide](#iteration-guide):

**Trigger marker** — a small superscript blue link in the prose, mono.

```html
<sup><a class="fn-marker" href="#fn1" id="fnref1">[†1]</a></sup>
```

```css
.fn-marker {
  font-family: 'Google Sans Code', monospace;
  font-size: 11px;
  font-weight: 600;
  color: var(--blue);
  border-bottom: none;
}
.fn-marker:hover { border-bottom: 1px dashed var(--blue); }
```

**Footnote body** — a small block that lives at the bottom of the page, structured like a references entry but with a back-link.

```html
<div class="footnotes" id="footnotes">
  <h2><span class="num">§ Footnotes</span>Marginal notes.</h2>
  <ol>
    <li id="fn1">
      The actual footnote body, written in {typography.body}.
      <a href="#fnref1" class="paperlink" aria-label="Back to text">↩</a>
    </li>
  </ol>
</div>
```

The styling reuses `.refs` (the existing references list) for the `<ol>`, and the back-link `↩` reuses the existing arrow glyph in blue. **No new color, no new shape, no new typography token — only new HTML structure.**

### Step 3: Document it in this file

Add to the `components:` YAML and write a "Footnote" section under "Components" showing the markup pattern. Add a do/don't if relevant ("don't use footnotes for citations — citations go in `<div class="refs">`"). Update Known Gaps if previously listed.

### Step 4: Use it in the wild and refine

Ship one piece with the new component. If it survives editorial scrutiny — reading well, not fighting the rest of the page, mobile-friendly — promote it. If it sticks out, refactor; the system wins until the spec is amended.

This is the loop: **earn → draft against existing tokens → document → ship → refine**. New visual primitives are rare and reviewed; ad-hoc additions are anti-patterns.

## Iteration Guide

1. **Stay in one column.** New components live inside the 760px reading column. Only the topbar, lightrail hero, and footer extend full-bleed.
2. **Reference tokens, never inline values.** Every new rule resolves to a token.
3. **Earn every new component.** Reuse first. Run the [worked example](#extending-the-system-a-worked-example) above.
4. **Square by default.** New cards, buttons, surfaces start at `{rounded.none}`.
5. **One accent.** New interactive elements use `{colors.primary}`.
6. **Hairline first, accent-bar second, shadow last.** The order of dividers.
7. **Document new components.** A new variant goes into this file with its own row in `components:` and a section under "Components."
8. **Voice stays inseparable.** Visual additions that push toward "app-y" or "marketing-y" territory break the brand because they fight the voice.

## Known Gaps (v1.3)

New in v1.3:
- ✅ **Design Principles** — a 16-point judgment layer beyond type: judgment over rules (context-before-verdict, taste, feel-the-laws, systems-not-screens, consistency), composition & flow (hierarchy-across-the-flow, eye choreography, leverage point, friction & flow, grids, transferability), motion-as-spatial-logic, copy-that-decides, and the AI-era method (AI-average, prompt-like-a-designer, run-the-audit). Each bound to sgnk and cross-referenced to the laws, with sources credited.

New in v1.2:
- ✅ **Typography Laws** — the nine practical rules (hierarchy, proximity, leading-by-size, chunking, placement, font-as-voice, the measure, alignment, contrast) are documented as the judgment layer over the tokens, with per-law audit checks and an explicit AI-scaffold audit pass.
- ✅ **The measure (Law 7)** — body line-length rule added, with a verified finding (uncapped, the 712px column ran ~100 chars/line) and an operational `60ch`/`50ch` paragraph guardrail (≈ ~88/~72 CPL for Google Sans) in the drop-in CSS. Documents the `ch`-is-font-relative gotcha that makes a naive `70ch` a no-op.
- ✅ **Harness retrofit applied.** `harness/index.html` now carries the `60ch`/`50ch` guardrail — body verified at ~88 CPL, lead ~72 CPL, figures/tables/code still full-width. New pages from the shell should adopt the same block (sync `sgnk-article-shell.html` when next touched).

Resolved in v1.1:
- ✅ **Drop-in CSS variables** documented.
- ✅ **Starter article shell** — `sgnk-article-shell.html` shipped.
- ✅ **Component HTML snippets** — every component documented with markup.
- ✅ **Minimum viable post checklist** — defined.
- ✅ **Accessibility** — focus, skip-link, semantic HTML, tab order, reduced motion.
- ✅ **SEO / OG / structured data** — meta scaffold + JSON-LD `ScholarlyArticle` documented.
- ✅ **OG share card spec** — 1200×630 composition rule defined.
- ✅ **Print stylesheet** — `@media print` documented.
- ✅ **Brand asset inventory** — all files, dimensions, paths.
- ✅ **Sub-brand variants** — documented as "invariant inheritance".
- ✅ **State chip pattern** — defined.
- ✅ **Information architecture / URL conventions** — table defined.
- ✅ **Interactive states** — loading / empty / error patterns specified.
- ✅ **Worked example of extending the system** — included.

Still open:
- **No `/writing` index page is defined yet.** The section-landing surface (when sgnk.ai has multiple `sgnk Writes` pieces) is unbuilt.
- **No homepage (`sgnk.ai/`) is in the system yet.** The apex page is currently served by an older Framer site for sagnikmitra.com; the sgnk.ai homepage chassis using this design system has not been built.
- **No dark-mode counterpart.** A dark mode would invert `{colors.canvas}` → `{colors.ink}`, `{colors.canvas-soft}` → a lifted ink, and likely shift `{colors.primary}` to the brighter `#2997ff`-range — but is not formalized.
- **No form / input components defined.** Text inputs, textareas, selects, radios, checkboxes — none are part of this surface yet.
- **No diagram type beyond box-and-arrow flows.** Bar charts, line charts, scatter plots — none are defined. They'd need to extend the diagram-figure container, respect the blue accent, and likely render as static SVG.
- **No `sitemap.xml`.** Should exist at the repo root and list every published `sgnk Writes` slug.
- **No motion principles beyond hover-lift, progress-fill, smooth-scroll, button scale.** If future pages want content-aware motion (sticky-reveal, parallax, scroll-triggered text reveals), they'll need defined motion tokens.
- **No animated logo / brand video asset.** The lightrail hero is static; an animated extraction (sagnik → sgnk + ai morphing) could live on the homepage but isn't specified.

---

**Canonical reference implementation:** [sgnk.ai/harness](https://sgnk.ai/harness) — source at `sagnikmitra.github.io/harness/index.html`.

**Companion files in this repo:**
- [`sgnk-article-shell.html`](./sgnk-article-shell.html) — the drop-in starter HTML for any new piece.

**Companion skills:**
- `sgnk-design` (this document, operationalized) — when designing/building/reviewing any sgnk.ai surface.
- `sgnk-writer` — voice profile, diction, and tics for the prose that lives inside this design system.
- `sgnk-next` / `sgnk-react` / `gvc` — scaffold a project on the right framework + infra, then apply this system on top.

**Maintainer:** Sagnik Mitra · `sagnik@sgnk.ai` · `Craft. Harness. Deploy.`
