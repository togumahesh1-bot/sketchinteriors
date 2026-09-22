import { X, ArrowRight, Check, MapPin, Layers } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectCaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenBrief: () => void;
}

export default function ProjectCaseStudyModal({ project, onClose, onOpenBrief }: ProjectCaseStudyModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#F4F0E8] text-[#171716] shadow-2xl border border-[#171716]/20 overflow-hidden my-8">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#171716]/10 bg-[#EFE9DF]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold tracking-widest text-[#A66A4C] uppercase">
              CASE STUDY // {project.category}
            </span>
            <span className="text-xs font-mono text-[#171716]/40 hidden sm:inline">•</span>
            <span className="text-xs font-mono text-[#171716]/70 hidden sm:inline flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#A66A4C]" />
              {project.location}
            </span>
          </div>

          <button
            id="close-case-study-modal-btn"
            onClick={onClose}
            className="p-1.5 hover:bg-[#171716]/10 rounded-full transition-colors text-[#171716]"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: 4 Editorial Chapters */}
        <div className="max-h-[82vh] overflow-y-auto p-6 sm:p-10 space-y-12">
          {/* Chapter 01: The Space */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#171716]/60">
              <span className="text-[#A66A4C] font-semibold">01 // THE SPACE</span>
              <span>{project.statusBadge}</span>
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900 border border-[#171716]/10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-[#F4F0E8] px-3 py-1 text-[11px] font-mono border border-white/10">
                {project.sourceAttribution}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pt-2">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#171716] font-light">
                {project.title}
              </h2>
              <span className="font-sans text-sm text-[#A66A4C] font-medium">
                {project.areaSubtitle}
              </span>
            </div>
          </div>

          {/* Chapter 02: The Idea */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 bg-[#EFE9DF]/80 border border-[#171716]/10">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A66A4C] font-semibold block mb-1">
                02 // THE IDEA
              </span>
              <h3 className="font-serif text-xl text-[#171716]">
                {project.caseStudy.spaceTitle}
              </h3>
            </div>
            <div className="lg:col-span-8 space-y-2">
              <p className="font-sans text-sm text-[#171716]/85 leading-relaxed">
                {project.caseStudy.concept}
              </p>
              <p className="text-[11px] font-mono text-[#171716]/60 italic">
                * Note: Detailed project narrative will be populated directly from Sketch Interiors&apos; verified client project archive.
              </p>
            </div>
          </div>

          {/* Chapter 03: The Details (Materials & Spatial Elements) */}
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A66A4C] font-semibold block">
              03 // THE DETAILS & SENSORY PALETTE
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-white border border-[#171716]/10 space-y-3">
                <h4 className="text-xs font-mono font-semibold tracking-wider uppercase text-[#171716] flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-[#A66A4C]" />
                  Material Specifications
                </h4>
                <div className="space-y-2">
                  {project.caseStudy.materials.map((mat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#171716]/80 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A66A4C]" />
                      <span>{mat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 bg-white border border-[#171716]/10 space-y-3">
                <h4 className="text-xs font-mono font-semibold tracking-wider uppercase text-[#171716] flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#A66A4C]" />
                  Spatial Interventions
                </h4>
                <div className="space-y-2">
                  {project.caseStudy.spatialElements.map((el, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#171716]/80 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#171716]" />
                      <span>{el}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Chapter 04: The Result (Execution Handover) */}
          <div className="p-6 bg-[#171716] text-[#F4F0E8] space-y-4 border border-[#2B231D]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono tracking-widest text-[#A66A4C] font-semibold uppercase">
                04 // THE TURNKEY RESULT
              </span>
              <span className="text-[10px] font-mono text-neutral-400">
                DELIVERED BY SKETCH INTERIORS
              </span>
            </div>

            <p className="font-sans text-sm text-neutral-300 leading-relaxed">
              {project.caseStudy.executionNotes}
            </p>

            <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-serif italic text-neutral-400">
                &ldquo;Where an idea becomes an address.&rdquo;
              </span>

              <button
                id="case-study-enquire-btn"
                onClick={() => {
                  onClose();
                  onOpenBrief();
                }}
                className="px-5 py-2.5 bg-[#A66A4C] hover:bg-[#8e573d] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <span>Enquire About A Similar Space</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
