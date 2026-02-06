import React from 'react';

interface MetaItem {
  label: string;
  value: string;
}

interface ProjectMetaProps {
  items: MetaItem[];
  dark?: boolean;
}

export default function ProjectMeta({ items, dark = true }: ProjectMetaProps) {
  return (
    <div className="space-y-12">
      {items.map((item) => (
        <div key={item.label}>
          <h4 className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-4 ${dark ? 'text-white/40' : 'text-gray-400'}`}>
            {item.label}
          </h4>
          <p className={`text-sm font-medium ${dark ? 'text-white' : 'text-black'}`}>
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}
