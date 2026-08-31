import React from 'react';
import { Calendar, FileText, ArrowRight, ShieldCheck, Clock, MapPin, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '../data/notaryData';
import { Logo } from './Logo';

interface HeroBannerProps {
  onOpenBooking: (serviceTitle?: string, fee?: string, placeholder?: string) => void;
  onOpenQuote: () => void;
  onNavigateToTab?: (tab: string) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onOpenBooking,
  onOpenQuote,
  onNavigateToTab,
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F4EDE4] to-[#FAF7F2] border-b border-[#E8DFC9]/60">
      
      {/* Ambient modern glow & background aesthetics */}
      <div className="absolute -top-24 right-10 w-96 h-96 bg-[#E8C9C5]/25 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#B9827B]/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Cover Banner Presentation (Inspired by user's banner) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-12 sm:pb-16 relative">
        
        {/* Flatlay Banner Card Frame */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#FAF6F0] via-[#FFFFFF] to-[#FAF3EC] border border-[#E3D9CE] shadow-lg overflow-hidden p-6 sm:p-10 lg:p-12">
          
          {/* Subtle background decorative shapes: Coffee mug, Blush Notebook, Stamp accents */}
          <div className="absolute -top-10 right-24 w-28 h-28 rounded-full border-4 border-[#E8DFC9]/70 bg-gradient-to-br from-[#FFFDF9] to-[#EAE0D5] opacity-40 pointer-events-none hidden md:block">
            <div className="w-16 h-16 rounded-full bg-[#CBB5A1]/40 m-auto mt-4"></div>
          </div>
          <div className="absolute -bottom-10 right-8 w-44 h-56 rounded-2xl bg-gradient-to-br from-[#F5DCD9]/40 to-[#E8C9C5]/50 rotate-12 border border-[#E8C9C5]/60 pointer-events-none hidden lg:block"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left: SignatureOne Circular Brand Seal */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start justify-center">
              <div className="p-3 bg-white/90 backdrop-blur-xs rounded-full shadow-sm border border-[#E8C9C5]/60">
                <Logo size="lg" variant="full" showSubtitle={true} showEst={true} />
              </div>
            </div>

            {/* Center / Right: Modern Clean Headline & Slogan from the banner */}
            <div className="lg:col-span-8 space-y-5 text-center lg:text-left">
              
              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#1E1B18]/80 font-heading">
                  MOBILE NOTARY SERVICES
                </p>

                {/* Delicate Heart & Slogan */}
                <div className="flex items-center justify-center lg:justify-start gap-2 py-1">
                  <span className="font-script text-2xl sm:text-3xl text-[#B9827B] select-none">
                    Trusted. Professional. Convenience.
                  </span>
                  <Heart className="w-4 h-4 text-[#B9827B] fill-[#E8C9C5] inline-block shrink-0" />
                </div>

                <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E1B18] tracking-tight leading-snug">
                  Bringing Notary Services To You
                </h1>
              </div>

              <p className="text-sm sm:text-base text-[#554E4A] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Modern, seamless in-person, local mobile (12-mile radius), remote online (RON), and professional loan signing services based in Lavon, TX 75166. Strict appointment-only reliability with zero hidden fees.
              </p>

              {/* Action CTAs */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <button
                  id="hero-book-btn"
                  onClick={() => onOpenBooking()}
                  className="py-3 px-6 bg-[#B9827B] hover:bg-[#a56f68] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  id="hero-quote-btn"
                  onClick={onOpenQuote}
                  className="py-3 px-5 bg-[#1E1B18] hover:bg-[#35302C] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xl transition-all shadow-xs flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-[#E8C9C5]" />
                  <span>Loan Signing Quote</span>
                </button>

                {onNavigateToTab && (
                  <button
                    id="hero-estimator-btn"
                    onClick={() => onNavigateToTab('how-it-works')}
                    className="py-3 px-4 bg-white hover:bg-[#FAF7F2] border border-[#D8CEC7] text-[#1E1B18] text-xs sm:text-sm font-medium rounded-xl transition-all flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#B9827B]" />
                    <span>Fee Estimator</span>
                  </button>
                )}
              </div>

              {/* Trust Badges */}
              <div className="pt-3 border-t border-[#E3D9CE]/70 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs text-[#554E4A]">
                <span className="flex items-center gap-1.5 font-medium text-[#1E1B18]">
                  <Clock className="w-3.5 h-3.5 text-[#B9827B]" />
                  By Appointment Only
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B9827B]" />
                  Texas Licensed &amp; Bonded
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B9827B]" />
                  BlueNotary RON
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B9827B]" />
                  Lavon &amp; 12-Mi Radius
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
