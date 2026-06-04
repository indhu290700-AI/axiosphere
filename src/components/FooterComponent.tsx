import React, { useState } from 'react';
import { Send, Check, Mail, Globe, Share2 } from 'lucide-react';
import { LogoComponent } from './LogoComponent';

interface FooterComponentProps {
  onJoinUsClick: () => void;
  onContactClick: () => void;
  onExploreClick: () => void;
  onAttendClick: () => void;
  onPolicyClick?: (section: 'privacy' | 'cancellation' | 'conduct') => void;
  onAboutUsClick?: () => void;
  theme?: 'dark' | 'light';
}

export const FooterComponent: React.FC<FooterComponentProps> = ({
  onJoinUsClick,
  onContactClick,
  onExploreClick,
  onAttendClick,
  onPolicyClick,
  onAboutUsClick,
  theme = 'dark',
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSuccess(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSuccess(false);
    }, 2500);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container text-on-background py-16 sm:py-20 border-t border-outline select-none cosmic-mesh">
      <div className="px-6 md:px-16 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Brand identity column */}
        <div className="max-w-md flex-1">
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 mb-6 cursor-pointer group select-none tracking-tighter"
          >
            <div className="relative w-11 h-11 flex items-center justify-center group-hover:scale-105 transition-all">
              <LogoComponent size={44} theme={theme} />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-sans text-2xl font-black text-white tracking-widest uppercase group-hover:text-primary transition-colors duration-200 leading-none">
                AXIOSPHERE
              </span>
              <span className="font-script text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors mt-1 whitespace-nowrap leading-none">
                Together <span className="text-primary font-bold">towards</span> future
              </span>
            </div>
          </div>

          <p className="font-sans text-sm text-secondary opacity-80 mb-4 leading-relaxed">
            Empowering the global research community through high-impact events, peer-reviewed academic validation, and rigorous collaboration frameworks.
          </p>
          <p className="font-sans text-xs text-secondary tracking-wide mb-6">
            Global Office: <a href="mailto:info@axiosphere.org" className="text-white hover:text-primary transition-soft underline">info@axiosphere.org</a>
          </p>
        </div>

        {/* Quick Menu / Navigation Columns */}
        <div className="grid grid-cols-2 gap-12 sm:gap-20">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs font-bold text-primary tracking-widest uppercase mb-1">
              Quick links
            </span>
            <button onClick={onAboutUsClick} className="text-left text-secondary hover:text-primary text-sm font-sans font-medium transition-colors cursor-pointer">
              About us
            </button>
            <button onClick={onContactClick} className="text-left text-secondary hover:text-primary text-sm font-sans font-medium transition-colors cursor-pointer">
              contact us
            </button>
          </div>

          <div className="flex flex-col gap-4 items-start">
            <span className="font-mono text-xs font-bold text-primary tracking-widest uppercase mb-1">
              LEGAL
            </span>
            <button
              onClick={() => onPolicyClick?.('cancellation')}
              className="text-[#9999a0] hover:text-primary text-sm font-sans font-medium transition-colors cursor-pointer text-left"
            >
              Policies of Axiosphere
            </button>
          </div>
        </div>

        {/* Newsletter submit form */}
        <div className="max-w-xs w-full">
          <span className="font-mono text-xs font-bold text-primary tracking-widest uppercase mb-4 block">
            INTEL BRIEFING
          </span>
          <p className="font-sans text-xs text-secondary opacity-80 leading-relaxed mb-4">
            Subscribe to receive direct bulletins and call-for-papers registrations for upcoming global symposiums.
          </p>

          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Your academic email"
              className="flex-1 bg-zinc-950 border border-zinc-800 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-primary font-sans placeholder-zinc-650"
            />
            <button
              type="submit"
              className="bg-primary text-white hover:bg-red-700 px-4 py-2.5 rounded transition-soft flex items-center justify-center active:scale-95 cursor-pointer"
            >
              {success ? <Check size={14} className="text-white" /> : <Send size={14} />}
            </button>
          </form>

          {success && (
            <span className="inline-block mt-2 font-sans text-[10px] text-emerald-400 font-bold animate-pulse">
              Subscribed successfully!
            </span>
          )}
        </div>
      </div>

      {/* Trust & Social links bottom bar */}
      <div className="px-6 md:px-16 max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-6">
          <button className="text-secondary hover:text-primary transition-soft cursor-pointer" aria-label="Share">
            <Share2 size={18} />
          </button>
          <button className="text-secondary hover:text-primary transition-soft cursor-pointer" aria-label="Public Directory">
            <Globe size={18} />
          </button>
          <button onClick={onContactClick} className="text-secondary hover:text-primary transition-soft cursor-pointer" aria-label="Email Enquiry">
            <Mail size={18} />
          </button>
        </div>

        <div className="bg-white/5 border border-white/10 px-4 py-2 rounded">
          <p className="font-mono text-[9px] text-white/50 tracking-wider">
            TRUSTED BY 500+ INSTITUTIONS WORLDWIDE
          </p>
        </div>
      </div>
    </footer>
  );
};
