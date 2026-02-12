import React from 'react';
import { motion } from 'framer-motion';
import { tw, brandEase } from '../../styles/colors';

/**
 * DESIGN SYSTEM: Footer
 * - Background: tw.dark.bg (olive #686344)
 * - Buttons: tw.dark.btnAccent (bright yellow), tw.dark.btnSecondary
 * - Animation: Headlines y: 30, brandEase
 * - Accent divider: bright yellow (#FDDE0C)
 */

interface FooterLink {
  name: string;
  href: string;
}

interface FooterProps {
  showCTA?: boolean;
  ctaTitle?: string;
  ctaSubtitle?: string;
  phone?: string;
  email?: string;
  navLinks?: FooterLink[];
}

const defaultNavLinks: FooterLink[] = [
  { name: 'Services', href: '/work' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'About', href: '/about' },
];

export default function Footer({
  showCTA = true,
  ctaTitle = "If this resonates, let's talk.",
  ctaSubtitle = "WhatsApp me. Email me. Tell me what you're working on.",
  phone = "+65 9322 7317",
  email = "ziff.lau@gmail.com",
  navLinks = defaultNavLinks,
}: FooterProps) {
  return (
    <footer className={`${tw.dark.bg} ${tw.dark.text}`}>
      {showCTA && (
        <section id="cta" className="py-32 px-8 md:px-12 text-center overflow-hidden relative">
          <div className="max-w-screen-xl mx-auto relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: brandEase }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif italic mb-8"
            >
              {ctaTitle}
            </motion.h2>

            <p className={`text-lg mb-12 max-w-lg mx-auto ${tw.dark.textMuted}`}>
              {ctaSubtitle}
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6 mb-20">
              <a
                href={`https://wa.me/${phone.replace(/\D/g, '')}`}
                className={`px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest transition-all ${tw.dark.btnAccent}`}
              >
                {phone}
              </a>
              <a
                href={`mailto:${email}`}
                className={`px-8 py-4 border rounded-full font-bold uppercase text-xs tracking-widest transition-all ${tw.dark.btnSecondary}`}
              >
                {email}
              </a>
            </div>

            <nav className="flex flex-col gap-6 mb-20">
              {navLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-serif hover-italic tracking-tighter"
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            {/* Accent divider - bright yellow on dark bg */}
            <div className="w-16 h-0.5 bg-[#FDDE0C] mx-auto mb-8" />

            <div className={`flex flex-wrap justify-center gap-x-12 gap-y-4 text-[10px] font-bold uppercase tracking-[0.2em] ${tw.dark.textMuted}`}>
              <span>Singapore</span>
              <span>&middot;</span>
              <span>&copy; {new Date().getFullYear()} Ziff</span>
            </div>
          </div>
        </section>
      )}
    </footer>
  );
}
