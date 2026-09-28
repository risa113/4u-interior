import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { companyData } from '../data/company';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#EBE7DC] hairline-t hairline-b" id="testimonials">
      <div className="max-w-7xl mx-auto px-5 md:px-16">
        {/* Header with Google Reviews Trust Callout */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <span className="font-label-caps-wide text-[0.6875rem] text-accent uppercase tracking-widest block mb-2">
              CLIENT VOICES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#17352F] tracking-tight">
              TRUSTED ACROSS TIRUNELVELI
            </h2>
          </div>

          <div className="mt-6 md:mt-0 flex items-center space-x-3 bg-[#FAF9F5] p-4 hairline-all shadow-sm">
            <div className="flex text-accent space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <div>
              <span className="font-serif text-base text-[#17352F] leading-none block font-semibold">
                {companyData.metrics.googleRating}
              </span>
              <span className="font-label-caps-wide text-[0.6875rem] text-[#414846] uppercase text-xs">
                {companyData.metrics.googleReviewsNote}
              </span>
            </div>
          </div>
        </div>

        {/* Testimonial Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Review 01 */}
          <div className="bg-[#FAF9F5] p-8 sm:p-10 hairline-all flex flex-col justify-between relative shadow-sm">
            <div>
              <Quote className="text-accent w-8 h-8 mb-4 opacity-80" />
              <blockquote className="font-serif text-xl sm:text-2xl text-[#17352F] leading-relaxed mb-6 font-normal">
                "Very good for interior work and false ceiling in low expense."
              </blockquote>
              <p className="font-sans text-sm text-[#414846] leading-relaxed">
                We contracted 4U for our complete independent villa in Tirunelveli town. The gypsum ceiling details, hidden profile strip lighting, and master wardrobe were executed with superb finishing well within our planned budget.
              </p>
            </div>
            <div className="pt-8 hairline-t mt-8 flex items-center justify-between">
              <div>
                <span className="font-sans text-sm font-semibold text-[#17352F] block">
                  Verified Tirunelveli Homeowner
                </span>
                <span className="font-label-caps-wide text-[0.6875rem] text-[#717976] uppercase">
                  Swami Nellaiappar Vicinity
                </span>
              </div>
              <CheckCircle2 className="w-5 h-5 text-accent" />
            </div>
          </div>

          {/* Review 02 */}
          <div className="bg-[#FAF9F5] p-8 sm:p-10 hairline-all flex flex-col justify-between relative shadow-sm">
            <div>
              <Quote className="text-accent w-8 h-8 mb-4 opacity-80" />
              <blockquote className="font-serif text-xl sm:text-2xl text-[#17352F] leading-relaxed mb-6 font-normal">
                "Great job for adorable price."
              </blockquote>
              <p className="font-sans text-sm text-[#414846] leading-relaxed">
                They handled our commercial office interior in Tirunelveli. Quick turn-around, respectful carpenters, and honest pricing with high standard modular units. Would definitely recommend their turnkey interior services.
              </p>
            </div>
            <div className="pt-8 hairline-t mt-8 flex items-center justify-between">
              <div>
                <span className="font-sans text-sm font-semibold text-[#17352F] block">
                  Commercial Client
                </span>
                <span className="font-label-caps-wide text-[0.6875rem] text-[#717976] uppercase">
                  Executive Space, Tirunelveli
                </span>
              </div>
              <CheckCircle2 className="w-5 h-5 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
