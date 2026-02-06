import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  oneLiner: string;
  category: string;
  image: string;
  slug: string;
}

interface CaseStudiesSectionProps {
  label?: string;
  headline: string;
  studies: CaseStudy[];
  ctaText?: string;
  ctaHref?: string;
  dark?: boolean;
}

const StudyCard = ({ study, index, dark }: { study: CaseStudy; index: number; dark: boolean }) => (
  <motion.a
    href={`/case-studies/${study.slug}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    viewport={{ once: true }}
    className="group relative block"
  >
    <div className={`aspect-[4/5] overflow-hidden rounded-2xl mb-6 relative ${dark ? 'bg-white/5' : 'bg-gray-100'}`}>
      <img
        src={study.image}
        alt={study.title}
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
          {study.category}
        </span>
        <ArrowRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 ${dark ? 'text-white' : 'text-black'}`} />
      </div>
      <h4 className={`text-xl font-bold tracking-tight ${dark ? 'text-white' : 'text-black'}`}>
        {study.title}
      </h4>
      <p className={`text-sm font-medium italic leading-relaxed ${dark ? 'text-white/60' : 'text-black/60'}`}>
        {study.oneLiner}
      </p>
    </div>
  </motion.a>
);

export default function CaseStudiesSection({
  label = 'Proof',
  headline,
  studies,
  ctaText = 'All Case Studies',
  ctaHref = '/case-studies',
  dark = true,
}: CaseStudiesSectionProps) {
  const textColor = dark ? 'text-white' : 'text-black';
  const mutedColor = dark ? 'text-white/40' : 'text-black/40';
  const borderColor = dark ? 'border-white/10' : 'border-black/10';

  return (
    <section className={`py-32 px-6 md:px-12 max-w-screen-2xl mx-auto ${textColor}`}>
      <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <span className={`text-[10px] font-bold uppercase tracking-widest ${mutedColor} mb-6 block`}>
            {label}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif leading-[1.1]">
            {headline}
          </h2>
        </div>
        <a
          href={ctaHref}
          className={`flex items-center gap-2 font-bold uppercase text-[10px] tracking-widest hover:gap-4 transition-all group border-b ${borderColor} pb-2`}
        >
          {ctaText} <ArrowRight size={14} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {studies.map((study, idx) => (
          <StudyCard key={study.id} study={study} index={idx} dark={dark} />
        ))}
      </div>
    </section>
  );
}
