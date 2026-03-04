import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { brandEase } from '../../styles/colors';

/**
 * DESIGN SYSTEM: HeroGallery
 * - Horizontal scrollable gallery
 * - First item larger (70vw), subsequent (55vw)
 * - Supports images and HLS video (.m3u8)
 * - Third slot can be accent color block if no image
 * - Hover zoom effect on images
 */

interface HeroGalleryProps {
  images: string[];
  title?: string;
  accentColor?: string;
}

function isVideo(src: string) {
  return src.endsWith('.m3u8');
}

/** HLS video player that auto-loads hls.js */
function HLSVideo({ src, className }: { src: string; className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Safari native HLS
      video.src = src;
    } else {
      // Load hls.js dynamically for other browsers
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
      className={className}
      autoPlay
      muted
      loop
      playsInline
    />
  );
}

function MediaItem({ src, title, className }: { src: string; title: string; className?: string }) {
  if (isVideo(src)) {
    return <HLSVideo src={src} className={className} />;
  }
  return <img src={src} className={className} alt={title} />;
}

export default function HeroGallery({
  images,
  title = '',
  accentColor = '#FDDE0C',
}: HeroGalleryProps) {
  return (
    <section className="pb-12 md:pb-16">
      <motion.div
        className="flex gap-4 md:gap-5 overflow-x-auto pb-4 scrollbar-hide px-8 md:px-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: brandEase }}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {/* First Item - Large */}
        <motion.div
          className="flex-shrink-0 w-[70vw] md:w-[45vw] h-[35vh] md:h-[50vh] overflow-hidden rounded-xl relative group snap-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: brandEase }}
        >
          <MediaItem
            src={images[0]}
            title={title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        </motion.div>

        {/* Second Item */}
        {images[1] && (
          <motion.div
            className="flex-shrink-0 w-[55vw] md:w-[35vw] h-[35vh] md:h-[50vh] overflow-hidden rounded-xl relative group snap-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: brandEase }}
          >
            <MediaItem
              src={images[1]}
              title={title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </motion.div>
        )}

        {/* Third Item or Accent Color Block */}
        <motion.div
          className="flex-shrink-0 w-[55vw] md:w-[35vw] h-[35vh] md:h-[50vh] overflow-hidden rounded-xl relative group snap-start"
          style={{ backgroundColor: images[2] ? undefined : accentColor }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: brandEase }}
        >
          {images[2] ? (
            <MediaItem
              src={images[2]}
              title={title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[#0A0A0A]/80 text-2xl md:text-4xl font-serif italic">
                {title.split(' ')[0]}
              </span>
            </div>
          )}
        </motion.div>

        {/* Additional Items */}
        {images.slice(3).map((src, idx) => (
          <motion.div
            key={idx}
            className="flex-shrink-0 w-[55vw] md:w-[35vw] h-[35vh] md:h-[50vh] overflow-hidden rounded-xl relative group snap-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 + idx * 0.1, ease: brandEase }}
          >
            <MediaItem
              src={src}
              title={title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
