import { FAQItem, ServiceItem } from '../types';

export const BRAND_INFO = {
  name: 'SignatureOne Mobile Notary',
  tagline: 'Trusted. Professional. Convenient.',
  slogan: 'Bringing Notary Services To You',
  established: '2016',
  zipCode: '75166',
  city: 'Lavon, Texas',
  serviceAddress: 'Mclendon Rd, Lavon, TX 75166',
  addressFormatted: 'Mclendon Rd, Lavon, TX 75166',
  mailingAddress: '5900 Balcones Dr, Ste 165, Austin, TX',
  phone: '(972) 853-1513',
  phoneTel: 'tel:+19728531513',
  email: 'booking@sonotary.com',
  bookingEmail: 'booking@sonotary.com',
  infoEmail: 'info@sonotary.com',
  legalEmail: 'legal@sonotary.com',
  phonePlaceholder: '(972) 853-1513',
  emailPlaceholder: 'booking@sonotary.com',
  facebookPlaceholder: 'facebook.com/SignatureOneNotary',
  appointmentNotice: 'All SignatureOne services are available by appointment only. Walk-ins are not accepted.',
  disclaimer: 'SignatureOne Mobile Notary is not an attorney licensed to practice law in Texas and may not give legal advice or accept fees for legal advice.',
  feeTransparencyStatement: 'SignatureOne business and convenience service fees are separate from applicable Texas statutory notarial fees. All applicable charges are disclosed before booking and itemized on the final receipt.'
};

export const PRICING_DATA = {
  depositGeneral: 10,
  depositLoanClosing: 20,
  depositAmount: 10,
  statutoryNotaryFee: 10,
  inPersonFee: 15,
  mobileFee: 35,
  ronFee: 25,
  afterHoursFee: 25,
  loanSigningBaseFee: 50,
  printingFeePerPage: 1,
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
    title: 'In-Person Notary',
    subtitle: 'Designated Meeting Location: Wylie, TX 75098',
    baseFee: '$15.00',
    feeNote: 'Convenience Fee + statutory notarial fees',
    description: 'Meet at our designated local location in Wylie, TX 75098 for prompt in-person document notarization.',
    highlights: [
      'Designated local meeting location in Wylie, TX 75098',
      'Ideal for single documents, vehicle transfers, or affidavits',
      'Reserved 15–30 minute appointment slot',
      '$10 booking deposit reserves your time'
    ],
    calendlyPlaceholder: ''
  },
  {
    id: 'local-mobile',
    type: 'Mobile Notary',
    title: 'Mobile Notary',
    subtitle: '12-Mile Travel Radius from Lavon, TX',
    baseFee: '$35.00',
    feeNote: 'Mobile Service Fee + statutory notarial fees',
    description: 'We travel directly to your home, office, hospital, nursing facility, or public meeting place.',
    highlights: [
      'Travel up to 12 miles from Lavon (ZIP 75166)',
      'Serving Lavon, Wylie, Nevada, Josephine, Royse City, Fate & more',
      'Reliable, punctual mobile arrival with verified ETA',
      '$10 booking deposit reserves your time'
    ],
    calendlyPlaceholder: ''
  },
  {
    id: 'ron',
    type: 'Remote Online (RON)',
    title: 'Remote Online Notarization',
    subtitle: 'Anywhere within the United States',
    baseFee: '$25.00',
    feeNote: 'RON Service Fee + statutory notarial fees',
    description: 'Connect securely from your smartphone, tablet, or computer via BlueNotary for legal online notarization anywhere in the country.',
    highlights: [
      'Remote Online Notarization is available anywhere in the U.S.',
      'No additional travel fee',
      'Secure ID credential analysis & identity proofing',
      'Instant tamper-evident digital document download',
      '$10 booking deposit reserves your time'
    ],
    calendlyPlaceholder: ''
  },
  {
    id: 'loan-signing',
    type: 'Loan Closings / Large Packages',
    title: 'Loan Signing / Closings',
    subtitle: 'Title, Escrow & Private Clients',
    baseFee: 'Starting at $50+',
    feeNote: 'Custom quote required',
    description: 'Professional signing execution for real estate purchases, refinances, seller packages, and large document sets.',
    highlights: [
      'Purchases, refinances, HELOCs, and seller packages',
      'Document printing, package preparation & scanbacks',
      'Document drop-off & delivery coordination',
      '$20 booking deposit for loan closings'
    ],
    calendlyPlaceholder: ''
  }
];

export const AFTER_HOURS_DATA = {
  title: 'After-Hours Remote Online Notarization',
  hours: 'Evenings up to 10:00 PM Central Time',
  fee: '+$25.00 Evening Convenience Fee',
  advanceNotice: 'By advance reservation'
};

export const LOAN_SIGNING_DATA = {
  workflow: [
    {
      step: 1,
      title: 'Send Assignment',
      description: 'Receive closing package and assignment instructions from title company, escrow officer, or lender.'
    },
    {
      step: 2,
      title: 'Review / Prepare',
      description: 'Verify documents, check stipulations, prepare document package, and coordinate appointment timing.'
    },
    {
      step: 3,
      title: 'Sign & Notarize',
      description: 'Execute signing systematically with signers, ensuring all required signatures, initials, and Texas notarial certificates are complete.'
    },
    {
      step: 4,
      title: 'Scanbacks / Return',
      description: 'Complete prompt scanbacks for escrow review and deliver/ship documents according to instructions.'
    }
  ],
  packages: [
    'Loan Signing Services',
    'Real Estate Closing Signings',
    'Large Document Packages',
    'Document Printing',
    'Package Preparation',
    'Scanbacks',
    'Travel / Mobile Signing',
    'Document Drop-Off / Delivery',
    'Other assignment-specific signing support'
  ]
};

export const POLICY_TERMS = [
  {
    title: 'Booking Deposits',
    detail: 'A booking deposit is required for certain appointments to reserve your requested time ($10 for General Notary, $20 for Loan Closings/Large Package).',
    emphasis: 'Reserves appointment time'
  },
  {
    title: '48 Hours or More Notice',
    detail: 'When cancelled at least 48 hours before the scheduled appointment, you may be eligible for cancellation accommodation stated during booking.',
    emphasis: 'Eligible for cancellation terms'
  },
  {
    title: 'Less Than 48 Hours Notice',
    detail: 'Cancellations made less than 48 hours before the appointment may result in forfeiture of the booking deposit and/or applicable charges.',
    emphasis: 'Deposit forfeiture applies'
  },
  {
    title: 'No-Shows & Completed Services',
    detail: 'Failure to appear may be treated as a no-show. Once completed, service fees are non-refundable. For service errors, contact info@sonotary.com.',
    emphasis: 'Error correction at info@sonotary.com'
  }
];

export const OPERATING_HOURS = [
  { days: 'In Person', hours: 'Mon–Wed: 1:00 PM – 6:00 PM CT · Saturday: 10:00 AM – 1:00 PM CT' },
  { days: 'Mobile', hours: 'Tue & Thu: 10:00 AM – 2:00 PM CT · Friday: 12:00 PM – 2:00 PM CT' },
  { days: 'RON (Remote Online Notary)', hours: 'Mon–Fri: 10:00 AM – 7:00 PM CT · Saturday: 11:00 AM – 1:00 PM CT' },
  { days: 'RON (Remote Online Notary) - After Hours', hours: 'Mon–Fri: 7:00 PM – 10:00 PM CT · Saturday: 1:00 PM – 10:00 PM CT · Sunday: 10:30 AM – 8:00 PM CT' }
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
    area: 'Designated Local Meeting Location: Wylie, TX 75098',
    description: 'Convenient local in-person meeting in Wylie, TX 75098.',
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
    area: 'Anywhere within the United States',
    description: 'Connect securely from anywhere in the United States online via certified video platform.',
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
    a: 'Yes. As a certified Loan Signing Agent (LSA), SignatureOne works with title companies, escrow officers, lenders, and borrowers for purchases, refinances, HELOCs, and seller packages with professional package preparation, mobile signing, and scanbacks.',
    question: 'Do you handle real estate and loan signings?',
    answer: 'Yes. As a certified Loan Signing Agent (LSA), SignatureOne works with title companies, escrow officers, lenders, and borrowers for purchases, refinances, HELOCs, and seller packages with professional package preparation, mobile signing, and scanbacks.'
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

export const APPOINTMENT_DURATIONS = [
  {
    duration: '15-20 Min',
    service: 'In-Person Notary',
    details: '1-3 documents with standard notarization at our designated Wylie location.'
  },
  {
    duration: '30-45 Min',
    service: 'Mobile Notary',
    details: 'Travel to your residence, business, hospital, or public meeting place.'
  },
  {
    duration: '15-30 Min',
    service: 'Remote Online (RON)',
    details: 'Encrypted ID verification and digital signature session on BlueNotary.'
  },
  {
    duration: '45-90 Min',
    service: 'Loan Closings / Large Packages',
    details: 'Full closing execution, document verification, and scanback preparation.'
  }
];

export const FAQ_DATA = FAQ_ITEMS;
