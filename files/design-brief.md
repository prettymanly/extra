# Design Brief — Ziff's Website (v2)

## Visual References

**Primary:** https://wearecollins.com/
- Bold, confident typography
- Full-bleed image sections
- Minimal navigation
- Premium case study layouts
- Clear hierarchy

**Secondary:** https://smala.catering/
- Warm color palette
- Smooth scroll animations
- Generous whitespace

---

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| **Cream** | `#FAF8F5` | Background |
| **Charcoal** | `#1A1A1A` | Primary text, headlines |
| **Warm Gray** | `#6B6B6B` | Secondary text |
| **Coral** | `#E85A3C` | Accent, links, buttons |
| **Light Gray** | `#E5E5E5` | Borders, dividers |

---

## Typography

### Fonts

| Type | Font | Weight | Fallback |
|------|------|--------|----------|
| **Headline** | Playfair Display | 700 | Georgia, serif |
| **Body** | Inter | 400, 500 | system-ui, sans-serif |

**Alternative headline options:**
- Fraunces (more playful, variable)
- Libre Baskerville (classic)

### Font Sizes

**Desktop:**

| Element | Size | Line Height |
|---------|------|-------------|
| Hero headline | 80-100px | 1.0 |
| Section headline | 48-56px | 1.1 |
| Subsection headline | 32-40px | 1.2 |
| Body large | 20px | 1.6 |
| Body | 18px | 1.6 |
| Small | 14px | 1.5 |

**Mobile:**

| Element | Size |
|---------|------|
| Hero headline | 48-56px |
| Section headline | 32-40px |
| Subsection headline | 24-28px |
| Body | 16px |

---

## Spacing System

Use Tailwind's default spacing scale. Key values:

| Name | Value | Usage |
|------|-------|-------|
| `py-24` | 96px | Section padding (desktop) |
| `py-16` | 64px | Section padding (mobile) |
| `gap-8` | 32px | Grid gaps |
| `mb-6` | 24px | Paragraph spacing |
| `mb-4` | 16px | Element spacing |

**Max widths:**
- Content: `max-w-4xl` (896px)
- Wide: `max-w-6xl` (1152px)
- Full bleed: `max-w-full`

---

## Layout Patterns

### Hero Section
- Full viewport height (or near: `min-h-[90vh]`)
- Centered text
- Large serif headline
- Smaller sans-serif subtitle
- Subtle scroll indicator (optional)

### Section Headers
- Left-aligned
- Section title in serif
- Subtitle/description in sans-serif
- "Explore →" link in coral

### Card Grid
- 2 columns on desktop
- 1 column on mobile
- Generous padding inside cards
- Subtle hover effect (slight lift or border change)

### Case Study Page
- Full-width hero image
- Two-column layout: content + metadata sidebar
- Expandable story section
- Artifact grid
- Quote styling: large italic, left border

---

## Animation Guidelines

### GSAP ScrollTrigger

**Standard entrance:**
```javascript
gsap.from(element, {
  opacity: 0,
  y: 20,
  duration: 0.6,
  ease: "power2.out",
  scrollTrigger: {
    trigger: element,
    start: "top 80%"
  }
});
```

**Stagger for multiple elements:**
```javascript
gsap.from(elements, {
  opacity: 0,
  y: 20,
  duration: 0.6,
  stagger: 0.1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: container,
    start: "top 80%"
  }
});
```

**Reduced motion:**
```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  // Run animations
}
```

---

## Component Styling

### Buttons

**Primary (CTA):**
```css
bg-coral text-white px-6 py-3 font-medium hover:bg-opacity-90 transition
```

**Secondary (Link style):**
```css
text-coral hover:underline transition
```

### Links

```css
text-coral hover:underline
```

### Quotes

```css
border-l-4 border-coral pl-6 italic text-xl
```

### Cards

```css
bg-white p-8 hover:shadow-lg transition-shadow
```

---

## Responsive Breakpoints

| Name | Width | Tailwind |
|------|-------|----------|
| Mobile | < 640px | Default |
| Tablet | ≥ 640px | `sm:` |
| Desktop | ≥ 1024px | `lg:` |
| Large | ≥ 1280px | `xl:` |

---

## Performance Targets

- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s

---

## Image Guidelines

- **Hero images:** Full-width, optimized WebP, lazy load (except above fold)
- **Case study images:** 16:9 or 4:3 aspect ratio
- **Thumbnails:** 400x300px minimum
- **Photo treatment:** Slightly warm, consistent contrast

---

## Accessibility

- Color contrast: WCAG AA minimum
- Focus states: Visible outline on all interactive elements
- Alt text: All images
- Skip to content: Hidden link for keyboard users
- Semantic HTML: Proper heading hierarchy

---

## Favicon / Meta

- Favicon: Simple "Z" or abstract mark in coral
- OG Image: "Be extra." on cream background with photo
- Meta description: "Ziff designs workshops and team experiences with a little extra soul. Based in Singapore."
