import { useState } from 'react';
import { Plus, Minus, ArrowRight, Check } from 'lucide-react';
import { servicesData } from '../data/businessData';

interface ServicesSectionProps {
  onOpenBrief: () => void;
}

export default function ServicesSection({ onOpenBrief }: ServicesSectionProps) {
  const [expandedService, setExpandedService] = useState<string | null>('srv-01');

  const toggleService = (id: string) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <section id="services" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F4F0E8] border-b border-[#171716]/10 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#171716]/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-mono tracking-widest text-[#A66A4C] uppercase font-semibold">
              04 // CAPABILITIES & SCOPE
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#171716] tracking-tight">
              FROM IDEA TO EXECUTION.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#171716]/80 leading-relaxed">
              Every service is backed by Sketch Interiors&apos; verified in-house design team, joinery manufacturing, and on-site engineering in Kerala.
            </p>
          </div>

          <div className="text-xs font-mono text-[#171716]/60 text-left md:text-right">
            <p className="font-semibold text-[#171716]">END-TO-END DISCIPLINE</p>
            <p>Single Point Responsibility</p>
          </div>
        </div>

        {/* Large Editorial Service Blocks */}
        <div className="divide-y divide-[#171716]/15 border-t border-b border-[#171716]/15">
          {servicesData.map((service) => {
            const isExpanded = expandedService === service.id;
            return (
              <div
                key={service.id}
                className="py-8 transition-colors duration-200 group"
              >
                <div
                  onClick={() => toggleService(service.id)}
                  className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-baseline gap-6 sm:gap-12">
                    <span className="font-serif text-2xl sm:text-3xl text-[#A66A4C] font-light w-8">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#171716] font-normal group-hover:text-[#A66A4C] transition-colors">
                        {service.title}
                      </h3>
                      <span className="text-xs font-mono text-[#171716]/55 tracking-wider uppercase mt-1 block">
                        {service.tag} • {service.scope}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-end lg:self-auto">
                    <span className="text-xs font-mono text-[#171716]/60 hidden sm:inline">
                      {isExpanded ? 'CLOSE SPECIFICATIONS' : 'VIEW SCOPE'}
                    </span>
                    <div className="w-9 h-9 rounded-full border border-[#171716]/20 flex items-center justify-center text-[#171716] group-hover:border-[#A66A4C] group-hover:text-[#A66A4C] transition-colors">
                      {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Expandable Specifications Area */}
                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-[#171716]/10 grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-300">
                    <div className="lg:col-span-5 space-y-3">
                      <p className="font-sans text-sm sm:text-base text-[#171716]/85 leading-relaxed">
                        {service.shortDesc}
                      </p>
                      <button
                        id={`service-discuss-btn-${service.id}`}
                        onClick={onOpenBrief}
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A66A4C] hover:text-[#171716] transition-colors pt-2"
                      >
                        <span>Discuss This Scope</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="lg:col-span-7 bg-[#EFE9DF] p-6 border border-[#171716]/10 space-y-3">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#A66A4C] font-semibold block">
                        Verified Technical Deliverables:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.deliverables.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#171716]/80 font-sans">
                            <Check className="w-3.5 h-3.5 text-[#A66A4C] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="p-8 bg-[#171716] text-[#F4F0E8] border border-[#2B231D] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-2xl font-light text-white">
              Need a bespoke scope combining design, joinery, and MEP?
            </h4>
            <p className="font-sans text-xs text-neutral-400">
              We coordinate all trades under a single, accountable turnkey contract in Calicut and Ernakulam.
            </p>
          </div>

          <button
            id="services-turnkey-brief-btn"
            onClick={onOpenBrief}
            className="px-6 py-3 bg-[#A66A4C] hover:bg-[#8e573d] text-white text-xs font-mono uppercase tracking-wider shrink-0 transition-colors"
          >
            Request Turnkey Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
