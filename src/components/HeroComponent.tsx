import React from 'react';
import { ArrowRight, Search, Calendar } from 'lucide-react';

interface HeroComponentProps {
  onAttendClick: (conferenceId?: string) => void;
  onContactClick: () => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  totalConferences: number;
}

export const HeroComponent: React.FC<HeroComponentProps> = ({
  onAttendClick,
  onContactClick,
  searchTerm,
  onSearchChange,
  totalConferences,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden select-none cosmic-mesh"
    >
      {/* Editorial network connectivity atmospheric overlay */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Network connectivity background representation"
          className="w-full h-full object-cover opacity-20 filter scale-105 pointer-events-none select-none transition-all duration-700"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBezvc5bzBkpNR98zssZwftAAaQz59YDV0dg4zM59rV6oD9CMfFn3yamH4euIs1lMJsi-YAiL1g124dc4lADdKcwX2Ub3Qb638d0UcZ1PpbT7LVa1imlEv1RAovHFH2k-kLdIJamWXfDZc_Rqa1dbFSDhrEZ3wNsAg2K06j-SRFiZAHqW8ya5ymZs0mYXWZgYSe_W6Ex9bdLxyfwVX4TcqvSTAbiMmyy1AbMIdN1vVjkBBhYxbPgPT697BgktSTQCZrVpHWCRf75d4X"
        />
        {/* Layered high contrast cosmic gradients matching Immersive UI */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40"></div>
      </div>

      <div className="relative z-10 w-full px-6 md:px-16 max-w-7xl mx-auto">
        {/* Decorative Grid Line left */}
        <div className="absolute left-6 md:left-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none"></div>

        <div className="pl-6 md:pl-12 max-w-4xl animate-in fade-in slide-in-from-bottom duration-500">
          {/* Decorative state marker */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-mono text-xs font-bold text-primary tracking-[0.2em] uppercase">
              AXIOSPHERE
            </span>
          </div>

          {/* Majestic TED-style display typography */}
          <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-none tracking-tighter mb-6 uppercase">
            Global Research & Innovation Platform
          </h1>

          <p className="font-sans text-xl md:text-2xl text-white font-medium leading-relaxed mb-6 max-w-3xl">
            Building the Future of Global Research, Innovation & Professional Collaboration
          </p>

          <p className="font-sans text-sm md:text-base text-zinc-400 leading-relaxed mb-10 max-w-2xl">
            Axiosphere organizes and powers international conferences, research collaborations, academic networking, and innovation-driven global events.
          </p>

          {/* Highlighted Conferences Grid Replacing Search Bar */}
          <div className="mb-10 max-w-3xl">
            <h3 className="font-sans text-xs font-bold text-zinc-400 uppercase tracking-[0.25em] mb-4 flex items-center gap-2">
              <span>Explore Our Conferences</span>
              <span className="h-px bg-zinc-850 flex-grow"></span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Conference 01 */}
              <div 
                onClick={() => onAttendClick('icamr-2026')}
                className="group relative p-5 bg-zinc-950/40 hover:bg-zinc-950/90 border border-zinc-900 hover:border-primary rounded transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-[9px] font-bold text-primary tracking-widest uppercase">CONFERENCE 01</span>
                    <span className="font-mono text-[9px] text-zinc-500">📅 July 24–25, 2026</span>
                  </div>
                  <h4 className="font-sans text-lg font-extrabold text-white group-hover:text-primary transition-colors uppercase">
                    ICAMR 2026
                  </h4>
                  <p className="font-sans text-xs text-zinc-400 mt-1 leading-relaxed">
                    International Conference on Advanced Multidisciplinary Research
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-zinc-500 group-hover:text-white font-mono text-[9px] font-bold uppercase tracking-wider transition-colors pt-3 border-t border-zinc-900/40">
                  Read Agenda & Register <ArrowRight size={10} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Conference 02 */}
              <div 
                onClick={() => onAttendClick('icsrd-2026')}
                className="group relative p-5 bg-zinc-950/40 hover:bg-zinc-950/90 border border-zinc-900 hover:border-primary rounded transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-[9px] font-bold text-primary tracking-widest uppercase">CONFERENCE 02</span>
                    <span className="font-mono text-[9px] text-zinc-500">📅 August 29–30, 2026</span>
                  </div>
                  <h4 className="font-sans text-lg font-extrabold text-white group-hover:text-primary transition-colors uppercase">
                    ICSRD 2026
                  </h4>
                  <p className="font-sans text-xs text-zinc-400 mt-1 leading-relaxed">
                    International Conference on Sustainable Research & Development
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-zinc-500 group-hover:text-white font-mono text-[9px] font-bold uppercase tracking-wider transition-colors pt-3 border-t border-zinc-900/40">
                  Read Agenda & Register <ArrowRight size={10} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* Primary CTA Row in TED style */}
          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={() => onAttendClick()}
              className="px-8 py-4 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-colors rounded shadow-lg flex items-center gap-2 group cursor-pointer"
            >
              Attend a Conference
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1.5 transition-transform duration-300"
              />
            </button>

            <button
              onClick={onContactClick}
              className="px-8 py-4 border border-zinc-700 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded text-white cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Atmospheric bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
};
