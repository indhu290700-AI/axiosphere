import React, { useState } from 'react';
import { Globe, FlaskConical, CalendarCheck, Network, Eye, Laptop, ArrowRight, CheckCircle } from 'lucide-react';

export const ExcellenceComponent: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      icon: <Globe className="text-primary group-hover:text-white transition-soft" size={32} />,
      title: 'Global Knowledge Network',
      description: 'Connecting academic leaders from over 120 nations to share pioneering insights.',
      bgClass: 'bg-zinc-950/40',
      extendedDetails: 'We maintain ongoing research charters with 450+ member universities across European, Asian, and Pan-American research ecosystems.',
      metric: '450+ partner colleges'
    },
    {
      id: 2,
      icon: <FlaskConical className="text-primary group-hover:text-white transition-soft" size={32} />,
      title: 'Cross-Disciplinary Innovation',
      description: 'Breaking down research silos to foster breakthroughs at the intersection of fields.',
      bgClass: 'bg-zinc-950/40',
      extendedDetails: 'Combining advanced biosensing models with decentralized smart ledger systems to build a more authentic repository of scientific peer-reviews.',
      metric: 'Cross-Disciplinary journals'
    },
    {
      id: 3,
      icon: <CalendarCheck className="text-primary group-hover:text-white transition-soft" size={32} />,
      title: 'Future-Focused Conferences',
      description: 'Curating agendas that address the world\'s most pressing future challenges.',
      bgClass: 'bg-zinc-950/40',
      extendedDetails: 'Our 2026 scheduling targets carbon capture thermodynamics, quantum-secure state architectures, and circular micro-manufacturing models.',
      metric: 'Zero-Emission targets'
    },
    {
      id: 4,
      icon: <Network className="text-primary group-hover:text-white transition-soft" size={32} />,
      title: 'Impactful Networking',
      description: 'Structured environments designed for high-value professional connections.',
      bgClass: 'bg-zinc-950/40',
      extendedDetails: 'Interactive poster lobbies, roundtable micro-forums, and dedicated co-author registries designed to fast-track active joint publications.',
      metric: '12,000+ Citations initiated'
    },
    {
      id: 5,
      icon: <Eye className="text-primary group-hover:text-white transition-soft" size={32} />,
      title: 'Global Research Visibility',
      description: 'Amplifying your work through international publication and keynote opportunities.',
      bgClass: 'bg-zinc-950/40',
      extendedDetails: 'Our peer-reviewed conference transcripts are indexed directly by Scopus, Web of Science, and Springer-Nature databases.',
      metric: 'Fully Indexed proceedings'
    },
    {
      id: 6,
      icon: <Laptop className="text-primary group-hover:text-white transition-soft" size={32} />,
      title: 'Seamless Virtual Experience',
      description: 'Industry-leading hybrid and digital platforms for global accessibility.',
      bgClass: 'bg-zinc-950/40',
      extendedDetails: 'Broadcasting live feeds via redundant CDN networks, including interactive VR lecture galleries and real-time remote-controlled Q&A systems.',
      metric: '99.9% Broadcast uptime'
    }
  ];

  return (
    <section id="excellence" className="py-24 sm:py-32 bg-background relative cosmic-mesh border-t border-b border-outline">
      {/* Decorative vertical grid line */}
      <div className="absolute right-6 md:right-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-800/20 to-transparent pointer-events-none"></div>

      <div className="px-6 md:px-16 max-w-7xl mx-auto relative z-10 pr-6 md:pr-12">
        <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-16 text-center select-none uppercase">
          Institutional Excellence in Every Detail
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat) => (
            <div
              key={feat.id}
              onClick={() => setActiveFeature(activeFeature === feat.id ? null : feat.id)}
              className={`p-6 border border-outline bg-surface-container-low hover:bg-surface hover:border-primary group transition-all duration-300 rounded cursor-pointer relative shadow-sm hover:shadow-lg flex flex-col justify-between`}
            >
              <div>
                <div className="mb-6 inline-block p-3 bg-surface-container rounded group-hover:bg-primary transition-soft">
                  {feat.icon}
                </div>
                <h4 className="font-sans text-lg md:text-xl font-bold mb-4 text-white transition-soft">
                  {feat.title}
                </h4>
                <p className="font-sans text-sm text-zinc-400 group-hover:text-zinc-200 leading-relaxed mb-6 transition-soft">
                  {feat.description}
                </p>
              </div>

              {/* Collapsible interactive details */}
              <div className="mt-auto">
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeFeature === feat.id ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="font-sans text-xs text-zinc-400 border-t border-zinc-800 pt-4 leading-relaxed">
                    {feat.extendedDetails}
                  </p>
                  <div className="flex items-center gap-1.5 mt-3 text-primary font-mono text-[10px] font-bold uppercase transition-soft">
                    <CheckCircle size={11} /> {feat.metric}
                  </div>
                </div>

                <span className="font-mono text-[10px] font-bold tracking-wider uppercase text-primary transition-soft inline-flex items-center gap-1">
                  {activeFeature === feat.id ? 'Hide Specifics' : 'Explore Performance'} <ArrowRight size={10} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
