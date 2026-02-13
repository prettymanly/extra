import React from 'react';
import { motion } from 'framer-motion';
import { tw } from '../../styles/colors';

interface Artefact {
  title: string;
  description?: string;
}

interface ArtefactsGridProps {
  artefacts: Artefact[];
  headline?: string;
  subheadline?: string;
  dark?: boolean;
}

export default function ArtefactsGrid({
  artefacts,
  headline = "What We Built",
  subheadline = "The tools, experiences, and artefacts that made this programme work.",
}: ArtefactsGridProps) {
  return (
    <section className={`py-24 md:py-32 px-6 md:px-12 ${tw.light.bgSecondary} ${tw.light.text}`}>
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">{headline}</h2>
          <p className={`max-w-xl mx-auto leading-relaxed text-sm ${tw.light.textMuted}`}>
            {subheadline}
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artefacts.map((artefact, idx) => (
          <motion.div
            key={artefact.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl transition-colors bg-white hover:bg-[#EDEDEA] border border-black/5"
          >
            <h3 className="text-lg font-bold mb-2">{artefact.title}</h3>
            {artefact.description && (
              <p className={`text-sm ${tw.light.textMuted}`}>{artefact.description}</p>
            )}
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}
