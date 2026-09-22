import { processStages } from '../data/businessData';

export default function ProcessSection() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#EFE9DF] border-b border-[#171716]/10 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#171716]/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-mono tracking-widest text-[#A66A4C] uppercase font-semibold">
              07 // CLIENT JOURNEY
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#171716]">
              A THOUGHTFUL, TRANSPARENT PROCESS.
            </h2>
            <p className="font-sans text-sm text-[#171716]/80 leading-relaxed">
              Eliminating the uncertainty of architectural construction with clear, milestone-driven execution.
            </p>
          </div>

          <div className="text-xs font-mono text-[#171716]/60">
            <span>5 PHASES TO HANDOVER</span>
          </div>
        </div>

        {/* 5 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {processStages.map((stage, idx) => (
            <div
              key={stage.step}
              className="p-6 bg-[#F4F0E8] border border-[#171716]/10 hover:border-[#A66A4C] transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#171716]/10 pb-3">
                  <span className="font-serif text-3xl text-[#A66A4C] font-light">
                    {stage.step}
                  </span>
                  <span className="text-[10px] font-mono text-[#171716]/40 uppercase tracking-widest">
                    STAGE 0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl text-[#171716] font-normal">
                    {stage.name}
                  </h3>
                  <p className="font-serif italic text-xs text-[#A66A4C] mt-1">
                    &ldquo;{stage.tagline}&rdquo;
                  </p>
                </div>

                <p className="font-sans text-xs text-[#171716]/75 leading-relaxed pt-2">
                  {stage.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#171716]/10 flex items-center justify-between text-[10px] font-mono text-[#171716]/40">
                <span>SKETCH PROTOCOL</span>
                <span className="group-hover:translate-x-1 transition-transform text-[#171716] font-bold">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
