import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { tw, brandEase } from '../../styles/colors';

interface ArtefactItem {
  title: string;
  description: string;
  image?: string;
}

interface ArtefactGroup {
  id: string;
  label: string;
  tagline: string;
  images: string[];
  narrative: string[];
  artefacts: ArtefactItem[];
}

interface ArtefactsGroupedProps {
  groups: ArtefactGroup[];
  headline?: string;
  subheadline?: string;
}

export default function ArtefactsGrouped({
  groups,
  headline = "What We Built",
  subheadline = "The tools, experiences, and artefacts that made this programme work.",
}: ArtefactsGroupedProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<ArtefactGroup | null>(null);

  const openModal = (group: ArtefactGroup) => {
    setSelectedGroup(group);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedGroup(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section className={`py-24 md:py-32 px-6 md:px-12 ${tw.light.bg}`}>
        <div className="max-w-screen-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className={`text-4xl md:text-5xl font-serif mb-6 ${tw.light.text}`}>{headline}</h2>
            <p className={`max-w-xl mx-auto leading-relaxed text-sm ${tw.light.textMuted}`}>{subheadline}</p>
          </div>

          {/* Editorial Table of Contents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10">
            {groups.map((group, index) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: brandEase }}
                viewport={{ once: true }}
                onClick={() => openModal(group)}
                className="group cursor-pointer py-8 md:py-0 md:px-8 first:md:pl-0 last:md:pr-0"
              >
                {/* Rotated Number + Header */}
                <div className="flex items-start gap-4 md:gap-6 mb-8">
                  {/* Rotated Number */}
                  <span
                    className="text-7xl md:text-8xl font-serif text-[#0A0A0A]/10 group-hover:text-[#FDDE0C] transition-colors duration-500 leading-none"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                    }}
                  >
                    {index + 1}
                  </span>

                  {/* Label + Tagline */}
                  <div className="pt-2">
                    <h3 className={`text-xs font-bold uppercase tracking-widest mb-2 ${tw.light.text} group-hover:text-[#686344] transition-colors`}>
                      {group.label}
                    </h3>
                    <p className={`text-sm italic ${tw.light.textMuted}`}>
                      {group.tagline}
                    </p>
                  </div>
                </div>

                {/* Artefacts List */}
                <div className="space-y-4 ml-12 md:ml-14">
                  {group.artefacts.map((artefact, idx) => (
                    <div key={idx}>
                      {/* Artefact Name */}
                      <span className={`text-sm font-medium ${tw.light.textSecondary} group-hover:text-[#0A0A0A] transition-colors`}>
                        {artefact.title}
                      </span>

                      {/* Image (only if exists) */}
                      {artefact.image && (
                        <motion.div
                          className="mt-3 aspect-[4/3] rounded-lg overflow-hidden bg-[#EDEDEA] w-4/5"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3, ease: brandEase }}
                        >
                          <img
                            src={artefact.image}
                            alt={artefact.title}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Hover indicator */}
                <div className="mt-8 ml-12 md:ml-14">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#FDDE0C] opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && selectedGroup && (
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
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-[#EDEDEA] hover:bg-[#FDDE0C] z-10"
              >
                <X size={20} />
              </button>

              {/* Modal Content */}
              <div className="px-6 md:px-12 pb-12 pt-2 max-w-3xl mx-auto">
                {/* Category Tag */}
                <div className="mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#FDDE0C]">
                    {selectedGroup.label}
                  </span>
                </div>

                {/* Tagline as Title */}
                <h3 className="text-3xl md:text-4xl font-serif mb-8 italic">
                  {selectedGroup.tagline}
                </h3>

                {/* Narrative Paragraphs */}
                <div className="space-y-6 mb-10">
                  {selectedGroup.narrative.map((paragraph, idx) => (
                    <p key={idx} className={`text-base leading-relaxed ${tw.light.textSecondary}`}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Artefacts Row with Images */}
                <div className="border-t border-black/10 pt-8">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#939068] mb-6">
                    Artefacts
                  </h4>
                  <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 md:-mx-12 md:px-12 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {selectedGroup.artefacts.map((artefact, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1, ease: brandEase }}
                        className="flex-shrink-0 w-[200px] md:w-[240px]"
                      >
                        {artefact.image ? (
                          <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-[#EDEDEA]">
                            <img
                              src={artefact.image}
                              alt={artefact.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="aspect-[4/3] rounded-xl mb-3 bg-[#EDEDEA] flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-[#FDDE0C]/20" />
                          </div>
                        )}
                        <h5 className="font-bold text-sm text-[#0A0A0A] mb-1">{artefact.title}</h5>
                        <p className="text-xs text-[#686344]">{artefact.description}</p>
                      </motion.div>
                    ))}
                  </div>
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
