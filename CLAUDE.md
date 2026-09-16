# Rishabh Ladha Personal Website

Personal-brand site for Rishabh Ladha — positioned as **one of India's leading sales experts and coaches** (note the article: "one of India's leading", never "India's leading" — the definite superlative has no third-party backing and was deliberately rejected). Co-founder of SquadStack, sales educator at Mesa School of Business and Scaler, takes on sales assignments, coaching, and private workshops. EPIC World (his current day job, Head of GTM) is **deliberately underplayed** — one credential line, one short Work section — by owner decision on 2026-09-16.

## What this site is

A 5-page static site. Primary jobs: (1) answer "who is this person, why should I care?" for founders, sales leaders, and conference organizers; (2) convert serious inbound into contact-form submissions ("Work with me"). Branding page first, light lead capture second.

## Stack

Plain HTML + CSS. No JavaScript (the only `<script>` is JSON-LD structured data on index.html). No framework, no build step.

- `index.html` — Home (hero, proof figures, three offers, pull quote, appearances index, CTA + form)
- `work.html` — SquadStack (the proof), EPIC World (brief), "what carried over"
- `teaching.html` — Mesa School of Business, Scaler, private workshops
- `in-the-wild.html` — Podcasts/keynotes/talks, each with a one-line argument
- `contact.html` — Form + direct links
- `styles/main.css` — All styles
- `favicon.svg` — RL monogram (ink square, paper letters, red underline)
- `assets/images/rishabh-portrait.jpg` — 884×822, recompressed to ~43KB

## Design system — "Bold Editorial" (chosen by owner 2026-09-16, replacing the April 2026 warm-minimal system)

**Typography (Google Fonts CDN):**
- Display: Libre Caslon Display (regular only)
- Reading serif: Libre Caslon Text
- UI/body sans: Archivo

**Colors (CSS custom properties in `:root`):**
- Paper: `#FBFAF5` · Ink: `#161511` · Ink-soft: `#55534B` · Ink-faint: `#8A877D`
- Editorial red (accent): `#B3261E` (hover `#8C1D17`) · Hairline: `#D8D5CA`

**Layout language:** masthead nav with 3px ink rule; huge Caslon display headlines; 3px/1px ink rules as section dividers; figures (stat) band; numbered "No. 1/2/3" offer columns; hairline index lists; centered pull quotes between double rules; full-bleed ink CTA block with the form. Max width 1100px, 24px gutters. No animations; hover color shifts only.

**Tone:** confident editorial, claim-then-proof. The one personality flourish is the hero ("Selling, taught by someone who's done it."). Copy is still a draft for Rishabh to react to.

## Fact discipline (verified 2026-09-16 — keep these exact framings)

- Funding: "over ₹200Cr ($24M+) … Series B led by Bertelsmann India Investments, with Chiratae Ventures, Blume Ventures **and others**" (Tracxn total $24.9M, 16 investors).
- Forbes: "**founding team** featured in Forbes 30 Under 30 **Asia 2018** (Enterprise Technology)" — never a solo personal claim (honoree list unverified).
- Scale: "10,000+ telecallers across 67 cities" and "one of India's largest tech-enabled telesales platforms" — NOT "the leading" (self-description only).
- Mesa: standalone practitioner-led B-school in Bangalore. **NOT part of Masters' Union** (the April site's framing was wrong). Audited outcome: **2.8× average** salary jump (never the 5.2× upper bound). Rishabh is adjunct/visiting faculty.
- EPIC/EHI: "~250M entrepreneurial households transacting up to $10 trillion a year"; "$100 trillion" is a **20-year projection**, never a present-day figure. EHI Index: 34 companies, ~$115Bn combined market cap **at launch (Feb 2025)**, with Morningstar Indexes.
- Tenures: SquadStack "2015–2024 / nine years" (end date publicly fuzzy — his departure post is ~April 2025); "eleven years on the revenue side" = whole career including EPIC. Don't state an EPIC join year.
- ICMA talk was **Vienna 2018** (not 2021). Elets keynote title is "Transforming Sales with Better CX in 2024".

## Contact & lead capture (rule reversed 2026-09-16)

The April "no contact form" rule was **reversed by owner decision**. Forms on index.html and contact.html are plain HTML POST (no JS), styled in-system, with a `_honey` honeypot. **They are inert (`action="#"`) until Rishabh's email is confirmed** — no public email exists anywhere (verified). To activate: set `action="https://formsubmit.co/HIS_EMAIL"` on both forms, submit once, click FormSubmit's confirmation link. Direct channels shown meanwhile: LinkedIn (`in.linkedin.com/in/rishabhladha`) and X (`@rishabhladha`, verified).

## Still needs Rishabh (all marked as HTML comments `[CONFIRM with Rishabh: ...]` — never rendered)

- His **email** → both form actions + a contact row (`contact.html`, `index.html` CTA comment)
- The **pivot story** (SquadStack→EPIC; his LinkedIn departure post is the source) → `work.html`
- EPIC day-to-day + any publishing restrictions → `work.html`
- SquadStack internal numbers + whether to name clients (Kotak/AngelOne/IndiaMART are publicly cited by Founder Thesis) → `work.html`
- 3 mental models → `work.html` "What carried over"
- Mesa course name/format; Scaler module name/format and whether current → `teaching.html`
- Sign-off on the private-workshops offer (now core to positioning) → `teaching.html`
- Converge'26 panel (Feb 7 2026, 3one4 Capital, Bengaluru) — add to `in-the-wild.html` when a recording/summary is published

## Updating "In the Wild"

Flat index, newest-relevance first. Every entry needs: linked title, source + date meta, one-line argument (no argument → no entry). Max ~12–15 entries. All current links are real and were found via research on 2026-09-16; the Offline Network entry links to the show's guests page (no per-episode URL public), and the Mesa video's date is unconfirmed (no date shown).

## Deployment

- **Vercel**: https://rishabh-ladha-website.vercel.app — production auto-deploys on push to `main`. The redesign lives on branch `claude/beautiful-planck-73fym2` until merged.
- **GitHub**: https://github.com/dishambles/rishabh-ladha-website
- Vercel project is under Disha's `dishambles-projects` scope (transfer to Rishabh is a Vercel project-transfer operation if ever needed).
- Custom domain not configured — target `rishabhladha.com` (confirm with Rishabh).
- The PRD file referenced by earlier docs (`rishabh-ladha-website-prd.md`) was never committed and does not exist in the repo.

## Pre-launch checklist

- [x] Full redesign in the chosen "Bold Editorial" direction (all 5 pages)
- [x] All In the Wild links real (no `#` links anywhere)
- [x] No `[CONFIRM]` text renders publicly (all moved into HTML comments)
- [x] Favicon (`favicon.svg`) linked on all pages
- [x] og:image (absolute URL) on all pages; JSON-LD Person on index
- [x] Portrait recompressed (95KB → ~43KB)
- [ ] Rishabh's email → activate both forms (see Contact section above)
- [ ] Content interview with Rishabh (see "Still needs Rishabh")
- [ ] Merge branch to `main` to deploy the redesign
- [ ] Custom domain on Vercel (`rishabhladha.com`)
- [ ] Add URL to Rishabh's LinkedIn headline and speaker bios after launch

Do NOT do a launch announcement post — it should feel like it's always been there.

## What not to change

- Do not add JavaScript beyond the JSON-LD block (no analytics, no widgets) without a specific, necessary reason
- Do not add animations or scroll effects
- Do not add a blog or newsletter signup
- Do not use stock images or photos without rights
- Do not write "India's leading sales expert" (definite article) or any unhedged superlative — "one of India's leading…" stacked on the proof figures is the ceiling
- Do not present the $100T figure as current, the 5.2× salary jump, Mesa as Masters' Union, or Forbes 30U30 as a solo honor (see Fact discipline)

## Session history

### 2026-04-22 — Initial build + deploy
Built 5 pages (warm-minimal system, EB Garamond/Inter), deployed to Vercel, portrait added. Shipped with ~30 rendered `[CONFIRM]` placeholders and all In-the-Wild links dead.

### 2026-09-16 — Repositioning + full redesign + research fill
- Deep research pass: found real URLs/dates for all appearances (corrections: ICMA was Vienna 2018; GTMDialogues was Mar 22 2025; Elets title), found new appearances (Mesa video, Offline Network, Converge'26), verified/corrected every load-bearing claim (see Fact discipline), confirmed X handle, confirmed no public email.
- Owner decisions: reposition around "a leading sales expert in the country" (hedged form used), underplay EPIC, full redesign with mockups first, add contact form (rule reversal).
- Three design directions mocked on a canvas; owner chose "Bold Editorial".
- Rebuilt all 5 pages + CSS in the new system; favicon, og:images, JSON-LD, portrait optimization; deleted stale HANDOFF.md.
