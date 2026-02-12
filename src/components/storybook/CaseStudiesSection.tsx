import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { tw, brandEase } from '../../styles/colors';
import CaseStudyCard from './CaseStudyCard';

/**
 * DESIGN SYSTEM: CaseStudiesSection
 * - Layout: Header with CTA link, 2-column grid
 * - Animation: Labels x: -20, Headlines y: 30
 * - Uses CaseStudyCard from storybook
 * - Background: light.bg (default cream)
 */

interface CaseStudy {
  id: string;
  title: string;
  oneLiner: string;
  category: string;
  image: string;
  slug: string;
}

interface CaseStudiesSectionProps {
  label?: string;
  headline: string;
  studies: CaseStudy[];
  ctaText?: string;
  ctaHref?: string;
}

export default function CaseStudiesSection({
  label = 'Case Studies',
  headline,
  studies,
  ctaText = 'All Case Studies',
  ctaHref = '/case-studies',
}: CaseStudiesSectionProps) {
  return (
    <section className="py-32 px-8 md:px-12 max-w-screen-2xl mx-auto">
      <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: brandEase }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-6 h-0.5 bg-[#b39d00]" />
            <span className={`text-[10px] font-bold uppercase tracking-widest ${tw.light.olive}`}>
              {label}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: brandEase }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-serif leading-[1.1] ${tw.light.text}`}
          >
            {headline}
          </motion.h2>
        </div>
        <a
          href={ctaHref}
          className={`flex items-center gap-2 font-bold uppercase text-[10px] tracking-widest hover:gap-4 transition-all ${tw.light.textMuted} border-b border-black/10 pb-2`}
        >
          {ctaText} <ArrowRight size={14} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {studies.map((study, idx) => (
          <CaseStudyCard
            key={study.id}
            title={study.title}
            oneLiner={study.oneLiner}
            category={study.category}
            image={study.image}
            href={`/case-studies/${study.slug}`}
            index={idx}
          />
        ))}
      </div>
    </section>
  );
}
