# Site Structure & Architecture (v2)

## Site Map

```
/                           Homepage
├── /work                   Ways I Work
├── /case-studies           Case Studies Index
│   ├── /tetra-pak          Case Study: Tetra Pak
│   └── /synthesis-internal Case Study: Synthesis
├── /extra                  Side Projects & Experiments
├── /thinking               Blog
└── /about                  About Ziff
```

---

## Navigation

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo/Name]     Ways I Work  Proof  Extra  Thinking  About │
│                                              [Let's Talk →] │
└─────────────────────────────────────────────────────────────┘
```

- Logo/Name: Links to /
- Let's Talk: Button style, scrolls to CTA or opens contact

---

## Page: Homepage (/)

### Section 1: Hero

```
┌─────────────────────────────────────────┐
│                                         │
│            Be extra.                    │
│                                         │
│  Workshops, programmes, and team        │
│  experiences—with a little extra soul.  │
│                                         │
└─────────────────────────────────────────┘
```

- Full viewport height (or near)
- Big bold serif headline
- Subtle entrance animation

---

### Section 2: Visual Montage

- Full-bleed image or video
- Workshop moments, room setups, artifacts
- Can be static image for v1, video later

---

### Section 3: Ways I Work Preview

```
┌─────────────────────────────────────────┐
│  Ways I Work                            │
│  Three ways I help teams feel something │
│  other than the quiet dread of another  │
│  workshop.                              │
│                                         │
│  [Explore →]                            │
│                                         │
│  • Transformation Programmes            │
│    Shift behaviour, not just transfer   │
│    knowledge.                           │
│                                         │
│  • Team Workshops                       │
│    Design thinking with soul.           │
│                                         │
│  • Speaking                             │
│    The interesting stuff.               │
└─────────────────────────────────────────┘
```

---

### Section 4: Case Studies Preview

```
┌─────────────────────────────────────────┐
│  Proof                                  │
│  The kind of sessions people mention    │
│  weeks later, unprompted.               │
│                                         │
│  [Explore →]                            │
│                                         │
│  ┌─────────────┐  ┌─────────────┐      │
│  │ [Image]     │  │ [Image]     │      │
│  │ Tetra Pak   │  │ Synthesis   │      │
│  └─────────────┘  └─────────────┘      │
└─────────────────────────────────────────┘
```

---

### Section 5: Extra Preview

```
┌─────────────────────────────────────────┐
│  Extra                                  │
│  Side projects, experiments, and the    │
│  weird stuff that makes the work work.  │
│                                         │
│  [Explore →]                            │
│                                         │
│  [Improv]  [Teaching]  [...]            │
└─────────────────────────────────────────┘
```

---

### Section 6: Blog Preview

```
┌─────────────────────────────────────────┐
│  Thinking                               │
│  Ideas I bake into sessions.            │
│                                         │
│  [Read more →]                          │
│                                         │
│  • Why nobody ever changed because...   │
│  • The Salt Bae principle               │
│  • What the room needs from you         │
└─────────────────────────────────────────┘
```

---

### Section 7: CTA

```
┌─────────────────────────────────────────┐
│                                         │
│  If this resonates, let's talk.         │
│                                         │
│  WhatsApp me. Email me.                 │
│  Tell me what you're working on.        │
│                                         │
│  [number] · [email]                     │
│                                         │
└─────────────────────────────────────────┘
```

---

## Page: Ways I Work (/work)

### Hero

```
┌─────────────────────────────────────────┐
│                                         │
│  Ways I Work                            │
│                                         │
│  Three ways I help teams feel something │
│  other than the quiet dread of another  │
│  workshop.                              │
│                                         │
└─────────────────────────────────────────┘
```

### Image Montage

- Grid or carousel of workshop images

### What Our Work Delivers

```
• Moments that stick
• Behaviour shift, not just knowledge transfer
• Teams that feel, not just think
• Sessions people actually remember
```

### Offerings List

| Offering | Tagline | Description |
|----------|---------|-------------|
| Transformation Programmes | Shift behaviour, not just transfer knowledge. | Your team knows the process. Something's still not landing. I design immersive experiences that shift behaviour, not just transfer knowledge. Research, workshop design, facilitation, artifacts. The full build. |
| Team Workshops | Design thinking with soul. | You want something more than the usual. Design thinking with soul. Presentations that resonate. A session people actually remember. Without a 2-month custom build. |
| Speaking | The interesting stuff. | Talks on facilitation, experience design, and why the corporate world can afford to be more extra. |

### CTA

Same as homepage footer CTA.

---

## Page: Case Studies Index (/case-studies)

### Hero

```
┌─────────────────────────────────────────┐
│                                         │
│  Proof                                  │
│                                         │
│  The kind of sessions people mention    │
│  weeks later, unprompted, like a song   │
│  they can't get out of their head.      │
│                                         │
└─────────────────────────────────────────┘
```

### Case Study Grid

Two cards (for now):

1. **Synthesis × Global FMCG Client**
   - Image thumbnail
   - "Shifting a team stuck in tool-mode to use of self."
   - Link to /case-studies/tetra-pak

2. **Synthesis (internal)**
   - Image thumbnail
   - "From brilliant analysis to felt resonance."
   - Link to /case-studies/synthesis-internal

---

## Page: Individual Case Study (/case-studies/[slug])

### Structure (following Collins pattern)

```
┌─────────────────────────────────────────┐
│  [Hero Image - full width]              │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│                                         │
│  # Synthesis × Global FMCG Client       │
│  Shifting a team stuck in tool-mode     │
│  to use of self.                        │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  Programme: Transformation              │
│  Industry: FMCG / Consumer Goods        │
│  Scope: 30+ participants, 8 APAC        │
│         markets, 2-month co-design      │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  [The Story - expandable]               │
│                                         │
│  The marketing team knew design         │
│  thinking. They'd been trained...       │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  ## What We Built                       │
│                                         │
│  • Clue hunt                            │
│  • Discovery-based challenges           │
│  • Workshop segments (4 behaviours)     │
│  • Guidebook                            │
│  • Films (written & performed)          │
│  • AI coaches                           │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  ## Impact                              │
│                                         │
│  "A safe space for introverts."         │
│  "The confidence was already inside."   │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  ## Credits                             │
│                                         │
│  Ziff - Lead Facilitator & Designer     │
│  Synthesis - Partner                    │
│                                         │
└─────────────────────────────────────────┘
```

---

## Page: Extra (/extra)

### Hero

```
┌─────────────────────────────────────────┐
│                                         │
│  Extra                                  │
│                                         │
│  Learning to see. Side projects,        │
│  experiments, and the interesting stuff.│
│                                         │
└─────────────────────────────────────────┘
```

### Grid of Cards

| Title | Description |
|-------|-------------|
| **Improv** | Paying money to be embarrassed on purpose. Practising at [venue/group]. |
| **Teaching at SIT** | Design Innovation at Singapore Institute of Technology. Futures, systems, and applying design thinking to life. |
| **[Future]** | Placeholder for future experiments |

---

## Page: Thinking / Blog (/thinking)

### Hero

```
┌─────────────────────────────────────────┐
│                                         │
│  Thinking                               │
│                                         │
│  Ideas I bake into sessions. POVs on    │
│  facilitation, design, and why the      │
│  corporate world can afford to be       │
│  more extra.                            │
│                                         │
└─────────────────────────────────────────┘
```

### Post List

For each post:
- Title (linked)
- Date
- Excerpt (first ~100 words)

**v1:** Static .md files in /content/blog/
**v2:** Pull from Substack RSS

---

## Page: About (/about)

### Layout

```
┌─────────────────────────────────────────┐
│                                         │
│  [Photo]          Ziff                  │
│                   Facilitator &         │
│                   Experience Designer   │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  [Bio - Sedaris version]                │
│                                         │
│  Ziff is a facilitator and experience   │
│  designer based in Singapore...         │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  The Through-Line                       │
│                                         │
│  The extra is what turns ads into       │
│  culture, workshops into moments...     │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  [Logo Strip]                           │
│  Ogilvy · Saatchi · What If! ·          │
│  Accenture Song · GovTech · Synthesis   │
│                                         │
└─────────────────────────────────────────┘
```

---

## Components

| Component | Used In |
|-----------|---------|
| Nav.astro | All pages |
| Footer.astro | All pages |
| Hero.astro | Homepage |
| PageHero.astro | Inner pages |
| WaysToWorkCard.astro | Homepage, /work |
| CaseStudyCard.astro | Homepage, /case-studies |
| ExtraCard.astro | Homepage, /extra |
| BlogPostCard.astro | Homepage, /thinking |
| LogoStrip.astro | Homepage, /about |
| CTA.astro | Homepage, /work, /about |

---

## Responsive Breakpoints

| Breakpoint | Width | Tailwind |
|------------|-------|----------|
| Mobile | < 640px | Default |
| Tablet | ≥ 640px | `sm:` |
| Desktop | ≥ 1024px | `lg:` |
| Large | ≥ 1280px | `xl:` |

---

## Setup Commands

```bash
# Create Astro project
npm create astro@latest ziff-website-v2
cd ziff-website-v2

# Add Tailwind
npx astro add tailwind

# Add GSAP
npm install gsap

# Run dev server
npm run dev
```

---

## Checklist Before Launch

- [ ] All copy matches content/copy.md
- [ ] Photo added
- [ ] Contact details added
- [ ] Workshop images for case studies
- [ ] Logo files (or text fallback)
- [ ] Animations work smoothly
- [ ] Mobile responsive
- [ ] Lighthouse 90+
- [ ] Meta tags / OG image
- [ ] Favicon
- [ ] Domain connected
