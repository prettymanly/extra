import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, Footer } from './storybook';
import { tw, brandEase } from '../styles/colors';

/**
 * DESIGN SYSTEM RULES
 * See HomePage.tsx for full documentation
 */

const offerings = [
  {
    title: "Transformation Programmes",
    tagline: "Shift behaviour, not just transfer knowledge.",
    description: "Your team knows the process. Something's still not landing. I design immersive experiences that shift behaviour, not just transfer knowledge. Research, workshop design, facilitation, artifacts. The full build.",
  },
  {
    title: "Team Workshops",
    tagline: "Design thinking with soul. Sessions people actually remember.",
    description: "You want something more than the usual. Design thinking with soul. Presentations that resonate. A session people actually remember. Without a 2-month custom build.",
  },
  {
    title: "Speaking",
    tagline: "The interesting stuff.",
    description: "Talks on facilitation, experience design, and why the corporate world can afford to be more extra.",
  },
];

const deliverables = [
  "Moments that stick",
  "Behaviour shift, not just knowledge transfer",
  "Teams that feel, not just think",
  "Sessions people actually remember",
];

export default function WorkPage() {
  return (
    <div className={`min-h-screen ${tw.light.bg} ${tw.light.text} ${tw.light.selection}`}>
      <Navigation />

      {/* Hero */}
      <section className="px-8 md:px-12 pt-32 pb-20">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: brandEase }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-6 h-0.5 bg-[#b39d00]" />
            <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${tw.light.olive}`}>
              Services
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1, ease: brandEase }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif italic tracking-tight"
          >
            Be extra.
          </motion.h1>
        </div>
      </section>

      {/* Manifesto */}
      <section className="px-8 md:px-12 pb-24">
        <div className="max-w-screen-xl mx-auto">
          <div className={`max-w-3xl space-y-6 text-xl md:text-2xl ${tw.light.textSecondary} leading-relaxed`}>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: brandEase }}>
              You remember Salt Bae for the salt-swan thing, not the steak. I've rewatched that Barry episode where a 12-year-old girl goes full feral mongoose, scales a tree, perches on a roof like a gargoyle, and bites a man's face. Season 2, Episode 5. 7 times. It had nothing to do with the plot. You probably had a teacher growing up who went too far to make a point.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: brandEase }}>
              Meanwhile we've all sat through dozens of workshops and probably struggle to name a single moment that stuck.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8, ease: brandEase }}>
              I think about that gap a lot. Salt Bae's extra-ness cost nothing. The workshop had a budget.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8, ease: brandEase }} className={tw.light.text}>
              So why do we walk into the office and accept forgettable?
            </motion.p>
          </div>
        </div>
      </section>

      {/* Transition to Services */}
      <section className="px-8 md:px-12 pb-16">
        <div className="max-w-screen-xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: brandEase }}
            viewport={{ once: true }}
            className={`text-2xl md:text-3xl font-serif italic ${tw.light.textSecondary} max-w-2xl`}
          >
            Here are some ways I help teams feel something other than the quiet dread of another workshop.
          </motion.p>
        </div>
      </section>

      {/* Image Strip with clip-path reveal */}
      <section className="mb-24">
        <div className="grid grid-cols-3 gap-1">
          {[
            "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&h=400&fit=crop",
          ].map((src, i) => (
            <motion.div
              key={i}
              className="aspect-video overflow-hidden"
              initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
              whileInView={{ clipPath: 'inset(0 0 0 0)', opacity: 1 }}
              transition={{ delay: i * 0.15, duration: 1, ease: brandEase }}
              viewport={{ once: true }}
            >
              <img src={src} alt={`Workshop ${i + 1}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* What Our Work Delivers */}
      <section className={`px-8 md:px-12 py-24 ${tw.light.bgSecondary}`}>
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: brandEase }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            <div className="w-6 h-0.5 bg-[#b39d00]" />
            <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${tw.light.olive}`}>
              Our Work Delivers
            </span>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliverables.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: brandEase }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="w-2 h-2 rounded-full bg-[#b39d00] mt-2 flex-shrink-0" />
                <p className="text-lg font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="px-8 md:px-12 py-32">
        <div className="max-w-screen-xl mx-auto">
          <div className="space-y-32">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: brandEase }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-12 items-start"
              >
                <div>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5, ease: brandEase }}
                    viewport={{ once: true }}
                    className={`text-[10px] font-bold uppercase tracking-[0.3em] ${tw.light.accent} mb-4 block`}
                  >
                    0{index + 1}
                  </motion.span>
                  <h3 className="text-4xl md:text-5xl font-serif italic mb-4">{offering.title}</h3>
                </div>
                <div>
                  <p className="text-xl mb-4 font-medium">{offering.tagline}</p>
                  <p className={`${tw.light.textSecondary} leading-relaxed`}>{offering.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
