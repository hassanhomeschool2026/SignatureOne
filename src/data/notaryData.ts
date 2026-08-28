import { FAQItem, ServiceItem } from '../types';

export const BRAND_INFO = {
  name: 'SignatureOne Mobile Notary',
  tagline: 'Trusted. Professional. Convenience.',
  slogan: 'Bringing Notary Services To You',
  established: '2016',
  zipCode: '75166',
  city: 'Lavon, Texas',
  phone: '(469) 555-0192',
  email: 'appointments@signatureonenotary.com',
  phonePlaceholder: '(469) 555-0192',
  emailPlaceholder: 'appointments@signatureonenotary.com',
  facebookPlaceholder: 'facebook.com/SignatureOneNotary',
  appointmentNotice: 'All SignatureOne services are available by appointment only. Walk-ins are not accepted.',
  disclaimer: 'SignatureOne Mobile Notary is not an attorney licensed to practice law in Texas and may not give legal advice or accept fees for legal advice.',
  feeTransparencyStatement: 'SignatureOne service and convenience fees are separate from applicable Texas statutory notarial fees. All applicable charges are disclosed before the appointment and itemized on the final receipt.'
};

export const PRICING_DATA = {
  depositAmount: 10,
  statutoryNotaryFee: 10,
  inPersonFee: 15,
  mobileFee: 35,
  ronFee: 25,
  afterHoursFee: 25,
  loanSigningBaseFee: 50,
};

export interface ServiceDetail {
  id: string;
  type: string;
  title: string;
  subtitle: string;
  baseFee: string;
  feeNote: string;
  description: string;
  highlights: string[];
  calendlyPlaceholder: string;
}

export const SERVICES: ServiceDetail[] = [
  {
    id: 'in-person',
    type: 'In-Person',
    title: 'You Come to Me (In-Person)',
    subtitle: 'Lavon Designated Meeting Location',
    baseFee: '$15.00',
    feeNote: '+ $10/signature',
    description: 'Convenient in-person notary appointments at our designated local meeting location in Lavon, TX 75166.',
    highlights: [
      'Dedicated private meeting table in Lavon area',
      'Ideal for single documents or quick affidavits',
      '15-to-30 minute reserved time block',
      '$10 deposit credited toward final balance',
    ],
    calendlyPlaceholder: '[IN PERSON CALENDLY LINK]'
  },
  {
    id: 'local-mobile',
    type: 'Mobile Travel',
    title: 'Local Mobile Notary (I Come to You)',
    subtitle: 'Up to 12-Mile Travel Radius',
    baseFee: '$35.00',
    feeNote: '+ $10/signature',
    description: 'We travel directly to your home, workplace, coffee shop, healthcare facility, or senior living residence.',
    highlights: [
      '12-mile radius from Lavon ZIP 75166',
      'Servicing Wylie, Nevada, Josephine, Royse City, Fate & more',
      'Punctual mobile arrival with verified ETA',
      '$10 deposit credited toward final balance',
    ],
    calendlyPlaceholder: '[MOBILE NOTARY CALENDLY LINK]'
  },
  {
    id: 'ron',
    type: 'Remote Online',
    title: 'Remote Online Notarization (RON)',
    subtitle: 'BlueNotary Video Platform',
    baseFee: '$25.00',
    feeNote: '+ $10/signature',
    description: 'Legally notarize documents online from your smartphone, tablet, or laptop from anywhere in Texas or worldwide.',
    highlights: [
      'Biometric credential analysis & KBA identity proofing',
      'Instant tamper-evident digital PDF download',
      '10-year encrypted audio-video record storage',
      '$10 deposit credited toward final balance',
    ],
    calendlyPlaceholder: '[RON CALENDLY LINK]'
  },
  {
    id: 'loan-signing',
    type: 'Title & Escrow',
    title: 'Loan Signing & Real Estate Closings',
    subtitle: 'Purchases, Refinances & Sellers',
    baseFee: 'Starting at $50.00',
    feeNote: 'Tailored Quote',
    description: 'Complete real estate closing package execution for title companies, escrow officers, lenders, and signers.',
    highlights: [
      'Commercial dual-tray laser printing (Letter/Legal)',
      'Same-day scanbacks & FedEx/UPS carrier dropoff',
      'Background-screened & E&O insured LSA',
      'Quote based on page count and travel distance',
    ],
    calendlyPlaceholder: '[LSA QUOTE FORM LINK]'
  }
];

export const AFTER_HOURS_DATA = {
  title: 'After-Hours Remote Online Notarization',
  hours: 'Evenings up to 9:00 PM Central Time (7 Days a Week)',
  fee: '+$25.00 Evening Convenience Fee ($50.00 base platform total)',
  advanceNotice: 'Must be booked at least 2 hours in advance'
};

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: 'Choose Service & Book',
    description: 'Select In-Person ($15), Local Mobile ($35), or Online RON ($25). Place your $10 booking deposit to guarantee your reserved slot.',
    highlight: '$10 deposit applies directly to your final bill'
  },
  {
    step: 2,
    title: 'Prepare Valid Photo ID',
    description: 'Have an unexpired, government-issued photo ID (Texas Driver License, US Passport, Military ID). Do NOT sign your document before the appointment.',
    highlight: 'Signer must appear in person or on video'
  },
  {
    step: 3,
    title: 'Verify & Execute Signing',
    description: 'The notary verifies your identity, confirms willingness, witnesses your signature, administers oaths if required, and applies the official seal.',
    highlight: 'Strict Texas notarial compliance'
  },
  {
    step: 4,
    title: 'Receive Sealed Document & Receipt',
    description: 'Take your embossed or digitally signed document. Settle the remaining balance and receive an instant, itemized invoice receipt.',
    highlight: 'Itemized receipt issued instantly'
  }
];

export const APPOINTMENT_DURATIONS = [
  {
    service: 'In-Person Notary',
    duration: '15–30 Minutes',
    details: 'Single document or 1–2 signatures with valid photo ID ready.',
    note: 'Single document or 1–2 signatures with valid photo ID ready.'
  },
  {
    service: 'Local Mobile Notary',
    duration: '30–45 Minutes',
    details: 'Travel to your location within 12 miles of Lavon.',
    note: 'Travel to your location within 12 miles of Lavon.'
  },
  {
    service: 'Remote Online (RON)',
    duration: '15–20 Minutes',
    details: 'KBA authentication and live audio-video signing session.',
    note: 'KBA authentication and live audio-video signing session.'
  },
  {
    service: 'Loan Signings & Closings',
    duration: '60–90 Minutes',
    details: 'Full purchase, refinance, HELOC, or seller package execution.',
    note: 'Full purchase, refinance, HELOC, or seller package execution.'
  }
];

export const LOAN_SIGNING_DATA = {
  workflow: [
    {
      step: 1,
      title: 'Package Prep & Verification',
      description: 'Download closing docs, review for special lender stipulations, and verify all signer names and critical dates.'
    },
    {
      step: 2,
      title: 'Dual-Tray Laser Printing',
      description: 'Print on high-speed laser equipment with exact letter and legal size paper separation as required by title.'
    },
    {
      step: 3,
      title: 'Punctual Mobile Execution',
      description: 'Guide signers systematically through the stack, ensuring complete signatures, initials, and Texas certificates.'
    },
    {
      step: 4,
      title: 'Scanbacks & Tracked Shipping',
      description: 'Perform immediate high-resolution scanbacks for escrow review and drop packages before daily carrier cutoffs.'
    }
  ],
  packages: [
    'Purchase Closings (Buyer / Borrower)',
    'Seller Conveyance & Deed Sets',
    'Refinance Loans (Rate/Term & Cash-Out)',
    'HELOCs & Second Mortgages',
    'Reverse Mortgage Applications & Closings',
    'Commercial Real Estate Loan Packages',
    'Deed of Trust Modifications & Releases',
    'Title Company Signing Assignments'
  ]
};

export const POLICY_TERMS = [
  {
    title: '$10 Booking Deposit',
    detail: 'A $10 deposit is required at booking to reserve your dedicated appointment time. This deposit is credited 100% to your final invoice.',
    emphasis: 'Credited directly to final balance'
  },
  {
    title: '48-Hour Cancellation Refund',
    detail: 'Cancel at least 48 hours before your appointment for a 100% full refund of your $10 deposit. Cancellations with less than 48 hours notice forfeit the deposit.',
    emphasis: '100% refund if 48+ hrs ahead'
  },
  {
    title: '24-Hour Free Reschedule',
    detail: 'Need a new time? Reschedule with at least 24 hours advance notice and your $10 deposit transfers automatically to your new appointment.',
    emphasis: 'Deposit transfers to new date'
  },
  {
    title: 'No-Show & Late Policy',
    detail: 'To respect all clients, appointments delayed by more than 15 minutes without contact will be cancelled and forfeit the booking deposit.',
    emphasis: '15-minute grace period'
  }
];

export const OPERATING_HOURS = [
  { days: 'Monday – Wednesday', hours: '1:00 PM – 6:30 PM CT (In-Person & Mobile)' },
  { days: 'Thursday – Friday', hours: 'Remote Online (RON) & Scheduled LSA Closings' },
  { days: 'Saturday', hours: '10:00 AM – 1:00 PM CT (By Appointment)' },
  { days: 'Sunday', hours: 'Evening RON by Advance Appointment Only' },
  { days: 'Evening RON (7 Days)', hours: 'Available up to 9:00 PM CT (+$25 after-hours fee)' }
];

export const SERVICE_AREA_COMMUNITIES = [
  { name: 'Lavon', zip: '75166', distanceMiles: '0 (Base)' },
  { name: 'Nevada', zip: '75173', distanceMiles: '4.5' },
  { name: 'Josephine', zip: '75164', distanceMiles: '6.8' },
  { name: 'Copeville', zip: '75121', distanceMiles: '5.2' },
  { name: 'Wylie', zip: '75098', distanceMiles: '8.4' },
  { name: 'St. Paul', zip: '75098', distanceMiles: '9.1' },
  { name: 'Farmersville', zip: '75442', distanceMiles: '10.5' },
  { name: 'Royse City', zip: '75189', distanceMiles: '11.2' },
  { name: 'Fate', zip: '75132', distanceMiles: '11.8' },
  { name: 'Rockwall (North)', zip: '75087', distanceMiles: '12.0' }
];

export const DOCUMENT_CATEGORIES = [
  {
    category: 'Estate & Personal Planning',
    items: [
      'Powers of Attorney (Financial & Medical POA)',
      'Statutory Durable Power of Attorney',
      'Living Wills & Advance Healthcare Directives',
      'HIPAA Authorizations & Medical Releases',
      'Trust Agreements & Certificates of Trust'
    ]
  },
  {
    category: 'Real Estate & Property',
    items: [
      'Warranty Deeds & Special Warranty Deeds',
      'Quitclaim Deeds & Lady Bird Deeds',
      'Deeds of Trust & Mortgages',
      'Release of Liens & Subordinations',
      'Easements & Property Boundary Agreements'
    ]
  },
  {
    category: 'Financial & Business',
    items: [
      'Commercial Contracts & Vendor Agreements',
      'Articles of Incorporation & LLC Resolutions',
      'Promissory Notes & Loan Agreements',
      'Vehicle Title Transfers & Texas Form 130-U',
      'Bills of Sale & Equipment Transfers'
    ]
  },
  {
    category: 'Affidavits & Sworn Oaths',
    items: [
      'General Affidavits & Jurats',
      'Affidavit of Heirship',
      'Affidavit of Financial Support',
      'Sworn Verification & Declarations',
      'Administering Oaths for Depositions'
    ]
  },
  {
    category: 'Family & Parental Directives',
    items: [
      'Minor Child Travel Consent Forms',
      'School Authorization & Guardianship Directives',
      'Passport Parental Consent (DS-3053)',
      'Adoption Documents & Identity Verification'
    ]
  },
  {
    category: 'Legal & Court Documents',
    items: [
      'Waiver of Service & Divorce Decrees',
      'Notice of Non-Responsibility',
      'Certified Copies of Non-Recordable Documents',
      'Proof of Execution by Subscribing Witness'
    ]
  }
];

export const LOAN_SIGNING_SPECIALTIES = [
  {
    title: 'Purchase Closings',
    desc: 'Buyer closing packages, warranty deeds, and associated lender requirements.'
  },
  {
    title: 'Seller Packages',
    desc: 'Deed conveyance, payoff authorizations, and closing disclosure documents.'
  },
  {
    title: 'Refinances',
    desc: 'Rate-and-term refinances, cash-out refinances, notes, and mortgage security instruments.'
  },
  {
    title: 'HELOCs & 2nd Mortgages',
    desc: 'Home equity lines of credit and second lien mortgage agreements.'
  },
  {
    title: 'Reverse Mortgages',
    desc: 'Specialized borrower sign-offs with patience and document care.'
  },
  {
    title: 'Title Company Assignments',
    desc: 'Printing loan packages, conducting seamless signings, scanbacks, and timely courier drop-off.'
  }
];

export const SERVICE_AREAS = [
  {
    name: 'You Come to Me (In-Person)',
    area: 'Designated Local Meeting Location',
    description: 'Convenient local meeting location in the Lavon area (coordinates shared upon booking).',
    fee: '$15 Convenience Fee + notarial fees'
  },
  {
    name: 'Local Mobile Notary',
    area: 'Within 12 Miles of ZIP 75166',
    description: 'Lavon, Wylie, Nevada, Josephine, Royse City, Copeville, St. Paul, and surrounding nearby communities.',
    fee: '$35 Convenience Fee + notarial fees'
  },
  {
    name: 'Extended / Business Mobile',
    area: 'Up to 20 Miles Beyond Normal Radius',
    description: 'Extended Collin/Rockwall/Hunt/Dallas county regions for qualifying loan signings and title assignments.',
    fee: 'Starting at $50 + notarial fees'
  },
  {
    name: 'Remote Online Notary (RON)',
    area: 'Statewide & Remote Access',
    description: 'Connect securely from anywhere online via BlueNotary platform.',
    fee: '$25 RON Fee + notarial fees (+$25 after-hours)'
  }
];

export interface FAQItemDetail {
  id: number;
  category: 'General & Mobile' | 'Remote Online (RON)' | 'Booking & Deposits' | 'Legal Scope';
  q: string;
  a: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItemDetail[] = [
  {
    id: 1,
    category: 'General & Mobile',
    q: 'What is the role of a Texas Notary Public?',
    a: 'A Texas Notary Public serves as an impartial state-appointed official who verifies the identity of signers, ensures documents are signed willingly without coercion, and administers oaths or affirmations when mandated by law to prevent fraud.',
    question: 'What is the role of a Texas Notary Public?',
    answer: 'A Texas Notary Public serves as an impartial state-appointed official who verifies the identity of signers, ensures documents are signed willingly without coercion, and administers oaths or affirmations when mandated by law to prevent fraud.'
  },
  {
    id: 2,
    category: 'Booking & Deposits',
    q: 'Do I need an appointment, or can I walk in?',
    a: 'All SignatureOne services are strictly by appointment only. We do not accept walk-ins to guarantee dedicated, unhurried time for each scheduled client and allow for mobile travel coordination.',
    question: 'Do I need an appointment, or can I walk in?',
    answer: 'All SignatureOne services are strictly by appointment only. We do not accept walk-ins to guarantee dedicated, unhurried time for each scheduled client and allow for mobile travel coordination.'
  },
  {
    id: 3,
    category: 'General & Mobile',
    q: 'What identification is required to notarize my document?',
    a: 'Every signer must present an unexpired, government-issued photo ID. Acceptable IDs include a Texas Driver License, Texas ID card, U.S. Passport, U.S. Military ID, or foreign passport stamped by USCIS. The name on the ID must match the document.',
    question: 'What identification is required to notarize my document?',
    answer: 'Every signer must present an unexpired, government-issued photo ID. Acceptable IDs include a Texas Driver License, Texas ID card, U.S. Passport, U.S. Military ID, or foreign passport stamped by USCIS. The name on the ID must match the document.'
  },
  {
    id: 4,
    category: 'General & Mobile',
    q: 'Should I sign my document before the notary arrives?',
    a: 'No! Do not sign or date your document before meeting with the notary. For acknowledgments, jurats, and oaths, the notary must witness your physical signature or confirm your voluntary acknowledgment in real time.',
    question: 'Should I sign my document before the notary arrives?',
    answer: 'No! Do not sign or date your document before meeting with the notary. For acknowledgments, jurats, and oaths, the notary must witness your physical signature or confirm your voluntary acknowledgment in real time.'
  },
  {
    id: 5,
    category: 'Booking & Deposits',
    q: 'How does the $10 booking deposit work?',
    a: 'The $10 deposit reserves your chosen calendar slot and protects against unscheduled no-shows. It is not an extra charge; the $10 is applied directly to reduce your final balance due at the appointment.',
    question: 'How does the $10 booking deposit work?',
    answer: 'The $10 deposit reserves your chosen calendar slot and protects against unscheduled no-shows. It is not an extra charge; the $10 is applied directly to reduce your final balance due at the appointment.'
  },
  {
    id: 6,
    category: 'Booking & Deposits',
    q: 'What is your cancellation and refund policy?',
    a: 'If you cancel your appointment at least 48 hours in advance, your $10 deposit is 100% refunded. Cancellations made with less than 48 hours notice or missed appointments (no-shows) forfeit the deposit.',
    question: 'What is your cancellation and refund policy?',
    answer: 'If you cancel your appointment at least 48 hours in advance, your $10 deposit is 100% refunded. Cancellations made with less than 48 hours notice or missed appointments (no-shows) forfeit the deposit.'
  },
  {
    id: 7,
    category: 'Booking & Deposits',
    q: 'Can I reschedule my appointment without losing my deposit?',
    a: 'Yes! You receive 1 complimentary reschedule when you notify us at least 24 hours before your scheduled time. Your $10 deposit transfers seamlessly to your new appointment date.',
    question: 'Can I reschedule my appointment without losing my deposit?',
    answer: 'Yes! You receive 1 complimentary reschedule when you notify us at least 24 hours before your scheduled time. Your $10 deposit transfers seamlessly to your new appointment date.'
  },
  {
    id: 8,
    category: 'General & Mobile',
    q: 'What communities are included in your 12-mile mobile radius?',
    a: 'Our standard $35 mobile travel radius covers Lavon (75166), Wylie, Nevada, Josephine, Copeville, St. Paul, Farmersville, Royse City, and Fate. Travel beyond 12 miles is available under our Extended Mobile rate.',
    question: 'What communities are included in your 12-mile mobile radius?',
    answer: 'Our standard $35 mobile travel radius covers Lavon (75166), Wylie, Nevada, Josephine, Copeville, St. Paul, Farmersville, Royse City, and Fate. Travel beyond 12 miles is available under our Extended Mobile rate.'
  },
  {
    id: 9,
    category: 'Remote Online (RON)',
    q: 'How does Remote Online Notarization (RON) work?',
    a: 'Through our secure BlueNotary platform, you join a live, encrypted audio-video call from your phone or computer. You complete automated biometric ID verification, answer security questions, sign electronically, and instantly download the sealed PDF.',
    question: 'How does Remote Online Notarization (RON) work?',
    answer: 'Through our secure BlueNotary platform, you join a live, encrypted audio-video call from your phone or computer. You complete automated biometric ID verification, answer security questions, sign electronically, and instantly download the sealed PDF.'
  },
  {
    id: 10,
    category: 'Remote Online (RON)',
    q: 'Are after-hours evening appointments available?',
    a: 'Yes! Remote Online Notarizations are available 7 days a week up to 9:00 PM Central Time. Evening appointments (after 6:30 PM CT) carry a flat +$25 after-hours fee ($50 total base platform fee).',
    question: 'Are after-hours evening appointments available?',
    answer: 'Yes! Remote Online Notarizations are available 7 days a week up to 9:00 PM Central Time. Evening appointments (after 6:30 PM CT) carry a flat +$25 after-hours fee ($50 total base platform fee).'
  },
  {
    id: 11,
    category: 'General & Mobile',
    q: 'Do you handle real estate and loan signings?',
    a: 'Yes. As a certified Loan Signing Agent (LSA), SignatureOne works with title companies, escrow officers, lenders, and borrowers for purchases, refinances, HELOCs, and seller packages with dual-tray printing and same-day scanbacks.',
    question: 'Do you handle real estate and loan signings?',
    answer: 'Yes. As a certified Loan Signing Agent (LSA), SignatureOne works with title companies, escrow officers, lenders, and borrowers for purchases, refinances, HELOCs, and seller packages with dual-tray printing and same-day scanbacks.'
  },
  {
    id: 12,
    category: 'Legal Scope',
    q: 'Can SignatureOne draft documents or give legal advice?',
    a: 'No. Texas law strictly forbids notaries public who are not licensed attorneys from providing legal advice, explaining legal consequences, drafting legal instruments, or selecting specific legal forms.',
    question: 'Can SignatureOne draft documents or give legal advice?',
    answer: 'No. Texas law strictly forbids notaries public who are not licensed attorneys from providing legal advice, explaining legal consequences, drafting legal instruments, or selecting specific legal forms.'
  },
  {
    id: 13,
    category: 'Booking & Deposits',
    q: 'What payment methods do you accept?',
    a: 'We accept Cash, Zelle, Venmo, and major Debit/Credit cards (Visa, MasterCard, American Express, Discover). An itemized receipt is provided immediately upon payment.',
    question: 'What payment methods do you accept?',
    answer: 'We accept Cash, Zelle, Venmo, and major Debit/Credit cards (Visa, MasterCard, American Express, Discover). An itemized receipt is provided immediately upon payment.'
  },
  {
    id: 14,
    category: 'General & Mobile',
    q: 'What if my document requires witnesses?',
    a: 'If your document requires disinterested witnesses (such as certain medical directives or wills), you may provide your own adult witnesses with valid photo IDs, or notify us during booking so witness arrangements can be coordinated.',
    question: 'What if my document requires witnesses?',
    answer: 'If your document requires disinterested witnesses (such as certain medical directives or wills), you may provide your own adult witnesses with valid photo IDs, or notify us during booking so witness arrangements can be coordinated.'
  }
];

export const FAQ_DATA = FAQ_ITEMS;
