import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
  dark?: boolean;
}

export default function ExtraSection({
  label = 'Extra',
  headline,
  items,
  ctaText = 'Explore',
  ctaHref = '/extra',
  dark = true,
}: ExtraSectionProps) {
  const bgColor = dark ? 'bg-[#111111]' : 'bg-gray-50';
  const textColor = dark ? 'text-white' : 'text-black';
  const mutedColor = dark ? 'text-white/40' : 'text-black/40';
  const borderColor = dark ? 'border-white/5' : 'border-black/5';
  const cardBg = dark ? 'bg-white/5 hover:bg-white/[0.08]' : 'bg-black/5 hover:bg-black/[0.08]';
  const cardMuted = dark ? 'text-white/60' : 'text-black/60';

  return (
    <section className={`py-32 px-6 md:px-12 ${bgColor} border-y ${borderColor} ${textColor}`}>
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className={`text-[10px] font-bold uppercase tracking-widest ${mutedColor} mb-6 block`}>
              {label}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif italic">
              {headline}
            </h2>
          </div>
          <a
            href={ctaHref}
            className={`flex items-center gap-2 font-bold uppercase text-[10px] tracking-widest hover:gap-4 transition-all group border-b ${dark ? 'border-white/10' : 'border-black/10'} pb-2`}
          >
            {ctaText} <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl transition-colors ${cardBg}`}
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className={`text-sm ${cardMuted}`}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
