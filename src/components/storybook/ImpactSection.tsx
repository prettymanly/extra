import React from 'react';
import { motion } from 'framer-motion';

interface Metric {
  value: string;
  label: string;
  description: string;
}

interface ImpactSectionProps {
  metrics: Metric[];
  headline?: string;
  dark?: boolean;
}

/**
 * ImpactSection - Metrics display with 160px left padding
 *
 * Features:
 * - 160px left padding on large screens
 * - Horizontal scroll on mobile
 * - Grid layout on desktop
 */
export default function ImpactSection({
  metrics,
  headline = 'Impact',
  dark = true,
}: ImpactSectionProps) {
  const textColor = dark ? 'text-white' : 'text-black';
  const mutedColor = dark ? 'text-white/60' : 'text-black/60';
  const cardBg = dark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white border-gray-100 hover:shadow-gray-100';

  return (
    <section
      className="py-32 overflow-x-auto"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <div className="pl-6 md:pl-12 lg:pl-40 pr-6">
        <h2 className={`text-4xl md:text-5xl font-serif mb-20 ${textColor}`}>{headline}</h2>
        <div className="flex gap-4 min-w-max md:min-w-0 md:grid md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`w-[280px] md:w-auto flex-shrink-0 md:flex-shrink p-8 border flex flex-col min-h-[320px] justify-between group hover:shadow-xl transition-all duration-500 ${cardBg}`}
            >
              <div>
                <div className={`text-6xl font-serif mb-8 group-hover:scale-110 transition-transform origin-left duration-500 ${textColor}`}>
                  {metric.value}
                </div>
                <h3 className={`text-sm font-bold uppercase tracking-widest mb-4 ${textColor}`}>
                  {metric.label}
                </h3>
              </div>
              <p className={`text-sm leading-relaxed ${mutedColor}`}>
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
