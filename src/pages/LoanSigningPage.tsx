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
  Calendar,
  Upload
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
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight font-heading uppercase">
          Loan Signings &amp; Closings
        </h1>
        <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
          Professional signing support for title companies, lenders, signing services, escrow, and private clients.
        </p>
      </div>

      {/* PRICE & TOP CALL-TO-ACTION CARD */}
      <div className="bg-white rounded-3xl border border-[#F0ECED] p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FAF8F9] text-[#71717A]">
                Title &amp; Escrow Services
              </span>
              <span className="text-[10px] font-semibold text-[#B9827B]">
                $20 Booking Deposit
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#18181B] font-heading">
              Starting at $50+
            </div>
            <p className="text-xs text-[#71717A]">
              Custom quote recommended based on package size, scanback needs, and scheduling requirements.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onOpenQuote}
              className="px-6 py-3 bg-[#18181B] hover:bg-[#27272A] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-2xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Request a Quote</span>
            </button>
            <a
              href={BRAND_INFO.phoneTel}
              className="px-6 py-3 bg-[#FAF8F9] hover:bg-[#F0ECED] text-[#18181B] border border-[#F0ECED] hover:border-[#B9827B] text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#B9827B]" />
              <span>Call (972) 853-1513</span>
            </a>
          </div>
        </div>

        {/* Direct Booking Options */}
        <div className="mt-8 pt-6 border-t border-[#F0ECED] grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={() => openBookingLink(CALENDLY_LINKS.loanClosing)}
            className="flex items-center justify-between p-3.5 rounded-xl border border-[#F0ECED] hover:border-[#B9827B] hover:bg-[#FAF8F9] text-left transition-all group cursor-pointer"
          >
            <div>
              <div className="text-xs font-bold text-[#18181B] group-hover:text-[#B9827B] transition-colors">
                Book Loan Closing / Large Package
              </div>
              <div className="text-[11px] text-[#71717A]">Regular hours assignment via Calendly</div>
            </div>
            <Calendar className="w-4 h-4 text-[#B9827B] shrink-0" />
          </button>

          <button
            onClick={() => openBookingLink(CALENDLY_LINKS.loanClosingAfterHours)}
            className="flex items-center justify-between p-3.5 rounded-xl border border-[#F0ECED] hover:border-[#B9827B] hover:bg-[#FAF8F9] text-left transition-all group cursor-pointer"
          >
            <div>
              <div className="text-xs font-bold text-[#18181B] group-hover:text-[#B9827B] transition-colors">
                Book After-Hours Loan Closing
              </div>
              <div className="text-[11px] text-[#71717A]">Evening &amp; weekend closing assignment</div>
            </div>
            <Calendar className="w-4 h-4 text-[#B9827B] shrink-0" />
          </button>
        </div>

        {/* Secure Document Upload Section */}
        <div className="mt-6 pt-6 border-t border-[#F0ECED] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FAF8F9] rounded-2xl p-5 border border-[#F0ECED]">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-[#18181B] font-heading uppercase">
              Need Help With Your Signing Package?
            </h3>
            <p className="text-xs text-[#52525B] leading-relaxed max-w-xl">
              If you're requesting a quote or aren't sure about the number of signers, notarizations, page count, or other signing requirements, you may securely upload your documents for review.
            </p>
          </div>
          <div className="flex flex-col items-center sm:items-end gap-1.5 shrink-0">
            <a
              href="https://www.dropbox.com/request/mkjmo10p6dtay97gtnbj"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 bg-[#18181B] hover:bg-[#27272A] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-2xs flex items-center justify-center gap-2 shrink-0 cursor-pointer"
            >
              <Upload className="w-4 h-4 text-[#B9827B]" />
              <span>Secure Document Upload</span>
            </a>
            <span className="text-[11px] text-[#71717A] text-center sm:text-right">
              Optional - uploading documents is not required to book an appointment.
            </span>
          </div>
        </div>
      </div>

      {/* SERVICES AVAILABLE GRID / CHECKLIST */}
      <div className="space-y-6">
        <div className="border-b border-[#F0ECED] pb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#18181B] font-heading uppercase">
            Services Available
          </h2>
          <p className="text-xs text-[#71717A]">
            Comprehensive signing support tailored to title companies, escrow officers, and lenders.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {LOAN_SIGNING_DATA.packages.map((serviceName, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl border border-[#F0ECED] p-4 flex items-center gap-3 hover:border-[#E8C9C5] transition-all shadow-2xs"
            >
              <CheckCircle2 className="w-4 h-4 text-[#B9827B] shrink-0" />
              <span className="text-xs font-semibold text-[#18181B]">{serviceName}</span>
            </div>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS (VERY SIMPLE WORKFLOW) */}
      <div className="bg-[#FAF8F9] rounded-3xl border border-[#F0ECED] p-6 sm:p-8 space-y-6">
        <div className="space-y-1 text-center max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-[#18181B] font-heading uppercase">
            Closing Workflow
          </h2>
          <p className="text-xs text-[#71717A]">
            A simple, reliable execution workflow from assignment to return.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {LOAN_SIGNING_DATA.workflow.map((w) => (
            <div key={w.step} className="bg-white rounded-2xl p-5 border border-[#F0ECED] space-y-2 shadow-2xs">
              <div className="w-7 h-7 rounded-full bg-[#18181B] text-white text-xs font-bold flex items-center justify-center">
                {w.step}
              </div>
              <h3 className="text-xs font-bold text-[#18181B] font-heading uppercase">
                {w.title}
              </h3>
              <p className="text-[11px] text-[#52525B] leading-relaxed">
                {w.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CRITICAL SIGNER DISCLAIMER */}
      <div className="bg-white rounded-3xl border border-[#F0ECED] p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-[#B9827B] shrink-0" />
          <h2 className="text-base sm:text-lg font-bold text-[#18181B] font-heading uppercase">
            Important Signer &amp; Closing Notice
          </h2>
        </div>

        <div className="space-y-3 text-xs text-[#52525B] leading-relaxed bg-[#FAF8F9] rounded-2xl p-5 border border-[#F0ECED]">
          <p>
            <strong className="text-[#18181B]">Authorized Notarial Scope:</strong> SignatureOne Notary facilitates the signing and performs authorized notarial acts. We are not attorneys and cannot interpret the legal or financial meaning of your loan documents.
          </p>
          <p>
            <strong className="text-[#18181B]">Loan &amp; Financial Inquiries:</strong> For questions about your loan terms, closing disclosure, fees, interest rate, payment, escrow, title, or other contractual terms, contact your lender, title company, escrow company, or attorney.
          </p>
        </div>
      </div>

    </div>
  );
};
