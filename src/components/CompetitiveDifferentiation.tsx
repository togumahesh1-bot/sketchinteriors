import { ArrowRight, Check, X } from 'lucide-react';
import { comparisonData } from '../data/businessData';

export default function CompetitiveDifferentiation() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#EFE9DF] border-b border-[#171716]/10 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#171716]/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-mono tracking-widest text-[#A66A4C] uppercase font-semibold">
              09 // DIGITAL STANDARD & POSITIONING
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#171716]">
              THE DIGITAL STANDARD WE ARE DESIGNING TOWARD.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#171716]/80 leading-relaxed">
              Designed not to shout, but to create an unmistakably elevated experience that separates Sketch Interiors from generic contractor directories.
            </p>
          </div>

          <div className="text-xs font-mono text-[#171716]/60">
            <span>BENCHMARK COMPARISON</span>
          </div>
        </div>

        {/* Comparison Table / Grid */}
        <div className="divide-y divide-[#171716]/15 border-t border-b border-[#171716]/15 bg-[#F4F0E8]">
          <div className="hidden lg:grid grid-cols-12 gap-6 p-4 font-mono text-xs uppercase tracking-wider text-[#171716]/60 bg-[#EFE9DF]">
            <div className="col-span-3">EXPERIENCE ELEMENT</div>
            <div className="col-span-4">GENERIC INTERIOR WEBSITE</div>
            <div className="col-span-5 text-[#A66A4C] font-semibold">SKETCH INTERIORS PROPOSED EXPERIENCE</div>
          </div>

          {comparisonData.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 p-6 items-center hover:bg-white transition-colors duration-150"
            >
              <div className="lg:col-span-3 font-serif text-lg text-[#171716]">
                <span className="text-xs font-mono text-[#A66A4C] block lg:hidden uppercase tracking-wider mb-1">
                  Element:
                </span>
                {item.feature}
              </div>

              <div className="lg:col-span-4 space-y-1 text-xs font-sans text-[#171716]/60 bg-red-500/5 p-3 rounded-xs border border-red-500/10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-red-700 font-semibold block flex items-center gap-1">
                  <X className="w-3 h-3 text-red-600" />
                  Conventional Standard:
                </span>
                <p>{item.standard}</p>
              </div>

              <div className="lg:col-span-5 space-y-1 text-xs font-sans text-[#171716]/90 bg-[#A66A4C]/10 p-3 rounded-xs border border-[#A66A4C]/25">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#A66A4C] font-semibold block flex items-center gap-1">
                  <Check className="w-3 h-3 text-[#A66A4C]" />
                  Sketch Interiors Proposed Direction:
                </span>
                <p className="font-medium text-[#171716]">{item.proposed}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-[#F4F0E8] border border-[#171716]/10 text-xs font-mono text-[#171716]/75 text-center">
          <span>&ldquo;Designed to create a more distinctive, enduring digital experience.&rdquo;</span>
        </div>
      </div>
    </section>
  );
}
