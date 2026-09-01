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
    <footer className="bg-[#18181B] text-[#E4E4E7] py-12 border-t border-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
        
        {/* Brand Info */}
        <div className="space-y-1.5">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
            SignatureOne Mobile Notary
          </h3>
          <p className="font-script text-base sm:text-lg text-[#E8C9C5]">
            Trusted. Professional. Convenient.
          </p>
        </div>

        {/* Addresses: Service Address & Mailing Address */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-xs border-y border-[#27272A] py-5">
          <div className="space-y-1 text-center">
            <span className="text-white font-medium block text-xs">Service Address:</span>
            <span className="text-[#A1A1AA] block">Mclendon Rd, Lavon, TX 75166</span>
          </div>

          <div className="hidden sm:block w-px h-8 bg-[#27272A]" />

          <div className="space-y-0.5 text-center text-[11px]">
            <span className="text-white font-medium block text-xs">Mailing Address:</span>
            <span className="text-[#71717A] block">5900 Balcones Dr, Ste 165</span>
            <span className="text-[#71717A] block">Austin, TX</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-2.5 text-xs">
          <div>
            <a
              href="tel:+19728531513"
              className="text-white hover:text-[#E8C9C5] font-semibold text-sm transition-colors inline-block"
            >
              (972) 853-1513
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-[11px]">
            <p>
              <span className="text-[#71717A]">Booking: </span>
              <a
                href="mailto:booking@sonotary.com"
                className="text-[#E4E4E7] hover:text-[#E8C9C5] transition-colors"
              >
                booking@sonotary.com
              </a>
            </p>
            <span className="text-[#3F3F46] hidden sm:inline">·</span>
            <p>
              <span className="text-[#71717A]">Info: </span>
              <a
                href="mailto:info@sonotary.com"
                className="text-[#A1A1AA] hover:text-white transition-colors"
              >
                info@sonotary.com
              </a>
            </p>
            <span className="text-[#3F3F46] hidden sm:inline">·</span>
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

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2.5 text-xs font-medium text-[#A1A1AA] pt-1">
          <button
            onClick={() => handleNav('home')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => handleNav('pricing')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Pricing
          </button>
          <button
            onClick={() => handleNav('services')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => handleNav('how-it-works')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            How It Works
          </button>
          <button
            onClick={() => handleNav('loan-signing')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Loan Signings
          </button>
          <button
            onClick={() => handleNav('contact')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Bottom Minimal Copyright & Policies */}
        <div className="pt-6 border-t border-[#27272A] flex flex-col items-center justify-center gap-3 text-xs text-[#71717A]">
          <div>
            © 2026 SignatureOne Mobile Notary
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <button
              onClick={() => handleNav('policies')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Cancellation &amp; Refund
            </button>
            <span>·</span>
            <button
              onClick={() => handleNav('policies')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms &amp; Notary Policy
            </button>
            <span>·</span>
            <button
              onClick={() => handleNav('policies')}
              className="hover:text-white transition-colors cursor-pointer"
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
