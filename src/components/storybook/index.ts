// Storybook Components - Reusable UI Components for Ziff's Website
// Import these components across pages to maintain consistency

// Layout Components
export { default as Navigation } from './Navigation';
export { default as Footer } from './Footer';

// Section Components (from Index Page)
export { default as Hero } from './Hero';
export { default as ServicesSection } from './ServicesSection';
export { default as CaseStudiesSection } from './CaseStudiesSection';
export { default as ExtraSection } from './ExtraSection';
export { default as ThinkingSection } from './ThinkingSection';
export { default as CTASection } from './CTASection';

// Case Study Components
export { default as CaseStudyHeader } from './CaseStudyHeader';  // Collins-style 2-column header
export { default as HeroGallery } from './HeroGallery';          // Horizontal scrollable gallery
export { default as ProjectInfoSection } from './ProjectInfoSection'; // Expandable story + meta (160px left padding)
export { default as ImpactSection } from './ImpactSection';      // Metrics with 160px left padding + horizontal scroll
export { default as QuotesSection } from './QuotesSection';      // Testimonials with 160px left padding + horizontal scroll
export { default as CreditsSection } from './CreditsSection';    // Credits with 160px left padding + horizontal scroll
export { default as SectionHeader } from './SectionHeader';
export { default as MetricCard } from './MetricCard';
export { default as CaseStudyCard } from './CaseStudyCard';
export { default as ProjectMeta } from './ProjectMeta';
export { default as QuoteBlock } from './QuoteBlock';

// Artefacts Components (three versions)
export { default as ArtefactsGrid } from './ArtefactsGrid';       // Grid layout version
export { default as ArtefactsCarousel } from './ArtefactsCarousel'; // Carousel with modal version
export { default as ArtefactsGrouped } from './ArtefactsGrouped'; // Grouped cards (World/Tools/Reinforcement)

// Utility Components
export { default as ScrollToTop } from './ScrollToTop';           // Fixed scroll-to-top button
