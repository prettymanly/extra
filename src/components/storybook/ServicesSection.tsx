import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { tw, brandEase } from '../../styles/colors';

/**
 * DESIGN SYSTEM: ServicesSection
 * - Layout: 4/8 grid with sticky sidebar
 * - Animation: Labels x: -20, Headlines y: 30, Items x: -15
 * - Uses brandEase for all animations
 * - Background: bgSecondary (alternating section)
 */

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
  showBackground?: boolean;
}

export default function ServicesSection({
  label = 'Services',
  headline,
  services,
  ctaText = 'Explore',
  ctaHref = '/work',
  showBackground = true,
}: ServicesSectionProps) {
  return (
    <section className={`pt-24 md:pt-32 pb-32 px-8 md:px-12 ${showBackground ? tw.light.bgSecondary : ''}`}>
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: brandEase }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-6 h-0.5 bg-[#b39d00]" />
            <span className={`text-[10px] font-bold uppercase tracking-widest ${tw.light.olive}`}>
              {label}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: brandEase }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-serif italic leading-[1.1] mb-8 ${tw.light.text}`}
          >
            {headline}
          </motion.h2>
          <motion.a
            href={ctaHref}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: brandEase, delay: 0.2 }}
            viewport={{ once: true }}
            className={`group flex items-center gap-3 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest w-fit ${tw.light.btnPrimary}`}
          >
            {ctaText} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="lg:col-span-8 border-t border-black/10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: brandEase }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-black/10 cursor-pointer hover:bg-white/50 transition-colors px-6 -mx-6 rounded-xl"
            >
              <h3 className={`text-3xl md:text-4xl font-serif ${tw.light.text} group-hover-italic`}>
                {service.title}
              </h3>
              <p className={`${tw.light.textMuted} mt-4 md:mt-0 font-medium md:max-w-xs md:text-right`}>
                {service.tagline}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
