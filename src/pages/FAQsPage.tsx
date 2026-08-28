import React, { useState } from 'react';
import { FAQ_ITEMS, BRAND_INFO } from '../data/notaryData';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  Phone, 
  Mail, 
  MessageSquare, 
  Calendar,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface FAQsPageProps {
  onOpenBooking: (serviceTitle?: string, fee?: string, placeholder?: string) => void;
  onOpenContact: () => void;
}

export const FAQsPage: React.FC<FAQsPageProps> = ({
  onOpenBooking,
  onOpenContact,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openIds, setOpenIds] = useState<number[]>([1, 2]); // First two open by default

  const categories = ['All', 'General & Mobile', 'Remote Online (RON)', 'Booking & Deposits', 'Legal Scope'];

  const toggleAccordion = (id: number) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQ_ITEMS.filter(faq => {
    const matchesSearch = 
      !searchQuery ||
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = 
      selectedCategory === 'All' || faq.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8C9C5]/40 text-[#1E1B18] text-xs font-semibold uppercase tracking-wider font-heading">
          <HelpCircle className="w-3.5 h-3.5 text-[#B9827B]" />
          Knowledge Base &amp; Answers
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E1B18] tracking-tight font-heading">
          Frequently Asked Questions
        </h1>
        <p className="text-sm sm:text-base text-[#554E4A]">
          Find quick answers about acceptable IDs, Texas notary fees, $10 booking deposit, cancellation rules, and remote online notarization.
        </p>
      </div>

      {/* Search Bar & Category Filter Pills */}
      <div className="space-y-4">
        
        {/* Search Input */}
        <div className="relative max-w-2xl mx-auto">
          <Search className="w-4 h-4 text-[#786F6A] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g. ID, deposit, after-hours, travel fee)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 bg-white rounded-2xl border border-[#D8CEC7] text-sm text-[#1E1B18] placeholder-[#786F6A] focus:outline-none focus:border-[#B9827B] shadow-xs"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#1E1B18] text-white shadow-xs'
                  : 'bg-white text-[#554E4A] border border-[#D8CEC7] hover:border-[#B9827B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-3xl border border-[#D8CEC7] p-8 space-y-3">
            <p className="text-sm text-[#554E4A]">No matching questions found for "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="text-xs font-semibold text-[#B9827B] hover:underline"
            >
              Clear Search Filters
            </button>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#D8CEC7] overflow-hidden transition-all hover:border-[#B9827B]"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-[#1E1B18] text-sm sm:text-base font-heading focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#FAF7F2] text-[#B9827B] text-xs font-bold flex items-center justify-center shrink-0 border border-[#E3D9CE]">
                      {faq.id}
                    </span>
                    <span>{faq.q}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#786F6A] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-[#B9827B]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#554E4A] leading-relaxed border-t border-[#FAF7F2] space-y-3">
                    <p>{faq.a}</p>
                    <div className="flex items-center gap-2 pt-1 text-[11px] text-[#786F6A]">
                      <span className="px-2 py-0.5 rounded-md bg-[#FAF7F2] border border-[#E3D9CE]">
                        Category: {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Still Have Questions Box */}
      <div className="rounded-3xl bg-[#FAF7F2] border border-[#E8C9C5] p-8 text-center space-y-4">
        <h3 className="text-xl font-bold text-[#1E1B18] font-heading">
          Still Have a Specific Question?
        </h3>
        <p className="text-xs sm:text-sm text-[#554E4A] max-w-xl mx-auto">
          We're here to help clarify document requirements, calculate travel distances, or assist with real estate closing scheduling.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={onOpenContact}
            className="py-2.5 px-5 rounded-xl bg-[#1E1B18] hover:bg-[#35302C] text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#E8C9C5]" />
            <span>Send Us a Message</span>
          </button>
          <a
            href={`tel:${BRAND_INFO.phone}`}
            className="py-2.5 px-5 rounded-xl bg-white border border-[#D8CEC7] hover:border-[#B9827B] text-[#1E1B18] text-xs font-semibold transition-all flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-[#B9827B]" />
            <span>{BRAND_INFO.phone}</span>
          </a>
        </div>
      </div>

    </div>
  );
};
