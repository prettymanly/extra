import React from 'react';
import { motion } from 'framer-motion';
import { tw, brandEase } from '../../styles/colors';

/**
 * FourSessions — YASvember's experiential proof section.
 *
 * Unlike Tetra Pak's "What We Built" (artefact-based), this renders
 * 4 equal columns representing sessions, with inline linked concepts.
 *
 * Links use markdown-style [text](url) syntax in body text.
 */

export interface Session {
  number: string;       // "01", "02", etc.
  name: string;         // "Message", "Messenger", etc.
  premise: string;      // Italic one-liner
  body: string;         // Prose with [link text](url) markdown links
}

interface FourSessionsProps {
  headline: string;
  subheadline: string;
  sessions: Session[];
}

/** Parse markdown-style links in body text into React nodes */
function parseLinks(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Text before the link
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    // The link itself
    parts.push(
      <a
        key={match.index}
        href={match[2]}
        className="text-[#686344] underline decoration-[#686344]/30 underline-offset-2 hover:decoration-[#686344] transition-colors duration-200"
      >
        {match[1]}
      </a>
    );
    lastIndex = regex.lastIndex;
  }

  // Remaining text after last link
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

export default function FourSessions({ headline, subheadline, sessions }: FourSessionsProps) {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      {/* Section header — matches other sections' 160px left padding */}
      <div className="px-8 md:px-12 max-w-screen-2xl mx-auto mb-16 md:mb-20">
        <div className="md:pl-[160px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: brandEase as unknown as number[] }}
          >
            <p className={`text-[10px] font-bold uppercase tracking-[0.3em] ${tw.light.textMuted} mb-4`}>
              The Programme
            </p>
            <h2 className={`text-4xl md:text-5xl font-serif italic tracking-tight mb-4 ${tw.light.text}`}>
              {headline}
            </h2>
            <p className={`text-base md:text-lg ${tw.light.textSecondary} max-w-2xl leading-relaxed`}>
              {subheadline}
            </p>
          </motion.div>
        </div>
      </div>

      {/* 4-column grid */}
      <div className="px-8 md:px-12 max-w-screen-2xl mx-auto">
        <div className="md:pl-[160px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {sessions.map((session, idx) => (
              <motion.div
                key={session.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: brandEase as unknown as number[],
                }}
                className="relative"
              >
                {/* Session number */}
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#939068] mb-3">
                  {session.number}
                </p>

                {/* Session name */}
                <h3 className="text-xl md:text-2xl font-serif italic tracking-tight text-[#0A0A0A] mb-4">
                  {session.name}
                </h3>

                {/* Premise — italic, olive */}
                <p className="text-sm italic text-[#686344] leading-relaxed mb-5 pb-5 border-b border-black/8">
                  {session.premise}
                </p>

                {/* Body — flowing prose with inline links */}
                <div className="text-[13px] md:text-sm text-[#4A4A45] leading-[1.75] space-y-4">
                  {session.body.split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx}>{parseLinks(paragraph)}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
