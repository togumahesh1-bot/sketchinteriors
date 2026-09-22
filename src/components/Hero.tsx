import { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Layers, Sliders } from 'lucide-react';
import { businessData } from '../data/businessData';

interface HeroProps {
  onExploreClick: () => void;
  onViewProjectsClick: () => void;
  pitchMode: boolean;
}

export default function Hero({ onExploreClick, onViewProjectsClick, pitchMode }: HeroProps) {
  // Stage in transformation: 0 = Architectural Drawing, 1 = Blueprint Outline, 2 = Material Study, 3 = Completed Space
  const [activeStage, setActiveStage] = useState<number>(3);
  const [autoPlay, setAutoPlay] = useState<boolean>(false);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 4);
    }, 3800);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const stages = [
    { id: 0, label: '01. Conceptual Sketch', hint: 'The First Pencil Line' },
    { id: 1, label: '02. Technical Blueprint', hint: 'Spatial Coordinates & CAD' },
    { id: 2, label: '03. Material & Joinery', hint: 'Kerala Teak & Textures' },
    { id: 3, label: '04. Completed Space', hint: 'Living Architecture' },
  ];

  return (
    <section className="relative min-h-[96vh] sm:min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-[#F4F0E8] overflow-hidden">
      {/* Background Architectural Grid & Subtle Drafting Watermark */}
      <div className="absolute inset-0 architectural-grid pointer-events-none opacity-40" />

      {/* Strategic Pitch Note (Visible when Strategy mode is toggled) */}
      {pitchMode && (
        <div className="relative z-20 max-w-4xl mx-auto mb-6 p-3.5 bg-[#171716] text-[#F4F0E8] text-xs border-l-2 border-[#A66A4C] rounded-sm shadow-md animate-in fade-in duration-300">
          <div className="flex items-start gap-2.5">
            <span className="font-mono text-[#A66A4C] font-bold">AGENCY STRATEGY NOTE:</span>
            <p className="font-sans text-neutral-300 leading-relaxed">
              Most interior design websites in Kerala show immediate static photos without context. By dramatizing the transformation from an initial architectural sketch into a finished space, we immediately communicate high-calibre design thinking, justifying premium pricing for villas and bespoke commercial projects in Calicut and Ernakulam.
            </p>
          </div>
        </div>
      )}

      {/* Top Metadata Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 border-b border-[#171716]/10 pb-4 text-[11px] font-mono tracking-widest text-[#171716]/65 uppercase">
        <div className="flex items-center gap-3">
          <span className="text-[#A66A4C] font-semibold">SKETCH / SPACE</span>
          <span>•</span>
          <span>STUDIO: OPP. HILITE CITY, CALICUT</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">PROPOSAL PROTOTYPE // 2026</span>
          <span className="px-2 py-0.5 border border-[#171716]/20 bg-[#F4F0E8] text-[10px]">
            KOZHIKODE • ERNAKULAM
          </span>
        </div>
      </div>

      {/* Centerpiece: Headline + Visual Architectural Transformer */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Big Editorial Typography */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171716]/5 border border-[#171716]/10 text-[11px] tracking-widest uppercase font-mono text-[#171716]/75">
            <span className="w-1.5 h-1.5 bg-[#A66A4C] rounded-full" />
            Digital Experience Concept
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-[#171716] leading-[0.95]">
            FROM <br />
            <span className="italic font-normal text-[#A66A4C]">SKETCH</span> <br />
            TO SPACE.
          </h1>

          <p className="font-sans text-base sm:text-lg text-[#171716]/80 font-normal leading-relaxed max-w-xl">
            A digital experience designed to translate <strong className="font-semibold text-[#171716]">Sketch Interiors&apos;</strong> design thinking, craftsmanship and completed spaces into a premium online destination.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              id="hero-explore-concept-btn"
              onClick={onExploreClick}
              className="px-7 py-3.5 bg-[#171716] text-[#F4F0E8] text-xs font-semibold tracking-widest uppercase hover:bg-[#A66A4C] transition-colors duration-300 flex items-center gap-2 group shadow-sm"
            >
              <span>Explore The Concept</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </button>

            <button
              id="hero-view-projects-btn"
              onClick={onViewProjectsClick}
              className="px-6 py-3.5 border border-[#171716]/30 bg-transparent text-[#171716] text-xs font-semibold tracking-widest uppercase hover:border-[#171716] hover:bg-[#171716]/5 transition-all duration-300 flex items-center gap-2"
            >
              <span>View Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Business Proof Metrics */}
          <div className="pt-6 border-t border-[#171716]/10 grid grid-cols-3 gap-4 font-mono text-xs text-[#171716]/70">
            <div>
              <span className="block text-sm font-semibold text-[#171716]">EST. 2012</span>
              <span className="text-[10px] uppercase tracking-wider">13+ Yrs Kerala</span>
            </div>
            <div>
              <span className="block text-sm font-semibold text-[#171716]">CALICUT</span>
              <span className="text-[10px] uppercase tracking-wider">Opp. Hilite City</span>
            </div>
            <div>
              <span className="block text-sm font-semibold text-[#171716]">TURNKEY</span>
              <span className="text-[10px] uppercase tracking-wider">Design to MEP</span>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Interactive Transformer Canvas */}
        <div className="lg:col-span-6">
          <div className="relative bg-[#171716] text-[#F4F0E8] border border-[#2B231D] shadow-2xl p-2 sm:p-3 overflow-hidden group">
            {/* Top Stage Header */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-neutral-800 text-[11px] font-mono tracking-wider text-neutral-400">
              <div className="flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#A66A4C]" />
                <span className="text-[#F4F0E8] font-medium">{stages[activeStage].label}</span>
              </div>
              <button
                id="hero-autoplay-toggle-btn"
                onClick={() => setAutoPlay(!autoPlay)}
                className={`text-[10px] px-2 py-0.5 rounded border transition-colors ${
                  autoPlay ? 'bg-[#A66A4C] text-white border-[#A66A4C]' : 'border-neutral-700 text-neutral-400 hover:text-white'
                }`}
              >
                {autoPlay ? 'Auto Transitioning' : 'Auto Play'}
              </button>
            </div>

            {/* Visual Screen Container */}
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-neutral-900">
              {/* STAGE 0: Pure Technical Architectural Line Drawing (SVG) */}
              <div
                className={`absolute inset-0 transition-opacity duration-700 p-6 flex flex-col justify-between ${
                  activeStage === 0 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="absolute inset-0 architectural-grid opacity-20" />
                <svg
                  className="w-full h-full text-[#A66A4C]/80"
                  viewBox="0 0 600 400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  {/* Isometric room wireframe */}
                  <path d="M 50,320 L 300,380 L 550,320 L 300,260 Z" strokeDasharray="3 3" />
                  <path d="M 50,320 L 50,120 L 300,180 L 300,380" />
                  <path d="M 550,320 L 550,120 L 300,180" />
                  <path d="M 50,120 L 300,60 L 550,120" />

                  {/* Windows & Doors wireframes */}
                  <path d="M 90,140 L 250,175 L 250,270 L 90,230 Z" stroke="#F4F0E8" strokeWidth="1" />
                  <path d="M 170,157 L 170,250" stroke="#F4F0E8" strokeWidth="0.8" />
                  <path d="M 90,185 L 250,222" stroke="#F4F0E8" strokeWidth="0.8" />

                  {/* Dimension lines */}
                  <line x1="50" y1="335" x2="300" y2="395" stroke="#A66A4C" strokeWidth="0.8" />
                  <text x="160" y="375" fill="#A66A4C" fontSize="10" fontFamily="monospace">
                    SPAN A: 7800mm
                  </text>

                  {/* Floating modular kitchen / living sketch elements */}
                  <rect x="340" y="240" width="160" height="70" stroke="#F4F0E8" strokeWidth="1" />
                  <text x="360" y="280" fill="#F4F0E8" fontSize="10" fontFamily="monospace">
                    TEAK CREDENZA
                  </text>
                  <circle cx="300" cy="180" r="4" fill="#A66A4C" />
                </svg>
                <div className="relative z-10 flex justify-between items-end text-[10px] font-mono text-neutral-400">
                  <span>SCALE 1:50 // CALICUT SITE SURVEY</span>
                  <span>PRELIMINARY ARCHITECTURAL DRAFT</span>
                </div>
              </div>

              {/* STAGE 1: Technical Blueprint CAD */}
              <div
                className={`absolute inset-0 transition-opacity duration-700 p-6 bg-[#0E1520] ${
                  activeStage === 1 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex justify-between text-[10px] font-mono text-cyan-400">
                    <span>CAD COORDINATES: 11.2588° N, 75.8342° E</span>
                    <span>MEP & SPATIAL PLANNING</span>
                  </div>

                  <svg className="w-full h-48 text-cyan-300" viewBox="0 0 500 240" fill="none" stroke="currentColor">
                    <rect x="30" y="20" width="440" height="200" strokeWidth="1.5" />
                    <rect x="50" y="40" width="220" height="160" strokeWidth="1" strokeDasharray="4 2" />
                    <rect x="290" y="40" width="160" height="70" strokeWidth="1" />
                    <rect x="290" y="130" width="160" height="70" strokeWidth="1" />
                    {/* Electrical and lighting symbols */}
                    <circle cx="160" cy="120" r="14" stroke="#F59E0B" strokeWidth="1" />
                    <circle cx="370" cy="75" r="10" stroke="#F59E0B" strokeWidth="1" />
                    <circle cx="370" cy="165" r="10" stroke="#F59E0B" strokeWidth="1" />
                    <line x1="160" y1="120" x2="370" y2="75" stroke="#F59E0B" strokeWidth="0.8" strokeDasharray="2 2" />
                  </svg>

                  <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400">
                    <span>STAGE: 2D BLUEPRINT & CONDUIT ROUTING</span>
                    <span className="text-cyan-400">ZERO TOLERANCE ALIGNMENT</span>
                  </div>
                </div>
              </div>

              {/* STAGE 2: Material & Joinery Study */}
              <div
                className={`absolute inset-0 transition-opacity duration-700 p-6 bg-[#1f1b18] ${
                  activeStage === 2 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="text-[10px] font-mono text-[#A66A4C] flex justify-between">
                    <span>MATERIAL SPECIFICATION BOARD</span>
                    <span>CURATED SENSORY PALETTE</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-auto">
                    <div className="bg-[#5C3E29] p-3 text-left border border-white/10">
                      <div className="h-14 bg-[#3E2718] mb-2 rounded-xs" />
                      <span className="block text-[11px] font-medium text-white">Kerala Teak</span>
                      <span className="text-[9px] font-mono text-neutral-400">Natural Grain</span>
                    </div>
                    <div className="bg-[#E4DACB] p-3 text-left border border-white/10 text-[#171716]">
                      <div className="h-14 bg-[#D1C4B0] mb-2 rounded-xs" />
                      <span className="block text-[11px] font-medium">Travertine</span>
                      <span className="text-[9px] font-mono text-neutral-600">Honed Finish</span>
                    </div>
                    <div className="bg-[#B39352] p-3 text-left border border-white/10 text-[#171716]">
                      <div className="h-14 bg-[#96793B] mb-2 rounded-xs" />
                      <span className="block text-[11px] font-medium">Brushed Brass</span>
                      <span className="text-[9px] font-mono text-neutral-800">Warm Accents</span>
                    </div>
                    <div className="bg-[#3D4438] p-3 text-left border border-white/10">
                      <div className="h-14 bg-[#2C3228] mb-2 rounded-xs" />
                      <span className="block text-[11px] font-medium text-white">Linen Textile</span>
                      <span className="text-[9px] font-mono text-neutral-400">Acoustic Weave</span>
                    </div>
                  </div>

                  <div className="text-[10px] font-mono text-neutral-400 flex justify-between">
                    <span>STAGE: IN-HOUSE JOINERY SELECTION</span>
                    <span className="text-[#A66A4C]">PALAZHI SHOWROOM ARCHIVES</span>
                  </div>
                </div>
              </div>

              {/* STAGE 3: Completed Space (Photographic Reality) */}
              <div
                className={`absolute inset-0 transition-opacity duration-700 ${
                  activeStage === 3 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
                }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
                  alt="Sketch Interiors completed residential interior space in Calicut"
                  className="w-full h-full object-cover brightness-95 contrast-[1.03]"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30" />

                <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-xs border border-white/20 text-[10px] font-mono text-white tracking-widest uppercase">
                  <span>Completed Living Architecture</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end text-white">
                  <div>
                    <span className="text-xs font-serif italic text-[#A66A4C]">Residential Villa Interior</span>
                    <p className="text-sm font-medium">Turnkey Space Handover • Calicut</p>
                  </div>
                  <span className="text-[10px] font-mono text-white/70 bg-black/40 px-2 py-0.5 border border-white/10">
                    [CLIENT ARCHIVE SLOT]
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Interactive Step Switcher */}
            <div className="p-3 bg-neutral-950 border-t border-neutral-800">
              <div className="text-[10px] font-mono text-neutral-400 mb-2 flex items-center justify-between">
                <span>INTERACTIVE TRANSFORMATION STAGES:</span>
                <span className="text-[#A66A4C]">CLICK TO SCRUB</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {stages.map((stage) => (
                  <button
                    key={stage.id}
                    id={`hero-stage-btn-${stage.id}`}
                    onClick={() => {
                      setAutoPlay(false);
                      setActiveStage(stage.id);
                    }}
                    className={`px-2 py-2 text-left text-xs transition-all border ${
                      activeStage === stage.id
                        ? 'bg-[#A66A4C] text-white border-[#A66A4C]'
                        : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700'
                    }`}
                  >
                    <span className="block font-mono text-[10px] tracking-wider uppercase opacity-90">
                      {stage.label}
                    </span>
                    <span className="block text-[11px] font-sans font-medium truncate mt-0.5">
                      {stage.hint}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator & Studio Presence Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 border-t border-[#171716]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#171716]/70">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#A66A4C]" />
          <span>HEADQUARTERS: OPP. HILITE CITY, PALAZHI JUNCTION, KOZHIKODE</span>
        </div>

        <a
          href="#opportunity"
          className="flex items-center gap-2 hover:text-[#A66A4C] transition-colors uppercase tracking-widest text-[11px]"
        >
          <span>SCROLL TO EXPLORE PROPOSAL</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
