import React from 'react';
import { motion } from 'framer-motion';

interface QuoteBlockProps {
  quote: string;
  author?: string;
  dark?: boolean;
}

export default function QuoteBlock({ quote, author, dark = true }: QuoteBlockProps) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`border-l-4 pl-6 py-2 ${dark ? 'border-white/20' : 'border-black/20'}`}
    >
      <p className={`text-xl md:text-2xl font-serif italic leading-relaxed ${dark ? 'text-white/80' : 'text-black/80'}`}>
        &ldquo;{quote}&rdquo;
      </p>
      {author && (
        <cite className={`block mt-4 text-sm font-medium not-italic ${dark ? 'text-white/40' : 'text-black/40'}`}>
          — {author}
        </cite>
      )}
    </motion.blockquote>
  );
}
