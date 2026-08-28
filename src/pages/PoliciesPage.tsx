import React from 'react';
import { 
  POLICY_TERMS, 
  OPERATING_HOURS, 
  BRAND_INFO 
} from '../data/notaryData';
import { 
  ShieldAlert, 
  Clock, 
  CreditCard, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Calendar, 
  Phone,
  Info,
  DollarSign
} from 'lucide-react';

interface PoliciesPageProps {
  onOpenBooking: (serviceTitle?: string, fee?: string, placeholder?: string) => void;
}

export const PoliciesPage: React.FC<PoliciesPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8C9C5]/40 text-[#1E1B18] text-xs font-semibold uppercase tracking-wider font-heading">
          <ShieldAlert className="w-3.5 h-3.5 text-[#B9827B]" />
          Transparency &amp; Trust
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E1B18] tracking-tight font-heading">
          Appointment, Deposit &amp; Cancellation Policies
        </h1>
        <p className="text-sm sm:text-base text-[#554E4A]">
          Clear, professional guidelines to guarantee dedicated appointment time slots and reliable service for every client.
        </p>
      </div>

      {/* Strict Appointment-Only & Operating Hours Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Strict Appointment-Only Rule */}
        <div className="lg:col-span-6 bg-white rounded-3xl border border-[#D8CEC7] p-8 space-y-5">
          <div className="flex items-center gap-3">
            <span className="p-3 rounded-2xl bg-[#FAF7F2] text-[#B9827B] border border-[#E3D9CE]">
              <Clock className="w-6 h-6" />
            </span>
            <div>
              <h2 className="text-xl font-bold text-[#1E1B18] font-heading">
                Strictly By Appointment Only
              </h2>
              <p className="text-xs text-[#B9827B] font-semibold uppercase tracking-wider">
                No Walk-In Service Available
              </p>
            </div>
          </div>

          <p className="text-sm text-[#554E4A] leading-relaxed">
            SignatureOne operates on a dedicated reservation schedule to ensure each client receives unhurried, attentive service. Whether meeting in Lavon, traveling to your location, or connecting online, all sessions must be booked in advance.
          </p>

          <div className="space-y-2 pt-2 border-t border-[#FAF7F2] text-xs text-[#554E4A]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B9827B] shrink-0" />
              <span>Guaranteed dedicated start time for your appointment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B9827B] shrink-0" />
              <span>Zero waiting rooms or public lobby lines</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B9827B] shrink-0" />
              <span>Same-day appointments available when booked ahead</span>
            </div>
          </div>
        </div>

        {/* Operating Hours Table */}
        <div className="lg:col-span-6 bg-[#FAF7F2] rounded-3xl border border-[#E8C9C5] p-8 space-y-4">
          <h2 className="text-xl font-bold text-[#1E1B18] font-heading flex items-center justify-between">
            <span>Operating Hours</span>
            <span className="text-xs font-normal text-[#786F6A] font-sans">Central Time (CT)</span>
          </h2>
          <div className="space-y-2.5 text-xs sm:text-sm">
            {OPERATING_HOURS.map((sched, idx) => (
              <div key={idx} className="flex justify-between items-center py-1.5 border-b border-[#E3D9CE]/60">
                <span className="font-semibold text-[#1E1B18]">{sched.days}</span>
                <span className="text-[#554E4A]">{sched.hours}</span>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-[#786F6A] pt-2">
            * Remote Online Notarization (RON) evening appointments are available 7 days a week until 9:00 PM CT by advance booking.
          </p>
        </div>

      </div>

      {/* Deposit & 48-Hour Cancellation Policy Section */}
      <div className="bg-white rounded-3xl border-2 border-[#B9827B]/50 p-8 sm:p-10 space-y-8 shadow-sm">
        
        <div className="space-y-2 border-b border-[#EAE2D8] pb-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#B9827B] uppercase tracking-wider">
            <DollarSign className="w-4 h-4" />
            <span>Deposit &amp; Cancellation Agreement</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E1B18] font-heading">
            $10 Booking Deposit &amp; 48-Hour Policy
          </h2>
          <p className="text-xs sm:text-sm text-[#554E4A]">
            Please review our straightforward booking and cancellation terms prior to scheduling your appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {POLICY_TERMS.map((term, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E3D9CE] space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-[#1E1B18] font-heading flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B9827B] shrink-0" />
                  <span>{term.title}</span>
                </h3>
                <p className="text-xs text-[#554E4A] leading-relaxed">
                  {term.detail}
                </p>
              </div>
              <div className="pt-2 border-t border-[#E3D9CE]/60 text-[11px] font-semibold text-[#B9827B]">
                {term.emphasis}
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Policy Notes */}
        <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8C9C5] space-y-3">
          <h3 className="text-sm font-bold text-[#1E1B18] font-heading flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-[#B9827B]" />
            <span>Rescheduling &amp; No-Show Policy</span>
          </h3>
          <p className="text-xs text-[#554E4A] leading-relaxed">
            Need to change your appointment date or time? We offer <strong>1 complimentary reschedule</strong> when notice is provided at least <strong>24 hours in advance</strong>. Your $10 deposit automatically transfers to your new date. Appointments cancelled with less than 48 hours notice or missed appointments (no-shows) forfeit the $10 deposit to cover the reserved calendar block.
          </p>
        </div>

      </div>

      {/* Payment Methods & Receipts */}
      <div className="bg-white rounded-3xl border border-[#D8CEC7] p-8 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-[#1E1B18] font-heading flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-[#B9827B]" />
            <span>Accepted Payment Methods</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#554E4A]">
            The remaining balance is due upon completion of the notarial act. An itemized invoice and formal receipt are provided immediately.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E3D9CE] text-center space-y-1">
            <p className="text-sm font-bold text-[#1E1B18]">Cash</p>
            <p className="text-[11px] text-[#786F6A]">Exact change preferred</p>
          </div>
          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E3D9CE] text-center space-y-1">
            <p className="text-sm font-bold text-[#1E1B18]">Zelle</p>
            <p className="text-[11px] text-[#786F6A]">Instant electronic transfer</p>
          </div>
          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E3D9CE] text-center space-y-1">
            <p className="text-sm font-bold text-[#1E1B18]">Venmo</p>
            <p className="text-[11px] text-[#786F6A]">Direct mobile transfer</p>
          </div>
          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E3D9CE] text-center space-y-1">
            <p className="text-sm font-bold text-[#1E1B18]">Debit &amp; Credit Cards</p>
            <p className="text-[11px] text-[#786F6A]">Visa, MC, Amex, Discover</p>
          </div>
        </div>
      </div>

      {/* Mandatory Texas Legal Notice */}
      <div className="p-6 rounded-3xl bg-[#FAF7F2] border border-[#D8CEC7] text-xs text-[#554E4A] space-y-2 text-center">
        <p className="font-bold text-[#1E1B18] uppercase tracking-wider">
          TEXAS NOTARY PUBLIC LEGAL DISCLAIMER (TEX. GOV. CODE § 406.017)
        </p>
        <p className="max-w-3xl mx-auto leading-relaxed">
          I am not an attorney licensed to practice law in Texas and may not give legal advice or accept fees for legal advice. SignatureOne cannot draft legal documents, recommend specific forms, or explain the legal effects of documents. For legal counsel, please consult a qualified Texas attorney.
        </p>
      </div>

    </div>
  );
};
