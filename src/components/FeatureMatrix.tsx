import { proposedFeatures } from '../data/businessData';
import { Layers, CheckCircle } from 'lucide-react';

export default function FeatureMatrix() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F4F0E8] border-b border-[#171716]/10 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#171716]/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-mono tracking-widest text-[#A66A4C] uppercase font-semibold">
              10 // TECHNICAL & FUNCTIONAL SPECIFICATION
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#171716]">
              MORE THAN A WEBSITE.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#171716]/80 leading-relaxed">
              A comprehensive digital ecosystem built for performance, mobile conversion, search supremacy, and frictionless enquiry management.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171716] text-[#F4F0E8] text-xs font-mono">
            <Layers className="w-3.5 h-3.5 text-[#A66A4C]" />
            <span>14 PROPOSED PLATFORM CAPABILITIES</span>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {proposedFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#EFE9DF] border border-[#171716]/10 hover:border-[#A66A4C] transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#A66A4C]">0{idx + 1}</span>
                  <CheckCircle className="w-3.5 h-3.5 text-[#A66A4C]" />
                </div>
                <h4 className="font-serif text-lg text-[#171716] font-medium">
                  {feat.title}
                </h4>
                <p className="font-sans text-xs text-[#171716]/75 leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-[#171716]/10 text-[9px] font-mono text-[#171716]/50 uppercase tracking-wider">
                Proposed Architecture
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
