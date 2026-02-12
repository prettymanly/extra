import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { tw, brandEase } from '../../styles/colors';

interface Artefact {
  title: string;
  description?: string;
  image?: string;
  details?: string;
}

interface ArtefactsCarouselProps {
  artefacts: Artefact[];
  headline?: string;
  subheadline?: string;
  dark?: boolean;
}

export default function ArtefactsCarousel({
  artefacts,
  headline = "What We Built",
  subheadline = "The tools, experiences, and artefacts that made this programme work.",
}: ArtefactsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedArtefact, setSelectedArtefact] = useState<Artefact | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const currentArtefact = artefacts[currentIndex];

  const scrollTo = (index: number) => {
    setCurrentIndex(index);
    if (scrollRef.current) {
      const cardWidth = 320; // Approximate card width + gap
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const goNext = () => {
    const nextIdx = (currentIndex + 1) % artefacts.length;
    scrollTo(nextIdx);
  };

  const goPrev = () => {
    const prevIdx = (currentIndex - 1 + artefacts.length) % artefacts.length;
    scrollTo(prevIdx);
  };

  const openModal = (artefact: Artefact) => {
    setSelectedArtefact(artefact);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedArtefact(null);
    document.body.style.overflow = 'unset';
  };

  // Rotation patterns for visual interest
  const getRotation = (index: number) => {
    const rotations = [-3, 2, -2, 3, -1, 2];
    return rotations[index % rotations.length];
  };

  return (
    <>
      <section className={`py-24 md:py-32 px-6 md:px-12 ${tw.light.bg}`}>
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-serif mb-6 ${tw.light.text}`}>{headline}</h2>
            <p className={`max-w-xl mx-auto leading-relaxed text-sm ${tw.light.textMuted}`}>{subheadline}</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: brandEase }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 border border-black/5 shadow-2xl relative"
          >
            {/* Current Artefact Info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: brandEase }}
                className="text-center"
              >
                <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${tw.light.text}`}>{currentArtefact.title}</h3>
                {currentArtefact.description && (
                  <p className={`text-base leading-relaxed mb-10 max-w-lg mx-auto ${tw.light.textMuted}`}>{currentArtefact.description}</p>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Horizontal Cards with Side Navigation */}
            <div className="relative">
              {/* Left Arrow */}
              {artefacts.length > 1 && (
                <motion.button
                  onClick={goPrev}
                  whileHover={{ scale: 1.1, x: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-black/5 flex items-center justify-center hover:bg-[#FDDE0C] hover:border-[#FDDE0C] transition-colors"
                >
                  <ChevronLeft size={24} className="text-[#0A0A0A]" />
                </motion.button>
              )}

              {/* Horizontal Scrolling Cards */}
              <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto pb-4 px-8 md:px-16 scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {artefacts.map((artefact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: brandEase }}
                    viewport={{ once: true }}
                    style={{ rotate: getRotation(index) }}
                    className={`flex-shrink-0 w-[280px] md:w-[320px] cursor-pointer group ${index === currentIndex ? 'scale-105' : 'opacity-70 hover:opacity-100'} transition-all duration-300`}
                    onClick={() => {
                      setCurrentIndex(index);
                      openModal(artefact);
                    }}
                  >
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative">
                      {artefact.image && (
                        <img
                          src={artefact.image}
                          alt={artefact.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                        <div className="w-14 h-14 bg-[#0A0A0A] text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                          <ArrowUpRight size={20} />
                        </div>
                      </div>
                    </div>
                    <p className={`mt-4 text-sm font-medium text-center ${tw.light.textMuted} group-hover:text-[#0A0A0A] transition-colors`}>
                      {artefact.title}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Right Arrow */}
              {artefacts.length > 1 && (
                <motion.button
                  onClick={goNext}
                  whileHover={{ scale: 1.1, x: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-black/5 flex items-center justify-center hover:bg-[#FDDE0C] hover:border-[#FDDE0C] transition-colors"
                >
                  <ChevronRight size={24} className="text-[#0A0A0A]" />
                </motion.button>
              )}
            </div>

            {/* Read More Button + Dots */}
            <div className="text-center mt-10">
              <motion.button
                onClick={() => openModal(currentArtefact)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group inline-flex items-center gap-3 px-8 py-4 border border-black/10 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[#FDDE0C] hover:text-[#0A0A0A] hover:border-[#FDDE0C] ${tw.light.text}`}
              >
                Read More
                <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
              </motion.button>

              {/* Dot indicators */}
              {artefacts.length > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                  {artefacts.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollTo(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-[#0A0A0A] w-6' : 'bg-black/10 hover:bg-black/20'}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && selectedArtefact && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" />
            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100%' }}
              transition={{ duration: 0.5, ease: brandEase }}
              className="fixed inset-x-0 bottom-0 z-50 max-h-[90vh] overflow-y-auto rounded-t-3xl bg-[#F6F6F3] text-[#0A0A0A]"
            >
              {/* Drag Handle */}
              <div className="sticky top-0 pt-4 pb-2 flex justify-center bg-[#F6F6F3]">
                <div className="w-12 h-1 rounded-full bg-black/10" />
              </div>

              {/* Close Button - stays at modal edge */}
              <button onClick={closeModal} className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-[#EDEDEA] hover:bg-[#E0E0DC] z-10">
                <X size={20} />
              </button>

              {/* Modal Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: brandEase }}
                  className="px-6 md:px-12 pb-12 pt-2 max-w-3xl mx-auto relative"
                >
                  {/* Navigation Arrows - inside content container, top right aligned with content */}
                  {artefacts.length > 1 && (
                    <div className="absolute top-2 right-0 flex items-center gap-2">
                      <motion.button
                        onClick={() => {
                          if (currentIndex > 0) {
                            const prevIdx = currentIndex - 1;
                            setCurrentIndex(prevIdx);
                            setSelectedArtefact(artefacts[prevIdx]);
                          }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={currentIndex === 0}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                          currentIndex === 0
                            ? 'bg-[#EDEDEA]/50 text-black/20 cursor-not-allowed'
                            : 'bg-[#EDEDEA] hover:bg-[#FDDE0C] text-[#0A0A0A]'
                        }`}
                      >
                        <ChevronLeft size={20} />
                      </motion.button>

                      <motion.button
                        onClick={() => {
                          if (currentIndex < artefacts.length - 1) {
                            const nextIdx = currentIndex + 1;
                            setCurrentIndex(nextIdx);
                            setSelectedArtefact(artefacts[nextIdx]);
                          }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={currentIndex === artefacts.length - 1}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                          currentIndex === artefacts.length - 1
                            ? 'bg-[#EDEDEA]/50 text-black/20 cursor-not-allowed'
                            : 'bg-[#EDEDEA] hover:bg-[#FDDE0C] text-[#0A0A0A]'
                        }`}
                      >
                        <ChevronRight size={20} />
                      </motion.button>
                    </div>
                  )}

                  {/* Counter */}
                  {artefacts.length > 1 && (
                    <div className="text-xs font-bold text-[#939068] uppercase tracking-widest mb-4">
                      {currentIndex + 1} / {artefacts.length}
                    </div>
                  )}

                  <h3 className="text-3xl md:text-4xl font-serif mb-4 pr-28">{selectedArtefact.title}</h3>
                  {selectedArtefact.description && <p className={`text-lg leading-relaxed mb-8 ${tw.light.textMuted}`}>{selectedArtefact.description}</p>}
                  {selectedArtefact.image && (
                    <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-8">
                      <img src={selectedArtefact.image} alt={selectedArtefact.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  {selectedArtefact.details && <p className={`text-base leading-relaxed ${tw.light.textSecondary}`}>{selectedArtefact.details}</p>}
                  <motion.button
                    onClick={closeModal}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-8 inline-flex items-center gap-3 px-6 py-3 border border-black/10 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[#0A0A0A] hover:text-white hover:border-[#0A0A0A]"
                  >
                    Close
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
