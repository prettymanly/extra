import React from 'react';
import { motion } from 'framer-motion';

interface Quote {
  text: string;
  author?: string;
}

interface QuotesSectionProps {
  quotes: Quote[];
  headline?: string;
  accentColor?: string;
  dark?: boolean;
}

/**
 * QuotesSection - Testimonials display with 160px left padding
 *
 * Features:
 * - 160px left padding on large screens
 * - Horizontal scroll on mobile
 * - Grid layout on desktop
 * - Accent color for quote border
 */
export default function QuotesSection({
  quotes,
  headline = 'What They Said',
  accentColor = '#E85A3C',
  dark = true,
}: QuotesSectionProps) {
  const bgColor = dark ? 'bg-[#111111]' : 'bg-gray-50';
  const textColor = dark ? 'text-white' : 'text-black';
  const mutedColor = dark ? 'text-white/80' : 'text-black/80';
  const authorColor = dark ? 'text-white/40' : 'text-black/40';

  return (
    <section
      className={`py-32 overflow-x-auto ${bgColor}`}
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <div className="pl-6 md:pl-12 lg:pl-40 pr-6">
        <h2 className={`text-4xl md:text-5xl font-serif mb-20 ${textColor}`}>{headline}</h2>
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
              <p className={`text-xl md:text-2xl font-serif italic leading-relaxed ${mutedColor}`}>
                &ldquo;{quote.text}&rdquo;
              </p>
              {quote.author && (
                <cite className={`block mt-4 text-sm font-medium not-italic ${authorColor}`}>
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
