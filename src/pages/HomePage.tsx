import React from 'react';
import { 
  Calendar, 
  Phone, 
  Building2, 
  Car, 
  Video, 
  Briefcase, 
  Clock, 
  MapPin, 
  ChevronRight
} from 'lucide-react';
import { BRAND_INFO } from '../data/notaryData';
import { Logo } from '../components/Logo';

interface HomePageProps {
  onOpenBooking: (serviceTitle?: string, fee?: string, placeholder?: string) => void;
  onOpenQuote: () => void;
  onNavigateToTab: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenBooking,
  onNavigateToTab,
}) => {
  return (
    <div className="bg-white text-[#1E1B18] space-y-16 sm:space-y-20 pb-16">
      
      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section className="relative overflow-hidden bg-white border-b border-[#F0EAE6] pt-8 sm:pt-12 pb-12 sm:pb-16">
        
        {/* Subtle blush ambient background accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8C9C5]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FAF6F5] rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* SignatureOne Cover Artwork / Brand Seal */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="p-3 bg-white rounded-full border border-[#F0EAE6] shadow-sm">
                <Logo size="xl" variant="full" showSubtitle={false} showEst={true} />
              </div>
            </div>

            {/* Core Brand & Quick-Access Information */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              
              <div className="space-y-1">
                <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1E1B18] tracking-tight">
                  SignatureOne Mobile Notary
                </h1>
                <p className="font-script text-2xl sm:text-3xl text-[#B9827B]">
                  Trusted. Professional. Convenient.
                </p>
              </div>

              <div className="space-y-1 text-sm text-[#554E4A]">
                <p className="font-medium text-[#1E1B18]">
                  Lavon, Texas 75166
                </p>
                <p>
                  <a
                    href="tel:+19728531513"
                    className="font-bold text-[#1E1B18] hover:text-[#B9827B] transition-colors inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-4 h-4 text-[#B9827B]" />
                    <span>(972) 853-1513</span>
                  </a>
                </p>
              </div>

              {/* Primary & Secondary Hero Actions */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <button
                  id="hero-primary-book-btn"
                  onClick={() => onOpenBooking('Select Notary Service', '$15–$35 + notarial fees', '[GENERAL NOTARY CALENDLY LINK]')}
                  className="w-full sm:w-auto py-3.5 px-7 bg-[#B9827B] hover:bg-[#a56f68] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xl transition-all shadow-xs flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>BOOK AN APPOINTMENT</span>
                </button>

                <a
                  id="hero-call-btn"
                  href="tel:+19728531513"
                  className="w-full sm:w-auto py-3.5 px-6 bg-white hover:bg-[#FAF6F5] active:scale-[0.98] text-[#1E1B18] border border-[#F0EAE6] hover:border-[#B9827B] text-xs sm:text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#B9827B]" />
                  <span>CALL (972) 853-1513</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          2. NOTARY SERVICES
          ========================================================================= */}
      <section id="notary-services" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E1B18] tracking-tight font-heading uppercase">
            NOTARY SERVICES
          </h2>
          <p className="text-sm text-[#554E4A]">
            Choose the service that works best for you.
          </p>
        </div>

        {/* 4 Simple Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: You Come To Me */}
          <div className="bg-white rounded-2xl border border-[#F0EAE6] p-5 flex flex-col justify-between hover:border-[#E8C9C5] transition-all">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-xl bg-[#FAF6F5] flex items-center justify-center text-[#B9827B]">
                <Building2 className="w-4 h-4" />
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#1E1B18] font-heading">
                  YOU COME TO ME
                </h3>
                <p className="text-xs font-medium text-[#786F6A] mt-0.5">
                  In-Person Notary
                </p>
              </div>

              <div className="text-xs text-[#554E4A] space-y-1">
                <p className="text-[#786F6A]">Designated meeting location:</p>
                <p className="font-semibold text-[#1E1B18]">Wylie, TX 75098</p>
              </div>

              <div className="pt-2 border-t border-[#F0EAE6]">
                <div className="text-base font-extrabold text-[#1E1B18]">
                  $15 <span className="text-xs font-normal text-[#786F6A]">convenience fee</span>
                </div>
                <p className="text-[11px] text-[#B9827B] font-medium mt-0.5">
                  + applicable Texas notarial fees
                </p>
              </div>
            </div>

            <div className="pt-4 mt-3 border-t border-[#F0EAE6]">
              <button
                onClick={() => onNavigateToTab('services')}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#1E1B18] hover:text-[#B9827B] transition-colors"
              >
                <span>Learn More</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: I Come To You */}
          <div className="bg-white rounded-2xl border border-[#F0EAE6] p-5 flex flex-col justify-between hover:border-[#E8C9C5] transition-all">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-xl bg-[#FAF6F5] flex items-center justify-center text-[#B9827B]">
                <Car className="w-4 h-4" />
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#1E1B18] font-heading">
                  I COME TO YOU
                </h3>
                <p className="text-xs font-medium text-[#786F6A] mt-0.5">
                  Local Mobile Notary
                </p>
              </div>

              <div className="text-xs text-[#554E4A] space-y-1">
                <p className="text-[#786F6A]">Service area:</p>
                <p className="font-semibold text-[#1E1B18]">Within a 12-mile radius of ZIP 75166</p>
              </div>

              <div className="pt-2 border-t border-[#F0EAE6]">
                <div className="text-base font-extrabold text-[#1E1B18]">
                  $35 <span className="text-xs font-normal text-[#786F6A]">convenience fee</span>
                </div>
                <p className="text-[11px] text-[#B9827B] font-medium mt-0.5">
                  + applicable Texas notarial fees
                </p>
              </div>
            </div>

            <div className="pt-4 mt-3 border-t border-[#F0EAE6]">
              <button
                onClick={() => onNavigateToTab('services')}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#1E1B18] hover:text-[#B9827B] transition-colors"
              >
                <span>Learn More</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: RON */}
          <div className="bg-white rounded-2xl border border-[#F0EAE6] p-5 flex flex-col justify-between hover:border-[#E8C9C5] transition-all">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-xl bg-[#FAF6F5] flex items-center justify-center text-[#B9827B]">
                <Video className="w-4 h-4" />
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#1E1B18] font-heading">
                  RON (REMOTE ONLINE NOTARY)
                </h3>
                <p className="text-xs font-medium text-[#786F6A] mt-0.5">
                  Online Video Session
                </p>
              </div>

              <div className="text-xs text-[#554E4A] space-y-1">
                <p className="text-[#786F6A]">Format:</p>
                <p className="font-semibold text-[#1E1B18]">Secure online notarization by video.</p>
              </div>

              <div className="pt-2 border-t border-[#F0EAE6]">
                <div className="text-base font-extrabold text-[#1E1B18]">
                  $25 <span className="text-xs font-normal text-[#786F6A]">RON fee</span>
                </div>
                <p className="text-[11px] text-[#B9827B] font-medium mt-0.5">
                  + applicable Texas notarial fees
                </p>
              </div>
            </div>

            <div className="pt-4 mt-3 border-t border-[#F0EAE6]">
              <button
                onClick={() => onNavigateToTab('services')}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#1E1B18] hover:text-[#B9827B] transition-colors"
              >
                <span>Learn More</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 4: Business & Extended Mobile */}
          <div className="bg-white rounded-2xl border border-[#F0EAE6] p-5 flex flex-col justify-between hover:border-[#E8C9C5] transition-all">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-xl bg-[#FAF6F5] flex items-center justify-center text-[#B9827B]">
                <Briefcase className="w-4 h-4" />
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#1E1B18] font-heading">
                  BUSINESS &amp; EXTENDED MOBILE
                </h3>
                <p className="text-xs font-medium text-[#786F6A] mt-0.5">
                  Commercial &amp; Extended
                </p>
              </div>

              <div className="text-xs text-[#554E4A] space-y-1">
                <p className="text-[#786F6A]">Ideal for:</p>
                <p className="font-semibold text-[#1E1B18]">Larger assignments, multiple signers, and extended travel.</p>
              </div>

              <div className="pt-2 border-t border-[#F0EAE6]">
                <div className="text-base font-extrabold text-[#1E1B18]">
                  Starting at $50
                </div>
                <p className="text-[11px] text-[#B9827B] font-medium mt-0.5">
                  + applicable Texas notarial fees
                </p>
              </div>
            </div>

            <div className="pt-4 mt-3 border-t border-[#F0EAE6]">
              <button
                onClick={() => onNavigateToTab('services')}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#1E1B18] hover:text-[#B9827B] transition-colors"
              >
                <span>Learn More</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </section>

      {/* =========================================================================
          3. SIMPLE, TRANSPARENT PRICING
          ========================================================================= */}
      <section id="pricing" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#F0EAE6] p-6 sm:p-8 space-y-6">
          
          <div className="text-center space-y-1">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E1B18] tracking-tight font-heading uppercase">
              SIMPLE, TRANSPARENT PRICING
            </h2>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            
            <div className="p-3.5 rounded-xl bg-white border border-[#F0EAE6] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#1E1B18]">You Come to Me</span>
              <span className="text-sm font-extrabold text-[#1E1B18]">$15</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#F0EAE6] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#1E1B18]">Local Mobile</span>
              <span className="text-sm font-extrabold text-[#1E1B18]">$35</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#F0EAE6] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#1E1B18]">RON (Remote Online Notary)</span>
              <span className="text-sm font-extrabold text-[#1E1B18]">$25</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#F0EAE6] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#1E1B18]">Business / Extended Mobile</span>
              <span className="text-sm font-extrabold text-[#1E1B18]">$50+</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#F0EAE6] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#1E1B18]">After-Hours RON</span>
              <span className="text-sm font-extrabold text-[#1E1B18]">+$25</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#F0EAE6] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#1E1B18]">Loan Signing &amp; Closing</span>
              <span className="text-sm font-extrabold text-[#1E1B18]">Custom Quote</span>
            </div>

          </div>

          <div className="pt-2 text-center text-xs text-[#786F6A]">
            Applicable Texas notarial fees are added separately.
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. NOTARY SERVICES MADE SIMPLE
          ========================================================================= */}
      <section id="notary-services-made-simple" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E1B18] tracking-tight font-heading uppercase">
            NOTARY SERVICES MADE SIMPLE
          </h2>
        </div>

        {/* Exactly Two Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Box 1: Traditional Notary */}
          <div className="bg-white rounded-2xl border border-[#F0EAE6] p-6 space-y-4">
            <div className="space-y-1 pb-3 border-b border-[#F0EAE6]">
              <h3 className="font-bold text-sm text-[#1E1B18] uppercase tracking-wide font-heading">
                TRADITIONAL NOTARY
              </h3>
              <p className="text-xs text-[#786F6A]">
                In-Person (Wylie) or Local Mobile
              </p>
            </div>

            <ol className="space-y-3 text-xs text-[#554E4A]">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#FAF6F5] text-[#B9827B] font-bold text-[11px] flex items-center justify-center shrink-0">
                  1
                </span>
                <div>
                  <strong className="text-[#1E1B18]">Choose your service:</strong> Select in-person meeting in Wylie or mobile travel to your location.
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#FAF6F5] text-[#B9827B] font-bold text-[11px] flex items-center justify-center shrink-0">
                  2
                </span>
                <div>
                  <strong className="text-[#1E1B18]">Book your appointment:</strong> Reserve your date and time with our simple $10 deposit.
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#FAF6F5] text-[#B9827B] font-bold text-[11px] flex items-center justify-center shrink-0">
                  3
                </span>
                <div>
                  <strong className="text-[#1E1B18]">Bring document &amp; photo ID:</strong> Have an unexpired government-issued photo ID ready.
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#FAF6F5] text-[#B9827B] font-bold text-[11px] flex items-center justify-center shrink-0">
                  4
                </span>
                <div>
                  <strong className="text-[#1E1B18]">Meet notary &amp; sign:</strong> Identity is verified, signatures are witnessed, and the official seal is applied.
                </div>
              </li>
            </ol>
          </div>

          {/* Box 2: RON (Remote Online Notary) */}
          <div className="bg-white rounded-2xl border border-[#F0EAE6] p-6 space-y-4">
            <div className="space-y-1 pb-3 border-b border-[#F0EAE6]">
              <h3 className="font-bold text-sm text-[#1E1B18] uppercase tracking-wide font-heading">
                RON (REMOTE ONLINE NOTARY)
              </h3>
              <p className="text-xs text-[#786F6A]">
                Secure online notarization by video.
              </p>
            </div>

            <ol className="space-y-3 text-xs text-[#554E4A]">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#FAF6F5] text-[#B9827B] font-bold text-[11px] flex items-center justify-center shrink-0">
                  1
                </span>
                <div>
                  <strong className="text-[#1E1B18]">Book your online session:</strong> Select a convenient video time slot.
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#FAF6F5] text-[#B9827B] font-bold text-[11px] flex items-center justify-center shrink-0">
                  2
                </span>
                <div>
                  <strong className="text-[#1E1B18]">Verify identity online:</strong> Upload photo ID and complete identity verification.
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#FAF6F5] text-[#B9827B] font-bold text-[11px] flex items-center justify-center shrink-0">
                  3
                </span>
                <div>
                  <strong className="text-[#1E1B18]">Meet securely by video:</strong> Review document and sign electronically with the notary.
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#FAF6F5] text-[#B9827B] font-bold text-[11px] flex items-center justify-center shrink-0">
                  4
                </span>
                <div>
                  <strong className="text-[#1E1B18]">Download notarized document:</strong> Receive your tamper-evident digital document immediately.
                </div>
              </li>
            </ol>
          </div>

        </div>

        {/* Bottom Link Only */}
        <div className="pt-6 text-center">
          <button
            onClick={() => onNavigateToTab('how-it-works')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E1B18] hover:text-[#B9827B] transition-colors"
          >
            <span>How It Works →</span>
          </button>
        </div>

      </section>

      {/* =========================================================================
          5. HOURS • SERVICE AREA • CONTACT
          ========================================================================= */}
      <section id="hours-service-area-contact" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-1 mb-8">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E1B18] tracking-tight font-heading uppercase">
            HOURS • SERVICE AREA • CONTACT
          </h2>
        </div>

        {/* 3 Clean Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* BOX 1: HOURS */}
          <div className="bg-white rounded-2xl border border-[#F0EAE6] p-5 space-y-3">
            <div className="flex items-center gap-2 text-[#1E1B18] pb-2 border-b border-[#F0EAE6]">
              <Clock className="w-4 h-4 text-[#B9827B]" />
              <h3 className="font-bold text-sm uppercase tracking-wide font-heading">HOURS</h3>
            </div>

            <div className="space-y-2.5 text-xs text-[#554E4A]">
              <div>
                <strong className="text-[#1E1B18] block">In-Person &amp; Mobile</strong>
                <p className="text-[#786F6A]">Mon–Wed: 1:00 PM–6:30 PM CT</p>
                <p className="text-[#786F6A]">Saturday: 10:00 AM–1:00 PM CT</p>
              </div>

              <div className="pt-2 border-t border-[#F0EAE6]">
                <strong className="text-[#1E1B18] block">RON (Remote Online Notary)</strong>
                <p className="text-[#786F6A]">Mon–Fri: 10:00 AM–7:00 PM CT</p>
                <p className="text-[#786F6A]">Sat–Sun: 11:00 AM–5:00 PM CT</p>
              </div>

              <p className="text-[11px] text-[#B9827B] pt-1">
                After-hours RON available by appointment through 9:00 PM CT.
              </p>
            </div>
          </div>

          {/* BOX 2: SERVICE AREA */}
          <div className="bg-white rounded-2xl border border-[#F0EAE6] p-5 space-y-3">
            <div className="flex items-center gap-2 text-[#1E1B18] pb-2 border-b border-[#F0EAE6]">
              <MapPin className="w-4 h-4 text-[#B9827B]" />
              <h3 className="font-bold text-sm uppercase tracking-wide font-heading">SERVICE AREA</h3>
            </div>

            <div className="space-y-2.5 text-xs text-[#554E4A]">
              <div>
                <strong className="text-[#1E1B18] block">Based in:</strong>
                <p className="text-[#786F6A]">Lavon, TX 75166</p>
              </div>

              <div className="pt-2 border-t border-[#F0EAE6]">
                <strong className="text-[#1E1B18] block">Local Mobile:</strong>
                <p className="text-[#786F6A]">Within 12 miles of ZIP 75166</p>
              </div>

              <div className="pt-2 border-t border-[#F0EAE6]">
                <strong className="text-[#1E1B18] block">You Come to Me:</strong>
                <p className="text-[#786F6A]">Wylie, TX 75098</p>
              </div>
            </div>
          </div>

          {/* BOX 3: CONTACT */}
          <div className="bg-white rounded-2xl border border-[#F0EAE6] p-5 space-y-3">
            <div className="flex items-center gap-2 text-[#1E1B18] pb-2 border-b border-[#F0EAE6]">
              <Phone className="w-4 h-4 text-[#B9827B]" />
              <h3 className="font-bold text-sm uppercase tracking-wide font-heading">CONTACT</h3>
            </div>

            <div className="space-y-3 text-xs text-[#554E4A]">
              <div>
                <span className="text-[#786F6A] block">Phone:</span>
                <a
                  href="tel:+19728531513"
                  className="font-bold text-sm text-[#1E1B18] hover:text-[#B9827B] transition-colors"
                >
                  (972) 853-1513
                </a>
              </div>

              <div className="pt-2 border-t border-[#F0EAE6]">
                <span className="text-[#786F6A] block">Email:</span>
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="font-medium text-[#1E1B18] hover:text-[#B9827B] transition-colors break-all"
                >
                  {BRAND_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* =========================================================================
          6. READY TO GET STARTED?
          ========================================================================= */}
      <section id="ready-to-get-started" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl border border-[#F0EAE6] p-8 sm:p-10 space-y-4">
          
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E1B18] tracking-tight font-heading uppercase">
              READY TO GET STARTED?
            </h2>
            <p className="text-xs sm:text-sm text-[#554E4A]">
              Book your appointment online or give us a call.
            </p>
          </div>

          <div className="pt-2 flex flex-col items-center justify-center gap-2">
            <button
              id="final-book-appointment-btn"
              onClick={() => onOpenBooking('Select Notary Service', '$15–$35 + notarial fees', '[GENERAL NOTARY CALENDLY LINK]')}
              className="py-3.5 px-8 bg-[#B9827B] hover:bg-[#a56f68] active:scale-[0.98] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-xl transition-all shadow-xs flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK AN APPOINTMENT</span>
            </button>

            <a
              href="tel:+19728531513"
              className="font-semibold text-xs text-[#1E1B18] hover:text-[#B9827B] transition-colors pt-1"
            >
              (972) 853-1513
            </a>
          </div>

          <p className="text-[11px] text-[#786F6A] pt-2 border-t border-[#F0EAE6]">
            All services are by appointment only. Walk-ins are not accepted.
          </p>

        </div>
      </section>

    </div>
  );
};
