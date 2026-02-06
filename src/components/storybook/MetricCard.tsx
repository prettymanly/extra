import React from 'react';
import { motion } from 'framer-motion';

interface MetricCardProps {
  value: string;
  label: string;
  description: string;
  index?: number;
  dark?: boolean;
}

export default function MetricCard({
  value,
  label,
  description,
  index = 0,
  dark = true
}: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className={`p-8 border flex flex-col min-h-[320px] justify-between group hover:shadow-xl transition-all duration-500 ${
        dark
          ? 'bg-white/5 border-white/10 hover:bg-white/10'
          : 'bg-white border-gray-100 hover:shadow-gray-100'
      }`}
    >
      <div>
        <div className={`text-6xl font-serif mb-8 group-hover:scale-110 transition-transform origin-left duration-500 ${dark ? 'text-white' : 'text-black'}`}>
          {value}
        </div>
        <h3 className={`text-sm font-bold uppercase tracking-widest mb-4 ${dark ? 'text-white' : 'text-black'}`}>
          {label}
        </h3>
      </div>
      <p className={`text-sm leading-relaxed ${dark ? 'text-white/60' : 'text-gray-500'}`}>
        {description}
      </p>
    </motion.div>
  );
}
