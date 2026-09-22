import { X, CheckCircle2, ArrowRight, Printer, ShieldCheck, MapPin } from 'lucide-react';
import { businessData } from '../data/businessData';

interface ProposalSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBrief: () => void;
}

export default function ProposalSummaryModal({ isOpen, onClose, onOpenBrief }: ProposalSummaryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#F4F0E8] text-[#171716] shadow-2xl border border-[#171716]/20 overflow-hidden my-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#171716]/10 bg-[#EFE9DF]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A66A4C]" />
            <span className="text-xs font-mono font-semibold tracking-widest text-[#171716] uppercase">
              EXECUTIVE PROPOSAL BRIEF // SKETCH INTERIORS
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="p-1.5 hover:bg-[#171716]/10 rounded transition-colors text-xs font-mono hidden sm:flex items-center gap-1 text-[#171716]/70"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Brief</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-[#171716]/10 rounded-full transition-colors text-[#171716]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-h-[82vh] overflow-y-auto p-6 sm:p-10 space-y-8 font-sans">
          {/* Header Block */}
          <div className="border-b border-[#171716]/10 pb-6 space-y-2">
            <span className="text-xs font-mono text-[#A66A4C] uppercase tracking-widest block">
              Digital Experience Architecture
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#171716]">
              Web Design &amp; Digital Flagship Proposal
            </h2>
            <p className="text-xs font-mono text-[#171716]/60">
              Prepared for: Sketch Interiors • Headquartered Opp. Hilite City, Palazhi, Calicut
            </p>
          </div>

          {/* Section 1: Executive Thesis */}
          <div className="p-5 bg-[#EFE9DF] border border-[#171716]/10 space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#A66A4C] font-semibold">
              The Strategic Purpose
            </h4>
            <p className="text-sm text-[#171716]/85 leading-relaxed font-serif italic text-base">
              &ldquo;Sketch Interiors already has the most important part of a digital experience — real spaces worth experiencing. Our proposal is to build a digital destination that turns those spaces into stories, those stories into trust, and that trust into conversations.&rdquo;
            </p>
          </div>

          {/* Section 2: Verified Information Audit */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#171716] font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#A66A4C]" />
              Data Integrity &amp; Verified Business Parameters
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-white p-4 border border-[#171716]/10">
              <div>
                <span className="text-neutral-500 block font-mono text-[10px] uppercase">Primary Studio:</span>
                <span className="font-medium">{businessData.headquarters.address}, Kozhikode 673014</span>
              </div>
              <div>
                <span className="text-neutral-500 block font-mono text-[10px] uppercase">Central Kerala Studio:</span>
                <span className="font-medium">{businessData.branch.location}, {businessData.branch.region}</span>
              </div>
              <div>
                <span className="text-neutral-500 block font-mono text-[10px] uppercase">Documented History:</span>
                <span className="font-medium">Est. ~2012 (13+ Years in Kerala)</span>
              </div>
              <div>
                <span className="text-neutral-500 block font-mono text-[10px] uppercase">Team Scale:</span>
                <span className="font-medium">11–50 Design &amp; Execution Staff (LinkedIn Verified)</span>
              </div>
            </div>
          </div>

          {/* Section 3: Proposed Deliverables Scope */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#171716] font-semibold">
              Included Production Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#171716]/85">
              {[
                "Custom Awwwards-Calibre Architecture & Editorial Visual Design",
                "Full-Screen 'From Sketch to Space' Interactive Transformation Engine",
                "Modular Project Case-Study System (Spaces, Ideas, Materials, Results)",
                "Draggable Before/After Renovation Slider (Ready for Client Pairs)",
                "Direct WhatsApp Bridge & Structured Architectural Lead Brief",
                "Live Google Places / Reviews API Sync for 5-Star Reviews",
                "Responsive Mobile-First Architecture with Floating Action Bar",
                "Local SEO Schema (InteriorDesigner / LocalBusiness) for Calicut & Kochi",
                "Zero-Bloat Performance Architecture targeting 90+ Lighthouse score",
                "Turnkey Content Management Setup for effortless project updates",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-[#F9F7F2] p-2.5 border border-[#171716]/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A66A4C] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Implementation Roadmap */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#171716] font-semibold">
              Proposed 4-Week Launch Timeline
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-white border border-[#171716]/10">
                <span className="text-[#A66A4C] font-mono text-[10px] font-bold block">WEEK 01</span>
                <strong className="block mt-1">Asset Audit &amp; Curation</strong>
                <span className="text-[11px] text-neutral-600">High-res photography collection from Calicut &amp; Ernakulam archives.</span>
              </div>
              <div className="p-3 bg-white border border-[#171716]/10">
                <span className="text-[#A66A4C] font-mono text-[10px] font-bold block">WEEK 02</span>
                <strong className="block mt-1">Frontend Engineering</strong>
                <span className="text-[11px] text-neutral-600">Tailwind, React, and interactive SVG drafting line animations.</span>
              </div>
              <div className="p-3 bg-white border border-[#171716]/10">
                <span className="text-[#A66A4C] font-mono text-[10px] font-bold block">WEEK 03</span>
                <strong className="block mt-1">Integrations &amp; SEO</strong>
                <span className="text-[11px] text-neutral-600">Google Business sync, WhatsApp lead routing, and Kerala local schema.</span>
              </div>
              <div className="p-3 bg-white border border-[#171716]/10">
                <span className="text-[#A66A4C] font-mono text-[10px] font-bold block">WEEK 04</span>
                <strong className="block mt-1">Staging &amp; Live Launch</strong>
                <span className="text-[11px] text-neutral-600">Cross-device verification, speed audit, and production domain routing.</span>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-[#171716]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-[#171716]/60">
              Agency Proposal Version 1.0 • 2026
            </span>

            <button
              onClick={() => {
                onClose();
                onOpenBrief();
              }}
              className="px-6 py-3 bg-[#171716] hover:bg-[#A66A4C] text-[#F4F0E8] text-xs font-mono uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <span>Approve &amp; Schedule Kickoff Meeting</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
