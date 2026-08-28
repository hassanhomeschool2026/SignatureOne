import React, { useState } from 'react';
import { 
  SERVICES, 
  SERVICE_AREA_COMMUNITIES, 
  DOCUMENT_CATEGORIES, 
  AFTER_HOURS_DATA,
  BRAND_INFO
} from '../data/notaryData';
import { 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  FileCheck, 
  ChevronRight, 
  Video, 
  Search, 
  ArrowRight,
  Info
} from 'lucide-react';

interface ServicesPageProps {
  onOpenBooking: (serviceTitle?: string, fee?: string, placeholder?: string) => void;
  onOpenQuote: () => void;
  onNavigateToTab: (tab: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenBooking,
  onOpenQuote,
  onNavigateToTab,
}) => {
  const [docSearch, setDocSearch] = useState('');
  const [zipInput, setZipInput] = useState('');
  const [zipResult, setZipResult] = useState<{ checked: boolean; within: boolean; name?: string } | null>(null);

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipInput.trim()) return;
    const cleanZip = zipInput.trim();
    const match = SERVICE_AREA_COMMUNITIES.find(
      c => c.zip === cleanZip || c.name.toLowerCase().includes(cleanZip.toLowerCase())
    );
    if (match) {
      setZipResult({ checked: true, within: true, name: `${match.name} (${match.zip}) - Approx. ${match.distanceMiles} mi` });
    } else {
      setZipResult({ checked: true, within: false, name: cleanZip });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8C9C5]/40 text-[#1E1B18] text-xs font-semibold uppercase tracking-wider font-heading">
          <Sparkles className="w-3.5 h-3.5 text-[#B9827B]" />
          SignatureOne Notary Services
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E1B18] tracking-tight font-heading">
          Comprehensive Notarial Solutions
        </h1>
        <p className="text-sm sm:text-base text-[#554E4A]">
          Punctual, professional in-person, mobile travel, and remote online notarizations tailored to individuals, families, and businesses across Texas.
        </p>
      </div>

      {/* 4 Core Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((service) => {
          const isMobile = service.id === 'local-mobile';
          return (
            <div
              key={service.id}
              className={`rounded-3xl border p-8 flex flex-col justify-between transition-all ${
                isMobile 
                  ? 'bg-[#FAF7F2] border-[#B9827B] shadow-md ring-1 ring-[#B9827B]/20' 
                  : 'bg-white border-[#D8CEC7] hover:border-[#B9827B] hover:shadow-md'
              }`}
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#E8C9C5]/40 text-[#1E1B18]">
                    {service.type}
                  </span>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold text-[#1E1B18] font-heading">{service.baseFee}</span>
                    <span className="text-xs text-[#786F6A] block">{service.feeNote}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1E1B18] font-heading">{service.title}</h3>
                  <p className="text-xs text-[#B9827B] font-medium mt-0.5">{service.subtitle}</p>
                  <p className="text-sm text-[#554E4A] mt-2 leading-relaxed">{service.description}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#EAE2D8]">
                  <p className="text-xs font-semibold text-[#1E1B18] uppercase tracking-wider">What's Included:</p>
                  <ul className="space-y-1.5 text-xs text-[#554E4A]">
                    {service.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B9827B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#EAE2D8]">
                {service.id === 'loan-signing' ? (
                  <div className="flex gap-2">
                    <button
                      onClick={onOpenQuote}
                      className="flex-1 py-3 px-4 rounded-xl bg-[#1E1B18] hover:bg-[#35302C] text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Request Signing Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onNavigateToTab('loan-signing')}
                      className="py-3 px-4 rounded-xl bg-[#FAF7F2] hover:bg-[#EAE2D8] text-[#1E1B18] font-medium text-xs border border-[#D8CEC7] transition-all"
                    >
                      Details
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => onOpenBooking(service.title, `${service.baseFee} ${service.feeNote}`, service.calendlyPlaceholder)}
                    className={`w-full py-3 px-4 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 ${
                      isMobile
                        ? 'bg-[#B9827B] hover:bg-[#a56f68] text-white shadow-xs'
                        : 'bg-[#FAF7F2] hover:bg-[#B9827B] text-[#1E1B18] hover:text-white border border-[#D8CEC7] hover:border-[#B9827B]'
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book This Service (Credited $10 Deposit)</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* After-Hours Remote Online Notarization Feature */}
      <div className="rounded-3xl bg-gradient-to-r from-[#1E1B18] to-[#2D2825] text-white p-8 sm:p-10 relative overflow-hidden shadow-lg">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B9827B]/30 border border-[#B9827B]/50 text-[#E8C9C5] text-xs font-semibold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5" />
            Evening Availability (7 Days a Week)
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            Need an Evening or Weekend Notarization?
          </h2>
          <p className="text-sm text-[#D8CEC7] leading-relaxed">
            Remote Online Notarization (RON) is available during evening hours up to 9:00 PM Central Time by appointment. Complete legal notarizations from the comfort of your home or office on any smartphone, tablet, or computer.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#E8C9C5]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B9827B] shrink-0" />
              <span>BlueNotary Biometric ID Authentication</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B9827B] shrink-0" />
              <span>Flat +$25 Evening Fee ($50 Base Total)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B9827B] shrink-0" />
              <span>Immediate Digital PDF Download</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B9827B] shrink-0" />
              <span>10-Year Encrypted Audio/Video Audit Trail</span>
            </div>
          </div>
          <div className="pt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenBooking('After-Hours Remote Online Notarization (RON)', '$50 base platform fee + $10/signature', '[AFTER HOURS CALENDLY LINK]')}
              className="py-3 px-6 rounded-xl bg-[#B9827B] hover:bg-[#a56f68] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
            >
              <Video className="w-4 h-4" />
              <span>Book Evening RON Appointment</span>
            </button>
            <span className="text-xs text-[#A89F9A]">
              Appointments must be booked at least 2 hours in advance.
            </span>
          </div>
        </div>
      </div>

      {/* Document Types Handled */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-[#1E1B18] font-heading">
              Documents We Notarize
            </h2>
            <p className="text-xs text-[#554E4A]">
              Ensure all signers possess valid, unexpired government-issued photo identification.
            </p>
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-[#786F6A] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search document type..."
              value={docSearch}
              onChange={(e) => setDocSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white rounded-xl border border-[#D8CEC7] text-xs text-[#1E1B18] placeholder-[#786F6A] focus:outline-none focus:border-[#B9827B]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DOCUMENT_CATEGORIES.map((cat, idx) => {
            const filteredDocs = cat.items.filter(item =>
              !docSearch || item.toLowerCase().includes(docSearch.toLowerCase()) || cat.category.toLowerCase().includes(docSearch.toLowerCase())
            );

            if (docSearch && filteredDocs.length === 0) return null;

            return (
              <div key={idx} className="bg-white rounded-2xl border border-[#D8CEC7] p-6 space-y-3">
                <h3 className="text-sm font-bold text-[#1E1B18] font-heading border-b border-[#FAF7F2] pb-2 flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#B9827B]" />
                  <span>{cat.category}</span>
                </h3>
                <ul className="space-y-2 text-xs text-[#554E4A]">
                  {filteredDocs.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B9827B] mt-1.5 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Area & Radius Verification */}
      <div className="bg-white rounded-3xl border border-[#D8CEC7] p-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1 max-w-xl">
            <h2 className="text-2xl font-bold text-[#1E1B18] font-heading flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#B9827B]" />
              <span>12-Mile Travel Service Area</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#554E4A]">
              We travel directly to homes, workplaces, healthcare facilities, and coffee shops across Lavon (75166) and surrounding communities.
            </p>
          </div>

          {/* Quick Zip / City Checker */}
          <form onSubmit={handleZipCheck} className="flex items-center gap-2 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Enter ZIP or City..."
              value={zipInput}
              onChange={(e) => setZipInput(e.target.value)}
              className="py-2.5 px-3 bg-[#FAF7F2] border border-[#D8CEC7] rounded-xl text-xs text-[#1E1B18] focus:outline-none focus:border-[#B9827B]"
            />
            <button
              type="submit"
              className="py-2.5 px-4 bg-[#1E1B18] hover:bg-[#35302C] text-white text-xs font-semibold rounded-xl transition-all"
            >
              Check
            </button>
          </form>
        </div>

        {zipResult && (
          <div className={`p-4 rounded-xl text-xs font-medium ${
            zipResult.within 
              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
              : 'bg-amber-50 text-amber-800 border border-amber-200'
          }`}>
            {zipResult.within ? (
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Yes! <strong>{zipResult.name}</strong> is inside our standard 12-mile $35 local mobile service area.</span>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Info className="w-4 h-4 text-amber-600 shrink-0" />
                <span><strong>{zipResult.name}</strong> may be outside the standard 12-mile radius. We can still serve you via <strong>Remote Online Notarization ($25)</strong> or provide a custom travel quote!</span>
              </span>
            )}
          </div>
        )}

        {/* Communities Badges */}
        <div className="space-y-3">
          <p className="text-xs font-semibold text-[#1E1B18] uppercase tracking-wider">Primary Service Radius Cities:</p>
          <div className="flex flex-wrap gap-2">
            {SERVICE_AREA_COMMUNITIES.map((c, idx) => (
              <span 
                key={idx}
                className="px-3 py-1.5 rounded-xl bg-[#FAF7F2] border border-[#D8CEC7] text-xs text-[#554E4A] font-medium flex items-center gap-1.5"
              >
                <MapPin className="w-3 h-3 text-[#B9827B]" />
                <span>{c.name} ({c.zip})</span>
                <span className="text-[10px] text-[#786F6A] font-normal">~{c.distanceMiles} mi</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Texas Legal Disclaimer */}
      <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#D8CEC7] text-xs text-[#554E4A] text-center space-y-1">
        <p className="font-semibold text-[#1E1B18]">
          TEXAS NOTARY PUBLIC STATUTORY NOTICE
        </p>
        <p>
          I am not an attorney licensed to practice law in Texas and may not give legal advice or accept fees for legal advice.
        </p>
      </div>

    </div>
  );
};
