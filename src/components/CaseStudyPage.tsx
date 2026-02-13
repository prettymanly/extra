import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {
  Navigation,
  CaseStudyHeader,
  HeroGallery,
  ProjectInfoSection,
  ArtefactsGrid,
  ArtefactsCarousel,
  ArtefactsGrouped,
  ImpactSection,
  QuotesSection,
  CreditsSection,
  Footer,
  ScrollToTop,
} from './storybook';
import { tw, brandEase } from '../styles/colors';

/**
 * CaseStudyPage - Composed from Storybook Components
 *
 * All styling comes from the design system via storybook components.
 * This file only handles data flow and composition.
 */

interface Metric { value: string; label: string; description: string; }
interface Quote { text: string; author?: string; }
interface Artefact { title: string; description?: string; image?: string; details?: string; }
interface ArtefactItem { title: string; description: string; }
interface ArtefactGroup {
  id: string;
  label: string;
  tagline: string;
  images: string[];
  narrative: string[];
  artefacts: ArtefactItem[];
}
interface RelatedStudy { title: string; image: string; href: string; }
interface Credit { role: string; name: string; }

interface CaseStudyPageProps {
  title: string;
  oneLiner: string;
  programme: string;
  industry: string;
  scope: string;
  story: string[];
  artefacts?: Artefact[];
  artefactGroups?: ArtefactGroup[];
  artefactsLayout?: 'grid' | 'carousel' | 'grouped';
  metrics: Metric[];
  quotes: Quote[];
  heroImages: string[];
  accentColor?: string;
  relatedStudies?: RelatedStudy[];
  credits?: Credit[];
}

export default function CaseStudyPage({
  title,
  oneLiner,
  programme,
  industry,
  scope,
  story,
  artefacts = [],
  artefactGroups = [],
  artefactsLayout = 'grid',
  metrics,
  quotes,
  heroImages,
  accentColor = '#FDDE0C',
  relatedStudies = [],
  credits = [],
}: CaseStudyPageProps) {
  return (
    <div className={`min-h-screen ${tw.light.bg} ${tw.light.text} ${tw.light.selection} overflow-x-hidden`}>
      <Navigation />

      <main>
        <CaseStudyHeader title={title} oneLiner={oneLiner} />

        <HeroGallery images={heroImages} title={title} accentColor={accentColor} />

        <ProjectInfoSection
          story={story}
          programme={programme}
          industry={industry}
          scope={scope}
        />

        {/* Artefacts */}
        {artefactsLayout === 'grouped' && artefactGroups.length > 0 ? (
          <ArtefactsGrouped
            groups={artefactGroups}
            headline="What We Built"
            subheadline="The artefacts weren't decoration. They were the mechanism."
          />
        ) : artefacts.length > 0 && (
          artefactsLayout === 'carousel' ? (
            <ArtefactsCarousel
              artefacts={artefacts}
              headline="What We Built"
              subheadline="The tools, experiences, and artefacts that made this programme work."
            />
          ) : (
            <ArtefactsGrid
              artefacts={artefacts}
              headline="What We Built"
              subheadline="The tools, experiences, and artefacts that made this programme work."
            />
          )
        )}

        {/* Impact Metrics */}
        {metrics.length > 0 && <ImpactSection metrics={metrics} />}

        {/* Quotes */}
        {quotes.length > 0 && <QuotesSection quotes={quotes} />}

        {/* Credits */}
        {credits.length > 0 && <CreditsSection credits={credits} />}

        {/* Related Case Studies */}
        {relatedStudies.length > 0 && (
          <section className="py-32 px-8 md:px-12 max-w-screen-2xl mx-auto overflow-hidden">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className={`text-4xl md:text-5xl font-serif mb-4 ${tw.light.text}`}>More Work</h2>
                <p className={`${tw.light.textMuted} uppercase text-[10px] font-bold tracking-widest`}>
                  See other projects
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedStudies.map((study) => (
                <motion.a
                  key={study.title}
                  href={study.href}
                  className="group cursor-pointer"
                  whileHover={{ y: -10 }}
                >
                  <div className="aspect-[4/5] overflow-hidden rounded-3xl mb-6 bg-[#EDEDEA] relative">
                    <img
                      src={study.image}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                      alt={study.title}
                    />
                    <div className="absolute inset-0 bg-[#0A0A0A]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-16 h-16 bg-[#0A0A0A] text-white rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500">
                        <ArrowRight size={24} />
                      </div>
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold text-center ${tw.light.text}`}>{study.title}</h3>
                </motion.a>
              ))}
            </div>
          </section>
        )}

        {/* Back Link */}
        <section className="px-8 md:px-12 pb-16 max-w-screen-2xl mx-auto">
          <a
            href="/case-studies"
            className={`inline-flex items-center gap-2 ${tw.light.textSecondary} hover:text-[#0A0A0A] font-medium transition-colors`}
          >
            <ArrowRight className="rotate-180" size={16} /> Back to all case studies
          </a>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
