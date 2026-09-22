import { proposedPillars } from '../data/businessData';

interface ProposedDirectionProps {
  pitchMode: boolean;
}

export default function ProposedDirection({ pitchMode }: ProposedDirectionProps) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#171716] text-[#F4F0E8] relative overflow-hidden">
      {/* Drafting Lines in Dark */}
      <div className="absolute inset-0 architectural-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Header with Proposal Markers */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-800 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-[10px] font-mono tracking-widest text-[#A66A4C] uppercase">
              <span>DIGITAL EXPERIENCE ARCHITECTURE // 04</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-white">
              THE DIGITAL EXPERIENCE WE ENVISION.
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 max-w-xl">
              Five strategic pillars designed to position Sketch Interiors as the definitive architectural interior studio for high-value residential and commercial clients.
            </p>
          </div>

          <div className="font-mono text-xs text-neutral-400 space-y-1">
            <p className="text-white">PROPOSED DIRECTION // 2026</p>
            <p className="text-[#A66A4C]">Craftsmanship • Conversion • Credibility</p>
          </div>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {proposedPillars.map((pillar) => (
            <div
              key={pillar.number}
              className="p-6 bg-neutral-900/90 border border-neutral-800 hover:border-[#A66A4C] transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <span className="font-serif text-3xl font-light text-[#A66A4C] group-hover:translate-x-1 transition-transform inline-block">
                  {pillar.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-white tracking-wide">
                    {pillar.title}
                  </h3>
                  <span className="text-[11px] font-mono text-[#A66A4C] tracking-wider uppercase block mt-0.5">
                    {pillar.subtitle}
                  </span>
                </div>
                <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-800 text-[10px] font-mono text-neutral-400 flex items-center justify-between">
                <span>SKETCH PILLAR</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#A66A4C] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {pitchMode && (
          <div className="p-4 bg-neutral-950 border border-[#A66A4C]/40 text-xs font-sans rounded-xs space-y-1.5">
            <span className="font-mono text-[#A66A4C] font-semibold block">STRATEGIC ROI SUMMARY:</span>
            <p className="text-neutral-300 leading-relaxed">
              When high-net-worth villa owners search for &ldquo;interior designers in Calicut&rdquo; or &ldquo;luxury turnkey interiors Ernakulam&rdquo;, they judge the firm&apos;s attention to detail by their digital presence. A flawless, story-driven portfolio builds instant confidence, reducing client price resistance and shortening consultation sales cycles by over 40%.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
