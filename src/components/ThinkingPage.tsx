import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Navigation, Footer } from './storybook';
import { tw } from '../styles/colors';

const posts = [
  {
    title: "Why nobody ever changed because of a slide deck",
    date: "January 2025",
    excerpt: "Information doesn\u2019t change behaviour. Feeling does. The gap between knowing and doing is bridged by something that lives in the body, not the brain.",
    tag: "Behaviour",
    href: "/thinking/why-nobody-ever-changed-because-of-a-slide-deck"
  },
  {
    title: "The Salt Bae principle",
    date: "December 2024",
    excerpt: "You remember Salt Bae for the salt-swan thing, not the steak. The extra costs nothing. It\u2019s a choice. So why do we walk into the office and accept forgettable?",
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
    excerpt: "We don\u2019t teach people new skills. We give them permission to use what they already have. The best workshops are excavation, not construction.",
    tag: "Learning",
    href: "/thinking/the-confidence-was-already-inside"
  },
  {
    title: "Designing for resonance, not rigour",
    date: "September 2024",
    excerpt: "Rigour convinces. Resonance moves. The difference between someone nodding and someone leaning in is rarely the quality of your logic.",
    tag: "Design",
    href: "/thinking/designing-for-resonance-not-rigour"
  },
  {
    title: "The Armature",
    date: "February 2025",
    excerpt: "In screenwriting, the armature is the moral argument of the story. Not the plot, not the theme. The one irreducible thing the entire work is about.",
    tag: "YASvember",
    href: "/writing/the-armature"
  },
  {
    title: "Baby-fying",
    date: "February 2025",
    excerpt: "There's a difference between simplifying and Baby-fying. Simplifying removes detail. Baby-fying reveals whether you actually understand what you're saying.",
    tag: "YASvember",
    href: "/writing/baby-fying"
  },
  {
    title: "Killing Your Darlings",
    date: "February 2025",
    excerpt: "The phrase comes from writing. It means: the sentence you're most proud of is probably the one that needs to go. Because you wrote it for yourself, not for the reader.",
    tag: "YASvember",
    href: "/writing/killing-your-darlings"
  },
  {
    title: "Lover, King, Warrior, Jester",
    date: "February 2025",
    excerpt: "The Lover connects. The King holds the frame. The Warrior drives. The Jester disrupts. Four archetypes for how you show up in a room.",
    tag: "YASvember",
    href: "/writing/the-four-archetypes"
  },
  {
    title: "No-Look Portrait",
    date: "February 2025",
    excerpt: "Draw the person across from you without looking at your paper. Keep your eyes on their face. Let your hand do whatever it does.",
    tag: "YASvember",
    href: "/writing/no-look-portrait"
  },
  {
    title: "Silent Shoe Sort",
    date: "February 2025",
    excerpt: "Everyone takes off their shoes. The group has to arrange them into some kind of order. No talking. No gesturing instructions. Just action.",
    tag: "YASvember",
    href: "/writing/silent-shoe-sort"
  },
  {
    title: "Oil and Water",
    date: "February 2025",
    excerpt: "Split the room. Give each side a position they have to defend. Not one they chose. One they were assigned. Make the positions genuinely incompatible.",
    tag: "YASvember",
    href: "/writing/oil-and-water"
  },
  {
    title: "Greenhousing",
    date: "February 2025",
    excerpt: "Most ideas die in their first thirty seconds. Not because they're bad. Because they're fragile. And rooms full of smart people are optimised for critique, not cultivation.",
    tag: "YASvember",
    href: "/writing/greenhousing"
  },
  {
    title: "Signalling",
    date: "February 2025",
    excerpt: "Every room is sending signals. Posture, energy, the quality of silence, the speed of responses. Most facilitators are too inside their own content to read them.",
    tag: "YASvember",
    href: "/writing/signalling"
  },
  {
    title: "The High Touch Axis",
    date: "February 2025",
    excerpt: "Ritual, participation, and sensory texture. The three dimensions that determine whether an experience lands in the body or stays in the head.",
    tag: "YASvember",
    href: "/writing/high-touch-axis"
  },
  {
    title: "The Extra Seat",
    date: "February 2025",
    excerpt: "In theatre, some directors leave an empty chair on stage. It's for the thing that wasn't scripted. The moment that emerges because the conditions were right.",
    tag: "YASvember",
    href: "/writing/the-extra-seat"
  }
];

export default function ThinkingPage() {
  return (
    <div className={`min-h-screen ${tw.light.bg} ${tw.light.text} ${tw.light.selection}`}>
      <Navigation />

      {/* Hero */}
      <section className="px-6 md:px-12 pt-32 pb-20">
        <div className="max-w-screen-xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
            <div className="w-6 h-0.5 bg-[#b39d00]" />
            <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${tw.light.olive}`}>Writing</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl lg:text-8xl font-serif italic tracking-tight mb-8">Thinking</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className={`text-xl md:text-2xl ${tw.light.textSecondary} max-w-2xl font-light leading-relaxed`}>
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
                className="group border-b border-black/5 py-12 first:pt-0 last:border-0 cursor-pointer block"
              >
                <div className="flex items-start justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${tw.light.accent}`}>{post.tag}</span>
                      <span className="text-black/10">&middot;</span>
                      <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${tw.light.textMuted}`}>{post.date}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight group-hover-italic">{post.title}</h2>
                    <p className={`${tw.light.textSecondary} leading-relaxed max-w-2xl`}>{post.excerpt}</p>
                  </div>
                  <div className="hidden md:block">
                    <ArrowRight className={`w-6 h-6 ${tw.light.textMuted} group-hover:text-[#b39d00] group-hover:translate-x-2 transition-all`} />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
