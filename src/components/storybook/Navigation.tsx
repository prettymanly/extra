import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
}

interface NavigationProps {
  links?: NavLink[];
  ctaText?: string;
  ctaHref?: string;
  dark?: boolean;
}

const defaultLinks: NavLink[] = [
  { name: 'Ways I Work', href: '/work' },
  { name: 'Proof', href: '/case-studies' },
  { name: 'Extra', href: '/extra' },
  { name: 'Thinking', href: '/thinking' },
  { name: 'About', href: '/about' },
];

export default function Navigation({
  links = defaultLinks,
  ctaText = "Let's Talk",
  ctaHref = "#cta",
  dark = true
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgColor = dark ? '[#0A0A0A]' : 'white';
  const textColor = dark ? 'white' : '[#0A0A0A]';
  const borderColor = dark ? 'white/5' : 'black/5';

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-6 md:px-12 ${scrolled ? `bg-${bgColor}/90 backdrop-blur-xl py-4 border-b border-${borderColor}` : 'bg-transparent'}`}>
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <a href="/" className="flex items-center gap-3 group cursor-pointer">
            <span className={`text-xl font-black tracking-tighter uppercase group-hover:italic transition-all ${dark ? 'text-white' : 'text-black'}`}>Ziff</span>
          </a>

          <div className="flex items-center gap-8">
            <div className={`hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 ${dark ? 'text-white' : 'text-black'}`}>
              {links.map((link) => (
                <a key={link.name} href={link.href} className="hover:opacity-100 transition-opacity">
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href={ctaHref}
              className={`hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                dark
                  ? 'bg-white text-black hover:bg-white/90'
                  : 'bg-black text-white hover:bg-black/80'
              }`}
            >
              {ctaText}
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-3 rounded-full transition-colors ${dark ? 'hover:bg-white/5 text-white' : 'hover:bg-black/5 text-black'}`}
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
            className={`fixed inset-0 z-40 flex flex-col justify-center items-center px-12 text-center ${dark ? 'bg-[#0A0A0A]' : 'bg-white'}`}
          >
            <div className="flex flex-col gap-6 text-4xl font-serif italic">
              {links.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`hover:tracking-tighter transition-all ${dark ? 'text-white hover:text-white/40' : 'text-black hover:text-black/40'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
