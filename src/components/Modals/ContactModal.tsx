import React, { useState } from 'react';
import { X, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, AlertCircle, Loader2 } from 'lucide-react';
import { BRAND_INFO, OPERATING_HOURS } from '../../data/notaryData';
import { ContactFormData } from '../../types';
import { submitContactInquiry } from '../../lib/api';

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      await submitContactInquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        serviceInterest: formData.serviceInterest,
        message: formData.message,
      });

      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage("We couldn't send your message. Please try again or call us at (972) 853-1513.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#27272A]/60 backdrop-blur-xs transition-opacity">
      <div
        id="contact-dialog"
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-lg bg-[#FFFFFF] rounded-2xl shadow-2xl border border-[#E4E4E7] overflow-hidden"
      >
        {/* Header */}
        <div className="bg-[#FAF8F9] p-6 border-b border-[#E4E4E7] flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide bg-[#E8C9C5]/70 text-[#27272A] mb-2">
              <MessageSquare className="w-3.5 h-3.5 text-[#B9827B]" />
              Get In Touch
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#27272A]">
              Contact SignatureOne
            </h3>
            <p className="text-xs text-[#71717A] mt-1">
              Have questions about your documents or scheduling? We’re here to help.
            </p>
          </div>
          <button
            id="close-contact-modal-btn"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-full text-[#71717A] hover:text-[#27272A] hover:bg-[#E4E4E7]/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 px-4 space-y-4">
              <div className="w-16 h-16 bg-[#FAF8F9] text-[#B9827B] border border-[#E8C9C5] rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-2xl font-semibold text-[#27272A]">
                Message Sent
              </h4>
              <p className="text-sm text-[#52525B] max-w-md mx-auto leading-relaxed">
                Thank you for reaching out. We'll get back to you as soon as possible.
              </p>
              <div className="pt-4">
                <button
                  id="contact-success-done-btn"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#27272A] text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#3F3F46] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              {/* Direct Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 bg-[#FAF8F9] rounded-xl border border-[#E4E4E7] text-xs">
                <div className="flex items-center gap-2 text-[#27272A]">
                  <Phone className="w-4 h-4 text-[#B9827B] shrink-0" />
                  <div>
                    <span className="block text-[10px] text-[#71717A] uppercase font-semibold">Phone</span>
                    <a
                      href="tel:+19728531513"
                      className="font-medium text-[#18181B] hover:text-[#B9827B] hover:underline"
                    >
                      (972) 853-1513
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-[#27272A]">
                  <Mail className="w-4 h-4 text-[#B9827B] shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="block text-[10px] text-[#71717A] uppercase font-semibold">Inquiries</span>
                    <a href="mailto:info@sonotary.com" className="block font-medium hover:text-[#B9827B] text-[11px]">info@sonotary.com</a>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form
                name="contact-inquiry"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-3.5"
              >
                <input type="hidden" name="form-name" value="contact-inquiry" />
                <p className="hidden" aria-hidden="true">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>

                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#27272A] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-white border border-[#E4E4E7] rounded-xl focus:outline-none focus:border-[#B9827B] text-[#27272A]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#27272A] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs bg-white border border-[#E4E4E7] rounded-xl focus:outline-none focus:border-[#B9827B] text-[#27272A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#27272A] mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(972) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs bg-white border border-[#E4E4E7] rounded-xl focus:outline-none focus:border-[#B9827B] text-[#27272A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#27272A] mb-1">
                    Service of Interest
                  </label>
                  <select
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-white border border-[#E4E4E7] rounded-xl focus:outline-none focus:border-[#B9827B] text-[#27272A]"
                  >
                    <option value="In-Person Notary">In-Person Notary (Wylie, TX)</option>
                    <option value="Mobile Notary">Local Mobile Notary (We Travel)</option>
                    <option value="Remote Online Notary (RON)">Remote Online Notary (RON)</option>
                    <option value="After-Hours RON">After-Hours Online Notary</option>
                    <option value="Loan Signing Agent">Loan Signing / Title Closing</option>
                    <option value="General Question">General Inquiry / Question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#27272A] mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={3}
                    name="message"
                    required
                    placeholder="Describe your document type, number of signatures, timing, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-white border border-[#E4E4E7] rounded-xl focus:outline-none focus:border-[#B9827B] text-[#27272A]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="submit-contact-form-btn"
                    className="w-full py-3 px-6 bg-[#B9827B] hover:bg-[#a66f68] active:scale-[0.99] disabled:opacity-60 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
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
