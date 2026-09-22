import { useState } from 'react';
import { ArrowUpRight, Filter, MapPin, Eye, UploadCloud, Info } from 'lucide-react';
import { projectShowcase } from '../data/businessData';
import { ProjectItem } from '../types';

interface ProjectGalleryProps {
  onSelectProject: (p: ProjectItem) => void;
  pitchMode: boolean;
}

export default function ProjectGallery({ onSelectProject, pitchMode }: ProjectGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [projectsList, setProjectsList] = useState<ProjectItem[]>(projectShowcase);
  const [customAssetUrl, setCustomAssetUrl] = useState<string>('');
  const [showAssetSimulator, setShowAssetSimulator] = useState<boolean>(false);

  const categories = ['All', 'Residential', 'Modular & Joinery', 'Commercial', 'Furnishing'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsList
    : projectsList.filter((p) => p.category === selectedCategory);

  const handleApplyCustomAsset = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customAssetUrl.trim()) return;
    const updated = [...projectsList];
    updated[0] = {
      ...updated[0],
      image: customAssetUrl.trim(),
      sourceAttribution: 'Client Uploaded Asset Preview [Demo]',
    };
    setProjectsList(updated);
    setCustomAssetUrl('');
  };

  return (
    <section id="work" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F4F0E8] border-b border-[#171716]/10 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#171716]/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-mono tracking-widest text-[#A66A4C] uppercase font-semibold">
              03 // SELECTED PORTFOLIO
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#171716] tracking-tight">
              THE WORK SHOULD DO THE TALKING.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#171716]/80 leading-relaxed">
              An editorial masonry layout pairing high-resolution spatial photography with architectural notes, authentic materials, and turnkey execution records.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-all duration-200 border ${
                  selectedCategory === cat
                    ? 'bg-[#171716] text-[#F4F0E8] border-[#171716]'
                    : 'bg-[#EFE9DF] text-[#171716]/75 border-[#171716]/10 hover:border-[#A66A4C]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Agency Presentation Asset Simulator (Highlights flexibility to the client) */}
        <div className="p-4 bg-[#EFE9DF] border border-[#171716]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs font-mono text-[#171716]/80">
            <Info className="w-4 h-4 text-[#A66A4C] shrink-0" />
            <span>
              <strong>Proposal Feature:</strong> Real photos from Sketch Interiors&apos; Google Business listing &amp; archives slot into these responsive frames.
            </span>
          </div>

          <button
            id="toggle-asset-simulator-btn"
            onClick={() => setShowAssetSimulator(!showAssetSimulator)}
            className="text-xs font-mono text-[#A66A4C] hover:text-[#171716] underline underline-offset-4 shrink-0"
          >
            {showAssetSimulator ? 'Hide Test Simulator' : 'Test Client Image URL'}
          </button>
        </div>

        {showAssetSimulator && (
          <form onSubmit={handleApplyCustomAsset} className="p-4 bg-[#171716] text-[#F4F0E8] text-xs font-mono flex flex-col sm:flex-row gap-2 items-center animate-in fade-in duration-200">
            <span className="text-[#A66A4C] shrink-0">TEST PHOTO URL:</span>
            <input
              type="url"
              placeholder="Paste Google Drive/Unsplash/Direct image link to test slot #1..."
              value={customAssetUrl}
              onChange={(e) => setCustomAssetUrl(e.target.value)}
              className="flex-1 w-full bg-neutral-900 border border-neutral-700 px-3 py-2 text-[#F4F0E8] text-xs focus:outline-hidden focus:border-[#A66A4C]"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#A66A4C] hover:bg-[#8e573d] text-white font-sans text-xs uppercase tracking-wider shrink-0"
            >
              Update Slot
            </button>
          </form>
        )}

        {/* Dynamic Masonry Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          {filteredProjects.map((project, idx) => {
            // Give varied column spans and heights to create architectural rhythm
            let colSpan = 'lg:col-span-6';
            let aspect = 'aspect-[16/11]';

            if (project.aspectRatio === 'wide') {
              colSpan = 'lg:col-span-8';
              aspect = 'aspect-[16/10]';
            } else if (project.aspectRatio === 'portrait') {
              colSpan = 'lg:col-span-4';
              aspect = 'aspect-[3/4]';
            } else if (project.aspectRatio === 'square') {
              colSpan = 'lg:col-span-4';
              aspect = 'aspect-square';
            } else {
              colSpan = 'lg:col-span-8';
              aspect = 'aspect-[16/10]';
            }

            return (
              <div
                key={project.id}
                data-cursor-type="project"
                onClick={() => onSelectProject(project)}
                className={`${colSpan} group cursor-pointer bg-[#EFE9DF] border border-[#171716]/10 hover:border-[#171716] transition-all duration-300 p-3 sm:p-4 flex flex-col justify-between`}
              >
                {/* Image Container with Hover Scale */}
                <div className={`relative ${aspect} w-full overflow-hidden bg-neutral-900 mb-4`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-95 group-hover:brightness-100"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Top-Right Badge: Location */}
                  <div className="absolute top-3 right-3 bg-black/65 backdrop-blur-xs text-white px-2.5 py-1 text-[10px] font-mono tracking-wider flex items-center gap-1 border border-white/10">
                    <MapPin className="w-3 h-3 text-[#A66A4C]" />
                    <span>{project.location}</span>
                  </div>

                  {/* Bottom Hover Overlay with Arrow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 justify-between text-white">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#A66A4C] flex items-center gap-1">
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">
                      0{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Metadata & Title */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#171716]/60">
                    <span className="text-[#A66A4C] font-semibold uppercase">{project.category}</span>
                    <span>{project.statusBadge}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#171716] font-normal group-hover:text-[#A66A4C] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs font-sans text-[#171716]/75">
                    {project.areaSubtitle}
                  </p>

                  <div className="pt-2 border-t border-[#171716]/10 flex items-center justify-between text-[10px] font-mono text-[#171716]/50">
                    <span>{project.sourceAttribution}</span>
                    <span className="group-hover:translate-x-1 transition-transform text-[#171716] font-semibold">EXPLORE →</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {pitchMode && (
          <div className="p-4 bg-[#171716] text-[#F4F0E8] text-xs font-sans border-l-2 border-[#A66A4C] space-y-1">
            <span className="font-mono text-[#A66A4C] font-bold block">PORTFOLIO CONVERSION RATIONALE:</span>
            <p className="text-neutral-300 leading-relaxed">
              Villa owners in Kerala want to see real work in their locality (e.g. Palazhi, Thondayad, Kundannur). By displaying verified geographic tags alongside deep-dive case studies explaining materials and joinery, we transform casual visitors into serious clients who perceive Sketch Interiors as master craftsmen.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
