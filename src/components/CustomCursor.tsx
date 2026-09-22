import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectCard = target.closest('[data-cursor-type="project"]');
      const clickable = target.closest('button, a, input, select, textarea, [role="button"]');

      if (projectCard) {
        setIsHoveringImage(true);
        setCursorText('VIEW PROJECT');
      } else if (target.closest('[data-cursor-type="drag"]')) {
        setIsHoveringImage(true);
        setCursorText('DRAG');
      } else {
        setIsHoveringImage(false);
        setCursorText('');
      }

      setIsHoveringClickable(!!clickable && !projectCard);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Precision architectural dot/crosshair */}
      <div
        className="fixed -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        {isHoveringImage ? (
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#171716] text-[10px] font-semibold tracking-widest text-[#F4F0E8] shadow-xl border border-[#A66A4C]/30 animate-pulse">
            {cursorText}
          </div>
        ) : (
          <div className="relative flex items-center justify-center">
            {/* Center dot */}
            <div className={`rounded-full transition-all duration-150 ${isHoveringClickable ? 'h-3 w-3 bg-[#A66A4C]' : 'h-1.5 w-1.5 bg-[#171716]'}`} />
            {/* Subtle architectural crosshair ring */}
            <div className={`absolute rounded-full border border-[#171716]/30 transition-all duration-200 ${isHoveringClickable ? 'h-8 w-8 scale-110 border-[#A66A4C]/60' : 'h-6 w-6'}`} />
          </div>
        )}
      </div>
    </div>
  );
}
