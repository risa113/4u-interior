import React from 'react';
import { Phone } from 'lucide-react';
import { companyData } from '../data/company';

interface CTASectionProps {
  onConsultationClick: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onConsultationClick }) => {
  return (
    <section className="relative py-28 md:py-36 bg-[#17352F] text-[#FAF9F5] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[#17352F] z-0"></div>
      <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#30483F]/40 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-16 text-center">
        <span className="font-label-caps-wide text-[0.6875rem] tracking-[0.25em] text-accent uppercase block mb-4">
          BEGIN YOUR SPATIAL TRANSFORMATION
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#FAF9F5] tracking-tight mb-8 font-normal">
          LET’S CREATE YOUR NEXT SPACE.
        </h2>

        <p className="font-sans text-base sm:text-lg text-[#D9D5CA] max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Have a home, office, or commercial space in mind in Tirunelveli? Let’s turn your architectural vision into a beautifully finished interior.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button
            onClick={onConsultationClick}
            className="w-full sm:w-auto bg-accent text-[#FAF9F5] px-10 py-4 font-label-caps-wide text-xs uppercase tracking-widest hover:bg-[#FAF9F5] hover:text-[#17352F] transition-all duration-300 font-semibold shadow-md cursor-pointer"
          >
            Get A Consultation
          </button>

          <a
            href={`tel:${companyData.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 border border-[#D9D5CA]/50 text-[#FAF9F5] px-8 py-4 font-label-caps-wide text-xs uppercase tracking-widest hover:bg-[#FAF9F5]/10 hover:border-[#FAF9F5] transition-all duration-300"
          >
            <Phone className="w-4 h-4 text-accent" />
            <span>Direct Call: {companyData.phoneFormatted}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
