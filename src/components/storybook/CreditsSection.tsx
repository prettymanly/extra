import React from 'react';
import { tw } from '../../styles/colors';

/**
 * DESIGN SYSTEM: CreditsSection
 * - Layout: 160px left padding on large screens
 * - Horizontal scroll on mobile, grid on desktop
 * - Border top separator
 */

interface Credit {
  role: string;
  name: string;
}

interface CreditsSectionProps {
  credits: Credit[];
  headline?: string;
}

export default function CreditsSection({
  credits,
  headline = 'Credits',
}: CreditsSectionProps) {
  return (
    <section
      className="py-24 overflow-x-auto border-t border-black/5"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <div className="pl-8 md:pl-12 lg:pl-40 pr-8">
        <h2 className={`text-2xl font-serif mb-12 ${tw.light.text}`}>{headline}</h2>
        <div className="flex gap-8 min-w-max md:min-w-0 md:grid md:grid-cols-2 lg:grid-cols-4">
          {credits.map((credit) => (
            <div key={credit.role} className="w-[180px] md:w-auto flex-shrink-0 md:flex-shrink">
              <h4 className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-2 ${tw.light.textMuted}`}>
                {credit.role}
              </h4>
              <p className={`font-medium ${tw.light.text}`}>{credit.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
