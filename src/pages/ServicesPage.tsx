import React, { useState } from 'react';
import { 
  SERVICES, 
  SERVICE_AREA_COMMUNITIES, 
  DOCUMENT_CATEGORIES, 
  BRAND_INFO,
  PRICING_DATA
} from '../data/notaryData';
import { CALENDLY_LINKS, openBookingLink } from '../config/booking';
import { 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  FileCheck, 
  Search, 
  ArrowRight,
  Building2,
  Car,
  Video,
  Briefcase,
  UserCheck,
  FileSignature,
  Stamp,
  Globe
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
      setZipResult({ checked: true, within: true, name: `${match.name} (${match.zip}) - Approx. ${match.distanceMiles} mi from Lavon` });
    } else {
      setZipResult({ checked: true, within: false, name: cleanZip });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-16">
      
      {/* A. PAGE HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E1B18] tracking-tight font-heading uppercase">
          Notary Services
        </h1>
        <p className="text-sm sm:text-base text-[#554E4A]">
          Professional in-person, mobile travel, and remote online notarial services for Lavon, Collin County, and anywhere nationwide.
        </p>
      </div>

      {/* B. CORE SERVICES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service) => {
          const isLoanSigning = service.id === 'loan-signing';
          return (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-[#F0EAE6] p-6 flex flex-col justify-between hover:border-[#E8C9C5] transition-all shadow-2xs"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-[#FAF6F5] flex items-center justify-center text-[#B9827B]">
                    {service.id === 'in-person' && <Building2 className="w-4 h-4" />}
                    {service.id === 'local-mobile' && <Car className="w-4 h-4" />}
                    {service.id === 'ron' && <Video className="w-4 h-4" />}
                    {service.id === 'loan-signing' && <Briefcase className="w-4 h-4" />}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FAF6F5] text-[#786F6A]">
                    {service.type}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#1E1B18] font-heading">{service.title}</h3>
                  <p className="text-xs text-[#786F6A] mt-0.5">{service.subtitle}</p>
                </div>

                <div className="pt-2 border-t border-[#F0EAE6]">
                  <div className="text-xl font-extrabold text-[#1E1B18]">{service.baseFee}</div>
                  <div className="text-[11px] text-[#786F6A]">{service.feeNote}</div>
                </div>

                <p className="text-xs text-[#554E4A] leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-1.5 text-xs text-[#554E4A] pt-2 border-t border-[#F0EAE6]">
                  {service.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B9827B] shrink-0 mt-0.5" />
                      <span className="text-[11px] text-[#554E4A]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0EAE6]">
                {isLoanSigning ? (
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={onOpenQuote}
                      className="w-full py-2.5 bg-[#1E1B18] hover:bg-[#35302C] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                    >
                      Request a Quote
                    </button>
                    <button
                      onClick={() => onNavigateToTab('loan-signing')}
                      className="w-full py-2 bg-[#FAF6F5] hover:bg-[#F0EAE6] text-[#1E1B18] text-xs font-semibold rounded-xl transition-all cursor-pointer"
                    >
                      View Details
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      const targetUrl = 
                        service.id === 'in-person' ? CALENDLY_LINKS.inPerson :
                        service.id === 'local-mobile' ? CALENDLY_LINKS.mobile :
                        service.id === 'ron' ? CALENDLY_LINKS.ron :
                        CALENDLY_LINKS.main;
                      openBookingLink(targetUrl);
                    }}
                    className="w-full py-2.5 bg-[#B9827B] hover:bg-[#a56f68] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                  >
                    Book Appointment
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* C. HOW THE SERVICE WORKS (Visual Process Chart) */}
      <div className="bg-[#FAF6F5] rounded-3xl border border-[#F0EAE6] p-6 sm:p-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1E1B18] font-heading uppercase">
            How The Service Works
          </h2>
          <p className="text-xs text-[#786F6A]">
            Clear, streamlined execution for each signing format.
          </p>
        </div>

        <div className="space-y-6">
          
          {/* In-Person Flow */}
          <div className="bg-white rounded-2xl p-5 border border-[#F0EAE6] space-y-3">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#B9827B]" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1E1B18]">
                In-Person Service Flow
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-1">
              <div className="bg-[#FAF6F5] rounded-xl p-3 text-center space-y-1">
                <div className="w-6 h-6 rounded-full bg-[#1E1B18] text-white text-[11px] font-bold flex items-center justify-center mx-auto">1</div>
                <div className="font-bold text-xs text-[#1E1B18]">Book</div>
                <div className="text-[11px] text-[#786F6A]">Select time &amp; place $10 deposit</div>
              </div>
              <div className="bg-[#FAF6F5] rounded-xl p-3 text-center space-y-1">
                <div className="w-6 h-6 rounded-full bg-[#1E1B18] text-white text-[11px] font-bold flex items-center justify-center mx-auto">2</div>
                <div className="font-bold text-xs text-[#1E1B18]">Meet</div>
                <div className="text-[11px] text-[#786F6A]">Meet in Wylie, TX with valid ID</div>
              </div>
              <div className="bg-[#FAF6F5] rounded-xl p-3 text-center space-y-1">
                <div className="w-6 h-6 rounded-full bg-[#1E1B18] text-white text-[11px] font-bold flex items-center justify-center mx-auto">3</div>
                <div className="font-bold text-xs text-[#1E1B18]">Sign</div>
                <div className="text-[11px] text-[#786F6A]">Sign in presence of the notary</div>
              </div>
              <div className="bg-[#FAF6F5] rounded-xl p-3 text-center space-y-1">
                <div className="w-6 h-6 rounded-full bg-[#B9827B] text-white text-[11px] font-bold flex items-center justify-center mx-auto">4</div>
                <div className="font-bold text-xs text-[#1E1B18]">Notarize</div>
                <div className="text-[11px] text-[#786F6A]">Receive sealed documents &amp; receipt</div>
              </div>
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="bg-white rounded-2xl p-5 border border-[#F0EAE6] space-y-3">
            <div className="flex items-center gap-2">
              <Car className="w-4 h-4 text-[#B9827B]" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1E1B18]">
                Mobile Notary Service Flow
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-1">
              <div className="bg-[#FAF6F5] rounded-xl p-3 text-center space-y-1">
                <div className="w-6 h-6 rounded-full bg-[#1E1B18] text-white text-[11px] font-bold flex items-center justify-center mx-auto">1</div>
                <div className="font-bold text-xs text-[#1E1B18]">Book</div>
                <div className="text-[11px] text-[#786F6A]">Reserve mobile slot with address</div>
              </div>
              <div className="bg-[#FAF6F5] rounded-xl p-3 text-center space-y-1">
                <div className="w-6 h-6 rounded-full bg-[#1E1B18] text-white text-[11px] font-bold flex items-center justify-center mx-auto">2</div>
                <div className="font-bold text-xs text-[#1E1B18]">We Travel</div>
                <div className="text-[11px] text-[#786F6A]">Notary arrives with verified ETA</div>
              </div>
              <div className="bg-[#FAF6F5] rounded-xl p-3 text-center space-y-1">
                <div className="w-6 h-6 rounded-full bg-[#1E1B18] text-white text-[11px] font-bold flex items-center justify-center mx-auto">3</div>
                <div className="font-bold text-xs text-[#1E1B18]">Sign</div>
                <div className="text-[11px] text-[#786F6A]">Verify IDs &amp; execute document signatures</div>
              </div>
              <div className="bg-[#FAF6F5] rounded-xl p-3 text-center space-y-1">
                <div className="w-6 h-6 rounded-full bg-[#B9827B] text-white text-[11px] font-bold flex items-center justify-center mx-auto">4</div>
                <div className="font-bold text-xs text-[#1E1B18]">Notarize</div>
                <div className="text-[11px] text-[#786F6A]">Affix seal &amp; settle balance</div>
              </div>
            </div>
          </div>

          {/* RON Flow */}
          <div className="bg-white rounded-2xl p-5 border border-[#F0EAE6] space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-[#B9827B]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#1E1B18]">
                  Remote Online Notarization (RON) Flow
                </h3>
              </div>
              <span className="text-[11px] text-[#786F6A] italic">
                RON appointments are completed through BlueNotary.
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-1">
              <div className="bg-[#FAF6F5] rounded-xl p-3 text-center space-y-1">
                <div className="w-6 h-6 rounded-full bg-[#1E1B18] text-white text-[11px] font-bold flex items-center justify-center mx-auto">1</div>
                <div className="font-bold text-xs text-[#1E1B18]">Book</div>
                <div className="text-[11px] text-[#786F6A]">Schedule online session</div>
              </div>
              <div className="bg-[#FAF6F5] rounded-xl p-3 text-center space-y-1">
                <div className="w-6 h-6 rounded-full bg-[#1E1B18] text-white text-[11px] font-bold flex items-center justify-center mx-auto">2</div>
                <div className="font-bold text-xs text-[#1E1B18]">Verify ID</div>
                <div className="text-[11px] text-[#786F6A]">Complete ID analysis &amp; KBA</div>
              </div>
              <div className="bg-[#FAF6F5] rounded-xl p-3 text-center space-y-1">
                <div className="w-6 h-6 rounded-full bg-[#1E1B18] text-white text-[11px] font-bold flex items-center justify-center mx-auto">3</div>
                <div className="font-bold text-xs text-[#1E1B18]">Meet Online</div>
                <div className="text-[11px] text-[#786F6A]">Join secure video call</div>
              </div>
              <div className="bg-[#FAF6F5] rounded-xl p-3 text-center space-y-1">
                <div className="w-6 h-6 rounded-full bg-[#1E1B18] text-white text-[11px] font-bold flex items-center justify-center mx-auto">4</div>
                <div className="font-bold text-xs text-[#1E1B18]">Sign</div>
                <div className="text-[11px] text-[#786F6A]">E-sign on live video</div>
              </div>
              <div className="bg-[#FAF6F5] rounded-xl p-3 text-center space-y-1">
                <div className="w-6 h-6 rounded-full bg-[#B9827B] text-white text-[11px] font-bold flex items-center justify-center mx-auto">5</div>
                <div className="font-bold text-xs text-[#1E1B18]">Notarize</div>
                <div className="text-[11px] text-[#786F6A]">Download sealed PDF instantly</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* D. DOCUMENTS WE NOTARIZE */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#F0EAE6] pb-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1E1B18] font-heading uppercase">
              Documents We Notarize
            </h2>
            <p className="text-xs text-[#786F6A]">
              Search or browse document categories handled by SignatureOne. Valid unexpired ID required.
            </p>
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-[#786F6A] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search document type..."
              value={docSearch}
              onChange={(e) => setDocSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white rounded-xl border border-[#F0EAE6] text-xs text-[#1E1B18] placeholder-[#786F6A] focus:outline-none focus:border-[#B9827B]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {DOCUMENT_CATEGORIES.map((cat, idx) => {
            const filteredDocs = cat.items.filter(item =>
              !docSearch || item.toLowerCase().includes(docSearch.toLowerCase()) || cat.category.toLowerCase().includes(docSearch.toLowerCase())
            );

            if (docSearch && filteredDocs.length === 0) return null;

            return (
              <div key={idx} className="bg-white rounded-2xl border border-[#F0EAE6] p-5 space-y-3">
                <h3 className="text-xs font-bold text-[#1E1B18] font-heading border-b border-[#FAF6F5] pb-2 flex items-center gap-2">
                  <FileCheck className="w-3.5 h-3.5 text-[#B9827B]" />
                  <span>{cat.category}</span>
                </h3>
                <ul className="space-y-1.5 text-xs text-[#554E4A]">
                  {filteredDocs.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B9827B] mt-1.5 shrink-0"></span>
                      <span className="text-[11px] leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* E. SERVICE AREA */}
      <div className="bg-white rounded-3xl border border-[#F0EAE6] p-6 sm:p-8 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#B9827B]" />
              <h2 className="text-xl sm:text-2xl font-bold text-[#1E1B18] font-heading uppercase">
                Service Area &amp; Radius Checker
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#554E4A] leading-relaxed">
              Based in Lavon, TX (75166). We provide mobile notary travel up to 12 miles locally, in-person meetings at our designated Wylie location, and Remote Online Notarization anywhere in the United States.
            </p>
          </div>

          {/* Quick ZIP checker */}
          <div className="w-full lg:w-80 bg-[#FAF6F5] rounded-2xl p-4 border border-[#F0EAE6] space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1E1B18]">
              Check Your ZIP or City
            </h3>
            <form onSubmit={handleZipCheck} className="flex gap-2">
              <input
                type="text"
                placeholder="e.g. 75098 or Wylie"
                value={zipInput}
                onChange={(e) => {
                  setZipInput(e.target.value);
                  setZipResult(null);
                }}
                className="flex-1 px-3 py-2 bg-white rounded-xl border border-[#F0EAE6] text-xs text-[#1E1B18] placeholder-[#786F6A] focus:outline-none focus:border-[#B9827B]"
              />
              <button
                type="submit"
                className="px-3 py-2 bg-[#1E1B18] text-white text-xs font-bold rounded-xl hover:bg-[#35302C] transition-all"
              >
                Check
              </button>
            </form>

            {zipResult && (
              <div className={`p-2.5 rounded-xl text-xs ${
                zipResult.within 
                  ? 'bg-[#E8C9C5]/30 text-[#1E1B18] border border-[#B9827B]/30' 
                  : 'bg-white text-[#554E4A] border border-[#F0EAE6]'
              }`}>
                {zipResult.within ? (
                  <p className="font-semibold">✓ In standard 12-mile mobile radius: {zipResult.name}</p>
                ) : (
                  <p>Location "{zipResult.name}" is beyond standard 12-mile radius. In-person meeting in Wylie or Online RON available.</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Communities pill grid */}
        <div className="pt-4 border-t border-[#F0EAE6] space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-[#1E1B18]">
            Primary Communities Served (Within 12 Miles)
          </p>
          <div className="flex flex-wrap gap-2">
            {SERVICE_AREA_COMMUNITIES.map((c, i) => (
              <span 
                key={i} 
                className="text-xs px-3 py-1 bg-[#FAF6F5] border border-[#F0EAE6] rounded-xl text-[#554E4A]"
              >
                <strong className="text-[#1E1B18]">{c.name}</strong> ({c.zip}) · {c.distanceMiles} mi
              </span>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};
