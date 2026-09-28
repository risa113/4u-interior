import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projectsData, portfolioCategories, ProjectItem } from '../data/projects';

interface PortfolioProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 md:py-32 bg-[#F5F2EA]" id="portfolio">
      <div className="max-w-7xl mx-auto px-5 md:px-16">
        {/* Section Title & Filter Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <span className="font-label-caps-wide text-[0.6875rem] text-accent uppercase tracking-widest block mb-2">
              03 / CURATED ARCHIVE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#17352F] tracking-tight">
              SELECTED WORKS & RESIDENCES
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0 font-label-caps-wide text-[0.6875rem] uppercase">
            {portfolioCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#17352F] text-[#FAF9F5] border-b-2 border-accent'
                      : 'border border-[#D9D5CA] bg-[#FAF9F5] text-[#202522] hover:border-[#17352F]'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Editorial Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, index) => {
            // Asymmetric layout spans matching Stitch:
            // 1st item: span-8, 2nd: span-4, 3rd: span-6, 4th: span-6, others: span-6
            let colSpan = 'lg:col-span-6';
            let aspectClass = 'aspect-[16/10]';

            if (activeCategory === 'all') {
              if (index === 0) {
                colSpan = 'lg:col-span-8';
                aspectClass = 'aspect-[16/10]';
              } else if (index === 1) {
                colSpan = 'lg:col-span-4';
                aspectClass = 'aspect-[4/5]';
              } else {
                colSpan = 'lg:col-span-6';
                aspectClass = 'aspect-[16/10]';
              }
            }

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`${colSpan} group cursor-pointer`}
              >
                <div className="hairline-all bg-[#D9D5CA]/35 p-3 transition-all duration-300 group-hover:shadow-md h-full flex flex-col justify-between">
                  <div>
                    <div className={`img-zoom-parent ${aspectClass} bg-[#D9D5CA] relative overflow-hidden`}>
                      <img
                        alt={project.title}
                        src={project.image}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[#17352F]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 sm:p-8">
                        <span className="bg-[#FAF9F5] text-[#17352F] px-4 sm:px-5 py-2 font-label-caps-wide text-xs uppercase tracking-wider border-l-2 border-accent shadow">
                          View Case Study →
                        </span>
                      </div>
                    </div>

                    <div className="pt-5 px-3">
                      <span className="font-label-caps-wide text-[0.6875rem] text-accent uppercase block mb-1">
                        {project.tag}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl text-[#17352F] font-medium group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-[#414846] mt-2 line-clamp-2">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="px-3 pt-4 hairline-t mt-4 flex justify-between items-center text-[#717976] text-xs">
                    <span className="font-mono">{project.code}</span>
                    <div className="flex items-center space-x-1 text-accent">
                      <span>{project.completedYear}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
