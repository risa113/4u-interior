import React, { useState } from 'react';
import { Home, Building2, Store, CookingPot, Lightbulb, Handshake, ArrowRight, Check } from 'lucide-react';
import { servicesData, ServiceItem } from '../data/services';

interface ServicesProps {
  onSelectService?: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(servicesData[0].id);
  const [modalService, setModalService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'home':
        return <Home className="w-6 h-6" />;
      case 'corporate_fare':
        return <Building2 className="w-6 h-6" />;
      case 'storefront':
        return <Store className="w-6 h-6" />;
      case 'countertops':
        return <CookingPot className="w-6 h-6" />;
      case 'wb_incandescent':
        return <Lightbulb className="w-6 h-6" />;
      case 'handshake':
      default:
        return <Handshake className="w-6 h-6" />;
    }
  };

  const handleCardClick = (service: ServiceItem) => {
    setActiveServiceId(service.id);
    setModalService(service);
    if (onSelectService) {
      onSelectService(service);
    }
  };

  return (
    <section className="py-24 bg-[#EBE7DC] hairline-t hairline-b" id="services">
      <div className="max-w-7xl mx-auto px-5 md:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-6 hairline-b">
          <div>
            <span className="font-label-caps-wide text-[0.6875rem] text-accent uppercase tracking-widest block mb-2">
              02 / EXPERTISE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#17352F] tracking-tight">
              DISCIPLINES OF SPATIAL DESIGN
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#414846] max-w-md mt-4 md:mt-0 leading-relaxed">
            From full architectural transformations to specialized modular carpentry, our in-house teams oversee every phase with millimeter tolerances.
          </p>
        </div>

        {/* Editorial Interactive Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D9D5CA] hairline-all">
          {servicesData.map((service) => {
            const isActive = activeServiceId === service.id;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveServiceId(service.id)}
                onClick={() => handleCardClick(service)}
                className={`p-8 sm:p-10 flex flex-col justify-between group transition-all duration-300 cursor-pointer ${
                  isActive ? 'bg-[#FAF9F5] shadow-inner ring-1 ring-accent/30' : 'bg-[#F5F2EA] hover:bg-[#FAF9F5]'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-serif text-2xl text-accent font-medium">{service.number}</span>
                    <span className="text-[#30483F] group-hover:text-[#17352F] transition-colors">
                      {getServiceIcon(service.icon)}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#17352F] mb-3 group-hover:text-accent transition-colors font-medium">
                    {service.title}
                  </h3>

                  <p className="font-sans text-sm text-[#414846] leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 hairline-t mt-6 flex items-center justify-between">
                  <span className="font-label-caps-wide text-[0.6875rem] text-[#717976] uppercase tracking-wider">
                    {service.tags}
                  </span>
                  <div className="flex items-center space-x-1 text-accent">
                    <span className="text-xs uppercase font-label-caps-wide opacity-0 group-hover:opacity-100 transition-opacity">
                      Details
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal for deeper exploration */}
      {modalService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17352F]/70 backdrop-blur-sm animate-fadeIn"
          onClick={() => setModalService(null)}
        >
          <div
            className="bg-[#FAF9F5] max-w-2xl w-full p-6 sm:p-8 hairline-all shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start border-b border-[#D9D5CA] pb-4 mb-6">
              <div>
                <span className="font-label-caps-wide text-xs text-accent uppercase tracking-widest block">
                  Discipline {modalService.number}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#17352F] mt-1 font-medium">
                  {modalService.title}
                </h3>
              </div>
              <button
                onClick={() => setModalService(null)}
                className="text-[#414846] hover:text-[#17352F] text-2xl font-serif px-2 focus:outline-none"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="aspect-[4/3] bg-[#D9D5CA] overflow-hidden hairline-all">
                <img
                  src={modalService.image}
                  alt={modalService.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <p className="font-sans text-sm text-[#414846] leading-relaxed">
                  {modalService.description}
                </p>
                <div className="mt-4">
                  <span className="font-label-caps-wide text-[0.6875rem] text-accent uppercase tracking-wider block mb-2">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-2">
                    {modalService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs text-[#202522]">
                        <Check className="w-3.5 h-3.5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D9D5CA] flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="font-label-caps-wide text-xs text-[#717976] uppercase">
                {modalService.tags}
              </span>
              <a
                href="#contact"
                onClick={() => setModalService(null)}
                className="w-full sm:w-auto bg-[#17352F] text-[#FAF9F5] px-6 py-3 font-label-caps-wide text-xs uppercase tracking-widest text-center hover:bg-accent transition-colors"
              >
                Inquire For This Discipline
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
