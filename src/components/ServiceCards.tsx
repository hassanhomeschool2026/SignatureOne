import React from 'react';
import { MapPin, Car, Globe, Briefcase, ArrowRight, Clock, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/notaryData';
import { CALENDLY_LINKS, openBookingLink } from '../config/booking';

interface ServiceCardsProps {
  onOpenBooking: (serviceTitle?: string, fee?: string, placeholder?: string) => void;
  onOpenQuote: () => void;
}

export const ServiceCards: React.FC<ServiceCardsProps> = ({
  onOpenBooking,
  onOpenQuote,
}) => {
  return (
    <section id="services" className="py-16 md:py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FAF8F9] text-[#27272A] border border-[#E4E4E7]">
            <Sparkles className="w-3.5 h-3.5 text-[#B9827B]" />
            Notary Solutions
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#27272A]">
            Choose Your Service
          </h2>
          <p className="text-base text-[#52525B] leading-relaxed">
            All SignatureOne services are available <strong className="text-[#27272A]">strictly by appointment only</strong>. Select the format that best suits your schedule, location, or document requirements.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Service 1: You Come to Me */}
          <div
            id="service-card-meet-me"
            className="group relative bg-[#FAF8F9] rounded-2xl p-6 border border-[#E4E4E7] hover:border-[#B9827B] transition-all duration-300 flex flex-col justify-between hover:shadow-lg"
          >
            <div>
              {/* Badge & Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-white border border-[#E4E4E7] flex items-center justify-center text-[#27272A] group-hover:text-[#B9827B] transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-white rounded-full border border-[#E4E4E7] text-[#71717A]">
                  In-Person
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-[#27272A]">
                YOU COME TO ME
              </h3>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#B9827B] mt-0.5">
                In-Person Notary
              </p>

              <div className="mt-4 pt-4 border-t border-[#E4E4E7]/70 space-y-2">
                <div className="font-serif text-2xl font-bold text-[#27272A]">
                  $15 <span className="text-xs font-sans font-normal text-[#71717A]">Convenience Fee</span>
                </div>
                <p className="text-[11px] text-[#71717A] leading-tight">
                  PLUS applicable Texas statutory notarial fee(s).
                </p>
              </div>

              <p className="text-xs text-[#52525B] mt-4 leading-relaxed">
                Convenient in-person notary appointments at our designated local meeting location in the Lavon/Wylie area.
              </p>

              {/* Specs */}
              <div className="mt-4 space-y-2 text-[11px] text-[#71717A] bg-white/70 p-3 rounded-xl border border-[#E4E4E7]/50">
                <div className="flex items-start gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>Mon–Wed 1:00–6:00 PM · Sat 10:00 AM–1:00 PM CT</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>By appointment only · No walk-ins</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 pt-4 border-t border-[#E4E4E7]/70">
              <button
                id="book-meet-me-btn"
                onClick={() => openBookingLink(CALENDLY_LINKS.inPerson)}
                className="w-full py-2.5 px-4 bg-[#B9827B] hover:bg-[#a66f68] active:scale-[0.98] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>BOOK NOW</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Service 2: I Come to You */}
          <div
            id="service-card-mobile"
            className="group relative bg-[#FAF8F9] rounded-2xl p-6 border border-[#E4E4E7] hover:border-[#B9827B] transition-all duration-300 flex flex-col justify-between hover:shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-white border border-[#E4E4E7] flex items-center justify-center text-[#27272A] group-hover:text-[#B9827B] transition-colors">
                  <Car className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-white rounded-full border border-[#E4E4E7] text-[#71717A]">
                  12-Mile Radius
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-[#27272A]">
                I COME TO YOU
              </h3>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#B9827B] mt-0.5">
                Local Mobile Notary
              </p>

              <div className="mt-4 pt-4 border-t border-[#E4E4E7]/70 space-y-2">
                <div className="font-serif text-2xl font-bold text-[#27272A]">
                  $35 <span className="text-xs font-sans font-normal text-[#71717A]">Mobile Convenience Fee</span>
                </div>
                <p className="text-[11px] text-[#71717A] leading-tight">
                  PLUS applicable Texas statutory notarial fee(s).
                </p>
              </div>

              <p className="text-xs text-[#52525B] mt-4 leading-relaxed">
                SignatureOne travels directly to your home, office, business, hospital/care facility, or hotel within 12 miles of ZIP 75166.
              </p>

              {/* Specs */}
              <div className="mt-4 space-y-2 text-[11px] text-[#71717A] bg-white/70 p-3 rounded-xl border border-[#E4E4E7]/50">
                <div className="flex items-start gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>Tue &amp; Thu 10:00 AM–2:00 PM · Fri 12:00–2:00 PM CT</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>Lavon, Wylie &amp; 12-mile surrounding area</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 pt-4 border-t border-[#E4E4E7]/70">
              <button
                id="book-mobile-btn"
                onClick={() => openBookingLink(CALENDLY_LINKS.mobile)}
                className="w-full py-2.5 px-4 bg-[#B9827B] hover:bg-[#a66f68] active:scale-[0.98] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>BOOK NOW</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Service 3: Online Notary (RON) - Featured */}
          <div
            id="service-card-ron"
            className="group relative bg-[#FFFFFF] rounded-2xl p-6 border-2 border-[#B9827B] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top highlight bar */}
            <div className="absolute top-0 inset-x-0 bg-[#B9827B] py-1 text-center text-[10px] uppercase font-bold tracking-widest text-white">
              ★ BlueNotary Platform · Nationwide in the U.S.
            </div>

            <div className="pt-3">
              <div className="flex items-center justify-between mb-3">
                <div className="w-11 h-11 rounded-xl bg-[#FAF8F9] border border-[#E8C9C5] flex items-center justify-center text-[#B9827B]">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-[#E8C9C5]/60 rounded-full text-[#27272A]">
                  Remote Online
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-[#27272A]">
                ONLINE NOTARY
              </h3>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#B9827B] mt-0.5">
                Remote Online Notarization (RON)
              </p>

              <div className="mt-4 pt-4 border-t border-[#E4E4E7]/70 space-y-2">
                <div className="font-serif text-2xl font-bold text-[#27272A]">
                  $25 <span className="text-xs font-sans font-normal text-[#71717A]">RON Fee</span>
                </div>
                <p className="text-[11px] text-[#71717A] leading-tight">
                  PLUS applicable Texas statutory notarial fee(s).
                </p>
              </div>

              <p className="text-xs text-[#52525B] mt-4 leading-relaxed">
                Connect live via encrypted audio-video on BlueNotary from your phone, tablet, or computer anywhere in the United States. No travel fee.
              </p>

              {/* Specs */}
              <div className="mt-4 space-y-2 text-[11px] text-[#71717A] bg-[#FAF8F9] p-3 rounded-xl border border-[#E4E4E7]/50">
                <div className="flex items-start gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>Mon–Fri 10:00 AM–7:00 PM · Sat 11:00 AM–1:00 PM CT</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>After-Hours available evenings &amp; weekends</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 pt-4 border-t border-[#E4E4E7]/70">
              <button
                id="book-ron-btn"
                onClick={() => openBookingLink(CALENDLY_LINKS.ron)}
                className="w-full py-2.5 px-4 bg-[#B9827B] hover:bg-[#a66f68] active:scale-[0.98] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 font-bold cursor-pointer"
              >
                <span>BOOK ONLINE RON</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Service 4: Business & Closing */}
          <div
            id="service-card-business"
            className="group relative bg-[#FAF8F9] rounded-2xl p-6 border border-[#E4E4E7] hover:border-[#27272A] transition-all duration-300 flex flex-col justify-between hover:shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-white border border-[#E4E4E7] flex items-center justify-center text-[#27272A] group-hover:text-[#B9827B] transition-colors">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-white rounded-full border border-[#E4E4E7] text-[#71717A]">
                  LSA &amp; Extended
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-[#27272A]">
                BUSINESS &amp; CLOSING
              </h3>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#B9827B] mt-0.5">
                Loan Signing &amp; Extended Mobile
              </p>

              <div className="mt-4 pt-4 border-t border-[#E4E4E7]/70 space-y-2">
                <div className="font-serif text-2xl font-bold text-[#27272A]">
                  Starting at $50
                </div>
                <p className="text-[11px] text-[#71717A] leading-tight">
                  Itemized / custom quote based on assignment details.
                </p>
              </div>

              <p className="text-xs text-[#52525B] mt-4 leading-relaxed">
                Large assignments, loan packages, title company signings, multi-signer corporate sets, and travel up to 20 miles beyond standard radius.
              </p>

              {/* Specs */}
              <div className="mt-4 space-y-2 text-[11px] text-[#71717A] bg-white/70 p-3 rounded-xl border border-[#E4E4E7]/50">
                <div className="flex items-start gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>90+ min / custom appointment blocks</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>Purchase, Refinance, HELOC, Title</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 pt-4 border-t border-[#E4E4E7]/70">
              <button
                id="request-lsa-quote-card-btn"
                onClick={onOpenQuote}
                className="w-full py-2.5 px-4 bg-[#27272A] hover:bg-[#3F3F46] active:scale-[0.98] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Footnote on Notarial vs Convenience fees */}
        <div className="mt-10 p-4 bg-[#FAF8F9] rounded-xl border border-[#E4E4E7] text-center max-w-2xl mx-auto text-xs text-[#71717A]">
          <p>
            <strong className="text-[#27272A]">Fee Transparency:</strong> {BRAND_INFO.feeTransparencyStatement}
          </p>
        </div>

      </div>
    </section>
  );
};
