import { ArrowRight, CheckCircle2, FileDown, Sparkles } from 'lucide-react';
import { businessData } from '../data/businessData';

interface TheNextSketchProps {
  onOpenBrief: () => void;
  onOpenProposalModal: () => void;
}

export default function TheNextSketch({ onOpenBrief, onOpenProposalModal }: TheNextSketchProps) {
  return (
    <section id="proposal" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F4F0E8] border-b border-[#171716]/10 relative">
      <div className="max-w-5xl mx-auto space-y-16 text-center">
        {/* Top Marker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171716]/5 border border-[#171716]/10 text-xs font-mono tracking-widest uppercase text-[#171716]/75">
          <Sparkles className="w-3.5 h-3.5 text-[#A66A4C]" />
          <span>PROPOSAL CONCLUSION // 2026</span>
        </div>

        {/* Big Editorial Headline */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#171716] tracking-tight">
            THE NEXT <span className="italic text-[#A66A4C]">SKETCH</span>.
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#171716]/85 leading-relaxed">
            A considered digital experience can do more than display projects. It can communicate how Sketch Interiors thinks, how it designs, and why a discerning client should begin a conversation.
          </p>
        </div>

        {/* The 5-Part Formula Cards */}
        <div className="p-8 bg-[#EFE9DF] border border-[#171716]/15 max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A66A4C] font-semibold block">
            PROPOSED WEBSITE EXPERIENCE FORMULA
          </span>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono uppercase tracking-wider text-[#171716]">
            <span className="px-3 py-1.5 bg-white border border-[#171716]/10 font-medium">01 BRAND</span>
            <span className="text-[#A66A4C] font-bold">+</span>
            <span className="px-3 py-1.5 bg-white border border-[#171716]/10 font-medium">02 PORTFOLIO</span>
            <span className="text-[#A66A4C] font-bold">+</span>
            <span className="px-3 py-1.5 bg-white border border-[#171716]/10 font-medium">03 STORY</span>
            <span className="text-[#A66A4C] font-bold">+</span>
            <span className="px-3 py-1.5 bg-white border border-[#171716]/10 font-medium">04 TRUST</span>
            <span className="text-[#A66A4C] font-bold">+</span>
            <span className="px-3 py-1.5 bg-white border border-[#171716]/10 font-medium">05 LEAD GENERATION</span>
          </div>

          <div className="pt-4 border-t border-[#171716]/10 max-w-2xl mx-auto">
            <blockquote className="font-serif italic text-lg sm:text-xl text-[#171716]/90 leading-relaxed">
              &ldquo;Sketch Interiors already has the most important part of a digital experience — real spaces worth experiencing. Our proposal is to build a digital destination that turns those spaces into stories, those stories into trust, and that trust into conversations.&rdquo;
            </blockquote>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            id="build-the-experience-cta-btn"
            onClick={onOpenBrief}
            className="px-8 py-4 bg-[#171716] text-[#F4F0E8] text-xs font-semibold tracking-widest uppercase hover:bg-[#A66A4C] transition-all duration-300 flex items-center gap-3 group shadow-xl"
          >
            <span>Let&apos;s Build The Experience</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            id="open-executive-summary-btn"
            onClick={onOpenProposalModal}
            className="px-6 py-4 border border-[#171716]/30 bg-transparent text-[#171716] text-xs font-semibold tracking-widest uppercase hover:border-[#171716] hover:bg-[#171716]/5 transition-all flex items-center gap-2"
          >
            <span>Review Full Deliverables Brief</span>
            <FileDown className="w-4 h-4 text-[#A66A4C]" />
          </button>
        </div>
      </div>
    </section>
  );
}
