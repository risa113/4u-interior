import React from 'react';
import { companyData } from '../data/company';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#EBE7DC] border-t border-[#D9D5CA] transition-colors duration-200 ease-in-out">
      <div className="w-full max-w-7xl mx-auto px-5 md:px-16 py-16">
        {/* Top Grid: Brand Identity & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Monogram & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-serif text-2xl sm:text-3xl text-[#17352F] tracking-tight uppercase block font-medium">
              {companyData.name}
            </span>
            <p className="font-sans text-xs sm:text-sm text-[#414846] max-w-sm leading-relaxed">
              Creating thoughtful, enduring interiors for modern living in Tirunelveli since {companyData.establishmentYear}. Bespoke spatial architecture, false ceiling precision, and turnkey cabinetry craftsmanship.
            </p>
            <div className="pt-2">
              <span className="font-label-caps-wide text-[0.6875rem] text-accent uppercase block">
                Atelier Address:
              </span>
              <p className="font-sans text-xs sm:text-sm text-[#202522] mt-1">
                {companyData.address.line1}, {companyData.address.city}, {companyData.address.state} {companyData.address.pincode}
              </p>
            </div>
          </div>

          {/* Discipline Columns */}
          <div>
            <span className="font-label-caps-wide text-[0.6875rem] uppercase text-[#17352F] font-semibold block mb-4">
              Disciplines
            </span>
            <ul className="space-y-3 font-sans text-xs sm:text-sm">
              <li>
                <a
                  className="text-[#414846] hover:text-[#17352F] transition-colors duration-200"
                  href="#portfolio"
                  onClick={(e) => scrollTo(e, 'portfolio')}
                >
                  Architectural Portfolio
                </a>
              </li>
              <li>
                <a
                  className="text-[#414846] hover:text-[#17352F] transition-colors duration-200"
                  href="#services"
                  onClick={(e) => scrollTo(e, 'services')}
                >
                  Residential Interiors
                </a>
              </li>
              <li>
                <a
                  className="text-[#414846] hover:text-[#17352F] transition-colors duration-200"
                  href="#services"
                  onClick={(e) => scrollTo(e, 'services')}
                >
                  Commercial Design
                </a>
              </li>
              <li>
                <a
                  className="text-[#414846] hover:text-[#17352F] transition-colors duration-200"
                  href="#services"
                  onClick={(e) => scrollTo(e, 'services')}
                >
                  Turnkey Execution
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Columns */}
          <div>
            <span className="font-label-caps-wide text-[0.6875rem] uppercase text-[#17352F] font-semibold block mb-4">
              Atelier
            </span>
            <ul className="space-y-3 font-sans text-xs sm:text-sm">
              <li>
                <a
                  className="text-[#414846] hover:text-[#17352F] transition-colors duration-200"
                  href="#philosophy"
                  onClick={(e) => scrollTo(e, 'philosophy')}
                >
                  Material Philosophy
                </a>
              </li>
              <li>
                <a
                  className="text-[#414846] hover:text-[#17352F] transition-colors duration-200"
                  href="#process"
                  onClick={(e) => scrollTo(e, 'process')}
                >
                  Execution Process
                </a>
              </li>
              <li>
                <a
                  className="text-[#414846] hover:text-[#17352F] transition-colors duration-200"
                  href="#contact"
                  onClick={(e) => scrollTo(e, 'contact')}
                >
                  Schedule Consultation
                </a>
              </li>
              <li>
                <a
                  className="text-[#414846] hover:text-[#17352F] transition-colors duration-200"
                  href="#testimonials"
                  onClick={(e) => scrollTo(e, 'testimonials')}
                >
                  Client Journal
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Connect */}
          <div>
            <span className="font-label-caps-wide text-[0.6875rem] uppercase text-[#17352F] font-semibold block mb-4">
              Direct Line
            </span>
            <p className="font-serif text-lg text-[#17352F] mb-2 font-medium">
              <a href={`tel:${companyData.phone}`} className="hover:text-accent transition-colors">
                {companyData.phoneFormatted}
              </a>
            </p>
            <span className="font-sans text-xs text-[#414846] block mb-4">
              {companyData.workingHours.weekdays}
            </span>
            <div className="flex items-center space-x-2 text-[#414846]">
              <a
                aria-label="Instagram Atelier Journal"
                className="hover:text-accent transition-colors inline-flex items-center space-x-2 text-xs font-label-caps-wide uppercase"
                href="https://instagram.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <span>Instagram / Atelier Journal</span>
              </a>
            </div>
          </div>
        </div>

        {/* Hairline Separation & Bottom Meta */}
        <div className="pt-8 hairline-t flex flex-col sm:flex-row justify-between items-center text-xs text-[#414846] gap-4">
          <p>© {currentYear} {companyData.name} Atelier. Tirunelveli, Tamil Nadu. Spatial Craftsmanship & Architecture.</p>
          <div className="flex items-center space-x-6">
            <a className="hover:text-[#17352F] transition-colors" href="#contact">
              Confidentiality & Privacy
            </a>
            <span className="text-[#D9D5CA]">•</span>
            <span className="font-label-caps-wide text-[0.6875rem] uppercase tracking-wider text-accent">
              Tirunelveli, India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
