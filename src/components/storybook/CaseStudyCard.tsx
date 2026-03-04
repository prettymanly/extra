import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { tw, brandEase } from '../../styles/colors';

/**
 * DESIGN SYSTEM: CaseStudyCard
 * - Animation: scale from 0.97 (not y: 20)
 * - Hover: card lifts with shadow-2xl + -translate-y-2
 * - Image/Video: clip-path reveal from bottom
 * - Supports HLS video (.m3u8) with poster fallback
 * - Uses brandEase (imported from colors.ts)
 */

function isVideo(src: string) {
  return src.endsWith('.m3u8');
}

function CardVideo({ src, poster, title }: { src: string; poster?: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
    } else {
      import('hls.js').then(({ default: Hls }) => {
        if (Hls.isSupported()) {
          const hls = new Hls();
          hls.loadSource(src);
          hls.attachMedia(video);
        }
      });
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      poster={poster}
      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    />
  );
}

interface CaseStudyCardProps {
  title: string;
  oneLiner: string;
  category: string;
  image: string;
  poster?: string;
  href: string;
  index?: number;
}

export default function CaseStudyCard({
  title,
  oneLiner,
  category,
  image,
  poster,
  href,
  index = 0,
}: CaseStudyCardProps) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: brandEase }}
      viewport={{ once: true }}
      className="group relative block"
    >
      {/* Only image/video container lifts on hover - text stays static */}
      <div className="aspect-square overflow-hidden rounded-2xl mb-6 bg-[#EDEDEA] relative transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
        {/* Clip-path reveal on scroll */}
        <motion.div
          initial={{ clipPath: 'inset(100% 0 0 0)' }}
          whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
          transition={{ duration: 1, ease: brandEase, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="w-full h-full"
        >
          {isVideo(image) ? (
            <CardVideo src={image} poster={poster} title={title} />
          ) : (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
            />
          )}
        </motion.div>
        <div className="absolute inset-0 bg-[#0A0A0A]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-[#0A0A0A] text-white w-14 h-14 rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
            <ArrowUpRight size={24} />
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className={`text-[10px] font-bold uppercase tracking-widest ${tw.light.accent}`}>
            {category}
          </span>
          <ArrowRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:text-[#b39d00] transition-all -translate-x-2 group-hover:translate-x-0 ${tw.light.text}`} />
        </div>
        <h4 className={`text-xl font-bold tracking-tight ${tw.light.text}`}>
          {title}
        </h4>
        <p className={`text-sm font-medium italic leading-relaxed ${tw.light.textSecondary}`}>
          {oneLiner}
        </p>
      </div>
    </motion.a>
  );
}
