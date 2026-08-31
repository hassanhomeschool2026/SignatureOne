import React from 'react';
import { Building2, FileCheck, Navigation, Stamp, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { LOAN_SIGNING_SPECIALTIES } from '../data/notaryData';

interface LoanSigningSectionProps {
  onOpenQuote: () => void;
}

export const LoanSigningSection: React.FC<LoanSigningSectionProps> = ({ onOpenQuote }) => {
  const lsaSteps = [
    {
      icon: FileCheck,
      title: 'Package Preparation',
      desc: 'Complete document package review, signer instruction verification, and organized file preparation.'
    },
    {
      icon: Navigation,
      title: 'Prompt Mobile Travel',
      desc: 'Punctual arrival at borrower residence, escrow office, lending branch, or designated meeting point.'
    },
    {
      icon: Stamp,
      title: 'Execution & Notarization',
      desc: 'Guiding signers through deed, note, disclosures, verifying IDs, and executing clean Texas notarial seals.'
    },
    {
      icon: Send,
      title: 'Scanbacks & Timely Return',
      desc: 'Prompt scanbacks for escrow review and reliable drop-off to designated courier services.'
    }
  ];

  return (
    <section id="loan-signings" className="py-16 md:py-24 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F8F4EF] text-[#292727] border border-[#D8CEC7]">
              <Building2 className="w-3.5 h-3.5 text-[#B9827B]" />
              Title &amp; Mortgage Lending Support
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292727]">
              Loan Signing &amp; Closing Services
            </h2>
            <p className="text-base text-[#554E4A] leading-relaxed">
              Professional, meticulous Loan Signing Agent (LSA) services tailored for title agencies, lenders, escrow officers, attorneys, and signing services. Experienced with real-world mortgage transactions and seamless execution.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
            <div className="bg-[#F8F4EF] p-4 rounded-2xl border border-[#D8CEC7] text-left w-full sm:w-auto">
              <span className="text-[11px] font-semibold text-[#786F6A] uppercase tracking-wider block">
                LSA Fee Structure
              </span>
              <span className="font-serif text-xl font-bold text-[#292727] block mt-0.5">
                Starting at $50+
              </span>
              <span className="text-[11px] text-[#786F6A] block mt-1">
                Customized by document volume &amp; travel
              </span>
              <button
                id="request-quote-lsa-top-btn"
                onClick={onOpenQuote}
                className="mt-3 w-full py-2.5 px-4 bg-[#292727] hover:bg-[#3d3a3a] active:scale-[0.98] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5"
              >
                <span>REQUEST A SIGNING QUOTE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Core Workflow Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {lsaSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8F4EF] rounded-2xl p-5 border border-[#D8CEC7] hover:border-[#B9827B] transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#D8CEC7] flex items-center justify-center text-[#B9827B]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#292727]">
                  {step.title}
                </h3>
                <p className="text-xs text-[#554E4A] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Real-World Assignment Specialties */}
        <div className="bg-[#F8F4EF] rounded-3xl p-6 sm:p-8 border border-[#D8CEC7]">
          <div className="max-w-2xl mb-6">
            <h3 className="font-serif text-xl font-bold text-[#292727]">
              Closing Assignments Handled
            </h3>
            <p className="text-xs text-[#554E4A] mt-1">
              Accurate, error-free signing execution with strict adherence to lender closing instructions:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {LOAN_SIGNING_SPECIALTIES.map((spec, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border border-[#D8CEC7]/70 space-y-1.5 shadow-2xs"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B9827B] shrink-0" />
                  <h4 className="font-semibold text-xs text-[#292727]">
                    {spec.title}
                  </h4>
                </div>
                <p className="text-[11px] text-[#786F6A] pl-6 leading-relaxed">
                  {spec.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-8 pt-6 border-t border-[#D8CEC7] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#554E4A] text-center sm:text-left">
              <strong>Need a signing scheduled?</strong> Loan signing packages are custom-quoted to ensure proper file review and travel buffer times.
            </div>
            <button
              id="request-signing-quote-main-btn"
              onClick={onOpenQuote}
              className="py-3 px-6 bg-[#292727] hover:bg-[#3d3a3a] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all shadow-md shrink-0 flex items-center gap-2"
            >
              <span>REQUEST A SIGNING QUOTE</span>
              <ArrowRight className="w-4 h-4 text-[#E8C9C5]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
