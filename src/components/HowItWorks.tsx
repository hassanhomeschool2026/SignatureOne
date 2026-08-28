import React from 'react';
import { CalendarCheck, FileCheck, Stamp, Receipt, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { APPOINTMENT_DURATIONS } from '../data/notaryData';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      step: '01',
      title: 'BOOK',
      subtitle: 'Select Service & Slot',
      desc: 'Choose your service format (Meet Me, Mobile, or Online RON) and pick a convenient time on our live calendar.',
      icon: CalendarCheck,
    },
    {
      step: '02',
      title: 'PREPARE',
      subtitle: 'Have ID & Forms Ready',
      desc: 'Ensure all signers have valid, unexpired government photo IDs. Do NOT sign the document prior to the appointment.',
      icon: FileCheck,
    },
    {
      step: '03',
      title: 'NOTARIZE',
      subtitle: 'Meet & Execute',
      desc: 'Meet at our designated local point, have us travel to your door, or connect securely via audio-video on BlueNotary.',
      icon: Stamp,
    },
    {
      step: '04',
      title: 'COMPLETE',
      subtitle: 'Receive Sealed Documents',
      desc: 'Receive your officially sealed notarial certificate, itemized receipt, and complete the remaining balance seamlessly.',
      icon: Receipt,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F8F4EF] text-[#292727] border border-[#D8CEC7]">
            <Clock className="w-3.5 h-3.5 text-[#B9827B]" />
            Seamless Process
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292727]">
            How It Works
          </h2>
          <p className="text-base text-[#554E4A] leading-relaxed">
            Four simple steps from scheduling to officially notarized documents. Simple, transparent, and completely organized.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8F4EF] rounded-2xl p-6 border border-[#D8CEC7] hover:border-[#B9827B] transition-all hover:shadow-md relative flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif text-3xl font-bold text-[#B9827B]/60">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#D8CEC7] flex items-center justify-center text-[#292727]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#292727]">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#B9827B] uppercase tracking-wider mt-0.5">
                    {item.subtitle}
                  </p>

                  <p className="text-xs text-[#554E4A] mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#D8CEC7]/60 text-[11px] text-[#786F6A]">
                  {idx === 0 && 'Secured with a $10 deposit'}
                  {idx === 1 && 'Keep documents unsigned until arrival'}
                  {idx === 2 && 'Identity verified in person or video'}
                  {idx === 3 && 'Final itemized receipt delivered'}
                </div>
              </div>
            );
          })}
        </div>

        {/* Suggested Appointment Durations Table */}
        <div className="mt-14 bg-[#F8F4EF] rounded-3xl p-6 sm:p-8 border border-[#D8CEC7]">
          <div className="max-w-2xl mb-6">
            <h3 className="font-serif text-xl font-bold text-[#292727]">
              Appointment Durations &amp; Buffer Time
            </h3>
            <p className="text-xs text-[#554E4A] mt-1">
              Our booking system automatically reserves sufficient time so your appointment is unhurried and precise:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {APPOINTMENT_DURATIONS.map((dur, i) => (
              <div key={i} className="bg-white p-4 rounded-xl border border-[#D8CEC7]/70 space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#B9827B] tracking-wider block">
                  {dur.duration}
                </span>
                <h4 className="font-serif font-bold text-sm text-[#292727]">
                  {dur.service}
                </h4>
                <p className="text-[11px] text-[#786F6A] leading-tight pt-1">
                  {dur.details}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
