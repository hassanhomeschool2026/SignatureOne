export interface QuoteSubmissionData {
  fullName: string;
  companyName?: string;
  email: string;
  phone: string;
  serviceType: string;
  signerCount: string;
  pageCountApprox?: string;
  signingLocation: string;
  preferredDate?: string;
  preferredTime?: string;
  requiresScanbacks?: boolean | string;
  specialInstructions?: string;
  [key: string]: any;
}

export interface ContactSubmissionData {
  name: string;
  email: string;
  phone?: string;
  serviceInterest: string;
  message: string;
  [key: string]: any;
}

export interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}

function encodeFormData(data: Record<string, string>): string {
  const params = new URLSearchParams();
  Object.entries(data).forEach(([key, value]) => {
    params.append(key, value ?? '');
  });
  return params.toString();
}

/**
 * Submits form data via Netlify Forms URL-encoded POST
 */
export async function submitNetlifyForm(
  formName: string,
  formData: Record<string, string>
): Promise<ApiResponse> {
  try {
    const payload: Record<string, string> = {
      'form-name': formName,
      'bot-field': '',
      ...formData,
    };

    const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encodeFormData(payload),
    });

    if (!response.ok) {
      throw new Error(`Netlify form submission returned status: ${response.status}`);
    }

    return { success: true, message: 'Form submitted successfully.' };
  } catch (error: any) {
    console.error(`[Netlify Forms] Error submitting form "${formName}":`, error);
    throw error;
  }
}

export async function submitQuoteRequest(data: QuoteSubmissionData): Promise<ApiResponse> {
  const scanbacksValue =
    typeof data.requiresScanbacks === 'boolean'
      ? data.requiresScanbacks
        ? 'yes'
        : 'no'
      : (data.requiresScanbacks ?? 'no');

  const formattedData: Record<string, string> = {
    fullName: data.fullName || '',
    companyName: data.companyName || '',
    email: data.email || '',
    phone: data.phone || '',
    serviceType: data.serviceType || '',
    signerCount: data.signerCount || '1',
    pageCountApprox: data.pageCountApprox || '',
    signingLocation: data.signingLocation || '',
    preferredDate: data.preferredDate || '',
    preferredTime: data.preferredTime || '',
    requiresScanbacks: scanbacksValue,
    specialInstructions: data.specialInstructions || '',
  };

  return submitNetlifyForm('loan-signing-quote', formattedData);
}

export async function submitContactInquiry(data: ContactSubmissionData): Promise<ApiResponse> {
  const formattedData: Record<string, string> = {
    name: data.name || '',
    email: data.email || '',
    phone: data.phone || '',
    serviceInterest: data.serviceInterest || '',
    message: data.message || '',
  };

  return submitNetlifyForm('contact-inquiry', formattedData);
}
