import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Distinct Pages
import { HomePage } from './pages/HomePage';
import { PricingPage } from './pages/PricingPage';
import { ServicesPage } from './pages/ServicesPage';
import { LoanSigningPage } from './pages/LoanSigningPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ContactPage } from './pages/ContactPage';
import { PoliciesPage } from './pages/PoliciesPage';
import { FAQsPage } from './pages/FAQsPage';

// Modals
import { ServiceSelectorModal } from './components/Modals/ServiceSelectorModal';
import { QuoteModal } from './components/Modals/QuoteModal';
import { ContactModal } from './components/Modals/ContactModal';

export default function App() {
  // Navigation tab state (home / pricing / services / loan-signing / how-it-works / contact / policies / faqs)
  const [currentTab, setCurrentTab] = useState<string>('home');

  // Handle hash changes for direct linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validTabs = ['home', 'pricing', 'services', 'loan-signing', 'how-it-works', 'contact', 'policies', 'faqs'];
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
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
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
    <div className="min-h-screen flex flex-col bg-white text-[#1E1B18] font-sans antialiased selection:bg-[#E8C9C5] selection:text-[#1E1B18]">
      
      {/* Header with Appointment Notice & Page Navigation */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenBooking={handleOpenBooking}
        onOpenQuote={handleOpenQuote}
        onOpenContact={handleOpenContact}
      />

      {/* Main Multi-Page Content Area */}
      <main className="flex-grow">
        {(currentTab === 'home' || currentTab === '') && (
          <HomePage
            onOpenBooking={handleOpenBooking}
            onOpenQuote={handleOpenQuote}
            onNavigateToTab={handleSelectTab}
          />
        )}

        {currentTab === 'pricing' && (
          <PricingPage
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

        {currentTab === 'how-it-works' && (
          <HowItWorksPage
            onOpenBooking={handleOpenBooking}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentTab === 'loan-signing' && (
          <LoanSigningPage
            onOpenQuote={handleOpenQuote}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentTab === 'contact' && (
          <ContactPage
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
        onOpenBooking={handleOpenBooking}
        onOpenQuote={handleOpenQuote}
        onOpenContact={handleOpenContact}
      />

      {/* Modals */}
      <ServiceSelectorModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
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

