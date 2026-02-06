import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  idx: string;
}

interface ThinkingSectionProps {
  label?: string;
  headline: string;
  description?: string;
  posts: BlogPost[];
  ctaText?: string;
  ctaHref?: string;
  dark?: boolean;
}

const BlogRow = ({ post, dark }: { post: BlogPost; dark: boolean }) => {
  const borderColor = dark ? 'border-white/10' : 'border-black/10';
  const hoverBg = dark ? 'hover:bg-white/[0.02]' : 'hover:bg-black/[0.02]';
  const mutedColor = dark ? 'opacity-40' : 'opacity-40';

  return (
    <motion.a
      href="/thinking"
      whileHover={{ x: 10 }}
      className={`group flex flex-col md:flex-row md:items-center justify-between py-8 border-b ${borderColor} cursor-pointer ${hoverBg} transition-colors px-4 -mx-4 rounded-xl`}
    >
      <div className="flex items-center gap-4">
        <span className={`font-mono text-[10px] ${mutedColor}`}>{post.idx}</span>
        <h3 className="text-2xl md:text-3xl font-serif group-hover:italic transition-all leading-tight">
          {post.title}
        </h3>
      </div>
      <div className="flex items-center gap-6 mt-2 md:mt-0">
        <span className={`text-xs font-bold uppercase tracking-widest ${mutedColor}`}>
          {post.category}
        </span>
        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all" />
      </div>
    </motion.a>
  );
};

export default function ThinkingSection({
  label = 'Thinking',
  headline,
  description,
  posts,
  ctaText = 'All Posts',
  ctaHref = '/thinking',
  dark = true,
}: ThinkingSectionProps) {
  const textColor = dark ? 'text-white' : 'text-black';
  const mutedColor = dark ? 'text-white/40' : 'text-black/40';
  const borderColor = dark ? 'border-white/10' : 'border-black/10';
  const dividerBg = dark ? 'bg-white/10' : 'bg-black/10';
  const descColor = dark ? 'text-white/60' : 'text-black/60';

  return (
    <section className={`py-32 px-6 md:px-12 ${textColor}`}>
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <span className={`text-[10px] font-bold uppercase tracking-widest ${mutedColor} mb-6 block`}>
            {label}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif italic mb-8">
            {headline}
          </h2>
          <div className={`w-12 h-[2px] ${dividerBg} mb-8`} />
          {description && (
            <p className={`text-sm font-medium ${descColor} leading-relaxed max-w-xs`}>
              {description}
            </p>
          )}
        </div>

        <div className={`lg:col-span-8 border-t ${borderColor}`}>
          {posts.map((post) => (
            <BlogRow key={post.id} post={post} dark={dark} />
          ))}
          <div className="mt-8 flex justify-end">
            <a
              href={ctaHref}
              className={`flex items-center gap-2 font-bold uppercase text-[10px] tracking-widest hover:gap-4 transition-all ${mutedColor} hover:opacity-100`}
            >
              {ctaText} <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
