import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Navigation, Footer } from './storybook';
import { tw } from '../styles/colors';

const extraItems = [
  {
    title: "Arabingo",
    description: "A board game helping Muslim kids fall in love with the Arabic alphabet. What started as a father-son experiment became something worth sharing. Play first. Fluency follows.",
    image: "https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=600&h=400&fit=crop",
    tag: "Board Game"
  },
  {
    title: "Inner Playground",
    description: "A safe space for possible selves. Through applied improv, adults prototype future versions of themselves. Practicing courage before reality demands it. Growth as rehearsal, not judgment.",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&h=400&fit=crop",
    tag: "Practice"
  },
  {
    title: "Conscious Collapse",
    description: "Meditations for people who can feel the cracking. Burnout, identity fatigue, and the strange clarity when the old story stops working. Not self-help. More like sitting calmly while the wallpaper peels.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop",
    tag: "YouTube Series"
  },
  {
    title: "Tümbo",
    description: "Every enrichment directory in Singapore reads the same: provider name, price, marketing copy. Tümbo pulls it together into something usable. What parents actually say, which kids thrive, what to honestly expect. Still a directory. Just one that tells you what the class actually feels like.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop",
    tag: "Product"
  }
];

export default function ExtraPage() {
  return (
    <div className={`min-h-screen ${tw.light.bg} ${tw.light.text} ${tw.light.selection}`}>
      <Navigation />

      {/* Hero */}
      <section className="px-6 md:px-12 pt-32 pb-20">
        <div className="max-w-screen-xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
            <div className="w-6 h-0.5 bg-[#b39d00]" />
            <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${tw.light.olive}`}>Side Projects</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl lg:text-8xl font-serif italic tracking-tight mb-8">Extra</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className={`text-xl md:text-2xl ${tw.light.textSecondary} max-w-2xl font-light leading-relaxed`}>
            Learning to see. Side projects, experiments, and the interesting stuff.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {extraItems.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.6 }} viewport={{ once: true }} className="group">
                <div className="aspect-video mb-6 overflow-hidden rounded-2xl relative bg-[#EDEDEA]">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-[#0A0A0A]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-[#0A0A0A] text-white w-12 h-12 rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${tw.light.accent} mb-3 block`}>{item.tag}</span>
                <h3 className="text-2xl font-bold mb-3 tracking-tight">{item.title}</h3>
                <p className={`${tw.light.textSecondary} leading-relaxed`}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
