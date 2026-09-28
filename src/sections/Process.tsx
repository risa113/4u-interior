import React from 'react';

export const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "CONSULTATION",
      description:
        "Spatial analysis, on-site laser measurements, requirement discovery, lifestyle rhythms, and realistic budget mapping at our Nellaiappar High Rd studio.",
      stepLabel: "Step 1 • Discovery",
    },
    {
      number: "02",
      title: "CONCEPT & DESIGN",
      description:
        "Detailed material moodboards, photorealistic 3D visual walkthroughs, false ceiling illumination blueprints, and exact material selections.",
      stepLabel: "Step 2 • Visualization",
    },
    {
      number: "03",
      title: "ARTISANAL EXECUTION",
      description:
        "Master carpenters fabricate joinery, precision gypsum ceilings take form, concealed wiring is placed, and surface finishes are meticulously applied.",
      stepLabel: "Step 3 • Craftsmanship",
    },
    {
      number: "04",
      title: "SEAMLESS DELIVERY",
      description:
        "Deep site cleaning, mechanical tests, final brass hardware calibration, styling, and comprehensive turnkey walkthrough for handover.",
      stepLabel: "Step 4 • Turnkey Handover",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F5F2EA]" id="process">
      <div className="max-w-7xl mx-auto px-5 md:px-16">
        {/* Header */}
        <div className="mb-16 pb-6 hairline-b flex flex-col md:flex-row justify-between items-start md:items-end">
          <div>
            <span className="font-label-caps-wide text-[0.6875rem] text-accent uppercase tracking-widest block mb-2">
              04 / METHODOLOGY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#17352F] tracking-tight">
              HOW WE BRING VISIONS TO LIFE
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#414846] max-w-sm mt-4 md:mt-0 leading-relaxed">
            A disciplined, stress-free four-stage journey from conceptual sketch to pristine keys-in-hand delivery.
          </p>
        </div>

        {/* 4 Horizontal Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="p-8 bg-[#FAF9F5] hairline-all relative hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-4xl sm:text-5xl text-accent block mb-4 font-normal">
                  {step.number}
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-[#17352F] mb-3 font-medium tracking-tight">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-[#414846] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>
              <span className="font-label-caps-wide text-[0.6875rem] text-accent uppercase tracking-wider block border-t border-[#D9D5CA] pt-4">
                {step.stepLabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
