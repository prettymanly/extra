import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, Footer } from './storybook';

const companies = [
  "Ogilvy",
  "Saatchi & Saatchi",
  "What If! Innovation",
  "Accenture Song",
  "GovTech Singapore",
  "Synthesis",
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
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navigation dark />

      {/* Hero */}
      <section className="px-6 md:px-12 pt-32 pb-20">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 md:gap-20 items-start">
            {/* Photo */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
                  alt="Ziff"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>

            {/* Info */}
            <div className="md:col-span-3">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-4"
              >
                About
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-serif italic mb-2"
              >
                Ziff
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/60 mb-12"
              >
                Facilitator & Experience Designer
              </motion.p>

              <div className="space-y-6">
                {bioSections.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className={`text-lg leading-relaxed ${index === 0 ? 'text-white font-medium' : 'text-white/60'}`}
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
      <section className="px-6 md:px-12 py-32 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-8"
          >
            The Through-Line
          </motion.p>
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-serif italic leading-relaxed text-white/80"
          >
            &ldquo;The extra is what turns ads into culture, workshops into moments, and rooms full of lanyards into something people actually remember.&rdquo;
          </motion.blockquote>
        </div>
      </section>

      {/* Logo Strip */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-screen-xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-12 text-center"
          >
            Previously At
          </motion.p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {companies.map((company, index) => (
              <motion.span
                key={company}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-white/40 text-sm md:text-base font-medium tracking-wide hover:text-white transition-colors"
              >
                {company}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <Footer dark />
    </div>
  );
}
