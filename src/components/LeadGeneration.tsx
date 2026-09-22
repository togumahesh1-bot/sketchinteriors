import { useState } from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, Send } from 'lucide-react';
import { businessData } from '../data/businessData';
import { LeadFormData } from '../types';

export default function LeadGeneration() {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phone: '',
    email: '',
    projectLocation: 'Calicut (Kozhikode)',
    projectType: 'Villa',
    projectStage: 'Ready for Interiors',
    requirements: '',
    preferredContact: 'WhatsApp',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const projectTypes = ['Villa', 'Home', 'Apartment', 'Office', 'Retail', 'Hospitality', 'Other'] as const;
  const projectStages = ['Planning', 'Under Construction', 'Renovation', 'Ready for Interiors'] as const;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    if (formData.preferredContact === 'WhatsApp') {
      const text = encodeURIComponent(
        `Hello Sketch Interiors,\n\nI would like to discuss an interior project:\n- Name: ${formData.fullName}\n- Phone: ${formData.phone}\n- Location: ${formData.projectLocation}\n- Type: ${formData.projectType}\n- Stage: ${formData.projectStage}\n- Requirements: ${formData.requirements || 'Turnkey Design & Execution'}`
      );
      window.open(`https://wa.me/${businessData.whatsappNumber}?text=${text}`, '_blank');
    }

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#171716] text-[#F4F0E8] border-b border-[#2B231D] relative">
      <div className="absolute inset-0 architectural-grid opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-[11px] font-mono tracking-widest text-[#A66A4C] uppercase font-semibold">
            12 // INITIATE A PROJECT BRIEF
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-light text-white tracking-tight">
            LET&apos;S SKETCH YOUR SPACE.
          </h2>
          <p className="font-sans text-sm sm:text-base text-neutral-400">
            Tell us about your villa, apartment, or commercial space. We begin every engagement with an architectural consultation and preliminary spatial review.
          </p>
        </div>

        {/* Lead Form Container */}
        <div className="p-8 sm:p-12 bg-neutral-900 border border-neutral-800 shadow-2xl">
          {submitted ? (
            <div className="text-center py-12 space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-14 h-14 bg-[#A66A4C]/20 border border-[#A66A4C] rounded-full flex items-center justify-center mx-auto text-[#A66A4C]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-3xl sm:text-4xl text-white font-light">
                  Thank you.
                </h3>
                <p className="font-serif text-xl italic text-[#A66A4C]">
                  &ldquo;Your project has been sketched into our conversation.&rdquo;
                </p>
                <p className="font-sans text-xs text-neutral-400 max-w-md mx-auto">
                  Our design studio at Opp. Hilite City, Palazhi will review your parameters and reach out within 24 business hours.
                </p>
              </div>

              <button
                id="reset-lead-form-btn"
                onClick={() => setSubmitted(false)}
                className="text-xs font-mono text-neutral-400 hover:text-white underline underline-offset-4 pt-4"
              >
                Submit another project brief
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Details Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label htmlFor="lead-name-input" className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    Your Name *
                  </label>
                  <input
                    id="lead-name-input"
                    type="text"
                    required
                    placeholder="e.g. Dr. K. Menon"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-700 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-hidden focus:border-[#A66A4C]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="lead-phone-input" className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    Phone Number *
                  </label>
                  <input
                    id="lead-phone-input"
                    type="tel"
                    required
                    placeholder="+91 98..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-700 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-hidden focus:border-[#A66A4C]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="lead-email-input" className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    Email Address
                  </label>
                  <input
                    id="lead-email-input"
                    type="email"
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-700 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-hidden focus:border-[#A66A4C]"
                  />
                </div>
              </div>

              {/* Project Location & Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="lead-location-input" className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    Project Location (City / District)
                  </label>
                  <input
                    id="lead-location-input"
                    type="text"
                    placeholder="e.g. Calicut, Wayanad, Kochi, Malappuram"
                    value={formData.projectLocation}
                    onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-700 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-hidden focus:border-[#A66A4C]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    Project Type
                  </label>
                  <div className="grid grid-cols-4 sm:grid-cols-4 gap-2">
                    {projectTypes.slice(0, 4).map((pt) => (
                      <button
                        key={pt}
                        type="button"
                        onClick={() => setFormData({ ...formData, projectType: pt })}
                        className={`py-2 text-xs font-mono uppercase border transition-colors ${
                          formData.projectType === pt
                            ? 'bg-[#A66A4C] text-white border-[#A66A4C]'
                            : 'bg-neutral-950 text-neutral-400 border-neutral-700 hover:text-white'
                        }`}
                      >
                        {pt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Stage */}
              <div className="space-y-2">
                <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                  Current Project Stage
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {projectStages.map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => setFormData({ ...formData, projectStage: st })}
                      className={`p-2.5 text-left text-xs font-mono border transition-colors ${
                        formData.projectStage === st
                          ? 'bg-[#A66A4C] text-white border-[#A66A4C]'
                          : 'bg-neutral-950 text-neutral-400 border-neutral-700 hover:text-white'
                      }`}
                    >
                      <span className="block uppercase text-[10px] opacity-75">Stage:</span>
                      <span className="block truncate font-sans font-medium text-white">{st}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="space-y-2">
                <label htmlFor="lead-requirements-input" className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                  Brief Requirements / Scope (Optional)
                </label>
                <textarea
                  id="lead-requirements-input"
                  rows={3}
                  placeholder="e.g. 4BHK Villa interior, custom modular kitchen, teak joinery, turnkey delivery required..."
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-700 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-hidden focus:border-[#A66A4C]"
                />
              </div>

              {/* Preferred Bridge */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-800">
                <div className="flex items-center gap-4 text-xs font-mono text-neutral-400">
                  <span>PREFERRED RESPONSE:</span>
                  <label className="flex items-center gap-1.5 cursor-pointer text-white">
                    <input
                      type="radio"
                      name="preferred"
                      checked={formData.preferredContact === 'WhatsApp'}
                      onChange={() => setFormData({ ...formData, preferredContact: 'WhatsApp' })}
                      className="accent-[#A66A4C]"
                    />
                    <span>WhatsApp</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer text-white">
                    <input
                      type="radio"
                      name="preferred"
                      checked={formData.preferredContact === 'Phone Call'}
                      onChange={() => setFormData({ ...formData, preferredContact: 'Phone Call' })}
                      className="accent-[#A66A4C]"
                    />
                    <span>Phone Call</span>
                  </label>
                </div>

                <button
                  id="lead-submit-brief-btn"
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-[#A66A4C] hover:bg-[#8e573d] text-white text-xs font-semibold tracking-widest uppercase transition-all duration-200 flex items-center justify-center gap-3 group shadow-lg"
                >
                  <span>Start The Conversation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
