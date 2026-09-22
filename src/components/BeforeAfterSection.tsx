import { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, Sparkles, Info } from 'lucide-react';

export default function BeforeAfterSection() {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#EFE9DF] border-b border-[#171716]/10 relative">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#171716]/10 pb-6">
          <div className="space-y-2">
            <span className="text-[11px] font-mono tracking-widest text-[#A66A4C] uppercase font-semibold">
              06 // INTERACTIVE TRANSFORMATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#171716]">
              BEFORE & AFTER TRANSFORMATION.
            </h2>
          </div>

          <div className="text-xs font-mono text-[#171716]/70 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#A66A4C]" />
            <span>DRAG SLIDER TO REVEAL EXECUTION</span>
          </div>
        </div>

        {/* Mandatory Honest Attribution Banner */}
        <div className="p-3.5 bg-[#F4F0E8] border border-[#171716]/10 text-xs font-mono text-[#171716]/80 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-[#A66A4C] shrink-0" />
            <span>
              <strong>PROPOSAL DEMO:</strong> Replace with verified before/after project pair from Sketch Interiors archives in Calicut.
            </span>
          </div>
          <span className="text-[10px] text-[#A66A4C] uppercase tracking-wider hidden sm:inline">
            Interactive Prototype Component
          </span>
        </div>

        {/* Draggable Slider Container */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          data-cursor-type="drag"
          className="relative aspect-[16/9] w-full overflow-hidden select-none cursor-ew-resize border border-[#171716]/20 shadow-2xl bg-neutral-900"
        >
          {/* AFTER Image (Right Base Layer: Completed Space) */}
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
            alt="Completed space - Sketch Interiors After"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-xs text-[#F4F0E8] px-3 py-1 text-xs font-mono tracking-widest uppercase border border-white/20">
            AFTER // COMPLETED SPACE
          </div>

          {/* BEFORE Image (Left Clipped Layer: Structural Inception) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="relative w-full h-full">
              {/* Simulated Bare Concrete / Structural Shell */}
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1600&q=85"
                alt="Bare structure before interior design"
                className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100vw', maxWidth: 'none' }}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#171716]/30" />
            </div>

            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-xs text-[#F4F0E8] px-3 py-1 text-xs font-mono tracking-widest uppercase border border-white/20">
              BEFORE // BARE SITE
            </div>
          </div>

          {/* Divider Line & Draggable Handle */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white shadow-xl z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#171716] text-[#F4F0E8] border-2 border-white flex items-center justify-center shadow-2xl">
              <ArrowLeftRight className="w-4 h-4 text-[#A66A4C]" />
            </div>
          </div>

          {/* Bottom Bar: Instructions */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/65 backdrop-blur-xs px-4 py-1 text-[11px] font-mono tracking-widest text-white uppercase border border-white/15">
            DRAG TO TRANSFORM
          </div>
        </div>

        {/* Editorial Footnote */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#171716]/60 gap-2">
          <span>ZERO TOLERANCE LASER-LEVELLED JOINERY</span>
          <span className="text-[#A66A4C]">FULL TURNKEY ON-SITE SUPERVISION</span>
        </div>
      </div>
    </section>
  );
}
