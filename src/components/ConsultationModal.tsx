import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Phone, MessageSquare } from 'lucide-react';
import { companyData } from '../data/company';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialTopic = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'residential',
    notes: initialTopic ? `Inquiry regarding: ${initialTopic}` : '',
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialTopic) {
      setFormData((prev) => ({
        ...prev,
        notes: `Inquiry regarding: ${initialTopic}`,
      }));
    }
  }, [initialTopic]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setIsSuccess(false);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name.';
    if (!formData.phone.trim()) {
      errors.phone = 'Please provide your contact number.';
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid phone number.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17352F]/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF9F5] max-w-xl w-full hairline-all shadow-2xl relative p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start border-b border-[#D9D5CA] pb-4 mb-6">
          <div>
            <span className="font-label-caps-wide text-[0.6875rem] text-accent uppercase tracking-widest block">
              Direct Atelier Booking
            </span>
            <h2 className="font-serif text-2xl text-[#17352F] mt-1 font-medium">
              REQUEST SPATIAL CONSULTATION
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#414846] hover:text-[#17352F] focus:outline-none cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4 animate-fadeIn">
            <CheckCircle className="w-12 h-12 text-[#17352F] mx-auto" />
            <h3 className="font-serif text-2xl text-[#17352F]">Consultation Request Logged</h3>
            <p className="font-sans text-sm text-[#414846] max-w-md mx-auto leading-relaxed">
              Thank you. Our senior designer at {companyData.address.line1} will get in touch shortly to schedule an on-site or studio consultation.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href={companyData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-[#17352F] text-[#FAF9F5] px-5 py-3 text-xs font-label-caps-wide uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4 text-accent" />
                <span>Instant WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="px-5 py-3 border border-[#D9D5CA] text-xs font-label-caps-wide uppercase tracking-wider hover:bg-[#F5F2EA]"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label className="font-label-caps-wide text-[0.6875rem] uppercase text-[#414846] block mb-1">
                Full Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your Name"
                className={`w-full bg-[#F5F2EA] border-0 border-b ${
                  formErrors.name ? 'border-red-600' : 'border-[#D9D5CA]'
                } px-3 py-2.5 text-sm text-[#202522] focus:border-accent focus:ring-0`}
              />
              {formErrors.name && <p className="text-red-700 text-xs mt-1">{formErrors.name}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-label-caps-wide text-[0.6875rem] uppercase text-[#414846] block mb-1">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="081227 09961"
                  className={`w-full bg-[#F5F2EA] border-0 border-b ${
                    formErrors.phone ? 'border-red-600' : 'border-[#D9D5CA]'
                  } px-3 py-2.5 text-sm text-[#202522] focus:border-accent focus:ring-0`}
                />
                {formErrors.phone && <p className="text-red-700 text-xs mt-1">{formErrors.phone}</p>}
              </div>

              <div>
                <label className="font-label-caps-wide text-[0.6875rem] uppercase text-[#414846] block mb-1">
                  Discipline
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-[#F5F2EA] border-0 border-b border-[#D9D5CA] px-3 py-2.5 text-sm text-[#202522] focus:border-accent focus:ring-0"
                >
                  <option value="residential">Home Interiors</option>
                  <option value="office">Office & Corporate</option>
                  <option value="commercial">Commercial & Retail</option>
                  <option value="modular">Modular Cabinetry & Kitchen</option>
                  <option value="false_ceiling">False Ceiling & Lighting</option>
                  <option value="turnkey">Full Turnkey Project</option>
                </select>
              </div>
            </div>

            <div>
              <label className="font-label-caps-wide text-[0.6875rem] uppercase text-[#414846] block mb-1">
                Project Notes / Location
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Property location in Tirunelveli, tentative timeline, or scope requirements..."
                className="w-full bg-[#F5F2EA] border-0 border-b border-[#D9D5CA] px-3 py-2 text-sm text-[#202522] focus:border-accent focus:ring-0"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#17352F] text-[#FAF9F5] py-3.5 font-label-caps-wide text-xs uppercase tracking-widest hover:bg-[#30483F] hover:border-b-2 hover:border-accent transition-colors disabled:opacity-70 cursor-pointer"
              >
                {isSubmitting ? 'Transmitting Request...' : 'Confirm Consultation Request'}
              </button>
            </div>

            <div className="pt-4 border-t border-[#D9D5CA] flex items-center justify-between text-xs text-[#717976]">
              <span>Need immediate assistance?</span>
              <a
                href={`tel:${companyData.phone}`}
                className="inline-flex items-center space-x-1 text-[#17352F] font-semibold hover:text-accent"
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>Call {companyData.phoneFormatted}</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
