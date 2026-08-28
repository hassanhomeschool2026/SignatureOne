import React from 'react';
import { FileText, ShieldAlert, CheckCircle, HelpCircle, ArrowRight } from 'lucide-react';
import { DOCUMENT_CATEGORIES } from '../data/notaryData';

interface DocumentServicesProps {
  onOpenBooking: () => void;
  onOpenContact: () => void;
}

export const DocumentServices: React.FC<DocumentServicesProps> = ({
  onOpenBooking,
  onOpenContact,
}) => {
  return (
    <section id="document-types" className="py-16 md:py-24 bg-[#F8F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FFFFFF] text-[#292727] border border-[#D8CEC7]">
            <FileText className="w-3.5 h-3.5 text-[#B9827B]" />
            Document Types Handled
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292727]">
            Common Notarization Services
          </h2>
          <p className="text-base text-[#554E4A] leading-relaxed">
            We witness signatures, administer oaths, and verify identities across a wide spectrum of personal, real estate, and commercial documents.
          </p>
        </div>

        {/* Document Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DOCUMENT_CATEGORIES.map((doc, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] rounded-2xl p-5 border border-[#D8CEC7] hover:border-[#B9827B] transition-all hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#F8F4EF] border border-[#E8C9C5] flex items-center justify-center text-[#B9827B] shrink-0 text-xs font-semibold font-serif">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#292727]">
                    {doc.category}
                  </h3>
                </div>
                <ul className="space-y-1.5 text-xs text-[#554E4A] pl-1">
                  {doc.items.slice(0, 3).map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B9827B]"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Non-Legal Advice Disclaimer Box (Mandatory Requirement) */}
        <div className="mt-12 max-w-3xl mx-auto bg-[#FFFFFF] rounded-2xl p-6 border-2 border-[#E8C9C5] shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#E8C9C5]/50 flex items-center justify-center text-[#B9827B] shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h4 className="font-serif text-lg font-bold text-[#292727]">
                Texas Legal Disclaimer &amp; Notary Scope
              </h4>
              <p className="text-xs sm:text-sm text-[#554E4A] leading-relaxed">
                <strong>Not sure what you need?</strong> We can explain the notarization process, but we <strong>cannot provide legal advice or tell you what your document should say</strong>. A Texas notary public is not an attorney licensed to practice law and may not give legal advice or accept fees for legal advice.
              </p>
              <div className="pt-1">
                <button
                  onClick={onOpenContact}
                  className="text-xs font-semibold text-[#B9827B] hover:text-[#292727] transition-colors inline-flex items-center gap-1"
                >
                  <span>Have questions about the signing process? Contact us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
