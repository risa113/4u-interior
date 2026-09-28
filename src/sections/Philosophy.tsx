import React from 'react';
import { Quote } from 'lucide-react';
import { companyData } from '../data/company';

export const Philosophy: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F5F2EA] max-w-7xl mx-auto px-5 md:px-16" id="philosophy">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Narrative Column */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-2">
            <span className="font-label-caps-wide text-[0.6875rem] tracking-widest text-accent uppercase block">
              01 / PHILOSOPHY & HERITAGE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#17352F] tracking-tight leading-tight">
              INTERIORS DESIGNED AROUND YOUR LIFE.
            </h2>
          </div>

          <p className="font-sans text-base sm:text-lg text-[#202522] leading-relaxed">
            At <strong className="font-semibold text-[#17352F]">{companyData.name}</strong>, we consider space as a tranquil backdrop to the rituals of everyday living. Founded in Tirunelveli in 2014, our atelier bridges deep-rooted artisanal carpentry with contemporary minimalism and architectural precision.
          </p>

          <p className="font-sans text-sm sm:text-base text-[#414846] leading-relaxed">
            Every project along Swami Nellaiappar High Road, Palayamkottai, and across southern Tamil Nadu begins with spatial listening. We balance Tamil domestic warmth—tactile teak, natural stone, sculpted gypsum cove illumination—with Italian proportion and bespoke cabinetry. No generic cut-and-paste modules; only tailored, enduring habitations.
          </p>

          {/* Craftsmanship Metrics Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 hairline-t">
            <div>
              <span className="font-serif text-3xl sm:text-4xl text-[#17352F] block font-medium">
                {companyData.yearsOfExperience}
              </span>
              <span className="font-label-caps-wide text-[0.6875rem] text-[#414846] uppercase mt-1 block">
                Years of Legacy
              </span>
            </div>
            <div>
              <span className="font-serif text-3xl sm:text-4xl text-[#17352F] block font-medium">
                {companyData.metrics.spacesRealized}
              </span>
              <span className="font-label-caps-wide text-[0.6875rem] text-[#414846] uppercase mt-1 block">
                {companyData.metrics.spacesLabel}
              </span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="font-serif text-3xl sm:text-4xl text-accent block font-medium">
                {companyData.metrics.governance}
              </span>
              <span className="font-label-caps-wide text-[0.6875rem] text-[#414846] uppercase mt-1 block">
                {companyData.metrics.governanceLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Right Editorial Inset Composition */}
        <div className="lg:col-span-5 relative space-y-6">
          <div className="hairline-all p-3 bg-[#D9D5CA]/40 shadow-sm">
            <div className="img-zoom-parent aspect-[4/5] bg-[#D9D5CA] relative">
              <img
                alt="Bespoke Bedroom Sanctuary by 4U Interior Decorator"
                className="w-full h-full object-cover"
                src={`${import.meta.env.BASE_URL}images/sanctuary-bedroom.jpg`}
                loading="lazy"
              />
            </div>
            <div className="pt-4 px-2 flex justify-between items-end">
              <div>
                <span className="font-label-caps-wide text-[0.6875rem] text-accent uppercase block">
                  Sanctuary Study
                </span>
                <span className="font-serif text-lg text-[#17352F] font-medium">
                  Acoustic Wood & Fluted Slat Joinery
                </span>
              </div>
              <span className="font-label-caps-wide text-xs text-[#414846] font-mono">TNL-24</span>
            </div>
          </div>

          {/* Architectural Monograph Quote Box */}
          <div className="bg-[#D9D5CA]/50 p-6 hairline-all relative">
            <Quote className="text-accent w-7 h-7 mb-2 opacity-80" />
            <p className="font-sans text-sm sm:text-base text-[#202522] italic leading-relaxed">
              "Space, light, and material purity must work in silent unison. True luxury does not shout; it breathes."
            </p>
            <span className="font-label-caps-wide text-[0.6875rem] text-[#414846] uppercase mt-3 block">
              — Atelier Principle, {companyData.name}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
