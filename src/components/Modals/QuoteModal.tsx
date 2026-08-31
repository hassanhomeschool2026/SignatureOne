import React, { useState } from 'react';
import { X, FileText, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { QuoteFormData } from '../../types';
import { submitQuoteRequest } from '../../lib/api';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'purchase',
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceType: defaultService as any,
    signerCount: '1',
    pageCountApprox: '50-100 pages',
    signingLocation: '',
    preferredDate: '',
    preferredTime: '',
    requiresScanbacks: true,
    specialInstructions: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      await submitQuoteRequest({
        fullName: formData.fullName,
        companyName: formData.companyName,
        email: formData.email,
        phone: formData.phone,
        serviceType: formData.serviceType,
        signerCount: formData.signerCount,
        pageCountApprox: formData.pageCountApprox,
        signingLocation: formData.signingLocation,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        requiresScanbacks: formData.requiresScanbacks,
        specialInstructions: formData.specialInstructions,
      });

      setIsSubmitted(true);
    } catch (err: any) {
      setErrorMessage("We couldn't submit your quote request. Please try again or call (972) 853-1513.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setErrorMessage(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#292727]/60 backdrop-blur-xs transition-opacity">
      <div
        id="loan-signing-quote-dialog"
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-2xl bg-[#FFFFFF] rounded-2xl shadow-2xl border border-[#D8CEC7] overflow-hidden"
      >
        {/* Header */}
        <div className="bg-[#F8F4EF] p-6 border-b border-[#D8CEC7] flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide bg-[#E8C9C5]/70 text-[#292727] mb-2">
              <FileText className="w-3.5 h-3.5 text-[#B9827B]" />
              Custom Assignment Quote
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#292727]">
              Request a Signing &amp; Closing Quote
            </h3>
            <p className="text-xs sm:text-sm text-[#786F6A] mt-1">
              For title companies, lenders, escrow officers, and specialized loan signing packages
            </p>
          </div>
          <button
            id="close-quote-modal-btn"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-full text-[#786F6A] hover:text-[#292727] hover:bg-[#D8CEC7]/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8 px-4 space-y-4">
              <div className="w-16 h-16 bg-[#FAF6F5] text-[#B9827B] border border-[#E8C9C5] rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-2xl font-semibold text-[#292727]">
                Quote Request Received
              </h4>
              <p className="text-sm text-[#554E4A] max-w-md mx-auto leading-relaxed">
                Thank you. We've received your request and will review the details and contact you at the email provided.
              </p>
              <div className="pt-4">
                <button
                  id="quote-success-done-btn"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#292727] text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#3d3a3a] transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form
              name="loan-signing-quote"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="loan-signing-quote" />
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

              {/* Contact Info Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#292727] mb-1">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-white border border-[#D8CEC7] rounded-xl focus:outline-none focus:border-[#B9827B] text-[#292727]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#292727] mb-1">
                    Company / Title Agency (Optional)
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company or agency name"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-white border border-[#D8CEC7] rounded-xl focus:outline-none focus:border-[#B9827B] text-[#292727]"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#292727] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-white border border-[#D8CEC7] rounded-xl focus:outline-none focus:border-[#B9827B] text-[#292727]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#292727] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(972) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-white border border-[#D8CEC7] rounded-xl focus:outline-none focus:border-[#B9827B] text-[#292727]"
                  />
                </div>
              </div>

              {/* Service Type & Signers */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#292727] mb-1">
                    Assignment / Transaction Type *
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value as any })}
                    className="w-full px-3.5 py-2 text-xs bg-white border border-[#D8CEC7] rounded-xl focus:outline-none focus:border-[#B9827B] text-[#292727]"
                  >
                    <option value="purchase">Purchase Closing (Buyer / Seller)</option>
                    <option value="refinance">Refinance (Conventional, FHA, VA)</option>
                    <option value="heloc">HELOC / 2nd Mortgage</option>
                    <option value="seller_buyer">Seller Package</option>
                    <option value="reverse_mortgage">Reverse Mortgage</option>
                    <option value="commercial">Commercial / Title Assignment</option>
                    <option value="extended_mobile">Extended Mobile Notary Package</option>
                    <option value="other">Other Multi-Document Assignment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#292727] mb-1">
                    No. of Signers
                  </label>
                  <select
                    name="signerCount"
                    value={formData.signerCount}
                    onChange={(e) => setFormData({ ...formData, signerCount: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-white border border-[#D8CEC7] rounded-xl focus:outline-none focus:border-[#B9827B] text-[#292727]"
                  >
                    <option value="1">1 Signer</option>
                    <option value="2">2 Signers</option>
                    <option value="3">3 Signers</option>
                    <option value="4+">4+ Signers</option>
                  </select>
                </div>
              </div>

              {/* Location & Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#292727] mb-1">
                    Signing Location / City / ZIP *
                  </label>
                  <input
                    type="text"
                    name="signingLocation"
                    required
                    placeholder="e.g. Lavon, Wylie, Rockwall (ZIP 75166)"
                    value={formData.signingLocation}
                    onChange={(e) => setFormData({ ...formData, signingLocation: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-white border border-[#D8CEC7] rounded-xl focus:outline-none focus:border-[#B9827B] text-[#292727]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#292727] mb-1">
                    Est. Page Count
                  </label>
                  <select
                    name="pageCountApprox"
                    value={formData.pageCountApprox}
                    onChange={(e) => setFormData({ ...formData, pageCountApprox: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-white border border-[#D8CEC7] rounded-xl focus:outline-none focus:border-[#B9827B] text-[#292727]"
                  >
                    <option value="1-50 pages">1–50 pages</option>
                    <option value="50-100 pages">50–100 pages</option>
                    <option value="100-150 pages">100–150 pages</option>
                    <option value="150+ pages">150+ pages</option>
                  </select>
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#292727] mb-1">
                    Requested Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-white border border-[#D8CEC7] rounded-xl focus:outline-none focus:border-[#B9827B] text-[#292727]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#292727] mb-1">
                    Preferred Time Window
                  </label>
                  <input
                    type="text"
                    name="preferredTime"
                    placeholder="e.g. Afternoon 2:00 PM - 4:00 PM"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-white border border-[#D8CEC7] rounded-xl focus:outline-none focus:border-[#B9827B] text-[#292727]"
                  />
                </div>
              </div>

              {/* Scanback Checkbox */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  name="requiresScanbacks"
                  id="scanbacks-check"
                  checked={formData.requiresScanbacks}
                  onChange={(e) => setFormData({ ...formData, requiresScanbacks: e.target.checked })}
                  className="w-4 h-4 accent-[#B9827B] rounded text-[#B9827B]"
                />
                <label htmlFor="scanbacks-check" className="text-xs text-[#292727] cursor-pointer">
                  Requires immediate document scanbacks prior to courier drop-off
                </label>
              </div>

              {/* Special Instructions */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#292727] mb-1">
                  Additional Notes or Specific Instructions
                </label>
                <textarea
                  rows={3}
                  name="specialInstructions"
                  placeholder="Provide any relevant details, borrower preferences, courier drop deadlines, or specific title instructions..."
                  value={formData.specialInstructions}
                  onChange={(e) => setFormData({ ...formData, specialInstructions: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-white border border-[#D8CEC7] rounded-xl focus:outline-none focus:border-[#B9827B] text-[#292727]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="submit-lsa-quote-btn"
                  className="w-full py-3 px-6 bg-[#292727] hover:bg-[#3d3a3a] active:scale-[0.99] disabled:opacity-60 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Signing Quote Request</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
