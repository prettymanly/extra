import React from 'react';
import { motion } from 'framer-motion';
import { tw, brandEase } from '../../styles/colors';

/**
 * DESIGN SYSTEM: MetricCard
 * - Animation: y: 20, staggered by index
 * - Hover: scale value, shadow-xl
 * - Uses tw.light tokens for light theme
 */

interface MetricCardProps {
  value: string;
  label: string;
  description: string;
  index?: number;
}

export default function MetricCard({
  value,
  label,
  description,
  index = 0,
}: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: brandEase }}
      viewport={{ once: true }}
      className="bg-white p-8 border border-black/5 flex flex-col min-h-[320px] justify-between group hover:shadow-xl transition-all duration-500"
    >
      <div>
        <div className={`text-6xl font-serif mb-8 group-hover:scale-110 transition-transform origin-left duration-500 ${tw.light.text}`}>
          {value}
        </div>
        <h3 className="text-sm font-bold uppercase tracking-widest mb-4">{label}</h3>
      </div>
      <p className={`${tw.light.textMuted} text-sm leading-relaxed`}>{description}</p>
    </motion.div>
  );
}
