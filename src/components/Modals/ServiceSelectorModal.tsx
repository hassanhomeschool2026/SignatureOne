import React from 'react';
import { X, ChevronRight, Phone } from 'lucide-react';
import { BOOKING_OPTIONS, openBookingLink } from '../../config/booking';

interface ServiceSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ServiceSelectorModal: React.FC<ServiceSelectorModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const handleSelect = (url: string) => {
    openBookingLink(url);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#18181B]/50 backdrop-blur-xs transition-opacity animate-fadeIn">
      {/* Background backdrop click to close */}
      <div 
        className="absolute inset-0" 
        onClick={onClose} 
        aria-hidden="true"
      />

      <div
        id="service-selector-dialog"
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-md bg-white rounded-2xl shadow-xl border border-[#F0ECED] overflow-hidden z-10"
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-4 flex items-center justify-between border-b border-[#F0ECED]">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[#18181B] font-heading uppercase tracking-wide">
              WHAT SERVICE DO YOU NEED?
            </h2>
            <p className="text-xs text-[#71717A] mt-0.5">
              Select an option to schedule directly on Calendly
            </p>
          </div>
          <button
            id="close-service-selector-btn"
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 rounded-full text-[#71717A] hover:text-[#18181B] hover:bg-[#FAF8F9] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Options List */}
        <div className="p-4 sm:p-5 space-y-2">
          {BOOKING_OPTIONS.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.url)}
              className="w-full flex items-center justify-between p-3 rounded-xl border border-[#F0ECED] hover:border-[#B9827B] hover:bg-[#FAF8F9] text-left transition-all group cursor-pointer"
            >
              <div>
                <span className="text-xs sm:text-sm font-semibold text-[#18181B] group-hover:text-[#B9827B] transition-colors">
                  {option.name}
                </span>
                <span className="block text-[11px] text-[#71717A]">
                  {option.deposit} required to reserve
                </span>
              </div>
              <div className="flex items-center text-[#71717A] group-hover:text-[#B9827B] transition-colors">
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          ))}
        </div>

        {/* Booking Terms Notice */}
        <div className="px-6 py-2.5 bg-[#FAF8F9] border-t border-[#F0ECED] text-[11px] text-[#71717A] leading-relaxed">
          <p>
            $10 booking deposit required for general notary appointments ($20 for loan closings). Deposit is subject to our Cancellation &amp; Refund Policy.
          </p>
        </div>

        {/* Footer Support */}
        <div className="px-6 py-2.5 bg-white border-t border-[#F0ECED] flex items-center justify-between text-xs text-[#71717A]">
          <span>Need help?</span>
          <a
            href="tel:+19728531513"
            className="font-semibold text-[#18181B] hover:text-[#B9827B] transition-colors flex items-center gap-1"
          >
            <Phone className="w-3 h-3 text-[#B9827B]" />
            <span>Call (972) 853-1513</span>
          </a>
        </div>
      </div>
    </div>
  );
};
