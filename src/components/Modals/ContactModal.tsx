import React, { useState } from 'react';
import { X, Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';
import { BRAND_INFO } from '../../data/notaryData';
import { ContactFormData } from '../../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'Mobile Notary',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#292727]/60 backdrop-blur-xs transition-opacity">
      <div
        id="contact-dialog"
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-lg bg-[#FFFFFF] rounded-2xl shadow-2xl border border-[#D8CEC7] overflow-hidden"
      >
        {/* Header */}
        <div className="bg-[#F8F4EF] p-6 border-b border-[#D8CEC7] flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide bg-[#E8C9C5]/70 text-[#292727] mb-2">
              <MessageSquare className="w-3.5 h-3.5 text-[#B9827B]" />
              Get In Touch
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#292727]">
              Contact SignatureOne
            </h3>
            <p className="text-xs text-[#786F6A] mt-1">
              Have questions about your documents or scheduling? We’re here to help.
            </p>
          </div>
          <button
            id="close-contact-modal-btn"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-full text-[#786F6A] hover:text-[#292727] hover:bg-[#D8CEC7]/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 px-4 space-y-4">
              <div className="w-16 h-16 bg-[#E8C9C5]/50 text-[#B9827B] rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-2xl font-semibold text-[#292727]">
                Message Sent
              </h4>
              <p className="text-sm text-[#786F6A] max-w-md mx-auto leading-relaxed">
                Thank you for reaching out. We will get back to you promptly during our operating hours.
              </p>
              <div className="pt-4">
                <button
                  id="contact-success-done-btn"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#292727] text-white font-medium rounded-lg hover:bg-[#3d3a3a] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              {/* Direct Info Placeholders */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 bg-[#F8F4EF] rounded-xl border border-[#D8CEC7] text-xs">
                <div className="flex items-center gap-2 text-[#292727]">
                  <Phone className="w-4 h-4 text-[#B9827B] shrink-0" />
                  <div>
                    <span className="block text-[10px] text-[#786F6A] uppercase font-semibold">Phone</span>
                    <span className="font-medium">{BRAND_INFO.phonePlaceholder}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#292727]">
                  <Mail className="w-4 h-4 text-[#B9827B] shrink-0" />
                  <div>
                    <span className="block text-[10px] text-[#786F6A] uppercase font-semibold">Email</span>
                    <span className="font-medium">{BRAND_INFO.emailPlaceholder}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#292727] sm:col-span-2 pt-1 border-t border-[#D8CEC7]/60">
                  <Clock className="w-4 h-4 text-[#B9827B] shrink-0" />
                  <div>
                    <span className="block text-[10px] text-[#786F6A] uppercase font-semibold">Service Hours</span>
                    <span className="font-medium text-[11px]">
                      In-Person &amp; Mobile: Mon–Wed 1–6:30 PM, Sat 10 AM–1 PM CT · RON: Mon–Fri 10 AM–7 PM, Sat–Sun 11 AM–5 PM CT
                    </span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#292727] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm bg-[#F8F4EF]/50 border border-[#D8CEC7] rounded-lg focus:outline-none focus:border-[#B9827B] text-[#292727]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#292727] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm bg-[#F8F4EF]/50 border border-[#D8CEC7] rounded-lg focus:outline-none focus:border-[#B9827B] text-[#292727]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#292727] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(214) 555-0100"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm bg-[#F8F4EF]/50 border border-[#D8CEC7] rounded-lg focus:outline-none focus:border-[#B9827B] text-[#292727]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#292727] mb-1">
                    Service of Interest
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm bg-[#F8F4EF]/50 border border-[#D8CEC7] rounded-lg focus:outline-none focus:border-[#B9827B] text-[#292727]"
                  >
                    <option value="Meet Me (In-Person Notary)">You Come to Me (In-Person)</option>
                    <option value="Mobile Notary">I Come to You (Local Mobile Notary)</option>
                    <option value="Online Notary (RON)">Online Notary (Remote Online Notarization)</option>
                    <option value="After-Hours RON">After-Hours Online Notary</option>
                    <option value="Loan Signing Agent">Loan Signing / Title Closing</option>
                    <option value="Other">General Inquiries / Question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#292727] mb-1">
                    How can we help? *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about your document type or scheduling questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm bg-[#F8F4EF]/50 border border-[#D8CEC7] rounded-lg focus:outline-none focus:border-[#B9827B] text-[#292727]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    id="submit-contact-form-btn"
                    className="w-full py-3 px-6 bg-[#B9827B] hover:bg-[#a66f68] active:scale-[0.99] text-white font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
