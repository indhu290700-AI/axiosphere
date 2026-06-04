import React, { useState } from 'react';
import { ArrowUpRight, Flame, Plus, Check, Globe, Shield, Landmark, BookOpen } from 'lucide-react';

interface AboutComponentProps {
  onJoinUsClick: () => void;
}

export const AboutComponent: React.FC<AboutComponentProps> = ({ onJoinUsClick }) => {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formDesignation, setFormDesignation] = useState('');
  const [formOrg, setFormOrg] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formPhone || !formDesignation || !formOrg) {
      setFormError('Please fill in all required fields.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
  };

  return (
    <section id="about" className="py-24 sm:py-32 bg-surface/40 border-b border-outline-variant cosmic-mesh relative">
      {/* Subtle vertical layout grid divider line */}
      <div className="absolute left-6 md:left-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"></div>

      <div className="px-6 md:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10 pl-6 md:pl-12">
        {/* Left Column - Editorial description */}
        <div className="lg:col-span-7 flex flex-col items-start animate-in fade-in duration-500">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full mb-4">
            <Flame className="text-primary" size={14} />
            <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest">
              OUR CHARTER & MANDATE
            </span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2 leading-tight tracking-tighter">
            Uncover the Axiosphere Advantage
          </h2>

          <div className="font-sans text-xl md:text-2xl font-light italic text-zinc-300 tracking-wide border-l-2 border-primary pl-4 my-6 leading-relaxed">
            “The Sphere of Intelligent Minds”
          </div>

          {/* Interactive Advantages List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 w-full max-w-2xl">
            {[
              {
                icon: <Globe className="text-primary flex-shrink-0" size={18} />,
                title: "Global Scholarly Network",
                desc: "Connecting 15,000+ verified professors, corporate innovators, and researchers across 40+ nations."
              },
              {
                icon: <Shield className="text-primary flex-shrink-0" size={18} />,
                title: "Double-Blind Peer Review",
                desc: "Rigorous and bias-free selection processes managed by seasoned institutional domain editors."
              },
              {
                icon: <Landmark className="text-primary flex-shrink-0" size={18} />,
                title: "High-Impact Indexing",
                desc: "Guaranteed citations in leading academic registries to elevate scientific recognition."
              },
              {
                icon: <BookOpen className="text-primary flex-shrink-0" size={18} />,
                title: "Hybrid Co-creation Spaces",
                desc: "Virtual webinars paired with physical sandbox workshops to drive maximum worldwide impact."
              }
            ].map((advantage, idx) => (
              <div 
                key={idx} 
                className="p-5 border border-zinc-900 bg-zinc-950/40 rounded transition-all duration-300 hover:border-zinc-800 hover:bg-zinc-950/80 group flex flex-col justify-between"
              >
                <div>
                  <div className="mb-3 p-2 bg-zinc-900 rounded-sm w-fit group-hover:bg-primary/10 transition-colors">
                    {advantage.icon}
                  </div>
                  <h3 className="font-sans text-xs font-bold text-white uppercase tracking-wider mb-2">
                    {advantage.title}
                  </h3>
                  <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                    {advantage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Fully functional interactive Partnership form with clean inputs */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-surface-container-low border border-outline p-6 md:p-8 rounded-sm shadow-2xl relative">
            <h3 className="font-sans text-lg font-extrabold text-white uppercase tracking-tight mb-1">
              Partner Registration Form
            </h3>
            <p className="font-sans text-xs text-zinc-400 mb-6">
              Fill in your academic or professional information to initialize partnership procedures.
            </p>

            {formSubmitted ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                  <Check size={24} />
                </div>
                <p className="font-sans text-sm font-bold text-white">Proposal Submitted!</p>
                <p className="font-sans text-xs text-zinc-500 max-w-xs mt-2 text-center leading-relaxed">
                  Thank you, {formName}. Our core committee will examine your request from {formOrg} and execute a follow-up response code shortly.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormName('');
                    setFormEmail('');
                    setFormPhone('');
                    setFormDesignation('');
                    setFormOrg('');
                  }}
                  className="mt-6 font-sans text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white underline cursor-pointer"
                >
                  Submit Another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                {formError && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-300 text-xs rounded">
                    {formError}
                  </div>
                )}

                <div>
                  <label className="block font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Prof. Emily Watson"
                    className="w-full bg-zinc-950 border border-zinc-850 rounded p-2.5 text-xs text-white focus:outline-none focus:border-primary font-sans placeholder-zinc-700"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                    Email ID *
                  </label>
                  <input
                    type="email"
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="emily.watson@university.edu"
                    className="w-full bg-zinc-950 border border-zinc-850 rounded p-2.5 text-xs text-white focus:outline-none focus:border-primary font-sans placeholder-zinc-700"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="+1 (555) 732-9844"
                    className="w-full bg-zinc-950 border border-zinc-850 rounded p-2.5 text-xs text-white focus:outline-none focus:border-primary font-sans placeholder-zinc-700"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                      Designation *
                    </label>
                    <input
                      type="text"
                      required
                      value={formDesignation}
                      onChange={(e) => setFormDesignation(e.target.value)}
                      placeholder="e.g. Lead Chair"
                      className="w-full bg-zinc-950 border border-zinc-850 rounded p-2.5 text-xs text-white focus:outline-none focus:border-primary font-sans placeholder-zinc-700"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                      Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={formOrg}
                      onChange={(e) => setFormOrg(e.target.value)}
                      placeholder="e.g. Oxford University"
                      className="w-full bg-zinc-950 border border-zinc-850 rounded p-2.5 text-xs text-white focus:outline-none focus:border-primary font-sans placeholder-zinc-700"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-red-700 text-white py-3 rounded-sm font-sans text-xs font-bold uppercase tracking-widest transition-soft flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                >
                  Send Proposal <ArrowUpRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
