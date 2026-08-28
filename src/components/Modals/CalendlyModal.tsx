import React, { useState } from 'react';
import { X, Calendar, Clock, ShieldCheck, ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../../data/notaryData';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceId?: string;
  serviceTitle?: string;
  defaultFee?: string;
  duration?: string;
  placeholderUrl?: string;
}

export const CalendlyModal: React.FC<CalendlyModalProps> = ({
  isOpen,
  onClose,
  serviceId = 'general',
  serviceTitle = 'Standard Notary Appointment',
  defaultFee = '$15–$35 Convenience Fee + notarial fees',
  duration = '30–60 minutes',
  placeholderUrl = '[CALENDLY BOOKING LINK]',
}) => {
  const [customCalendlyUrl, setCustomCalendlyUrl] = useState(() => {
    return localStorage.getItem('signatureone_calendly_url') || '';
  });
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  const handleLaunchBooking = () => {
    if (customCalendlyUrl) {
      window.open(customCalendlyUrl, '_blank', 'noopener,noreferrer');
    } else {
      // Show polite notice about placeholder
      alert(`This action opens your direct Calendly booking page for ${serviceTitle}. Destination placeholder: ${placeholderUrl}`);
    }
  };

  const handleSaveCustomUrl = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('signatureone_calendly_url', customCalendlyUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#292727]/60 backdrop-blur-xs transition-opacity animate-fadeIn">
      <div
        id="calendly-booking-dialog"
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-lg bg-[#FFFFFF] rounded-2xl shadow-2xl border border-[#D8CEC7] overflow-hidden"
      >
        {/* Header */}
        <div className="bg-[#F8F4EF] p-6 border-b border-[#D8CEC7] flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide bg-[#E8C9C5]/60 text-[#292727] mb-2">
              <Calendar className="w-3.5 h-3.5 text-[#B9827B]" />
              Official Booking Flow
            </div>
            <h3 className="font-serif text-2xl font-semibold text-[#292727]">
              {serviceTitle}
            </h3>
            <p className="text-sm text-[#786F6A] mt-1">
              One central calendar · One source of truth
            </p>
          </div>
          <button
            id="close-calendly-modal-btn"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-full text-[#786F6A] hover:text-[#292727] hover:bg-[#D8CEC7]/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Important Notice */}
          <div className="p-3.5 bg-[#F8F4EF] rounded-xl border border-[#E8C9C5] text-xs text-[#292727] space-y-1.5">
            <div className="flex items-center gap-1.5 font-semibold text-[#B9827B]">
              <ShieldCheck className="w-4 h-4" />
              Appointment Policy &amp; Deposit
            </div>
            <p className="leading-relaxed text-[#292727]">
              {BRAND_INFO.appointmentNotice}
            </p>
            <p className="text-[#786F6A]">
              A <strong>$10 booking deposit</strong> is required to secure your appointment time. Your deposit is applied toward your final invoice once the notarization is completed.
            </p>
          </div>

          {/* Service Snapshot */}
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="p-3 bg-[#F8F4EF]/80 rounded-lg border border-[#D8CEC7]/60">
              <span className="block text-xs text-[#786F6A] uppercase font-medium">Estimated Duration</span>
              <span className="font-semibold text-[#292727] flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-[#B9827B]" /> {duration}
              </span>
            </div>
            <div className="p-3 bg-[#F8F4EF]/80 rounded-lg border border-[#D8CEC7]/60">
              <span className="block text-xs text-[#786F6A] uppercase font-medium">Fee Structure</span>
              <span className="font-semibold text-[#292727] text-xs leading-tight block mt-0.5">
                {defaultFee}
              </span>
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="pt-2">
            <button
              id="calendly-redirect-action-btn"
              onClick={handleLaunchBooking}
              className="w-full py-3.5 px-6 bg-[#B9827B] hover:bg-[#a66f68] active:scale-[0.99] text-white font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group"
            >
              <span>Proceed to Booking Calendar</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <p className="text-center text-xs text-[#786F6A] mt-2 font-mono">
              Target Destination: {customCalendlyUrl || placeholderUrl}
            </p>
          </div>

          {/* Owner Quick Configuration Box */}
          <div className="mt-4 pt-4 border-t border-[#D8CEC7]/80">
            <details className="text-xs text-[#786F6A] group">
              <summary className="cursor-pointer font-medium hover:text-[#292727] flex items-center justify-between py-1">
                <span>Site Owner: Custom Calendly Link Setup</span>
                <span className="text-[10px] bg-[#D8CEC7]/60 px-2 py-0.5 rounded">Configure</span>
              </summary>
              <form onSubmit={handleSaveCustomUrl} className="mt-3 space-y-2 bg-[#F8F4EF] p-3 rounded-lg border border-[#D8CEC7]">
                <label className="block text-[#292727] font-medium">
                  Insert your live Calendly Event or Profile URL:
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={customCalendlyUrl}
                    onChange={(e) => setCustomCalendlyUrl(e.target.value)}
                    placeholder="https://calendly.com/your-username/service"
                    className="flex-1 px-3 py-1.5 bg-white border border-[#D8CEC7] rounded-md text-xs text-[#292727] focus:outline-none focus:border-[#B9827B]"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-[#292727] text-white rounded-md hover:bg-[#3d3a3a] transition-colors"
                  >
                    Save
                  </button>
                </div>
                {isCopied && (
                  <p className="text-[#B9827B] text-[11px] flex items-center gap-1 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" /> URL saved for direct scheduling!
                  </p>
                )}
              </form>
            </details>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#F8F4EF]/60 px-6 py-3 border-t border-[#D8CEC7] flex items-center justify-between text-xs text-[#786F6A]">
          <span>Cancel 48+ hrs before for 100% deposit refund</span>
          <button
            onClick={onClose}
            className="font-medium text-[#292727] hover:underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
