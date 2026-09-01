import React, { useState } from 'react';
import { 
  DollarSign, 
  Check, 
  Info, 
  ShieldCheck, 
  Calendar, 
  FileText, 
  ArrowRight, 
  Clock, 
  Printer, 
  HelpCircle,
  Building2,
  Car,
  Video,
  Briefcase,
  Upload
} from 'lucide-react';
import { BRAND_INFO, PRICING_DATA } from '../data/notaryData';
import { CALENDLY_LINKS, openBookingLink } from '../config/booking';

interface PricingPageProps {
  onOpenBooking: (serviceTitle?: string, fee?: string, placeholder?: string) => void;
  onOpenQuote: () => void;
  onNavigateToTab: (tab: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  onOpenBooking,
  onOpenQuote,
  onNavigateToTab,
}) => {
  // Simple Fee Estimator State
  const [selectedService, setSelectedService] = useState<'in-person' | 'mobile' | 'ron' | 'ron-after'>('mobile');
  const [signaturesCount, setSignaturesCount] = useState<number>(1);

  const serviceFees = {
    'in-person': { fee: 15, name: 'In-Person Notary', label: '$15 In-Person Convenience Fee', deposit: 10 },
    'mobile': { fee: 35, name: 'Mobile Notary', label: '$35 Mobile Service Fee', deposit: 10 },
    'ron': { fee: 25, name: 'Remote Online (RON)', label: '$25 RON Service Fee (Business Hours)', deposit: 10 },
    'ron-after': { fee: 50, name: 'After-Hours RON', label: '$25 RON Fee + $25 After-Hours Fee', deposit: 10 },
  };

  const statFeePerSignature = 10;
  const totalStatutoryFee = signaturesCount * statFeePerSignature;
  const currentServiceFee = serviceFees[selectedService].fee;
  const estimatedTotal = currentServiceFee + totalStatutoryFee;
  const currentDeposit = serviceFees[selectedService].deposit;
  const estimatedBalance = Math.max(0, estimatedTotal - currentDeposit);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight font-heading uppercase">
          Pricing &amp; Fees
        </h1>
        <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
          Transparent, upfront rates. SignatureOne business and service fees are clearly separated from statutory Texas notarial fees.
        </p>
      </div>

      {/* Primary Fee Notice Banner */}
      <div className="bg-[#FAF8F9] border border-[#F0ECED] rounded-2xl p-5 sm:p-6 text-xs sm:text-sm text-[#52525B] space-y-2">
        <div className="flex items-center gap-2 text-[#18181B] font-bold">
          <Info className="w-4 h-4 text-[#B9827B] shrink-0" />
          <span className="font-heading uppercase tracking-wide text-xs">Fee Transparency Notice</span>
        </div>
        <p className="font-semibold text-[#18181B]">
          Business service fees are separate from statutory notarial fees.
        </p>
        <p className="text-[#71717A] leading-relaxed text-xs">
          Mobile travel, convenience, RON technology/platform services, after-hours availability, printing, package handling, travel, scanbacks, drop-off, etc. are business/service charges and are not charges for performing the official notarial act itself.
        </p>
      </div>

      {/* SignatureOne Service Fees Grid */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#F0ECED] pb-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#18181B] font-heading uppercase">
              SignatureOne Service Fees
            </h2>
            <p className="text-xs text-[#71717A]">
              Standard business fees applied per appointment based on service format.
            </p>
          </div>
          <span className="text-xs font-semibold text-[#B9827B]">
            Deposit: $10 General / $20 Loan Closings
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* Card 1: In-Person */}
          <div className="bg-white rounded-2xl border border-[#F0ECED] p-6 flex flex-col justify-between hover:border-[#E8C9C5] transition-all shadow-2xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-xl bg-[#FAF8F9] flex items-center justify-center text-[#B9827B]">
                  <Building2 className="w-4 h-4" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FAF8F9] text-[#71717A]">
                  In Person
                </span>
              </div>
              <div>
                <h3 className="text-base font-bold text-[#18181B] font-heading">In-Person</h3>
                <p className="text-xs text-[#71717A]">Designated location in Wylie, TX 75098</p>
              </div>
              <div className="pt-2 border-t border-[#F0ECED]">
                <div className="text-2xl font-extrabold text-[#18181B]">$15</div>
                <div className="text-xs font-medium text-[#71717A]">In-Person Convenience Fee</div>
                <div className="text-[11px] text-[#B9827B] mt-1">+ applicable statutory notarial fees</div>
              </div>
              <div className="text-xs text-[#52525B] pt-2 border-t border-[#F0ECED] space-y-1">
                <p>• $10 booking deposit required</p>
                <p>• Deposit reserves appointment time</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F0ECED]">
              <button
                onClick={() => openBookingLink(CALENDLY_LINKS.inPerson)}
                className="w-full py-2.5 bg-[#B9827B] hover:bg-[#a56f68] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
              >
                Book In-Person
              </button>
            </div>
          </div>

          {/* Card 2: Mobile */}
          <div className="bg-white rounded-2xl border border-[#F0ECED] p-6 flex flex-col justify-between hover:border-[#E8C9C5] transition-all shadow-2xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-xl bg-[#FAF8F9] flex items-center justify-center text-[#B9827B]">
                  <Car className="w-4 h-4" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FAF8F9] text-[#71717A]">
                  Mobile Travel
                </span>
              </div>
              <div>
                <h3 className="text-base font-bold text-[#18181B] font-heading">Mobile</h3>
                <p className="text-xs text-[#71717A]">12-mile travel radius from Lavon, TX</p>
              </div>
              <div className="pt-2 border-t border-[#F0ECED]">
                <div className="text-2xl font-extrabold text-[#18181B]">$35</div>
                <div className="text-xs font-medium text-[#71717A]">Mobile Service Fee</div>
                <div className="text-[11px] text-[#B9827B] mt-1">+ applicable statutory notarial fees</div>
              </div>
              <div className="text-xs text-[#52525B] pt-2 border-t border-[#F0ECED] space-y-1">
                <p>• $10 booking deposit required</p>
                <p>• Travel directly to home, office, or facility</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F0ECED]">
              <button
                onClick={() => openBookingLink(CALENDLY_LINKS.mobile)}
                className="w-full py-2.5 bg-[#B9827B] hover:bg-[#a56f68] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
              >
                Book Mobile
              </button>
            </div>
          </div>

          {/* Card 3: RON Business Hours */}
          <div className="bg-white rounded-2xl border border-[#F0ECED] p-6 flex flex-col justify-between hover:border-[#E8C9C5] transition-all shadow-2xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-xl bg-[#FAF8F9] flex items-center justify-center text-[#B9827B]">
                  <Video className="w-4 h-4" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FAF8F9] text-[#71717A]">
                  Online (RON)
                </span>
              </div>
              <div>
                <h3 className="text-base font-bold text-[#18181B] font-heading">RON (Business Hours)</h3>
                <p className="text-xs text-[#71717A]">Mon–Fri: 10 AM–7 PM · Sat: 11 AM–1 PM</p>
              </div>
              <div className="pt-2 border-t border-[#F0ECED]">
                <div className="text-2xl font-extrabold text-[#18181B]">$25</div>
                <div className="text-xs font-medium text-[#71717A]">RON Service Fee</div>
                <div className="text-[11px] text-[#B9827B] mt-1">+ applicable statutory notarial fees</div>
              </div>
              <div className="text-xs text-[#52525B] pt-2 border-t border-[#F0ECED] space-y-1">
                <p className="font-semibold text-[#18181B]">• Remote Online Notarization is available anywhere in the U.S.</p>
                <p className="text-[#B9827B] font-medium">• No additional travel fee</p>
                <p>• $10 booking deposit required</p>
                <p>• Completed securely via BlueNotary</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F0ECED]">
              <button
                onClick={() => openBookingLink(CALENDLY_LINKS.ron)}
                className="w-full py-2.5 bg-[#B9827B] hover:bg-[#a56f68] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
              >
                Book Online (RON)
              </button>
            </div>
          </div>

          {/* Card 4: After-Hours RON */}
          <div className="bg-white rounded-2xl border border-[#F0ECED] p-6 flex flex-col justify-between hover:border-[#E8C9C5] transition-all shadow-2xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-xl bg-[#FAF8F9] flex items-center justify-center text-[#B9827B]">
                  <Clock className="w-4 h-4" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#18181B] text-white">
                  After-Hours
                </span>
              </div>
              <div>
                <h3 className="text-base font-bold text-[#18181B] font-heading">After-Hours RON</h3>
                <p className="text-xs text-[#71717A]">Evenings up to 10:00 PM &amp; Sundays</p>
              </div>
              <div className="pt-2 border-t border-[#F0ECED]">
                <div className="text-2xl font-extrabold text-[#18181B]">$25 + Fee</div>
                <div className="text-xs font-medium text-[#71717A]">$25 RON Service Fee + After-Hours Fee</div>
                <div className="text-[11px] text-[#B9827B] mt-1">+ applicable statutory notarial fees</div>
              </div>
              <div className="text-xs text-[#52525B] pt-2 border-t border-[#F0ECED] space-y-1">
                <p className="font-semibold text-[#18181B]">• Remote Online Notarization is available anywhere in the U.S.</p>
                <p className="text-[#B9827B] font-medium">• No additional travel fee</p>
                <p>• $10 booking deposit required</p>
                <p>• Completed securely via BlueNotary</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F0ECED]">
              <button
                onClick={() => openBookingLink(CALENDLY_LINKS.ronAfterHours)}
                className="w-full py-2.5 bg-[#18181B] hover:bg-[#27272A] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
              >
                Book After-Hours
              </button>
            </div>
          </div>

          {/* Card 5: Loan Closings / Large Packages */}
          <div className="bg-white rounded-2xl border border-[#F0ECED] p-6 flex flex-col justify-between hover:border-[#E8C9C5] transition-all shadow-2xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-xl bg-[#FAF8F9] flex items-center justify-center text-[#B9827B]">
                  <Briefcase className="w-4 h-4" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FAF8F9] text-[#71717A]">
                  Closings
                </span>
              </div>
              <div>
                <h3 className="text-base font-bold text-[#18181B] font-heading">Loan Closings / Large Packages</h3>
                <p className="text-xs text-[#71717A]">Title, escrow &amp; real estate signings</p>
              </div>
              <div className="pt-2 border-t border-[#F0ECED]">
                <div className="text-2xl font-extrabold text-[#18181B]">Starting at $50+</div>
                <div className="text-xs font-medium text-[#71717A]">Custom quote required</div>
                <div className="text-[11px] text-[#B9827B] mt-1">Based on package size &amp; requirements</div>
              </div>
              <div className="text-xs text-[#52525B] pt-2 border-t border-[#F0ECED] space-y-1">
                <p>• $20 booking deposit for loan closings</p>
                <p>• Printing, scanbacks &amp; drop-off available</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F0ECED]">
              <button
                onClick={onOpenQuote}
                className="w-full py-2.5 bg-[#18181B] hover:bg-[#27272A] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
              >
                Request a Quote
              </button>
            </div>
          </div>

          {/* Card 6: Document Printing & Pre-Appointment Uploads */}
          <div className="bg-white rounded-2xl border border-[#F0ECED] p-6 flex flex-col justify-between hover:border-[#E8C9C5] transition-all shadow-2xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-xl bg-[#FAF8F9] flex items-center justify-center text-[#B9827B]">
                  <Printer className="w-4 h-4" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FAF8F9] text-[#71717A]">
                  Add-On
                </span>
              </div>
              <div>
                <h3 className="text-base font-bold text-[#18181B] font-heading">Document Printing</h3>
                <p className="text-xs text-[#71717A]">Need to send documents before your appointment?</p>
              </div>
              <div className="pt-2 border-t border-[#F0ECED]">
                <div className="text-2xl font-extrabold text-[#18181B]">$1 <span className="text-xs font-normal text-[#71717A]">/ page</span></div>
                <div className="text-xs font-medium text-[#71717A]">For qualifying requests under 10 pages</div>
                <div className="text-[11px] text-[#52525B] mt-1.5 leading-relaxed">
                  Securely upload documents for appointment preparation, printing, or review of notarial requirements.
                </div>
              </div>
              <div className="text-xs text-[#52525B] pt-2 border-t border-[#F0ECED] space-y-1">
                <p>• Available upon advance request</p>
                <p>• Ready at appointment time</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F0ECED] space-y-2">
              <a
                href="https://www.dropbox.com/request/mkjmo10p6dtay97gtnbj"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-[#18181B] hover:bg-[#27272A] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-2xs flex items-center justify-center gap-2 text-center cursor-pointer"
              >
                <Upload className="w-4 h-4 text-[#B9827B]" />
                <span>Secure Document Upload</span>
              </a>
              <p className="text-[11px] text-[#71717A] text-center leading-tight">
                Optional - uploading documents is not required to book an appointment.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Texas Statutory Notarial Fees Section */}
      <div className="bg-[#FAF8F9] rounded-3xl border border-[#F0ECED] p-6 sm:p-8 space-y-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#B9827B]" />
            <h2 className="text-xl sm:text-2xl font-bold text-[#18181B] font-heading uppercase">
              Texas Statutory Notarial Fees
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#52525B]">
            Official notarial fees are governed by Texas Government Code Chapter 406 and are subject to applicable statutory limits.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div className="bg-white rounded-xl p-4 border border-[#F0ECED] space-y-1 shadow-2xs">
            <div className="flex justify-between items-center font-bold text-[#18181B]">
              <span>Acknowledgment / Proof (First Signature)</span>
              <span className="text-sm font-extrabold text-[#B9827B]">$10.00</span>
            </div>
            <p className="text-[#71717A] text-[11px]">Taking acknowledgment or proof of deed or instrument, including certificate and seal.</p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-[#F0ECED] space-y-1 shadow-2xs">
            <div className="flex justify-between items-center font-bold text-[#18181B]">
              <span>Additional Signatures (Same Document)</span>
              <span className="text-sm font-extrabold text-[#B9827B]">$1.00</span>
            </div>
            <p className="text-[#71717A] text-[11px]">Each additional signature on the same document / certificate.</p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-[#F0ECED] space-y-1 shadow-2xs">
            <div className="flex justify-between items-center font-bold text-[#18181B]">
              <span>Oath or Affirmation with Certificate</span>
              <span className="text-sm font-extrabold text-[#B9827B]">$10.00</span>
            </div>
            <p className="text-[#71717A] text-[11px]">Administering an oath or affirmation with certificate and seal.</p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-[#F0ECED] space-y-1 shadow-2xs">
            <div className="flex justify-between items-center font-bold text-[#18181B]">
              <span>Jurat with Certificate &amp; Seal</span>
              <span className="text-sm font-extrabold text-[#B9827B]">$10.00</span>
            </div>
            <p className="text-[#71717A] text-[11px]">Executing sworn jurat certificate upon oath verification.</p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-[#F0ECED] space-y-1 shadow-2xs">
            <div className="flex justify-between items-center font-bold text-[#18181B]">
              <span>Certified Copies (Non-Recordable)</span>
              <span className="text-sm font-extrabold text-[#B9827B]">$10.00</span>
            </div>
            <p className="text-[#71717A] text-[11px]">Certificate under seal certifying a copy of non-recordable document.</p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-[#F0ECED] space-y-1 shadow-2xs">
            <div className="flex justify-between items-center font-bold text-[#18181B]">
              <span>All Other Notarial Acts</span>
              <span className="text-sm font-extrabold text-[#B9827B]">Statutory</span>
            </div>
            <p className="text-[#71717A] text-[11px]">As established by Texas Government Code § 406.024.</p>
          </div>
        </div>
      </div>

      {/* Simple Fee Estimator */}
      <div className="bg-white rounded-3xl border border-[#F0ECED] p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-[#18181B] font-heading uppercase">
            Simple Fee Estimator
          </h2>
          <p className="text-xs sm:text-sm text-[#71717A]">
            Select your service type and estimated number of notarized signatures to view an estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls */}
          <div className="lg:col-span-7 space-y-5">
            {/* Service selector */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-[#18181B] uppercase tracking-wider">
                1. Select Service Format
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedService('in-person')}
                  className={`p-3 rounded-xl border text-left transition-all text-xs font-semibold ${
                    selectedService === 'in-person'
                      ? 'border-[#B9827B] bg-[#FAF8F9] text-[#18181B]'
                      : 'border-[#F0ECED] text-[#52525B] hover:border-[#E4E4E7]'
                  }`}
                >
                  <span className="block font-bold">In-Person Notary</span>
                  <span className="text-[11px] text-[#71717A]">$15 Convenience Fee</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedService('mobile')}
                  className={`p-3 rounded-xl border text-left transition-all text-xs font-semibold ${
                    selectedService === 'mobile'
                      ? 'border-[#B9827B] bg-[#FAF8F9] text-[#18181B]'
                      : 'border-[#F0ECED] text-[#52525B] hover:border-[#E4E4E7]'
                  }`}
                >
                  <span className="block font-bold">Mobile Notary</span>
                  <span className="text-[11px] text-[#71717A]">$35 Mobile Service Fee</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedService('ron')}
                  className={`p-3 rounded-xl border text-left transition-all text-xs font-semibold ${
                    selectedService === 'ron'
                      ? 'border-[#B9827B] bg-[#FAF8F9] text-[#18181B]'
                      : 'border-[#F0ECED] text-[#52525B] hover:border-[#E4E4E7]'
                  }`}
                >
                  <span className="block font-bold">Remote Online (RON)</span>
                  <span className="text-[11px] text-[#71717A]">$25 RON Service Fee</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedService('ron-after')}
                  className={`p-3 rounded-xl border text-left transition-all text-xs font-semibold ${
                    selectedService === 'ron-after'
                      ? 'border-[#B9827B] bg-[#FAF8F9] text-[#18181B]'
                      : 'border-[#F0ECED] text-[#52525B] hover:border-[#E4E4E7]'
                  }`}
                >
                  <span className="block font-bold">After-Hours RON</span>
                  <span className="text-[11px] text-[#71717A]">$25 RON + $25 Evening</span>
                </button>
              </div>
            </div>

            {/* Signature count selector */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="block text-xs font-bold text-[#18181B] uppercase tracking-wider">
                  2. Number of Notarized Signatures
                </label>
                <span className="text-xs font-bold text-[#B9827B]">
                  {signaturesCount} {signaturesCount === 1 ? 'Signature' : 'Signatures'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((cnt) => (
                  <button
                    key={cnt}
                    type="button"
                    onClick={() => setSignaturesCount(cnt)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                      signaturesCount === cnt
                        ? 'bg-[#18181B] text-white border-[#18181B]'
                        : 'bg-white text-[#52525B] border-[#F0ECED] hover:border-[#E4E4E7]'
                    }`}
                  >
                    {cnt}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-[#71717A] italic">
              Note: Loan closings and large packages require a custom quote starting at $50+.
            </p>
          </div>

          {/* Breakdown & Calculation */}
          <div className="lg:col-span-5 bg-[#FAF8F9] rounded-2xl p-5 border border-[#F0ECED] space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#18181B]">
              Estimated Invoice Summary
            </h3>

            <div className="space-y-2 text-xs text-[#52525B]">
              <div className="flex justify-between pb-1.5 border-b border-[#E4E4E7]">
                <span>Service Fee ({serviceFees[selectedService].name})</span>
                <span className="font-semibold text-[#18181B]">${currentServiceFee}.00</span>
              </div>

              <div className="flex justify-between pb-1.5 border-b border-[#E4E4E7]">
                <span>Statutory Notarial Fee ({signaturesCount} × $10)</span>
                <span className="font-semibold text-[#18181B]">${totalStatutoryFee}.00</span>
              </div>

              <div className="flex justify-between font-bold text-sm text-[#18181B] pt-1">
                <span>Estimated Total</span>
                <span>${estimatedTotal}.00</span>
              </div>

              <div className="flex justify-between text-xs text-[#B9827B] pt-1">
                <span>Booking Deposit (Reserves Time)</span>
                <span>-${currentDeposit}.00</span>
              </div>

              <div className="flex justify-between font-semibold text-xs text-[#18181B] pt-2 border-t border-[#E4E4E7]">
                <span>Estimated Balance Due at Service</span>
                <span>${estimatedBalance}.00</span>
              </div>
            </div>

            <button
              onClick={() => {
                const targetUrl = 
                  selectedService === 'in-person' ? CALENDLY_LINKS.inPerson :
                  selectedService === 'mobile' ? CALENDLY_LINKS.mobile :
                  selectedService === 'ron' ? CALENDLY_LINKS.ron :
                  CALENDLY_LINKS.ronAfterHours;
                openBookingLink(targetUrl);
              }}
              className="w-full py-3 bg-[#B9827B] hover:bg-[#a56f68] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-2xs cursor-pointer"
            >
              Book This Service
            </button>
          </div>

        </div>
      </div>

      {/* Policy Links Section */}
      <div className="border-t border-[#F0ECED] pt-10 space-y-4">
        <div className="text-center space-y-1">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#18181B] font-heading">
            Policies &amp; Service Terms
          </h3>
          <p className="text-xs text-[#71717A]">
            Review our detailed policies regarding appointments, deposits, cancellations, and privacy.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigateToTab('policies')}
            className="px-4 py-2 bg-white hover:bg-[#FAF8F9] text-[#18181B] border border-[#F0ECED] hover:border-[#B9827B] text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#B9827B]" />
            <span>Cancellation &amp; Refund Policy</span>
          </button>

          <button
            onClick={() => onNavigateToTab('policies')}
            className="px-4 py-2 bg-white hover:bg-[#FAF8F9] text-[#18181B] border border-[#F0ECED] hover:border-[#B9827B] text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-[#B9827B]" />
            <span>Terms &amp; Notary Service Policy</span>
          </button>

          <button
            onClick={() => onNavigateToTab('policies')}
            className="px-4 py-2 bg-white hover:bg-[#FAF8F9] text-[#18181B] border border-[#F0ECED] hover:border-[#B9827B] text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#B9827B]" />
            <span>Privacy Policy</span>
          </button>
        </div>
      </div>

    </div>
  );
};
