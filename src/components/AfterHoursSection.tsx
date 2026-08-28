import React from 'react';
import { Moon, Clock, Calendar, ArrowRight, ShieldCheck, Sparkles, Check } from 'lucide-react';

interface AfterHoursSectionProps {
  onOpenBooking: (serviceTitle?: string, fee?: string, placeholder?: string) => void;
}

export const AfterHoursSection: React.FC<AfterHoursSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="after-hours" className="py-16 md:py-20 bg-[#292727] text-white relative overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#B9827B]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#E8C9C5]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headline, Details, CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#3D3A3A] border border-[#554E4A] text-[#E8C9C5]">
              <Moon className="w-3.5 h-3.5 text-[#B9827B]" />
              Evening Availability
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Need a Notary After Hours?
              </h2>
              <p className="text-base text-[#D8CEC7] max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                When urgent deadlines arise after standard operating hours, Remote Online Notarization (RON) may be available by appointment until <strong className="text-white">9:00 PM CT</strong>, subject to availability.
              </p>
            </div>

            <div className="space-y-2.5 text-xs text-[#D8CEC7] max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 bg-[#3D3A3A]/60 p-2.5 rounded-lg border border-[#554E4A]">
                <Check className="w-4 h-4 text-[#E8C9C5] shrink-0" />
                <span>100% remote digital signing via BlueNotary platform</span>
              </div>
              <div className="flex items-center gap-2 bg-[#3D3A3A]/60 p-2.5 rounded-lg border border-[#554E4A]">
                <Check className="w-4 h-4 text-[#E8C9C5] shrink-0" />
                <span>Available Mon–Sun by reservation through 9:00 PM CT</span>
              </div>
              <div className="flex items-center gap-2 bg-[#3D3A3A]/60 p-2.5 rounded-lg border border-[#554E4A]">
                <Check className="w-4 h-4 text-[#E8C9C5] shrink-0" />
                <span>Transparent pricing with separately itemized fees</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                id="request-after-hours-ron-btn"
                onClick={() => onOpenBooking('After-Hours Remote Online Notary', 'Texas Notarial Fee ($10) + RON ($25) + After-Hours ($25) = $60 Total Example', '[AFTER-HOURS RON CALENDLY LINK]')}
                className="w-full sm:w-auto py-3.5 px-6 bg-[#B9827B] hover:bg-[#a66f68] active:scale-[0.98] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>REQUEST AFTER-HOURS RON</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <p className="text-[11px] text-[#A89F9A] font-mono text-center lg:text-left">
              Placeholder destination: [AFTER-HOURS RON CALENDLY LINK]
            </p>
          </div>

          {/* Right Column: Itemized Transparency Example Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#FFFFFF] text-[#292727] rounded-2xl p-6 sm:p-7 shadow-2xl border border-[#E8C9C5]/40 relative">
              <div className="flex items-center justify-between pb-4 border-b border-[#D8CEC7]">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#B9827B] block">
                    Transparent Itemization
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#292727]">
                    After-Hours Fee Example
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#E8C9C5]/60 text-[#292727]">
                  Evening Service
                </span>
              </div>

              {/* Breakdown List */}
              <div className="py-4 space-y-3 text-xs">
                <div className="flex items-center justify-between py-1 border-b border-[#D8CEC7]/40">
                  <span className="text-[#554E4A]">Texas Statutory Notarial Fee (1st sig)</span>
                  <span className="font-semibold text-[#292727]">$10.00</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#D8CEC7]/40">
                  <span className="text-[#554E4A]">SignatureOne RON Platform Fee</span>
                  <span className="font-semibold text-[#292727]">$25.00</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#D8CEC7]/40">
                  <span className="text-[#554E4A]">SignatureOne After-Hours Service Fee</span>
                  <span className="font-semibold text-[#B9827B]">+$25.00</span>
                </div>
                <div className="flex items-center justify-between pt-2 text-sm font-bold text-[#292727]">
                  <span>Total Estimated Fee</span>
                  <span className="font-serif text-xl text-[#292727]">$60.00</span>
                </div>
              </div>

              {/* Clear notice */}
              <div className="p-3 bg-[#F8F4EF] rounded-xl border border-[#D8CEC7] text-[11px] text-[#786F6A] leading-relaxed">
                The +$25 After-Hours Service Fee is a dedicated business availability charge and is never represented as a state notarial fee. Itemized clearly on every receipt.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
