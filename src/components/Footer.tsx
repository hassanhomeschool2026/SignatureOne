import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import { BRAND_INFO } from '../data/notaryData';

interface FooterProps {
  onNavigateToTab: (tab: string) => void;
  onOpenBooking: (serviceTitle?: string, fee?: string, placeholder?: string) => void;
  onOpenQuote: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateToTab,
  onOpenContact,
}) => {
  const [activeLegalModal, setActiveLegalModal] = useState<string | null>(null);

  const handleNav = (tabId: string) => {
    onNavigateToTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#18181B] text-[#E4E4E7] py-10 border-t border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Clean Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#27272A] items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-2">
            <h3 className="font-serif text-lg font-bold text-white tracking-wide">
              SignatureOne Mobile Notary
            </h3>
            <p className="font-script text-base text-[#E8C9C5]">
              Trusted. Professional. Convenient.
            </p>
            <div className="text-xs text-[#A1A1AA] pt-1 space-y-1">
              <p>
                <span className="text-white font-medium">Service Location:</span> Lavon, TX  75166
              </p>
              <div className="pt-1.5 text-[11px] text-[#71717A] leading-relaxed">
                <span className="text-[#A1A1AA] font-medium block">Mailing Address:</span>
                <span>5900 Balcones Dr, Ste 165</span>
                <span className="block">Austin, TX</span>
              </div>
            </div>
            <div className="pt-2 space-y-1.5 text-xs">
              <p>
                <a
                  href="tel:+19728531513"
                  className="text-white hover:text-[#E8C9C5] font-semibold transition-colors"
                >
                  (972) 853-1513
                </a>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pt-1 text-[11px]">
                <p>
                  <span className="text-[#71717A]">Booking: </span>
                  <a
                    href="mailto:booking@sonotary.com"
                    className="text-[#E4E4E7] hover:text-[#E8C9C5] transition-colors"
                  >
                    booking@sonotary.com
                  </a>
                </p>
                <p>
                  <span className="text-[#71717A]">Info: </span>
                  <a
                    href="mailto:info@sonotary.com"
                    className="text-[#A1A1AA] hover:text-white transition-colors"
                  >
                    info@sonotary.com
                  </a>
                </p>
                <p>
                  <span className="text-[#71717A]">Legal: </span>
                  <a
                    href="mailto:legal@sonotary.com"
                    className="text-[#A1A1AA] hover:text-white transition-colors"
                  >
                    legal@sonotary.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-7 flex flex-wrap gap-x-6 gap-y-3 items-center md:justify-end text-xs font-medium text-[#A1A1AA] pt-2">
            <button
              onClick={() => handleNav('home')}
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNav('pricing')}
              className="hover:text-white transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => handleNav('services')}
              className="hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => handleNav('how-it-works')}
              className="hover:text-white transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNav('loan-signing')}
              className="hover:text-white transition-colors"
            >
              Loan Signings
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>

        </div>

        {/* Bottom Minimal Copyright & Policies */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <div>
            © 2026 SignatureOne Mobile Notary · All services by appointment only.
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={() => handleNav('policies')}
              className="hover:text-white transition-colors"
            >
              Cancellation &amp; Refund
            </button>
            <span>·</span>
            <button
              onClick={() => handleNav('policies')}
              className="hover:text-white transition-colors"
            >
              Terms &amp; Notary Policy
            </button>
            <span>·</span>
            <button
              onClick={() => handleNav('policies')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
          </div>
        </div>

      </div>

      {/* Simple Policy Modal for Privacy / Terms if clicked */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
          <div className="bg-white text-[#18181B] p-6 sm:p-8 rounded-2xl max-w-lg w-full border border-[#E4E4E7] shadow-2xl space-y-4">
            <h3 className="text-lg font-bold capitalize text-[#18181B]">
              {activeLegalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
            <p className="text-xs text-[#52525B] leading-relaxed">
              {activeLegalModal === 'privacy'
                ? 'SignatureOne Mobile Notary respects your privacy. All signer identification, journal records, and document details are handled strictly under Texas notary regulations and privacy compliance.'
                : 'All services by SignatureOne Mobile Notary require confirmed appointments, valid unexpired government-issued photo identification, and signer awareness.'}
            </p>
            <div className="pt-2 text-right">
              <button
                onClick={() => setActiveLegalModal(null)}
                className="px-4 py-2 bg-[#18181B] text-white text-xs font-semibold rounded-lg hover:bg-black"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
