import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';

interface Artefact {
  title: string;
  description?: string;
  image?: string;
  details?: string; // Extended content for modal
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
  dark = true,
}: ArtefactsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedArtefact, setSelectedArtefact] = useState<Artefact | null>(null);

  const bgColor = dark ? 'bg-[#0A0A0A]' : 'bg-[#F5F5F5]';
  const cardBgColor = dark ? 'bg-[#1A1A1A]' : 'bg-white';
  const textColor = dark ? 'text-white' : 'text-black';
  const mutedColor = dark ? 'text-white/60' : 'text-black/60';

  const currentArtefact = artefacts[currentIndex];

  // Get next two artefacts for the stacked effect
  const nextIndex = (currentIndex + 1) % artefacts.length;
  const nextNextIndex = (currentIndex + 2) % artefacts.length;

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % artefacts.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + artefacts.length) % artefacts.length);
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

  return (
    <>
      <section className={`py-24 md:py-32 px-6 md:px-12 ${bgColor}`}>
        <div className="max-w-screen-2xl mx-auto">
          {/* Header - Outside the card */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-serif mb-6 ${textColor}`}>
              {headline}
            </h2>
            <p className={`max-w-xl mx-auto leading-relaxed text-sm ${mutedColor}`}>
              {subheadline}
            </p>
          </div>

          {/* Card Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`${cardBgColor} rounded-3xl p-8 md:p-12 lg:p-16 border ${dark ? 'border-white/10' : 'border-black/5'} shadow-2xl`}
          >
            {/* Artefact Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                {/* Title */}
                <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${textColor}`}>
                  {currentArtefact.title}
                </h3>

                {/* Description */}
                {currentArtefact.description && (
                  <p className={`text-base leading-relaxed mb-10 max-w-lg mx-auto ${mutedColor}`}>
                    {currentArtefact.description}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Stacked Images */}
            <div className="relative h-[280px] md:h-[350px] mb-12 flex items-center justify-center">
              {/* Background cards (stacked effect) */}
              {artefacts.length > 2 && artefacts[nextNextIndex]?.image && (
                <motion.div
                  className="absolute w-[280px] md:w-[380px] lg:w-[420px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
                  style={{
                    transform: 'translateX(40px) translateY(16px) rotate(6deg)',
                    zIndex: 1,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                >
                  <img
                    src={artefacts[nextNextIndex].image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 ${dark ? 'bg-black/40' : 'bg-white/40'}`} />
                </motion.div>
              )}

              {artefacts.length > 1 && artefacts[nextIndex]?.image && (
                <motion.div
                  className="absolute w-[300px] md:w-[400px] lg:w-[450px] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
                  style={{
                    transform: 'translateX(20px) translateY(8px) rotate(3deg)',
                    zIndex: 2,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                >
                  <img
                    src={artefacts[nextIndex].image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 ${dark ? 'bg-black/20' : 'bg-white/20'}`} />
                </motion.div>
              )}

              {/* Main image (front) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`image-${currentIndex}`}
                  className="relative w-[320px] md:w-[420px] lg:w-[480px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
                  style={{ zIndex: 3 }}
                  initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                  animate={{ opacity: 1, scale: 1, rotate: -2 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.02, rotate: 0 }}
                  onClick={() => openModal(currentArtefact)}
                >
                  {currentArtefact.image && (
                    <img
                      src={currentArtefact.image}
                      alt={currentArtefact.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                      <ArrowUpRight size={24} className="text-black" />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Explore Button - Centered */}
            <div className="text-center">
              <motion.button
                onClick={() => openModal(currentArtefact)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group inline-flex items-center gap-3 px-8 py-4 border rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  dark
                    ? 'border-white/20 hover:bg-white hover:text-black text-white'
                    : 'border-black/20 hover:bg-black hover:text-white text-black'
                }`}
              >
                Explore Artefacts
                <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
              </motion.button>
            </div>

            {/* Navigation - Below button */}
            {artefacts.length > 1 && (
              <div className="flex items-center justify-center gap-8 mt-10 pt-8 border-t border-white/10">
                {/* Prev Button */}
                <motion.button
                  onClick={goPrev}
                  whileHover={{ x: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-xs font-bold uppercase tracking-widest ${mutedColor} hover:${textColor} transition-colors`}
                >
                  ← Prev
                </motion.button>

                {/* Pagination Dots */}
                <div className="flex items-center gap-2">
                  {artefacts.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === currentIndex
                          ? dark ? 'bg-white w-6' : 'bg-black w-6'
                          : dark ? 'bg-white/30 hover:bg-white/50' : 'bg-black/30 hover:bg-black/50'
                      }`}
                    />
                  ))}
                </div>

                {/* Next Button */}
                <motion.button
                  onClick={goNext}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-xs font-bold uppercase tracking-widest ${mutedColor} hover:${textColor} transition-colors`}
                >
                  Next →
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Modal / Bottom Sheet */}
      <AnimatePresence>
        {modalOpen && selectedArtefact && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100%' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`fixed inset-x-0 bottom-0 z-50 max-h-[90vh] overflow-y-auto rounded-t-3xl ${
                dark ? 'bg-[#0A0A0A] text-white' : 'bg-white text-black'
              }`}
            >
              {/* Handle */}
              <div className="sticky top-0 pt-4 pb-2 flex justify-center">
                <div className={`w-12 h-1 rounded-full ${dark ? 'bg-white/20' : 'bg-black/20'}`} />
              </div>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  dark ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'
                }`}
              >
                <X size={20} />
              </button>

              <div className="px-6 md:px-12 pb-12 pt-4 max-w-3xl mx-auto">
                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-serif mb-4">
                  {selectedArtefact.title}
                </h3>

                {/* Description */}
                {selectedArtefact.description && (
                  <p className={`text-lg leading-relaxed mb-8 ${mutedColor}`}>
                    {selectedArtefact.description}
                  </p>
                )}

                {/* Image */}
                {selectedArtefact.image && (
                  <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-8">
                    <img
                      src={selectedArtefact.image}
                      alt={selectedArtefact.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Extended Details */}
                {selectedArtefact.details && (
                  <div className={`prose prose-lg max-w-none ${dark ? 'prose-invert' : ''}`}>
                    <p className={`text-base leading-relaxed ${mutedColor}`}>
                      {selectedArtefact.details}
                    </p>
                  </div>
                )}

                {/* Close Button */}
                <motion.button
                  onClick={closeModal}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-8 inline-flex items-center gap-3 px-6 py-3 border rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                    dark
                      ? 'border-white/20 hover:bg-white hover:text-black'
                      : 'border-black/20 hover:bg-black hover:text-white'
                  }`}
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
