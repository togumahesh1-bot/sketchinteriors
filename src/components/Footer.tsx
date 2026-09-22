import { ArrowUp, ArrowUpRight, MapPin, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';
import { businessData } from '../data/businessData';

interface FooterProps {
  onOpenBrief: () => void;
  onOpenProposalModal: () => void;
}

export default function Footer({ onOpenBrief, onOpenProposalModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#171716] text-[#F4F0E8] pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-t border-[#2B231D] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Editorial Headline */}
        <div className="space-y-6 max-w-4xl border-b border-neutral-800 pb-16">
          <span className="text-xs font-mono tracking-widest text-[#A66A4C] uppercase font-semibold block">
            SKETCH INTERIORS // THE CONCLUSION
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.05]">
            LET&apos;S TURN THE NEXT IDEA <br />
            <span className="italic text-[#A66A4C]">INTO A SPACE</span>.
          </h2>
          <p className="font-sans text-sm text-neutral-400 max-w-xl">
            A considered digital experience proposal prepared to elevate Sketch Interiors into an online flagship worthy of its physical spaces in Kerala.
          </p>
        </div>

        {/* Detailed Studio Coordinates & Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Identity & Verified Address */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-1">
              <span className="font-serif text-2xl font-light text-white tracking-wide">
                SKETCH INTERIORS
              </span>
              <p className="font-mono text-[11px] text-[#A66A4C] uppercase tracking-widest">
                Interior Design • Furniture • Turnkey Execution
              </p>
            </div>

            <div className="space-y-2 text-xs text-neutral-400 font-sans pt-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#A66A4C] shrink-0 mt-0.5" />
                <span>
                  <strong>Calicut Headquarters:</strong><br />
                  Opp. Hilite City, Palazhi Junction, NH 17 Bypass Road, Kozhikode, Kerala 673014
                </span>
              </p>
              <p className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#A66A4C] shrink-0 mt-0.5" />
                <span>
                  <strong>Ernakulam Studio:</strong><br />
                  Kundannur, Kochi, Ernakulam, Kerala
                </span>
              </p>
            </div>
          </div>

          {/* Verified Contact Lines */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-white font-medium block">
              Direct Contact
            </span>

            <div className="space-y-2.5 text-xs text-neutral-300 font-mono">
              <a
                href={`tel:${businessData.displayPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 hover:text-[#A66A4C] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#A66A4C]" />
                <span>{businessData.displayPhone}</span>
              </a>
              <a
                href="tel:+918943347714"
                className="flex items-center gap-2 hover:text-[#A66A4C] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#A66A4C]" />
                <span>+91 89433 47714</span>
              </a>
              <a
                href={`mailto:${businessData.emails[0]}`}
                className="flex items-center gap-2 hover:text-[#A66A4C] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#A66A4C]" />
                <span>{businessData.emails[0]}</span>
              </a>
            </div>

            <div className="pt-2 text-[11px] font-sans text-neutral-400">
              Showroom Hours: Mon–Sat 9:30 AM – 7:30 PM (Sun Closed)
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-white font-medium block">
              Navigation
            </span>

            <ul className="space-y-2 text-xs font-sans text-neutral-400">
              <li><a href="#opportunity" className="hover:text-[#A66A4C] transition-colors">Opportunity</a></li>
              <li><a href="#work" className="hover:text-[#A66A4C] transition-colors">Selected Work</a></li>
              <li><a href="#services" className="hover:text-[#A66A4C] transition-colors">Services</a></li>
              <li><a href="#sketch-to-space" className="hover:text-[#A66A4C] transition-colors">Sketch → Space</a></li>
              <li><a href="#trust" className="hover:text-[#A66A4C] transition-colors">Trust &amp; Ratings</a></li>
              <li><a href="#location" className="hover:text-[#A66A4C] transition-colors">Studio Location</a></li>
            </ul>
          </div>

          {/* Proposal Documents & Actions */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-white font-medium block">
              Proposal Actions
            </span>

            <div className="space-y-2">
              <button
                id="footer-start-project-btn"
                onClick={onOpenBrief}
                className="w-full py-2.5 bg-[#A66A4C] hover:bg-[#8e573d] text-white text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <span>Start A Project Brief</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                id="footer-executive-brief-btn"
                onClick={onOpenProposalModal}
                className="w-full py-2.5 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <span>Executive Proposal Summary</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex items-center gap-3 pt-2 text-neutral-400">
              <a
                href={`https://wa.me/${businessData.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#A66A4C] transition-colors flex items-center gap-1 text-xs font-mono"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
              <span>•</span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sketch+Interiors+Palazhi+Kozhikode"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#A66A4C] transition-colors flex items-center gap-1 text-xs font-mono"
              >
                <span>Google Listing</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="pt-12 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © 2026 Sketch Interiors Web Design Proposal. All factual parameters grounded in verified business profiles.
          </div>

          <button
            id="scroll-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#A66A4C] transition-colors uppercase tracking-wider text-[11px]"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
