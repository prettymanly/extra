import React from 'react';

interface Credit {
  role: string;
  name: string;
}

interface CreditsSectionProps {
  credits: Credit[];
  headline?: string;
  dark?: boolean;
}

/**
 * CreditsSection - Project credits display with 160px left padding
 *
 * Features:
 * - 160px left padding on large screens
 * - Horizontal scroll on mobile
 * - Grid layout on desktop
 * - Border top separator
 */
export default function CreditsSection({
  credits,
  headline = 'Credits',
  dark = true,
}: CreditsSectionProps) {
  const textColor = dark ? 'text-white' : 'text-black';
  const labelColor = dark ? 'text-white/40' : 'text-black/40';
  const borderColor = dark ? 'border-white/10' : 'border-black/10';

  return (
    <section
      className={`py-24 overflow-x-auto border-t ${borderColor}`}
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <div className="pl-6 md:pl-12 lg:pl-40 pr-6">
        <h2 className={`text-2xl font-serif mb-12 ${textColor}`}>{headline}</h2>
        <div className="flex gap-8 min-w-max md:min-w-0 md:grid md:grid-cols-2 lg:grid-cols-4">
          {credits.map((credit) => (
            <div key={credit.role} className="w-[180px] md:w-auto flex-shrink-0 md:flex-shrink">
              <h4 className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-2 ${labelColor}`}>
                {credit.role}
              </h4>
              <p className={`font-medium ${textColor}`}>{credit.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
