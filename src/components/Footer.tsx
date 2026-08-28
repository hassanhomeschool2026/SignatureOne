import React, { useState } from 'react';
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck, Heart, Facebook, FileText, Calendar } from 'lucide-react';
import { BRAND_INFO } from '../data/notaryData';
import { Logo } from './Logo';

interface FooterProps {
  onNavigateToTab: (tab: string) => void;
  onOpenBooking: (serviceTitle?: string, fee?: string, placeholder?: string) => void;
  onOpenQuote: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateToTab,
  onOpenBooking,
  onOpenQuote,
  onOpenContact,
}) => {
  const [activeLegalModal, setActiveLegalModal] = useState<string | null>(null);

  const handleNav = (tabId: string) => {
    onNavigateToTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E1B18] text-[#D8CEC7] pt-14 pb-10 border-t border-[#332E2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-[#332E2B]">
          
          {/* Col 1: Brand & Logo (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <button
              onClick={() => handleNav('pricing')}
              className="text-left focus:outline-none"
            >
              <Logo size="sm" variant="horizontal" showSubtitle={false} showEst={false} />
            </button>
            
            <p className="font-script text-lg text-[#E8C9C5]">
              {BRAND_INFO.tagline}
            </p>
            <p className="text-xs text-[#A89F9A] leading-relaxed max-w-sm">
              Providing professional in-person, local mobile (12-mile radius), remote online notarization (RON), and loan signing agent services throughout Lavon, TX 75166 and surrounding communities.
            </p>

            <div className="p-3 bg-[#2D2825] rounded-xl border border-[#443D39] text-xs text-[#D8CEC7] space-y-1">
              <span className="font-semibold text-[#E8C9C5] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                Appointment-Only Reliability
              </span>
              <p className="text-[11px] text-[#A89F9A]">
                {BRAND_INFO.appointmentNotice}
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3 font-heading">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Website Pages
            </h4>
            <ul className="space-y-2 text-xs text-[#A89F9A]">
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-[#E8C9C5] transition-colors text-left">
                  Pricing Sheet (Home)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#E8C9C5] transition-colors text-left">
                  Services &amp; Document Types
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('loan-signing')} className="hover:text-[#E8C9C5] transition-colors text-left">
                  Loan Signing &amp; Closings (LSA)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('how-it-works')} className="hover:text-[#E8C9C5] transition-colors text-left">
                  How It Works &amp; Fee Estimator
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('policies')} className="hover:text-[#E8C9C5] transition-colors text-left">
                  Policies, $10 Deposit &amp; Cancellation
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faqs')} className="hover:text-[#E8C9C5] transition-colors text-left">
                  Frequently Asked Questions (FAQ)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact & Action (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs text-[#A89F9A]">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E8C9C5] shrink-0" />
                <span>Direct Line: <strong className="text-white">{BRAND_INFO.phone}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E8C9C5] shrink-0" />
                <span>Email: <strong className="text-white">{BRAND_INFO.email}</strong></span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E8C9C5] shrink-0 mt-0.5" />
                <span>Based in Lavon, Texas 75166 (Meeting location shared upon confirmed booking)</span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-2">
              <button
                onClick={() => onOpenBooking('General Notary', '$15–$35 convenience fee', '[GENERAL NOTARY CALENDLY LINK]')}
                className="py-2 px-3.5 bg-[#B9827B] hover:bg-[#a56f68] text-white font-semibold text-xs rounded-lg transition-all flex items-center gap-1.5"
              >
                <Calendar className="w-3 h-3" />
                <span>Book Appointment</span>
              </button>
              <button
                onClick={onOpenQuote}
                className="py-2 px-3.5 bg-[#2D2825] hover:bg-[#3D3733] text-[#E8C9C5] border border-[#443D39] font-semibold text-xs rounded-lg transition-all flex items-center gap-1.5"
              >
                <FileText className="w-3 h-3" />
                <span>Request Quote</span>
              </button>
            </div>
          </div>

        </div>

        {/* Texas Statutory Legal Notice Box */}
        <div className="py-5 border-b border-[#332E2B] text-[11px] text-[#A89F9A] leading-relaxed space-y-1">
          <p>
            <strong className="text-white">Texas Statutory Disclaimer:</strong> {BRAND_INFO.disclaimer}
          </p>
          <p>
            <strong className="text-white">Fee Structure:</strong> Convenience fees ($15 meeting / $35 mobile travel / $25 online RON / $25 after-hours) are separate from Texas statutory notarial fees (Texas Gov. Code § 406.024) and cover travel, location hosting, equipment, and platform technology.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C8480]">
          <div>
            © {new Date().getFullYear()} SignatureOne Mobile Notary. All rights reserved. (est. {BRAND_INFO.established})
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button
              onClick={() => handleNav('policies')}
              className="hover:text-white transition-colors"
            >
              Deposit &amp; Cancellation Policy
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveLegalModal('privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveLegalModal('terms')}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>

      {/* Simple Legal Modal for Privacy / Terms if clicked */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white text-[#1E1B18] p-6 sm:p-8 rounded-2xl max-w-lg w-full border border-[#D8CEC7] shadow-2xl space-y-4">
            <h3 className="text-lg font-bold capitalize text-[#1E1B18] font-heading">
              {activeLegalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
            <p className="text-xs text-[#554E4A] leading-relaxed">
              {activeLegalModal === 'privacy'
                ? 'SignatureOne Mobile Notary respects your privacy. Document details, government identification, and signer records are handled strictly according to Texas notary public laws, notary journal compliance, and privacy safeguards. Personal data is never sold or shared with unauthorized third parties.'
                : 'All services provided by SignatureOne Mobile Notary are subject to confirmed appointments, valid unexpired government photo ID verification, signer willingness and awareness, and statutory notarial regulations.'}
            </p>
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveLegalModal(null)}
                className="px-4 py-2 bg-[#1E1B18] text-white text-xs font-semibold rounded-xl hover:bg-[#35302C]"
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
