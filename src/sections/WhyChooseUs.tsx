import React from 'react';
import { ArrowRight } from 'lucide-react';
import { companyData } from '../data/company';

interface WhyChooseUsProps {
  onScheduleDiscussion: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onScheduleDiscussion }) => {
  const pillars = [
    {
      number: "01",
      title: `${companyData.yearsOfExperience} Years of Proven Spatial Mastery in Tirunelveli`,
      description:
        "Deep contextual familiarity with Tamil Nadu climate, ventilation paths, moisture protection, and local stone materials. Over a decade of verified execution.",
    },
    {
      number: "02",
      title: "In-House Master Carpenters & Artisans",
      description:
        "We don't outsource delicate detailing to third-party brokers. Our dedicated guild of woodworkers, gypsum fabricators, and MEP technicians work under direct supervision.",
    },
    {
      number: "03",
      title: "Rigorous Project Governance & Turnkey Precision",
      description:
        "Structured milestone reviews, weekly client video updates, scheduled stage-gate approvals, and uncompromising handover checklists.",
    },
    {
      number: "04",
      title: "Transparent Cost Engineering",
      description:
        "Clear itemized BOQs (Bill of Quantities) with zero concealed surcharges. High-grade hardware and uncompromised structural integrity engineered to your budget.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#17352F] text-[#FAF9F5] relative overflow-hidden" id="why-4u">
      <div className="max-w-7xl mx-auto px-5 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Pillar Header */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-label-caps-wide text-[0.6875rem] tracking-widest text-accent uppercase block">
              THE ATELIER STANDARD
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF9F5] tracking-tight leading-tight">
              WHY 4U ATELIER
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#D9D5CA] leading-relaxed font-light">
              The intersection of local Tirunelveli mastery and world-class architectural standards. We eliminate the friction of multiple subcontractors by providing an unified, accountable design-and-build entity.
            </p>
            <div className="pt-4">
              <button
                onClick={onScheduleDiscussion}
                className="inline-flex items-center space-x-3 text-accent border-b border-accent pb-1 font-label-caps-wide text-xs uppercase hover:text-[#FAF9F5] hover:border-[#FAF9F5] transition-colors cursor-pointer"
              >
                <span>Schedule A Studio Discussion</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right 4 Pillars List with Fine Soft Stone Dividers */}
          <div className="lg:col-span-7 divide-y divide-[#D9D5CA]/20 border-t border-b border-[#D9D5CA]/20">
            {pillars.map((pillar) => (
              <div key={pillar.number} className="py-8 group">
                <div className="flex items-start space-x-6">
                  <span className="font-serif text-2xl sm:text-3xl text-accent">
                    {pillar.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl text-[#FAF9F5] mb-2 font-medium">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-[#D9D5CA] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
