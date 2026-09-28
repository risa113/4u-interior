import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { companyData } from '../data/company';

interface NavbarProps {
  onRequestConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('portfolio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking
      const sections = ['philosophy', 'services', 'portfolio', 'process', 'testimonials', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#philosophy', label: 'Philosophy', id: 'philosophy' },
    { href: '#services', label: 'Services', id: 'services' },
    { href: '#portfolio', label: 'Portfolio', id: 'portfolio' },
    { href: '#process', label: 'Process', id: 'process' },
    { href: '#testimonials', label: 'Journal', id: 'testimonials' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-out border-b ${
        isScrolled
          ? 'bg-[#F5F2EA]/95 backdrop-blur-md border-[#D9D5CA] shadow-sm'
          : 'bg-[#F5F2EA]/90 backdrop-blur-sm border-[#D9D5CA]'
      }`}
    >
      <div className="flex justify-between items-center w-full px-5 md:px-16 max-w-7xl mx-auto h-20">
        {/* Brand Logo / Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex flex-col group focus:outline-none focus:ring-1 focus:ring-accent"
          aria-label="4U Interior Decorator Home"
        >
          <span className="font-headline-sm text-xl md:text-2xl tracking-tight text-[#17352F] uppercase group-hover:text-accent transition-colors duration-300">
            {companyData.name}
          </span>
          <span className="font-label-caps-wide text-[0.6875rem] tracking-widest text-[#30483F] uppercase -mt-0.5">
            {companyData.address.city} | Est. {companyData.establishmentYear}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`font-label-caps-wide text-[0.6875rem] uppercase pb-1 transition-colors duration-300 relative ${
                  isActive
                    ? 'text-[#17352F] font-semibold border-b-2 border-accent'
                    : 'text-[#414846] hover:text-[#17352F]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Trailing Quick Action & Phone */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <a
            href={`tel:${companyData.phone}`}
            className="hidden sm:flex items-center space-x-2 text-[#202522] hover:text-[#17352F] transition-colors duration-200"
            aria-label={`Call ${companyData.phoneFormatted}`}
          >
            <Phone className="w-4 h-4 text-accent" />
            <span className="font-label-caps-wide text-[0.6875rem] tracking-wider font-medium">
              {companyData.phoneFormatted}
            </span>
          </a>

          <button
            onClick={onRequestConsultation}
            className="bg-[#17352F] text-[#FAF9F5] px-4 md:px-5 py-3 rounded-none font-label-caps-wide text-[0.6875rem] uppercase tracking-widest hover:bg-[#30483F] hover:border-b-2 hover:border-accent transition-all duration-300 shadow-sm cursor-pointer whitespace-nowrap"
          >
            Request Consultation
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation' : 'Open Navigation'}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden p-2 text-[#17352F] hover:text-accent focus:outline-none focus:ring-1 focus:ring-accent"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Flyout Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-[#F5F2EA]/98 backdrop-blur-lg border-b border-[#D9D5CA] px-6 py-8 flex flex-col justify-between overflow-y-auto animate-fadeIn z-50">
          <div className="flex flex-col space-y-4">
            <span className="font-label-caps-wide text-xs text-accent uppercase tracking-widest mb-2">
              Navigation Menu
            </span>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`font-label-caps-wide text-sm uppercase py-3 border-b border-[#D9D5CA] flex justify-between items-center ${
                  activeSection === link.id ? 'text-accent font-semibold' : 'text-[#202522]'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#717976]">→</span>
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-[#D9D5CA] space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-label-caps-wide text-xs text-[#414846] uppercase">Direct Studio Line:</span>
              <a
                href={`tel:${companyData.phone}`}
                className="font-label-caps-wide text-xs font-bold text-[#17352F] hover:text-accent"
              >
                {companyData.phoneFormatted}
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestConsultation();
              }}
              className="w-full bg-[#17352F] text-[#FAF9F5] py-3.5 font-label-caps-wide text-xs uppercase tracking-widest text-center"
            >
              Book Studio Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
