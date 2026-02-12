import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { tw, brandEase } from '../../styles/colors';

/**
 * DESIGN SYSTEM: ExtraSection
 * - Layout: Header with CTA, 4-column grid
 * - Animation: Labels x: -20, Headlines y: 30, Cards scale: 0.97
 * - Card hover: bg transitions to olive, text to white, yellow border
 * - Background: bgSecondary (alternating section)
 */

interface ExtraItem {
  title: string;
  description: string;
}

interface ExtraSectionProps {
  label?: string;
  headline: string;
  items: ExtraItem[];
  ctaText?: string;
  ctaHref?: string;
  showBackground?: boolean;
}

export default function ExtraSection({
  label = 'Side Projects',
  headline,
  items,
  ctaText = 'Explore',
  ctaHref = '/extra',
  showBackground = true,
}: ExtraSectionProps) {
  return (
    <section className={`py-32 px-8 md:px-12 ${showBackground ? tw.light.bgSecondary : ''}`}>
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
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
              className={`text-4xl md:text-5xl font-serif italic ${tw.light.text}`}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: brandEase }}
              viewport={{ once: true }}
              className="group p-8 bg-white rounded-2xl hover:bg-[#686344] transition-all duration-500 border border-black/5 hover:border-[#FDDE0C] hover:shadow-xl hover:-translate-y-1"
            >
              <h3 className={`text-xl font-bold mb-2 ${tw.light.text} group-hover:text-white transition-colors`}>
                {item.title}
              </h3>
              <p className={`text-sm ${tw.light.textSecondary} group-hover:text-white/70 transition-colors`}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
