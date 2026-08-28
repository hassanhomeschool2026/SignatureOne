import React from 'react';
import { MapPin, Car, Globe, Briefcase, Calendar, ArrowRight, Clock, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { SERVICES, BRAND_INFO } from '../data/notaryData';

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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F8F4EF] text-[#292727] border border-[#D8CEC7]">
            <Sparkles className="w-3.5 h-3.5 text-[#B9827B]" />
            Notary Solutions
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292727]">
            Choose Your Service
          </h2>
          <p className="text-base text-[#554E4A] leading-relaxed">
            All SignatureOne services are available <strong className="text-[#292727]">strictly by appointment only</strong>. Select the format that best suits your schedule, location, or document requirements.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Service 1: You Come to Me */}
          <div
            id="service-card-meet-me"
            className="group relative bg-[#F8F4EF] rounded-2xl p-6 border border-[#D8CEC7] hover:border-[#B9827B] transition-all duration-300 flex flex-col justify-between hover:shadow-lg"
          >
            <div>
              {/* Badge & Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-white border border-[#D8CEC7] flex items-center justify-center text-[#292727] group-hover:text-[#B9827B] transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-white rounded-full border border-[#D8CEC7] text-[#786F6A]">
                  In-Person
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-[#292727]">
                YOU COME TO ME
              </h3>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#B9827B] mt-0.5">
                In-Person Notary
              </p>

              <div className="mt-4 pt-4 border-t border-[#D8CEC7]/70 space-y-2">
                <div className="font-serif text-2xl font-bold text-[#292727]">
                  $15 <span className="text-xs font-sans font-normal text-[#786F6A]">Convenience Fee</span>
                </div>
                <p className="text-[11px] text-[#786F6A] leading-tight">
                  PLUS applicable Texas statutory notarial fee(s).
                </p>
              </div>

              <p className="text-xs text-[#554E4A] mt-4 leading-relaxed">
                Convenient in-person notary appointments at our designated local meeting location in the Lavon area.
              </p>

              {/* Specs */}
              <div className="mt-4 space-y-2 text-[11px] text-[#786F6A] bg-white/70 p-3 rounded-xl border border-[#D8CEC7]/50">
                <div className="flex items-start gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>Mon–Wed 1–6:30 PM · Sat 10 AM–1 PM CT</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>By appointment only · No walk-ins</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 pt-4 border-t border-[#D8CEC7]/70">
              <button
                id="book-meet-me-btn"
                onClick={() => onOpenBooking('You Come to Me — In-Person', '$15 Convenience Fee + notarial fees', '[GENERAL NOTARY CALENDLY LINK]')}
                className="w-full py-2.5 px-4 bg-[#B9827B] hover:bg-[#a66f68] active:scale-[0.98] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5"
              >
                <span>BOOK NOW</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <p className="text-[10px] text-center text-[#786F6A] mt-1.5 font-mono">
                [GENERAL NOTARY CALENDLY LINK]
              </p>
            </div>
          </div>

          {/* Service 2: I Come to You */}
          <div
            id="service-card-mobile"
            className="group relative bg-[#F8F4EF] rounded-2xl p-6 border border-[#D8CEC7] hover:border-[#B9827B] transition-all duration-300 flex flex-col justify-between hover:shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-white border border-[#D8CEC7] flex items-center justify-center text-[#292727] group-hover:text-[#B9827B] transition-colors">
                  <Car className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-white rounded-full border border-[#D8CEC7] text-[#786F6A]">
                  12-Mile Radius
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-[#292727]">
                I COME TO YOU
              </h3>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#B9827B] mt-0.5">
                Local Mobile Notary
              </p>

              <div className="mt-4 pt-4 border-t border-[#D8CEC7]/70 space-y-2">
                <div className="font-serif text-2xl font-bold text-[#292727]">
                  $35 <span className="text-xs font-sans font-normal text-[#786F6A]">Mobile Convenience Fee</span>
                </div>
                <p className="text-[11px] text-[#786F6A] leading-tight">
                  PLUS applicable Texas statutory notarial fee(s).
                </p>
              </div>

              <p className="text-xs text-[#554E4A] mt-4 leading-relaxed">
                SignatureOne travels directly to your home, office, business, hospital/care facility, or hotel within 12 miles of ZIP 75166.
              </p>

              {/* Specs */}
              <div className="mt-4 space-y-2 text-[11px] text-[#786F6A] bg-white/70 p-3 rounded-xl border border-[#D8CEC7]/50">
                <div className="flex items-start gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>Mon–Wed 1–6:30 PM · Sat 10 AM–1 PM CT</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>Lavon &amp; 12-mile surrounding communities</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 pt-4 border-t border-[#D8CEC7]/70">
              <button
                id="book-mobile-btn"
                onClick={() => onOpenBooking('I Come to You — Local Mobile Notary', '$35 Mobile Fee + notarial fees', '[MOBILE NOTARY CALENDLY LINK]')}
                className="w-full py-2.5 px-4 bg-[#B9827B] hover:bg-[#a66f68] active:scale-[0.98] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5"
              >
                <span>BOOK NOW</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <p className="text-[10px] text-center text-[#786F6A] mt-1.5 font-mono">
                [MOBILE NOTARY CALENDLY LINK]
              </p>
            </div>
          </div>

          {/* Service 3: Online Notary (RON) - Featured */}
          <div
            id="service-card-ron"
            className="group relative bg-[#FFFFFF] rounded-2xl p-6 border-2 border-[#B9827B] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top highlight bar */}
            <div className="absolute top-0 inset-x-0 bg-[#B9827B] py-1 text-center text-[10px] uppercase font-bold tracking-widest text-white">
              ★ BlueNotary Platform · 7 Days a Week
            </div>

            <div className="pt-3">
              <div className="flex items-center justify-between mb-3">
                <div className="w-11 h-11 rounded-xl bg-[#F8F4EF] border border-[#E8C9C5] flex items-center justify-center text-[#B9827B]">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-[#E8C9C5]/60 rounded-full text-[#292727]">
                  Remote Online
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-[#292727]">
                ONLINE NOTARY
              </h3>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#B9827B] mt-0.5">
                Remote Online Notarization (RON)
              </p>

              <div className="mt-4 pt-4 border-t border-[#D8CEC7]/70 space-y-2">
                <div className="font-serif text-2xl font-bold text-[#292727]">
                  $25 <span className="text-xs font-sans font-normal text-[#786F6A]">RON Fee</span>
                </div>
                <p className="text-[11px] text-[#786F6A] leading-tight">
                  PLUS applicable Texas statutory notarial fee(s).
                </p>
              </div>

              <p className="text-xs text-[#554E4A] mt-4 leading-relaxed">
                Connect live via encrypted audio-video on BlueNotary from your phone, laptop, or desktop anywhere with ID verification.
              </p>

              {/* Specs */}
              <div className="mt-4 space-y-2 text-[11px] text-[#786F6A] bg-[#F8F4EF] p-3 rounded-xl border border-[#D8CEC7]/50">
                <div className="flex items-start gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>Mon–Fri 10 AM–7 PM · Sat–Sun 11 AM–5 PM CT</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>After-Hours available until 9:00 PM CT</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 pt-4 border-t border-[#D8CEC7]/70">
              <button
                id="book-ron-btn"
                onClick={() => onOpenBooking('Online Notary — Remote Online (RON)', '$25 RON Fee + notarial fees', '[RON CALENDLY LINK]')}
                className="w-full py-2.5 px-4 bg-[#B9827B] hover:bg-[#a66f68] active:scale-[0.98] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 font-bold"
              >
                <span>BOOK ONLINE RON</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <p className="text-[10px] text-center text-[#786F6A] mt-1.5 font-mono">
                [RON CALENDLY LINK]
              </p>
            </div>
          </div>

          {/* Service 4: Business & Closing */}
          <div
            id="service-card-business"
            className="group relative bg-[#F8F4EF] rounded-2xl p-6 border border-[#D8CEC7] hover:border-[#292727] transition-all duration-300 flex flex-col justify-between hover:shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-white border border-[#D8CEC7] flex items-center justify-center text-[#292727] group-hover:text-[#B9827B] transition-colors">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-white rounded-full border border-[#D8CEC7] text-[#786F6A]">
                  LSA &amp; Extended
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-[#292727]">
                BUSINESS &amp; CLOSING
              </h3>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#B9827B] mt-0.5">
                Loan Signing &amp; Extended Mobile
              </p>

              <div className="mt-4 pt-4 border-t border-[#D8CEC7]/70 space-y-2">
                <div className="font-serif text-2xl font-bold text-[#292727]">
                  Starting at $50
                </div>
                <p className="text-[11px] text-[#786F6A] leading-tight">
                  Quote-based / custom pricing per assignment.
                </p>
              </div>

              <p className="text-xs text-[#554E4A] mt-4 leading-relaxed">
                Large assignments, loan packages, title company signings, multi-signer corporate sets, and travel up to 20 miles beyond standard radius.
              </p>

              {/* Specs */}
              <div className="mt-4 space-y-2 text-[11px] text-[#786F6A] bg-white/70 p-3 rounded-xl border border-[#D8CEC7]/50">
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
            <div className="mt-6 pt-4 border-t border-[#D8CEC7]/70">
              <button
                id="request-lsa-quote-card-btn"
                onClick={onOpenQuote}
                className="w-full py-2.5 px-4 bg-[#292727] hover:bg-[#3d3a3a] active:scale-[0.98] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <p className="text-[10px] text-center text-[#786F6A] mt-1.5 font-mono">
                [LSA QUOTE FORM LINK]
              </p>
            </div>
          </div>

        </div>

        {/* Footnote on Notarial vs Convenience fees */}
        <div className="mt-10 p-4 bg-[#F8F4EF] rounded-xl border border-[#D8CEC7] text-center max-w-2xl mx-auto text-xs text-[#786F6A]">
          <p>
            <strong className="text-[#292727]">Fee Transparency:</strong> {BRAND_INFO.feeTransparencyStatement}
          </p>
        </div>

      </div>
    </section>
  );
};
