import React from 'react';
import { tw, brandEase } from '../../styles/colors';
import MetricCard from './MetricCard';

/**
 * DESIGN SYSTEM: ImpactSection
 * - Layout: 160px left padding on large screens
 * - Horizontal scroll on mobile, grid on desktop
 * - Background: bgSecondary
 * - Uses MetricCard from storybook
 */

interface Metric {
  value: string;
  label: string;
  description: string;
}

interface ImpactSectionProps {
  metrics: Metric[];
  headline?: string;
}

export default function ImpactSection({
  metrics,
  headline = 'Impact',
}: ImpactSectionProps) {
  return (
    <section
      className={`py-32 overflow-x-auto ${tw.light.bgSecondary}`}
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <div className="pl-8 md:pl-12 lg:pl-40 pr-8">
        <h2 className={`text-4xl md:text-5xl font-serif mb-20 ${tw.light.text}`}>{headline}</h2>
        <div className="flex gap-4 min-w-max md:min-w-0 md:grid md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, idx) => (
            <div key={metric.label} className="w-[280px] md:w-auto flex-shrink-0 md:flex-shrink">
              <MetricCard
                value={metric.value}
                label={metric.label}
                description={metric.description}
                index={idx}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
