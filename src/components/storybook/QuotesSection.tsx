import React from 'react';
import { motion } from 'framer-motion';
import { tw, brandEase } from '../../styles/colors';

/**
 * DESIGN SYSTEM: QuotesSection
 * - Layout: 160px left padding on large screens
 * - Horizontal scroll on mobile, grid on desktop
 * - Quote border: bright yellow (#FDDE0C)
 * - Background: light.bg (cream)
 */

interface Quote {
  text: string;
  author?: string;
}

interface QuotesSectionProps {
  quotes: Quote[];
  headline?: string;
}

export default function QuotesSection({
  quotes,
  headline = 'What They Said',
}: QuotesSectionProps) {
  return (
    <section
      className="py-32 overflow-x-auto"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <div className="pl-8 md:pl-12 lg:pl-40 pr-8">
        <h2 className={`text-4xl md:text-5xl font-serif mb-20 ${tw.light.text}`}>{headline}</h2>
        <div className="flex gap-12 min-w-max md:min-w-0 md:grid md:grid-cols-2">
          {quotes.map((quote, idx) => (
            <motion.blockquote
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: brandEase }}
              viewport={{ once: true }}
              className="border-l-4 border-[#FDDE0C] pl-6 py-2 w-[320px] md:w-auto flex-shrink-0 md:flex-shrink"
            >
              <p className={`text-xl md:text-2xl font-serif italic leading-relaxed ${tw.light.textSecondary}`}>
                &ldquo;{quote.text}&rdquo;
              </p>
              {quote.author && (
                <cite className={`block mt-4 text-sm font-medium not-italic ${tw.light.textMuted}`}>
                  — {quote.author}
                </cite>
              )}
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
