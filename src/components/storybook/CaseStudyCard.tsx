import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface CaseStudyCardProps {
  title: string;
  oneLiner: string;
  category: string;
  image: string;
  href: string;
  index?: number;
  dark?: boolean;
}

export default function CaseStudyCard({
  title,
  oneLiner,
  category,
  image,
  href,
  index = 0,
  dark = true,
}: CaseStudyCardProps) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative block"
    >
      <div className={`aspect-[4/5] overflow-hidden rounded-2xl mb-6 relative ${dark ? 'bg-white/5' : 'bg-gray-100'}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-white text-black w-14 h-14 rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
            <ArrowUpRight size={24} />
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className={`text-[10px] font-bold uppercase tracking-widest ${dark ? 'text-white/40' : 'text-black/40'}`}>
            {category}
          </span>
          <ArrowRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 ${dark ? 'text-white' : 'text-black'}`} />
        </div>
        <h4 className={`text-xl font-bold tracking-tight ${dark ? 'text-white' : 'text-black'}`}>
          {title}
        </h4>
        <p className={`text-sm font-medium italic leading-relaxed ${dark ? 'text-white/60' : 'text-black/60'}`}>
          {oneLiner}
        </p>
      </div>
    </motion.a>
  );
}
