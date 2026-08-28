import React from 'react';
import { Calendar, FileText, Phone, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/notaryData';

interface FinalCTAProps {
  onOpenBooking: (serviceTitle?: string, fee?: string, placeholder?: string) => void;
  onOpenQuote: () => void;
  onOpenContact: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onOpenBooking,
  onOpenQuote,
  onOpenContact,
}) => {
  return (
    <section id="final-cta" className="py-16 md:py-24 bg-[#F8F4EF] relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#E8C9C5]/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-12 md:p-16 border border-[#D8CEC7] shadow-xl text-center space-y-6">
          
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F8F4EF] text-[#292727] border border-[#D8CEC7]">
            <Sparkles className="w-3.5 h-3.5 text-[#B9827B]" />
            Get Started Today
          </div>

          <div className="space-y-2 max-w-2xl mx-auto">
            <h2 className="font-serif text-3.5xl sm:text-4.5xl md:text-5xl font-bold text-[#292727] tracking-tight">
              Ready to Get It Notarized?
            </h2>
            <p className="font-serif italic text-lg sm:text-xl text-[#B9827B]">
              Professional. Convenient. Appointment-based.
            </p>
          </div>

          <p className="text-sm sm:text-base text-[#554E4A] max-w-xl mx-auto leading-relaxed">
            Reserve your in-person, local mobile, or remote online session in seconds. Backed by our $10 refundable deposit policy and punctuality commitment.
          </p>

          {/* Three Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-xl mx-auto">
            
            {/* Primary CTA */}
            <button
              id="final-cta-book-btn"
              onClick={() => onOpenBooking('General Notary Appointment', '$15–$35 + notarial fees', '[GENERAL NOTARY CALENDLY LINK]')}
              className="w-full sm:w-auto py-3.5 px-7 bg-[#B9827B] hover:bg-[#a66f68] active:scale-[0.98] text-white font-semibold text-xs tracking-wider uppercase rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK A NOTARY</span>
            </button>

            {/* Secondary CTA */}
            <button
              id="final-cta-quote-btn"
              onClick={onOpenQuote}
              className="w-full sm:w-auto py-3.5 px-6 bg-[#292727] hover:bg-[#3d3a3a] active:scale-[0.98] text-white font-semibold text-xs tracking-wider uppercase rounded-xl transition-all shadow-xs flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#E8C9C5]" />
              <span>REQUEST A SIGNING QUOTE</span>
            </button>

            {/* Tertiary CTA */}
            <button
              id="final-cta-contact-btn"
              onClick={onOpenContact}
              className="w-full sm:w-auto py-3.5 px-5 bg-white hover:bg-[#F8F4EF] active:scale-[0.98] text-[#292727] border border-[#D8CEC7] font-semibold text-xs tracking-wider uppercase rounded-xl transition-all flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#B9827B]" />
              <span>CALL / CONTACT</span>
            </button>
          </div>

          <div className="pt-2 text-xs text-[#786F6A] flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#B9827B]" />
            <span>All SignatureOne services are available by appointment only. Walk-ins are not accepted.</span>
          </div>

        </div>
      </div>
    </section>
  );
};
