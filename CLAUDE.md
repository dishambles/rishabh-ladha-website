# Rishabh Ladha Personal Website

Personal-brand site for Rishabh Ladha — positioned as **one of India's leading sales experts and coaches** (note the article: "one of India's leading", never "India's leading" — the definite superlative has no third-party backing and was deliberately rejected). Co-founder of SquadStack, sales educator at Mesa School of Business and Scaler, takes on sales assignments, coaching, and private workshops. EPIC World (his current day job, Head of GTM) is **deliberately underplayed** — one credential line, one short entry — by owner decision on 2026-09-16.

## What this site is

A single-page, long-scroll site (redesigned 2026-09-23, replacing the earlier 5-page "Bold Editorial" system). Primary jobs: (1) answer "who is this person, why should I care?" for founders, sales leaders, and conference organizers; (2) convert serious inbound into contact-form submissions ("Work with me"). Branding page first, light lead capture second.

## Stack

Plain HTML + CSS + vanilla JS. No framework, no build step, no dependencies.

- `index.html` — the entire site, organised into 10 numbered chapters (see below) plus a hero and full-bleed interludes
- `styles/site.css` — all styles, design tokens in `:root`
- `js/motion.js` — all behaviour: scroll reveals, word-splitting, counters, parallax, dot-rail/nav sync, custom cursor
- `favicon.svg` — RL monogram (ink square, paper letters, red underline)
- `assets/images/` — `rishabh-portrait.jpg` (884×822 source), `portrait-cutout.png` (transparent B&W-ready cutout used in the hero), plus event photos: `gtmdialogues-talk.jpg`, `gtmdialogues-room.jpg`, `classroom-session.jpg`, `mesa-panel.jpg`, `award-onbfsi.jpg`, `keynote-bfsi-cxo.jpg`
- `vercel.json` — 301 redirects from the old page paths (`/work`, `/teaching`, `/in-the-wild`, `/contact`, and their `.html` forms) to the matching in-page `#anchor`

## Page structure (top to bottom)

| # | id | Chapter |
|---|---|---|
| — | `#home` | Hero — statement, chain, credentials, CTA, B&W cutout with animated cobalt halo |
| 01 | `#brands` | Worked with — roster table |
| 02 | `#said` | Said about him — testimonial ticker (6 real LinkedIn posts, quoted + linked) |
| — | `.strip` | Photo strip (4 greyscale event photos) |
| 03 | `#proof` | Why it matters — thesis + counting figures |
| — | `.interlude` | Full-bleed photo (ON BFSI award) |
| 04 | `#work` | Work — SquadStack, EPIC World |
| 05 | `#how` | How I work — 4 numbered phases |
| — | `.slab` | Pull quote (black slab) |
| 06 | `#coaching` | Coaching — private workshops |
| 07 | `#teaching` | Teaching — Mesa, Scaler |
| — | `.interlude` | Full-bleed photo (GTM Dialogues room) |
| 08 | `#wild` | In the wild — podcasts/talks index |
| 09 | `#who` | About |
| 10 | `#contact` | Work with me — black end block, FormSubmit contact form |

Fixed UI: top nav (links to every chapter, active link underlined) + left dot rail (one dot per chapter, active dot filled cobalt), both driven by `data-chapter` attributes and IntersectionObserver in `motion.js`.

## Design system — one-page long-scroll (chosen by owner 2026-09-23, replacing "Bold Editorial")

**Typography:** Archivo only (Google Fonts, weights 400/600/800), via `--font-grotesque`.
- `.stmt` family: 800 weight, uppercase, tight tracking — `.stmt-xl` (hero, `clamp(48px,9.2vw,148px)`) down to `.stmt-sm`
- `.note` (eyebrow): `clamp(11px,.85vw,13px)`, 600, `.14em` tracking, uppercase
- `.copy`: `clamp(16px,1.25vw,19px)`/1.5, max 44ch (`.copy--wide` 60ch)

**Colour (one accent only) — CSS custom properties in `styles/site.css` `:root`:**
- `--paper` `#fbfbfc` · `--paper-sunk` `#f2f3f6` · `--black` `#0b0d10` · `--quiet` `#5c5c5c` · `--rule` `rgba(10,10,10,.24)`
- `--acid` `#2b2bdd`: **the only accent** (cobalt) — chapter numbers/eyebrows, chain numerals, links, captions, the hero halo, the active rail dot, focus rings
- `--on-acid` `#faf9f7` · `--acid-lit` `#8aa7ff` (cobalt tint for dark grounds)

**Layout:** gutter `--gut: clamp(20px,4vw,64px)`; chapter padding `clamp(72px,11vh,148px)`; square corners everywhere (no radii); no shadows. Easing `--ease: cubic-bezier(.16,1,.3,1)` for all motion.

**Motion (`js/motion.js`):** scroll reveals (`[data-rise]`, `[data-stagger]`, `[data-words]` word-splitting), photo wipes on `.shot`, counting figures (`[data-count]`), interlude parallax (`img[data-zoom]`), nav/rail sync via IntersectionObserver, custom labelled cursor, and a breathing/pulsing/rotating halo behind the hero cutout. Fully respects `prefers-reduced-motion: reduce` (all animation off, content shown in final state).

**Tone:** confident editorial, statement-driven, claim-then-proof. Copy content carried over unchanged from the redesign — see "Still needs Rishabh" below for what's still a placeholder or unconfirmed.

## Fact discipline (verified 2026-09-16 — keep these exact framings)

- Funding: "over ₹200Cr ($24M+) … Series B led by Bertelsmann India Investments, with Chiratae Ventures, Blume Ventures **and others**" (Tracxn total $24.9M, 16 investors).
- Forbes: "**founding team** featured in Forbes 30 Under 30 **Asia 2018** (Enterprise Technology)" — never a solo personal claim (honoree list unverified).
- Scale: "10,000+ telecallers across 67 cities" and "one of India's largest tech-enabled telesales platforms" — NOT "the leading" (self-description only).
- Mesa: standalone practitioner-led B-school in Bangalore. **NOT part of Masters' Union** (the April site's framing was wrong). Audited outcome: **2.8× average** salary jump (never the 5.2× upper bound). Rishabh is adjunct/visiting faculty.
- EPIC/EHI: "~250M entrepreneurial households transacting up to $10 trillion a year"; "$100 trillion" is a **20-year projection**, never a present-day figure. EHI Index: 34 companies, ~$115Bn combined market cap **at launch (Feb 2025)**, with Morningstar Indexes.
- Tenures: SquadStack "2015–2024 / nine years" (end date publicly fuzzy — his departure post is ~April 2025); "eleven years on the revenue side" = whole career including EPIC. Don't state an EPIC join year.
- ICMA talk was **Vienna 2018** (not 2021). Elets keynote title is "Transforming Sales with Better CX in 2024".

## Contact & lead capture

Form is a plain HTML POST (no JS submission handling) in `#contact`, styled in-system, with a `_honey` honeypot, wired to FormSubmit.co with Rishabh's email: **rishabhladha17@gmail.com**. **One-time activation still pending:** on the first submission, FormSubmit emails Rishabh a confirmation link he must click once; until then submissions are not delivered. Direct channels shown alongside: email (mailto), LinkedIn (`in.linkedin.com/in/rishabhladha`), X (`@rishabhladha`).

## Still needs Rishabh (all marked as HTML comments `[CONFIRM with Rishabh: ...]` / `[PASTE ...]` in `index.html` — never rendered)

- **Form activation**: submit the contact form once, then Rishabh clicks FormSubmit's confirmation link.
- Which client brands can be named — Founder Thesis publicly cites Kotak, AngelOne, IndiaMART as SquadStack clients, unconfirmed by him — `#brands`, `#work`.
- The **pivot story** (SquadStack→EPIC; his LinkedIn departure post is the source), EPIC day-to-day + publishing restrictions, SquadStack internal numbers he's comfortable publishing — `#work`.
- The four "How I work" phases are drafted from his approved offer line and need his sign-off — `#how`.
- Sign-off on the private-workshops offer being public — `#coaching`.
- Mesa course name/format; Scaler module name/format and whether current — `#teaching`.
- Converge'26 panel (Feb 7 2026, 3one4 Capital, Bengaluru) — add to `#wild` when a recording/summary is published.

## Deployment

- **Vercel**: https://rishabh-ladha-website.vercel.app — production auto-deploys on push to `main`.
- **GitHub**: https://github.com/dishambles/rishabh-ladha-website
- Vercel project is under Disha's `dishambles-projects` scope (transfer to Rishabh is a Vercel project-transfer operation if ever needed).
- Custom domain not configured — target `rishabhladha.com` (confirm with Rishabh).
- `vercel.json` redirects the four old page paths (extension-less and `.html`) to in-page anchors, so any external links (LinkedIn headline, speaker bios, search results) into the old multi-page site keep working.

## Pre-launch checklist

- [x] One-page long-scroll redesign implemented (hero, 10 numbered chapters, interludes, motion)
- [x] Old sub-pages removed; redirects to in-page anchors added (`vercel.json`)
- [x] No `[CONFIRM]`/`[PASTE]` text renders publicly (all moved into HTML comments)
- [x] Favicon, og:image (absolute URL), JSON-LD Person on index
- [x] Rishabh's email wired into form, mailto links, JSON-LD
- [x] Real testimonials (6 LinkedIn posts) in the ticker, quoted + linked
- [ ] Form activation: first submission + Rishabh clicks FormSubmit's confirmation link
- [ ] Content interview with Rishabh (see "Still needs Rishabh")
- [ ] Custom domain on Vercel (`rishabhladha.com`)
- [ ] Add URL to Rishabh's LinkedIn headline and speaker bios after launch

Do NOT do a launch announcement post — it should feel like it's always been there.

## What not to change

- Do not add a second accent colour — cobalt (`--acid`) is the only one, by design
- Do not add border-radius or shadows — square corners everywhere is deliberate
- Do not add a blog or newsletter signup
- Do not use stock images or photos without rights
- Do not write "India's leading sales expert" (definite article) or any unhedged superlative — "one of India's leading…" stacked on the proof figures is the ceiling
- Do not present the $100T figure as current, the 5.2× salary jump, Mesa as Masters' Union, or Forbes 30U30 as a solo honor (see Fact discipline)
- Do not disable `prefers-reduced-motion` handling in `motion.js`/`site.css`

## Session history

### 2026-04-22 — Initial build + deploy
Built 5 pages (warm-minimal system, EB Garamond/Inter), deployed to Vercel, portrait added. Shipped with ~30 rendered `[CONFIRM]` placeholders and all In-the-Wild links dead.

### 2026-09-16 — Repositioning + full redesign + research fill
- Deep research pass: found real URLs/dates for all appearances (corrections: ICMA was Vienna 2018; GTMDialogues was Mar 22 2025; Elets title), found new appearances (Mesa video, Offline Network, Converge'26), verified/corrected every load-bearing claim (see Fact discipline), confirmed X handle, confirmed no public email.
- Owner decisions: reposition around "a leading sales expert in the country" (hedged form used), underplay EPIC, full redesign with mockups first, add contact form (rule reversal).
- Three design directions mocked on a canvas; owner chose "Bold Editorial". Rebuilt all 5 pages + CSS; favicon, og:images, JSON-LD, portrait optimization.

### 2026-09-23 — One-page long-scroll rebuild
- Implemented a design handoff (`design_handoff_rishabh_site/README.md`, delivered as HTML/CSS/JS design references) that replaced the 5-page "Bold Editorial" site with a single scrolling page in a new statement-driven design system (Archivo, one cobalt accent, square corners, motion layer).
- Ported `index.html`, `styles/site.css` (inlining the two tokens — `--font-grotesque`, `--statement-quiet` — the design references pulled from an external design-system stylesheet, and collapsing unused legacy multi-hue CSS variables to the single `--acid`/`--acid-lit` accent), and the new `js/motion.js`; removed the `?vNN` cache-busting query strings that were only needed in the design-preview environment.
- Deleted `work.html`, `teaching.html`, `in-the-wild.html`, `contact.html`, `styles/main.css`; added `vercel.json` redirecting both the extension-less and `.html` old paths to the matching in-page anchor.
- Copied in new event photos and the hero's B&W cutout (`portrait-cutout.png`) from the design handoff's assets.
- Carried over all `[CONFIRM]`/`[PASTE]` HTML comments from the design references — content gaps are unchanged, see "Still needs Rishabh".
- Built on branch `redesign/one-page-longscroll`, not yet merged to `main`.

### 2026-09-23 — Real testimonials in the ticker
- Replaced the 6 placeholder slot cards in `#said` with real LinkedIn posts (owner-sourced list of public posts mentioning Rishabh), each as a quoted line + `Name · Title · LinkedIn` linking to the original post: Hasmitha Rangaswamy (Growth and Product), Sharan Raj Vepamaninti, Siddhant Bassi, Vasudeva Kashyap, Durgesh Panchal, Aritra Mukherjee (the latter five all Mesa School of Business students/context).
- Considered embedding the posts live (LinkedIn iframe embeds) instead of quoting; rejected it — LinkedIn's fixed-size branded iframe clashes with the site's custom `.said` card design, is a perf/jank risk at 12 concurrent iframes in an animating ticker, and breaks silently if a post's visibility ever changes. Quoting matches the design handoff's own intended markup.
