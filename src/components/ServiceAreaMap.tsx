import React, { useState } from 'react';
import { MapPin, Navigation, Compass, Globe, Check, Info, ShieldCheck } from 'lucide-react';
import { SERVICE_AREAS } from '../data/notaryData';

export const ServiceAreaMap: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1); // Mobile 12-mile default

  const communities = [
    'Lavon (75166)',
    'Wylie',
    'Nevada',
    'Josephine',
    'Royse City',
    'Copeville',
    'St. Paul',
    'Farmersville',
    'Rockwall (Extended)',
    'Fate (Extended)',
    'Sachse (Extended)',
    'Greenville (Extended)'
  ];

  return (
    <section id="service-area" className="py-16 md:py-24 bg-[#F8F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FFFFFF] text-[#292727] border border-[#D8CEC7]">
            <Compass className="w-3.5 h-3.5 text-[#B9827B]" />
            Coverage &amp; Reach
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292727]">
            Where We Serve You
          </h2>
          <p className="text-base text-[#554E4A] leading-relaxed">
            Based in Lavon, Texas (ZIP 75166), SignatureOne provides flexible in-person, local mobile, extended business travel, and statewide remote online coverage.
          </p>
        </div>

        {/* 4 Service Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Tier Selector */}
          <div className="lg:col-span-6 space-y-4">
            {SERVICE_AREAS.map((tier, idx) => (
              <div
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  activeTab === idx
                    ? 'bg-white border-[#B9827B] shadow-md ring-1 ring-[#B9827B]'
                    : 'bg-white/70 border-[#D8CEC7] hover:bg-white hover:border-[#B9827B]/60'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        activeTab === idx ? 'bg-[#E8C9C5] text-[#292727]' : 'bg-[#F8F4EF] text-[#786F6A]'
                      }`}
                    >
                      {idx === 0 && <MapPin className="w-4 h-4" />}
                      {idx === 1 && <Navigation className="w-4 h-4" />}
                      {idx === 2 && <Compass className="w-4 h-4" />}
                      {idx === 3 && <Globe className="w-4 h-4" />}
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-bold text-[#292727]">
                        {tier.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#B9827B]">
                        {tier.area}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#F8F4EF] border border-[#D8CEC7] text-[#292727]">
                    {tier.fee}
                  </span>
                </div>
                <p className="text-xs text-[#554E4A] mt-3 pl-12 leading-relaxed">
                  {tier.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Visual Coverage Radius Graphic & Community Tags */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D8CEC7] shadow-lg space-y-6">
              <div className="flex items-center justify-between border-b border-[#D8CEC7] pb-4">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#292727]">
                    Local Hub: Lavon, TX 75166
                  </h3>
                  <p className="text-xs text-[#786F6A]">
                    Collin, Rockwall, and neighboring North Texas counties
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#B9827B] bg-[#F8F4EF] px-2.5 py-1 rounded-full border border-[#E8C9C5]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Appointment Only
                </span>
              </div>

              {/* Visual Radius Graphic */}
              <div className="relative bg-[#F8F4EF] rounded-2xl p-6 border border-[#D8CEC7]/70 flex flex-col items-center justify-center text-center overflow-hidden min-h-[220px]">
                {/* Concentric Circles */}
                <div className="absolute w-72 h-72 rounded-full border border-[#D8CEC7]/80 pointer-events-none"></div>
                <div className="absolute w-52 h-52 rounded-full border border-dashed border-[#B9827B]/60 bg-[#E8C9C5]/15 pointer-events-none"></div>
                <div className="absolute w-28 h-28 rounded-full bg-[#FFFFFF] border-2 border-[#292727] shadow-sm flex flex-col items-center justify-center z-10">
                  <MapPin className="w-5 h-5 text-[#B9827B]" />
                  <span className="text-[10px] font-bold text-[#292727] uppercase tracking-wider mt-0.5">
                    75166
                  </span>
                  <span className="text-[9px] text-[#786F6A]">Lavon, TX</span>
                </div>

                <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-4 text-[10px] text-[#786F6A] font-medium z-10">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#B9827B]"></span>
                    Inner Zone: 12-Mile Mobile
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#786F6A]"></span>
                    Outer Zone: +20 Miles Extended
                  </span>
                </div>
              </div>

              {/* Surrounding Communities Chips */}
              <div>
                <span className="block text-xs font-semibold text-[#292727] uppercase tracking-wider mb-2.5">
                  Surrounding Cities &amp; Communities Served:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {communities.map((c, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-lg bg-[#F8F4EF] border border-[#D8CEC7] text-[#292727] font-medium"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Clear Security/Privacy Notice */}
              <div className="p-3.5 bg-[#F8F4EF] rounded-xl border border-[#D8CEC7] text-xs text-[#786F6A] flex items-start gap-2">
                <Info className="w-4 h-4 text-[#B9827B] shrink-0 mt-0.5" />
                <p>
                  <strong>Meeting Location Privacy:</strong> To protect privacy and prevent unscheduled visits, our designated in-person meeting coordinates are delivered directly upon booking confirmation. No residential address is published.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
