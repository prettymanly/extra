import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ArrowUp, Menu, X, ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react';
import { ArtefactsGrid, ArtefactsCarousel } from './storybook';

// Types
interface Metric {
  value: string;
  label: string;
  description: string;
}

interface Quote {
  text: string;
  author?: string;
}

interface Artefact {
  title: string;
  description?: string;
  image?: string;
  details?: string; // Extended content for modal
}

interface RelatedStudy {
  title: string;
  image: string;
  href: string;
}

interface CaseStudyPageProps {
  // Header
  title: string;
  oneLiner: string;

  // Meta
  programme: string;
  industry: string;
  scope: string;

  // Content
  story: string[];
  artefacts: Artefact[];
  artefactsLayout?: 'grid' | 'carousel'; // Choose which layout to use
  metrics: Metric[];
  quotes: Quote[];

  // Images
  heroImages: string[];
  accentColor?: string;

  // Related
  relatedStudies?: RelatedStudy[];

  // Credits
  credits?: { role: string; name: string }[];
}

// Helper Components
const MetricCard = ({ metric, index }: { metric: Metric; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white/5 p-8 border border-white/10 flex flex-col min-h-[320px] justify-between group hover:bg-white/10 transition-all duration-500"
  >
    <div>
      <div className="text-6xl font-serif mb-8 group-hover:scale-110 transition-transform origin-left duration-500 text-white">
        {metric.value}
      </div>
      <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-white">
        {metric.label}
      </h3>
    </div>
    <p className="text-white/60 text-sm leading-relaxed">{metric.description}</p>
  </motion.div>
);

export default function CaseStudyPage({
  title,
  oneLiner,
  programme,
  industry,
  scope,
  story,
  artefacts,
  artefactsLayout = 'grid',
  metrics,
  quotes,
  heroImages,
  accentColor = '#E85A3C',
  relatedStudies = [],
  credits = [],
}: CaseStudyPageProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [storyExpanded, setStoryExpanded] = useState(false);
  const storyContentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const headerScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ways I Work', href: '/work' },
    { name: 'Proof', href: '/case-studies' },
    { name: 'Extra', href: '/extra' },
    { name: 'Thinking', href: '/thinking' },
    { name: 'About', href: '/about' },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-white selection:text-black overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-6 md:px-12 ${scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent'}`}>
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter uppercase hover:italic transition-all">
            Ziff
          </a>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:opacity-100 transition-opacity">
                  {link.name}
                </a>
              ))}
            </div>
            <a href="#cta" className="hidden md:block px-5 py-2.5 bg-white text-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/90 transition-all">
              Let&apos;s Talk
            </a>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 hover:bg-white/5 rounded-full transition-colors">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0A0A0A] z-40 flex flex-col justify-center items-center gap-8 text-4xl font-serif"
          >
            {navLinks.map((item, idx) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="hover:italic hover:translate-x-4 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Case Study Header - Collins Style 2-Column */}
        <section className="pt-32 md:pt-40 pb-8 px-6 md:px-12 lg:px-40">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-16 items-start">
              {/* Left: Label */}
              <motion.div
                className="md:col-span-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-xs font-medium uppercase tracking-widest text-white/40">Case Study</span>
              </motion.div>

              {/* Right: Title + One-liner */}
              <motion.div
                className="md:col-span-9"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic leading-[1.1] mb-3">
                  {title}
                </h1>
                <p className="text-base md:text-lg text-white/60 font-light max-w-2xl">
                  {oneLiner}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hero Gallery - Horizontal Scrollable Row */}
        <section className="pb-12 md:pb-16">
          <motion.div
            className="flex gap-4 md:gap-5 overflow-x-auto pb-4 scrollbar-hide px-6 md:px-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {/* First Image - Large */}
            <motion.div
              className="flex-shrink-0 w-[70vw] md:w-[45vw] h-[35vh] md:h-[50vh] overflow-hidden rounded-xl relative group snap-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img
                src={heroImages[0]}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt={title}
              />
            </motion.div>

            {/* Second Image */}
            <motion.div
              className="flex-shrink-0 w-[55vw] md:w-[35vw] h-[35vh] md:h-[50vh] overflow-hidden rounded-xl relative group snap-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img
                src={heroImages[1] || heroImages[0]}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt={title}
              />
            </motion.div>

            {/* Third Image (if available) or accent color block */}
            <motion.div
              className="flex-shrink-0 w-[55vw] md:w-[35vw] h-[35vh] md:h-[50vh] overflow-hidden rounded-xl relative group snap-start"
              style={{ backgroundColor: heroImages[2] ? undefined : accentColor }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {heroImages[2] ? (
                <img
                  src={heroImages[2]}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  alt={title}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white/80 text-2xl md:text-4xl font-serif italic">
                    {title.split(' ')[0]}
                  </span>
                </div>
              )}
            </motion.div>

          </motion.div>
        </section>

        {/* Project Info Section - Collins-style 2-Column Layout */}
        <section className="py-24 md:py-32 px-6 md:px-12 lg:px-40">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
              {/* Left Column: Project Meta */}
              <div className="md:col-span-3 space-y-8">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Programme</h4>
                  <p className="text-sm font-medium">{programme}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Industry</h4>
                  <p className="text-sm font-medium">{industry}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Scope</h4>
                  <p className="text-sm font-medium">{scope}</p>
                </div>
              </div>

              {/* Right Column: Story */}
              <div className="md:col-span-9">
                {/* Lead Paragraph with fade hint */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <p className="text-2xl md:text-3xl lg:text-4xl font-serif leading-tight italic text-white/90">
                    {story[0]}
                    {!storyExpanded && story.length > 1 && (
                      <span className="text-white/40"> {story[1]?.substring(0, 60)}...</span>
                    )}
                  </p>
                </motion.div>

                {/* Expandable Story Content */}
                <AnimatePresence>
                  {storyExpanded && (
                    <motion.div
                      ref={storyContentRef}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-6 mb-8">
                        {story.slice(1).map((paragraph, idx) => (
                          <motion.p
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="text-lg text-white/70 leading-relaxed"
                          >
                            {paragraph}
                          </motion.p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Read Full Story Button */}
                {story.length > 1 && (
                  <motion.button
                    onClick={() => setStoryExpanded(!storyExpanded)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group inline-flex items-center gap-3 px-6 py-3 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                  >
                    {storyExpanded ? (
                      <>
                        Close story <Minus size={14} />
                      </>
                    ) : (
                      <>
                        Read the full story <Plus size={14} className="group-hover:rotate-90 transition-transform duration-300" />
                      </>
                    )}
                  </motion.button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Artefacts Section - Grid or Carousel */}
        {artefacts.length > 0 && (
          artefactsLayout === 'carousel' ? (
            <ArtefactsCarousel
              artefacts={artefacts}
              headline="What We Built"
              subheadline="The tools, experiences, and artefacts that made this programme work."
              dark
            />
          ) : (
            <ArtefactsGrid
              artefacts={artefacts}
              headline="What We Built"
              subheadline="The tools, experiences, and artefacts that made this programme work."
              dark
            />
          )
        )}


        {/* Impact Metrics Section */}
        {metrics.length > 0 && (
          <section className="py-32 overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="pl-6 md:pl-12 lg:pl-40 pr-6">
              <h2 className="text-4xl md:text-5xl font-serif mb-20">Impact</h2>
              <div className="flex gap-4 min-w-max md:min-w-0 md:grid md:grid-cols-2 lg:grid-cols-4">
                {metrics.map((metric, idx) => (
                  <div key={metric.label} className="w-[280px] md:w-auto flex-shrink-0 md:flex-shrink">
                    <MetricCard metric={metric} index={idx} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Quotes Section */}
        {quotes.length > 0 && (
          <section className="py-32 bg-[#111111] overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="pl-6 md:pl-12 lg:pl-40 pr-6">
              <h2 className="text-4xl md:text-5xl font-serif mb-20">What They Said</h2>
              <div className="flex gap-12 min-w-max md:min-w-0 md:grid md:grid-cols-2">
                {quotes.map((quote, idx) => (
                  <motion.blockquote
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="border-l-4 pl-6 py-2 w-[320px] md:w-auto flex-shrink-0 md:flex-shrink"
                    style={{ borderColor: accentColor }}
                  >
                    <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-white/80">
                      &ldquo;{quote.text}&rdquo;
                    </p>
                    {quote.author && (
                      <cite className="block mt-4 text-sm font-medium not-italic text-white/40">
                        — {quote.author}
                      </cite>
                    )}
                  </motion.blockquote>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Credits Section */}
        {credits.length > 0 && (
          <section className="py-24 overflow-x-auto border-t border-white/10" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="pl-6 md:pl-12 lg:pl-40 pr-6">
              <h2 className="text-2xl font-serif mb-12">Credits</h2>
              <div className="flex gap-8 min-w-max md:min-w-0 md:grid md:grid-cols-2 lg:grid-cols-4">
                {credits.map((credit) => (
                  <div key={credit.role} className="w-[180px] md:w-auto flex-shrink-0 md:flex-shrink">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">
                      {credit.role}
                    </h4>
                    <p className="font-medium">{credit.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Case Studies */}
        {relatedStudies.length > 0 && (
          <section className="py-32 px-6 md:px-12 max-w-screen-2xl mx-auto overflow-hidden">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif mb-4">More Work</h2>
                <p className="text-white/40 uppercase text-[10px] font-bold tracking-widest">See other projects</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedStudies.map((study, idx) => (
                <motion.a
                  key={study.title}
                  href={study.href}
                  className="group cursor-pointer"
                  whileHover={{ y: -10 }}
                >
                  <div className="aspect-[4/5] overflow-hidden rounded-3xl mb-6 bg-white/5 relative">
                    <img
                      src={study.image}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                      alt={study.title}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500">
                        <ArrowRight size={24} className="text-black" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center">{study.title}</h3>
                </motion.a>
              ))}
            </div>
          </section>
        )}

        {/* Back Link */}
        <section className="px-6 md:px-12 pb-16 max-w-screen-2xl mx-auto">
          <a href="/case-studies" className="inline-flex items-center gap-2 text-white/60 hover:text-white font-medium transition-colors">
            <ArrowRight className="rotate-180" size={16} /> Back to all case studies
          </a>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-32 px-6 md:px-12 bg-white text-black text-center">
          <div className="max-w-screen-xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif italic mb-8"
            >
              If this resonates, let&apos;s talk.
            </motion.h2>

            <p className="text-lg text-black/60 mb-12 max-w-lg mx-auto">
              WhatsApp me. Email me. Tell me what you&apos;re working on.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a href="https://wa.me/6593227317" className="px-8 py-4 bg-black text-white rounded-full font-bold uppercase text-xs tracking-widest hover:bg-black/80 transition-all">
                +65 9322 7317
              </a>
              <a href="mailto:ziff.lau@gmail.com" className="px-8 py-4 border border-black/20 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-black/5 transition-all">
                ziff.lau@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Scroll to Top */}
      <motion.button
        className={`fixed bottom-8 right-8 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-2xl z-50 transition-all duration-300 ${scrolled ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp size={20} />
      </motion.button>
    </div>
  );
}
