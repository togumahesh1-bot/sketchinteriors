import { MapPin, Navigation, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { businessData } from '../data/businessData';

interface LocationSectionProps {
  onOpenBrief: () => void;
}

export default function LocationSection({ onOpenBrief }: LocationSectionProps) {
  return (
    <section id="location" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F4F0E8] border-b border-[#171716]/10 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#171716]/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-mono tracking-widest text-[#A66A4C] uppercase font-semibold">
              11 // PHYSICAL PRESENCE & STUDIOS
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#171716]">
              COME SEE THE SPACE.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#171716]/80 leading-relaxed">
              Experience material boards, inspect modular joinery samples, and review CAD drafts with our design team at our Calicut showroom opposite Hilite City.
            </p>
          </div>

          <div className="text-xs font-mono text-[#171716]/60">
            <span>CALICUT &amp; ERNAKULAM STUDIOS</span>
          </div>
        </div>

        {/* Studio Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Headquarters: Calicut */}
          <div className="lg:col-span-7 bg-[#EFE9DF] border border-[#171716]/15 p-8 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#171716]/10 pb-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#A66A4C] font-semibold">
                    Primary Studio &amp; Showroom
                  </span>
                  <h3 className="font-serif text-3xl text-[#171716] mt-1">
                    {businessData.headquarters.city}
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 bg-[#171716] text-[#F4F0E8]">
                  HEADQUARTERS
                </span>
              </div>

              {/* Verified Address & Details */}
              <div className="space-y-4 font-sans text-sm text-[#171716]/85">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#A66A4C] shrink-0 mt-1" />
                  <div>
                    <strong className="block font-medium text-[#171716]">
                      {businessData.headquarters.address}
                    </strong>
                    <span className="text-xs text-[#171716]/70">
                      Landmark: {businessData.headquarters.landmark} • PIN: {businessData.headquarters.pincode}
                    </span>
                    <span className="block text-[11px] font-mono text-[#171716]/50 mt-1">
                      Coordinates: {businessData.headquarters.coordinates}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#A66A4C] shrink-0 mt-1" />
                  <div>
                    <span className="block font-medium text-[#171716]">
                      {businessData.displayPhone} / +91 89433 47714
                    </span>
                    <span className="text-xs text-[#171716]/70">Direct Studio Line &amp; Consultations</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#A66A4C] shrink-0 mt-1" />
                  <div>
                    <span className="block font-medium text-[#171716]">
                      {businessData.operatingHours}
                    </span>
                    <span className="text-xs text-[#171716]/70">Verified Working Hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-[#171716]/10 flex flex-wrap gap-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sketch+Interiors+Palazhi+Kozhikode+Hilite+City"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#171716] text-[#F4F0E8] text-xs font-mono uppercase tracking-wider hover:bg-[#A66A4C] transition-colors flex items-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions (Google Maps)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                id="location-contact-studio-btn"
                onClick={onOpenBrief}
                className="px-6 py-3 border border-[#171716]/30 text-xs font-mono uppercase tracking-wider text-[#171716] hover:border-[#171716] hover:bg-[#171716]/5 transition-colors"
              >
                Contact The Studio
              </button>
            </div>
          </div>

          {/* Secondary Studio & Architectural Map Card */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Ernakulam Studio Card */}
            <div className="bg-[#EFE9DF] border border-[#171716]/15 p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-[#171716]/10 pb-3">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#A66A4C] font-semibold">
                    Central Kerala Branch
                  </span>
                  <h4 className="font-serif text-2xl text-[#171716]">
                    {businessData.branch.title}
                  </h4>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 border border-[#171716]/20 text-[#171716]">
                  KOCHI
                </span>
              </div>

              <div className="space-y-2 text-xs font-sans text-[#171716]/80">
                <p className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#A66A4C]" />
                  <span>{businessData.branch.location}, {businessData.branch.region}</span>
                </p>
                <p className="text-[#171716]/70 leading-relaxed">
                  Serving residential villas, luxury high-rises, and turnkey office fit-outs across Kochi and surrounding districts.
                </p>
              </div>
            </div>

            {/* Minimalist Architectural Map Graphic */}
            <div className="relative aspect-[4/3] bg-[#171716] text-[#F4F0E8] border border-[#2B231D] p-6 flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

              {/* Minimal SVG representation of Kozhikode & Kochi bypass coordinates */}
              <svg className="w-full h-40 text-[#A66A4C]/60" viewBox="0 0 300 160" fill="none" stroke="currentColor">
                {/* NH 17 Bypass highway schematic line */}
                <path d="M 30,140 Q 150,80 270,30" strokeWidth="2" stroke="#A66A4C" />
                <path d="M 80,150 L 150,80" strokeWidth="1" strokeDasharray="3 3" stroke="#F4F0E8" />
                {/* Hilite City Node */}
                <circle cx="150" cy="80" r="6" fill="#A66A4C" />
                <circle cx="150" cy="80" r="14" stroke="#A66A4C" strokeWidth="0.8" strokeDasharray="2 2" />
                <text x="165" y="75" fill="#F4F0E8" fontSize="10" fontFamily="monospace">
                  SKETCH INTERIORS
                </text>
                <text x="165" y="90" fill="#A66A4C" fontSize="8" fontFamily="monospace">
                  OPP. HILITE CITY
                </text>
              </svg>

              <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <span>NH 17 BYPASS CORRIDOR</span>
                <span className="text-[#A66A4C]">PALAZHI JUNCTION</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
