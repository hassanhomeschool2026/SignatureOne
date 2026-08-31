import React, { useState } from 'react';
import { DollarSign, Check, Info, ShieldCheck, ArrowRight, Calculator } from 'lucide-react';
import { BRAND_INFO } from '../data/notaryData';
import { CALENDLY_LINKS, openBookingLink } from '../config/booking';

interface PricingSectionProps {
  onOpenBooking?: (serviceTitle?: string, fee?: string, placeholder?: string) => void;
  onOpenQuote: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onOpenBooking,
  onOpenQuote,
}) => {
  // Interactive Fee Calculator state
  const [selectedService, setSelectedService] = useState<'meet-me' | 'mobile' | 'ron' | 'ron-after'>('mobile');
  const [signaturesCount, setSignaturesCount] = useState<number>(1);

  // Fee calculation logic
  // Texas Statutory fee: $10 for 1st signature, $1 per additional signature on same certificate (or $10 per distinct cert)
  // Let's use clean statutory base: $10 for first, $10 for separate cert or $1 addl
  const convenienceFees = {
    'meet-me': 15,
    'mobile': 35,
    'ron': 25,
    'ron-after': 50, // 25 RON + 25 After-Hours
  };

  const serviceNames = {
    'meet-me': 'You Come to Me (In-Person)',
    'mobile': 'I Come to You (Local Mobile)',
    'ron': 'Remote Online Notary (RON)',
    'ron-after': 'After-Hours RON (Evening)',
  };

  const statFeePerSignature = 10;
  const totalStatFee = signaturesCount * statFeePerSignature;
  const currentConvenienceFee = convenienceFees[selectedService];
  const totalEstimated = currentConvenienceFee + totalStatFee;
  const deposit = 10;
  const balanceDue = Math.max(0, totalEstimated - deposit);

  return (
    <section id="pricing" className="py-16 md:py-24 bg-[#F8F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FFFFFF] text-[#292727] border border-[#D8CEC7]">
            <DollarSign className="w-3.5 h-3.5 text-[#B9827B]" />
            Transparent Rates
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292727]">
            Simple, Upfront Pricing
          </h2>
          <p className="text-base text-[#554E4A] leading-relaxed">
            All SignatureOne service fees are disclosed before booking and separately itemized from applicable Texas notarial fees. No hidden surcharges.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Meet Me */}
          <div className="bg-white rounded-2xl p-6 border border-[#D8CEC7] hover:border-[#B9827B] transition-all flex flex-col justify-between shadow-xs">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#786F6A] block">
                In-Person At Meeting Point
              </span>
              <h3 className="font-serif text-xl font-bold text-[#292727] mt-1">
                You Come to Me
              </h3>
              <div className="mt-4 pb-4 border-b border-[#D8CEC7]">
                <span className="font-serif text-3xl font-bold text-[#292727]">$15</span>
                <span className="text-xs text-[#786F6A] ml-2">Convenience Fee</span>
              </div>
              <ul className="mt-4 space-y-2 text-xs text-[#554E4A]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>PLUS applicable Texas statutory notarial fee(s)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>Designated local meeting location in Lavon area</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>$10 deposit applied toward balance</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-[#D8CEC7]">
              <button
                onClick={() => openBookingLink(CALENDLY_LINKS.inPerson)}
                className="w-full py-2.5 bg-[#B9827B] hover:bg-[#a66f68] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all cursor-pointer"
              >
                Book In-Person
              </button>
            </div>
          </div>

          {/* Card 2: Local Mobile */}
          <div className="bg-white rounded-2xl p-6 border-2 border-[#B9827B] shadow-md flex flex-col justify-between relative">
            <div className="absolute -top-3 right-6 bg-[#B9827B] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-0.5 rounded-full shadow-xs">
              Most Popular
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#B9827B] block">
                Travels to You (12 Miles)
              </span>
              <h3 className="font-serif text-xl font-bold text-[#292727] mt-1">
                Local Mobile Notary
              </h3>
              <div className="mt-4 pb-4 border-b border-[#D8CEC7]">
                <span className="font-serif text-3xl font-bold text-[#292727]">$35</span>
                <span className="text-xs text-[#786F6A] ml-2">Mobile Convenience Fee</span>
              </div>
              <ul className="mt-4 space-y-2 text-xs text-[#554E4A]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>PLUS applicable Texas statutory notarial fee(s)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>Home, office, business, hospital, or hotel</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>Includes 12-mile radius from ZIP 75166</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-[#D8CEC7]">
              <button
                onClick={() => openBookingLink(CALENDLY_LINKS.mobile)}
                className="w-full py-2.5 bg-[#B9827B] hover:bg-[#a66f68] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all cursor-pointer"
              >
                Book Local Mobile
              </button>
            </div>
          </div>

          {/* Card 3: Online Notary (RON) & After Hours */}
          <div className="bg-white rounded-2xl p-6 border border-[#D8CEC7] hover:border-[#B9827B] transition-all flex flex-col justify-between shadow-xs">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#786F6A] block">
                100% Digital Remote
              </span>
              <h3 className="font-serif text-xl font-bold text-[#292727] mt-1">
                Remote Online (RON)
              </h3>
              <div className="mt-4 pb-4 border-b border-[#D8CEC7]">
                <span className="font-serif text-3xl font-bold text-[#292727]">$25</span>
                <span className="text-xs text-[#786F6A] ml-2">RON Platform Fee</span>
              </div>
              <ul className="mt-4 space-y-2 text-xs text-[#554E4A]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>PLUS applicable Texas statutory notarial fee(s)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>Designated BlueNotary secure platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#B9827B] shrink-0 mt-0.5" />
                  <span>After-hours available: +$25 service fee (until 9 PM)</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-[#D8CEC7]">
              <button
                onClick={() => openBookingLink(CALENDLY_LINKS.ron)}
                className="w-full py-2.5 bg-[#B9827B] hover:bg-[#a66f68] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all cursor-pointer"
              >
                Book Online RON
              </button>
            </div>
          </div>

        </div>

        {/* Interactive Fee Estimator & Deposit Breakdown Widget */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D8CEC7] shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#D8CEC7]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F8F4EF] border border-[#D8CEC7] flex items-center justify-center text-[#B9827B]">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#292727]">
                  Interactive Fee Estimator
                </h3>
                <p className="text-xs text-[#786F6A]">
                  Calculate your itemized estimate and understand the $10 deposit breakdown
                </p>
              </div>
            </div>
            <div className="text-xs text-[#786F6A] bg-[#F8F4EF] px-3 py-1.5 rounded-lg border border-[#D8CEC7]">
              $10 deposit applied directly to final balance
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            
            {/* Calculator Controls */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#292727] mb-2">
                  1. Select Service Type
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedService('meet-me')}
                    className={`p-2.5 rounded-xl border text-xs font-semibold text-left transition-all ${
                      selectedService === 'meet-me'
                        ? 'bg-[#F8F4EF] border-[#B9827B] text-[#292727] ring-1 ring-[#B9827B]'
                        : 'bg-white border-[#D8CEC7] text-[#554E4A] hover:bg-[#F8F4EF]'
                    }`}
                  >
                    You Come to Me ($15)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedService('mobile')}
                    className={`p-2.5 rounded-xl border text-xs font-semibold text-left transition-all ${
                      selectedService === 'mobile'
                        ? 'bg-[#F8F4EF] border-[#B9827B] text-[#292727] ring-1 ring-[#B9827B]'
                        : 'bg-white border-[#D8CEC7] text-[#554E4A] hover:bg-[#F8F4EF]'
                    }`}
                  >
                    Local Mobile ($35)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedService('ron')}
                    className={`p-2.5 rounded-xl border text-xs font-semibold text-left transition-all ${
                      selectedService === 'ron'
                        ? 'bg-[#F8F4EF] border-[#B9827B] text-[#292727] ring-1 ring-[#B9827B]'
                        : 'bg-white border-[#D8CEC7] text-[#554E4A] hover:bg-[#F8F4EF]'
                    }`}
                  >
                    Online RON ($25)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedService('ron-after')}
                    className={`p-2.5 rounded-xl border text-xs font-semibold text-left transition-all ${
                      selectedService === 'ron-after'
                        ? 'bg-[#F8F4EF] border-[#B9827B] text-[#292727] ring-1 ring-[#B9827B]'
                        : 'bg-white border-[#D8CEC7] text-[#554E4A] hover:bg-[#F8F4EF]'
                    }`}
                  >
                    After-Hours RON ($50)
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#292727] mb-2">
                  2. Number of Notarized Signatures / Certificates
                </label>
                <div className="flex items-center gap-3">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setSignaturesCount(num)}
                      className={`w-10 h-10 rounded-xl font-semibold text-xs border transition-all ${
                        signaturesCount === num
                          ? 'bg-[#292727] text-white border-[#292727]'
                          : 'bg-white border-[#D8CEC7] text-[#292727] hover:bg-[#F8F4EF]'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                  <span className="text-xs text-[#786F6A] pl-2">
                    (@ $10 statutory fee each)
                  </span>
                </div>
              </div>

              <div className="p-3 bg-[#F8F4EF] rounded-xl border border-[#D8CEC7] text-[11px] text-[#786F6A]">
                <p>
                  <strong>Note:</strong> Texas statutory notarial fees are established by Texas Gov. Code § 406.024. Convenience fees cover travel, meeting location coordination, and remote technology platform hosting.
                </p>
              </div>
            </div>

            {/* Itemized Calculation Summary Card */}
            <div className="lg:col-span-6 bg-[#F8F4EF] p-5 sm:p-6 rounded-2xl border border-[#D8CEC7] flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#B9827B] block">
                  Estimated Itemized Receipt
                </span>
                <h4 className="font-serif font-bold text-lg text-[#292727]">
                  {serviceNames[selectedService]}
                </h4>

                <div className="space-y-2 text-xs pt-2">
                  <div className="flex justify-between py-1 border-b border-[#D8CEC7]">
                    <span className="text-[#554E4A]">SignatureOne Convenience / Platform Fee:</span>
                    <span className="font-semibold text-[#292727]">${currentConvenienceFee}.00</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#D8CEC7]">
                    <span className="text-[#554E4A]">Texas Statutory Fee ({signaturesCount} × $10):</span>
                    <span className="font-semibold text-[#292727]">${totalStatFee}.00</span>
                  </div>
                  <div className="flex justify-between py-1 font-bold text-sm text-[#292727]">
                    <span>Total Service Amount:</span>
                    <span className="font-serif text-base">${totalEstimated}.00</span>
                  </div>
                  <div className="flex justify-between py-1 text-xs text-[#B9827B] border-t border-[#D8CEC7]">
                    <span>Less Booking Deposit Paid Online:</span>
                    <span className="font-semibold">-${deposit}.00</span>
                  </div>
                  <div className="flex justify-between py-1.5 font-bold text-sm text-[#292727] bg-white p-2.5 rounded-lg border border-[#D8CEC7]">
                    <span>Remaining Balance Due After Signing:</span>
                    <span className="font-serif text-lg text-[#B9827B]">${balanceDue}.00</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    const link = selectedService === 'meet-me' 
                      ? CALENDLY_LINKS.inPerson 
                      : selectedService === 'mobile' 
                      ? CALENDLY_LINKS.mobile 
                      : selectedService === 'ron-after' 
                      ? CALENDLY_LINKS.ronAfterHours 
                      : CALENDLY_LINKS.ron;
                    openBookingLink(link);
                  }}
                  className="w-full py-2.5 px-4 bg-[#B9827B] hover:bg-[#a66f68] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Book This Service ($10 Deposit)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
