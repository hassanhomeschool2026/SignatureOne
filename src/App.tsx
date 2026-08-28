import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Distinct Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { LoanSigningPage } from './pages/LoanSigningPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { PoliciesPage } from './pages/PoliciesPage';
import { FAQsPage } from './pages/FAQsPage';

// Modals
import { CalendlyModal } from './components/Modals/CalendlyModal';
import { QuoteModal } from './components/Modals/QuoteModal';
import { ContactModal } from './components/Modals/ContactModal';

export default function App() {
  // Navigation tab state (pricing / services / loan-signing / how-it-works / policies / faqs)
  const [currentTab, setCurrentTab] = useState<string>('pricing');

  // Handle hash changes for direct linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validTabs = ['pricing', 'services', 'loan-signing', 'how-it-works', 'policies', 'faqs'];
      if (validTabs.includes(hash)) {
        setCurrentTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectTab = (tab: string) => {
    setCurrentTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Modal states
  const [bookingModalState, setBookingModalState] = useState<{
    isOpen: boolean;
    serviceTitle?: string;
    fee?: string;
    placeholderUrl?: string;
  }>({
    isOpen: false,
    serviceTitle: 'Standard Notary Appointment',
    fee: '$15–$35 Convenience Fee + notarial fees',
    placeholderUrl: '[GENERAL NOTARY CALENDLY LINK]',
  });

  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);

  const handleOpenBooking = (
    serviceTitle: string = 'Select Notary Service',
    fee: string = '$15–$35 Convenience Fee + notarial fees',
    placeholderUrl: string = '[CALENDLY BOOKING LINK]'
  ) => {
    setBookingModalState({
      isOpen: true,
      serviceTitle,
      fee,
      placeholderUrl,
    });
  };

  const handleCloseBooking = () => {
    setBookingModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleOpenQuote = () => {
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
  };

  const handleOpenContact = () => {
    setContactModalOpen(true);
  };

  const handleCloseContact = () => {
    setContactModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1E1B18] font-sans antialiased selection:bg-[#E8C9C5] selection:text-[#1E1B18]">
      
      {/* 0. Header with Appointment Notice & Page Navigation */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenBooking={handleOpenBooking}
        onOpenQuote={handleOpenQuote}
        onOpenContact={handleOpenContact}
      />

      {/* Main Multi-Page Content Area */}
      <main className="flex-grow">
        {currentTab === 'pricing' && (
          <HomePage
            onOpenBooking={handleOpenBooking}
            onOpenQuote={handleOpenQuote}
            onNavigateToTab={handleSelectTab}
          />
        )}

        {currentTab === 'services' && (
          <ServicesPage
            onOpenBooking={handleOpenBooking}
            onOpenQuote={handleOpenQuote}
            onNavigateToTab={handleSelectTab}
          />
        )}

        {currentTab === 'loan-signing' && (
          <LoanSigningPage
            onOpenQuote={handleOpenQuote}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentTab === 'how-it-works' && (
          <HowItWorksPage
            onOpenBooking={handleOpenBooking}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentTab === 'policies' && (
          <PoliciesPage
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentTab === 'faqs' && (
          <FAQsPage
            onOpenBooking={handleOpenBooking}
            onOpenContact={handleOpenContact}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigateToTab={handleSelectTab}
        onOpenBooking={() => handleOpenBooking('Select Notary Service', '$15–$35 + notarial fees', '[GENERAL NOTARY CALENDLY LINK]')}
        onOpenQuote={handleOpenQuote}
        onOpenContact={handleOpenContact}
      />

      {/* Modals */}
      <CalendlyModal
        isOpen={bookingModalState.isOpen}
        onClose={handleCloseBooking}
        serviceTitle={bookingModalState.serviceTitle}
        defaultFee={bookingModalState.fee}
        placeholderUrl={bookingModalState.placeholderUrl}
      />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuote}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={handleCloseContact}
      />
    </div>
  );
}
