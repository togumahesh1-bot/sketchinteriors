import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import OpportunitySection from './components/OpportunitySection';
import BrandStory from './components/BrandStory';
import ProposedDirection from './components/ProposedDirection';
import ProjectGallery from './components/ProjectGallery';
import ProjectCaseStudyModal from './components/ProjectCaseStudyModal';
import BeforeAfterSection from './components/BeforeAfterSection';
import ServicesSection from './components/ServicesSection';
import SketchToSpaceInteractive from './components/SketchToSpaceInteractive';
import ProcessSection from './components/ProcessSection';
import TrustArchitecture from './components/TrustArchitecture';
import CompetitiveDifferentiation from './components/CompetitiveDifferentiation';
import FeatureMatrix from './components/FeatureMatrix';
import LocationSection from './components/LocationSection';
import LeadGeneration from './components/LeadGeneration';
import TheNextSketch from './components/TheNextSketch';
import ProposalSummaryModal from './components/ProposalSummaryModal';
import Footer from './components/Footer';
import MobileBar from './components/MobileBar';
import CustomCursor from './components/CustomCursor';
import { ProjectItem } from './types';

export default function App() {
  const [pitchMode, setPitchMode] = useState<boolean>(true); // Default to showing strategy annotations for the client presentation!
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [proposalModalOpen, setProposalModalOpen] = useState<boolean>(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBrief = () => {
    scrollToSection('contact');
    setTimeout(() => {
      const input = document.getElementById('lead-name-input');
      if (input) input.focus();
    }, 450);
  };

  return (
    <div className="relative min-h-screen bg-[#F4F0E8] text-[#171716] font-sans selection:bg-[#A66A4C] selection:text-white">
      {/* Precision architectural cursor (desktop only) */}
      <CustomCursor />

      {/* Navigation & Proposal Mode Bar */}
      <Navigation
        pitchMode={pitchMode}
        setPitchMode={setPitchMode}
        onOpenBrief={handleOpenBrief}
        onOpenProposalModal={() => setProposalModalOpen(true)}
      />

      {/* Main Proposal Experience Flow */}
      <main>
        {/* 01: Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection('opportunity')}
          onViewProjectsClick={() => scrollToSection('work')}
          pitchMode={pitchMode}
        />

        {/* 02: The Opportunity */}
        <OpportunitySection
          pitchMode={pitchMode}
          onExploreWork={() => scrollToSection('work')}
        />

        {/* 03: Brand Story (Verified Facts) */}
        <BrandStory />

        {/* 04: Proposed Digital Direction (5 Pillars) */}
        <ProposedDirection pitchMode={pitchMode} />

        {/* 05: Signature "Sketch to Space" Interactive Process */}
        <SketchToSpaceInteractive />

        {/* 06: Selected Portfolio & Editorial Showcase */}
        <ProjectGallery
          onSelectProject={(p) => setSelectedProject(p)}
          pitchMode={pitchMode}
        />

        {/* 07: Interactive Before & After Transformation */}
        <BeforeAfterSection />

        {/* 08: Services & Technical Scope */}
        <ServicesSection onOpenBrief={handleOpenBrief} />

        {/* 09: Process Journey */}
        <ProcessSection />

        {/* 10: Trust & Reputation Architecture */}
        <TrustArchitecture pitchMode={pitchMode} />

        {/* 11: Competitive Standard & Differentiation */}
        <CompetitiveDifferentiation />

        {/* 12: Technical Feature Matrix */}
        <FeatureMatrix />

        {/* 13: Physical Presence & Location */}
        <LocationSection onOpenBrief={handleOpenBrief} />

        {/* 14: Lead Generation & Architectural Brief */}
        <LeadGeneration />

        {/* 15: The Next Sketch & Proposal Conclusion */}
        <TheNextSketch
          onOpenBrief={handleOpenBrief}
          onOpenProposalModal={() => setProposalModalOpen(true)}
        />
      </main>

      {/* Editorial Luxury Footer */}
      <Footer
        onOpenBrief={handleOpenBrief}
        onOpenProposalModal={() => setProposalModalOpen(true)}
      />

      {/* Mobile Sticky Bar & Desktop Persistent WhatsApp Pill */}
      <MobileBar onOpenBrief={handleOpenBrief} />

      {/* Modals & Overlays */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenBrief={handleOpenBrief}
      />

      <ProposalSummaryModal
        isOpen={proposalModalOpen}
        onClose={() => setProposalModalOpen(false)}
        onOpenBrief={handleOpenBrief}
      />
    </div>
  );
}
