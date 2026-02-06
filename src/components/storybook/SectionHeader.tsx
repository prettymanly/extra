import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  linkText?: string;
  linkHref?: string;
  centered?: boolean;
  dark?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  linkText,
  linkHref,
  centered = false,
  dark = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-16 md:mb-20 ${centered ? 'text-center' : ''}`}
    >
      {label && (
        <span className={`text-[10px] font-bold uppercase tracking-widest mb-6 block ${dark ? 'text-white/40' : 'text-black/40'}`}>
          {label}
        </span>
      )}
      <h2 className={`text-4xl md:text-5xl font-serif leading-[1.1] ${dark ? 'text-white' : 'text-black'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg mt-6 max-w-2xl ${centered ? 'mx-auto' : ''} ${dark ? 'text-white/60' : 'text-black/60'}`}>
          {subtitle}
        </p>
      )}
      {linkText && linkHref && (
        <a
          href={linkHref}
          className={`inline-flex items-center gap-2 mt-8 font-bold uppercase text-[10px] tracking-widest hover:gap-4 transition-all border-b pb-2 ${
            dark ? 'text-white border-white/10' : 'text-black border-black/10'
          }`}
        >
          {linkText} <ArrowRight size={14} />
        </a>
      )}
    </motion.div>
  );
}
