import { useState } from 'react';
import { Pencil, Compass, Layers, Hammer, Sparkles, Check, ChevronRight } from 'lucide-react';

export default function SketchToSpaceInteractive() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 0,
      code: "STEP 01",
      title: "SKETCH",
      sub: "The Pure Idea",
      icon: Pencil,
      desc: "Every project begins with a hand-drawn architectural sketch. We capture room flow, natural sunlight vectors from Kerala's tropical climate, and preliminary spatial balance.",
      details: [
        "Hand-drawn site conceptualization",
        "Sunlight & tropical cross-ventilation analysis",
        "Client lifestyle & functional zoning",
      ],
      blueprintSpec: "SCALE: 1:50 // FREEHAND CAD INCEPTION",
    },
    {
      id: 1,
      code: "STEP 02",
      title: "SHAPE",
      sub: "Spatial Design & CAD",
      icon: Compass,
      desc: "The pencil lines crystallize into calibrated millimeter-exact floor plans, 3D volumetric massing, and functional circulation pathways.",
      details: [
        "2D Millimeter architectural drawings",
        "3D Photorealistic virtual walkthroughs",
        "False ceiling & lighting cove schematics",
      ],
      blueprintSpec: "CALIBRATED CAD // ZERO TOLERANCE ALIGNMENT",
    },
    {
      id: 2,
      code: "STEP 03",
      title: "MATERIALISE",
      sub: "Tactile Materials",
      icon: Layers,
      desc: "We touch and select physical swatches — seasoned Kerala teak, Italian travertine stone, brushed warm brass, and acoustic natural linen drapery.",
      details: [
        "In-person material board reviews in Calicut",
        "Moisture-resistant core substrate selection",
        "Hardware pairing with premium German systems",
      ],
      blueprintSpec: "MATERIAL BOARD: TEAK • STONE • BRASS • LINEN",
    },
    {
      id: 3,
      code: "STEP 04",
      title: "BUILD",
      sub: "Execution & MEP",
      icon: Hammer,
      desc: "Our project managers and site engineers deploy. Custom modular furniture units are precision-manufactured while concealed electrical and plumbing lines are installed.",
      details: [
        "Concealed ducted HVAC & conduit routing",
        "Factory-precision joinery & wardrobe crafting",
        "Rigorous weekly site milestone supervision",
      ],
      blueprintSpec: "ON-SITE TURKEY SUPERVISION & MEP COORDINATION",
    },
    {
      id: 4,
      code: "STEP 05",
      title: "LIVE",
      sub: "Finished Living Space",
      icon: Sparkles,
      desc: "Snag lists resolved, mood lighting calibrated, surfaces detailed. The conceptual sketch has transformed into a living, breathing sanctuary.",
      details: [
        "White-glove handover & deep sanitization",
        "Smart lighting presets & appliance commissioning",
        "Post-occupancy warranty & maintenance support",
      ],
      blueprintSpec: "COMPLETED ARCHITECTURAL HANDOVER",
    },
  ];

  return (
    <section id="sketch-to-space" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F0E8] border-b border-[#171716]/10 relative">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#171716]/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-mono tracking-widest text-[#A66A4C] uppercase font-semibold">
              05 // SIGNATURE INTERACTIVE CONCEPT
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#171716]">
              THE SKETCH TO SPACE PROCESS.
            </h2>
            <p className="font-sans text-sm text-[#171716]/80 max-w-xl">
              An architectural progression communicating how ideas evolve into environments through craftsmanship, materials, and execution.
            </p>
          </div>

          <div className="text-xs font-mono text-[#171716]/60">
            <span>INTERACTIVE PRESENTATION MODULE</span>
          </div>
        </div>

        {/* Step Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            const isCurrent = activeStep === idx;
            return (
              <button
                key={s.id}
                id={`sketch-space-step-btn-${idx}`}
                onClick={() => setActiveStep(idx)}
                className={`p-4 text-left border transition-all duration-200 relative ${
                  isCurrent
                    ? 'bg-[#171716] text-[#F4F0E8] border-[#171716] shadow-md'
                    : 'bg-[#EFE9DF] text-[#171716] border-[#171716]/10 hover:border-[#A66A4C]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-mono ${isCurrent ? 'text-[#A66A4C]' : 'text-[#171716]/50'}`}>
                    {s.code}
                  </span>
                  <Icon className={`w-4 h-4 ${isCurrent ? 'text-[#A66A4C]' : 'text-[#171716]/60'}`} />
                </div>
                <h4 className="font-serif text-base sm:text-lg font-medium tracking-tight">
                  {s.title}
                </h4>
                <p className={`text-[11px] truncate mt-0.5 ${isCurrent ? 'text-neutral-400' : 'text-[#171716]/60'}`}>
                  {s.sub}
                </p>
                {isCurrent && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#A66A4C]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Visual Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[#171716] text-[#F4F0E8] border border-[#2B231D] shadow-xl p-6 sm:p-8">
          {/* Visual Display Screen */}
          <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] bg-neutral-900 border border-neutral-800 overflow-hidden flex flex-col justify-between p-6">
            <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

            {/* Content Layer based on active step */}
            {activeStep === 0 && (
              <div className="relative z-10 h-full flex flex-col justify-between animate-in fade-in duration-300">
                <div className="text-[11px] font-mono text-[#A66A4C] flex justify-between">
                  <span>01 / PENCIL INCEPTION</span>
                  <span>CALICUT VILLA SKETCH</span>
                </div>
                <svg className="w-full h-56 text-[#A66A4C]" viewBox="0 0 500 240" fill="none" stroke="currentColor">
                  {/* Freehand styled architectural room */}
                  <path d="M 40,190 Q 250,220 460,190" strokeWidth="1.5" strokeDasharray="6 3" />
                  <path d="M 40,190 L 40,60 Q 250,85 460,60 L 460,190" strokeWidth="1.2" />
                  <path d="M 250,85 L 250,220" strokeWidth="1" strokeDasharray="3 3" />
                  <rect x="70" y="80" width="130" height="90" stroke="#F4F0E8" strokeWidth="1" />
                  <path d="M 280,130 Q 370,110 440,130" stroke="#F4F0E8" strokeWidth="1.5" />
                  <text x="320" y="160" fill="#F4F0E8" fontSize="11" fontFamily="monospace">
                    LIVING VOID
                  </text>
                  <circle cx="250" cy="85" r="4" fill="#A66A4C" />
                </svg>
                <div className="text-[10px] font-mono text-neutral-400">
                  <span>{steps[activeStep].blueprintSpec}</span>
                </div>
              </div>
            )}

            {activeStep === 1 && (
              <div className="relative z-10 h-full flex flex-col justify-between animate-in fade-in duration-300">
                <div className="text-[11px] font-mono text-cyan-400 flex justify-between">
                  <span>02 / CAD SPATIAL BLUEPRINT</span>
                  <span>MEP & CLEARANCES</span>
                </div>
                <div className="my-auto p-4 bg-black/40 border border-cyan-500/20 font-mono text-xs text-cyan-300 space-y-2">
                  <div className="flex justify-between border-b border-cyan-500/20 pb-1">
                    <span>LIVING VOID HEIGHT</span>
                    <span>6,800 mm</span>
                  </div>
                  <div className="flex justify-between border-b border-cyan-500/20 pb-1">
                    <span>DINING EXPANSION</span>
                    <span>4,200 mm</span>
                  </div>
                  <div className="flex justify-between border-b border-cyan-500/20 pb-1">
                    <span>MODULAR KITCHEN CLEARANCE</span>
                    <span>1,200 mm AISLE</span>
                  </div>
                  <div className="flex justify-between text-yellow-300">
                    <span>CONDUIT PATH: DUCTED HVAC</span>
                    <span>APPROVED</span>
                  </div>
                </div>
                <div className="text-[10px] font-mono text-neutral-400">
                  <span>{steps[activeStep].blueprintSpec}</span>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="relative z-10 h-full flex flex-col justify-between animate-in fade-in duration-300">
                <div className="text-[11px] font-mono text-[#A66A4C] flex justify-between">
                  <span>03 / TACTILE PALETTE</span>
                  <span>AUTHENTIC SOURCING</span>
                </div>
                <div className="grid grid-cols-2 gap-3 my-auto">
                  <div className="p-3 bg-[#422919] border border-white/10 text-xs">
                    <span className="text-[#A66A4C] font-mono text-[10px] block">WOOD</span>
                    <strong className="text-white block mt-0.5">Kerala Seasoned Teak</strong>
                    <span className="text-[10px] text-neutral-300">Custom joinery & consoles</span>
                  </div>
                  <div className="p-3 bg-[#DCD4C7] text-[#171716] border border-white/10 text-xs">
                    <span className="text-neutral-600 font-mono text-[10px] block">STONE</span>
                    <strong className="block mt-0.5">Honed Roman Travertine</strong>
                    <span className="text-[10px] text-neutral-700">Fluted feature partition</span>
                  </div>
                  <div className="p-3 bg-[#94783E] text-white border border-white/10 text-xs">
                    <span className="text-yellow-200 font-mono text-[10px] block">METAL</span>
                    <strong className="block mt-0.5">Brushed Antique Brass</strong>
                    <span className="text-[10px] text-neutral-200">Hardware & lighting trims</span>
                  </div>
                  <div className="p-3 bg-[#383E34] text-white border border-white/10 text-xs">
                    <span className="text-neutral-300 font-mono text-[10px] block">FABRIC</span>
                    <strong className="block mt-0.5">Woven Belgian Linen</strong>
                    <span className="text-[10px] text-neutral-300">Acoustic window drapery</span>
                  </div>
                </div>
                <div className="text-[10px] font-mono text-neutral-400">
                  <span>{steps[activeStep].blueprintSpec}</span>
                </div>
              </div>
            )}

            {activeStep === 3 && (
              <div className="relative z-10 h-full flex flex-col justify-between animate-in fade-in duration-300">
                <div className="text-[11px] font-mono text-amber-400 flex justify-between">
                  <span>04 / ON-SITE FABRICATION</span>
                  <span>TURNKEY EXECUTION</span>
                </div>
                <div className="my-auto space-y-3 font-mono text-xs">
                  <div className="p-3 bg-neutral-950 border-l-2 border-amber-500">
                    <span className="text-amber-400 font-semibold block">FACTORY JOINERY UNIT</span>
                    <p className="text-neutral-300 text-[11px] mt-0.5">Modular cabinetry fabricated with 0.1mm CNC tolerance in Kozhikode.</p>
                  </div>
                  <div className="p-3 bg-neutral-950 border-l-2 border-amber-500">
                    <span className="text-amber-400 font-semibold block">MEP COORDINATION</span>
                    <p className="text-neutral-300 text-[11px] mt-0.5">Direct supervision of plumbing conduits and concealed electrical lines.</p>
                  </div>
                </div>
                <div className="text-[10px] font-mono text-neutral-400">
                  <span>{steps[activeStep].blueprintSpec}</span>
                </div>
              </div>
            )}

            {activeStep === 4 && (
              <div className="absolute inset-0 animate-in fade-in duration-500">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
                  alt="Completed space by Sketch Interiors"
                  className="w-full h-full object-cover brightness-95"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white">
                  <div>
                    <span className="text-xs font-serif italic text-[#A66A4C]">The Living Result</span>
                    <p className="font-serif text-2xl font-light">Turnkey Residence Delivered</p>
                  </div>
                  <span className="px-2.5 py-1 bg-black/60 border border-white/20 text-[10px] font-mono text-[#F4F0E8]">
                    [VERIFIED SPACE]
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Text Narrative Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-widest text-[#A66A4C] uppercase font-semibold">
                {steps[activeStep].code} // {steps[activeStep].sub}
              </span>
              <h3 className="font-serif text-3xl font-light text-white">
                {steps[activeStep].title}
              </h3>
              <p className="font-sans text-sm text-neutral-300 leading-relaxed">
                {steps[activeStep].desc}
              </p>

              <div className="pt-4 space-y-2.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block">
                  Stage Deliverables:
                </span>
                {steps[activeStep].details.map((d, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-neutral-200">
                    <Check className="w-3.5 h-3.5 text-[#A66A4C] shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-800 flex items-center justify-between">
              <button
                id="sketch-space-prev-btn"
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 border border-neutral-700 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white hover:border-neutral-500 disabled:opacity-30 disabled:pointer-events-none"
              >
                Previous
              </button>

              <div className="text-xs font-mono text-[#A66A4C]">
                0{activeStep + 1} / 05
              </div>

              <button
                id="sketch-space-next-btn"
                disabled={activeStep === 4}
                onClick={() => setActiveStep((prev) => Math.min(4, prev + 1))}
                className="px-4 py-2 bg-[#A66A4C] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#8e573d] disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1"
              >
                <span>Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
