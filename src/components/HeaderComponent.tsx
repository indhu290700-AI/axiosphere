import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { LogoComponent } from './LogoComponent';

interface HeaderComponentProps {
  onJoinUsClick: () => void;
  onContactClick: () => void;
  onAttendClick: () => void;
  onExploreClick: () => void;
  currentView?: 'home' | 'policies' | 'about-us';
  onLogoClick?: () => void;
  onAboutUsClick?: () => void;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
}

export const HeaderComponent: React.FC<HeaderComponentProps> = ({
  onJoinUsClick,
  onContactClick,
  onAttendClick,
  onExploreClick,
  currentView = 'home',
  onLogoClick,
  onAboutUsClick,
  theme = 'dark',
  onToggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentView !== 'home') {
        return; // Skip active track calculations on non-home portals
      }

      // Simple active link tracker based on scroll
      const sections = ['home', 'about', 'conferences', 'excellence'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const handleLogoAction = () => {
    if (onLogoAction) {
      onLogoAction();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const onLogoAction = onLogoClick;

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface/90 backdrop-blur-md border-b border-outline-variant shadow-sm h-16'
          : 'bg-transparent h-20'
      }`}
    >
      <nav className="flex justify-between items-center w-full px-6 md:px-16 max-w-7xl mx-auto h-full">
        {/* Logo & Branding */}
        <div
          onClick={handleLogoAction}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          {/* Engineered premium logo emblem with precise vector rendering */}
          <div className="relative w-10 h-10 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
            <LogoComponent size={40} theme={theme} />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-sans text-xl font-extrabold tracking-tight text-white group-hover:text-primary transition-soft leading-none">
              AXIOSPHERE
            </span>
            <span className="font-script text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors mt-0.5 leading-none">
              Together <span className="text-primary font-bold">towards</span> future
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={onAboutUsClick}
            className={`font-sans text-xs font-bold uppercase tracking-wider transition-soft py-2 border-b-2 cursor-pointer ${
              currentView === 'about-us'
                ? 'text-primary border-primary'
                : 'text-zinc-400 border-transparent hover:text-white'
            }`}
          >
            About Us
          </button>
          <button
            onClick={onAttendClick}
            className={`font-sans text-xs font-bold uppercase tracking-wider transition-soft py-2 border-b-2 cursor-pointer ${
              currentView === 'home' && activeSection === 'excellence'
                ? 'text-primary border-primary'
                : 'text-zinc-400 border-transparent hover:text-white'
            }`}
          >
            Attend a Conference
          </button>
          <button
            onClick={onContactClick}
            className="font-sans text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-soft py-2 cursor-pointer"
          >
            Contact Us
          </button>
          <button
            onClick={onJoinUsClick}
            className="bg-primary hover:bg-red-700 text-white px-5 py-2.5 rounded-sm font-sans text-xs font-bold uppercase tracking-widest active:scale-95 transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
          >
            Join Us <ArrowRight size={14} />
          </button>
          <button
            onClick={onToggleTheme}
            className="p-2 border border-white/10 hover:border-white/20 hover:bg-white/5 rounded-full text-zinc-400 hover:text-white transition-soft cursor-pointer flex items-center justify-center"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-on-surface hover:text-primary transition-soft p-1 cursor-pointer"
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile drawer backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 bg-on-tertiary-fixed/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-16 right-0 bottom-0 w-4/5 max-w-sm glass-panel-heavy border-l border-white/10 z-50 p-6 shadow-2xl md:hidden transition-transform duration-300 transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6 mt-4">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onAboutUsClick?.();
            }}
            className="text-left font-sans text-lg font-bold text-white hover:text-primary transition-soft py-2 border-b border-white/5"
          >
            About Us
          </button>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onAttendClick();
            }}
            className="text-left font-sans text-lg font-bold text-white hover:text-primary transition-soft py-2 border-b border-white/5"
          >
            Attend a Conference
          </button>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onContactClick();
            }}
            className="text-left font-sans text-lg font-bold text-white hover:text-primary transition-soft py-2 border-b border-white/5"
          >
            Contact Us
          </button>
          <button
            onClick={() => {
              onToggleTheme?.();
            }}
            className="flex items-center gap-3 font-sans text-lg font-bold text-white hover:text-primary transition-soft py-2 border-b border-white/5 text-left cursor-pointer"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            <span>{theme === 'light' ? 'Dark Theme' : 'Light Theme'}</span>
          </button>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onJoinUsClick();
            }}
            className="w-full bg-primary text-white hover:bg-red-700 py-3 rounded-sm font-sans text-base font-bold tracking-widest hover:opacity-95 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 mt-4"
          >
            Join Membership <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};
