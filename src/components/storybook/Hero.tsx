import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { tw, brandEase } from '../../styles/colors';

/**
 * DESIGN SYSTEM: Hero
 * - Takes up ~90vh with headline centered
 * - Manifesto appears on scroll (once triggered, stays visible)
 * - Hero image with clip-path reveal animation
 * - Uses brandEase for all animations
 */

interface HeroProps {
  headline: string;
  manifesto?: string[];
  manifestoMuted?: string;
  heroImage?: string;
}

export default function Hero({
  headline,
  manifesto = [],
  manifestoMuted,
  heroImage,
}: HeroProps) {
  const [showManifesto, setShowManifesto] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);
  const yTranslate = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  useEffect(() => {
    const handleScroll = () => {
      // Once triggered, stay visible (prevents jitter loop from layout shifts)
      if (window.scrollY > 100) {
        setShowManifesto(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className="relative min-h-[90vh] flex flex-col justify-center px-8 md:px-12 overflow-hidden">
        <motion.div style={{ opacity, scale, y: yTranslate }} className="text-center max-w-screen-2xl mx-auto w-full">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: brandEase }}
            className={`text-2xl md:text-4xl lg:text-[3.5rem] xl:text-[4.2rem] font-serif italic mb-12 tracking-tight leading-[1] max-w-4xl mx-auto ${tw.light.text}`}
          >
            {headline}
          </motion.h1>

          {/* Manifesto - appears on scroll */}
          <AnimatePresence>
            {showManifesto && manifesto.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.6, ease: brandEase }}
                className={`text-base md:text-lg ${tw.light.textSecondary} max-w-2xl mx-auto space-y-4 overflow-hidden`}
              >
                {manifesto.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
                {manifestoMuted && (
                  <p className={`${tw.light.textMuted} italic`}>{manifestoMuted}</p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Hero Image with clip-path reveal */}
      {heroImage && (
        <motion.div
          initial={{ clipPath: 'inset(20% 30% 20% 30%)', opacity: 0 }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
          transition={{ duration: 1.5, ease: brandEase, delay: 0.3 }}
          className="px-8 md:px-12 -mt-[40px]"
        >
          <div className="max-w-6xl mx-auto">
            <div className="aspect-[21/9] w-full rounded-3xl overflow-hidden bg-[#EDEDEA] shadow-2xl">
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
