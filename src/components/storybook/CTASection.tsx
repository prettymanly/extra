import React from 'react';
import { motion } from 'framer-motion';

interface NavLink {
  name: string;
  href: string;
}

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
  phone?: string;
  email?: string;
  navLinks?: NavLink[];
  location?: string;
  dark?: boolean;
}

const defaultNavLinks: NavLink[] = [
  { name: 'Ways I Work', href: '/work' },
  { name: 'Proof', href: '/case-studies' },
  { name: 'About', href: '/about' },
];

export default function CTASection({
  headline = "If this resonates, let's talk.",
  subheadline = "WhatsApp me. Email me. Tell me what you're working on.",
  phone = "+65 9322 7317",
  email = "ziff.lau@gmail.com",
  navLinks = defaultNavLinks,
  location = "Singapore",
  dark = false,
}: CTASectionProps) {
  const bgColor = dark ? 'bg-[#0A0A0A]' : 'bg-white';
  const textColor = dark ? 'text-white' : 'text-black';
  const mutedColor = dark ? 'text-white/60' : 'text-black/60';
  const borderColor = dark ? 'border-white/20' : 'border-black/20';

  return (
    <section id="cta" className={`py-32 px-6 md:px-12 ${bgColor} ${textColor} text-center overflow-hidden relative`}>
      <div className="max-w-screen-xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-serif italic mb-8"
        >
          {headline}
        </motion.h2>

        <p className={`text-lg ${mutedColor} mb-12 max-w-lg mx-auto`}>
          {subheadline}
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mb-20">
          <a
            href={`https://wa.me/${phone.replace(/\D/g, '')}`}
            className={`px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest transition-all ${
              dark
                ? 'bg-white text-black hover:bg-white/90'
                : 'bg-black text-white hover:bg-black/80'
            }`}
          >
            {phone}
          </a>
          <a
            href={`mailto:${email}`}
            className={`px-8 py-4 border rounded-full font-bold uppercase text-xs tracking-widest transition-all ${borderColor} ${
              dark ? 'hover:bg-white/10' : 'hover:bg-black/5'
            }`}
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

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
          <span>{location}</span>
          <span>·</span>
          <span>© {new Date().getFullYear()} Ziff</span>
        </div>
      </div>
    </section>
  );
}
