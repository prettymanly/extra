import React from 'react';
import { motion } from 'framer-motion';
import { tw, brandEase } from '../../styles/colors';

/**
 * DESIGN SYSTEM: CaseStudyHeader
 * - Layout: 3/9 grid with label on left
 * - Animation: y: 20 with brandEase
 * - Uses tw.light tokens
 */

interface CaseStudyHeaderProps {
  title: string;
  oneLiner: string;
  label?: string;
}

export default function CaseStudyHeader({
  title,
  oneLiner,
  label = 'Case Study',
}: CaseStudyHeaderProps) {
  return (
    <section className="pt-32 md:pt-40 pb-8 px-8 md:px-12 lg:px-40">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-16 items-start">
          {/* Left: Label */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: brandEase }}
          >
            <span className={`text-xs font-medium uppercase tracking-widest ${tw.light.textMuted}`}>
              {label}
            </span>
          </motion.div>

          {/* Right: Title + One-liner */}
          <motion.div
            className="md:col-span-9"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: brandEase }}
          >
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif italic leading-[1.1] mb-3 ${tw.light.text}`}>
              {title}
            </h1>
            <p className={`text-base md:text-lg font-light max-w-2xl ${tw.light.textSecondary}`}>
              {oneLiner}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
