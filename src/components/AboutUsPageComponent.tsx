import React from 'react';
import { ArrowLeft, BookOpen, Users, Award, Shield, Compass, Sparkles, Zap, CheckCircle } from 'lucide-react';
import { LogoComponent } from './LogoComponent';

interface AboutUsPageComponentProps {
  onBackToHome: () => void;
}

export const AboutUsPageComponent: React.FC<AboutUsPageComponentProps> = ({ onBackToHome }) => {
  return (
    <div className="bg-background text-on-background min-h-screen font-sans antialiased pt-24 pb-16 relative">
      {/* Dynamic background mesh/grid lights */}
      <div className="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none opacity-40"></div>
      <div className="absolute left-6 md:left-16 top-0 bottom-0 w-px bg-white/5 pointer-events-none"></div>

      {/* Page Navigation */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-10 flex items-center justify-between relative z-10 pl-6 md:pl-12">
        <button
          onClick={onBackToHome}
          className="group flex items-center gap-2 font-mono text-xs font-bold text-zinc-400 hover:text-white transition-colors uppercase tracking-widest cursor-pointer"
        >
          <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
          Back to Platform
        </button>
        <span className="font-mono text-[9px] text-zinc-500 font-bold uppercase tracking-widest bg-zinc-950 px-3 py-1 border border-zinc-900 rounded">
          ABOUT COGNITIVE INFRASTRUCTURE // AXIOSPHERE
        </span>
      </div>

      {/* Main Masthead / Title section */}
      <header className="max-w-7xl mx-auto px-6 md:px-16 mb-16 relative z-10 pl-6 md:pl-12">
        <span className="font-mono text-xs font-bold text-primary tracking-[0.25em] uppercase block mb-3">
          WHO WE ARE
        </span>
        <h1 className="font-sans text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-none uppercase mb-6 max-w-4xl">
          ABOUT <span className="text-zinc-500">AXIOSPHERE</span>
        </h1>
        <p className="font-sans text-lg md:text-xl text-zinc-300 max-w-3xl leading-relaxed">
          Axiosphere is a research, innovation, conferences, and professional events organization focused on creating a global ecosystem for knowledge sharing, collaboration, and technological advancement.
        </p>
      </header>

      {/* Elegant Key Pillars Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 mb-20 relative z-10 pl-6 md:pl-12">
        <div className="p-8 md:p-12 border border-zinc-900 bg-zinc-950/60 rounded-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl pointer-events-none"></div>
          
          <div className="max-w-3xl">
            <h3 className="font-mono text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              Core Mandate
            </h3>
            <p className="font-sans text-xl sm:text-2xl font-semibold text-white leading-relaxed mb-6">
              Axiosphere is a professional conference and research event organization focused on conducting conferences, webinars, symposiums, workshops, innovation forums, and knowledge-sharing platforms for academic, corporate, and technology communities.
            </p>
            <div className="h-px bg-zinc-900 w-full my-8"></div>
            <p className="font-sans text-sm md:text-base text-zinc-400 leading-relaxed">
              We stand as a professional bridge between academic inquiry and industrial application, establishing a unified environment where brilliant ideas are shared, peer-reviewed, verified, and celebrated in high-end global settings.
            </p>
          </div>
        </div>
      </section>

      {/* Grid of Aims and Organization Targets */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 mb-20 relative z-10 pl-6 md:pl-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left info column: What we organize */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs font-bold text-primary tracking-[0.2em] uppercase block mb-3">
              WHAT WE MANAGE & ORGANIZE
            </span>
            <h2 className="font-sans text-3xl font-black text-white uppercase tracking-tight mb-6">
              Platform Focus
            </h2>
            <p className="font-sans text-sm text-zinc-400 leading-relaxed max-w-sm mb-6">
              Axiosphere empowers authors, inventors, and educators with structured event architectures. Our objective remains the deployment of rigorous knowledge environments through these core initiatives:
            </p>
            <div className="border border-zinc-900 bg-zinc-950/40 p-6 rounded-sm">
              <h4 className="font-sans text-xs font-bold text-white uppercase tracking-wider mb-2">Academic Validation</h4>
              <p className="font-sans text-xs text-zinc-500 leading-relaxed">
                Every event manages detailed peer evaluation boards consisting of leading global professors. We guarantee that all accepted submissions are indexed and distributed for permanent citation metrics.
              </p>
            </div>
          </div>

          {/* Right column: Interactive List of organizing items */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Research Conferences', desc: 'Preeminent academic forums hosting major papers and live doctoral defenses.' },
              { title: 'Academic & Industrial Symposiums', desc: 'Strategic roundtable integrations between university research labs and Fortune 500 labs.' },
              { title: 'Webinars & Virtual Events', desc: 'Digital-first streaming classrooms offering real-time worldwide access to frontier insights.' },
              { title: 'Workshops & Training Programs', desc: 'Practical sandbox code & lab sprints overseen by recognized domain masters.' },
              { title: 'Innovation Summits', desc: 'High-stake showcases highlighting verified hardware frameworks and digital transformations.' },
              { title: 'Networking Forums', desc: 'Sleek mixers pairing high-caliber junior fellows with tenured institutional chairs.' },
              { title: 'Professional Development Events', desc: 'Certified career curriculum designed for rapid executive pivot tracks.' }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="p-5 border border-zinc-900 bg-zinc-950/20 hover:border-zinc-850 hover:bg-zinc-950/80 transition-all duration-300 rounded-sm"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="font-mono text-[10px] text-primary font-bold">0{idx + 1}</span>
                  <h4 className="font-sans text-sm font-extrabold text-white uppercase tracking-tight">{item.title}</h4>
                </div>
                <p className="font-sans text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences Served */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 mb-20 relative z-10 pl-6 md:pl-12">
        <div className="border-t border-zinc-900 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <span className="font-mono text-xs font-bold text-primary tracking-[0.2em] uppercase block mb-3">
                WHO WE SERVE
              </span>
              <h2 className="font-sans text-3xl font-black text-white uppercase tracking-tight mb-6">
                Serving the Global Vanguard
              </h2>
              <p className="font-sans text-sm md:text-base text-zinc-300 leading-relaxed mb-6">
                Axiosphere will serve students, researchers, professionals, startups, educational institutions, corporations, and industry experts by providing platforms for learning, collaboration, and innovation.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-sans text-xs font-bold text-white uppercase">Scholars & Students</h4>
                    <p className="font-sans text-[11px] text-zinc-500">Access to premier peer critique.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-sans text-xs font-bold text-white uppercase">Industry & Corporates</h4>
                    <p className="font-sans text-[11px] text-zinc-500">Access to frontier hiring and tech.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-sans text-xs font-bold text-white uppercase">Startups & Investors</h4>
                    <p className="font-sans text-[11px] text-zinc-500">Exchanges driving seed innovations.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-sans text-xs font-bold text-white uppercase">Research Labs</h4>
                    <p className="font-sans text-[11px] text-zinc-500">Fulfilling publishing mandates.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Identity & Corporate Design Redesign Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="border border-zinc-850 bg-zinc-950/80 rounded p-6 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full filter blur-2xl pointer-events-none"></div>
                
                <span className="font-mono text-[9px] font-bold text-primary tracking-widest uppercase block mb-1">
                  AXIOSPHERE DESIGN LABS
                </span>
                <h3 className="font-sans text-xl font-extrabold text-white tracking-tight uppercase mb-4">
                  Corporate Identity Redesign
                </h3>
                
                <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-6">
                  We engineered a premium corporate brand mark to replace traditional cooperative clip-art. The new design shifts focus toward scientific precision, high fidelity, and prestigious global networking.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  {/* Left Column: Visual Emblem Presenter */}
                  <div className="sm:col-span-5 flex flex-col items-center justify-center p-4 bg-zinc-900 border border-zinc-800 rounded text-center relative group-hover:border-primary/40 transition-soft">
                    <div className="w-20 h-20 bg-white rounded-full shadow-lg border border-zinc-700 flex items-center justify-center mb-3">
                      <LogoComponent size={64} className="p-1" theme="light" />
                    </div>
                    <span className="font-mono text-[9px] font-bold text-white uppercase tracking-wider">
                      Core Emblem
                    </span>
                    <span className="font-sans text-[9px] text-zinc-500 mt-0.5">
                      "Connected Intelligence"
                    </span>
                  </div>

                  {/* Right Column: Key Design Upgrades description */}
                  <div className="sm:col-span-7 space-y-4">
                    <div className="flex gap-3">
                      <div className="font-mono text-xs font-bold text-primary">01/</div>
                      <div>
                        <h5 className="font-sans text-xs font-extrabold text-white uppercase tracking-wider">Geometric Connection</h5>
                        <p className="font-sans text-[10px] text-zinc-400 leading-relaxed">
                          A high-fidelity interconnecting vector structure symbolizing international peer review.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="font-mono text-xs font-bold text-primary">02/</div>
                      <div>
                        <h5 className="font-sans text-xs font-extrabold text-white uppercase tracking-wider">High Contrast Clarity</h5>
                        <p className="font-sans text-[10px] text-zinc-400 leading-relaxed">
                          Optimized curves and space properties designed to pop on both digital banners and physical journals.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="font-mono text-xs font-bold text-primary">03/</div>
                      <div>
                        <h5 className="font-sans text-xs font-extrabold text-white uppercase tracking-wider">Adaptive Contrast</h5>
                        <p className="font-sans text-[10px] text-zinc-400 leading-relaxed">
                          The logo is configured inside a flawless white circle badge that maintains optimal contrast in both Light & Dark modes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-900 flex justify-between items-center text-[10px] font-mono text-zinc-500">
                  <span>SYSTEM // VITE-ASSET-PIPELINE</span>
                  <span className="text-primary font-bold">APPROVED BRAND STATUS</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OUR PRIORITIES - 2026 Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 mb-20 relative z-10 pl-6 md:pl-12 border-t border-zinc-900 pt-16">
        <span className="font-mono text-xs font-bold text-primary tracking-[0.25em] uppercase block mb-3">
          STRATEGIC ROADMAP
        </span>
        <h2 className="font-sans text-4xl font-extrabold text-white tracking-tight uppercase mb-4">
          OUR PRIORITIES - <span className="text-zinc-500">2026</span>
        </h2>
        <div className="relative p-6 sm:p-8 border border-zinc-850 bg-zinc-950/50 rounded-sm mb-12">
          <h3 className="font-sans text-lg sm:text-xl font-bold text-white mb-2">
            Building the Future of Trusted Global Conferences & Research Collaboration
          </h3>
          <p className="font-sans text-sm text-zinc-400 leading-relaxed">
            Axiosphere’s 2026 priorities are focused on creating a transparent, innovation-driven, and globally connected ecosystem for conferences, research, professional learning, and industry collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Priority 1 */}
          <div className="p-6 border border-zinc-900 bg-zinc-950/30 rounded-sm flex flex-col justify-between hover:border-zinc-800 transition-all">
            <div>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-5">
                <Shield size={20} />
              </div>
              <h4 className="font-sans text-lg font-bold text-white mb-3 uppercase tracking-tight">
                Trusted Conferences & Research Integrity
              </h4>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-6">
                We are committed to creating credible and transparent conference ecosystems that uphold academic quality, ethical standards, and professional trust.
              </p>
              
              <div className="space-y-3 mb-6">
                <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase block tracking-wider">
                  Focus Areas
                </span>
                <ul className="space-y-2">
                  {[
                    "Verified speakers and institutional collaborations",
                    "Ethical conference standards",
                    "Transparent review and selection processes",
                    "Research integrity and authenticity",
                    "Anti-predatory conference practices"
                  ].map((area, idx) => (
                    <li key={idx} className="flex gap-2 items-start text-xs text-zinc-300">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="border-t border-zinc-900 pt-4 mt-6">
              <span className="font-mono text-[9px] font-bold text-zinc-500 uppercase tracking-widest block mb-1">
                OUR GOAL
              </span>
              <p className="font-sans text-xs text-zinc-300 italic">
                To establish Axiosphere as a globally trusted platform for conferences, innovation forums, and scholarly collaboration.
              </p>
            </div>
          </div>

          {/* Priority 2 */}
          <div className="p-6 border border-zinc-900 bg-zinc-950/30 rounded-sm flex flex-col justify-between hover:border-zinc-800 transition-all">
            <div>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-5">
                <Compass size={20} />
              </div>
              <h4 className="font-sans text-lg font-bold text-white mb-3 uppercase tracking-tight">
                Global Research & Innovation Collaboration
              </h4>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-4">
                <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-zinc-500 block mb-1">Priority Statement</span>
                Connecting researchers, innovators, startups, institutions, and industries through meaningful global collaboration.
              </p>
              
              <div className="space-y-3 mb-6">
                <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase block tracking-wider">
                  Focus Areas
                </span>
                <ul className="space-y-2">
                  {[
                    "International research partnerships",
                    "Cross-disciplinary innovation programs",
                    "Startup and academia collaboration",
                    "Global innovation communities",
                    "Emerging technology forums"
                  ].map((area, idx) => (
                    <li key={idx} className="flex gap-2 items-start text-xs text-zinc-300">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="border-t border-zinc-900 pt-4 mt-6">
              <span className="font-mono text-[9px] font-bold text-zinc-500 uppercase tracking-widest block mb-1">
                OUR GOAL
              </span>
              <p className="font-sans text-xs text-zinc-300 italic">
                To connect researchers, institutions, professionals, and innovators across borders.
              </p>
            </div>
          </div>

          {/* Priority 3 */}
          <div className="p-6 border border-zinc-900 bg-zinc-950/30 rounded-sm flex flex-col justify-between hover:border-zinc-800 transition-all">
            <div>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-5">
                <Award size={20} />
              </div>
              <h4 className="font-sans text-lg font-bold text-white mb-3 uppercase tracking-tight">
                Professional Growth & Future Skills
              </h4>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-6">
                Axiosphere supports the next generation of professionals through learning, mentorship, networking, and emerging technology exposure.
              </p>
              
              <div className="space-y-3 mb-6">
                <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase block tracking-wider">
                  Focus Areas
                </span>
                <ul className="space-y-2">
                  {[
                    "Industry-focused workshops",
                    "Career networking opportunities",
                    "Leadership and innovation programs",
                    "Emerging technology awareness",
                    "Future-ready skill development"
                  ].map((area, idx) => (
                    <li key={idx} className="flex gap-2 items-start text-xs text-zinc-300">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="border-t border-zinc-900 pt-4 mt-6">
              <span className="font-mono text-[9px] font-bold text-zinc-500 uppercase tracking-widest block mb-1">
                OUR GOAL
              </span>
              <p className="font-sans text-xs text-zinc-300 italic">
                To strengthen professional excellence in a rapidly evolving global ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Back Home button action */}
      <footer className="max-w-7xl mx-auto px-6 md:px-16 pt-12 relative z-10 pl-6 md:pl-12 text-center">
        <button
          onClick={onBackToHome}
          className="border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-950 text-zinc-300 hover:text-white px-8 py-3.5 rounded-sm font-sans text-xs font-bold uppercase tracking-widest transition-all active:scale-95 cursor-pointer inline-flex items-center gap-2"
        >
          <ArrowLeft size={14} /> Back to Main Platform
        </button>
      </footer>
    </div>
  );
};
