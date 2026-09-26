# Rishabh Ladha Personal Website

Personal-brand site for Rishabh Ladha — positioned as **one of India's leading sales experts and coaches** (note the article: "one of India's leading", never "India's leading" — the definite superlative has no third-party backing and was deliberately rejected). Co-founder of SquadStack, sales educator at Mesa School of Business and Scaler, takes on sales assignments, coaching, and private workshops. EPIC World (his current day job, Head of GTM) is **deliberately underplayed** — one credential line, one short entry — by owner decision on 2026-09-16.

## What this site is

A single-page, long-scroll site (redesigned 2026-09-23, replacing the earlier 5-page "Bold Editorial" system), plus one separate `resources/` page. Primary jobs: (1) answer "who is this person, why should I care?" for founders, sales leaders, and conference organizers; (2) convert serious inbound into contact-form submissions ("Work with me"). Branding page first, light lead capture second.

## Stack

Plain HTML + CSS + vanilla JS. No framework, no build step, no dependencies.

- `index.html` — the main page, organised into 6 numbered chapters (see below) plus a hero, one full-bleed interlude and a photo strip
- `resources/index.html` — Resources page (off the main scroll): coming-soon grid with request access, talks & podcasts, request-access form. Uses `../` relative paths to the shared CSS/JS/assets
- `styles/site.css` — all styles, design tokens in `:root`
- `js/motion.js` — all behaviour: scroll reveals, word-splitting, counters, parallax, dot-rail/nav sync, custom cursor
- `favicon.svg` — RL monogram (ink square, paper letters, red underline)
- `assets/images/` — `rishabh-portrait.jpg` (884×822 source), `portrait-cutout.png` (transparent B&W-ready cutout used in the hero). Photos (all from Disha's `~/Downloads/Website images`, EXIF-rotated, ≤1600px, metadata stripped where converted) and where they're used: `orange-health-training.jpg` (insight, beside the copy, captioned Orange Health · Sales team training), `class-group.jpg` (IMG_1473, class group photo — What we do, human-led column; no caption, by owner choice), `rishabh-at-work.jpg` (IMG_6675, at his desk — What we do, systems column), `gtmdialogues-room.jpg` (interlude after the system), strip: `gtmdialogues-talk.jpg`, `keynote-bfsi-cxo.jpg`, `orange-health-team.jpg`, `award-onbfsi.jpg`; `gtmdialogues-group.jpg` (resources page interlude). Unused: `classroom-session.jpg`, `mesa-panel.jpg` (owner: not actually Mesa). `assets/images/logos/` holds the client logos `orange-health.svg`, `equitylist.svg`, `tenjin.svg` — each company's own file from its website, rendered solid black via `.logos img{filter:brightness(0)}`
- `vercel.json` — permanent redirects from the old page paths: `/work` and `/teaching` → `/#work`, `/in-the-wild` → `/resources/#talks`, `/contact` → `/#contact` (plus `.html` forms)

## Page structure (top to bottom)

The page follows a narrative spine (owner decision 2026-09-23): **insight → alternatives → the system (ideal outcome) → what we do (solution) → track record → contact.** Credibility deliberately comes *after* the story, not straight after the hero.

| # | id | Chapter |
|---|---|---|
| — | `#home` | Hero — "Improving sales talent in India", chain previewing the system (context · expert · AI loop), lead "I build sales programs around your team, then stay on to keep improving them.", three proof figures from his CV (11 years on the revenue side · $10M enterprise bookings built · 50+ sales reps trained), CTA, B&W cutout with animated cobalt halo |
| 01 | `#insight` | The insight — cobalt `?` tag + "Why does the world's best tennis player still have a coach?" + "Every seller needs a coach" |
| 02 | `#alternatives` | "The usual sales enablement fixes don't stick." (one line, `.stmt-md`) — template playbooks, one-and-done training, no feedback loop (`.phases--3`) |
| 03 | `#system` | The ideal outcome, not a pitch: "Sales enablement systems need to be built around your team and improved with you, with humans in the loop." Four parts in owner's order: context → sales expert → AI learning loop → continuous monitoring |
| — | `.interlude` | Full-bleed photo (GTM Dialogues room), caption only |
| 04 | `#what-we-do` | "The future of sales enablement." Two groups of three (`.offer`): **Human-led** — college classrooms, enterprise sales, leadership coaching; **Systems + human-led** — GTM systems, agents, learning modules. Each row links to `#contact` |
| 05 | `#work` | Track record — roster (Work: SquadStack, Elevar Equity, EPIC World · Teaches at: Mesa, Scaler School of Business · Trained teams at: Orange Health / EquityList / Tenjin logos · Stages · Honours: Forbes) + "In their words." testimonial ticker |
| — | `.strip` | Photo strip (GTM Dialogues talk, 2× Orange Health training, ON BFSI award) |
| 06 | `#contact` | Work with me — About merged in (portrait + name + positioning line in `.sig`), black end block, FormSubmit contact form |

Removed 2026-09-23 on owner feedback: the "Founder-led sales is a phase" pull quote, the SquadStack clients row, the "Where the system already runs" section (figures, Mesa/Scaler/founder entries), the award interlude (its photo is in the strip), and "In the wild" (moved to `resources/`).

**Voice:** "we" only in What we do; the system chapter is written as the ideal outcome, not "we"; "I" for the hero lead and Work with me. Owner's copy rules: **active voice, flowing sentences (not staccato fragments), less text, and no AI-sounding "we do X, not Y" / "X, not Y" contrasts.**

**Story guardrails:** workshops appear only as the kickoff of a program, never as a standalone offer (the page argues against one-and-done training); every AI mention carries its human expert (the page argues AI alone isn't enough); nothing may promise the team will run "without us" (the system is continuous monitoring).

Fixed UI: top nav (links to every chapter, active link underlined) + left dot rail (one dot per chapter, active dot filled cobalt), both driven by `data-chapter` attributes and IntersectionObserver in `motion.js`.

**No visible chapter labels** (owner, 2026-09-23): sections carry no `.chapter-head` eyebrow/number ("01 The insight", "My work", "What teams try instead"…) on either page. The top nav is the only chapter signposting; `data-chapter` stays for the rail/nav. Don't add them back.

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

**Tone:** confident editorial, claim-then-proof, active voice. Page copy comes from the shared doc (see Owner answers); see "Still needs Rishabh" for what's still a placeholder.

## Fact discipline (verified 2026-09-16 — keep these exact framings)

- Funding: "over ₹200Cr ($24M+) … Series B led by Bertelsmann India Investments, with Chiratae Ventures, Blume Ventures **and others**" (Tracxn total $24.9M, 16 investors).
- Forbes: Forbes 30 Under 30 **Asia 2018** (Enterprise Technology). Owner confirmed 2026-09-23 that Rishabh was a SquadStack co-founder, so the roster row "Listed in: Forbes 30 Under 30 Asia 2018" stays as his own credential (this replaces the earlier "founding team only" rule).
- Scale: "10,000+ telecallers across 67 cities" and "one of India's largest tech-enabled telesales platforms" — NOT "the leading" (self-description only).
- Mesa: standalone practitioner-led B-school in Bangalore. **NOT part of Masters' Union** (the April site's framing was wrong). Audited outcome: **2.8× average** salary jump (never the 5.2× upper bound). Rishabh is adjunct/visiting faculty.
- EPIC/EHI: "~250M entrepreneurial households transacting up to $10 trillion a year"; "$100 trillion" is a **20-year projection**, never a present-day figure. EHI Index: 34 companies, ~$115Bn combined market cap **at launch (Feb 2025)**, with Morningstar Indexes.
- Tenures: SquadStack "2015–2024 / nine years" (end date publicly fuzzy — his departure post is ~April 2025); "eleven years on the revenue side" = whole career including EPIC. Don't state an EPIC join year.
- ICMA talk was **Vienna 2018** (not 2021). Elets keynote title is "Transforming Sales with Better CX in 2024".
- **From Rishabh's CV (owner-supplied 2026-09-26, `~/Downloads/Rishabh_Ladha_CV (3).docx`) — his own figures, safe to use as stated:** rebuilt SquadStack India enterprise bookings from near-zero to **$10M** (2020–24, after ARR fell from $5M to <$1M in Covid); **100+** enterprise and mid-market accounts sold and onboarded; built and led a team of **30+** across Sales, Marketing and CS; raised **$21M** Seed through Series B (led the $14M Series B and the $2M seed); **50+** reps trained across businesses since 2024 (PE-backed SaaS QA platform, Series B healthtech, seed-stage startup); Elevar Equity **2012–15**, $200M in deals; EPIC Head of GTM since May 2025 (don't publish the year), $4M pipeline / 24+ deals / 150+ demos in 6 months; summarised 10+ sales books; founded the Masters of Sales community. CV says "14+ years building GTM" (includes the VC years) — the site keeps "11 years on the revenue side" (2015–now). If a funding figure returns, use the CV's $21M, not Tracxn's $24.9M.


**Owner answers, 2026-09-23 (content pass):**
- The AI learning loop is not a product: it is built for each company inside a one-on-one engagement. Copy must say "for each engagement", never imply a standalone AI tool.
- All six offerings in `#what-we-do` are live; all are consulting engagements (the page doesn't need to say so). "We" stays for now.
- Mesa course: **B2B Sales**. Scaler course: **B2B Sales**. Classroom offering copy (owner, later): B2B sales, marketing and customer success courses for undergraduate and postgraduate students. EPIC has no publishing restrictions.
- Rishabh's work history on the roster includes **Elevar Equity** (spelled E-L-E-V-A-R) between SquadStack and EPIC World. Roster label is "Honours" for Forbes (owner said "honorary"; "Honours" used — confirm).
- SquadStack clients Kotak, AngelOne, IndiaMART were cleared to name, then the row was removed by owner choice (2026-09-23).
- Sales teams Rishabh has trained (past engagements, shown with logos in `#work`): **Orange Health, EquityList, Tenjin** (tenjin.com, the mobile marketing analytics company — owner confirmed).
- Working copy for the whole page lives in the shared doc "Website content: draft for Rishabh's markup" (https://claude.ai/code/artifact/3b477d7a-8729-4c9e-b763-05c06e040be9). Applied to `index.html` on 2026-09-23 at doc rev 30. **The site has since moved on (round 3 feedback applied directly), so the doc is stale — `index.html` is now the source of truth.**


## Contact & lead capture

Form is a plain HTML POST (no JS submission handling) in `#contact`, styled in-system, with a `_honey` honeypot, wired to FormSubmit.co with Rishabh's email: **rishabhladha17@gmail.com**. **One-time activation still pending:** on the first submission, FormSubmit emails Rishabh a confirmation link he must click once; until then submissions are not delivered. Direct channels shown alongside: email (mailto), LinkedIn (`in.linkedin.com/in/rishabhladha`), X (`@rishabhladha`).

## Still needs Rishabh (all marked as HTML comments `[CONFIRM with Rishabh: ...]` / `[PASTE ...]` in `index.html` — never rendered)

- **Form activation**: submit the contact form once, then Rishabh clicks FormSubmit's confirmation link.
- **Parked (Disha will collect later):** 2–3 testimonials from founders or sales leaders — `#work` ticker.
- Testimonial headline "In their words." is a pick from options offered 2026-09-23 — owner may swap it.
- Converge'26 panel (Feb 7 2026, 3one4 Capital, Bengaluru) — add to `resources/` Talks & podcasts when a recording/summary is published.
- **Numbers:** owner wants proof numbers for the hero ("on the revenue side") and possibly program figures; waiting on Rishabh's CV.
- More photos welcome: current slots are filled (insight, What we do ×2, interlude, strip, resources); unused `classroom-session.jpg`/`mesa-panel.jpg` need their real source before use.
- Resources page items are all "coming soon" with request access (FormSubmit, `_subject` "Resource access request").

## Deployment

- **Vercel**: https://rishabh-ladha-website.vercel.app — production auto-deploys on push to `main`.
- **GitHub**: https://github.com/dishambles/rishabh-ladha-website
- Vercel project is under Disha's `dishambles-projects` scope (transfer to Rishabh is a Vercel project-transfer operation if ever needed).
- Custom domain not configured — `rishabhladha.com` was unregistered on 2026-09-26 (`.co` too). When a domain is added: point it at this Vercel project, then replace the absolute `rishabh-ladha-website.vercel.app` URLs in `og:image` and JSON-LD (`index.html`, `resources/index.html`) with the new domain.
- `vercel.json` redirects the four old page paths (extension-less and `.html`), so any external links (LinkedIn headline, speaker bios, search results) into the old multi-page site keep working.

## Pre-launch checklist

- [x] One-page long-scroll redesign implemented (hero, 6 numbered chapters, interlude, strip, motion) + `resources/` page
- [x] Old sub-pages removed; redirects to in-page anchors added (`vercel.json`)
- [x] No `[CONFIRM]`/`[PASTE]` text renders publicly (all moved into HTML comments)
- [x] Favicon, og:image (absolute URL), JSON-LD Person on index
- [x] Rishabh's email wired into form, mailto links, JSON-LD
- [x] OK from Orange Health, EquityList and Tenjin to show their logos, and Orange Health for the team photos (owner confirmed 2026-09-26)
- [x] Real testimonials (6 LinkedIn posts) in the ticker, quoted + linked
- [ ] Form activation: first submission + Rishabh clicks FormSubmit's confirmation link
- [ ] Content interview with Rishabh (see "Still needs Rishabh")
- [ ] Custom domain on Vercel (`rishabhladha.com`)
- [ ] Add URL to Rishabh's LinkedIn headline and speaker bios after launch

Do NOT do a launch announcement post — it should feel like it's always been there.

## What not to change

- Do not add a second accent colour — cobalt (`--acid`) is the only one, by design
- Do not add border-radius or shadows — square corners everywhere is deliberate
- Do not add a blog or newsletter signup (the owner-requested request-access form on `resources/` is the one exception)
- Do not use stock images or photos without rights
- Do not write "India's leading sales expert" (definite article) or any unhedged superlative — "one of India's leading…" stacked on the proof figures is the ceiling
- Do not present the $100T figure as current, the 5.2× salary jump, Mesa as Masters' Union, (see Fact discipline)
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

### 2026-09-23 — Content restructured around a narrative spine
- Owner set the content order: insight → alternatives → system (ideal outcome) → solution → proof/credibility → contact. Reordered `index.html` to match; existing blocks moved verbatim, new chapters written for the story beats.
- New: `#insight` (question + "Every seller needs a coach", moved up from the old Coaching chapter), `#alternatives` (owner's three: template playbooks, one-and-done training, no feedback loop on outcomes), `#system` (owner's ideal outcome: custom module for your context + AI learning loop built alongside + human sales expert continuously improving it, for you and with you), `#what-we-do` ("The future of sales enablement", owner's line; six offerings by audience).
- Removed: "How I work" 4 phases, the "Teams stall on the playbook" thesis, the Coaching/private-workshops chapter, and the hero chain "Leave it running without me" — all contradicted the continuous-improvement system. Work + Teaching merged into `#work` "Track record" with the figures.
- Added `.phases--3` (3-column variant) in `site.css`; nothing else in the design system changed.

### 2026-09-23 — Marked-up copy applied from the shared doc
- Wrote every line of page copy into a shared Claude Doc for markup; Disha marked it up and answered the open questions (see "Owner answers"), then the doc (rev 30) was applied to `index.html`.
- Insight question → the tennis-coach question (option D of five drafted). System chapter rewritten in active voice. Worked with: "Backed by" dropped, SquadStack clients row added. Track record rebuilt around programs (Mesa, Scaler, Sales teams trained with logos, Founder sessions); SquadStack/EPIC compressed into one "Where it started" entry; funding figures removed. About merged into Contact as `09 Work with me` (nav "About" link and `#who` removed; nothing linked to it). Search + link-preview description switched to the new positioning.
- Added `.logos` and `.sig` in `site.css`. Downloaded the three client logos (owner-approved) from each company's own site.

### 2026-09-23 — Round 3: owner feedback on the live page
- Insight `?` glyph restyled from a grey outlined box (read as a missing image) to a solid cobalt tag. Alternatives headline made technically precise and one line. System chapter reframed as the ideal outcome with the owner's own headline and step order; descriptions rewritten to drop AI-sounding contrasts.
- What we do split 3 + 3 (human-led | systems + human-led) with renamed offerings. Worked with, logos and testimonials merged into one Track record; placeholder figures and program entries removed with it.
- New `resources/` page: coming-soon grid with request access, the seven talks/podcasts moved off the main page, request-access form. `/in-the-wild` now redirects there; `/teaching` → `/#work`.
- Two Orange Health training photos replace `classroom-session.jpg` and `mesa-panel.jpg` in the strip.
