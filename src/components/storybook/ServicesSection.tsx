import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Service {
  title: string;
  tagline: string;
}

interface ServicesSectionProps {
  label?: string;
  headline: string;
  services: Service[];
  ctaText?: string;
  ctaHref?: string;
  dark?: boolean;
}

export default function ServicesSection({
  label = 'Ways I Work',
  headline,
  services,
  ctaText = 'Explore',
  ctaHref = '/work',
  dark = true,
}: ServicesSectionProps) {
  const bgColor = dark ? 'bg-[#111111]' : 'bg-gray-50';
  const textColor = dark ? 'text-white' : 'text-black';
  const mutedColor = dark ? 'text-white/40' : 'text-black/40';
  const borderColor = dark ? 'border-white/10' : 'border-black/10';
  const hoverBg = dark ? 'hover:bg-white/[0.02]' : 'hover:bg-black/[0.02]';

  return (
    <section className={`py-32 px-6 md:px-12 ${bgColor} ${textColor}`}>
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
          <span className={`text-[10px] font-bold uppercase tracking-widest ${mutedColor} mb-6 block`}>
            {label}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif italic leading-[1.1] mb-8">
            {headline}
          </h2>
          <a
            href={ctaHref}
            className={`group flex items-center gap-3 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all w-fit ${
              dark
                ? 'bg-white text-black hover:bg-white/90'
                : 'bg-black text-white hover:bg-black/90'
            }`}
          >
            {ctaText} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className={`lg:col-span-8 border-t ${borderColor}`}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group flex flex-col md:flex-row md:items-center justify-between py-10 border-b ${borderColor} cursor-pointer ${hoverBg} transition-colors px-6 -mx-6 rounded-xl`}
            >
              <h3 className="text-3xl md:text-4xl font-serif group-hover:italic transition-all duration-300">
                {service.title}
              </h3>
              <p className={`${mutedColor} mt-4 md:mt-0 font-medium md:max-w-xs md:text-right`}>
                {service.tagline}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
