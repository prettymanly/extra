import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { tw, brandEase } from '../../styles/colors';

/**
 * DESIGN SYSTEM: Navigation
 * - Mobile padding: px-8
 * - Uses brandEase for animations (imported from colors.ts)
 * - Font: Instrument Serif for mobile menu (.font-serif)
 */

interface NavLink {
  name: string;
  href: string;
}

interface NavigationProps {
  links?: NavLink[];
  ctaText?: string;
  ctaHref?: string;
  currentPath?: string;
}

const defaultLinks: NavLink[] = [
  { name: 'Services', href: '/work' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Side Projects', href: '/extra' },
  { name: 'Writing', href: '/thinking' },
  { name: 'About', href: '/about' },
];

export default function Navigation({
  links = defaultLinks,
  ctaText = "Let's Talk",
  ctaHref = "#cta",
  currentPath = '',
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Auto-detect current path on client
  const [activePath, setActivePath] = useState(currentPath);
  useEffect(() => {
    if (!currentPath && typeof window !== 'undefined') {
      setActivePath(window.location.pathname);
    }
  }, [currentPath]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-8 py-6 md:px-12 ${scrolled ? 'bg-[#F6F6F3]/90 backdrop-blur-xl py-4 border-b border-black/5' : 'bg-transparent'}`}>
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <a href="/" className="flex items-center gap-3 group cursor-pointer">
            <span className={`text-xl font-black tracking-tighter uppercase group-hover-italic ${tw.light.text}`}>Ziff</span>
          </a>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
              {links.map((link) => {
                const isActive = activePath === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative text-[#0A0A0A] transition-all group ${
                      isActive ? 'opacity-100' : 'opacity-40 hover:opacity-100'
                    }`}
                  >
                    {link.name}
                    {/* Yellow underline - active or hover */}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#b39d00] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </a>
                );
              })}
            </div>
            <a
              href={ctaHref}
              className={`hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${tw.light.btnPrimary}`}
            >
              {ctaText}
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-3 rounded-full transition-colors hover:bg-black/5 ${tw.light.text}`}
            >
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
            className="fixed inset-0 z-40 flex flex-col justify-center items-center px-12 text-center bg-[#F6F6F3]"
          >
            <div className={`flex flex-col gap-6 text-4xl font-serif italic ${tw.light.text}`}>
              {links.map((item, idx) => {
                const isActive = activePath === item.href;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, ease: brandEase }}
                    className={`hover:tracking-tighter transition-all ${
                      isActive ? 'text-[#b39d00]' : 'hover:text-[#939068]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
