import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, Footer, CaseStudyCard } from './storybook';
import { tw } from '../styles/colors';

const caseStudies = [
  {
    slug: "tetra-pak",
    title: "Tetra Pak",
    oneLiner: "From silos to symphony.",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop"
  },
  {
    slug: "synthesis-internal",
    title: "Synthesis (Internal)",
    oneLiner: "From brilliant analysis to felt resonance.",
    category: "Training",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop"
  }
];

export default function CaseStudiesPage() {
  return (
    <div className={`min-h-screen ${tw.light.bg} ${tw.light.text} ${tw.light.selection}`}>
      <Navigation />

      {/* Hero */}
      <section className="px-6 md:px-12 pt-32 pb-20">
        <div className="max-w-screen-xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={`text-[10px] font-bold uppercase tracking-[0.3em] ${tw.light.textMuted} mb-6`}>Case Studies</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl lg:text-8xl font-serif italic tracking-tight mb-8">Proof</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className={`text-xl md:text-2xl ${tw.light.textSecondary} max-w-2xl font-light leading-relaxed`}>
            The kind of sessions people mention weeks later, unprompted, like a song they can&apos;t get out of their head.
          </motion.p>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={study.slug}
                title={study.title}
                oneLiner={study.oneLiner}
                category={study.category}
                image={study.image}
                href={`/case-studies/${study.slug}`}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
