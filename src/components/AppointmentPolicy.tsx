import React from 'react';
import { Clock, ShieldAlert, Calendar, AlertCircle, CheckCircle, Info } from 'lucide-react';
import { BRAND_INFO } from '../data/notaryData';

export const AppointmentPolicy: React.FC = () => {
  return (
    <section id="policies" className="py-16 md:py-20 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Alert on Appointment-Only Status */}
        <div className="bg-[#292727] text-white rounded-3xl p-6 sm:p-8 shadow-md border border-[#3D3A3A] mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#B9827B] text-white">
                <ShieldAlert className="w-3.5 h-3.5" />
                Strict Operational Policy
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                All Services Are By Appointment Only
              </h3>
              <p className="text-sm text-[#D8CEC7] leading-relaxed">
                {BRAND_INFO.appointmentNotice} To maintain punctual, secure service for all clients, appointments must be scheduled in advance through our central calendar or by phone.
              </p>
            </div>

            <div className="shrink-0 bg-[#3D3A3A] p-4 rounded-2xl border border-[#554E4A] text-xs text-[#D8CEC7] space-y-1 sm:max-w-xs">
              <span className="font-semibold text-white block">One Source of Truth</span>
              <span>All appointments automatically block time on the notary calendar to prevent overlaps.</span>
            </div>
          </div>
        </div>

        {/* Operating Hours Grid */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#292727]">
            Operating &amp; Service Hours
          </h3>
          <p className="text-xs text-[#554E4A]">
            Central Time (CT) schedule for in-person, local travel, and remote sessions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: In-Person & Mobile */}
          <div className="bg-[#F8F4EF] p-6 rounded-2xl border border-[#D8CEC7] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#D8CEC7]">
              <span className="font-serif font-bold text-base text-[#292727]">In-Person &amp; Mobile</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white text-[#786F6A] border border-[#D8CEC7]">
                Local
              </span>
            </div>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1 border-b border-[#D8CEC7]/60">
                <span className="font-semibold text-[#292727]">Monday–Wednesday</span>
                <span className="text-[#554E4A]">1:00 PM – 6:30 PM CT</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#D8CEC7]/60">
                <span className="font-semibold text-[#292727]">Thursday–Friday</span>
                <span className="text-[#786F6A] italic">Closed / Prior Bookings</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#D8CEC7]/60">
                <span className="font-semibold text-[#292727]">Saturday</span>
                <span className="text-[#554E4A]">10:00 AM – 1:00 PM CT</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-semibold text-[#292727]">Sunday</span>
                <span className="text-[#786F6A] italic">Closed</span>
              </div>
            </div>
          </div>

          {/* Card 2: RON Online */}
          <div className="bg-[#F8F4EF] p-6 rounded-2xl border-2 border-[#B9827B] space-y-4 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-[#D8CEC7]">
              <span className="font-serif font-bold text-base text-[#292727]">Remote Online (RON)</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#B9827B] text-white">
                7 Days
              </span>
            </div>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1 border-b border-[#D8CEC7]/60">
                <span className="font-semibold text-[#292727]">Monday–Friday</span>
                <span className="text-[#554E4A]">10:00 AM – 7:00 PM CT</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#D8CEC7]/60">
                <span className="font-semibold text-[#292727]">Saturday–Sunday</span>
                <span className="text-[#554E4A]">11:00 AM – 5:00 PM CT</span>
              </div>
              <div className="pt-2 text-[11px] text-[#B9827B] font-medium flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                <span>BlueNotary platform digital sessions</span>
              </div>
            </div>
          </div>

          {/* Card 3: After-Hours RON */}
          <div className="bg-[#F8F4EF] p-6 rounded-2xl border border-[#D8CEC7] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#D8CEC7]">
              <span className="font-serif font-bold text-base text-[#292727]">After-Hours RON</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#292727] text-white">
                +$25 Fee
              </span>
            </div>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1 border-b border-[#D8CEC7]/60">
                <span className="font-semibold text-[#292727]">Evening Availability</span>
                <span className="text-[#554E4A]">Through 9:00 PM CT</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#D8CEC7]/60">
                <span className="font-semibold text-[#292727]">Booking Window</span>
                <span className="text-[#554E4A]">By advance reservation</span>
              </div>
              <div className="pt-2 text-[11px] text-[#786F6A]">
                <span>Subject to calendar opening. Separate +$25 service fee applies.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Availability Subject Note */}
        <div className="mt-8 p-4 bg-[#F8F4EF] rounded-xl border border-[#D8CEC7] text-center text-xs text-[#786F6A] max-w-3xl mx-auto flex items-center justify-center gap-2">
          <Info className="w-4 h-4 text-[#B9827B] shrink-0" />
          <span>
            <strong>Availability Notice:</strong> Availability is subject to the notary's calendar. Additional times may be blocked due to existing appointments or personal availability.
          </span>
        </div>

      </div>
    </section>
  );
};
