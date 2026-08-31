import React from 'react';
import { 
  BRAND_INFO,
  LOAN_SIGNING_DATA 
} from '../data/notaryData';
import { CALENDLY_LINKS, openBookingLink } from '../config/booking';
import { 
  Phone, 
  CheckCircle2, 
  ShieldAlert, 
  FileText,
  Calendar
} from 'lucide-react';

interface LoanSigningPageProps {
  onOpenQuote: () => void;
  onOpenBooking: (serviceTitle?: string, fee?: string, placeholder?: string) => void;
}

export const LoanSigningPage: React.FC<LoanSigningPageProps> = ({
  onOpenQuote,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-16">
      
      {/* PAGE HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E1B18] tracking-tight font-heading uppercase">
          Loan Signings &amp; Closings
        </h1>
        <p className="text-sm sm:text-base text-[#554E4A] leading-relaxed">
          Professional signing support for title companies, lenders, signing services, escrow, and private clients.
        </p>
      </div>

      {/* PRICE & TOP CALL-TO-ACTION CARD */}
      <div className="bg-white rounded-3xl border border-[#F0EAE6] p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FAF6F5] text-[#786F6A]">
                Title &amp; Escrow Services
              </span>
              <span className="text-[10px] font-semibold text-[#B9827B]">
                $20 Booking Deposit
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#1E1B18] font-heading">
              Starting at $50+
            </div>
            <p className="text-xs text-[#786F6A]">
              Custom quote recommended based on package size, scanback needs, and scheduling requirements.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onOpenQuote}
              className="px-6 py-3 bg-[#1E1B18] hover:bg-[#35302C] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-2xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Request a Quote</span>
            </button>
            <a
              href={BRAND_INFO.phoneTel}
              className="px-6 py-3 bg-[#FAF6F5] hover:bg-[#F0EAE6] text-[#1E1B18] border border-[#F0EAE6] hover:border-[#B9827B] text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#B9827B]" />
              <span>Call (972) 853-1513</span>
            </a>
          </div>
        </div>

        {/* Direct Booking Options */}
        <div className="mt-8 pt-6 border-t border-[#F0EAE6] grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={() => openBookingLink(CALENDLY_LINKS.loanClosing)}
            className="flex items-center justify-between p-3.5 rounded-xl border border-[#F0EAE6] hover:border-[#B9827B] hover:bg-[#FAF6F5] text-left transition-all group cursor-pointer"
          >
            <div>
              <div className="text-xs font-bold text-[#1E1B18] group-hover:text-[#B9827B] transition-colors">
                Book Loan Closing / Large Package
              </div>
              <div className="text-[11px] text-[#786F6A]">Regular hours assignment via Calendly</div>
            </div>
            <Calendar className="w-4 h-4 text-[#B9827B] shrink-0" />
          </button>

          <button
            onClick={() => openBookingLink(CALENDLY_LINKS.loanClosingAfterHours)}
            className="flex items-center justify-between p-3.5 rounded-xl border border-[#F0EAE6] hover:border-[#B9827B] hover:bg-[#FAF6F5] text-left transition-all group cursor-pointer"
          >
            <div>
              <div className="text-xs font-bold text-[#1E1B18] group-hover:text-[#B9827B] transition-colors">
                Book After-Hours Loan Closing
              </div>
              <div className="text-[11px] text-[#786F6A]">Evening &amp; weekend closing assignment</div>
            </div>
            <Calendar className="w-4 h-4 text-[#B9827B] shrink-0" />
          </button>
        </div>
      </div>

      {/* SERVICES AVAILABLE GRID / CHECKLIST */}
      <div className="space-y-6">
        <div className="border-b border-[#F0EAE6] pb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1E1B18] font-heading uppercase">
            Services Available
          </h2>
          <p className="text-xs text-[#786F6A]">
            Comprehensive signing support tailored to title companies, escrow officers, and lenders.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {LOAN_SIGNING_DATA.packages.map((serviceName, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl border border-[#F0EAE6] p-4 flex items-center gap-3 hover:border-[#E8C9C5] transition-all"
            >
              <CheckCircle2 className="w-4 h-4 text-[#B9827B] shrink-0" />
              <span className="text-xs font-semibold text-[#1E1B18]">{serviceName}</span>
            </div>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS (VERY SIMPLE WORKFLOW) */}
      <div className="bg-[#FAF6F5] rounded-3xl border border-[#F0EAE6] p-6 sm:p-8 space-y-6">
        <div className="space-y-1 text-center max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1E1B18] font-heading uppercase">
            Closing Workflow
          </h2>
          <p className="text-xs text-[#786F6A]">
            A simple, reliable execution workflow from assignment to return.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {LOAN_SIGNING_DATA.workflow.map((w) => (
            <div key={w.step} className="bg-white rounded-2xl p-5 border border-[#F0EAE6] space-y-2">
              <div className="w-7 h-7 rounded-full bg-[#1E1B18] text-white text-xs font-bold flex items-center justify-center">
                {w.step}
              </div>
              <h3 className="text-xs font-bold text-[#1E1B18] font-heading uppercase">
                {w.title}
              </h3>
              <p className="text-[11px] text-[#554E4A] leading-relaxed">
                {w.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CRITICAL SIGNER DISCLAIMER */}
      <div className="bg-white rounded-3xl border border-[#F0EAE6] p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-[#B9827B] shrink-0" />
          <h2 className="text-base sm:text-lg font-bold text-[#1E1B18] font-heading uppercase">
            Important Signer &amp; Closing Notice
          </h2>
        </div>

        <div className="space-y-3 text-xs text-[#554E4A] leading-relaxed bg-[#FAF6F5] rounded-2xl p-5 border border-[#F0EAE6]">
          <p>
            <strong className="text-[#1E1B18]">Authorized Notarial Scope:</strong> SignatureOne Notary facilitates the signing and performs authorized notarial acts. We are not attorneys and cannot interpret the legal or financial meaning of your loan documents.
          </p>
          <p>
            <strong className="text-[#1E1B18]">Loan &amp; Financial Inquiries:</strong> For questions about your loan terms, closing disclosure, fees, interest rate, payment, escrow, title, or other contractual terms, contact your lender, title company, escrow company, or attorney.
          </p>
        </div>
      </div>

    </div>
  );
};
