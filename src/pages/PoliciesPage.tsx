import React from 'react';
import { 
  POLICY_TERMS, 
  OPERATING_HOURS, 
  BRAND_INFO,
  PRICING_DATA
} from '../data/notaryData';
import { 
  ShieldAlert, 
  Clock, 
  CreditCard, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Calendar, 
  Phone,
  Info,
  ShieldCheck,
  Mail
} from 'lucide-react';

interface PoliciesPageProps {
  onOpenBooking: (serviceTitle?: string, fee?: string, placeholder?: string) => void;
}

export const PoliciesPage: React.FC<PoliciesPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-16">
      
      {/* PAGE HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E1B18] tracking-tight font-heading uppercase">
          Policies &amp; Service Terms
        </h1>
        <p className="text-sm sm:text-base text-[#554E4A] leading-relaxed">
          Clear, transparent policies regarding booking deposits, cancellations, refunds, notary service terms, and privacy.
        </p>
      </div>

      {/* QUICK JUMP NAVIGATION */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a 
          href="#cancellation-policy" 
          className="px-4 py-2 bg-[#FAF6F5] hover:bg-[#F0EAE6] border border-[#F0EAE6] text-xs font-bold text-[#1E1B18] rounded-xl transition-all"
        >
          Cancellation &amp; Refund Policy
        </a>
        <a 
          href="#terms-policy" 
          className="px-4 py-2 bg-[#FAF6F5] hover:bg-[#F0EAE6] border border-[#F0EAE6] text-xs font-bold text-[#1E1B18] rounded-xl transition-all"
        >
          Terms &amp; Notary Service Policy
        </a>
        <a 
          href="#fee-terms" 
          className="px-4 py-2 bg-[#FAF6F5] hover:bg-[#F0EAE6] border border-[#F0EAE6] text-xs font-bold text-[#1E1B18] rounded-xl transition-all"
        >
          Fee Structure &amp; Deposits
        </a>
        <a 
          href="#privacy-policy" 
          className="px-4 py-2 bg-[#FAF6F5] hover:bg-[#F0EAE6] border border-[#F0EAE6] text-xs font-bold text-[#1E1B18] rounded-xl transition-all"
        >
          Privacy Policy
        </a>
      </div>

      {/* SECTION 1: CANCELLATION & REFUND / BOOKING POLICY */}
      <div id="cancellation-policy" className="bg-white rounded-3xl border border-[#F0EAE6] p-6 sm:p-8 space-y-6 shadow-xs scroll-mt-24">
        <div className="flex items-center gap-3 border-b border-[#F0EAE6] pb-4">
          <span className="w-10 h-10 rounded-xl bg-[#FAF6F5] flex items-center justify-center text-[#B9827B]">
            <ShieldCheck className="w-5 h-5" />
          </span>
          <div>
            <h2 className="text-xl font-bold text-[#1E1B18] font-heading uppercase">
              Cancellation &amp; Refund Policy
            </h2>
            <p className="text-xs text-[#786F6A]">
              Standard booking deposit, cancellation timelines, and error correction procedures.
            </p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#554E4A] leading-relaxed">
          <div className="bg-[#FAF6F5] rounded-2xl p-5 border border-[#F0EAE6] space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1E1B18]">
              Booking Deposits &amp; Cancellation
            </h3>
            <p>
              A booking deposit is required for certain appointments to reserve the requested appointment time.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-semibold text-xs text-[#1E1B18]">
              <div className="p-2.5 rounded-lg bg-white border border-[#F0EAE6]">
                General Notary Services: <strong className="text-[#B9827B]">$10 Deposit</strong>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-[#F0EAE6]">
                Loan Closings / Large Package: <strong className="text-[#B9827B]">$20 Deposit</strong>
              </div>
            </div>
            <p className="text-xs text-[#786F6A] pt-1">
              The applicable deposit is disclosed during the booking process and is applied according to the terms presented at the time of booking.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <div>
              <h4 className="font-bold text-[#1E1B18] uppercase text-xs tracking-wider">
                Cancellation 48 Hours or More Before the Appointment
              </h4>
              <p className="text-xs text-[#554E4A] mt-1">
                When a customer cancels at least 48 hours before the scheduled appointment, the customer may be eligible for the cancellation accommodation stated during booking, subject to the applicable service terms.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#1E1B18] uppercase text-xs tracking-wider">
                Cancellation Less Than 48 Hours Before the Appointment
              </h4>
              <p className="text-xs text-[#554E4A] mt-1">
                Cancellations made less than 48 hours before the appointment may result in forfeiture of the booking deposit and/or other applicable charges associated with the reserved appointment.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#1E1B18] uppercase text-xs tracking-wider">
                No-Shows
              </h4>
              <p className="text-xs text-[#554E4A] mt-1">
                Failure to appear or be available for a scheduled appointment may be treated as a no-show and may result in forfeiture of the booking deposit and/or applicable service charges.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#1E1B18] uppercase text-xs tracking-wider">
                Completed Services &amp; Service Correction
              </h4>
              <p className="text-xs text-[#554E4A] mt-1">
                Once a notarial or other paid service has been completed, service fees are non-refundable.
              </p>
              <div className="mt-2 p-3.5 bg-[#FAF6F5] rounded-xl border border-[#F0EAE6] text-xs text-[#554E4A] space-y-1">
                <p>
                  If SignatureOne Notary made an error in performing the service, customers should contact:
                </p>
                <a href="mailto:info@sonotary.com" className="font-bold text-[#B9827B] hover:underline block">
                  info@sonotary.com
                </a>
                <p className="text-[#786F6A]">
                  When the issue is reasonably within SignatureOne's responsibility and can legally be corrected, SignatureOne will make reasonable efforts to correct its error at no additional service charge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: TERMS & NOTARY SERVICE POLICY */}
      <div id="terms-policy" className="bg-white rounded-3xl border border-[#F0EAE6] p-6 sm:p-8 space-y-6 shadow-xs scroll-mt-24">
        <div className="flex items-center gap-3 border-b border-[#F0EAE6] pb-4">
          <span className="w-10 h-10 rounded-xl bg-[#FAF6F5] flex items-center justify-center text-[#B9827B]">
            <FileText className="w-5 h-5" />
          </span>
          <div>
            <h2 className="text-xl font-bold text-[#1E1B18] font-heading uppercase">
              Terms &amp; Notary Service Policy
            </h2>
            <p className="text-xs text-[#786F6A]">
              Scope of authority, non-legal status, signer responsibilities, and statutory limits.
            </p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#554E4A] leading-relaxed">
          <div className="p-4 rounded-xl bg-[#FAF6F5] border border-[#F0EAE6] text-xs space-y-2">
            <h3 className="font-bold text-[#1E1B18] uppercase tracking-wider text-[11px]">
              Non-Attorney Legal Disclaimer
            </h3>
            <p>
              SignatureOne Notary provides notarial services, not legal services. SignatureOne Notary is not a law firm and its notaries are not attorneys licensed to practice law in Texas.
            </p>
            <p>
              SignatureOne does not provide legal advice, legal opinions, financial or tax advice, and does not interpret the legal meaning, validity, or legal effect of any document.
            </p>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <h4 className="font-bold text-[#1E1B18] uppercase tracking-wider">
                Signer Understanding &amp; Responsibility
              </h4>
              <p className="text-[#554E4A] mt-1">
                Signers are solely responsible for reading, reviewing, and understanding all documents prior to signing. The notary may identify documents or explain the general signing procedure, but will not explain legal implications or advise on terms.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#1E1B18] uppercase tracking-wider">
                Loan &amp; Closing Document Questions
              </h4>
              <p className="text-[#554E4A] mt-1">
                All questions regarding interest rates, closing costs, monthly payments, payoff amounts, escrow, title requirements, or contractual terms must be directed to your lender, title company, escrow officer, or attorney.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#1E1B18] uppercase tracking-wider">
                Right of Refusal
              </h4>
              <p className="text-[#554E4A] mt-1">
                In accordance with Texas law and notarial rules of ethics, the notary may refuse to perform a notarial act if a signer cannot present valid unexpired government identification, appears confused or coerced, is unwilling, or if the notarization would violate state law.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#1E1B18] uppercase tracking-wider">
                No Guarantee of Transaction Funding
              </h4>
              <p className="text-[#554E4A] mt-1">
                SignatureOne Notary facilitates document execution and notarization as an independent contractor and does not guarantee that a loan, purchase, deed, or transaction will close, fund, or be accepted by third parties.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: FEE STRUCTURE & PRICING TERMS */}
      <div id="fee-terms" className="bg-white rounded-3xl border border-[#F0EAE6] p-6 sm:p-8 space-y-6 shadow-xs scroll-mt-24">
        <div className="flex items-center gap-3 border-b border-[#F0EAE6] pb-4">
          <span className="w-10 h-10 rounded-xl bg-[#FAF6F5] flex items-center justify-center text-[#B9827B]">
            <CreditCard className="w-5 h-5" />
          </span>
          <div>
            <h2 className="text-xl font-bold text-[#1E1B18] font-heading uppercase">
              Fee Structure &amp; Pricing Terms
            </h2>
            <p className="text-xs text-[#786F6A]">
              Separation of statutory Texas notarial fees and SignatureOne business service fees.
            </p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#554E4A] leading-relaxed">
          <p>
            <strong className="text-[#1E1B18]">Separation of Fees:</strong> Business service fees are separate from statutory notarial fees. Official notarial fees are governed by Texas Government Code Chapter 406. Mobile travel, convenience, RON technology/platform services, after-hours availability, printing, package handling, scanbacks, drop-off, etc. are business/service charges and are not charges for performing the official notarial act itself.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs pt-1">
            <div className="p-3 rounded-xl bg-[#FAF6F5] border border-[#F0EAE6]">
              <span className="font-bold text-[#1E1B18] block">In-Person Convenience Fee</span>
              <span className="text-[#B9827B] font-extrabold text-sm">$15.00</span>
              <span className="text-[11px] text-[#786F6A] block mt-0.5">+ statutory fees · Wylie meeting</span>
            </div>

            <div className="p-3 rounded-xl bg-[#FAF6F5] border border-[#F0EAE6]">
              <span className="font-bold text-[#1E1B18] block">Mobile Service Fee</span>
              <span className="text-[#B9827B] font-extrabold text-sm">$35.00</span>
              <span className="text-[11px] text-[#786F6A] block mt-0.5">+ statutory fees · Up to 12 miles</span>
            </div>

            <div className="p-3 rounded-xl bg-[#FAF6F5] border border-[#F0EAE6]">
              <span className="font-bold text-[#1E1B18] block">RON Service Fee</span>
              <span className="text-[#B9827B] font-extrabold text-sm">$25.00</span>
              <span className="text-[11px] text-[#786F6A] block mt-0.5">+ statutory fees · Business hours</span>
            </div>

            <div className="p-3 rounded-xl bg-[#FAF6F5] border border-[#F0EAE6]">
              <span className="font-bold text-[#1E1B18] block">After-Hours RON Fee</span>
              <span className="text-[#B9827B] font-extrabold text-sm">$25.00 + After-Hours Fee</span>
              <span className="text-[11px] text-[#786F6A] block mt-0.5">+ statutory fees · Evenings &amp; Sun</span>
            </div>

            <div className="p-3 rounded-xl bg-[#FAF6F5] border border-[#F0EAE6]">
              <span className="font-bold text-[#1E1B18] block">Loan Closings / Large Packages</span>
              <span className="text-[#B9827B] font-extrabold text-sm">Starting at $50+</span>
              <span className="text-[11px] text-[#786F6A] block mt-0.5">Custom quote required</span>
            </div>

            <div className="p-3 rounded-xl bg-[#FAF6F5] border border-[#F0EAE6]">
              <span className="font-bold text-[#1E1B18] block">Document Printing</span>
              <span className="text-[#B9827B] font-extrabold text-sm">$1.00 / page</span>
              <span className="text-[11px] text-[#786F6A] block mt-0.5">Under 10 pages · upload@sonotary.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4: PRIVACY POLICY */}
      <div id="privacy-policy" className="bg-white rounded-3xl border border-[#F0EAE6] p-6 sm:p-8 space-y-6 shadow-xs scroll-mt-24">
        <div className="flex items-center gap-3 border-b border-[#F0EAE6] pb-4">
          <span className="w-10 h-10 rounded-xl bg-[#FAF6F5] flex items-center justify-center text-[#B9827B]">
            <ShieldAlert className="w-5 h-5" />
          </span>
          <div>
            <h2 className="text-xl font-bold text-[#1E1B18] font-heading uppercase">
              Privacy Policy
            </h2>
            <p className="text-xs text-[#786F6A]">
              How SignatureOne handles, protects, and retains customer information and notarial records.
            </p>
          </div>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-[#554E4A] leading-relaxed">
          <p>
            SignatureOne Notary respects your privacy and is committed to protecting your personal information. Information collected during scheduling (such as name, phone number, email address, and service location) is used solely for appointment coordination, customer service, and transaction billing.
          </p>
          <p>
            <strong className="text-[#1E1B18]">Notarial Recordkeeping:</strong> Texas Government Code mandates that notaries maintain an official record book containing specific details of each notarial act performed. These records are maintained in strict accordance with Texas laws and regulations.
          </p>
          <p>
            <strong className="text-[#1E1B18]">Non-Disclosure:</strong> We never sell, rent, or lease client personal information to third parties. Information may only be disclosed when required by Texas law, subpoena, or authorized regulatory authorities.
          </p>
          <p>
            For privacy-related inquiries, contact our compliance team at: <a href="mailto:legal@sonotary.com" className="font-bold text-[#B9827B] hover:underline">legal@sonotary.com</a>.
          </p>
        </div>
      </div>

    </div>
  );
};
