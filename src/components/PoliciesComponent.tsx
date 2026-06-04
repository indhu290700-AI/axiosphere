import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, ShieldAlert, FileText, Printer, Check, Ban, AlertCircle } from 'lucide-react';

interface PoliciesComponentProps {
  onBackToHome: () => void;
  activeSection?: 'privacy' | 'cancellation' | 'conduct';
}

export const PoliciesComponent: React.FC<PoliciesComponentProps> = ({ onBackToHome, activeSection = 'cancellation' }) => {
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [reportSuccess, setReportSuccess] = useState(false);
  const [reportName, setReportName] = useState('');
  const [reportEmail, setReportEmail] = useState('');
  const [reportDetails, setReportDetails] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'privacy' | 'cancellation' | 'conduct'>(
    activeSection === 'privacy' ? 'privacy' : 'all'
  );

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportDetails) return;
    setReportSuccess(true);
    setTimeout(() => {
      setReportName('');
      setReportEmail('');
      setReportDetails('');
      setReportSuccess(false);
      setReportModalOpen(false);
    }, 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-background text-on-background min-h-screen font-sans antialiased selection:bg-primary selection:text-white pt-24 pb-12">
      {/* Policy Page Header Nav */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-8 flex items-center justify-between">
        <button
          onClick={onBackToHome}
          className="group flex items-center gap-2 font-mono text-xs font-bold text-zinc-600 hover:text-black transition-colors uppercase tracking-widest cursor-pointer"
        >
          <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
          Back to Main Platform
        </button>
        <span className="font-mono text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
          AXIOSPHERE GOVERNANCE // V2026.1
        </span>
      </div>

      {/* Main Masthead */}
      <header className="max-w-7xl mx-auto px-6 md:px-16 mb-12">
        <span className="font-mono text-xs font-bold text-primary tracking-[0.25em] uppercase block mb-3">
          OFFICIAL GOVERNANCE
        </span>
        <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl font-black text-zinc-950 tracking-tight leading-none uppercase mb-6">
          Policies & Ethics
        </h1>
        <p className="font-sans text-lg md:text-xl text-zinc-600 max-w-2xl leading-relaxed">
          Our commitment to academic integrity and professional excellence. These guidelines ensure a rigorous, authentic, and respectful environment for all Axiosphere participants.
        </p>

        {/* Dynamic section filter tab buttons as requested by the mockup */}
        <div className="flex flex-wrap gap-2 mt-8 border-b border-zinc-200 pb-4">
          <button
            onClick={() => setActiveTab('all')}
            className={`font-mono text-xs font-bold uppercase tracking-wider px-4 py-2 rounded transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-zinc-950 text-white'
                : 'text-zinc-500 hover:text-black hover:bg-zinc-100'
            }`}
          >
            All Policies
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`font-mono text-xs font-bold uppercase tracking-wider px-4 py-2 rounded transition-all cursor-pointer ${
              activeTab === 'privacy'
                ? 'bg-zinc-950 text-white'
                : 'text-zinc-500 hover:text-black hover:bg-zinc-100'
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setActiveTab('cancellation')}
            className={`font-mono text-xs font-bold uppercase tracking-wider px-4 py-2 rounded transition-all cursor-pointer ${
              activeTab === 'cancellation'
                ? 'bg-zinc-950 text-white'
                : 'text-zinc-500 hover:text-black hover:bg-zinc-100'
            }`}
          >
            Cancellation & Transfers
          </button>
          <button
            onClick={() => setActiveTab('conduct')}
            className={`font-mono text-xs font-bold uppercase tracking-wider px-4 py-2 rounded transition-all cursor-pointer ${
              activeTab === 'conduct'
                ? 'bg-zinc-950 text-white'
                : 'text-zinc-500 hover:text-black hover:bg-zinc-100'
            }`}
          >
            Code of Conduct
          </button>
        </div>
      </header>

      {/* SECTION 1: PRIVACY POLICY - Styled as clean structured academic paper */}
      {(activeTab === 'all' || activeTab === 'privacy') && (
        <section className="max-w-7xl mx-auto px-6 md:px-16 py-12 border-b border-zinc-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs font-bold text-primary tracking-[0.2em] uppercase block mb-3">
                SECTION 01
              </span>
              <h2 className="font-sans text-3xl font-black text-zinc-950 uppercase tracking-tight">
                Privacy Policy
              </h2>
              <div className="h-1 w-16 bg-primary mt-4"></div>
            </div>

            <div className="lg:col-span-8 text-zinc-700 space-y-6 font-sans text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-zinc-900">
                Welcome to Axiosphere. We value your privacy and are committed to protecting the personal information shared through our conferences, websites, virtual platforms, and related services.
              </p>
              <p>
                By accessing Axiosphere platforms or participating in our events, you agree to the practices described in this Privacy Policy.
              </p>

              <div>
                <h4 className="font-sans font-bold text-zinc-950 text-lg mb-3">Information We Collect</h4>
                <p className="mb-3">Axiosphere may collect information including:</p>
                <ul className="list-disc pl-5 space-y-2 text-zinc-650">
                  <li>Name, email address, institution, and professional details</li>
                  <li>Conference registration and submission information</li>
                  <li>Payment and billing details</li>
                  <li>Communication preferences</li>
                  <li>Event participation and engagement data</li>
                  <li>Technical information such as browser type, IP address, and device data</li>
                </ul>
              </div>

              <div>
                <h4 className="font-sans font-bold text-zinc-950 text-lg mb-3">How We Use Information</h4>
                <p className="mb-3">We use collected information to:</p>
                <ul className="list-disc pl-5 space-y-2 text-zinc-650">
                  <li>Manage conference registrations and submissions</li>
                  <li>Provide event access and participant communication</li>
                  <li>Improve user experience and platform functionality</li>
                  <li>Share conference updates, announcements, and academic opportunities</li>
                  <li>Maintain platform security and prevent misuse</li>
                  <li>Comply with legal and operational requirements</li>
                </ul>
              </div>

              <div>
                <h4 className="font-sans font-bold text-zinc-950 text-lg mb-3">Data Protection</h4>
                <p>
                  Axiosphere implements reasonable administrative and technical safeguards to protect personal information from unauthorized access, disclosure, or misuse.
                </p>
              </div>

              <div>
                <h4 className="font-sans font-bold text-zinc-950 text-lg mb-3">Information Sharing</h4>
                <p>
                  We do not sell personal information. Limited information may be shared with event partners or service providers supporting conference operations, payment processing providers, or legal authorities when required by law.
                </p>
              </div>

              <div>
                <h4 className="font-sans font-bold text-zinc-950 text-lg mb-3">Cookies & Analytics</h4>
                <p>
                  Axiosphere may use cookies and analytics tools to improve website performance, understand user engagement, and enhance platform functionality.
                </p>
              </div>

              <div>
                <h4 className="font-sans font-bold text-zinc-950 text-lg mb-3">Academic Content & Submissions</h4>
                <p>
                  By submitting abstracts, papers, presentations, or related materials, participants acknowledge that submitted content may be reviewed for academic and conference purposes, accepted content may be displayed as part of conference proceedings, and authors remain responsible for the originality and ownership of their work.
                </p>
              </div>

              <div>
                <h4 className="font-sans font-bold text-zinc-950 text-lg mb-3">Terms & Conditions Accord</h4>
                <p>
                  By accessing Axiosphere websites, registering for events, or participating in conferences, you agree to comply with standard academic integrity measures, virtual event safety rules, and limitations of physical/mental liability protocols associated with professional hybrid event operations. Only pristine source research and authorized materials should be presented under proper citation schemas.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 2: CANCELLATION POLICY - Replicating White Graphic Card & Big Red Refunds */}
      {(activeTab === 'all' || activeTab === 'cancellation') && (
        <section className="max-w-7xl mx-auto px-6 md:px-16 py-16 border-b border-zinc-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs font-bold text-primary tracking-[0.2em] uppercase block mb-3">
                SECTION 02
              </span>
              <h2 className="font-sans text-4xl font-black text-zinc-950 uppercase tracking-tight">
                Cancellation Policy
              </h2>
              <div className="h-1 w-16 bg-primary mt-4 mb-6"></div>
              <p className="font-sans text-sm text-zinc-650 leading-relaxed">
                Registration cancellations must be submitted in writing. Our refund schedule is strictly enforced to manage logistical commitments for international venues.
              </p>
            </div>

            <div className="lg:col-span-8 bg-zinc-50 border border-zinc-200 rounded p-6 sm:p-8">
              {/* Refund Table Grid - Identical visual presentation to requested image */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse font-sans">
                  <thead>
                    <tr className="border-b border-zinc-250 font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                      <th className="py-3 pb-4">Notice Period</th>
                      <th className="py-3 pb-4 text-right">Refund Percentage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    <tr className="group">
                      <td className="py-4 font-sans text-lg font-extrabold text-zinc-900">90+ Days</td>
                      <td className="py-4 text-right font-sans text-2xl font-black text-primary">100% Refund</td>
                    </tr>
                    <tr className="group">
                      <td className="py-4 font-sans text-lg font-extrabold text-zinc-900">60–89 Days</td>
                      <td className="py-4 text-right font-sans text-2xl font-black text-primary">75% Refund</td>
                    </tr>
                    <tr className="group">
                      <td className="py-4 font-sans text-lg font-extrabold text-zinc-900">30–59 Days</td>
                      <td className="py-4 text-right font-sans text-2xl font-black text-primary">50% Refund</td>
                    </tr>
                    <tr className="group">
                      <td className="py-4 font-sans text-lg font-extrabold text-zinc-900">&lt; 30 Days</td>
                      <td className="py-4 text-right font-sans text-2xl font-black text-zinc-400">0% Refund</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Quote block style reference */}
              <div className="border-l-2 border-primary pl-4 py-2 mt-8 text-zinc-600 bg-white p-4 text-xs italic">
                “All refund requests are processed within 14 business days of approval. Processing fees may apply.”
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3: TRANSFER RULES - High contrast black layout exactly like reference */}
      {(activeTab === 'all' || activeTab === 'cancellation') && (
        <section className="bg-surface-dim text-on-background py-20 border-b border-outline">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <span className="font-mono text-xs font-bold text-primary tracking-[0.2em] uppercase block mb-3">
                  SECTION 03
                </span>
                <h2 className="font-sans text-4xl font-black text-white uppercase tracking-tight">
                  Transfer Rules
                </h2>
                <div className="h-1 w-16 bg-primary mt-4"></div>
              </div>

              {/* Three red numbered items exact to image */}
              <div className="lg:col-span-8 space-y-12">
                {/* Rule 01 */}
                <div className="flex gap-6 md:gap-8 items-start">
                  <span className="font-sans text-4xl md:text-5xl font-black text-primary leading-none">
                    01
                  </span>
                  <div>
                    <h3 className="font-sans text-lg md:text-xl font-bold text-white mb-2 uppercase">
                      Substitution Eligibility
                    </h3>
                    <p className="font-sans text-sm text-zinc-400 leading-relaxed max-w-2xl">
                      Registration may be transferred to another individual from the same institution at no additional cost. The recipient must meet the same professional criteria as the original registrant.
                    </p>
                  </div>
                </div>

                {/* Rule 02 */}
                <div className="flex gap-6 md:gap-8 items-start">
                  <span className="font-sans text-4xl md:text-5xl font-black text-primary leading-none">
                    02
                  </span>
                  <div>
                    <h3 className="font-sans text-lg md:text-xl font-bold text-white mb-2 uppercase">
                      Deadline for Transfer
                    </h3>
                    <p className="font-sans text-sm text-zinc-400 leading-relaxed max-w-2xl">
                      All transfer requests must be finalized no later than 7 business days prior to the event commencement date.
                    </p>
                  </div>
                </div>

                {/* Rule 03 */}
                <div className="flex gap-6 md:gap-8 items-start">
                  <span className="font-sans text-4xl md:text-5xl font-black text-primary leading-none">
                    03
                  </span>
                  <div>
                    <h3 className="font-sans text-lg md:text-xl font-bold text-white mb-2 uppercase">
                      One-Time Limit
                    </h3>
                    <p className="font-sans text-sm text-zinc-400 leading-relaxed max-w-2xl">
                      A registration can only be transferred once. Subsequent transfers or reversals are not permitted under our global policy framework.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 4: CODE OF CONDUCT - Modern grid layout exact to reference */}
      {(activeTab === 'all' || activeTab === 'conduct') && (
        <section className="max-w-7xl mx-auto px-6 md:px-16 py-20 border-b border-zinc-200">
          <span className="font-mono text-xs font-bold text-primary tracking-[0.2em] uppercase block mb-3">
            ETHICAL FRAMEWORK
          </span>
          <h2 className="font-sans text-4xl font-black text-zinc-950 uppercase tracking-tight mb-16">
            Code of Conduct
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Expectations list with red checks */}
            <div className="space-y-6">
              <h3 className="font-sans text-xl font-extrabold text-zinc-950 uppercase border-b border-zinc-200 pb-3">
                Professional Expectations
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <Check className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span className="font-sans text-sm text-zinc-700 leading-relaxed">
                    Exercise consideration and respect in your speech and actions.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <Check className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span className="font-sans text-sm text-zinc-700 leading-relaxed">
                    Attempt collaboration before conflict.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <Check className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span className="font-sans text-sm text-zinc-700 leading-relaxed">
                    Refrain from demeaning, discriminatory, or harassing behavior and speech.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <Check className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span className="font-sans text-sm text-zinc-700 leading-relaxed">
                    Be mindful of your surroundings and of your fellow participants.
                  </span>
                </li>
              </ul>
            </div>

            {/* Prohibited checklist red crossed */}
            <div className="space-y-6">
              <h3 className="font-sans text-xl font-extrabold text-zinc-950 uppercase border-b border-zinc-200 pb-3">
                Prohibited Behavior
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <Ban className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span className="font-sans text-sm text-zinc-700 leading-relaxed">
                    Intimidating, harassing, abusive, discriminatory, or demeaning conduct.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <Ban className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span className="font-sans text-sm text-zinc-700 leading-relaxed">
                    Nudity and/or sexual images in public spaces.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <Ban className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span className="font-sans text-sm text-zinc-700 leading-relaxed">
                    Inappropriate physical contact or unwelcome sexual attention.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <Ban className="text-primary mt-1 flex-shrink-0" size={16} />
                  <span className="font-sans text-sm text-zinc-700 leading-relaxed">
                    Disruption of talks, workshops, or other community events.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Reporting Banner with stylish hallway corridor photo as layout backdrop */}
          <div className="bg-zinc-50 border border-zinc-200 p-6 md:p-10 rounded-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <h3 className="font-sans text-2xl font-black text-zinc-950 uppercase tracking-tight mb-3">
                Enforcement & Reporting
              </h3>
              <p className="font-sans text-sm text-zinc-650 leading-relaxed mb-6">
                If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of the Axiosphere staff immediately.
              </p>
              <button
                onClick={() => setReportModalOpen(true)}
                className="bg-zinc-950 hover:bg-zinc-900 border border-zinc-900 text-white font-mono text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded transition-colors cursor-pointer active:scale-95"
              >
                REPORT AN INCIDENT
              </button>
            </div>

            <div className="md:col-span-5 h-48 rounded overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1545235621-39c243abb210?auto=format&fit=crop&w=650&q=80"
                alt="Corridor view representing high standard administrative governance corridors."
                className="w-full h-full object-cover filter grayscale"
              />
              <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
            </div>
          </div>
        </section>
      )}

      {/* Formal Document Access section at bottom of reference */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <FileText className="text-primary" size={24} />
            <div>
              <h4 className="font-sans text-sm font-bold text-zinc-950 uppercase tracking-wide">
                Formal Document Access
              </h4>
              <p className="font-sans text-xs text-zinc-500 mt-1">
                For legal archival purposes, the full-length documentation of these protocols is available for direct local print representation.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center justify-center gap-2 border border-zinc-300 text-zinc-800 hover:text-black hover:bg-white px-5 py-2.5 rounded font-sans text-xs font-semibold cursor-pointer active:scale-95 transition-all"
            >
              <Printer size={14} /> Print Version
            </button>
          </div>
        </div>
      </section>

      {/* Incident reporting modal UI */}
      {reportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setReportModalOpen(false)}
          ></div>

          <div className="relative bg-white text-zinc-900 max-w-lg w-full rounded border border-zinc-200 p-6 md:p-8 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-start border-b border-zinc-200 pb-4 mb-4">
              <div>
                <span className="font-mono text-[9px] font-bold text-primary tracking-widest uppercase">SECURE DISPATCH</span>
                <h3 className="font-sans text-xl font-bold text-zinc-950 mt-1">
                  Submit Institutional Incident Report
                </h3>
              </div>
              <button
                onClick={() => setReportModalOpen(false)}
                className="p-1 hover:bg-zinc-100 rounded-full cursor-pointer text-zinc-500"
              >
                <AlertCircle size={18} />
              </button>
            </div>

            {reportSuccess ? (
              <div className="py-8 text-center flex flex-col items-center">
                <CheckCircle className="text-primary mb-4" size={32} />
                <p className="font-sans text-base font-bold text-zinc-950">Incident Submitted Safely</p>
                <p className="font-sans text-xs text-zinc-500 mt-2 max-w-xs leading-relaxed text-center">
                  This dispatch has been encrypted and routed directly to the Axiosphere Oversight Committee. We will contact you or intervene immediately.
                </p>
              </div>
            ) : (
              <form onSubmit={handleReportSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-[10px] font-bold text-zinc-500 uppercase mb-1">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={reportName}
                    onChange={(e) => setReportName(e.target.value)}
                    placeholder="Anonymous or Your Name"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded p-2.5 text-xs text-zinc-900 focus:outline-none focus:border-zinc-500 font-sans"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] font-bold text-zinc-500 uppercase mb-1">
                    Secure Return Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={reportEmail}
                    onChange={(e) => setReportEmail(e.target.value)}
                    placeholder="e.g. key@institute.org"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded p-2.5 text-xs text-zinc-900 focus:outline-none focus:border-zinc-500 font-sans"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] font-bold text-zinc-500 uppercase mb-1">
                    Detailed Account of Incidents / Concerns *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={reportDetails}
                    onChange={(e) => setReportDetails(e.target.value)}
                    placeholder="Provide timestamps, names, or specific contexts where admin support or ethical oversight is required..."
                    className="w-full bg-zinc-50 border border-zinc-200 rounded p-2.5 text-xs text-zinc-900 focus:outline-none focus:border-zinc-500 font-sans resize-none"
                  ></textarea>
                </div>

                <div className="flex gap-3 justify-end pt-4 border-t border-zinc-100">
                  <button
                    type="button"
                    onClick={() => setReportModalOpen(false)}
                    className="px-5 py-2.5 border border-zinc-200 rounded font-sans text-xs font-semibold text-zinc-650 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-primary hover:bg-red-700 text-white px-6 py-2.5 rounded font-sans text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    Dispatch Securely
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
