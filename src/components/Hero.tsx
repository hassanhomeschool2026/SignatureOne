import React from 'react';
import { Calendar, Phone, ArrowRight, ShieldCheck, MapPin, Sparkles, Check, FileCheck, Clock } from 'lucide-react';
import { Logo } from './Logo';
import { BRAND_INFO } from '../data/notaryData';

interface HeroProps {
  onOpenBooking: (serviceTitle?: string, fee?: string, placeholder?: string) => void;
  onOpenContact: () => void;
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onOpenContact,
  onOpenQuote,
}) => {
  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-[#F8F4EF]">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8C9C5]/25 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D8CEC7]/30 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand, Headline, Value Props, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline & Appointment Notice Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FFFFFF] border border-[#D8CEC7] text-[#292727] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#B9827B]"></span>
                Lavon, TX 75166 &amp; Online
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-[#E8C9C5]/50 text-[#292727] border border-[#E8C9C5]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B9827B]" />
                Appointment Only · No Walk-Ins
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <p className="font-serif italic text-lg sm:text-xl text-[#B9827B] tracking-wide font-normal">
                {BRAND_INFO.tagline}
              </p>
              <h1 className="font-serif text-3.5xl sm:text-5xl lg:text-5.5xl font-bold tracking-tight text-[#292727] leading-[1.12]">
                Professional Notary Services, Wherever You Need Them.
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#554E4A] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              In-person, mobile, and remote online notarization designed to make the process simple, convenient, and professional. From single affidavits to complete loan signing packages.
            </p>

            {/* Key Trust Signals */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-[#292727] font-medium">
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-[#FFFFFF]/80 p-2.5 rounded-xl border border-[#D8CEC7]/70">
                <div className="w-5 h-5 rounded-full bg-[#E8C9C5]/60 flex items-center justify-center text-[#B9827B] shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Meet Me &amp; Mobile Service</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-[#FFFFFF]/80 p-2.5 rounded-xl border border-[#D8CEC7]/70">
                <div className="w-5 h-5 rounded-full bg-[#E8C9C5]/60 flex items-center justify-center text-[#B9827B] shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Remote Online (RON)</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-[#FFFFFF]/80 p-2.5 rounded-xl border border-[#D8CEC7]/70">
                <div className="w-5 h-5 rounded-full bg-[#E8C9C5]/60 flex items-center justify-center text-[#B9827B] shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Loan Signing Agent (LSA)</span>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5">
              <button
                id="hero-book-primary-btn"
                onClick={() => onOpenBooking()}
                className="py-3.5 px-7 bg-[#B9827B] hover:bg-[#a66f68] active:scale-[0.98] text-white font-semibold text-sm tracking-wider uppercase rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK A NOTARY</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-contact-secondary-btn"
                onClick={onOpenContact}
                className="py-3.5 px-6 bg-[#292727] hover:bg-[#3d3a3a] active:scale-[0.98] text-white font-semibold text-sm tracking-wider uppercase rounded-xl transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#E8C9C5]" />
                <span>CALL / CONTACT US</span>
              </button>
            </div>

            {/* Notice Footer */}
            <p className="text-xs text-[#786F6A] pt-1">
              $10 booking deposit required to reserve time · Applied toward your final invoice
            </p>
          </div>

          {/* Right Column: Visual Card Showcase with Brand Logo & Boutique Notary Desk Vibe */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer Glow / Frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E8C9C5]/40 to-[#D8CEC7]/40 rounded-3xl transform rotate-1 scale-102"></div>
              
              {/* Main Card */}
              <div className="relative bg-[#FFFFFF] rounded-3xl p-7 sm:p-8 shadow-xl border border-[#D8CEC7] space-y-6">
                
                {/* Logo Presentation */}
                <div className="flex flex-col items-center justify-center pt-2">
                  <Logo size="lg" variant="full" showSubtitle={true} showEst={true} />
                  <p className="font-serif italic text-[#B9827B] text-sm mt-3 text-center">
                    "{BRAND_INFO.slogan}"
                  </p>
                </div>

                <div className="h-px w-full bg-[#D8CEC7]/70"></div>

                {/* Service Snapshot Pills */}
                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8F4EF] border border-[#D8CEC7]/60 hover:border-[#E8C9C5] transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-[#B9827B]"></div>
                      <div>
                        <span className="font-semibold text-[#292727] block">In-Person &amp; Mobile</span>
                        <span className="text-[#786F6A] text-[11px]">Lavon 75166 &amp; 12-Mile Radius</span>
                      </div>
                    </div>
                    <span className="font-medium text-[#292727] bg-white px-2 py-0.5 rounded border border-[#D8CEC7]/60">
                      From $15
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8F4EF] border border-[#D8CEC7]/60 hover:border-[#E8C9C5] transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-[#B9827B]"></div>
                      <div>
                        <span className="font-semibold text-[#292727] block">Remote Online Notary (RON)</span>
                        <span className="text-[#786F6A] text-[11px]">BlueNotary Platform · 7 Days</span>
                      </div>
                    </div>
                    <span className="font-medium text-[#292727] bg-white px-2 py-0.5 rounded border border-[#D8CEC7]/60">
                      $25 Fee
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8F4EF] border border-[#D8CEC7]/60 hover:border-[#E8C9C5] transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-[#B9827B]"></div>
                      <div>
                        <span className="font-semibold text-[#292727] block">Loan Signing &amp; Closings</span>
                        <span className="text-[#786F6A] text-[11px]">Purchase, Refi, HELOC, Title</span>
                      </div>
                    </div>
                    <span className="font-medium text-[#292727] bg-white px-2 py-0.5 rounded border border-[#D8CEC7]/60">
                      Quote-Based
                    </span>
                  </div>
                </div>

                {/* Quick Quote Action Link */}
                <div className="text-center pt-1">
                  <button
                    onClick={onOpenQuote}
                    className="text-xs font-semibold text-[#292727] hover:text-[#B9827B] underline underline-offset-4 transition-colors"
                  >
                    Need a loan signing or title quote? Click here →
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
