import { Sparkles, Check, ArrowRight } from 'lucide-react';
import { businessData } from '../data/businessData';

interface OpportunitySectionProps {
  pitchMode: boolean;
  onExploreWork: () => void;
}

export default function OpportunitySection({ pitchMode, onExploreWork }: OpportunitySectionProps) {
  return (
    <section id="opportunity" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#EFE9DF] border-t border-b border-[#171716]/10 overflow-hidden">
      {/* Drafting Lines Overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full stroke-current text-[#171716]">
          <circle cx="100" cy="100" r="80" strokeWidth="0.5" fill="none" strokeDasharray="4 4" />
          <line x1="20" y1="100" x2="180" y2="100" strokeWidth="0.5" />
          <line x1="100" y1="20" x2="100" y2="180" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Indicator */}
        <div className="flex items-center gap-3 mb-8 text-[11px] font-mono tracking-widest text-[#171716]/60 uppercase">
          <span className="text-[#A66A4C] font-semibold">01 // THE STRATEGIC OPPORTUNITY</span>
          <span>•</span>
          <span>SKETCH INTERIORS DIGITAL ELEVATION</span>
        </div>

        {/* Editorial Split Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Large Typography */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#171716] leading-[1.08] tracking-tight">
              YOUR WORK DESERVES A DIGITAL SPACE AS <span className="italic font-normal text-[#A66A4C]">CONSIDERED</span> AS THE SPACES YOU CREATE.
            </h2>

            <div className="p-6 bg-[#F4F0E8] border border-[#171716]/10 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A66A4C] font-semibold block">
                The Agency Vision
              </span>
              <blockquote className="font-serif text-xl sm:text-2xl text-[#171716] italic leading-relaxed">
                &ldquo;Sketch Interiors already has the most important part of a digital experience — real spaces worth experiencing. Our proposal is to build a digital destination that turns those spaces into stories, those stories into trust, and that trust into conversations.&rdquo;
              </blockquote>
            </div>

            {pitchMode && (
              <div className="p-4 bg-[#171716] text-[#F4F0E8] text-xs font-sans rounded-xs border-l-2 border-[#A66A4C] space-y-1">
                <span className="font-mono text-[#A66A4C] font-bold block">PITCH CONTEXT FOR SKETCH INTERIORS:</span>
                <p className="text-neutral-300 leading-relaxed">
                  In Kerala’s booming luxury residential market (Calicut, Kochi, Malappuram), high-net-worth homeowners research extensively on mobile before commissioning turnkey architects. A generic template loses 70% of potential leads; a curated architectural narrative converts interest into qualified studio appointments.
                </p>
              </div>
            )}
          </div>

          {/* Right: Short Explanation & Strengths Integration */}
          <div className="lg:col-span-5 space-y-8 lg:pt-2">
            <div className="space-y-4">
              <p className="font-sans text-base sm:text-lg text-[#171716]/80 leading-relaxed">
                Over more than a decade in Calicut and Ernakulam, Sketch Interiors has cultivated the rarest asset in the design industry: <strong>tangible craftsmanship, verified local trust, and complete turnkey execution</strong>.
              </p>
              <p className="font-sans text-sm text-[#171716]/70 leading-relaxed">
                This proposal does not suggest reinventing what you do. It presents a world-class digital vessel that organizes your modular furniture units, interior execution, MEP mastery, and living spaces into a cohesive online flagship.
              </p>
            </div>

            {/* Current Real-World Foundation */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#171716]/70 block font-semibold">
                Your Existing Real-World Assets:
              </span>

              <div className="space-y-2.5">
                {[
                  { title: "Physical Studio Presence", detail: "Opp. Hilite City, Palazhi, Calicut & Kundannur, Ernakulam" },
                  { title: "13+ Years of Regional Experience", detail: "Established ~2012 with enduring presence across Malabar & Central Kerala" },
                  { title: "11–50 Multidisciplinary Team", detail: "In-house space designers, 3D visualizers, joinery craftsmen, and MEP engineers" },
                  { title: "Complete Turnkey Capability", detail: "Single-point ownership from structural bare walls to custom furniture handover" },
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 bg-[#F4F0E8]/70 border border-[#171716]/10 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#171716] text-[#F4F0E8] text-[10px] font-mono flex items-center justify-center shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="text-xs font-semibold text-[#171716] uppercase tracking-wider">{item.title}</h4>
                      <p className="text-xs text-[#171716]/70 mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              id="opportunity-view-gallery-btn"
              onClick={onExploreWork}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#171716] hover:text-[#A66A4C] border-b border-[#171716]/30 pb-1 hover:border-[#A66A4C] transition-all"
            >
              <span>See How We Propose Presenting Your Work</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
