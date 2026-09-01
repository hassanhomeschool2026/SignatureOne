import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone } from 'lucide-react';
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

  const navItems = [
    { id: 'home', label: 'Home', action: () => handleNavClick('home') },
    { id: 'pricing', label: 'Pricing', action: () => handleNavClick('pricing') },
    { id: 'services', label: 'Services', action: () => handleNavClick('services') },
    { id: 'how-it-works', label: 'How It Works', action: () => handleNavClick('how-it-works') },
    { id: 'loan-signing', label: 'Loan Signings', action: () => handleNavClick('loan-signing') },
    { id: 'contact', label: 'Contact', action: () => handleNavClick('contact') },
  ];

  const handleNavClick = (pageId: string) => {
    onSelectTab(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all">
      {/* 1. Top Appointment-Only Notice Bar (Clean Black Bar) */}
      <div className="bg-[#18181B] text-white py-2 px-4 text-xs font-medium tracking-wide text-center border-b border-black flex items-center justify-center gap-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E8C9C5]"></span>
        <span>All SignatureOne services are by appointment only. Walk-ins are not accepted.</span>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-200 bg-white ${
          isScrolled
            ? 'shadow-xs border-b border-[#F0ECED]'
            : 'border-b border-[#F0ECED]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Brand Logo & Name */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 group focus:outline-none rounded-xl p-1 text-left"
              aria-label="SignatureOne Mobile Notary Home"
            >
              <Logo size="sm" variant="horizontal" showSubtitle={false} showEst={false} />
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 font-heading">
              {navItems.map((item) => {
                const isActive = currentTab === item.id;

                return (
                  <button
                    key={item.label}
                    onClick={item.action}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                      isActive
                        ? 'text-[#B9827B] font-bold bg-[#FAF8F9]'
                        : 'text-[#18181B] hover:text-[#B9827B] hover:bg-[#FAF8F9]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Desktop Action Area: Direct Phone & Book Button */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+19728531513"
                className="flex items-center gap-1.5 text-xs font-semibold text-[#18181B] hover:text-[#B9827B] transition-colors py-2 px-1"
                aria-label="Call SignatureOne Mobile Notary at (972) 853-1513"
              >
                <Phone className="w-3.5 h-3.5 text-[#B9827B]" />
                <span>(972) 853-1513</span>
              </a>

              <button
                id="nav-book-now-btn"
                onClick={() => onOpenBooking()}
                className="px-4 py-2 text-xs font-semibold tracking-wider uppercase bg-[#B9827B] hover:bg-[#a56f68] active:scale-[0.98] text-white rounded-xl transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Action Controls */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="tel:+19728531513"
                className="p-2 text-[#18181B] hover:text-[#B9827B] rounded-lg"
                aria-label="Call business phone"
              >
                <Phone className="w-4 h-4 text-[#B9827B]" />
              </a>

              <button
                id="mobile-book-now-quick-btn"
                onClick={() => onOpenBooking()}
                className="px-3 py-1.5 text-xs font-semibold tracking-wider uppercase bg-[#B9827B] text-white rounded-lg shadow-xs cursor-pointer"
              >
                Book
              </button>

              <button
                id="mobile-nav-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-xl text-[#18181B] hover:bg-[#FAF8F9] focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#F0ECED] px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="w-full text-left px-4 py-2.5 text-sm font-semibold rounded-xl transition-colors text-[#18181B] hover:bg-[#FAF8F9] hover:text-[#B9827B]"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-[#F0ECED] space-y-2">
              <a
                href="tel:+19728531513"
                className="w-full py-2.5 bg-[#FAF8F9] text-[#18181B] border border-[#F0ECED] font-semibold text-xs rounded-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#B9827B]" />
                <span>Call (972) 853-1513</span>
              </a>

              <button
                id="mobile-menu-book-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 bg-[#B9827B] text-white font-semibold text-xs tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
