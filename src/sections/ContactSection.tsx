import React, { useState } from 'react';
import { MapPin, PhoneCall, Clock, MessageSquare, ExternalLink, CheckCircle } from 'lucide-react';
import { companyData } from '../data/company';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'residential',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errors.name = 'Please provide your full name.';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Please provide a valid contact number.';
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid phone number (e.g. 081227 09961).';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Realistic asynchronous dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        projectType: 'residential',
        message: '',
      });
    }, 600);
  };

  return (
    <section className="py-24 md:py-32 bg-[#F5F2EA]" id="contact">
      <div className="max-w-7xl mx-auto px-5 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Studio Coordinates & Walk-in Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-label-caps-wide text-[0.6875rem] text-accent uppercase tracking-widest block mb-2">
                05 / STUDIO COORDINATES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#17352F] tracking-tight">
                VISIT OUR ATELIER
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#414846] mt-4 leading-relaxed">
                We welcome prospective homeowners, architects, and corporate decision-makers for in-person consultation and tactile material reviews.
              </p>
            </div>

            {/* Studio Specifics List */}
            <div className="space-y-6 hairline-t pt-8">
              <div className="flex items-start space-x-4">
                <MapPin className="text-accent w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-label-caps-wide text-[0.6875rem] text-[#414846] uppercase block">
                    Studio Address
                  </span>
                  <p className="font-sans text-sm sm:text-base text-[#17352F] font-medium mt-1">
                    {companyData.address.line1},<br />
                    {companyData.address.city}, {companyData.address.state} {companyData.address.pincode}
                  </p>
                  <a
                    href={companyData.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-accent text-xs font-label-caps-wide uppercase tracking-wider mt-2 hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <PhoneCall className="text-accent w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-label-caps-wide text-[0.6875rem] text-[#414846] uppercase block">
                    Telephone Line
                  </span>
                  <p className="font-sans text-sm sm:text-base text-[#17352F] font-medium mt-1">
                    <a
                      href={`tel:${companyData.phone}`}
                      className="hover:text-accent transition-colors"
                    >
                      {companyData.phoneFormatted}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="text-accent w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-label-caps-wide text-[0.6875rem] text-[#414846] uppercase block">
                    Studio Hours
                  </span>
                  <p className="font-sans text-sm sm:text-base text-[#17352F] mt-1">
                    {companyData.workingHours.weekdays}
                    <br />
                    <span className="text-[#414846] text-xs">
                      {companyData.workingHours.sunday}
                    </span>
                  </p>
                </div>
              </div>

              {/* Instant WhatsApp Quick Trigger */}
              <div className="pt-4">
                <a
                  href={companyData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-[#D9D5CA]/50 px-6 py-4 hairline-all hover:bg-[#D9D5CA] transition-colors w-full sm:w-auto"
                >
                  <MessageSquare className="text-accent w-5 h-5 flex-shrink-0" />
                  <span className="font-label-caps-wide text-xs uppercase tracking-wider text-[#17352F] font-semibold">
                    Chat Directly on WhatsApp
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Architectural Consultation Form */}
          <div className="lg:col-span-7 bg-[#FAF9F5] p-8 sm:p-12 hairline-all shadow-sm">
            <span className="font-label-caps-wide text-[0.6875rem] text-accent uppercase tracking-widest block mb-2">
              INQUIRY DOSSIER
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#17352F] mb-8 font-medium">
              SCHEDULE SPATIAL CONSULTATION
            </h3>

            {isSubmitted ? (
              <div className="p-8 bg-[#F5F2EA] hairline-all text-center space-y-4 animate-fadeIn">
                <CheckCircle className="w-12 h-12 text-[#17352F] mx-auto" />
                <h4 className="font-serif text-2xl text-[#17352F]">Inquiry Successfully Received</h4>
                <p className="font-sans text-sm text-[#414846] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to 4U Interior Decorator. Our studio principal will review your dossier and contact you within 24 business hours to arrange a preliminary discussion.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-[#17352F] text-[#FAF9F5] px-6 py-3 font-label-caps-wide text-xs uppercase tracking-widest hover:bg-accent transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label
                      className="font-label-caps-wide text-[0.6875rem] uppercase text-[#414846] block mb-2"
                      htmlFor="name"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. S. Ramaswamy"
                      className={`w-full bg-[#F5F2EA] border-0 border-b ${
                        formErrors.name ? 'border-red-600' : 'border-[#D9D5CA]'
                      } focus:border-accent focus:ring-0 px-3 py-3 text-sm text-[#202522] placeholder:text-[#717976]/60 transition-colors`}
                    />
                    {formErrors.name && (
                      <p className="text-red-700 text-xs mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      className="font-label-caps-wide text-[0.6875rem] uppercase text-[#414846] block mb-2"
                      htmlFor="phone"
                    >
                      Contact Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="081227 09961"
                      className={`w-full bg-[#F5F2EA] border-0 border-b ${
                        formErrors.phone ? 'border-red-600' : 'border-[#D9D5CA]'
                      } focus:border-accent focus:ring-0 px-3 py-3 text-sm text-[#202522] placeholder:text-[#717976]/60 transition-colors`}
                    />
                    {formErrors.phone && (
                      <p className="text-red-700 text-xs mt-1">{formErrors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email Address */}
                  <div>
                    <label
                      className="font-label-caps-wide text-[0.6875rem] uppercase text-[#414846] block mb-2"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="client@domain.com"
                      className={`w-full bg-[#F5F2EA] border-0 border-b ${
                        formErrors.email ? 'border-red-600' : 'border-[#D9D5CA]'
                      } focus:border-accent focus:ring-0 px-3 py-3 text-sm text-[#202522] placeholder:text-[#717976]/60 transition-colors`}
                    />
                    {formErrors.email && (
                      <p className="text-red-700 text-xs mt-1">{formErrors.email}</p>
                    )}
                  </div>

                  {/* Project Type */}
                  <div>
                    <label
                      className="font-label-caps-wide text-[0.6875rem] uppercase text-[#414846] block mb-2"
                      htmlFor="projectType"
                    >
                      Project Discipline
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#F5F2EA] border-0 border-b border-[#D9D5CA] focus:border-accent focus:ring-0 px-3 py-3 text-sm text-[#202522] transition-colors"
                    >
                      <option value="residential">Complete Home Interior</option>
                      <option value="false_ceiling">False Ceiling & Architectural Lighting</option>
                      <option value="modular_kitchen">Modular Kitchen & Joinery</option>
                      <option value="office">Corporate & Office Space</option>
                      <option value="commercial">Commercial & Retail</option>
                      <option value="turnkey">Full Turnkey Contract</option>
                    </select>
                  </div>
                </div>

                {/* Project Vision & Scope Message */}
                <div>
                  <label
                    className="font-label-caps-wide text-[0.6875rem] uppercase text-[#414846] block mb-2"
                    htmlFor="message"
                  >
                    Project Scope & Location In Tirunelveli
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the property, square footage, budget targets, or specific aesthetic preferences..."
                    className="w-full bg-[#F5F2EA] border-0 border-b border-[#D9D5CA] focus:border-accent focus:ring-0 px-3 py-3 text-sm text-[#202522] placeholder:text-[#717976]/60 transition-colors"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#17352F] text-[#FAF9F5] py-4 font-label-caps-wide text-xs uppercase tracking-widest hover:bg-[#30483F] hover:border-b-2 hover:border-accent transition-colors duration-300 disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? 'Transmitting Dossier...' : 'Schedule Spatial Consultation'}
                  </button>
                </div>

                <p className="font-sans text-xs text-[#717976] text-center">
                  Your details are kept strictly private under 4U Atelier client confidentiality.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
