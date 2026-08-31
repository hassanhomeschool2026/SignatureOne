import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const RECIPIENT_EMAIL = process.env.INQUIRY_RECIPIENT_EMAIL || 'info@sonotary.com';

// In-memory audit log for submissions
interface SubmissionRecord {
  id: string;
  type: 'quote' | 'contact';
  timestamp: string;
  data: Record<string, any>;
  status: 'received' | 'delivered' | 'logged';
}

const submissionAuditLog: SubmissionRecord[] = [];

// Helper to create mail transporter if SMTP is configured
function getTransporter() {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true' || process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return null;
}

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Netlify Forms dev handler (handles AJAX form submissions to /)
app.post('/', (req: Request, res: Response) => {
  const formName = req.body['form-name'] || req.query['form-name'];
  console.log(`[NETLIFY FORMS DEV] Form "${formName}" received payload:`, req.body);
  return res.status(200).json({ success: true, message: 'Netlify form processed in dev environment' });
});

// Real Quote Submission Endpoint
app.post('/api/quote', async (req: Request, res: Response) => {
  try {
    const {
      name,
      company,
      email,
      phone,
      assignmentType,
      signersCount,
      pageCount,
      location,
      date,
      time,
      scanbacks,
      notes,
    } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and phone number are required.',
      });
    }

    const submissionId = `quote-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    const submissionData = {
      name,
      company: company || 'Not provided',
      email,
      phone,
      assignmentType: assignmentType || 'Standard Loan Signing / Closing',
      signersCount: signersCount || '1',
      pageCount: pageCount || 'Not specified',
      location: location || 'Not provided',
      date: date || 'Flexible',
      time: time || 'Flexible',
      scanbacks: scanbacks || 'Standard Return',
      notes: notes || 'None',
    };

    console.log(`[QUOTE SUBMISSION] New quote request received (#${submissionId}):`, submissionData);

    const emailSubject = `New Loan Signing Quote Request - ${name} (${assignmentType || 'Closing'})`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1E1B18; border: 1px solid #F0EAE6; border-radius: 12px; padding: 24px; background-color: #FFFFFF;">
        <h2 style="color: #1E1B18; border-bottom: 2px solid #B9827B; padding-bottom: 10px; margin-top: 0;">Loan Signing / Closing Quote Request</h2>
        <p style="font-size: 14px; color: #786F6A;">A new quote request was submitted via the SignatureOne Notary website.</p>
        
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 16px;">
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #F0EAE6; font-weight: bold; width: 35%;">Contact Name:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #F0EAE6;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #F0EAE6; font-weight: bold;">Company / Agency:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #F0EAE6;">${submissionData.company}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #F0EAE6; font-weight: bold;">Email Address:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #F0EAE6;"><a href="mailto:${email}" style="color: #B9827B;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #F0EAE6; font-weight: bold;">Phone Number:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #F0EAE6;"><a href="tel:${phone}" style="color: #1E1B18;">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #F0EAE6; font-weight: bold;">Assignment Type:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #F0EAE6;">${submissionData.assignmentType}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #F0EAE6; font-weight: bold;">Number of Signers:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #F0EAE6;">${submissionData.signersCount}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #F0EAE6; font-weight: bold;">Estimated Page Count:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #F0EAE6;">${submissionData.pageCount}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #F0EAE6; font-weight: bold;">Signing Location / City:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #F0EAE6;">${submissionData.location}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #F0EAE6; font-weight: bold;">Requested Date & Time:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #F0EAE6;">${submissionData.date} at ${submissionData.time}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #F0EAE6; font-weight: bold;">Scanback Requirement:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #F0EAE6;">${submissionData.scanbacks}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Additional Instructions / Notes:</td>
            <td style="padding: 8px 0; white-space: pre-wrap;">${submissionData.notes}</td>
          </tr>
        </table>
        
        <div style="margin-top: 24px; padding: 12px; background-color: #FAF6F5; border-radius: 8px; font-size: 12px; color: #786F6A; text-align: center;">
          Direct destination: ${RECIPIENT_EMAIL} · ID: ${submissionId}
        </div>
      </div>
    `;

    let deliveredVia = 'logged';

    // 1. Try SMTP if configured
    const transporter = getTransporter();
    if (transporter) {
      try {
        await transporter.sendMail({
          from: `"SignatureOne Web" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
          to: RECIPIENT_EMAIL,
          replyTo: email,
          subject: emailSubject,
          html: emailHtml,
        });
        deliveredVia = 'smtp';
      } catch (mailErr) {
        console.error('[QUOTE SUBMISSION] SMTP delivery failed, logged locally:', mailErr);
      }
    }

    // 2. Try Resend if configured
    if (deliveredVia === 'logged' && process.env.RESEND_API_KEY) {
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM || 'SignatureOne Notary <onboarding@resend.dev>',
            to: [RECIPIENT_EMAIL],
            reply_to: email,
            subject: emailSubject,
            html: emailHtml,
          }),
        });
        if (response.ok) {
          deliveredVia = 'resend';
        }
      } catch (resendErr) {
        console.error('[QUOTE SUBMISSION] Resend delivery failed:', resendErr);
      }
    }

    // 3. Webhook forwarding if configured
    if (process.env.FORM_WEBHOOK_URL) {
      try {
        await fetch(process.env.FORM_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'quote', id: submissionId, recipient: RECIPIENT_EMAIL, payload: submissionData }),
        });
      } catch (webhookErr) {
        console.error('[QUOTE SUBMISSION] Webhook forward failed:', webhookErr);
      }
    }

    submissionAuditLog.push({
      id: submissionId,
      type: 'quote',
      timestamp: new Date().toISOString(),
      data: submissionData,
      status: deliveredVia === 'logged' ? 'received' : 'delivered',
    });

    return res.status(200).json({
      success: true,
      id: submissionId,
      message: 'Quote request accepted successfully.',
    });
  } catch (error: any) {
    console.error('[QUOTE SUBMISSION] Unexpected error:', error);
    return res.status(500).json({
      success: false,
      error: 'An unexpected error occurred while processing your quote request. Please try again or call (972) 853-1513.',
    });
  }
});

// Real Contact / Inquiry Submission Endpoint
app.post('/api/contact', async (req: Request, res: Response) => {
  try {
    const { name, email, phone, serviceType, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required.',
      });
    }

    const submissionId = `inquiry-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    const submissionData = {
      name,
      email,
      phone: phone || 'Not provided',
      serviceType: serviceType || 'General Inquiry',
      message,
    };

    console.log(`[CONTACT SUBMISSION] New inquiry received (#${submissionId}):`, submissionData);

    const emailSubject = `New Website Inquiry - ${name} (${serviceType || 'General'})`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1E1B18; border: 1px solid #F0EAE6; border-radius: 12px; padding: 24px; background-color: #FFFFFF;">
        <h2 style="color: #1E1B18; border-bottom: 2px solid #B9827B; padding-bottom: 10px; margin-top: 0;">New Contact Inquiry</h2>
        <p style="font-size: 14px; color: #786F6A;">A new message was submitted via the SignatureOne Notary website.</p>
        
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 16px;">
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #F0EAE6; font-weight: bold; width: 35%;">Full Name:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #F0EAE6;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #F0EAE6; font-weight: bold;">Email Address:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #F0EAE6;"><a href="mailto:${email}" style="color: #B9827B;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #F0EAE6; font-weight: bold;">Phone Number:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #F0EAE6;"><a href="tel:${phone}" style="color: #1E1B18;">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #F0EAE6; font-weight: bold;">Service Interest:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #F0EAE6;">${serviceType}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message:</td>
            <td style="padding: 8px 0; white-space: pre-wrap;">${message}</td>
          </tr>
        </table>
        
        <div style="margin-top: 24px; padding: 12px; background-color: #FAF6F5; border-radius: 8px; font-size: 12px; color: #786F6A; text-align: center;">
          Direct destination: ${RECIPIENT_EMAIL} · ID: ${submissionId}
        </div>
      </div>
    `;

    let deliveredVia = 'logged';

    // 1. Try SMTP if configured
    const transporter = getTransporter();
    if (transporter) {
      try {
        await transporter.sendMail({
          from: `"SignatureOne Web" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
          to: RECIPIENT_EMAIL,
          replyTo: email,
          subject: emailSubject,
          html: emailHtml,
        });
        deliveredVia = 'smtp';
      } catch (mailErr) {
        console.error('[CONTACT SUBMISSION] SMTP delivery failed:', mailErr);
      }
    }

    // 2. Try Resend if configured
    if (deliveredVia === 'logged' && process.env.RESEND_API_KEY) {
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM || 'SignatureOne Notary <onboarding@resend.dev>',
            to: [RECIPIENT_EMAIL],
            reply_to: email,
            subject: emailSubject,
            html: emailHtml,
          }),
        });
        if (response.ok) {
          deliveredVia = 'resend';
        }
      } catch (resendErr) {
        console.error('[CONTACT SUBMISSION] Resend delivery failed:', resendErr);
      }
    }

    submissionAuditLog.push({
      id: submissionId,
      type: 'contact',
      timestamp: new Date().toISOString(),
      data: submissionData,
      status: deliveredVia === 'logged' ? 'received' : 'delivered',
    });

    return res.status(200).json({
      success: true,
      id: submissionId,
      message: 'Inquiry received successfully.',
    });
  } catch (error: any) {
    console.error('[CONTACT SUBMISSION] Unexpected error:', error);
    return res.status(500).json({
      success: false,
      error: 'An unexpected error occurred while sending your message. Please try again or email info@sonotary.com.',
    });
  }
});

// Vite middleware setup
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
