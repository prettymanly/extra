# CLAUDE.md — Ziff's Website Project (v2)

## Project Overview

Build a multi-page portfolio website for Ziff, a facilitator and experience designer based in Singapore. Inspired by wearecollins.com — bold, confident, premium feel. Personality-led with clear offerings and proof.

**Tagline:** "Be extra."

**Goal:** Capture signals of interest from L&D leads and team directors who want memorable workshops.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| **Astro** | Static site generator. Fast, lightweight, multi-page support. |
| **Tailwind CSS** | Utility-first styling. Clean, spacious layouts. |
| **GSAP** | Scroll-triggered animations. Smooth, professional motion. |
| **Vercel** | Deployment. Connected to GitHub. |

---

## Site Structure

```
/                     → Homepage (hero + sections preview)
/work                 → Ways I Work (programmes, workshops, speaking)
/case-studies         → Case Studies index
/case-studies/[slug]  → Individual case study pages
/extra                → Side projects, experiments
/thinking             → Blog (RSS from Substack, or static for now)
/about                → About Ziff
```

---

## File Structure

```
ziff-website-v2/
├── CLAUDE.md
├── content/
│   ├── copy.md              # All website copy
│   └── blog/
│       ├── post-1.md
│       ├── post-2.md
│       └── ...
├── docs/
│   ├── design-brief.md      # Visual direction
│   └── structure.md         # Site architecture
├── src/
│   ├── layouts/
│   │   └── Layout.astro     # Base HTML layout
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── WaysToWork.astro
│   │   ├── CaseStudyCard.astro
│   │   ├── ExtraCard.astro
│   │   ├── BlogPreview.astro
│   │   ├── LogoStrip.astro
│   │   └── CTA.astro
│   ├── styles/
│   │   └── global.css
│   └── pages/
│       ├── index.astro      # Homepage
│       ├── work.astro       # Ways I Work
│       ├── case-studies/
│       │   ├── index.astro
│       │   ├── tetra-pak.astro
│       │   └── synthesis-internal.astro
│       ├── extra.astro
│       ├── thinking.astro   # Blog index
│       └── about.astro
├── public/
│   ├── fonts/
│   └── images/
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## Design Principles

1. **Bold, confident typography** — Big serif headlines (like Collins)
2. **Generous whitespace** — Let content breathe
3. **Warm, sophisticated palette** — Cream background, charcoal text, coral accent
4. **Smooth scroll animations** — GSAP ScrollTrigger
5. **Premium feel** — This is not a budget option
6. **Personality-led** — Ziff's voice throughout

See `docs/design-brief.md` for specifics.

---

## Content Rules

- **All copy is in `content/copy.md`** — source of truth
- Do not improvise or rewrite copy
- Maintain the tone: warm, wry, confident
- Quotes styled distinctly (italic, border-left accent)

---

## Navigation

| Menu Item | Route | Notes |
|-----------|-------|-------|
| Ways I Work | /work | |
| Proof | /case-studies | |
| Extra | /extra | |
| Thinking | /thinking | Blog |
| About | /about | |
| **Let's Talk** | # (scroll to CTA or modal) | Button style |

---

## Animation Guidelines

- **Entrance:** Fade up (opacity 0→1, y: 20→0) on scroll
- **Stagger:** 0.1s between elements
- **Duration:** 0.6-0.8s
- **Easing:** `power2.out`
- **Reduced motion:** Respect `prefers-reduced-motion`

---

## Key Pages

### Homepage
- Hero: "Be extra." + subtitle
- Image/video montage section
- Ways I Work preview (3 offerings)
- Case Studies preview (2 cards)
- Extra preview
- Blog preview (3 recent posts)
- CTA

### /work
- Full offerings with descriptions
- What our work delivers (bullet points)

### /case-studies/[slug]
- Hero image
- Title + one-liner
- Metadata sidebar (programme, industry, scope)
- Full story (expandable)
- What we built (augments)
- Impact + quotes
- Credits

### /extra
- Grid of side projects
- Improv, SIT teaching, experiments

### /thinking
- Blog post list
- Pull from Substack RSS (or static .md files for now)

### /about
- Photo
- Bio (Sedaris version)
- Background/career
- Logo strip

---

## Build Commands

```bash
npm install
npm run dev          # http://localhost:4321
npm run build
npm run preview
```

---

## Deployment

- Push to `main` branch
- Vercel auto-deploys
- Domain: [TBD]

---

## Placeholders Needed from Ziff

- [ ] Headshot photo
- [ ] Workshop photos (for montage, case studies)
- [ ] Logo files (SVGs preferred)
- [ ] WhatsApp number
- [ ] Email address
- [ ] Domain name

---

## Reference

- https://wearecollins.com/ — structure, confidence, premium feel
- https://smala.catering/ — typography, warmth
- https://tomcritchlow.com/ — blog-led, personality
