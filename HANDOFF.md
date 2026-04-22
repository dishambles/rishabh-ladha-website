## Last Session Date
2026-04-22

## What We Did
Built Rishabh Ladha's personal website from scratch — 5 HTML pages, full CSS design system, portrait photo wired in — and deployed it to production on Vercel with GitHub CI connected. The site is live but content-incomplete: all copy drafted from the PRD is in place, and every section that needs Rishabh's direct input is marked `[CONFIRM: ...]` in the HTML.

## What's Working
- Site is live at https://rishabh-ladha-website.vercel.app
- All 5 pages render: Home, Work, Teaching, In the Wild, Contact
- Portrait photo (`assets/images/rishabh-portrait.jpg`) is in the hero
- Push to `main` on GitHub auto-deploys to Vercel production
- GitHub repo: https://github.com/dishambles/rishabh-ladha-website
- Typography, color system, layout all match PRD spec

## What's Broken or Incomplete
- All `[CONFIRM: ...]` placeholders in HTML — site reads thin without Rishabh's actual content
- Email address missing in `contact.html` and `index.html`
- All "In the Wild" entry links are `#` — need real URLs
- `in-the-wild.html` — Theme 4 (VC→operator arc) is a placeholder block; cut it if no material exists
- `teaching.html` — "Other" section is a placeholder; cut if thin
- Portrait photo is un-optimized JPG (should convert to WebP, ~150KB target)
- Favicon not created (RL monogram in `#2D4A3E`)
- Custom domain not configured (`rishabhladha.com`)
- `og:image` meta tag only on index.html — missing on work, teaching, in-the-wild, contact pages

## Decisions Made (Do Not Re-Litigate)
- Stack: plain HTML + CSS, no framework — overkill for a credibility-anchor site with infrequent updates
- Deployed to Vercel (not Netlify) — GitHub integration already set up
- Hero tagline set to "Accidentally good at sales. Intentionally teaching it." — the three PRD variants were used as-is pending Rishabh's preference
- Portrait: SquadStack headshot used (black polo, neutral background, genuine smile) — PRD said "casual but high-quality, not a corporate headshot"; this clears the bar
- No JS, no animations — by design, not an oversight

## Next Session — Tackle In This Order
1. **Fill [CONFIRM: ...] placeholders** — go through each HTML file, replace every marker with Rishabh's actual content. Start with `work.html` (most content-sparse), then `teaching.html`, then `index.html` "thinking about" section, then `in-the-wild.html` links
2. **Add real URLs** to all In the Wild entries in `in-the-wild.html`; cut Theme 4 if no material
3. **Configure custom domain** on Vercel: go to vercel.com → rishabh-ladha-website project → Domains → add `rishabhladha.com`
4. **Add favicon** — create an RL monogram SVG in `#2D4A3E`, save as `favicon.svg` and `favicon.ico` in project root, add `<link rel="icon">` to all HTML pages
5. **Optimize portrait** — convert `assets/images/rishabh-portrait.jpg` to WebP, max 800px wide, target under 150KB; update `src` in `index.html`
6. **Fill og:image** on `work.html`, `teaching.html`, `in-the-wild.html`, `contact.html`

## Flags and Warnings
- The site is already live at the Vercel URL — don't share this URL publicly until `[CONFIRM: ...]` placeholders are filled. The site is navigable but visibly draft-state.
- Vercel scope is `dishambles-projects` (Disha's account) — the site lives under Disha's Vercel team, not a Rishabh-owned account. If ownership needs to transfer, that's a Vercel project transfer operation.
- Vercel CLI is one version behind (51.8.0 vs 52.0.0) — `npm i -g vercel@latest` to update before next deploy session.
- The PRD (`rishabh-ladha-website-prd.md`) has detailed rationale for every design decision and a full list of open questions for the Rishabh interview — read it before filling placeholders.
