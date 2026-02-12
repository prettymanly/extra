import React from 'react';
import { motion } from 'framer-motion';
import { brandEase } from '../../styles/colors';

/**
 * DESIGN SYSTEM: HeroGallery
 * - Horizontal scrollable gallery
 * - First image larger (70vw), subsequent (55vw)
 * - Third slot can be accent color block if no image
 * - Hover zoom effect
 */

interface HeroGalleryProps {
  images: string[];
  title?: string;
  accentColor?: string;
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
        {/* First Image - Large */}
        <motion.div
          className="flex-shrink-0 w-[70vw] md:w-[45vw] h-[35vh] md:h-[50vh] overflow-hidden rounded-xl relative group snap-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: brandEase }}
        >
          <img
            src={images[0]}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            alt={title}
          />
        </motion.div>

        {/* Second Image */}
        {images[1] && (
          <motion.div
            className="flex-shrink-0 w-[55vw] md:w-[35vw] h-[35vh] md:h-[50vh] overflow-hidden rounded-xl relative group snap-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: brandEase }}
          >
            <img
              src={images[1]}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              alt={title}
            />
          </motion.div>
        )}

        {/* Third Image or Accent Color Block */}
        <motion.div
          className="flex-shrink-0 w-[55vw] md:w-[35vw] h-[35vh] md:h-[50vh] overflow-hidden rounded-xl relative group snap-start"
          style={{ backgroundColor: images[2] ? undefined : accentColor }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: brandEase }}
        >
          {images[2] ? (
            <img
              src={images[2]}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              alt={title}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[#0A0A0A]/80 text-2xl md:text-4xl font-serif italic">
                {title.split(' ')[0]}
              </span>
            </div>
          )}
        </motion.div>

        {/* Additional Images */}
        {images.slice(3).map((img, idx) => (
          <motion.div
            key={idx}
            className="flex-shrink-0 w-[55vw] md:w-[35vw] h-[35vh] md:h-[50vh] overflow-hidden rounded-xl relative group snap-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 + idx * 0.1, ease: brandEase }}
          >
            <img
              src={img}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              alt={title}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
