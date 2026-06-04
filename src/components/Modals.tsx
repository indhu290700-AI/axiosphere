import React, { useState } from 'react';
import { X, Check, Mail, Send, Award, Users, ShieldAlert } from 'lucide-react';
import { Membership, ContactMessage } from '../types';

interface JoinUsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (membership: Omit<Membership, 'id' | 'joinedAt'>) => void;
}

export const JoinUsModal: React.FC<JoinUsModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [institution, setInstitution] = useState('');
  const [field, setField] = useState('');
  const [type, setType] = useState<'Individual' | 'Institutional'>('Individual');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  if (!isOpen) return null;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !institution.trim() || !field.trim()) {
      setError('Please fill out all mandatory fields.');
      return;
    }

    onSubmit({ name, email, institution, field, type });
    setSuccess('Welcome! You have been successfully registered under the Axiosphere Global Research Charter.');
    setError('');

    setTimeout(() => {
      setName('');
      setEmail('');
      setInstitution('');
      setField('');
      setType('Individual');
      setSuccess('');
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#050508]/65 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative bg-slate-950/90 backdrop-blur-xl max-w-lg w-full rounded border border-white/10 p-6 md:p-8 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex justify-between items-start border-b border-white/10 pb-4 mb-4">
          <div>
            <span className="font-mono text-[9px] font-bold text-primary tracking-widest uppercase">MEMBERSHIP ENROLLMENT</span>
            <h3 className="font-sans text-xl font-extrabold text-white mt-1">Join the Axiosphere Network</h3>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full cursor-pointer text-white">
            <X size={18} />
          </button>
        </div>

        {success ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
              <Check size={24} />
            </div>
            <p className="font-sans text-base font-bold text-white">Enrollment Approved!</p>
            <p className="font-sans text-sm text-secondary max-w-sm mt-3 text-center leading-relaxed">
              {success}
            </p>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-550/10 border border-red-500/20 text-red-400 text-xs rounded flex items-center gap-2">
                <ShieldAlert size={14} /> {error}
              </div>
            )}

            <div className="grid grid-cols-2 gap-3 p-1 bg-white/5 border border-white/10 rounded mb-2">
              <button
                type="button"
                onClick={() => setType('Individual')}
                className={`py-2 rounded font-sans text-xs font-bold transition-soft flex items-center justify-center gap-1.5 cursor-pointer ${
                  type === 'Individual'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Users size={12} /> Individual Member
              </button>
              <button
                type="button"
                onClick={() => setType('Institutional')}
                className={`py-2 rounded font-sans text-xs font-bold transition-soft flex items-center justify-center gap-1.5 cursor-pointer ${
                  type === 'Institutional'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Award size={12} /> Institutional Partner
              </button>
            </div>

            <div>
              <label className="block font-mono text-[10px] font-bold text-white/70 uppercase mb-1">
                {type === 'Individual' ? 'Applicant Name' : 'Primary Representative Name'} *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Dr. Sarah Jenkins"
                className="w-full bg-white/5 border border-white/10 rounded p-2.5 text-sm text-white focus:outline-none focus:border-primary font-sans placeholder-white/20"
              />
            </div>

            <div>
              <label className="block font-mono text-[10px] font-bold text-white/70 uppercase mb-1">
                Official Work Email *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. s.jenkins@axiosphere.org"
                className="w-full bg-white/5 border border-white/10 rounded p-2.5 text-sm text-white focus:outline-none focus:border-primary font-sans placeholder-white/20"
              />
            </div>

            <div>
              <label className="block font-mono text-[10px] font-bold text-white/70 uppercase mb-1">
                {type === 'Individual' ? 'Primary Affiliation Institution' : 'Charter University / Trust Name'} *
              </label>
              <input
                type="text"
                required
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                placeholder="e.g. Kyoto University, Japan"
                className="w-full bg-white/5 border border-white/10 rounded p-2.5 text-sm text-white focus:outline-none focus:border-primary font-sans placeholder-white/20"
              />
            </div>

            <div>
              <label className="block font-mono text-[10px] font-bold text-white/70 uppercase mb-1">
                Research field / Sector specialty *
              </label>
              <input
                type="text"
                required
                value={field}
                onChange={(e) => setField(e.target.value)}
                placeholder="e.g. Circular Engineering & Clean Thermodynamics"
                className="w-full bg-white/5 border border-white/10 rounded p-2.5 text-sm text-white focus:outline-none focus:border-primary font-sans placeholder-white/20"
              />
            </div>

            <div className="flex gap-3 justify-end pt-4 border-t border-white/10 mt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 border border-white/10 rounded font-sans text-xs font-semibold text-white hover:bg-white/5 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-white text-black hover:bg-indigo-50 px-6 py-2.5 rounded font-sans text-xs font-bold uppercase tracking-widest transition-soft flex items-center gap-1.5 cursor-pointer active:scale-95"
              >
                Send Request <Send size={12} />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (message: Omit<ContactMessage, 'id' | 'submittedAt'>) => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  if (!isOpen) return null;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setError('All contact fields are required.');
      return;
    }

    onSubmit({ name, email, subject, message });
    setSuccess('Thank you. Your message has been routed to our global inquiries team. We will review and reply within 24 hours.');
    setError('');

    setTimeout(() => {
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setSuccess('');
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#050508]/65 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative bg-slate-950/90 backdrop-blur-xl max-w-lg w-full rounded border border-white/10 p-6 md:p-8 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex justify-between items-start border-b border-white/10 pb-4 mb-4">
          <div>
            <span className="font-mono text-[9px] font-bold text-primary tracking-widest uppercase">DIRECT DISPATCH</span>
            <h3 className="font-sans text-xl font-extrabold text-white mt-1">Get in Touch</h3>
            <p className="font-sans text-xs text-secondary mt-1">
              Have questions? Email us directly at{' '}
              <a href="mailto:info@axiosphere.org" className="text-white hover:text-primary transition-soft underline">
                info@axiosphere.org
              </a>
            </p>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full cursor-pointer text-white">
            <X size={18} />
          </button>
        </div>

        {success ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
              <Mail size={24} />
            </div>
            <p className="font-sans text-base font-bold text-white">Message Dispatched!</p>
            <p className="font-sans text-sm text-secondary max-w-sm mt-3 text-center leading-relaxed">
              {success}
            </p>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-100 text-xs rounded">
                {error}
              </div>
            )}

            <div>
              <label className="block font-mono text-[10px] font-bold text-white/70 uppercase mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Dr. Arthur Pendelton"
                className="w-full bg-white/5 border border-white/10 rounded p-2.5 text-sm text-white focus:outline-none focus:border-primary font-sans placeholder-white/20"
              />
            </div>

            <div>
              <label className="block font-mono text-[10px] font-bold text-white/70 uppercase mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. arthur@axiosphere.org"
                className="w-full bg-white/5 border border-white/10 rounded p-2.5 text-sm text-white focus:outline-none focus:border-primary font-sans placeholder-white/20"
              />
            </div>

            <div>
              <label className="block font-mono text-[10px] font-bold text-white/70 uppercase mb-1">
                Subject of Inquiry *
              </label>
              <input
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. Proposal for ICSRD 2026 Climate Sponsorship"
                className="w-full bg-white/5 border border-white/10 rounded p-2.5 text-sm text-white focus:outline-none focus:border-primary font-sans placeholder-white/20"
              />
            </div>

            <div>
              <label className="block font-mono text-[10px] font-bold text-white/70 uppercase mb-1">
                Enquiry details *
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your research details, sponsor questions or peer-review proposal completely..."
                className="w-full bg-white/5 border border-white/10 rounded p-2.5 text-sm text-white focus:outline-none focus:border-primary font-sans resize-none placeholder-white/20"
              ></textarea>
            </div>

            <div className="flex gap-3 justify-end pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 border border-white/10 rounded font-sans text-xs font-semibold text-white hover:bg-white/5 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-white text-black hover:bg-indigo-50 px-6 py-2.5 rounded font-sans text-xs font-bold uppercase tracking-widest transition-soft flex items-center gap-1.5 cursor-pointer active:scale-95"
              >
                Send Message <Send size={12} />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
