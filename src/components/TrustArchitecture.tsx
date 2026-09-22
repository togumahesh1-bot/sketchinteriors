import { Star, ShieldCheck, MapPin, Phone, Building, CheckCircle2, Lock } from 'lucide-react';
import { businessData } from '../data/businessData';

interface TrustArchitectureProps {
  pitchMode: boolean;
}

export default function TrustArchitecture({ pitchMode }: TrustArchitectureProps) {
  return (
    <section id="trust" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F4F0E8] border-b border-[#171716]/10 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#171716]/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-mono tracking-widest text-[#A66A4C] uppercase font-semibold">
              08 // TRUST & REPUTATION ARCHITECTURE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#171716]">
              WHY THE DIGITAL EXPERIENCE MUST BUILD TRUST.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#171716]/80 leading-relaxed">
              Commissioning a ₹25 Lakh to ₹2 Crore interior project is one of the highest-trust decisions a family or business ever makes. A credible website replaces hesitation with confidence.
            </p>
          </div>

          <div className="text-xs font-mono text-[#171716]/60">
            <span>TRANSPARENT REPUTATION METRICS</span>
          </div>
        </div>

        {/* 6 Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-[#EFE9DF] border border-[#171716]/10 space-y-4">
            <div className="flex items-center justify-between">
              <Building className="w-5 h-5 text-[#A66A4C]" />
              <span className="text-[10px] font-mono text-[#171716]/50">PILLAR 01</span>
            </div>
            <h3 className="font-serif text-xl text-[#171716]">Real Physical Locations</h3>
            <p className="font-sans text-xs text-[#171716]/75 leading-relaxed">
              A verified showroom opposite Hilite City, Palazhi, Calicut and a studio in Kundannur, Ernakulam. Prospective clients can physically visit material libraries and discuss plans.
            </p>
            <span className="text-[10px] font-mono text-[#A66A4C] block pt-2 uppercase">
              Physical Showroom Accountability
            </span>
          </div>

          <div className="p-6 bg-[#EFE9DF] border border-[#171716]/10 space-y-4">
            <div className="flex items-center justify-between">
              <ShieldCheck className="w-5 h-5 text-[#A66A4C]" />
              <span className="text-[10px] font-mono text-[#171716]/50">PILLAR 02</span>
            </div>
            <h3 className="font-serif text-xl text-[#171716]">Transparent Documentation</h3>
            <p className="font-sans text-xs text-[#171716]/75 leading-relaxed">
              Never invent fake statistics or imaginary awards. Showing authentic drawings, material specs, and real Kerala project sites builds authentic authority.
            </p>
            <span className="text-[10px] font-mono text-[#A66A4C] block pt-2 uppercase">
              Zero Marketing Fabrication
            </span>
          </div>

          <div className="p-6 bg-[#EFE9DF] border border-[#171716]/10 space-y-4">
            <div className="flex items-center justify-between">
              <Lock className="w-5 h-5 text-[#A66A4C]" />
              <span className="text-[10px] font-mono text-[#171716]/50">PILLAR 03</span>
            </div>
            <h3 className="font-serif text-xl text-[#171716]">Turnkey Accountability</h3>
            <p className="font-sans text-xs text-[#171716]/75 leading-relaxed">
              Single-point coordination eliminating finger-pointing between independent carpenters, false-ceiling vendors, plumbers, and electrical contractors.
            </p>
            <span className="text-[10px] font-mono text-[#A66A4C] block pt-2 uppercase">
              One Responsible Partner
            </span>
          </div>
        </div>

        {/* Google Reviews & Directory Data Display */}
        <div className="p-8 bg-[#171716] text-[#F4F0E8] border border-[#2B231D] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[11px] font-mono tracking-widest text-[#A66A4C] uppercase font-semibold block">
              VERIFIED CUSTOMER EVALUATIONS
            </span>
            <h3 className="font-serif text-3xl font-light text-white">
              Google Business &amp; Directory Ratings.
            </h3>
            <p className="font-sans text-xs text-neutral-400 leading-relaxed">
              In accordance with our strict data integrity policy, we display documented business ratings without manufacturing fictional reviews.
            </p>

            <div className="pt-2 flex items-baseline gap-4">
              <span className="font-serif text-5xl text-white font-light">4.0</span>
              <div className="space-y-1">
                <div className="flex text-amber-400 gap-1">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <Star className="w-4 h-4 text-neutral-600" />
                </div>
                <p className="text-[11px] font-mono text-neutral-400">
                  Based on 166+ client ratings in Kozhikode directory profiles
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-neutral-900 p-6 border border-neutral-800 space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3 text-xs font-mono text-neutral-400">
              <span className="text-white font-medium">GOOGLE REVIEWS API INTEGRATION</span>
              <span className="text-[#A66A4C]">PRODUCTION READY</span>
            </div>

            <div className="space-y-3 font-sans text-xs text-neutral-300">
              <p className="leading-relaxed">
                <strong>Live Review Integration Architecture:</strong> During deployment, we will connect the official Google Places API to stream 5-star Google Business reviews live onto the website.
              </p>
              <div className="p-3 bg-neutral-950 border border-neutral-800 font-mono text-[11px] text-neutral-400 space-y-1">
                <div className="text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Google Business Profile ID: Verified [Calicut Palazhi Listing]</span>
                </div>
                <div>Automated schema markup (AggregateRating) enables gold star snippets on Google search results.</div>
              </div>
            </div>

            <p className="text-[11px] font-mono text-neutral-500 italic">
              * Per agency guidelines: authentic client reviews will be synced directly upon authorization. No placeholder text or invented testimonials will be used.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
