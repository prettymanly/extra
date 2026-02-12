import React from 'react';
import {
  Navigation,
  Hero,
  ServicesSection,
  CaseStudiesSection,
  ExtraSection,
  ThinkingSection,
  Footer,
} from './storybook';

/**
 * HomePage - Composed from Storybook Components
 *
 * All styling comes from the design system via storybook components.
 * This file only defines the data and passes it to components.
 */

// --- Data ---
const MANIFESTO = [
  "Workshops can be sterile. Forgettable. Optimized for efficiency, not for feeling.",
  "But sometimes a slide still sits with someone over Tuesday ramen. People contemplate their role and identity in a room full of lanyards.",
  "I care deeply about what makes that happen. I design workshops, presentations, and team experiences... with a little extra soul.",
];

const SERVICES = [
  { title: 'Transformation Programmes', tagline: 'Shift behaviour, not just transfer knowledge.' },
  { title: 'Team Workshops', tagline: 'Design thinking with soul.' },
  { title: 'Speaking', tagline: 'The interesting stuff.' },
];

const CASE_STUDIES = [
  {
    id: '1',
    title: 'Synthesis × Global FMCG',
    oneLiner: 'Shifting a team stuck in tool-mode to use of self.',
    category: 'TRANSFORMATION',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800',
    slug: 'tetra-pak'
  },
  {
    id: '2',
    title: 'Synthesis (Internal)',
    oneLiner: 'From brilliant analysis to felt resonance.',
    category: 'INTEGRATION',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    slug: 'synthesis-internal'
  },
];

const EXTRA_ITEMS = [
  { title: 'Improv', description: 'Paying money to be embarrassed on purpose.' },
  { title: 'Teaching at SIT', description: 'Design Innovation. Futures, systems, life.' },
  { title: 'Arabingo', description: 'A board game to help kids learn the Arabic alphabet through play.' },
];

const BLOG_POSTS = [
  { id: '1', idx: '01', title: 'Why nobody ever changed because of a slide deck', date: 'JAN 2025', category: 'FACILITATION', slug: 'why-nobody-ever-changed-because-of-a-slide-deck' },
  { id: '2', idx: '02', title: 'The Salt Bae principle', date: 'DEC 2024', category: 'PHILOSOPHY', slug: 'the-salt-bae-principle' },
  { id: '3', idx: '03', title: 'What the room needs from you', date: 'NOV 2024', category: 'PRESENCE', slug: 'what-the-room-needs-from-you' },
  { id: '4', idx: '04', title: 'Designing for resonance, not rigour', date: 'OCT 2024', category: 'STRATEGY', slug: 'designing-for-resonance-not-rigour' },
];

// --- Component ---
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F6F6F3] text-[#0A0A0A] selection:bg-[#b39d00] selection:text-[#0A0A0A]">
      <Navigation />

      <main>
        <Hero
          headline="The corporate world can afford to be a bit more extra."
          manifesto={MANIFESTO}
          manifestoMuted="Like a corporate artist. Ambitious, I know."
          heroImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80"
        />

        <ServicesSection
          label="Services"
          headline="Three ways I help teams feel something other than the quiet dread of another workshop."
          services={SERVICES}
          ctaText="Explore"
          ctaHref="/work"
          showBackground={true}
        />

        <CaseStudiesSection
          label="Case Studies"
          headline="Sessions people remember like a song they can't get out of their head."
          studies={CASE_STUDIES}
          ctaText="All Case Studies"
          ctaHref="/case-studies"
        />

        <ExtraSection
          label="Side Projects"
          headline="Side projects and the weird stuff that makes the work work."
          items={EXTRA_ITEMS}
          ctaText="Explore"
          ctaHref="/extra"
          showBackground={true}
        />

        <ThinkingSection
          label="Writing"
          headline="Ideas I bake into sessions."
          description="POVs on facilitation, design, and why the corporate world can afford to be more extra."
          posts={BLOG_POSTS}
          ctaText="All Posts"
          ctaHref="/thinking"
        />
      </main>

      <Footer />
    </div>
  );
}
