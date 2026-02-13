import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { tw, brandEase } from '../../styles/colors';

interface ArtefactItem {
  title: string;
  description: string;
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
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-serif mb-6 ${tw.light.text}`}>{headline}</h2>
            <p className={`max-w-xl mx-auto leading-relaxed text-sm ${tw.light.textMuted}`}>{subheadline}</p>
          </div>

          {/* Three Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {groups.map((group, groupIndex) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: groupIndex * 0.15, ease: brandEase }}
                viewport={{ once: true }}
                onClick={() => openModal(group)}
                className="group cursor-pointer"
              >
                {/* Card */}
                <div className="bg-white rounded-3xl p-6 md:p-8 border border-black/5 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Stacked/Overlapping Images */}
                  <div className="relative h-48 md:h-56 mb-6">
                    {group.images.map((image, imgIndex) => {
                      // Calculate positions for overlapping effect
                      const rotation = imgIndex === 0 ? -6 : imgIndex === 1 ? 3 : imgIndex === 2 ? -3 : imgIndex === 3 ? 5 : 0;
                      const xOffset = imgIndex * 15;
                      const yOffset = imgIndex * 8;
                      const zIndex = group.images.length - imgIndex;

                      return (
                        <motion.div
                          key={imgIndex}
                          className="absolute rounded-xl overflow-hidden shadow-lg"
                          style={{
                            width: '70%',
                            aspectRatio: '4/3',
                            left: `${xOffset}%`,
                            top: `${yOffset}%`,
                            zIndex,
                            rotate: rotation,
                          }}
                          whileHover={{
                            scale: 1.05,
                            rotate: rotation * 0.5,
                          }}
                          transition={{ duration: 0.4, ease: brandEase }}
                        >
                          <img
                            src={image}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      );
                    })}

                    {/* Hover effect - images fan out */}
                    <style>{`
                      .group:hover [style*="rotate"] {
                        transform: scale(1.02) translateX(${groupIndex * 2}px);
                      }
                    `}</style>
                  </div>

                  {/* Label & Tagline */}
                  <div className="text-center">
                    <h3 className={`text-xl md:text-2xl font-bold mb-2 ${tw.light.text} group-hover:text-[#686344] transition-colors`}>
                      {group.label}
                    </h3>
                    <p className={`text-sm ${tw.light.textMuted}`}>
                      {group.tagline}
                    </p>
                  </div>

                  {/* Artefact count badge */}
                  <div className="mt-4 flex justify-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#FDDE0C] bg-[#FDDE0C]/10 px-3 py-1 rounded-full">
                      {group.artefacts.length} artefacts
                    </span>
                  </div>
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

                {/* Artefacts List */}
                <div className="border-t border-black/10 pt-8">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#939068] mb-6">
                    Artefacts
                  </h4>
                  <div className="space-y-4">
                    {selectedGroup.artefacts.map((artefact, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FDDE0C] mt-2 flex-shrink-0" />
                        <div>
                          <span className="font-bold text-[#0A0A0A]">{artefact.title}</span>
                          <span className="text-[#686344]"> — {artefact.description}</span>
                        </div>
                      </div>
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
