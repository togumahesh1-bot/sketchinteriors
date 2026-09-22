import { Phone, MessageCircle, FileText, ArrowUpRight } from 'lucide-react';
import { businessData } from '../data/businessData';

interface MobileBarProps {
  onOpenBrief: () => void;
}

export default function MobileBar({ onOpenBrief }: MobileBarProps) {
  const whatsappUrl = `https://wa.me/${businessData.whatsappNumber}?text=${encodeURIComponent(
    'Hello Sketch Interiors, I am interested in discussing an interior design project.'
  )}`;

  return (
    <>
      {/* Desktop Persistent Luxury WhatsApp Pill (Bottom-Right, non-intrusive) */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40">
        <a
          id="desktop-whatsapp-pill"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-2.5 bg-[#171716] text-[#F4F0E8] hover:bg-[#A66A4C] border border-[#2B231D] shadow-xl text-xs font-mono tracking-wider transition-all duration-300"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>CHAT ABOUT YOUR SPACE</span>
          <MessageCircle className="w-3.5 h-3.5 text-emerald-400 group-hover:text-white transition-colors" />
        </a>
      </div>

      {/* Mobile Fixed Conversion Bar (Bottom Screen) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#171716] text-[#F4F0E8] border-t border-[#2B231D] shadow-2xl py-2 px-3">
        <div className="grid grid-cols-3 gap-2">
          {/* Call Studio */}
          <a
            id="mobile-call-btn"
            href={`tel:${businessData.displayPhone.replace(/\s+/g, '')}`}
            className="flex flex-col items-center justify-center py-2 px-1 bg-neutral-900 border border-neutral-800 text-[10px] font-mono tracking-wider uppercase text-neutral-300 hover:text-white"
          >
            <Phone className="w-4 h-4 text-[#A66A4C] mb-0.5" />
            <span>Call Studio</span>
          </a>

          {/* WhatsApp Direct */}
          <a
            id="mobile-whatsapp-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 bg-neutral-900 border border-neutral-800 text-[10px] font-mono tracking-wider uppercase text-neutral-300 hover:text-white"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 mb-0.5" />
            <span>WhatsApp</span>
          </a>

          {/* Enquire Brief */}
          <button
            id="mobile-enquire-btn"
            onClick={onOpenBrief}
            className="flex flex-col items-center justify-center py-2 px-1 bg-[#A66A4C] text-white text-[10px] font-mono tracking-wider uppercase"
          >
            <FileText className="w-4 h-4 text-white mb-0.5" />
            <span>Start Brief</span>
          </button>
        </div>
      </div>
    </>
  );
}
