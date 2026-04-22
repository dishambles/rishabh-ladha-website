# Rishabh Ladha Personal Website

Personal credibility-anchor site for Rishabh Ladha — Head of GTM at EPIC World, co-founder of SquadStack, sales educator.

## What this site is

A 4-page static site. Primary job: answer "who is this person, why should I care?" in under 30 seconds for a founder or conference organizer. Not a content hub, not a lead-gen machine.

## Stack

Plain HTML + CSS. No JavaScript, no framework, no build step.

- `index.html` — Home
- `work.html` — Work (EPIC World + SquadStack)
- `teaching.html` — Teaching (Masters' Union / Mesa + Scaler)
- `in-the-wild.html` — Podcasts, talks, writing
- `contact.html` — Contact
- `styles/main.css` — All styles
- `assets/images/` — Portrait and any contextual photos
- `assets/fonts/` — Self-hosted fonts (if moved off Google Fonts CDN)

## Design decisions

**Typography:**
- Headlines: EB Garamond (Google Fonts CDN), serif
- Body: Inter (Google Fonts CDN), sans-serif
- Move to self-hosted if privacy/speed becomes a concern

**Colors:**
- Background: `#FAFAF7`
- Primary text: `#1A1A1A`
- Secondary text: `#666666`
- Accent: `#2D4A3E` (deep forest green)
- Dividers/subtle backgrounds: `#E8E7E3` / `#EFEEEA` / `#F2F1ED`

**Layout:**
- Single column, max content width 680px
- No JavaScript, no animations, no parallax
- Hover states only: subtle underline/color shift on links

**Tone:**
- ~80% substance, ~20% personality
- One "raised eyebrow" moment in the hero tagline — nowhere else
- Copy is a provocation to react to, not final

## Content status

All `[CONFIRM: ...]` markers in the HTML files are placeholders that need Rishabh's input before launch. Do not remove markers without actual confirmed content.

**Critical blockers (site reads thin without these):**
- Rishabh's actual email address → `contact.html`, `index.html`
- The pivot story (why he left SquadStack for EPIC) → `work.html` pivot bridge
- EPIC role specifics (what Head of GTM means day-to-day) → `work.html`
- SquadStack numbers (revenue, team size, representative deals) → `work.html`
- Mesa course name and what he teaches → `teaching.html`
- Scaler program name/module and what he teaches → `teaching.html`
- Professional portrait photo → `assets/images/rishabh-portrait.jpg`

**Important (improves quality):**
- 3 "what I'm thinking about" statements → `index.html` (drafts exist, need Rishabh's sign-off)
- 3 mental models from SquadStack → `work.html`
- Which hero tagline variant he prefers → `index.html` h1
- Does he want the "private workshops" CTA on Teaching? → `teaching.html`
- Does EPIC have restrictions on what he can publish about his role?

## Adding the portrait photo

Replace the `<div class="portrait-placeholder">` block in `index.html` with:

```html
<img
  src="assets/images/rishabh-portrait.jpg"
  alt="Rishabh Ladha"
  class="hero-portrait"
  width="280"
  height="336"
>
```

Optimize the photo to WebP, max 800px wide, before adding. Target under 150KB.

## Updating "In the Wild"

After each new podcast or talk: add a new `.wild-entry` block in the appropriate theme section of `in-the-wild.html`. Every entry needs:
1. Source name and date (`.wild-source`)
2. Title with link (`.wild-title`)
3. One-line argument (`.wild-argument`) — if you can't write this, the entry doesn't go in

Max ~12–15 entries total. Be ruthless.

## Deployment

Deploy to Netlify or Vercel free tier. Drag-and-drop the folder or connect the repo.

Domain: `rishabhladha.com` (or similar — confirm with Rishabh).

Pre-launch checklist:
- [ ] All `[CONFIRM: ...]` placeholders filled
- [ ] Portrait photo added and optimized
- [ ] Every page tested on mobile (read it top to bottom, cut anything that doesn't earn its space)
- [ ] Meta description and og:image filled on all pages
- [ ] Favicon added (RL monogram in `#2D4A3E`)
- [ ] Add URL to Rishabh's LinkedIn headline and speaker bios after launch

Do NOT do a launch announcement post. This is a credibility anchor — it should feel like it's always been there.

## What not to change

- Do not add JavaScript unless there's a specific, necessary reason
- Do not add animations or scroll effects
- Do not add a blog, newsletter signup, or booking form
- Do not add a contact form (unnecessary friction)
- Do not use any stock images
- Do not add more personality moments in the copy beyond the hero tagline

## Reference PRD

Full PRD lives in `rishabh-ladha-website-prd.md` in this directory. Contains design reference links, content rationale, and open questions in detail.
