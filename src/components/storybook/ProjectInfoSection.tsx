import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { tw, brandEase } from '../../styles/colors';

/**
 * DESIGN SYSTEM: ProjectInfoSection
 * - Layout: 3/9 grid
 * - Left: Project meta (Programme, Industry, Scope)
 * - Right: Lead paragraph + expandable story
 * - Button: outline → filled olive on hover
 */

interface ProjectInfoSectionProps {
  story: string[];
  programme: string;
  industry: string;
  scope: string;
}

export default function ProjectInfoSection({
  story,
  programme,
  industry,
  scope,
}: ProjectInfoSectionProps) {
  const [storyExpanded, setStoryExpanded] = useState(false);

  return (
    <section className="py-24 md:py-32 px-8 md:px-12 lg:px-40">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Left Column: Project Meta */}
          <div className="md:col-span-3 space-y-8">
            <div>
              <h4 className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-2 ${tw.light.textMuted}`}>
                Programme
              </h4>
              <p className={`text-sm font-medium ${tw.light.text}`}>{programme}</p>
            </div>
            <div>
              <h4 className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-2 ${tw.light.textMuted}`}>
                Industry
              </h4>
              <p className={`text-sm font-medium ${tw.light.text}`}>{industry}</p>
            </div>
            <div>
              <h4 className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-2 ${tw.light.textMuted}`}>
                Scope
              </h4>
              <p className={`text-sm font-medium ${tw.light.text}`}>{scope}</p>
            </div>
          </div>

          {/* Right Column: Story */}
          <div className="md:col-span-9">
            {/* Lead Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: brandEase }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <p className={`text-2xl md:text-3xl lg:text-4xl font-serif leading-tight italic ${tw.light.text}`}>
                {story[0]}
                {!storyExpanded && story.length > 1 && (
                  <span className={tw.light.textMuted}> {story[1]?.substring(0, 60)}...</span>
                )}
              </p>
            </motion.div>

            {/* Expandable Story Content */}
            <AnimatePresence>
              {storyExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.6, ease: brandEase }}
                  className="overflow-hidden"
                >
                  <div className="space-y-6 mb-8">
                    {story.slice(1).map((paragraph, idx) => (
                      <motion.p
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.5, ease: brandEase }}
                        className={`text-lg leading-relaxed ${tw.light.textSecondary}`}
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Read Full Story Button */}
            {story.length > 1 && (
              <motion.button
                onClick={() => setStoryExpanded(!storyExpanded)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 px-6 py-3 border border-black/10 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#686344] hover:text-white hover:border-[#686344] transition-all duration-300"
              >
                {storyExpanded ? (
                  <>
                    Close story <Minus size={14} />
                  </>
                ) : (
                  <>
                    Read the full story <Plus size={14} className="group-hover:rotate-90 transition-transform duration-300" />
                  </>
                )}
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
