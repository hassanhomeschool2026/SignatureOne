import React from 'react';
import { DollarSign, ShieldCheck, Clock, AlertTriangle, CheckCircle2, RotateCcw, ArrowRight, FileCheck } from 'lucide-react';

export const DepositCancellation: React.FC = () => {
  const paymentSteps = [
    { title: '1. Customer Books', desc: 'Selects service format & preferred time slot' },
    { title: '2. Pays $10 Deposit', desc: 'Locks in time and applies directly toward final balance' },
    { title: '3. Appointment Confirmed', desc: 'Calendar reservation & preparation details issued' },
    { title: '4. Service Performed', desc: 'Signatures witnessed, verified & legally sealed' },
    { title: '5. Balance Calculated', desc: 'Convenience fee + state notarial fees itemized' },
    { title: '6. Remaining Paid & Receipt', desc: 'Instant itemized digital or printed receipt provided' }
  ];

  return (
    <section id="deposit-cancellation" className="py-16 md:py-24 bg-[#FAF8F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FFFFFF] text-[#27272A] border border-[#E4E4E7]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B9827B]" />
            Peace of Mind
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#27272A]">
            Deposit &amp; Cancellation Policy
          </h2>
          <p className="text-base text-[#52525B] leading-relaxed">
            Clear, customer-friendly policies designed to protect scheduled client times while ensuring smooth calendar availability.
          </p>
        </div>

        {/* 2 Main Columns: $10 Deposit & Cancellation Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          
          {/* Left: $10 Deposit Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#E4E4E7] shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#E8C9C5]/50 text-[#27272A] border border-[#E8C9C5]">
                <DollarSign className="w-3.5 h-3.5 text-[#B9827B]" />
                $10 Booking Deposit
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#27272A]">
                How the Deposit Works
              </h3>
              <div className="p-4 bg-[#FAF8F9] rounded-2xl border border-[#E4E4E7] text-xs text-[#27272A] leading-relaxed space-y-2">
                <p className="font-medium text-sm text-[#27272A]">
                  "A $10 booking deposit is required to reserve your appointment. Your deposit will be applied toward your final balance once your appointment is completed."
                </p>
                <p className="text-[#71717A]">
                  <strong>Important:</strong> The deposit is NOT the final service price. The remaining balance is due after the appointment/notarization is completed.
                </p>
              </div>
              <ul className="space-y-2.5 text-xs text-[#52525B]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B9827B] shrink-0" />
                  <span>Guarantees your exclusive time on the notary calendar</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B9827B] shrink-0" />
                  <span>Deducted dollar-for-dollar from your final itemized bill</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B9827B] shrink-0" />
                  <span>Seamlessly collected during initial online booking</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Cancellation & Rescheduling Timeline */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#E4E4E7] shadow-sm space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FAF8F9] text-[#27272A] border border-[#E4E4E7]">
                <RotateCcw className="w-3.5 h-3.5 text-[#B9827B]" />
                Cancellation Timeline
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#27272A]">
                48-Hour Cancellation Window
              </h3>
            </div>

            <div className="space-y-3">
              {/* 48+ hrs */}
              <div className="p-3.5 rounded-xl bg-[#FAF8F9] border border-[#E4E4E7] flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#E8C9C5] flex items-center justify-center text-[#27272A] shrink-0 mt-0.5 text-xs font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#27272A]">
                    Cancel 48+ Hours Before Appointment
                  </h4>
                  <p className="text-[11px] text-[#52525B] mt-0.5">
                    The $10 booking deposit is <strong className="text-[#27272A]">fully refundable</strong>.
                  </p>
                </div>
              </div>

              {/* Under 48 hrs */}
              <div className="p-3.5 rounded-xl bg-[#FAF8F9] border border-[#E4E4E7] flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#E4E4E7] flex items-center justify-center text-[#27272A] shrink-0 mt-0.5 text-xs font-bold">
                  !
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#27272A]">
                    Cancel Less Than 48 Hours Before
                  </h4>
                  <p className="text-[11px] text-[#52525B] mt-0.5">
                    The $10 booking deposit becomes non-refundable to cover reserved travel and scheduling time.
                  </p>
                </div>
              </div>

              {/* No show */}
              <div className="p-3.5 rounded-xl bg-[#FAF8F9] border border-[#E4E4E7] flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#E4E4E7] flex items-center justify-center text-[#27272A] shrink-0 mt-0.5 text-xs font-bold">
                  ✕
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#27272A]">
                    No-Show
                  </h4>
                  <p className="text-[11px] text-[#52525B] mt-0.5">
                    The $10 booking deposit is non-refundable.
                  </p>
                </div>
              </div>

              {/* Rescheduling */}
              <div className="p-3.5 rounded-xl bg-[#FAF8F9] border border-[#E4E4E7] flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#E8C9C5] flex items-center justify-center text-[#27272A] shrink-0 mt-0.5 text-xs font-bold">
                  ⇄
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#27272A]">
                    Rescheduling Policy (24+ Hours Notice)
                  </h4>
                  <p className="text-[11px] text-[#52525B] mt-0.5">
                    Appointments may be rescheduled with at least 24 hours' notice, subject to availability. The original $10 deposit transfers directly to the rescheduled appointment. Late rescheduling or repeated changes may require a new deposit.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Payment Flow Visual Steps */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E4E4E7] shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-1">
            <h3 className="font-serif text-xl font-bold text-[#27272A]">
              Customer Payment &amp; Completion Flow
            </h3>
            <p className="text-xs text-[#71717A]">
              Simple, transparent step-by-step transaction flow
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {paymentSteps.map((s, idx) => (
              <div key={idx} className="bg-[#FAF8F9] p-3.5 rounded-xl border border-[#E4E4E7] space-y-1 text-center relative">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B9827B] block">
                  Step 0{idx + 1}
                </span>
                <h4 className="font-bold text-xs text-[#27272A]">
                  {s.title}
                </h4>
                <p className="text-[10px] text-[#71717A] leading-tight pt-0.5">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
