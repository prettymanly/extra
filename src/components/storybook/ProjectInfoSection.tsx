import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface ProjectInfoSectionProps {
  story: string[];
  programme: string;
  industry: string;
  scope: string;
  dark?: boolean;
}

/**
 * ProjectInfoSection - Collins-style 2-column layout
 *
 * Features:
 * - Left column: Project meta (Programme, Industry, Scope)
 * - Right column: Lead paragraph + expandable full story
 * - Story text fades out with gradient to hint at more content
 */
export default function ProjectInfoSection({
  story,
  programme,
  industry,
  scope,
  dark = true,
}: ProjectInfoSectionProps) {
  const [storyExpanded, setStoryExpanded] = useState(false);

  const textColor = dark ? 'text-white' : 'text-black';
  const mutedColor = dark ? 'text-white/60' : 'text-black/60';
  const labelColor = dark ? 'text-white/40' : 'text-black/40';

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-40">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Left Column: Project Meta */}
          <div className="md:col-span-3 space-y-8">
            <div>
              <h4 className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-2 ${labelColor}`}>
                Programme
              </h4>
              <p className={`text-sm font-medium ${textColor}`}>{programme}</p>
            </div>
            <div>
              <h4 className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-2 ${labelColor}`}>
                Industry
              </h4>
              <p className={`text-sm font-medium ${textColor}`}>{industry}</p>
            </div>
            <div>
              <h4 className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-2 ${labelColor}`}>
                Scope
              </h4>
              <p className={`text-sm font-medium ${textColor}`}>{scope}</p>
            </div>
          </div>

          {/* Right Column: Story */}
          <div className="md:col-span-9">
            {/* Lead Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <p className={`text-2xl md:text-3xl lg:text-4xl font-serif leading-tight italic ${dark ? 'text-white/90' : 'text-black/90'}`}>
                {story[0]}
                {!storyExpanded && story.length > 1 && (
                  <span className={mutedColor}> {story[1]?.substring(0, 60)}...</span>
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
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="space-y-6 mb-8">
                    {story.slice(1).map((paragraph, idx) => (
                      <motion.p
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className={`text-lg leading-relaxed ${mutedColor.replace('/60', '/70')}`}
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
                className={`group inline-flex items-center gap-3 px-6 py-3 border ${dark ? 'border-white/20 hover:bg-white hover:text-black' : 'border-black/20 hover:bg-black hover:text-white'} rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${textColor}`}
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
