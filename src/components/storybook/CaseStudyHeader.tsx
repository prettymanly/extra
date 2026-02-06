import React from 'react';
import { motion } from 'framer-motion';

interface CaseStudyHeaderProps {
  title: string;
  oneLiner: string;
  label?: string;
  dark?: boolean;
}

/**
 * CaseStudyHeader - Collins-style 2-column case study header
 *
 * Features:
 * - "Case Study" label on left, top-aligned
 * - Title and one-liner on right
 * - Responsive grid layout
 */
export default function CaseStudyHeader({
  title,
  oneLiner,
  label = 'Case Study',
  dark = true,
}: CaseStudyHeaderProps) {
  return (
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
            <span className={`text-xs font-medium uppercase tracking-widest ${dark ? 'text-white/40' : 'text-black/40'}`}>
              {label}
            </span>
          </motion.div>

          {/* Right: Title + One-liner */}
          <motion.div
            className="md:col-span-9"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif italic leading-[1.1] mb-3 ${dark ? 'text-white' : 'text-black'}`}>
              {title}
            </h1>
            <p className={`text-base md:text-lg font-light max-w-2xl ${dark ? 'text-white/60' : 'text-black/60'}`}>
              {oneLiner}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
