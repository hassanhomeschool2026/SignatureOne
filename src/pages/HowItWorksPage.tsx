import React from 'react';
import { 
  Building2, 
  Car, 
  Video, 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  Calendar,
  ArrowRight,
  ShieldAlert,
  HelpCircle
} from 'lucide-react';
import { CALENDLY_LINKS, openBookingLink } from '../config/booking';

interface HowItWorksPageProps {
  onOpenBooking: (serviceTitle?: string, fee?: string, placeholder?: string) => void;
  onOpenQuote: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({
  onOpenBooking,
  onOpenQuote,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E1B18] tracking-tight font-heading uppercase">
          How It Works
        </h1>
        <p className="text-sm sm:text-base text-[#554E4A]">
          Simple, step-by-step process for getting your documents notarized quickly and professionally.
        </p>
      </div>

      {/* Three Simple Sections / Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Section 1: In-Person Notary */}
        <div className="bg-white rounded-2xl border border-[#F0EAE6] p-6 sm:p-7 flex flex-col justify-between hover:border-[#E8C9C5] transition-all shadow-2xs">
          <div className="space-y-5">
            <div className="flex items-center gap-3 border-b border-[#F0EAE6] pb-4">
              <span className="w-10 h-10 rounded-xl bg-[#FAF6F5] flex items-center justify-center text-[#B9827B]">
                <Building2 className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-base font-bold text-[#1E1B18] font-heading uppercase">
                  In-Person Notary
                </h2>
                <span className="text-[11px] text-[#786F6A]">Designated Location: Wylie, TX</span>
              </div>
            </div>

            <ol className="space-y-3.5 text-xs text-[#554E4A]">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#1E1B18] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                <div>
                  <strong className="text-[#1E1B18] block font-semibold">Book your appointment</strong>
                  <span className="text-[#786F6A]">Select an available time and place your $10 deposit.</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#1E1B18] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                <div>
                  <strong className="text-[#1E1B18] block font-semibold">Meet at the selected location</strong>
                  <span className="text-[#786F6A]">Arrive at our designated meeting location in Wylie, TX 75098.</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#1E1B18] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                <div>
                  <strong className="text-[#1E1B18] block font-semibold">Present valid ID</strong>
                  <span className="text-[#786F6A]">Provide an unexpired government photo ID matching your document.</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#1E1B18] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">4</span>
                <div>
                  <strong className="text-[#1E1B18] block font-semibold">Sign in the notary's presence</strong>
                  <span className="text-[#786F6A]">Sign voluntary acknowledgments or sworn jurats as required.</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#B9827B] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">5</span>
                <div>
                  <strong className="text-[#1E1B18] block font-semibold">Receive your completed notarization</strong>
                  <span className="text-[#786F6A]">Take your stamped document and itemized invoice receipt.</span>
                </div>
              </li>
            </ol>
          </div>

          <div className="mt-6 pt-4 border-t border-[#F0EAE6]">
            <button
              onClick={() => openBookingLink(CALENDLY_LINKS.inPerson)}
              className="w-full py-2.5 bg-[#B9827B] hover:bg-[#a56f68] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
            >
              Book In-Person
            </button>
          </div>
        </div>

        {/* Section 2: Mobile Notary */}
        <div className="bg-white rounded-2xl border border-[#F0EAE6] p-6 sm:p-7 flex flex-col justify-between hover:border-[#E8C9C5] transition-all shadow-2xs">
          <div className="space-y-5">
            <div className="flex items-center gap-3 border-b border-[#F0EAE6] pb-4">
              <span className="w-10 h-10 rounded-xl bg-[#FAF6F5] flex items-center justify-center text-[#B9827B]">
                <Car className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-base font-bold text-[#1E1B18] font-heading uppercase">
                  Mobile Notary
                </h2>
                <span className="text-[11px] text-[#786F6A]">12-Mile Travel Radius</span>
              </div>
            </div>

            <ol className="space-y-3.5 text-xs text-[#554E4A]">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#1E1B18] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                <div>
                  <strong className="text-[#1E1B18] block font-semibold">Book your appointment</strong>
                  <span className="text-[#786F6A]">Choose a mobile time slot and place your $10 deposit.</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#1E1B18] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                <div>
                  <strong className="text-[#1E1B18] block font-semibold">Provide the signing location</strong>
                  <span className="text-[#786F6A]">Specify your home, office, hospital, or public location.</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#1E1B18] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                <div>
                  <strong className="text-[#1E1B18] block font-semibold">We travel to you</strong>
                  <span className="text-[#786F6A]">The notary arrives punctually with verified ETA notifications.</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#1E1B18] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">4</span>
                <div>
                  <strong className="text-[#1E1B18] block font-semibold">Present valid ID and sign</strong>
                  <span className="text-[#786F6A]">Verify identity in person and execute document signatures.</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#B9827B] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">5</span>
                <div>
                  <strong className="text-[#1E1B18] block font-semibold">Receive your completed notarization</strong>
                  <span className="text-[#786F6A]">Get your officially sealed documents and settle final invoice.</span>
                </div>
              </li>
            </ol>
          </div>

          <div className="mt-6 pt-4 border-t border-[#F0EAE6]">
            <button
              onClick={() => openBookingLink(CALENDLY_LINKS.mobile)}
              className="w-full py-2.5 bg-[#B9827B] hover:bg-[#a56f68] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
            >
              Book Mobile
            </button>
          </div>
        </div>

        {/* Section 3: Remote Online Notarization */}
        <div className="bg-white rounded-2xl border border-[#F0EAE6] p-6 sm:p-7 flex flex-col justify-between hover:border-[#E8C9C5] transition-all shadow-2xs">
          <div className="space-y-5">
            <div className="flex items-center gap-3 border-b border-[#F0EAE6] pb-4">
              <span className="w-10 h-10 rounded-xl bg-[#FAF6F5] flex items-center justify-center text-[#B9827B]">
                <Video className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-base font-bold text-[#1E1B18] font-heading uppercase">
                  Remote Online (RON)
                </h2>
                <span className="text-[11px] text-[#786F6A]">Nationwide via BlueNotary</span>
              </div>
            </div>

            <ol className="space-y-3.5 text-xs text-[#554E4A]">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#1E1B18] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                <div>
                  <strong className="text-[#1E1B18] block font-semibold">Book online</strong>
                  <span className="text-[#786F6A]">Select your preferred date/time and place your $10 deposit.</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#1E1B18] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                <div>
                  <strong className="text-[#1E1B18] block font-semibold">Complete identity verification</strong>
                  <span className="text-[#786F6A]">Upload photo ID and answer knowledge-based security questions.</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#1E1B18] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                <div>
                  <strong className="text-[#1E1B18] block font-semibold">Join the BlueNotary session</strong>
                  <span className="text-[#786F6A]">Connect on encrypted live audio-video call with the notary.</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#1E1B18] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">4</span>
                <div>
                  <strong className="text-[#1E1B18] block font-semibold">Sign electronically</strong>
                  <span className="text-[#786F6A]">Affix your digital signature while communicating in real time.</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#B9827B] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">5</span>
                <div>
                  <strong className="text-[#1E1B18] block font-semibold">Receive your completed documents</strong>
                  <span className="text-[#786F6A]">Instantly download your tamper-evident, sealed PDF document.</span>
                </div>
              </li>
            </ol>
          </div>

          <div className="mt-6 pt-4 border-t border-[#F0EAE6]">
            <button
              onClick={() => openBookingLink(CALENDLY_LINKS.ron)}
              className="w-full py-2.5 bg-[#B9827B] hover:bg-[#a56f68] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
            >
              Book Online (RON)
            </button>
          </div>
        </div>

      </div>

      {/* Important Disclaimers Section */}
      <div className="bg-[#FAF6F5] rounded-3xl border border-[#F0EAE6] p-6 sm:p-8 space-y-5">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-[#B9827B] shrink-0" />
          <h2 className="text-base sm:text-lg font-bold text-[#1E1B18] font-heading uppercase">
            Important Legal &amp; Document Disclaimers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs text-[#554E4A]">
          <div className="bg-white rounded-xl p-4 border border-[#F0EAE6] space-y-2">
            <h3 className="font-bold text-[#1E1B18] uppercase tracking-wide text-[11px]">
              Legal Advice Limitation
            </h3>
            <p className="leading-relaxed text-[#554E4A]">
              SignatureOne Notary is not a law firm and does not provide legal advice. We may identify documents or explain the signing process, but we cannot interpret the legal meaning or effect of your documents.
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-[#F0EAE6] space-y-2">
            <h3 className="font-bold text-[#1E1B18] uppercase tracking-wide text-[11px]">
              Loan &amp; Closing Questions
            </h3>
            <p className="leading-relaxed text-[#554E4A]">
              If you do not understand a loan or closing document, contact your lender, title company, escrow company, or attorney. The notary cannot explain the legal or financial terms of your agreement.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
