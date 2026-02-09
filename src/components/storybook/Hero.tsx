import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
  headline: string;
  subheadline?: string;
  companies?: string[];
  heroImage?: string;
  dark?: boolean;
}

/**
 * Hero - Collins-style full-viewport hero section
 *
 * Features:
 * - Takes up ~90vh so the content below only peeks
 * - Headline centered vertically and horizontally
 * - Companies/credentials displayed below headline
 * - Image peeks from below the fold (~40px visible)
 * - Parallax scroll effects
 *
 * Note: The image is positioned with negative margin to peek into the hero
 * while remaining in normal document flow to avoid overlap issues.
 */
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

  const textColor = dark ? 'text-white' : 'text-black';
  const mutedColor = dark ? 'text-white/60' : 'text-black/60';

  return (
    <>
      <section className={`relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 overflow-hidden ${textColor}`}>
        <motion.div style={{ opacity, scale, y: yTranslate }} className="text-center max-w-screen-2xl mx-auto w-full">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[8rem] xl:text-[10rem] font-serif italic mb-8 tracking-tight leading-[0.9]"
          >
            {headline}
          </motion.h1>

          {subheadline && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`text-lg md:text-xl ${mutedColor} max-w-xl mx-auto mb-12`}
            >
              {subheadline}
            </motion.p>
          )}

          {companies.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] font-bold uppercase tracking-[0.2em]"
            >
              {companies.map((company) => (
                <span key={company}>{company}</span>
              ))}
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Image peeks from hero with negative margin, stays in document flow */}
      {heroImage && (
        <motion.div
          initial={{ clipPath: 'inset(10% 20% 10% 20%)', opacity: 0 }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="px-6 md:px-12 -mt-[40px]"
        >
          <div className="max-w-6xl mx-auto">
            <div className={`aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl ${dark ? 'bg-white/5' : 'bg-black/5'}`}>
              <img
                src={heroImage}
                alt="Hero"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
