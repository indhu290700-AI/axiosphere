import React, { useState, useEffect } from 'react';
import { HeaderComponent } from './components/HeaderComponent';
import { HeroComponent } from './components/HeroComponent';
import { AboutComponent } from './components/AboutComponent';
import { ConferenceComponent } from './components/ConferenceComponent';
import { ExcellenceComponent } from './components/ExcellenceComponent';
import { FooterComponent } from './components/FooterComponent';
import { PoliciesComponent } from './components/PoliciesComponent';
import { AboutUsPageComponent } from './components/AboutUsPageComponent';
import { JoinUsModal, ContactModal } from './components/Modals';
import { CONFERENCES } from './data';
import { Registration, ContactMessage, Membership } from './types';
import { Calendar, UserCheck, X, Check, Eye } from 'lucide-react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentView, setCurrentView] = useState<'home' | 'policies' | 'about-us'>('home');
  const [activePolicySub, setActivePolicySub] = useState<'privacy' | 'cancellation' | 'conduct'>('privacy');
  
  // Theme state
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const saved = localStorage.getItem('axiosphere_theme');
      return (saved === 'light' || saved === 'dark') ? saved : 'dark';
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('axiosphere_theme', theme);
    } catch (e) {
      // ignored
    }
    if (theme === 'light') {
      document.body.classList.add('light');
      document.documentElement.classList.add('light');
    } else {
      document.body.classList.remove('light');
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Storage keys
  const REG_KEY = 'axiosphere_registrations_v1';
  const MEM_KEY = 'axiosphere_memberships_v1';
  const MSG_KEY = 'axiosphere_messages_v1';

  // State with LocalStorage persistence
  const [registrations, setRegistrations] = useState<Registration[]>(() => {
    try {
      const saved = localStorage.getItem(REG_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [memberships, setMemberships] = useState<Membership[]>(() => {
    try {
      const saved = localStorage.getItem(MEM_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [messages, setMessages] = useState<ContactMessage[]>(() => {
    try {
      const saved = localStorage.getItem(MSG_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modal Triggers
  const [isJoinUsOpen, setIsJoinUsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isRegistrationsDrawerOpen, setIsRegistrationsDrawerOpen] = useState(false);

  // Sync state with localstorage
  useEffect(() => {
    localStorage.setItem(REG_KEY, JSON.stringify(registrations));
  }, [registrations]);

  useEffect(() => {
    localStorage.setItem(MEM_KEY, JSON.stringify(memberships));
  }, [memberships]);

  useEffect(() => {
    localStorage.setItem(MSG_KEY, JSON.stringify(messages));
  }, [messages]);

  // Handle Event submission
  const handleRegister = (newReg: Omit<Registration, 'id' | 'registeredAt' | 'status'>) => {
    const registration: Registration = {
      ...newReg,
      id: `reg-${Date.now()}`,
      status: 'Confirmed & Indexed',
      registeredAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    
    // Check if duplicate, if so update previous registration
    setRegistrations((prev) => {
      const filtered = prev.filter(r => r.conferenceId !== newReg.conferenceId || r.email !== newReg.email);
      return [registration, ...filtered];
    });
  };

  // Withdraw registration
  const handleWithdrawRegistration = (id: string) => {
    setRegistrations((prev) => prev.filter((r) => r.id !== id));
  };

  // Handle Membership
  const handleMembership = (newMem: Omit<Membership, 'id' | 'joinedAt'>) => {
    const membership: Membership = {
      ...newMem,
      id: `mem-${Date.now()}`,
      joinedAt: new Date().toLocaleDateString('en-US')
    };
    setMemberships((prev) => [membership, ...prev]);
  };

  // Handle Contact Message
  const handleContactMessage = (newMsg: Omit<ContactMessage, 'id' | 'submittedAt'>) => {
    const message: ContactMessage = {
      ...newMsg,
      id: `msg-${Date.now()}`,
      submittedAt: new Date().toLocaleDateString('en-US')
    };
    setMessages((prev) => [message, ...prev]);
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreClick = () => {
    setCurrentView('home');
    setTimeout(() => {
      handleScrollToSection('conferences');
    }, 100);
  };

  const handleAttendClick = () => {
    setCurrentView('home');
    setTimeout(() => {
      handleScrollToSection('conferences');
    }, 100);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-background font-sans antialiased text-on-background transition-colors duration-300">
      {/* Dynamic Main Header bar with view state integration */}
      <HeaderComponent
        onJoinUsClick={() => setIsJoinUsOpen(true)}
        onContactClick={() => setIsContactOpen(true)}
        onAttendClick={handleAttendClick}
        onExploreClick={handleExploreClick}
        currentView={currentView}
        onLogoClick={handleLogoClick}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onAboutUsClick={() => {
          setCurrentView('about-us');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {currentView === 'home' ? (
        <>
          {/* Hero Section containing search/filters */}
          <HeroComponent
            onAttendClick={(id) => {
              if (id) {
                handleScrollToSection(id);
              } else {
                handleScrollToSection('conferences');
              }
            }}
            onContactClick={() => setIsContactOpen(true)}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            totalConferences={CONFERENCES.length}
          />

          {/* About us / Editorial Manifesto Segment */}
          <AboutComponent onJoinUsClick={() => setIsJoinUsOpen(true)} />

          {/* Conferences explorer and detailed registers */}
          <ConferenceComponent
            conferences={CONFERENCES}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onRegisterSubmit={handleRegister}
            registrations={registrations}
          />

          {/* Bento Grid Structural excellence */}
          <ExcellenceComponent />
        </>
      ) : currentView === 'about-us' ? (
        <AboutUsPageComponent
          onBackToHome={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : (
        <PoliciesComponent
          activeSection={activePolicySub}
          onBackToHome={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* Beautiful High Contrast Foot section */}
      <FooterComponent
        onJoinUsClick={() => setIsJoinUsOpen(true)}
        onContactClick={() => setIsContactOpen(true)}
        onExploreClick={handleExploreClick}
        onAttendClick={handleAttendClick}
        onPolicyClick={(sub) => {
          setActivePolicySub(sub);
          setCurrentView('policies');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onAboutUsClick={() => {
          setCurrentView('about-us');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        theme={theme}
      />

      {/* Re-usable Modal overlays */}
      <JoinUsModal
        isOpen={isJoinUsOpen}
        onClose={() => setIsJoinUsOpen(false)}
        onSubmit={handleMembership}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        onSubmit={handleContactMessage}
      />

      {/* Floating interactive Widget: Registered Seats Drawer Trigger (placed at bottom right) */}
      {registrations.length > 0 && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => setIsRegistrationsDrawerOpen(true)}
            className="bg-white hover:bg-indigo-50 text-[#050508] p-4 rounded-full shadow-2xl flex items-center justify-center gap-2 transition-all active:scale-95 group relative cursor-pointer"
            aria-label="View Registrations"
          >
            <Calendar size={20} />
            <span className="font-sans text-xs font-bold leading-none bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center absolute -top-1.5 -right-1.5 border-2 border-white/20 animate-pulse">
              {registrations.length}
            </span>
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-sans text-xs font-semibold whitespace-nowrap">
              My Booked Seats
            </span>
          </button>
        </div>
      )}

      {/* Bottom Side Drawer: List of Registered conferences */}
      {isRegistrationsDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-[#050508]/60 backdrop-blur-sm"
            onClick={() => setIsRegistrationsDrawerOpen(false)}
          ></div>

          <div className="relative w-full max-w-md glass-panel-heavy h-full p-6 md:p-8 shadow-2xl z-50 overflow-y-auto flex flex-col">
            <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="text-primary" size={20} />
                <h4 className="font-sans text-base font-bold text-white">Registered Sessions</h4>
              </div>
              <button
                onClick={() => setIsRegistrationsDrawerOpen(false)}
                className="p-1 hover:bg-white/10 rounded-full cursor-pointer text-white"
              >
                <X size={18} />
              </button>
            </div>

            {/* List of user registrations and status tracker */}
            <div className="space-y-4 flex-1 animate-in fade-in slide-in-from-right duration-200">
              {registrations.map((reg) => (
                <div key={reg.id} className="p-4 bg-white/5 border border-white/10 rounded relative group">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h5 className="font-sans text-sm font-extrabold text-white">{reg.conferenceTitle}</h5>
                    <button
                      onClick={() => handleWithdrawRegistration(reg.id)}
                      className="text-white/50 hover:text-primary transition-soft p-0.5 rounded cursor-pointer"
                      title="Withdraw Registration"
                    >
                      <X size={14} />
                    </button>
                  </div>
                  <p className="font-mono text-[9px] text-primary font-bold uppercase tracking-wider mb-2 flex items-center gap-1">
                     <UserCheck size={10} className="text-primary" /> {reg.role}
                  </p>
                  <div className="flex flex-col gap-0.5 text-xs text-white/70 mb-3 border-t border-white/10 pt-2">
                    <span className="font-sans"><strong className="text-white/90 font-medium">Attendee:</strong> {reg.name}</span>
                    <span className="font-sans"><strong className="text-white/90 font-medium">Affiliation:</strong> {reg.institution}</span>
                    <span className="font-sans"><strong className="text-white/90 font-medium">Email:</strong> {reg.email}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-white/50 border-t border-white/10 pt-2">
                    <span className="font-mono text-[9px]">Registered on {reg.registeredAt}</span>
                    <span className="bg-emerald-500/10 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-500/20">
                      Confirmed Seat
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-4 border-t border-white/10 mt-6">
              <button
                onClick={() => setIsRegistrationsDrawerOpen(false)}
                className="bg-white text-black hover:bg-indigo-50 px-6 py-2.5 rounded font-sans text-xs font-semibold cursor-pointer hover:opacity-95 active:scale-95 transition-all text-center"
              >
                Close List
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
