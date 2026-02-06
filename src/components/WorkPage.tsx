import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Navigation, Footer } from './storybook';

const offerings = [
  {
    title: "Transformation Programmes",
    tagline: "Shift behaviour, not just transfer knowledge.",
    description: "Your team knows the process. Something&apos;s still not landing. I design immersive experiences that shift behaviour, not just transfer knowledge. Research, workshop design, facilitation, artifacts. The full build.",
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
            Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif italic tracking-tight mb-8"
          >
            Ways I Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/60 max-w-2xl font-light leading-relaxed"
          >
            Three ways I help teams feel something other than the quiet dread of another workshop.
          </motion.p>
        </div>
      </section>

      {/* Image Strip */}
      <section className="mb-24">
        <div className="grid grid-cols-3 gap-1">
          {[
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=600&h=400&fit=crop",
          ].map((src, i) => (
            <motion.div
              key={i}
              className="aspect-video overflow-hidden"
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={src}
                alt={`Workshop ${i + 1}`}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* What Our Work Delivers */}
      <section className="px-6 md:px-12 py-24 bg-white/5">
        <div className="max-w-screen-xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-12"
          >
            Our Work Delivers
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliverables.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="w-2 h-2 rounded-full bg-white/40 mt-2 flex-shrink-0" />
                <p className="text-lg font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="px-6 md:px-12 py-32">
        <div className="max-w-screen-xl mx-auto">
          <div className="space-y-32">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-12 items-start"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-4 block">
                    0{index + 1}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-serif italic mb-4">
                    {offering.title}
                  </h3>
                </div>
                <div>
                  <p className="text-xl text-white/80 mb-4 font-medium">
                    {offering.tagline}
                  </p>
                  <p className="text-white/60 leading-relaxed" dangerouslySetInnerHTML={{ __html: offering.description }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-24 bg-white/5">
        <div className="max-w-screen-xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif italic mb-8"
          >
            Ready to make something memorable?
          </motion.h2>
          <motion.a
            href="https://wa.me/6593227317"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white/90 transition-colors"
          >
            Let&apos;s Talk <ArrowUpRight size={16} />
          </motion.a>
        </div>
      </section>

      <Footer dark />
    </div>
  );
}
