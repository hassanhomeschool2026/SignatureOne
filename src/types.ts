export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  description: string;
  pricingLabel: string;
  feeStructure: {
    convenienceFee: string;
    statutoryNote: string;
  };
  duration: string;
  hours: string;
  calendlyPlaceholder: string;
  isPopular?: boolean;
  highlightText?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'booking' | 'pricing' | 'policies';
}

export interface QuoteFormData {
  fullName: string;
  companyName?: string;
  email: string;
  phone: string;
  serviceType: 'purchase' | 'refinance' | 'heloc' | 'seller_buyer' | 'reverse_mortgage' | 'commercial' | 'extended_mobile' | 'other';
  signerCount: string;
  pageCountApprox: string;
  signingLocation: string;
  preferredDate: string;
  preferredTime: string;
  requiresScanbacks: boolean;
  specialInstructions?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
}

export interface CalendlyLinks {
  generalNotary: string;
  mobileNotary: string;
  ronNotary: string;
  afterHoursRon: string;
  lsaQuote: string;
}
