import React, { useState } from 'react';
import { 
  HOW_IT_WORKS_STEPS, 
  APPOINTMENT_DURATIONS, 
  PRICING_DATA,
  SERVICES 
} from '../data/notaryData';
import { 
  CheckCircle2, 
  Calendar, 
  Sparkles, 
  Clock, 
  CreditCard, 
  FileText, 
  ShieldCheck, 
  Calculator, 
  ArrowRight,
  Info,
  DollarSign,
  UserCheck,
  Building2,
  Car,
  Video
} from 'lucide-react';

interface HowItWorksPageProps {
  onOpenBooking: (serviceTitle?: string, fee?: string, placeholder?: string) => void;
  onOpenQuote: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({
  onOpenBooking,
  onOpenQuote,
}) => {
  // Interactive Fee Estimator State
  const [selectedServiceId, setSelectedServiceId] = useState<'in-person' | 'local-mobile' | 'ron' | 'after-hours'>('local-mobile');
  const [signaturesCount, setSignaturesCount] = useState<number>(1);

  // Price calculations
  const baseServiceFees = {
    'in-person': 15,
    'local-mobile': 35,
    'ron': 25,
    'after-hours': 50, // $25 base + $25 evening
  };

  const serviceNames = {
    'in-person': 'In-Person Notary (You Come to Me)',
    'local-mobile': 'Local Mobile Notary (I Come to You)',
    'ron': 'Remote Online Notary (RON via BlueNotary)',
    'after-hours': 'After-Hours Evening RON (until 9 PM CT)',
  };

  const calendlyPlaceholders = {
    'in-person': '[IN PERSON CALENDLY LINK]',
    'local-mobile': '[MOBILE NOTARY CALENDLY LINK]',
    'ron': '[RON CALENDLY LINK]',
    'after-hours': '[AFTER HOURS CALENDLY LINK]',
  };

  const convenienceFee = baseServiceFees[selectedServiceId];
  const statutoryFees = signaturesCount * PRICING_DATA.statutoryNotaryFee;
  const grossTotal = convenienceFee + statutoryFees;
  const depositCredit = PRICING_DATA.depositAmount; // $10
  const remainingDue = Math.max(0, grossTotal - depositCredit);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8C9C5]/40 text-[#1E1B18] text-xs font-semibold uppercase tracking-wider font-heading">
          <Sparkles className="w-3.5 h-3.5 text-[#B9827B]" />
          Step-by-Step Experience
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E1B18] tracking-tight font-heading">
          How It Works &amp; Interactive Estimator
        </h1>
        <p className="text-sm sm:text-base text-[#554E4A]">
          Simple, transparent, and hassle-free notarial appointments. Learn what to bring, explore expected durations, and calculate your exact estimated invoice below.
        </p>
      </div>

      {/* 4-Step Process Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#1E1B18] font-heading text-center">
          The 4-Step Notary Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-3xl border border-[#D8CEC7] p-6 flex flex-col justify-between hover:border-[#B9827B] transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-2xl bg-[#FAF7F2] text-[#B9827B] font-bold font-heading text-sm flex items-center justify-center border border-[#E3D9CE]">
                    0{step.step}
                  </span>
                  <span className="text-[11px] font-semibold text-[#786F6A] uppercase">
                    Step {step.step}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#1E1B18] font-heading">
                  {step.title}
                </h3>
                <p className="text-xs text-[#554E4A] leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#FAF7F2] text-[11px] font-medium text-[#B9827B]">
                {step.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Fee Estimator Section */}
      <div id="fee-estimator" className="bg-white rounded-3xl border-2 border-[#B9827B]/60 shadow-lg p-6 sm:p-10 space-y-8">
        
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EAE2D8] pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B9827B] uppercase tracking-wider">
              <Calculator className="w-4 h-4" />
              <span>Real-Time Calculator</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E1B18] font-heading">
              Interactive Fee Estimator
            </h2>
            <p className="text-xs sm:text-sm text-[#554E4A]">
              Select your service, choose how many signatures require notarization, and see your exact line-item balance.
            </p>
          </div>
          <span className="px-3 py-1.5 rounded-xl bg-[#FAF7F2] border border-[#D8CEC7] text-xs font-semibold text-[#1E1B18]">
            Texas Statutory Rates Included
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Select Service Type */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1B18]">
                1. Select Notary Service Type:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                <button
                  type="button"
                  onClick={() => setSelectedServiceId('in-person')}
                  className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3 ${
                    selectedServiceId === 'in-person'
                      ? 'bg-[#FAF7F2] border-[#B9827B] ring-2 ring-[#B9827B]/30'
                      : 'bg-white border-[#D8CEC7] hover:border-[#B9827B]'
                  }`}
                >
                  <Building2 className="w-5 h-5 text-[#B9827B] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-[#1E1B18]">In-Person Notary</p>
                    <p className="text-[11px] text-[#786F6A]">You Come to Me ($15 flat)</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedServiceId('local-mobile')}
                  className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3 ${
                    selectedServiceId === 'local-mobile'
                      ? 'bg-[#FAF7F2] border-[#B9827B] ring-2 ring-[#B9827B]/30'
                      : 'bg-white border-[#D8CEC7] hover:border-[#B9827B]'
                  }`}
                >
                  <Car className="w-5 h-5 text-[#B9827B] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-[#1E1B18]">Local Mobile Notary</p>
                    <p className="text-[11px] text-[#786F6A]">I Come to You 12 mi ($35 flat)</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedServiceId('ron')}
                  className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3 ${
                    selectedServiceId === 'ron'
                      ? 'bg-[#FAF7F2] border-[#B9827B] ring-2 ring-[#B9827B]/30'
                      : 'bg-white border-[#D8CEC7] hover:border-[#B9827B]'
                  }`}
                >
                  <Video className="w-5 h-5 text-[#B9827B] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-[#1E1B18]">Remote Online (RON)</p>
                    <p className="text-[11px] text-[#786F6A]">BlueNotary Video ($25 flat)</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedServiceId('after-hours')}
                  className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3 ${
                    selectedServiceId === 'after-hours'
                      ? 'bg-[#FAF7F2] border-[#B9827B] ring-2 ring-[#B9827B]/30'
                      : 'bg-white border-[#D8CEC7] hover:border-[#B9827B]'
                  }`}
                >
                  <Clock className="w-5 h-5 text-[#B9827B] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-[#1E1B18]">After-Hours RON</p>
                    <p className="text-[11px] text-[#786F6A]">Evening to 9 PM CT ($50 flat)</p>
                  </div>
                </button>

              </div>
            </div>

            {/* 2. Number of Notarized Signatures */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1B18]">
                  2. Number of Notarized Signatures / Certificates:
                </label>
                <span className="text-sm font-extrabold text-[#1E1B18] px-3 py-1 rounded-xl bg-[#FAF7F2] border border-[#D8CEC7]">
                  {signaturesCount} {signaturesCount === 1 ? 'Signature' : 'Signatures'} ($10 ea.)
                </span>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={signaturesCount}
                  onChange={(e) => setSignaturesCount(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-[#EAE2D8] rounded-lg appearance-none cursor-pointer accent-[#B9827B]"
                />
              </div>

              <div className="flex justify-between text-[11px] text-[#786F6A] font-medium px-1">
                <span>1 Signature</span>
                <span>3</span>
                <span>5</span>
                <span>7</span>
                <span>10 Signatures</span>
              </div>
            </div>

            {/* Quick Helper Note */}
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E3D9CE] text-xs text-[#554E4A] flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#B9827B] shrink-0 mt-0.5" />
              <p>
                Under Texas law (Tex. Gov. Code § 406.024), standard notarial acts are fixed at $10.00 per certificate/seal. The travel/platform convenience fee is billed separately.
              </p>
            </div>

          </div>

          {/* Live Invoice Breakdown Column */}
          <div className="lg:col-span-5 bg-[#FAF7F2] rounded-2xl border border-[#E8C9C5] p-6 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#E3D9CE] pb-3">
                <h3 className="text-base font-bold text-[#1E1B18] font-heading">
                  Estimated Itemized Total
                </h3>
                <span className="text-[11px] font-semibold text-[#B9827B] uppercase">
                  Quote Preview
                </span>
              </div>

              {/* Line Items */}
              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between text-[#554E4A]">
                  <span>{serviceNames[selectedServiceId]}</span>
                  <span className="font-semibold text-[#1E1B18]">${convenienceFee}.00</span>
                </div>
                <div className="flex justify-between text-[#554E4A]">
                  <span>Texas Statutory Notary Fees ({signaturesCount} × $10)</span>
                  <span className="font-semibold text-[#1E1B18]">${statutoryFees}.00</span>
                </div>
                <div className="pt-2 border-t border-[#E3D9CE] flex justify-between font-bold text-[#1E1B18]">
                  <span>Gross Estimated Service Total</span>
                  <span>${grossTotal}.00</span>
                </div>
                <div className="flex justify-between text-[#B9827B] font-medium">
                  <span>Less: $10.00 Required Booking Deposit</span>
                  <span>-$10.00</span>
                </div>
              </div>

              {/* Total Due Highlight */}
              <div className="p-4 rounded-2xl bg-white border-2 border-[#B9827B] text-center space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#786F6A] font-semibold">
                  Remaining Balance Due at Signing
                </span>
                <div className="text-3xl font-extrabold text-[#1E1B18] font-heading">
                  ${remainingDue}.00
                </div>
                <p className="text-[11px] text-[#554E4A]">
                  Payable via Cash, Zelle, Venmo, or Card at appointment
                </p>
              </div>
            </div>

            {/* Book This Button */}
            <div className="space-y-2">
              <button
                onClick={() => onOpenBooking(
                  serviceNames[selectedServiceId], 
                  `$${convenienceFee} convenience + $${statutoryFees} notarial fees ($${grossTotal} total, $${remainingDue} due at signing)`,
                  calendlyPlaceholders[selectedServiceId]
                )}
                className="w-full py-3 px-4 rounded-xl bg-[#B9827B] hover:bg-[#a56f68] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book With This Estimate</span>
              </button>
              <p className="text-[10px] text-center text-[#786F6A]">
                Deposit ($10) secures your chosen slot &amp; applies directly to your invoice.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Appointment Durations Reference */}
      <div className="bg-white rounded-3xl border border-[#D8CEC7] p-8 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-[#1E1B18] font-heading flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#B9827B]" />
            <span>Recommended Appointment Durations</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#554E4A]">
            To protect all scheduled clients, we allocate dedicated time slots for every appointment type.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {APPOINTMENT_DURATIONS.map((dur, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E3D9CE] space-y-2">
              <span className="text-xs font-bold text-[#B9827B] uppercase block">
                {dur.service}
              </span>
              <p className="text-xl font-extrabold text-[#1E1B18] font-heading">
                {dur.duration}
              </p>
              <p className="text-xs text-[#554E4A] leading-relaxed">
                {dur.note}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
