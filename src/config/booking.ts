export const CALENDLY_LINKS = {
  inPerson: 'https://calendly.com/sonotary/general-notary-in-person',
  mobile: 'https://calendly.com/sonotary/general-notary-mobile',
  ron: 'https://calendly.com/sonotary/ron-regular-hours',
  ronAfterHours: 'https://calendly.com/sonotary/ron-remote-online-notary-after-hours',
  loanClosing: 'https://calendly.com/sonotary/ron-loan-closing-large-package',
  loanClosingAfterHours: 'https://calendly.com/sonotary/ron-after-hours-large-package',
  main: 'https://calendly.com/sonotary',
} as const;

export type BookingServiceKey = keyof typeof CALENDLY_LINKS;

export interface BookingOption {
  id: string;
  name: string;
  deposit: string;
  badge?: string;
  url: string;
}

export const BOOKING_OPTIONS: BookingOption[] = [
  {
    id: 'in-person',
    name: 'In-Person Notary',
    deposit: '$10 deposit',
    url: CALENDLY_LINKS.inPerson,
  },
  {
    id: 'mobile',
    name: 'Mobile Notary',
    deposit: '$10 deposit',
    url: CALENDLY_LINKS.mobile,
  },
  {
    id: 'ron',
    name: 'Remote Online Notary',
    deposit: '$10 deposit',
    url: CALENDLY_LINKS.ron,
  },
  {
    id: 'ron-after-hours',
    name: 'After-Hours RON',
    deposit: '$10 deposit',
    url: CALENDLY_LINKS.ronAfterHours,
  },
  {
    id: 'loan-closing',
    name: 'Loan Signing / Closing',
    deposit: '$20 deposit',
    url: CALENDLY_LINKS.loanClosing,
  },
  {
    id: 'loan-closing-after-hours',
    name: 'After-Hours Loan Signing / Closing',
    deposit: '$20 deposit',
    url: CALENDLY_LINKS.loanClosingAfterHours,
  },
];

export const openBookingLink = (url: string) => {
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};
