import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Navigation, Footer } from './storybook';

const extraItems = [
  {
    title: "Improv",
    description: "Paying money to be embarrassed on purpose. It's the best training for presence, listening, and being comfortable with not knowing what comes next.",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&h=400&fit=crop",
    tag: "Practice"
  },
  {
    title: "Teaching at SIT",
    description: "Design Innovation at Singapore Institute of Technology. Futures, systems, and applying design thinking to life. Not just how to make better products—how to make better decisions about things that actually matter.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
    tag: "Education"
  },
  {
    title: "Coming Soon",
    description: "Space for future side projects and experiments.",
    image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=600&h=400&fit=crop",
    tag: "Future"
  }
];

export default function ExtraPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navigation dark />

      {/* Hero */}
      <section className="px-6 md:px-12 pt-32 pb-20">
        <div className="max-w-screen-xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-6"
          >
            Side Projects
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif italic tracking-tight mb-8"
          >
            Extra
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/60 max-w-2xl font-light leading-relaxed"
          >
            Learning to see. Side projects, experiments, and the interesting stuff.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {extraItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="aspect-video mb-6 overflow-hidden rounded-2xl relative bg-white/5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-3 block">
                  {item.tag}
                </span>
                <h3 className="text-2xl font-bold mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer dark />
    </div>
  );
}
