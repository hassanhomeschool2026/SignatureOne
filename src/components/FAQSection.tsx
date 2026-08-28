import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { FAQ_DATA } from '../data/notaryData';

interface FAQSectionProps {
  onOpenContact: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenContact }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFAQs = FAQ_DATA.filter((faq) => {
    const matchesCat = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#FFFFFF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F8F4EF] text-[#292727] border border-[#D8CEC7]">
            <HelpCircle className="w-3.5 h-3.5 text-[#B9827B]" />
            Frequently Asked Questions
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292727]">
            Got Questions? We’ve Got Answers.
          </h2>
          <p className="text-base text-[#554E4A] leading-relaxed">
            Everything you need to know about our appointment policies, mobile coverage, fees, and notarization process.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-[#786F6A] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. ID requirements, deposit, mobile radius, after hours)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-[#F8F4EF] border border-[#D8CEC7] rounded-xl focus:outline-none focus:border-[#B9827B] text-[#292727]"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Questions (14)' },
              { id: 'general', label: 'General & Mobile' },
              { id: 'booking', label: 'Booking & Durations' },
              { id: 'pricing', label: 'Fees & Deposit' },
              { id: 'policies', label: 'Policies & Legal Limits' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#292727] text-white border-[#292727]'
                    : 'bg-[#F8F4EF] text-[#554E4A] border-[#D8CEC7] hover:bg-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-10 bg-[#F8F4EF] rounded-2xl border border-[#D8CEC7] text-xs text-[#786F6A]">
              No questions found matching your search. Try another keyword or contact us directly.
            </div>
          ) : (
            filteredFAQs.map((faq) => {
              const strId = faq.id.toString();
              const isOpen = openIds.includes(strId);
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen
                      ? 'bg-[#F8F4EF] border-[#B9827B]/60 shadow-xs'
                      : 'bg-white border-[#D8CEC7] hover:border-[#D8CEC7]'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(strId)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif font-bold text-sm sm:text-base text-[#292727]">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-[#E8C9C5] text-[#292727]' : 'bg-[#F8F4EF] text-[#786F6A]'
                      }`}
                    >
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-[#554E4A] leading-relaxed border-t border-[#D8CEC7]/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 bg-[#F8F4EF] rounded-2xl border border-[#D8CEC7] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-base text-[#292727]">
              Still have questions about your specific documents?
            </h4>
            <p className="text-xs text-[#786F6A]">
              We're happy to explain the scheduling or notarization process.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="py-2.5 px-5 bg-[#292727] hover:bg-[#3d3a3a] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all shadow-xs shrink-0 flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#E8C9C5]" />
            <span>Contact Us</span>
          </button>
        </div>

      </div>
    </section>
  );
};
