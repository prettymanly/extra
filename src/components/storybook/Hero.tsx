import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
  headline: string;
  subheadline?: string;
  companies?: string[];
  heroImage?: string;
  dark?: boolean;
}

export default function Hero({
  headline,
  subheadline,
  companies = [],
  heroImage,
  dark = true,
}: HeroProps) {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);
  const yTranslate = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  const bgColor = dark ? 'bg-[#0A0A0A]' : 'bg-white';
  const textColor = dark ? 'text-white' : 'text-black';
  const mutedColor = dark ? 'text-white/60' : 'text-black/60';

  return (
    <section className={`relative pt-40 pb-16 px-6 md:px-12 max-w-screen-2xl mx-auto overflow-hidden ${bgColor} ${textColor}`}>
      <motion.div style={{ opacity, scale, y: yTranslate }} className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-serif italic mb-8 tracking-tight leading-[0.9]"
        >
          {headline}
        </motion.h1>

        {subheadline && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={`text-lg md:text-xl ${mutedColor} max-w-xl mx-auto mb-16`}
          >
            {subheadline}
          </motion.p>
        )}

        {companies.length > 0 && (
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-20 opacity-40 text-[10px] font-bold uppercase tracking-[0.2em]">
            {companies.map((company) => (
              <span key={company}>{company}</span>
            ))}
          </div>
        )}

        {heroImage && (
          <motion.div
            initial={{ clipPath: 'inset(10% 20% 10% 20%)', opacity: 0 }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative max-w-6xl mx-auto"
          >
            <div className={`aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl ${dark ? 'bg-white/5' : 'bg-black/5'}`}>
              <img
                src={heroImage}
                alt="Hero"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
