import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';

// --- Types ---
interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  idx: string;
}

interface CaseStudy {
  id: string;
  title: string;
  oneLiner: string;
  category: string;
  image: string;
  slug: string;
}

interface Service {
  title: string;
  tagline: string;
}

interface ExtraItem {
  title: string;
  description: string;
}

// --- Data ---
const BLOG_POSTS: BlogPost[] = [
  { id: '1', idx: '01', title: 'Why nobody ever changed because of a slide deck', date: 'JAN 2025', category: 'FACILITATION' },
  { id: '2', idx: '02', title: 'The Salt Bae principle', date: 'DEC 2024', category: 'PHILOSOPHY' },
  { id: '3', idx: '03', title: 'What the room needs from you', date: 'NOV 2024', category: 'PRESENCE' },
  { id: '4', idx: '04', title: 'Designing for resonance, not rigour', date: 'OCT 2024', category: 'STRATEGY' },
];

const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: 'Synthesis × Global FMCG',
    oneLiner: 'Shifting a team stuck in tool-mode to use of self.',
    category: 'TRANSFORMATION',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    slug: 'tetra-pak'
  },
  {
    id: '2',
    title: 'Synthesis (Internal)',
    oneLiner: 'From brilliant analysis to felt resonance.',
    category: 'INTEGRATION',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    slug: 'synthesis-internal'
  },
];

const SERVICES: Service[] = [
  { title: 'Transformation Programmes', tagline: 'Shift behaviour, not just transfer knowledge.' },
  { title: 'Team Workshops', tagline: 'Design thinking with soul.' },
  { title: 'Speaking', tagline: 'The interesting stuff.' },
];

const EXTRA_ITEMS: ExtraItem[] = [
  { title: 'Improv', description: 'Paying money to be embarrassed on purpose.' },
  { title: 'Teaching at SIT', description: 'Design Innovation. Futures, systems, life.' },
];

const COMPANIES = ['Ogilvy', 'Saatchi', 'What If!', 'Accenture Song', 'GovTech', 'Synthesis', 'SIT'];

// --- Helper Components ---
const BlogRow = ({ post }: { post: BlogPost }) => (
  <motion.a
    href="/thinking"
    whileHover={{ x: 10 }}
    className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-white/10 cursor-pointer hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-xl"
  >
    <div className="flex items-center gap-4">
      <span className="font-mono text-[10px] opacity-40">{post.idx}</span>
      <h3 className="text-2xl md:text-3xl font-serif group-hover:italic transition-all leading-tight">{post.title}</h3>
    </div>
    <div className="flex items-center gap-6 mt-2 md:mt-0">
      <span className="text-xs font-bold uppercase tracking-widest opacity-40">{post.category}</span>
      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all" />
    </div>
  </motion.a>
);

const CaseStudyCard = ({ study, index }: { study: CaseStudy; index: number }) => (
  <motion.a
    href={`/case-studies/${study.slug}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    viewport={{ once: true }}
    className="group relative block"
  >
    <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-white/5 relative">
      <img
        src={study.image}
        alt={study.title}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="bg-white text-black w-14 h-14 rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
          <ArrowUpRight size={24} />
        </div>
      </div>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{study.category}</span>
        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
      </div>
      <h4 className="text-xl font-bold tracking-tight">{study.title}</h4>
      <p className="text-sm font-medium text-white/60 italic leading-relaxed">{study.oneLiner}</p>
    </div>
  </motion.a>
);

// --- Main Component ---
export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);
  const yTranslate = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-6 md:px-12 ${scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent'}`}>
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <a href="/" className="flex items-center gap-3 group cursor-pointer">
            <span className="text-xl font-black tracking-tighter uppercase group-hover:italic transition-all">Ziff</span>
          </a>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
              <a href="/work" className="hover:opacity-100 transition-opacity">Ways I Work</a>
              <a href="/case-studies" className="hover:opacity-100 transition-opacity">Proof</a>
              <a href="/extra" className="hover:opacity-100 transition-opacity">Extra</a>
              <a href="/thinking" className="hover:opacity-100 transition-opacity">Thinking</a>
              <a href="/about" className="hover:opacity-100 transition-opacity">About</a>
            </div>
            <a href="#cta" className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/90 transition-all">
              Let&apos;s Talk
            </a>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-3 hover:bg-white/5 rounded-full transition-colors">
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 bg-[#0A0A0A] z-40 flex flex-col justify-center items-center px-12 text-center"
          >
            <div className="flex flex-col gap-6 text-4xl font-serif italic">
              {[
                { name: 'Ways I Work', href: '/work' },
                { name: 'Proof', href: '/case-studies' },
                { name: 'Extra', href: '/extra' },
                { name: 'Thinking', href: '/thinking' },
                { name: 'About', href: '/about' },
              ].map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="hover:tracking-tighter transition-all hover:text-white/40"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-16 px-6 md:px-12 max-w-screen-2xl mx-auto overflow-hidden">
          <motion.div style={{ opacity, scale, y: yTranslate }} className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-[10rem] font-serif italic mb-8 tracking-tight leading-[0.9]"
            >
              Be Extra.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-white/60 max-w-xl mx-auto mb-16"
            >
              Workshops, programmes, and team experiences—with a little extra soul.
            </motion.p>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-20 opacity-40 text-[10px] font-bold uppercase tracking-[0.2em]">
              {COMPANIES.map((company) => (
                <span key={company}>{company}</span>
              ))}
            </div>

            <motion.div
              initial={{ clipPath: 'inset(10% 20% 10% 20%)', opacity: 0 }}
              animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative max-w-6xl mx-auto"
            >
              <div className="aspect-[21/9] w-full rounded-3xl overflow-hidden bg-white/5 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80"
                  alt="Workshop session"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Ways I Work Section */}
        <section className="py-32 px-6 md:px-12 bg-[#111111]">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-6 block">Ways I Work</span>
              <h2 className="text-4xl md:text-5xl font-serif italic leading-[1.1] mb-8">
                Three ways I help teams feel something other than the quiet dread of another workshop.
              </h2>
              <a href="/work" className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-all w-fit">
                Explore <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="lg:col-span-8 border-t border-white/10">
              {SERVICES.map((service) => (
                <div key={service.title} className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-white/10 cursor-pointer hover:bg-white/[0.02] transition-colors px-6 -mx-6 rounded-xl">
                  <h3 className="text-3xl md:text-4xl font-serif group-hover:italic transition-all duration-300">{service.title}</h3>
                  <p className="text-white/40 mt-4 md:mt-0 font-medium md:max-w-xs md:text-right">{service.tagline}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-6 block">Proof</span>
              <h2 className="text-4xl md:text-5xl font-serif leading-[1.1]">
                Sessions people remember like a song they can&apos;t get out of their head.
              </h2>
            </div>
            <a href="/case-studies" className="flex items-center gap-2 font-bold uppercase text-[10px] tracking-widest hover:gap-4 transition-all group border-b border-white/10 pb-2">
              All Case Studies <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {CASE_STUDIES.map((study, idx) => (
              <CaseStudyCard key={study.id} study={study} index={idx} />
            ))}
          </div>
        </section>

        {/* Extra Section */}
        <section className="py-32 px-6 md:px-12 bg-[#111111] border-y border-white/5">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-6 block">Extra</span>
                <h2 className="text-4xl md:text-5xl font-serif italic">Side projects and the weird stuff that makes the work work.</h2>
              </div>
              <a href="/extra" className="flex items-center gap-2 font-bold uppercase text-[10px] tracking-widest hover:gap-4 transition-all group border-b border-white/10 pb-2">
                Explore <ArrowRight size={14} />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {EXTRA_ITEMS.map((item) => (
                <div key={item.title} className="p-8 bg-white/5 rounded-2xl hover:bg-white/[0.08] transition-colors">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/60">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Thinking Section */}
        <section className="py-32 px-6 md:px-12">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-6 block">Thinking</span>
              <h2 className="text-4xl md:text-5xl font-serif italic mb-8">Ideas I bake into sessions.</h2>
              <div className="w-12 h-[2px] bg-white/10 mb-8" />
              <p className="text-sm font-medium text-white/60 leading-relaxed max-w-xs">
                POVs on facilitation, design, and why the corporate world can afford to be more extra.
              </p>
            </div>

            <div className="lg:col-span-8 border-t border-white/10">
              {BLOG_POSTS.map((post) => (
                <BlogRow key={post.id} post={post} />
              ))}
              <div className="mt-8 flex justify-end">
                <a href="/thinking" className="flex items-center gap-2 font-bold uppercase text-[10px] tracking-widest hover:gap-4 transition-all opacity-40 hover:opacity-100">
                  All Posts <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Big CTA Section */}
        <section id="cta" className="py-32 px-6 md:px-12 bg-white text-black text-center overflow-hidden relative">
          <div className="max-w-screen-xl mx-auto relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif italic mb-8"
            >
              If this resonates, let&apos;s talk.
            </motion.h2>

            <p className="text-lg text-black/60 mb-12 max-w-lg mx-auto">
              WhatsApp me. Email me. Tell me what you&apos;re working on.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6 mb-20">
              <a href="https://wa.me/6593227317" className="px-8 py-4 bg-black text-white rounded-full font-bold uppercase text-xs tracking-widest hover:bg-black/80 transition-all">
                +65 9322 7317
              </a>
              <a href="mailto:ziff.lau@gmail.com" className="px-8 py-4 border border-black/20 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-black/5 transition-all">
                ziff.lau@gmail.com
              </a>
            </div>

            <nav className="flex flex-col gap-6 mb-20">
              {[
                { name: 'Ways I Work', href: '/work' },
                { name: 'Proof', href: '/case-studies' },
                { name: 'About', href: '/about' },
              ].map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-serif hover:italic transition-all duration-500 tracking-tighter"
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
              <span>Singapore</span>
              <span>·</span>
              <span>© {new Date().getFullYear()} Ziff</span>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        .font-serif {
          font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
        }
      `}</style>
    </div>
  );
}
