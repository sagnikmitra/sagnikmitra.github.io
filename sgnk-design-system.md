---
version: 1.1
name: sgnk-design-system
description: An editorial research-page aesthetic where pixel-art identity meets Google Sans typography on a calm white canvas, interrupted only by a single electric blue (#1a5cff). The system frames long-form technical writing — flowcharts walk-through-able, paper-deep-links scattered through prose, reading-scaffolding (progress bar, active TOC, drop-cap lead, back-to-top) doing the work of decoration. Chrome stays hairline-thin so the writing and the diagrams carry the page. The voice (earnest, plain, "in my usage" first-person) lives inseparably with the visual restraint — together they form one coherent designer-engineer signature.

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
- **Line-height context-specific.** Headings 1.08–1.35 (tight). Body 1.65 (relaxed). Pull-quote 1.55. Code 1.6. Captions 1.4–1.5.

### Note on Font Substitutes
Google Sans is loaded via the Google Fonts CSS endpoint. For non-Google environments, the closest open replacement is **Plus Jakarta Sans** or **DM Sans** — both on Google Fonts, free-licensed. **Inter** is a passable but looser substitute; tighten display tracking by an additional `-0.005em` when swapping in Inter. Google Sans Code is ungated and needs no substitute.

## Layout

### Spacing System
Base 8px. Tokens: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 18px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 64px · `{spacing.header-top}` 72px.

**Section heading rhythm:** `margin-top: 76px` on every `h2`. `padding-top: 22px` above the kicker. **Header padding:** `72px 24px 48px`. **Main padding:** `0 24px 96px`.

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

## Known Gaps (v1.1)

Resolved in this version:
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
