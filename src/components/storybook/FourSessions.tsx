import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { tw, brandEase } from '../../styles/colors';

/**
 * FourSessions — YASvember's experiential proof section.
 *
 * Follows the same click-to-reveal interaction as ArtefactsGrouped (Tetra Pak):
 * Columns show number + name + premise. Clicking opens a bottom-sheet modal
 * with the full body text and inline linked concepts.
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
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
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

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

/** Extract concept names from markdown links for the column preview */
function extractConcepts(text: string): string[] {
  const regex = /\[([^\]]+)\]\([^)]+\)/g;
  const concepts: string[] = [];
  let match;
  while ((match = regex.exec(text)) !== null) {
    concepts.push(match[1]);
  }
  return concepts;
}

export default function FourSessions({ headline, subheadline, sessions }: FourSessionsProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);

  const openModal = (session: Session) => {
    setSelectedSession(session);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedSession(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section className={`py-24 md:py-32 px-8 md:px-12 ${tw.light.bg}`}>
        <div className="max-w-screen-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className={`text-4xl md:text-5xl font-serif mb-6 ${tw.light.text}`}>{headline}</h2>
            <p className={`max-w-xl mx-auto leading-relaxed text-sm ${tw.light.textMuted}`}>{subheadline}</p>
          </div>

          {/* 4-column grid — click to reveal */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-black/10">
            {sessions.map((session, index) => {
              const concepts = extractConcepts(session.body);
              return (
                <motion.div
                  key={session.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: brandEase }}
                  viewport={{ once: true }}
                  onClick={() => openModal(session)}
                  className="group cursor-pointer py-8 lg:py-0 lg:px-8 first:lg:pl-0 last:lg:pr-0"
                >
                  {/* Number + Name */}
                  <div className="flex items-start gap-4 md:gap-6 mb-8">
                    {/* Rotated Number */}
                    <span
                      className="text-7xl md:text-8xl font-serif text-[#0A0A0A]/10 group-hover:text-[#686344] transition-colors duration-500 leading-none"
                      style={{
                        writingMode: 'vertical-rl',
                        transform: 'rotate(180deg)',
                      }}
                    >
                      {index + 1}
                    </span>

                    {/* Name + Premise */}
                    <div className="pt-2">
                      <h3 className={`text-xs font-bold uppercase tracking-widest mb-2 ${tw.light.text} group-hover:text-[#686344] transition-colors`}>
                        {session.name}
                      </h3>
                      <p className={`text-sm italic ${tw.light.textMuted}`}>
                        {session.premise}
                      </p>
                    </div>
                  </div>

                  {/* Concept list — like artefact titles in Tetra Pak */}
                  <div className="space-y-3 ml-12 md:ml-14">
                    {concepts.map((concept, idx) => (
                      <span
                        key={idx}
                        className={`block text-sm font-medium ${tw.light.textSecondary} group-hover:text-[#0A0A0A] transition-colors`}
                      >
                        {concept}
                      </span>
                    ))}
                  </div>

                  {/* Hover indicator */}
                  <div className="mt-8 ml-12 md:ml-14">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#686344] opacity-0 group-hover:opacity-100 transition-opacity">
                      Read more &rarr;
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal — bottom sheet like ArtefactsGrouped */}
      <AnimatePresence>
        {modalOpen && selectedSession && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100%' }}
              transition={{ duration: 0.5, ease: brandEase }}
              className="fixed inset-x-0 bottom-0 z-50 max-h-[90vh] overflow-y-auto rounded-t-3xl bg-[#F6F6F3] text-[#0A0A0A]"
            >
              {/* Drag Handle */}
              <div className="sticky top-0 pt-4 pb-2 flex justify-center bg-[#F6F6F3] z-10">
                <div className="w-12 h-1 rounded-full bg-black/10" />
              </div>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-[#EDEDEA] hover:bg-[#686344] hover:text-white z-10"
              >
                <X size={20} />
              </button>

              {/* Modal Content */}
              <div className="px-6 md:px-12 pb-12 pt-2 max-w-3xl mx-auto">
                {/* Session Number Tag */}
                <div className="mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#686344]">
                    Session {selectedSession.number}
                  </span>
                </div>

                {/* Session Name as Title */}
                <h3 className="text-3xl md:text-4xl font-serif mb-3 italic">
                  {selectedSession.name}
                </h3>

                {/* Premise */}
                <p className={`text-base italic ${tw.light.textMuted} mb-8 pb-8 border-b border-black/10`}>
                  {selectedSession.premise}
                </p>

                {/* Full Body — revealed on click */}
                <div className="space-y-6">
                  {selectedSession.body.split('\n\n').map((paragraph, idx) => (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.08, ease: brandEase }}
                      className={`text-base leading-relaxed ${tw.light.textSecondary}`}
                    >
                      {parseLinks(paragraph)}
                    </motion.p>
                  ))}
                </div>

                {/* Close Button */}
                <motion.button
                  onClick={closeModal}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-10 inline-flex items-center gap-3 px-6 py-3 border border-black/10 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[#0A0A0A] hover:text-white hover:border-[#0A0A0A]"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
