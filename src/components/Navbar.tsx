import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, Clock, ShieldCheck, ChevronRight, FileText } from 'lucide-react';
import { BRAND_INFO } from '../data/notaryData';
import { Logo } from './Logo';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenBooking: (serviceTitle?: string, fee?: string, placeholder?: string) => void;
  onOpenQuote: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenBooking,
  onOpenQuote,
  onOpenContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navPages = [
    { id: 'pricing', label: 'Pricing Sheet' },
    { id: 'services', label: 'Services' },
    { id: 'loan-signing', label: 'Loan Signing' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'policies', label: 'Policies & Deposit' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const handleNavClick = (pageId: string) => {
    onSelectTab(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all">
      {/* Top Appointment-Only Notice Bar */}
      <div className="bg-[#1E1B18] text-[#FAF7F2] py-1.5 px-4 text-xs font-medium tracking-wide text-center border-b border-[#332E2B] flex items-center justify-center gap-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E8C9C5] animate-pulse"></span>
        <span>
          <strong>All SignatureOne services are by appointment only.</strong> Walk-ins are not accepted.
        </span>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#D8CEC7]'
            : 'bg-[#FAF7F2] border-b border-[#D8CEC7]/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Brand Logo & Name */}
            <button
              onClick={() => handleNavClick('pricing')}
              className="flex items-center gap-3 group focus:outline-none rounded-xl p-1 text-left"
              aria-label="SignatureOne Mobile Notary Home"
            >
              <Logo size="sm" variant="horizontal" showSubtitle={false} showEst={false} />
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 font-heading">
              {navPages.map((page) => {
                const isActive = currentTab === page.id;
                return (
                  <button
                    key={page.id}
                    onClick={() => handleNavClick(page.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                      isActive
                        ? 'bg-white text-[#1E1B18] shadow-xs border border-[#D8CEC7]'
                        : 'text-[#554E4A] hover:text-[#1E1B18] hover:bg-white/60'
                    }`}
                  >
                    {page.label}
                  </button>
                );
              })}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-2.5">
              <button
                id="nav-quote-btn"
                onClick={onOpenQuote}
                className="px-3.5 py-2 text-xs font-semibold tracking-wide uppercase text-[#1E1B18] hover:bg-white rounded-xl border border-[#D8CEC7] transition-all flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-[#B9827B]" />
                <span>Quote</span>
              </button>

              <button
                id="nav-book-now-btn"
                onClick={() => onOpenBooking('Select Notary Service', '$15–$35 + notarial fees', '[GENERAL NOTARY CALENDLY LINK]')}
                className="px-4 py-2 text-xs font-semibold tracking-wider uppercase bg-[#B9827B] hover:bg-[#a56f68] active:scale-[0.98] text-white rounded-xl transition-all shadow-xs flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                id="mobile-book-now-quick-btn"
                onClick={() => onOpenBooking('Standard Appointment', '$15–$35 + notarial fees', '[GENERAL NOTARY CALENDLY LINK]')}
                className="px-3 py-1.5 text-xs font-semibold tracking-wider uppercase bg-[#B9827B] text-white rounded-lg shadow-xs"
              >
                Book
              </button>
              <button
                id="mobile-nav-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-xl text-[#1E1B18] hover:bg-[#D8CEC7]/40 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#D8CEC7] px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <div className="space-y-1">
              {navPages.map((page) => {
                const isActive = currentTab === page.id;
                return (
                  <button
                    key={page.id}
                    onClick={() => handleNavClick(page.id)}
                    className={`w-full text-left px-4 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                      isActive
                        ? 'bg-[#FAF7F2] text-[#B9827B] font-bold'
                        : 'text-[#554E4A] hover:bg-[#FAF7F2] hover:text-[#1E1B18]'
                    }`}
                  >
                    {page.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#D8CEC7] space-y-2">
              <button
                id="mobile-menu-book-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking('Standard Appointment', '$15–$35 + notarial fees', '[GENERAL NOTARY CALENDLY LINK]');
                }}
                className="w-full py-3 bg-[#B9827B] text-white font-semibold text-xs tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 shadow-xs"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment ($10 Deposit)</span>
              </button>

              <button
                id="mobile-menu-quote-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-2.5 bg-[#1E1B18] text-white font-semibold text-xs tracking-wider uppercase rounded-xl flex items-center justify-center gap-2"
              >
                <FileText className="w-3.5 h-3.5 text-[#E8C9C5]" />
                <span>Request a Signing Quote</span>
              </button>

              <button
                id="mobile-menu-contact-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2.5 bg-[#FAF7F2] text-[#1E1B18] border border-[#D8CEC7] font-medium text-xs rounded-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#B9827B]" />
                <span>Contact Notary</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

