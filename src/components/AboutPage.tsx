import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, Footer } from './storybook';
import { tw, brandEase } from '../styles/colors';

/**
 * DESIGN SYSTEM RULES
 * See HomePage.tsx for full documentation
 */

const companies = [
  "Ogilvy", "Saatchi & Saatchi", "What If! Innovation",
  "Accenture Song", "GovTech Singapore", "Synthesis",
  "Singapore Institute of Technology"
];

const bioSections = [
  "Ziff is a facilitator and experience designer based in Singapore.",
  "He spent six years in advertising at Ogilvy and Saatchi, which is a long time to spend thinking about why people remember some things and forget others. The answer, it turns out, is rarely the thing you'd put in a strategy document. It's the weird stuff. The extra. The detail someone almost cut because it seemed indulgent. The extra is what turns ads into culture.",
  "Then came What If! Innovation, Accenture Song, and GovTech Singapore—which sounds like a lot of jobs, but really it was the same job: trying to make rooms full of adults feel something other than the quiet dread of another workshop.",
  "He trained at Hyper Island. He practises improv theatre, which is just paying money to be embarrassed on purpose.",
  "He teaches Design Innovation at Singapore Institute of Technology. Futures, systems, and applying design thinking to life. Not just how to make better products—how to make better decisions about the things that actually matter.",
  "Now he designs workshops and team experiences. The kind where someone says something true out loud for the first time. The kind people mention weeks later, unprompted, like a song they can't get out of their head.",
];

export default function AboutPage() {
  return (
    <div className={`min-h-screen ${tw.light.bg} ${tw.light.text} ${tw.light.selection}`}>
      <Navigation />

      {/* Hero */}
      <section className="px-8 md:px-12 pt-32 pb-20">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 md:gap-20 items-start">
            {/* Portrait with clip-path reveal */}
            <motion.div
              className="md:col-span-2"
              initial={{ clipPath: 'inset(100% 0 0 0)', opacity: 0 }}
              animate={{ clipPath: 'inset(0% 0 0 0)', opacity: 1 }}
              transition={{ duration: 1.2, ease: brandEase }}
            >
              <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&h=800&fit=crop&crop=face" alt="Ziff" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </motion.div>

            <div className="md:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: brandEase }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-6 h-0.5 bg-[#b39d00]" />
                <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${tw.light.olive}`}>
                  About
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 1, ease: brandEase }}
                className="text-5xl md:text-7xl font-serif italic mb-2"
              >
                Ziff
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: brandEase }}
                className={`text-xl ${tw.light.textSecondary} mb-12`}
              >
                Facilitator & Experience Designer
              </motion.p>

              <div className="space-y-6">
                {bioSections.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.8, ease: brandEase }}
                    className={`text-lg leading-relaxed ${index === 0 ? `${tw.light.text} font-medium` : tw.light.textSecondary}`}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Through-Line */}
      <section className={`px-8 md:px-12 py-32 ${tw.light.bgSecondary}`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: brandEase }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="w-6 h-0.5 bg-[#b39d00]" />
            <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${tw.light.olive}`}>
              The Through-Line
            </span>
          </motion.div>
          <motion.blockquote
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1, ease: brandEase }}
            viewport={{ once: true }}
            className={`text-2xl md:text-4xl font-serif italic leading-relaxed ${tw.light.text}`}
          >
            &ldquo;The extra is what turns ads into culture, workshops into moments, and rooms full of lanyards into something people actually remember.&rdquo;
          </motion.blockquote>
          {/* Yellow accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: brandEase }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[#b39d00] mx-auto mt-12"
          />
        </div>
      </section>

      {/* Logo Strip */}
      <section className="px-8 md:px-12 py-20">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: brandEase }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-12"
          >
            <div className="w-6 h-0.5 bg-[#b39d00]" />
            <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${tw.light.olive}`}>
              Previously At
            </span>
          </motion.div>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {companies.map((company, index) => (
              <motion.span
                key={company}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.6, ease: brandEase }}
                viewport={{ once: true }}
                className={`${tw.light.textMuted} text-sm md:text-base font-medium tracking-wide hover:text-[#0A0A0A] transition-colors cursor-default`}
              >
                {company}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
