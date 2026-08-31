import React, { useState } from 'react';
import { 
  BRAND_INFO, 
  OPERATING_HOURS 
} from '../data/notaryData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  FileText,
  Calendar,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { submitContactInquiry } from '../lib/api';

interface ContactPageProps {
  onOpenBooking: (serviceTitle?: string, fee?: string, placeholder?: string) => void;
  onOpenQuote: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onOpenBooking,
  onOpenQuote,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'In-Person Notary',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-16">
      
      {/* PAGE HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E1B18] tracking-tight font-heading uppercase">
          Contact SignatureOne Notary
        </h1>
        <p className="text-sm sm:text-base text-[#554E4A] leading-relaxed">
          Reach out for appointment coordination, loan signing quotes, or document inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Information & Channels */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Main Info Card */}
          <div className="bg-white rounded-3xl border border-[#F0EAE6] p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="border-b border-[#F0EAE6] pb-4">
              <h2 className="text-xl font-bold text-[#1E1B18] font-heading uppercase">
                Direct Contact Information
              </h2>
              <p className="text-xs text-[#786F6A] mt-1">
                Appointments required. Walk-ins are not accepted.
              </p>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-xl bg-[#FAF6F5] flex items-center justify-center text-[#B9827B] shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </span>
              <div>
                <strong className="block text-sm font-bold text-[#1E1B18]">Location</strong>
                <p className="text-xs text-[#554E4A]">SignatureOne Notary</p>
                <p className="text-xs text-[#554E4A]">Lavon, TX 75166</p>
                <p className="text-[11px] text-[#786F6A] mt-0.5">
                  Designated in-person meetings in Wylie, TX · Mobile service across Collin County
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 pt-2 border-t border-[#F0EAE6]">
              <span className="w-10 h-10 rounded-xl bg-[#FAF6F5] flex items-center justify-center text-[#B9827B] shrink-0 mt-0.5">
                <Phone className="w-5 h-5" />
              </span>
              <div>
                <strong className="block text-sm font-bold text-[#1E1B18]">Telephone</strong>
                <a 
                  href={BRAND_INFO.phoneTel} 
                  className="text-base font-extrabold text-[#1E1B18] hover:text-[#B9827B] transition-colors"
                >
                  (972) 853-1513
                </a>
                <p className="text-[11px] text-[#786F6A]">Call or text for questions and scheduling</p>
              </div>
            </div>

            {/* Dedicated Email Addresses */}
            <div className="space-y-3 pt-4 border-t border-[#F0EAE6]">
              <strong className="block text-xs font-bold uppercase tracking-wider text-[#1E1B18]">
                Dedicated Email Departments
              </strong>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <a
                  href="mailto:booking@sonotary.com"
                  className="p-3 rounded-xl bg-[#FAF6F5] hover:bg-[#F0EAE6] border border-[#F0EAE6] transition-all block"
                >
                  <span className="text-[10px] uppercase font-bold text-[#B9827B] block">Appointments &amp; Booking</span>
                  <span className="font-semibold text-[#1E1B18]">booking@sonotary.com</span>
                </a>

                <a
                  href="mailto:info@sonotary.com"
                  className="p-3 rounded-xl bg-[#FAF6F5] hover:bg-[#F0EAE6] border border-[#F0EAE6] transition-all block"
                >
                  <span className="text-[10px] uppercase font-bold text-[#B9827B] block">General &amp; Service Errors</span>
                  <span className="font-semibold text-[#1E1B18]">info@sonotary.com</span>
                </a>

                <a
                  href="mailto:upload@sonotary.com"
                  className="p-3 rounded-xl bg-[#FAF6F5] hover:bg-[#F0EAE6] border border-[#F0EAE6] transition-all block"
                >
                  <span className="text-[10px] uppercase font-bold text-[#B9827B] block">Document Printing / Uploads</span>
                  <span className="font-semibold text-[#1E1B18]">upload@sonotary.com</span>
                </a>

                <a
                  href="mailto:legal@sonotary.com"
                  className="p-3 rounded-xl bg-[#FAF6F5] hover:bg-[#F0EAE6] border border-[#F0EAE6] transition-all block"
                >
                  <span className="text-[10px] uppercase font-bold text-[#B9827B] block">Legal &amp; Policy Requests</span>
                  <span className="font-semibold text-[#1E1B18]">legal@sonotary.com</span>
                </a>
              </div>
            </div>

          </div>

          {/* Operating Hours */}
          <div className="bg-[#FAF6F5] rounded-3xl border border-[#F0EAE6] p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#B9827B]" />
              <h3 className="text-base font-bold text-[#1E1B18] font-heading uppercase">
                Hours of Operation
              </h3>
            </div>

            <div className="space-y-3 text-xs">
              {OPERATING_HOURS.map((h, i) => (
                <div key={i} className="bg-white rounded-xl p-3 border border-[#F0EAE6]">
                  <span className="font-bold text-[#1E1B18] block">{h.days}</span>
                  <span className="text-[#554E4A]">{h.hours}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Send a Message Form */}
        <div className="lg:col-span-6 bg-white rounded-3xl border border-[#F0EAE6] p-6 sm:p-8 space-y-6 shadow-xs">
          <div>
            <h2 className="text-xl font-bold text-[#1E1B18] font-heading uppercase">
              Send an Inquiry
            </h2>
            <p className="text-xs text-[#786F6A] mt-1">
              Have a question before booking? Complete the form below and we will respond promptly.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 bg-[#FAF6F5] border border-[#E8C9C5] rounded-2xl text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-[#B9827B] mx-auto" />
              <h3 className="text-base font-bold text-[#1E1B18] font-heading">
                Message Received
              </h3>
              <p className="text-xs text-[#554E4A]">
                Thank you for contacting SignatureOne Notary. We have received your inquiry and will follow up with you promptly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', serviceInterest: 'In-Person Notary', message: '' });
                }}
                className="mt-2 text-xs font-bold text-[#B9827B] hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              name="contact-inquiry"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-4"
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

              <div className="space-y-1">
                <label className="block text-xs font-bold text-[#1E1B18] uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-[#F0EAE6] text-xs text-[#1E1B18] placeholder-[#786F6A] focus:outline-none focus:border-[#B9827B]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#1E1B18] uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@domain.com"
                    className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-[#F0EAE6] text-xs text-[#1E1B18] placeholder-[#786F6A] focus:outline-none focus:border-[#B9827B]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-[#1E1B18] uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(972) 000-0000"
                    className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-[#F0EAE6] text-xs text-[#1E1B18] placeholder-[#786F6A] focus:outline-none focus:border-[#B9827B]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-[#1E1B18] uppercase tracking-wider">
                  Service Format
                </label>
                <select
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-[#F0EAE6] text-xs text-[#1E1B18] focus:outline-none focus:border-[#B9827B]"
                >
                  <option value="In-Person Notary">In-Person Notary (Wylie, TX)</option>
                  <option value="Mobile Notary">Mobile Notary (We Travel to You)</option>
                  <option value="Remote Online Notary (RON)">Remote Online Notary (RON)</option>
                  <option value="Loan Signing / Real Estate Closing">Loan Signing / Real Estate Closing</option>
                  <option value="General Question">General Inquiry</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-[#1E1B18] uppercase tracking-wider">
                  Message / Details *
                </label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your document type, number of signatures, timing, or questions..."
                  className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-[#F0EAE6] text-xs text-[#1E1B18] placeholder-[#786F6A] focus:outline-none focus:border-[#B9827B]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#1E1B18] hover:bg-[#35302C] disabled:opacity-60 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-2xs flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Inquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </>
                )}
              </button>
            </form>
          )}

          <div className="pt-4 border-t border-[#F0EAE6] text-[11px] text-[#786F6A] leading-relaxed">
            <p>
              Note: SignatureOne Notary does not provide legal advice. All document notarizations require unexpired, government-issued photo identification.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
