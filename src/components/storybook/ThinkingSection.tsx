import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { tw, brandEase } from '../../styles/colors';

/**
 * DESIGN SYSTEM: ThinkingSection
 * - Layout: 4/8 grid with sidebar
 * - Animation: Labels x: -20, Headlines y: 30, Rows x: -20
 * - BlogRow: Yellow index number, smooth italic hover
 * - Background: light.bg (default cream)
 */

interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  idx: string;
  slug: string;
}

interface ThinkingSectionProps {
  label?: string;
  headline: string;
  description?: string;
  posts: BlogPost[];
  ctaText?: string;
  ctaHref?: string;
}

const BlogRow = ({ post, index }: { post: BlogPost; index: number }) => (
  <motion.a
    href={`/thinking/${post.slug}`}
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.08, duration: 0.6, ease: brandEase }}
    viewport={{ once: true }}
    whileHover={{ x: 10 }}
    className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-black/5 cursor-pointer hover:bg-black/[0.02] transition-colors px-4 -mx-4 rounded-xl"
  >
    <div className="flex items-center gap-4">
      <span className={`font-mono text-[10px] font-bold ${tw.light.accent}`}>{post.idx}</span>
      <h3 className={`text-2xl md:text-3xl font-serif ${tw.light.text} group-hover-italic leading-tight`}>
        {post.title}
      </h3>
    </div>
    <div className="flex items-center gap-6 mt-2 md:mt-0">
      <span className={`text-xs font-bold uppercase tracking-widest ${tw.light.accent}`}>{post.category}</span>
      <ArrowUpRight className={`w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:text-[#b39d00] transition-all ${tw.light.text}`} />
    </div>
  </motion.a>
);

export default function ThinkingSection({
  label = 'Writing',
  headline,
  description,
  posts,
  ctaText = 'All Posts',
  ctaHref = '/thinking',
}: ThinkingSectionProps) {
  return (
    <section className="py-32 px-8 md:px-12">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: brandEase }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-6 h-0.5 bg-[#b39d00]" />
            <span className={`text-[10px] font-bold uppercase tracking-widest ${tw.light.olive}`}>
              {label}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: brandEase }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-serif italic mb-8 ${tw.light.text}`}
          >
            {headline}
          </motion.h2>
          <div className="w-12 h-[2px] bg-[#b39d00] mb-8" />
          {description && (
            <p className={`text-sm font-medium ${tw.light.textSecondary} leading-relaxed max-w-xs`}>
              {description}
            </p>
          )}
        </div>

        <div className="lg:col-span-8 border-t border-black/5">
          {posts.map((post, index) => (
            <BlogRow key={post.id} post={post} index={index} />
          ))}
          <div className="mt-8 flex justify-end">
            <a
              href={ctaHref}
              className={`flex items-center gap-2 font-bold uppercase text-[10px] tracking-widest hover:gap-4 transition-all ${tw.light.textMuted}`}
            >
              {ctaText} <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
