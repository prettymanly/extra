import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Navigation, Footer } from './storybook';

const posts = [
  {
    title: "Why nobody ever changed because of a slide deck",
    date: "January 2025",
    excerpt: "Information doesn't change behaviour. Feeling does. The gap between knowing and doing is bridged by something that lives in the body, not the brain.",
    tag: "Behaviour",
    href: "/thinking/why-nobody-ever-changed-because-of-a-slide-deck"
  },
  {
    title: "The Salt Bae principle",
    date: "December 2024",
    excerpt: "You remember Salt Bae for the salt-swan thing, not the steak. The extra costs nothing. It's a choice. So why do we walk into the office and accept forgettable?",
    tag: "Philosophy",
    href: "/thinking/the-salt-bae-principle"
  },
  {
    title: "What the room needs from you",
    date: "November 2024",
    excerpt: "Every moment in a workshop asks something different from the facilitator. Sometimes energy. Sometimes silence. The skill is reading what the room needs.",
    tag: "Facilitation",
    href: "/thinking/what-the-room-needs-from-you"
  },
  {
    title: "The confidence was already inside",
    date: "October 2024",
    excerpt: "We don't teach people new skills. We give them permission to use what they already have. The best workshops are excavation, not construction.",
    tag: "Learning",
    href: "/thinking/the-confidence-was-already-inside"
  },
  {
    title: "Designing for resonance, not rigour",
    date: "September 2024",
    excerpt: "Rigour convinces. Resonance moves. The difference between someone nodding and someone leaning in is rarely the quality of your logic.",
    tag: "Design",
    href: "/thinking/designing-for-resonance-not-rigour"
  }
];

export default function ThinkingPage() {
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
            Writing
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif italic tracking-tight mb-8"
          >
            Thinking
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/60 max-w-2xl font-light leading-relaxed"
          >
            Ideas I bake into sessions. POVs on facilitation, design, and why the corporate world can afford to be more extra.
          </motion.p>
        </div>
      </section>

      {/* Posts */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-0">
            {posts.map((post, index) => (
              <motion.a
                key={post.title}
                href={post.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                viewport={{ once: true }}
                className="group border-b border-white/10 py-12 first:pt-0 last:border-0 cursor-pointer block"
              >
                <div className="flex items-start justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                        {post.tag}
                      </span>
                      <span className="text-white/20">·</span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                        {post.date}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight group-hover:text-white/80 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-white/60 leading-relaxed max-w-2xl">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="hidden md:block">
                    <ArrowRight
                      className="w-6 h-6 text-white/20 group-hover:text-white group-hover:translate-x-2 transition-all"
                    />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <Footer dark />
    </div>
  );
}
