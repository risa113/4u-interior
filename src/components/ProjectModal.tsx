import React, { useEffect } from 'react';
import { X, MapPin, Calendar, Check, Layers, Sparkles } from 'lucide-react';
import { ProjectItem } from '../data/projects';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestConsultation: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestConsultation,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17352F]/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF9F5] max-w-4xl w-full max-h-[90vh] overflow-y-auto hairline-all shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-[#FAF9F5]/95 backdrop-blur border-b border-[#D9D5CA] px-6 py-4 flex justify-between items-center z-10">
          <div>
            <span className="font-label-caps-wide text-[0.6875rem] text-accent uppercase tracking-widest block">
              Case Study Dossier • {project.code}
            </span>
            <h2 className="font-serif text-xl sm:text-2xl text-[#17352F] font-medium">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#414846] hover:text-[#17352F] focus:outline-none cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Image */}
        <div className="relative aspect-[16/9] bg-[#D9D5CA] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-[#17352F]/90 backdrop-blur px-4 py-1.5 text-xs text-[#FAF9F5] font-label-caps-wide uppercase tracking-wider">
            {project.tag}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          <div>
            <h3 className="font-serif text-xl text-[#17352F] mb-2">{project.subtitle}</h3>
            <p className="font-sans text-sm sm:text-base text-[#414846] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Quick Specifications Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#F5F2EA] hairline-all text-xs">
            <div>
              <span className="font-label-caps-wide text-[0.6875rem] text-[#717976] uppercase block">Location</span>
              <div className="flex items-center space-x-1 text-[#17352F] font-medium mt-1">
                <MapPin className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                <span className="truncate">{project.location}</span>
              </div>
            </div>

            <div>
              <span className="font-label-caps-wide text-[0.6875rem] text-[#717976] uppercase block">Year</span>
              <div className="flex items-center space-x-1 text-[#17352F] font-medium mt-1">
                <Calendar className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                <span>{project.completedYear}</span>
              </div>
            </div>

            <div>
              <span className="font-label-caps-wide text-[0.6875rem] text-[#717976] uppercase block">Discipline</span>
              <div className="flex items-center space-x-1 text-[#17352F] font-medium mt-1">
                <Layers className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                <span>{project.categoryLabel}</span>
              </div>
            </div>

            {project.area && (
              <div>
                <span className="font-label-caps-wide text-[0.6875rem] text-[#717976] uppercase block">Footprint</span>
                <div className="flex items-center space-x-1 text-[#17352F] font-medium mt-1">
                  <Sparkles className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span>{project.area}</span>
                </div>
              </div>
            )}
          </div>

          {/* Detailed Lists */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-label-caps-wide text-xs text-accent uppercase tracking-wider mb-3">
                Architectural Scope Executed:
              </h4>
              <ul className="space-y-2">
                {project.scope.map((item, idx) => (
                  <li key={idx} className="flex items-start text-xs sm:text-sm text-[#202522]">
                    <Check className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-label-caps-wide text-xs text-accent uppercase tracking-wider mb-3">
                Material & Hardware Palette:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.materials.map((mat, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-[#F5F2EA] hairline-all text-xs text-[#17352F]"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-6 border-t border-[#D9D5CA] flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="font-label-caps-wide text-xs text-[#717976] uppercase">
              Tirunelveli Atelier Archive
            </span>
            <div className="flex items-center space-x-4 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 border border-[#D9D5CA] text-xs font-label-caps-wide uppercase tracking-wider hover:bg-[#F5F2EA] transition-colors cursor-pointer"
              >
                Close Archive
              </button>
              <button
                onClick={() => {
                  onClose();
                  onRequestConsultation(project.title);
                }}
                className="w-full sm:w-auto bg-[#17352F] text-[#FAF9F5] px-6 py-3 font-label-caps-wide text-xs uppercase tracking-widest hover:bg-accent transition-colors cursor-pointer"
              >
                Inquire For Similar Space
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
