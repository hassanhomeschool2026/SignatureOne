import React from 'react';
import { 
  LOAN_SIGNING_DATA, 
  BRAND_INFO 
} from '../data/notaryData';
import { 
  FileText, 
  ShieldCheck, 
  Printer, 
  Truck, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Building, 
  DollarSign, 
  Phone, 
  Mail,
  Award,
  Sparkles,
  FileCheck2
} from 'lucide-react';

interface LoanSigningPageProps {
  onOpenQuote: () => void;
  onOpenBooking: (serviceTitle?: string, fee?: string, placeholder?: string) => void;
}

export const LoanSigningPage: React.FC<LoanSigningPageProps> = ({
  onOpenQuote,
  onOpenBooking,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8C9C5]/40 text-[#1E1B18] text-xs font-semibold uppercase tracking-wider font-heading">
          <Award className="w-3.5 h-3.5 text-[#B9827B]" />
          Certified Loan Signing Agent
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E1B18] tracking-tight font-heading">
          Loan Signing &amp; Real Estate Closings
        </h1>
        <p className="text-sm sm:text-base text-[#554E4A]">
          Flawless, punctual, and professional document execution for Title Companies, Escrow Officers, Lenders, Signing Services, and Borrowers across North Texas.
        </p>
      </div>

      {/* Hero Overview Box with Quote CTA */}
      <div className="rounded-3xl bg-white border border-[#D8CEC7] p-8 sm:p-10 shadow-sm relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B9827B]">
              Starting at $50.00 | Volume &amp; Distance Quotes Available
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1B18] font-heading">
              Dedicated Closing Partner for Title &amp; Escrow
            </h2>
            <p className="text-sm text-[#554E4A] leading-relaxed">
              We understand that an error on a Closing Disclosure, Notice of Right to Cancel, or Deed of Trust can delay funding. Our rigorous signing procedure guarantees complete, unmissed signatures, accurate initials, correct dates, and properly applied Texas notarial seals every time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E3D9CE]">
                <p className="text-xs font-bold text-[#1E1B18]">Dual-Tray Laser</p>
                <p className="text-[11px] text-[#786F6A]">Letter &amp; Legal size on demand</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E3D9CE]">
                <p className="text-xs font-bold text-[#1E1B18]">Fast Scanbacks</p>
                <p className="text-[11px] text-[#786F6A]">High-res PDF review right after signing</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E3D9CE]">
                <p className="text-xs font-bold text-[#1E1B18]">Daily Carrier Dropoff</p>
                <p className="text-[11px] text-[#786F6A]">FedEx &amp; UPS before last pickup</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#FAF7F2] p-6 rounded-2xl border border-[#E8C9C5] space-y-4 text-center">
            <h3 className="text-base font-bold text-[#1E1B18] font-heading">
              Have a Closing to Assign?
            </h3>
            <p className="text-xs text-[#554E4A]">
              Submit transaction details for an immediate, customized signing quote and scheduling confirmation.
            </p>
            <button
              onClick={onOpenQuote}
              className="w-full py-3 px-4 rounded-xl bg-[#1E1B18] hover:bg-[#35302C] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#E8C9C5]" />
              <span>Request Signing Quote</span>
            </button>
            <div className="pt-2 text-[11px] text-[#786F6A] flex flex-col gap-1">
              <span>Direct Dispatch: <strong className="text-[#1E1B18]">{BRAND_INFO.phone}</strong></span>
              <span>Email: <strong className="text-[#1E1B18]">{BRAND_INFO.email}</strong></span>
            </div>
          </div>

        </div>
      </div>

      {/* 4-Pillar Professional Workflow */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl font-bold text-[#1E1B18] font-heading">
            Our 4-Pillar Signing Protocol
          </h2>
          <p className="text-xs sm:text-sm text-[#554E4A]">
            Precision from initial document download through final delivery back to escrow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {LOAN_SIGNING_DATA.workflow.map((step, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-[#D8CEC7] p-6 space-y-3 relative hover:border-[#B9827B] transition-all">
              <span className="text-2xl font-extrabold text-[#E8C9C5] font-heading block">
                0{step.step}
              </span>
              <h3 className="text-base font-bold text-[#1E1B18] font-heading">
                {step.title}
              </h3>
              <p className="text-xs text-[#554E4A] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Closing Packages Handled */}
      <div className="bg-white rounded-3xl border border-[#D8CEC7] p-8 space-y-6">
        <div className="border-b border-[#FAF7F2] pb-4">
          <h2 className="text-2xl font-bold text-[#1E1B18] font-heading">
            Closing Transactions &amp; Packages Handled
          </h2>
          <p className="text-xs text-[#554E4A] mt-1">
            Experienced with all standard residential, commercial, and equity financing structures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {LOAN_SIGNING_DATA.packages.map((pkg, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E3D9CE] flex items-center gap-3">
              <FileCheck2 className="w-5 h-5 text-[#B9827B] shrink-0" />
              <span className="text-xs font-semibold text-[#1E1B18]">{pkg}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Qualifications & Equipment Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="bg-white rounded-2xl border border-[#D8CEC7] p-6 space-y-4">
          <h3 className="text-base font-bold text-[#1E1B18] font-heading flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#B9827B]" />
            <span>Credentials &amp; Security</span>
          </h3>
          <ul className="space-y-2 text-xs text-[#554E4A]">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B9827B] shrink-0" />
              <span>Texas Commissioned Notary Public &amp; RON Authorized</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B9827B] shrink-0" />
              <span>Annual Background Screening &amp; Verification</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B9827B] shrink-0" />
              <span>Comprehensive Errors &amp; Omissions (E&amp;O) Insured</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B9827B] shrink-0" />
              <span>Strict compliance with SPW Code of Conduct</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl border border-[#D8CEC7] p-6 space-y-4">
          <h3 className="text-base font-bold text-[#1E1B18] font-heading flex items-center gap-2">
            <Printer className="w-5 h-5 text-[#B9827B]" />
            <span>Mobile &amp; Office Capabilities</span>
          </h3>
          <ul className="space-y-2 text-xs text-[#554E4A]">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B9827B] shrink-0" />
              <span>Commercial Dual-Tray Laser Printing (Letter &amp; Legal)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B9827B] shrink-0" />
              <span>High-speed portable document scanner for mobile scanbacks</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B9827B] shrink-0" />
              <span>Secure, encrypted email &amp; portal upload capabilities</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B9827B] shrink-0" />
              <span>Strict appointment punctuality with real-time ETA updates</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Action Footer Banner */}
      <div className="rounded-3xl bg-[#FAF7F2] border border-[#E8C9C5] p-8 text-center space-y-4">
        <h3 className="text-xl font-bold text-[#1E1B18] font-heading">
          Ready to Schedule a Smooth Closing?
        </h3>
        <p className="text-xs sm:text-sm text-[#554E4A] max-w-xl mx-auto">
          Contact us today for immediate assignment confirmation or request a customized closing quote.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onOpenQuote}
            className="py-3 px-6 rounded-xl bg-[#1E1B18] hover:bg-[#35302C] text-white text-xs font-semibold uppercase tracking-wider transition-all"
          >
            Request Signing Quote
          </button>
          <a
            href={`tel:${BRAND_INFO.phone}`}
            className="py-3 px-6 rounded-xl bg-white border border-[#D8CEC7] hover:border-[#B9827B] text-[#1E1B18] text-xs font-semibold transition-all flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#B9827B]" />
            <span>Call {BRAND_INFO.phone}</span>
          </a>
        </div>
      </div>

    </div>
  );
};
