import React from 'react';
import { ArrowRight, MapPin, Compass, ArrowDown } from 'lucide-react';
import { companyData } from '../data/company';

interface HeroProps {
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject }) => {
  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPhilosophy = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('philosophy');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen pt-20 flex flex-col justify-between overflow-hidden bg-[#17352F] text-[#FAF9F5]">
      {/* Visual Backdrop Hero Image with Cinematic Filters */}
      <div className="absolute inset-0 z-0">
        <img
          alt="4U Interior Decorator Signature Living Architecture in Tirunelveli"
          src={`${import.meta.env.BASE_URL}images/hero-living.jpg`}
          className="w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.05] transition-transform duration-1000 scale-100 hover:scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17352F] via-[#17352F]/65 to-transparent"></div>
        <div className="absolute inset-0 bg-[#17352F]/40 backdrop-blur-[0.5px]"></div>
      </div>

      {/* Editorial Central Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-16 w-full pt-24 md:pt-32 pb-16 flex-grow flex flex-col justify-center">
        {/* Monograph Badge */}
        <div className="inline-flex items-center space-x-3 mb-6">
          <span className="w-8 h-[1px] bg-accent"></span>
          <span className="font-label-caps-wide text-[0.6875rem] tracking-[0.25em] text-[#D9D5CA] uppercase">
            Spatial Craftsmanship • {companyData.address.city}
          </span>
        </div>

        {/* Main Seriphic Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-[#FAF9F5] max-w-4xl tracking-tight leading-[1.08] mb-6 font-normal">
          CRAFTING SPACES THAT FEEL LIKE HOME.
        </h1>

        {/* Editorial Narrative Paragraph */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-[#D9D5CA] max-w-2xl mb-10 leading-relaxed font-light">
          Premium interior solutions for distinguished homes, executive offices, and commercial spaces across Tirunelveli and Southern Tamil Nadu. Architectural precision engineered for generations.
        </p>

        {/* Action Group */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#portfolio"
            onClick={scrollToPortfolio}
            className="bg-[#FAF9F5] text-[#17352F] px-8 sm:px-9 py-4 rounded-none font-label-caps-wide text-xs uppercase tracking-widest text-center hover:bg-accent hover:text-[#FAF9F5] transition-all duration-300 shadow-md font-medium cursor-pointer"
          >
            Explore Our Work
          </a>
          <button
            onClick={onStartProject}
            className="inline-flex items-center justify-center space-x-3 border border-[#D9D5CA]/60 text-[#FAF9F5] px-8 py-4 rounded-none font-label-caps-wide text-xs uppercase tracking-widest hover:bg-[#FAF9F5]/10 hover:border-[#FAF9F5] transition-all duration-300 cursor-pointer"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 text-accent" />
          </button>
        </div>
      </div>

      {/* Bottom Status Bar & Blueprint Hairlines */}
      <div className="relative z-10 w-full border-t border-[#D9D5CA]/25 bg-[#17352F]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-5 md:px-16 py-5 grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-[#D9D5CA] text-xs font-sans">
          <div className="flex items-center space-x-3">
            <span className="text-accent font-serif text-2xl font-medium">{companyData.yearsOfExperience}</span>
            <span className="font-label-caps-wide text-[0.6875rem] leading-tight text-[#D9D5CA] uppercase">
              Years of Spatial Craftsmanship
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <Compass className="text-accent w-6 h-6 flex-shrink-0" />
            <span className="font-label-caps-wide text-[0.6875rem] leading-tight text-[#D9D5CA] uppercase">
              Turnkey Execution & Joinery
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-3 col-span-1">
            <MapPin className="text-accent w-6 h-6 flex-shrink-0" />
            <span className="font-label-caps-wide text-[0.6875rem] leading-tight text-[#D9D5CA] uppercase">
              Swami Nellaiappar High Rd
            </span>
          </div>

          <a
            href="#philosophy"
            onClick={scrollToPhilosophy}
            className="flex justify-end items-center space-x-2 text-right group cursor-pointer focus:outline-none"
            aria-label="Scroll to explore atelier details"
          >
            <span className="font-label-caps-wide text-[0.6875rem] text-[#D9D5CA] group-hover:text-accent uppercase transition-colors">
              Explore Atelier
            </span>
            <ArrowDown className="text-accent w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
