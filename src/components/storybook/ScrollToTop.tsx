import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

/**
 * DESIGN SYSTEM: ScrollToTop
 * - Fixed position bottom-right
 * - Appears after scrolling 50px
 * - Black circle with white arrow
 * - Scale animation on hover/tap
 */

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.button
      className={`fixed bottom-8 right-8 w-12 h-12 bg-[#0A0A0A] text-white rounded-full flex items-center justify-center shadow-2xl z-50 transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </motion.button>
  );
}
