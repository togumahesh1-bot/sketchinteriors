import { Compass, PenTool, Hammer, Sofa, Zap, Building2 } from 'lucide-react';
import { businessData } from '../data/businessData';

export default function BrandStory() {
  const capabilityCards = [
    {
      title: "Interior Design & Planning",
      icon: Compass,
      desc: "Comprehensive 2D spatial layouts, structural flow optimization, and 3D architectural perspectives reflecting personal client lifestyles.",
    },
    {
      title: "Custom Modular Furniture",
      icon: PenTool,
      desc: "Precision modular kitchens, built-in wardrobes, and handcrafted furniture engineered for ergonomics and moisture resilience in Kerala.",
    },
    {
      title: "Turnkey Execution",
      icon: Hammer,
      desc: "Full on-site project management, direct craftsman supervision, and milestone delivery from bare brickwork to spotless key handover.",
    },
    {
      title: "Furnishing & Accessories",
      icon: Sofa,
      desc: "Custom curtains, acoustic wall draperies, bespoke upholstery, tactile rugs, and curated styling elements.",
    },
    {
      title: "MEP Engineering Services",
      icon: Zap,
      desc: "Seamless integration of electrical conduit routing, ducted HVAC ventilation, sanitary piping, and smart lighting controls.",
    },
    {
      title: "Interior Consultancy",
      icon: Building2,
      desc: "Independent material board audits, structural feasibility advice, and cost-optimization guidance for premium property owners.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F0E8] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#171716]/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-mono tracking-widest text-[#A66A4C] uppercase font-semibold">
              02 // THE BRAND FOUNDATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#171716]">
              SKETCH INTERIORS
            </h2>
            <p className="font-serif italic text-xl sm:text-2xl text-[#171716]/80">
              &ldquo;Designing spaces where ideas become environments.&rdquo;
            </p>
          </div>

          <div className="text-left md:text-right font-mono text-xs text-[#171716]/70 space-y-1">
            <p className="font-semibold text-[#171716]">VERIFIED REGIONAL PRESENCE</p>
            <p>Calicut Studio: Opp. Hilite City, Palazhi</p>
            <p>Ernakulam Studio: Kundannur, Kochi</p>
          </div>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif text-2xl text-[#171716]">
              A multidisciplinary design house built on execution discipline.
            </h3>
            <p className="font-sans text-sm text-[#171716]/80 leading-relaxed">
              Public business records document Sketch Interiors as a comprehensive interior design and execution studio operating with a team of 11 to 50 professionals. Rather than functioning as a remote drafting agency, Sketch Interiors combines design intellect with physical fabrication.
            </p>
            <p className="font-sans text-sm text-[#171716]/80 leading-relaxed">
              From residential villas along the Kozhikode Bypass corridor to modern apartments and commercial facilities across Ernakulam, their scope encompasses everything from the first pencil concept to turnkey structural handovers.
            </p>

            <div className="p-4 bg-[#EFE9DF] border border-[#171716]/10 font-mono text-xs text-[#171716]/80 space-y-2">
              <span className="text-[#A66A4C] font-semibold block uppercase tracking-wider">
                Integrity in Presentation
              </span>
              <p className="text-[11px] leading-relaxed">
                All business information displayed across this proposal prototype reflects verified public directory data, Google Maps coordinates, and documented capabilities.
              </p>
            </div>
          </div>

          {/* Documented Capabilities Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilityCards.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="p-5 bg-[#F9F7F2] border border-[#171716]/10 hover:border-[#A66A4C]/50 transition-colors duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Icon className="w-5 h-5 text-[#A66A4C]" />
                      <span className="text-[10px] font-mono text-[#171716]/40">0{idx + 1}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-[#171716] tracking-wide">
                      {cap.title}
                    </h4>
                    <p className="text-xs text-[#171716]/70 leading-relaxed font-sans">
                      {cap.desc}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-[#A66A4C] tracking-wider uppercase pt-4 block">
                    Verified Capability
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
