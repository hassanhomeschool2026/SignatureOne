import React from 'react';
import { HeroBanner } from '../components/HeroBanner';
import { PRICING_DATA, SERVICES, BRAND_INFO } from '../data/notaryData';
import { 
  CheckCircle2, 
  Calendar, 
  FileText, 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Info,
  DollarSign,
  Zap,
  Building2,
  Video,
  Car
} from 'lucide-react';

interface HomePageProps {
  onOpenBooking: (serviceTitle?: string, fee?: string, placeholder?: string) => void;
  onOpenQuote: () => void;
  onNavigateToTab: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenBooking,
  onOpenQuote,
  onNavigateToTab,
}) => {
  return (
    <div className="space-y-12 pb-16">
      {/* Hero Banner with exact user cover styling & quick actions */}
      <HeroBanner 
        onOpenBooking={onOpenBooking} 
        onOpenQuote={onOpenQuote} 
        onNavigateToTab={onNavigateToTab} 
      />

      {/* Main Pricing Sheet Section (Straightforward & Transparent) */}
      <section id="pricing-sheet" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8C9C5]/40 text-[#1E1B18] text-xs font-semibold uppercase tracking-wider">
            <DollarSign className="w-3.5 h-3.5 text-[#B9827B]" />
            Transparent Pricing Sheet
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E1B18] tracking-tight font-heading">
            Simple, Straightforward Rates
          </h2>
          <p className="text-sm sm:text-base text-[#554E4A]">
            No hidden mileage surprises or surprise add-ons. Clear convenience fees plus standard Texas statutory notarial fees. Every appointment includes our $10 deposit credited directly toward your final invoice.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 1. In-Person (Meet Me) */}
          <div className="bg-white rounded-2xl border border-[#D8CEC7] p-6 flex flex-col justify-between hover:border-[#B9827B] hover:shadow-md transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-[#FAF7F2] text-[#B9827B] border border-[#E3D9CE]">
                  <Building2 className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-semibold uppercase px-2.5 py-1 rounded-full bg-[#FAF7F2] text-[#554E4A] border border-[#D8CEC7]">
                  You Come To Me
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1E1B18] font-heading">In-Person Notary</h3>
                <p className="text-xs text-[#554E4A] mt-1">Convenient meeting location in Lavon, TX 75166</p>
              </div>
              <div className="pt-2 border-t border-[#FAF7F2]">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-[#1E1B18] font-heading">$15</span>
                  <span className="text-xs text-[#786F6A]">convenience fee</span>
                </div>
                <p className="text-[11px] text-[#B9827B] font-medium mt-1">+ $10 per Texas notarized signature</p>
              </div>
              <ul className="space-y-2 text-xs text-[#554E4A] pt-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>Ideal for single documents or quick affidavits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>15-minute appointment block</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>$10 deposit applied to final bill</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onOpenBooking('In-Person Notary (You Come to Me)', '$15 convenience fee + $10/signature', '[IN PERSON CALENDLY LINK]')}
              className="mt-6 w-full py-2.5 px-4 rounded-xl bg-[#FAF7F2] hover:bg-[#B9827B] text-[#1E1B18] hover:text-white font-semibold text-xs transition-all border border-[#D8CEC7] hover:border-[#B9827B] flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book In-Person</span>
            </button>
          </div>

          {/* 2. Local Mobile (I Come To You) */}
          <div className="bg-[#FAF7F2] rounded-2xl border-2 border-[#B9827B] p-6 flex flex-col justify-between shadow-sm relative">
            <div className="absolute -top-3 right-6 bg-[#B9827B] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
              Most Popular
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-white text-[#B9827B] border border-[#E8C9C5]">
                  <Car className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-semibold uppercase px-2.5 py-1 rounded-full bg-[#E8C9C5]/40 text-[#1E1B18]">
                  I Come To You
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1E1B18] font-heading">Local Mobile Notary</h3>
                <p className="text-xs text-[#554E4A] mt-1">To your home, office, coffee shop, or hospital</p>
              </div>
              <div className="pt-2 border-t border-white">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-[#1E1B18] font-heading">$35</span>
                  <span className="text-xs text-[#786F6A]">flat travel fee</span>
                </div>
                <p className="text-[11px] text-[#B9827B] font-medium mt-1">+ $10 per Texas notarized signature</p>
              </div>
              <ul className="space-y-2 text-xs text-[#554E4A] pt-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>12-mile radius from Lavon 75166</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>Wylie, Nevada, Josephine, Royse City, Fate</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>$10 deposit applied to final bill</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onOpenBooking('Local Mobile Notary (I Come to You)', '$35 travel fee + $10/signature', '[MOBILE NOTARY CALENDLY LINK]')}
              className="mt-6 w-full py-2.5 px-4 rounded-xl bg-[#B9827B] hover:bg-[#a56f68] text-white font-semibold text-xs transition-all shadow-xs flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Mobile Notary</span>
            </button>
          </div>

          {/* 3. Remote Online Notarization (RON) */}
          <div className="bg-white rounded-2xl border border-[#D8CEC7] p-6 flex flex-col justify-between hover:border-[#B9827B] hover:shadow-md transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-[#FAF7F2] text-[#B9827B] border border-[#E3D9CE]">
                  <Video className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-semibold uppercase px-2.5 py-1 rounded-full bg-[#FAF7F2] text-[#554E4A] border border-[#D8CEC7]">
                  100% Online
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1E1B18] font-heading">Remote Online (RON)</h3>
                <p className="text-xs text-[#554E4A] mt-1">Legally notarize anywhere in Texas via BlueNotary</p>
              </div>
              <div className="pt-2 border-t border-[#FAF7F2]">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-[#1E1B18] font-heading">$25</span>
                  <span className="text-xs text-[#786F6A]">platform fee</span>
                </div>
                <p className="text-[11px] text-[#B9827B] font-medium mt-1">+ $10 per Texas notarized signature</p>
              </div>
              <ul className="space-y-2 text-xs text-[#554E4A] pt-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>BlueNotary biometric KBA verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>Instant tamper-evident digital download</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>After-hours evening slots available (+$25)</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onOpenBooking('Remote Online Notarization (RON)', '$25 platform fee + $10/signature', '[RON CALENDLY LINK]')}
              className="mt-6 w-full py-2.5 px-4 rounded-xl bg-[#FAF7F2] hover:bg-[#B9827B] text-[#1E1B18] hover:text-white font-semibold text-xs transition-all border border-[#D8CEC7] hover:border-[#B9827B] flex items-center justify-center gap-1.5"
            >
              <Video className="w-3.5 h-3.5" />
              <span>Book Online (RON)</span>
            </button>
          </div>

          {/* 4. Loan Signing & Real Estate Closings */}
          <div className="bg-white rounded-2xl border border-[#D8CEC7] p-6 flex flex-col justify-between hover:border-[#B9827B] hover:shadow-md transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-[#FAF7F2] text-[#B9827B] border border-[#E3D9CE]">
                  <FileText className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-semibold uppercase px-2.5 py-1 rounded-full bg-[#FAF7F2] text-[#554E4A] border border-[#D8CEC7]">
                  Title &amp; Escrow
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1E1B18] font-heading">Loan Signing (LSA)</h3>
                <p className="text-xs text-[#554E4A] mt-1">Purchases, Refinances, HELOCs &amp; Sellers</p>
              </div>
              <div className="pt-2 border-t border-[#FAF7F2]">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-[#1E1B18] font-heading">$50+</span>
                  <span className="text-xs text-[#786F6A]">tailored quote</span>
                </div>
                <p className="text-[11px] text-[#B9827B] font-medium mt-1">Based on package volume &amp; mileage</p>
              </div>
              <ul className="space-y-2 text-xs text-[#554E4A] pt-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>Dual-tray laser printing &amp; full prep</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>Same-day scanbacks &amp; carrier dropoff</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>Background screened &amp; certified</span>
                </li>
              </ul>
            </div>
            <button
              onClick={onOpenQuote}
              className="mt-6 w-full py-2.5 px-4 rounded-xl bg-[#1E1B18] hover:bg-[#35302C] text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-[#E8C9C5]" />
              <span>Request LSA Quote</span>
            </button>
          </div>

        </div>

        {/* Straightforward Pricing Comparison Table */}
        <div className="mt-12 bg-white rounded-2xl border border-[#D8CEC7] overflow-hidden shadow-xs">
          <div className="px-6 py-4 bg-[#FAF7F2] border-b border-[#D8CEC7] flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-[#1E1B18] font-heading">
                Comprehensive Fee Schedule &amp; Line-Item Summary
              </h3>
              <p className="text-xs text-[#554E4A]">
                Governed under Texas Government Code § 406.024
              </p>
            </div>
            <button
              onClick={() => onNavigateToTab('how-it-works')}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#B9827B] hover:text-[#1E1B18] transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Launch Interactive Fee Estimator &rarr;</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#FAF7F2]/60 text-[#1E1B18] font-semibold border-b border-[#D8CEC7]">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6">Service Category</th>
                  <th className="py-3.5 px-4 sm:px-6">Convenience / Base Fee</th>
                  <th className="py-3.5 px-4 sm:px-6">Per-Signature Rate</th>
                  <th className="py-3.5 px-4 sm:px-6">Required Deposit</th>
                  <th className="py-3.5 px-4 sm:px-6">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAE2D8] text-[#554E4A]">
                <tr className="hover:bg-[#FAF7F2]/40 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-medium text-[#1E1B18]">
                    In-Person ("You Come to Me")
                    <span className="block text-xs text-[#786F6A]">Lavon, TX 75166 meeting location</span>
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#1E1B18]">$15.00</td>
                  <td className="py-3.5 px-4 sm:px-6">$10.00 / certificate</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#B9827B] font-medium">$10.00 (credited)</td>
                  <td className="py-3.5 px-4 sm:px-6">
                    <button
                      onClick={() => onOpenBooking('In-Person Notary', '$15 + $10/sig', '[IN PERSON CALENDLY LINK]')}
                      className="text-xs font-semibold text-[#B9827B] hover:underline"
                    >
                      Book Now
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]/40 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-medium text-[#1E1B18]">
                    Local Mobile Notary ("I Come to You")
                    <span className="block text-xs text-[#786F6A]">Up to 12-mile radius from Lavon</span>
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#1E1B18]">$35.00</td>
                  <td className="py-3.5 px-4 sm:px-6">$10.00 / certificate</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#B9827B] font-medium">$10.00 (credited)</td>
                  <td className="py-3.5 px-4 sm:px-6">
                    <button
                      onClick={() => onOpenBooking('Local Mobile Notary', '$35 + $10/sig', '[MOBILE NOTARY CALENDLY LINK]')}
                      className="text-xs font-semibold text-[#B9827B] hover:underline"
                    >
                      Book Now
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]/40 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-medium text-[#1E1B18]">
                    Remote Online Notarization (RON)
                    <span className="block text-xs text-[#786F6A]">BlueNotary secure audio-video session</span>
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#1E1B18]">$25.00</td>
                  <td className="py-3.5 px-4 sm:px-6">$10.00 / certificate</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#B9827B] font-medium">$10.00 (credited)</td>
                  <td className="py-3.5 px-4 sm:px-6">
                    <button
                      onClick={() => onOpenBooking('Remote Online Notarization (RON)', '$25 + $10/sig', '[RON CALENDLY LINK]')}
                      className="text-xs font-semibold text-[#B9827B] hover:underline"
                    >
                      Book Now
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]/40 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-medium text-[#1E1B18]">
                    After-Hours RON (Evening Sessions)
                    <span className="block text-xs text-[#786F6A]">Evenings until 9:00 PM CT (Mon–Sun)</span>
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#1E1B18]">$50.00 ($25 + $25 evening)</td>
                  <td className="py-3.5 px-4 sm:px-6">$10.00 / certificate</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#B9827B] font-medium">$10.00 (credited)</td>
                  <td className="py-3.5 px-4 sm:px-6">
                    <button
                      onClick={() => onOpenBooking('After-Hours Remote Online Notary', '$50 base + $10/sig', '[AFTER HOURS CALENDLY LINK]')}
                      className="text-xs font-semibold text-[#B9827B] hover:underline"
                    >
                      Book Now
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-[#FAF7F2]/40 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 font-medium text-[#1E1B18]">
                    Loan Signing &amp; Real Estate Closings
                    <span className="block text-xs text-[#786F6A]">Purchases, Refis, HELOCs, Sellers</span>
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#1E1B18]">Starting at $50.00</td>
                  <td className="py-3.5 px-4 sm:px-6">Included in Package</td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#786F6A]">Quote based</td>
                  <td className="py-3.5 px-4 sm:px-6">
                    <button
                      onClick={onOpenQuote}
                      className="text-xs font-semibold text-[#1E1B18] hover:underline"
                    >
                      Get Quote
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-[#FAF7F2]/40 border-t border-[#D8CEC7] flex items-center justify-between text-xs text-[#786F6A]">
            <span className="flex items-center gap-1.5">
              <Info className="w-4 h-4 text-[#B9827B]" />
              The $10 deposit secures your appointment and is deducted from your final bill.
            </span>
            <button 
              onClick={() => onNavigateToTab('policies')}
              className="text-[#B9827B] font-medium hover:underline shrink-0"
            >
              View 48-Hour Cancellation Policy &rarr;
            </button>
          </div>
        </div>

      </section>

      {/* Quick Navigation Cards to Explore Full Pages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div 
            onClick={() => onNavigateToTab('services')}
            className="p-6 bg-white rounded-2xl border border-[#D8CEC7] hover:border-[#B9827B] cursor-pointer transition-all hover:shadow-md group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] text-[#B9827B] flex items-center justify-center mb-4 group-hover:bg-[#E8C9C5]/40 transition-colors">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1E1B18] font-heading group-hover:text-[#B9827B] transition-colors flex items-center justify-between">
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-xs text-[#554E4A] mt-2">
              View accepted document types, after-hours RON details, and the 12-mile local travel radius.
            </p>
          </div>

          <div 
            onClick={() => onNavigateToTab('loan-signing')}
            className="p-6 bg-white rounded-2xl border border-[#D8CEC7] hover:border-[#B9827B] cursor-pointer transition-all hover:shadow-md group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] text-[#B9827B] flex items-center justify-center mb-4 group-hover:bg-[#E8C9C5]/40 transition-colors">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1E1B18] font-heading group-hover:text-[#B9827B] transition-colors flex items-center justify-between">
              <span>Loan Signing Services</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-xs text-[#554E4A] mt-2">
              Dedicated closing solutions for Title Agencies, Escrow Officers, Lenders, and Borrowers.
            </p>
          </div>

          <div 
            onClick={() => onNavigateToTab('how-it-works')}
            className="p-6 bg-white rounded-2xl border border-[#D8CEC7] hover:border-[#B9827B] cursor-pointer transition-all hover:shadow-md group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] text-[#B9827B] flex items-center justify-center mb-4 group-hover:bg-[#E8C9C5]/40 transition-colors">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#1E1B18] font-heading group-hover:text-[#B9827B] transition-colors flex items-center justify-between">
              <span>How It Works &amp; Estimator</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-xs text-[#554E4A] mt-2">
              4-step appointment roadmap, ID requirements, and instant interactive fee calculator.
            </p>
          </div>

        </div>
      </section>

      {/* Mandatory Texas Notice Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#D8CEC7] text-xs text-[#554E4A] text-center space-y-1">
          <p className="font-semibold text-[#1E1B18]">
            TEXAS NOTARY PUBLIC LEGAL NOTICE (TEX. GOV. CODE § 406.017)
          </p>
          <p>
            I am not an attorney licensed to practice law in Texas and may not give legal advice or accept fees for legal advice.
          </p>
        </div>
      </section>
    </div>
  );
};
