import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Presentation, CheckCircle2 } from 'lucide-react';
import { businessData } from '../data/businessData';

interface NavigationProps {
  pitchMode: boolean;
  setPitchMode: (val: boolean) => void;
  onOpenBrief: () => void;
  onOpenProposalModal: () => void;
}

export default function Navigation({ pitchMode, setPitchMode, onOpenBrief, onOpenProposalModal }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Opportunity', href: '#opportunity' },
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Sketch → Space', href: '#sketch-to-space' },
    { label: 'Trust & Reviews', href: '#trust' },
    { label: 'Location', href: '#location' },
    { label: 'Proposal Scope', href: '#proposal' },
  ];

  return (
    <>
      {/* Top agency presentation banner */}
      <aside aria-label="Proposal presentation notice" className="w-full bg-[#171716] text-[#F4F0E8] py-2 px-4 text-xs font-mono tracking-wider border-b border-[#2B231D] z-40 relative">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#A66A4C] animate-ping" />
            <span className="text-[#A66A4C] font-semibold">DIGITAL EXPERIENCE PROPOSAL</span>
            <span className="hidden sm:inline text-neutral-400">•</span>
            <span className="hidden sm:inline text-neutral-300">Prepared for Sketch Interiors (Calicut & Ernakulam)</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="toggle-agency-pitch-mode-btn"
              onClick={() => setPitchMode(!pitchMode)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-sans transition-colors border ${
                pitchMode
                  ? 'bg-[#A66A4C] text-white border-[#A66A4C]'
                  : 'bg-neutral-800 text-neutral-300 border-neutral-700 hover:text-white'
              }`}
            >
              <Presentation className="w-3.5 h-3.5" />
              <span>{pitchMode ? 'Strategic Notes: ON' : 'Show Strategy Annotations'}</span>
            </button>

            <button
              id="view-proposal-executive-summary-btn"
              onClick={onOpenProposalModal}
              className="text-[#F4F0E8] hover:text-[#A66A4C] underline decoration-[#A66A4C]/50 text-[11px] font-sans transition-colors hidden md:inline-flex items-center gap-1"
            >
              <span>Executive Brief</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Navigation Bar */}
      <header
        className={`fixed top-[37px] left-0 w-full z-30 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F4F0E8]/95 backdrop-blur-md shadow-xs border-b border-[#171716]/10 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Editorial Subtitle */}
          <a href="#" className="group flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-[#171716]">
                SKETCH
              </span>
              <span className="font-sans text-xs font-semibold tracking-[0.25em] text-[#A66A4C] uppercase pt-0.5">
                INTERIORS
              </span>
            </div>
            <span className="text-[10px] tracking-widest uppercase font-mono text-[#171716]/60">
              Calicut • Ernakulam
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.18em] font-medium text-[#171716]/75 hover:text-[#A66A4C] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#A66A4C] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${businessData.displayPhone.replace(/\s+/g, '')}`}
              className="text-xs font-mono text-[#171716]/80 hover:text-[#A66A4C] transition-colors hidden xl:inline-block"
            >
              {businessData.displayPhone}
            </a>
            <button
              id="nav-start-project-btn"
              onClick={onOpenBrief}
              className="px-5 py-2.5 bg-[#171716] text-[#F4F0E8] text-xs font-semibold tracking-wider uppercase rounded-none hover:bg-[#A66A4C] transition-all duration-300 flex items-center gap-2 group shadow-sm"
            >
              <span>Start A Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-start-project-pill"
              onClick={onOpenBrief}
              className="px-3 py-1.5 bg-[#171716] text-[#F4F0E8] text-[11px] font-semibold tracking-wider uppercase hover:bg-[#A66A4C]"
            >
              Start
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#171716] focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F4F0E8] border-b border-[#171716]/10 px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm uppercase tracking-widest font-medium text-[#171716] py-1 border-b border-[#171716]/5 hover:text-[#A66A4C]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-[#171716]/10 space-y-3">
              <p className="text-xs font-mono text-[#171716]/60">
                Opp. Hilite City, Palazhi, Calicut
              </p>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBrief();
                }}
                className="w-full py-3 bg-[#171716] text-[#F4F0E8] text-xs font-semibold tracking-widest uppercase hover:bg-[#A66A4C] flex items-center justify-center gap-2"
              >
                <span>Start A Project Conversation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
