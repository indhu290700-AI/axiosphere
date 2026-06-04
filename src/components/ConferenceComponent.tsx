import React, { useState } from 'react';
import { Conference, Registration } from '../types';
import { Calendar as CalendarIcon, Filter, MapPin, User, Search, Clock, Award, X, FileText, ArrowRight, Check } from 'lucide-react';

interface ConferenceComponentProps {
  conferences: Conference[];
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onRegisterSubmit: (reg: Omit<Registration, 'id' | 'registeredAt' | 'status'>) => void;
  registrations: Registration[];
}

export const ConferenceComponent: React.FC<ConferenceComponentProps> = ({
  conferences,
  searchTerm,
  onSearchChange,
  onRegisterSubmit,
  registrations,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedConference, setSelectedConference] = useState<Conference | null>(null);
  const [isRegistering, setIsRegistering] = useState<boolean>(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);

  // Form states
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regInstitution, setRegInstitution] = useState('');
  const [regRole, setRegRole] = useState('Delegated Researcher');
  const [formError, setFormError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Categories list
  const categories = ['All', 'Multidisciplinary', 'Sustainability', 'Biotechnology', 'Information Technology'];

  // Filter conferences by search term and selected category
  const filteredConferences = conferences.filter((conf) => {
    const isCategoryMatch = selectedCategory === 'All' || conf.category === selectedCategory;
    const isSearchMatch =
      conf.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conf.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conf.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conf.speakers.some((sp) => sp.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      conf.schedule.some((sc) => sc.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return isCategoryMatch && isSearchMatch;
  });

  const handleOpenRegister = (conf: Conference) => {
    setSelectedConference(conf);
    setIsRegistering(true);
    setFormError('');
    setSuccessMsg('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regName.trim() || !regEmail.trim() || !regInstitution.trim()) {
      setFormError('Please fill out all fields completely.');
      return;
    }

    if (!selectedConference) return;

    onRegisterSubmit({
      conferenceId: selectedConference.id,
      conferenceTitle: selectedConference.title,
      name: regName,
      email: regEmail,
      institution: regInstitution,
      role: regRole,
    });

    setSuccessMsg('Your registration has been successfully verified and added to local ledger!');
    setFormError('');

    // Clear form after a short delay
    setTimeout(() => {
      setRegName('');
      setRegEmail('');
      setRegInstitution('');
      setRegRole('Delegated Researcher');
      setIsRegistering(false);
      setSelectedConference(null);
      setSuccessMsg('');
    }, 2500);
  };

  const checkIsRegistered = (confId: string) => {
    return registrations.some((reg) => reg.conferenceId === confId);
  };

  return (
    <section id="conferences" className="py-24 sm:py-32 bg-surface-dim border-b border-outline">
      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-xs font-bold text-primary tracking-[4px] uppercase block mb-3">
            UPCOMING AGENDA
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase">Explore Our Conferences</h2>
        </div>

        {/* Conference List rendering - Editorial Structure */}
        {filteredConferences.length > 0 ? (
          <div className="divide-y divide-zinc-900">
            {filteredConferences.map((conf) => (
              <div
                key={conf.id}
                id={conf.id}
                className="group flex flex-col lg:flex-row justify-between items-start lg:items-center py-8 first:pt-0 last:pb-0 hover:bg-zinc-950/40 border-b border-zinc-900/10 transition-all px-2 rounded-sm scroll-mt-24"
              >
                <div 
                  onClick={() => setSelectedConference(conf)}
                  className="flex flex-col md:flex-row items-start gap-6 lg:gap-12 w-full cursor-pointer pr-4"
                >
                  {/* Date Column with Red marker */}
                  <div className="w-full md:w-48 flex-shrink-0">
                    <span className="font-mono text-xs font-bold text-zinc-400 tracking-widest block mb-1.5 uppercase">{conf.date}</span>
                    <div className="h-1 w-12 bg-primary group-hover:w-24 transition-all duration-300"></div>
                  </div>

                  {/* Body Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-sans text-xl md:text-2xl font-extrabold text-white group-hover:text-primary transition-soft">
                        {conf.title}
                      </h3>
                      <span className="bg-zinc-900 text-zinc-400 text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded tracking-wider">
                        {conf.category}
                      </span>
                      {checkIsRegistered(conf.id) && (
                        <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2.5 py-0.5 rounded flex items-center gap-1">
                          <Check size={10} /> Registered
                        </span>
                      )}
                    </div>
                    <p className="font-sans text-sm md:text-base text-zinc-300 font-semibold mb-2">{conf.subtitle}</p>
                    <p className="font-sans text-xs md:text-sm text-zinc-400 leading-relaxed max-w-3xl line-clamp-2">
                      {conf.description}
                    </p>
                  </div>
                </div>

                {/* View Details/Action row in TED button format */}
                <div className="mt-6 lg:mt-0 flex-shrink-0 w-full lg:w-auto flex items-center gap-3 justify-end">
                  <button
                    onClick={() => setSelectedConference(conf)}
                    className="border border-zinc-800 text-white hover:bg-white hover:text-black px-6 py-2.5 rounded font-sans text-xs font-bold uppercase tracking-widest transition-all cursor-pointer"
                  >
                    View Agenda
                  </button>
                  <button
                    onClick={() => handleOpenRegister(conf)}
                    className="bg-primary hover:bg-red-700 text-white px-6 py-2.5 rounded font-sans text-xs font-bold uppercase tracking-widest transition-soft cursor-pointer active:scale-95"
                  >
                    {checkIsRegistered(conf.id) ? 'Book Again' : 'Join Session'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center border border-dashed border-zinc-800 bg-zinc-950/40 rounded">
            <Filter size={36} className="mx-auto text-zinc-600 mb-4" />
            <p className="font-sans text-lg font-bold text-white">No conferences matched your filters</p>
            <p className="font-sans text-sm text-zinc-500 mt-1">Try resetting the keyword search or selecting another category.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                onSearchChange('');
              }}
              className="mt-4 bg-primary text-white px-6 py-2.5 rounded font-sans text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-soft cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Conference Detailed Agenda Drawer Overlay */}
      {selectedConference && !isRegistering && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-[#050508]/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedConference(null)}
          ></div>

          {/* Drawer Body container */}
          <div className="relative w-full max-w-2xl glass-panel-heavy h-full overflow-y-auto p-6 md:p-10 shadow-2xl flex flex-col z-50">
            <div className="flex justify-between items-start border-b border-white/10 pb-6 mb-6">
              <div>
                <span className="font-mono text-xs font-bold text-primary block mb-1">{selectedConference.date}</span>
                <span className="font-mono text-[10px] text-white/50 flex items-center gap-1 mb-2">
                  <MapPin size={11} /> {selectedConference.location}
                </span>
                <h3 className="font-sans text-2xl md:text-3xl font-extrabold text-white">
                  {selectedConference.subtitle} ({selectedConference.title})
                </h3>
              </div>
              <button
                onClick={() => setSelectedConference(null)}
                className="p-1.5 hover:bg-white/10 rounded-full transition-soft text-white cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Featured Image representation */}
            <div className="w-full h-48 md:h-64 rounded bg-white/5 border border-white/10 overflow-hidden mb-6 flex-shrink-0">
              <img
                src={selectedConference.featuredImage}
                alt={selectedConference.title}
                className="w-full h-full object-cover select-none pointer-events-none filter brightness-75"
              />
            </div>

            {/* Long details */}
            <div className="flex-1 mb-8">
              <div className="flex items-center gap-2 mb-4 border-b border-outline-variant/30 pb-2">
                <FileText size={16} className="text-primary" />
                <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-on-surface">Concept Note</h4>
              </div>
              <p className="font-sans text-sm text-secondary leading-relaxed mb-6">
                {selectedConference.details}
              </p>

              {/* Key Speakers */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                  <Award size={16} className="text-primary" />
                  <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-white">Keynote Speakers</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedConference.speakers.map((sp, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded">
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-white/10">
                        <img src={sp.avatar} alt={sp.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-sans text-sm font-bold text-white">{sp.name}</p>
                        <p className="font-sans text-[11px] text-white/50">{sp.institution}</p>
                        <p className="font-mono text-[9px] text-primary mt-0.5">{sp.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Daily Schedule block */}
              <div>
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                  <Clock size={16} className="text-primary" />
                  <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-white">Session Schedule</h4>
                </div>
                <div className="space-y-4">
                   {selectedConference.schedule.map((sc, idx) => (
                    <div key={idx} className="flex gap-4 p-3 bg-white/5 border border-white/10 rounded">
                      <span className="font-mono text-[10px] md:text-xs font-bold text-primary whitespace-nowrap mt-0.5">
                        {sc.time}
                      </span>
                      <div>
                        <p className="font-sans text-sm font-bold text-white">{sc.title}</p>
                        <p className="font-sans text-xs text-white/60 mt-1">Lead: {sc.speaker}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions of Drawer */}
            <div className="flex gap-3 justify-end border-t border-white/10 pt-6 mt-auto">
              <button
                onClick={() => setSelectedConference(null)}
                className="px-6 py-2.5 border border-white/10 rounded font-sans text-xs font-semibold cursor-pointer text-white hover:bg-white/5"
              >
                Close List
              </button>
              <button
                onClick={() => setIsRegistering(true)}
                className="bg-white text-black hover:bg-indigo-50 px-8 py-2.5 rounded font-sans text-xs font-bold uppercase tracking-widest transition-soft flex items-center gap-2 cursor-pointer active:scale-95"
              >
                {checkIsRegistered(selectedConference.id) ? 'Modify Registration' : 'Register Seat'} <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Conference Registration Modal Overlay */}
      {selectedConference && isRegistering && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={() => {
              setIsRegistering(false);
              setSelectedConference(null);
            }}
          ></div>

          <div className="relative bg-zinc-950/95 backdrop-blur-xl max-w-lg w-full rounded border border-zinc-800 p-6 md:p-8 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-start border-b border-zinc-850 pb-4 mb-4">
              <div>
                <span className="font-mono text-[9px] font-bold text-primary tracking-widest uppercase">REGISTRATION PROTOCOL</span>
                <h3 className="font-sans text-xl font-extrabold text-white mt-1">
                  Book Seat for {selectedConference.title}
                </h3>
              </div>
              <button
                onClick={() => {
                  setIsRegistering(false);
                  setSelectedConference(null);
                }}
                className="p-1.5 hover:bg-zinc-900 rounded-full cursor-pointer text-white"
              >
                <X size={18} />
              </button>
            </div>

            {successMsg ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                  <Check size={24} />
                </div>
                <p className="font-sans text-base font-bold text-white">Registration Successful!</p>
                <p className="font-sans text-sm text-zinc-400 max-w-sm mt-2 text-center">{successMsg}</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                {formError && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-300 text-xs rounded">
                    {formError}
                  </div>
                )}

                <div>
                  <label className="block font-mono text-[10px] font-bold text-zinc-400 uppercase mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    placeholder="e.g. Prof. Emily Watson"
                    className="w-full bg-zinc-900/60 border border-zinc-800 rounded p-2.5 text-sm text-white focus:outline-none focus:border-primary font-sans placeholder-zinc-600"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] font-bold text-zinc-400 uppercase mb-1">
                    Academic/Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    placeholder="e.g. emily.watson@university.edu"
                    className="w-full bg-zinc-900/60 border border-zinc-800 rounded p-2.5 text-sm text-white focus:outline-none focus:border-primary font-sans placeholder-zinc-600"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] font-bold text-zinc-400 uppercase mb-1">
                    Affiliation Institution / Enterprise *
                  </label>
                  <input
                    type="text"
                    required
                    value={regInstitution}
                    onChange={(e) => setRegInstitution(e.target.value)}
                    placeholder="e.g. Oxford Climate Institute, UK"
                    className="w-full bg-zinc-900/60 border border-zinc-800 rounded p-2.5 text-sm text-white focus:outline-none focus:border-primary font-sans placeholder-zinc-600"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] font-bold text-zinc-400 uppercase mb-1">
                    Participating Capacity / Role *
                  </label>
                  <select
                    value={regRole}
                    onChange={(e) => setRegRole(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded p-2.5 text-sm text-white focus:outline-none focus:border-primary font-sans cursor-pointer"
                  >
                    <option value="Delegated Researcher">Delegated Researcher / Presenter</option>
                    <option value="Academic Listener">Academic Listener / Attendee</option>
                    <option value="Policy Architect">Political / Policy Architect</option>
                    <option value="Industry Representative">Private Clean-Tech Representative</option>
                  </select>
                </div>

                <div className="flex gap-3 justify-end pt-4 border-t border-zinc-900">
                  <button
                    type="button"
                    onClick={() => setIsRegistering(false)}
                    className="px-5 py-2.5 border border-zinc-800 rounded font-sans text-xs font-semibold text-zinc-300 hover:bg-zinc-900 cursor-pointer"
                  >
                    Back to Agenda
                  </button>
                  <button
                    type="submit"
                    className="bg-primary hover:bg-red-700 text-white px-6 py-2.5 rounded font-sans text-xs font-bold uppercase tracking-widest transition-soft flex items-center gap-1.5 cursor-pointer"
                  >
                    Confirm Registration <Check size={14} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Immersive Calendar Modal */}
      {isCalendarOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={() => setIsCalendarOpen(false)}
          ></div>

          <div className="relative bg-zinc-950/95 backdrop-blur-xl max-w-2xl w-full rounded border border-zinc-800 p-6 md:p-8 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-start border-b border-zinc-855 pb-4 mb-4">
              <div>
                <span className="font-mono text-[9px] font-bold text-primary tracking-widest uppercase">Axiosphere Chrono-Map</span>
                <h3 className="font-sans text-xl font-extrabold text-white mt-1">
                  2026 Academic Calendar
                </h3>
              </div>
              <button
                onClick={() => setIsCalendarOpen(false)}
                className="p-1.5 hover:bg-zinc-900 rounded-full cursor-pointer text-white"
              >
                <X size={18} />
              </button>
            </div>

            {/* Grid display of all conferences */}
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              {conferences.map((conf) => (
                <div
                  key={conf.id}
                  onClick={() => {
                    setIsCalendarOpen(false);
                    setSelectedConference(conf);
                  }}
                  className="flex gap-4 p-4 border border-zinc-900 hover:border-primary rounded bg-zinc-950/60 hover:bg-zinc-950 transition-soft cursor-pointer text-left"
                >
                  <div className="flex-shrink-0 w-24 bg-zinc-900 rounded flex flex-col items-center justify-center p-2 text-center">
                    <span className="font-mono text-[10px] font-bold text-primary uppercase">
                      {conf.date.split(' ')[0]}
                    </span>
                    <span className="font-sans text-lg font-bold text-white">
                      {conf.date.includes('–') ? conf.date.split(' ')[1]?.replace(',','') : conf.date.split(' ')[1]?.split('-')[0]?.replace(',','')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-white group-hover:text-primary transition-soft">{conf.subtitle}</h4>
                    <p className="font-mono text-[10px] text-zinc-500 mt-1 flex items-center gap-1">
                      <MapPin size={10} /> {conf.location}
                    </p>
                    <span className="inline-block bg-zinc-900 text-zinc-400 text-[9px] uppercase font-mono font-bold px-1.5 py-0.5 rounded tracking-wider mt-2">
                      {conf.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-4 border-t border-zinc-900 mt-4">
              <button
                onClick={() => setIsCalendarOpen(false)}
                className="bg-white text-black hover:bg-zinc-200 px-6 py-2.5 rounded font-sans text-xs font-semibold cursor-pointer active:scale-95"
              >
                Close Calendar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
