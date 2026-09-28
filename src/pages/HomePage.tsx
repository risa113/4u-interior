import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../sections/Hero';
import { Philosophy } from '../sections/Philosophy';
import { Services } from '../sections/Services';
import { Portfolio } from '../sections/Portfolio';
import { WhyChooseUs } from '../sections/WhyChooseUs';
import { Process } from '../sections/Process';
import { Testimonials } from '../sections/Testimonials';
import { CTASection } from '../sections/CTASection';
import { ContactSection } from '../sections/ContactSection';
import { Footer } from '../components/Footer';
import { ProjectModal } from '../components/ProjectModal';
import { ConsultationModal } from '../components/ConsultationModal';
import { ProjectItem } from '../data/projects';

export const HomePage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [consultationTopic, setConsultationTopic] = useState('');

  const handleOpenConsultation = (topic: string = '') => {
    setConsultationTopic(topic);
    setIsConsultationModalOpen(true);
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsConsultationModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F2EA] text-[#202522] flex flex-col font-sans selection:bg-accent selection:text-[#FAF9F5]">
      {/* Top Navigation */}
      <Navbar onRequestConsultation={() => handleOpenConsultation('General Consultation')} />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero onStartProject={handleScrollToContact} />

        {/* 2. Philosophy & Heritage */}
        <Philosophy />

        {/* 3. Services / Disciplines of Spatial Design */}
        <Services />

        {/* 4. Curated Portfolio Archive */}
        <Portfolio onSelectProject={(project) => setSelectedProject(project)} />

        {/* 5. The Atelier Standard / Why 4U */}
        <WhyChooseUs onScheduleDiscussion={handleScrollToContact} />

        {/* 6. Process & Methodology */}
        <Process />

        {/* 7. Client Voices / Verified Reviews */}
        <Testimonials />

        {/* 8. Call To Action */}
        <CTASection onConsultationClick={() => handleOpenConsultation('Project Inquiry')} />

        {/* 9. Contact Section & Coordinates */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Case Study Dossier Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestConsultation={(projectTitle) => handleOpenConsultation(`Case Study: ${projectTitle}`)}
      />

      {/* Dedicated Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        initialTopic={consultationTopic}
      />
    </div>
  );
};
