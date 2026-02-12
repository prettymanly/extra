import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Navigation, Footer, ScrollToTop } from './storybook';
import { tw, brandEase } from '../styles/colors';

interface RelatedPost { title: string; excerpt: string; tag: string; href: string; }

interface BlogPostPageProps {
  title: string;
  subtitle?: string;
  date: string;
  tag: string;
  readTime?: string;
  heroImage?: string;
  content: ContentBlock[];
  relatedPosts?: RelatedPost[];
}

type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'quote'; text: string; author?: string }
  | { type: 'image'; src: string; caption?: string }
  | { type: 'callout'; text: string }
  | { type: 'list'; items: string[] };

export default function BlogPostPage({
  title, subtitle, date, tag, readTime = '5 min read',
  heroImage, content, relatedPosts = [],
}: BlogPostPageProps) {

  const renderContentBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <motion.p key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className={`text-lg md:text-xl ${tw.light.textSecondary} leading-relaxed mb-8`} dangerouslySetInnerHTML={{ __html: block.text }} />
        );
      case 'heading':
        return (
          <motion.h2 key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-serif italic mb-8 mt-16">
            {block.text}
          </motion.h2>
        );
      case 'subheading':
        return (
          <motion.h3 key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-xl md:text-2xl font-bold mb-6 mt-12">
            {block.text}
          </motion.h3>
        );
      case 'quote':
        return (
          <motion.blockquote key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="border-l-4 border-[#FDDE0C] pl-8 my-12">
            <p className={`text-2xl md:text-3xl font-serif italic ${tw.light.textSecondary} leading-relaxed`} dangerouslySetInnerHTML={{ __html: `"${block.text}"` }} />
            {block.author && <cite className={`block mt-4 text-sm font-medium not-italic ${tw.light.textMuted}`}>&mdash; {block.author}</cite>}
          </motion.blockquote>
        );
      case 'image':
        return (
          <motion.figure key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="my-12 -mx-6 md:-mx-12 lg:-mx-20">
            <img src={block.src} alt={block.caption || ''} className="w-full rounded-xl" />
            {block.caption && <figcaption className={`mt-4 text-sm ${tw.light.textMuted} text-center px-6`}>{block.caption}</figcaption>}
          </motion.figure>
        );
      case 'callout':
        return (
          <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="bg-[#EDEDEA] border border-black/5 rounded-2xl p-8 my-12">
            <p className={`text-lg ${tw.light.textSecondary} leading-relaxed`}>{block.text}</p>
          </motion.div>
        );
      case 'list':
        return (
          <motion.ul key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="space-y-4 mb-8 ml-6">
            {block.items.map((item, i) => (
              <li key={i} className={`text-lg ${tw.light.textSecondary} leading-relaxed flex items-start gap-4`}>
                <span className="text-black/20 mt-2">&mdash;</span>
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen ${tw.light.bg} ${tw.light.text} ${tw.light.selection}`}>
      <Navigation />

      <main>
        {/* Article Header */}
        <section className="pt-32 md:pt-40 pb-8 px-6 md:px-12 lg:px-40">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-16 items-start">
              <motion.div className="md:col-span-3 space-y-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className={`text-xs font-medium uppercase tracking-widest ${tw.light.textMuted} block`}>{tag}</span>
                <span className={`text-xs font-medium uppercase tracking-widest ${tw.light.textMuted} block`}>{date}</span>
                <span className={`text-xs font-medium uppercase tracking-widest ${tw.light.textMuted} block`}>{readTime}</span>
              </motion.div>
              <motion.div className="md:col-span-9" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic leading-[1.1] mb-6">{title}</h1>
                {subtitle && <p className={`text-xl md:text-2xl ${tw.light.textSecondary} font-light max-w-2xl leading-relaxed`}>{subtitle}</p>}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        {heroImage && (
          <section className="pb-16 px-6 md:px-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-screen-xl mx-auto">
              <img src={heroImage} alt={title} className="w-full h-[40vh] md:h-[60vh] object-cover rounded-2xl" />
            </motion.div>
          </section>
        )}

        {/* Article Content */}
        <section className="py-16 px-6 md:px-12 lg:px-40">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-16">
              <div className="hidden md:block md:col-span-3" />
              <article className="md:col-span-9 max-w-2xl">
                {content.map((block, index) => renderContentBlock(block, index))}
              </article>
            </div>
          </div>
        </section>

        {/* Back to Thinking */}
        <section className="px-6 md:px-12 lg:px-40 pb-16">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-16">
              <div className="hidden md:block md:col-span-3" />
              <div className="md:col-span-9">
                <a href="/thinking" className={`inline-flex items-center gap-2 ${tw.light.textSecondary} hover:text-[#0A0A0A] font-medium transition-colors`}>
                  <ArrowRight className="rotate-180" size={16} /> Back to all posts
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-24 border-t border-black/5">
            <div className="pl-6 md:pl-12 lg:pl-40 pr-6">
              <h2 className="text-3xl md:text-4xl font-serif mb-12">Keep Reading</h2>
              <div className="flex gap-8 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {relatedPosts.map((post, index) => (
                  <motion.a key={post.title} href={post.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.5 }} viewport={{ once: true }} className="group flex-shrink-0 w-[320px] md:w-[400px] p-8 bg-white rounded-2xl hover:bg-[#EDEDEA] transition-colors border border-black/5">
                    <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${tw.light.textMuted} block mb-4`}>{post.tag}</span>
                    <h3 className="text-xl font-bold mb-4 group-hover-italic">{post.title}</h3>
                    <p className={`${tw.light.textSecondary} text-sm leading-relaxed`}>{post.excerpt}</p>
                  </motion.a>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
