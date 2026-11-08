import { NextRequest, NextResponse } from 'next/server';

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  // Honeypot field (must remain empty)
  fax_number?: string;
}

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();
    const { name, email, subject, message, fax_number } = body;

    // 1. Honeypot Spam Protection
    if (fax_number && fax_number.trim() !== '') {
      // Silently return success to misdirect automated spam bots
      return NextResponse.json(
        { ok: true, message: 'Dispatch received.' },
        { status: 200 }
      );
    }

    // 2. Strict Input Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { ok: false, error: 'Please enter a valid name (at least 2 characters).' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { ok: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { ok: false, error: 'Message must be at least 10 characters long.' },
        { status: 400 }
      );
    }

    const cleanName = name.trim().slice(0, 100);
    const cleanEmail = email.trim().toLowerCase().slice(0, 100);
    const cleanSubject = (subject?.trim() || 'New Portfolio Inquiry').slice(0, 150);
    const cleanMessage = message.trim().slice(0, 5000);

    const recipientEmail = process.env.CONTACT_TO_EMAIL || 'ankitkumarsahu488526@gmail.com';
    const resendApiKey = process.env.RESEND_API_KEY;
    const formspreeId = process.env.FORMSPREE_FORM_ID || process.env.NEXT_PUBLIC_FORMSPREE_KEY;

    // 3. Resend Delivery
    if (resendApiKey) {
      const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Portfolio Dispatch <onboarding@resend.dev>';
      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [recipientEmail],
          reply_to: cleanEmail,
          subject: `[Portfolio Dispatch] ${cleanSubject} — from ${cleanName}`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
              <div style="border-bottom: 2px solid #FF3D81; padding-bottom: 12px; margin-bottom: 20px;">
                <h2 style="margin: 0; color: #1B1A2E; font-size: 20px;">Portfolio // New Contact Dispatch</h2>
                <p style="margin: 4px 0 0; color: #6E6A8A; font-size: 13px;">Received via ankit-kumar-sahu portfolio inquiry channel.</p>
              </div>

              <div style="margin-bottom: 16px;">
                <strong style="color: #334155; font-size: 13px; text-transform: uppercase;">From:</strong>
                <p style="margin: 4px 0; color: #0f172a; font-size: 15px;">${cleanName} &lt;<a href="mailto:${cleanEmail}" style="color: #FF3D81;">${cleanEmail}</a>&gt;</p>
              </div>

              <div style="margin-bottom: 16px;">
                <strong style="color: #334155; font-size: 13px; text-transform: uppercase;">Subject:</strong>
                <p style="margin: 4px 0; color: #0f172a; font-size: 15px;">${cleanSubject}</p>
              </div>

              <div style="margin-bottom: 24px; padding: 16px; background-color: #FFFDF8; border-radius: 8px; border: 1px solid #cbd5e1;">
                <strong style="color: #334155; font-size: 13px; text-transform: uppercase; display: block; margin-bottom: 8px;">Message Content:</strong>
                <p style="margin: 0; color: #1e293b; font-size: 14px; white-space: pre-wrap; line-height: 1.6;">${cleanMessage}</p>
              </div>

              <div style="font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; padding-top: 12px;">
                Candidate: Ankit Kumar Sahu • NIST University • B.Tech CSE (Data Science)
              </div>
            </div>
          `,
        }),
      });

      if (!resendRes.ok) {
        return NextResponse.json(
          {
            ok: false,
            error: `Email transmission service failed. Please reach out to ${recipientEmail} directly.`,
            fallbackMailto: `mailto:${recipientEmail}?subject=${encodeURIComponent(cleanSubject)}&body=${encodeURIComponent(`Hi Ankit,\n\n${cleanMessage}\n\nFrom,\n${cleanName} (${cleanEmail})`)}`,
          },
          { status: 502 }
        );
      }

      return NextResponse.json({
        ok: true,
        provider: 'resend',
        message: 'Your dispatch was delivered directly to Ankit Kumar Sahu.',
      });
    }

    // 4. Formspree Delivery (Fallback)
    if (formspreeId) {
      const formspreeRes = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          subject: cleanSubject,
          message: cleanMessage,
        }),
      });

      if (!formspreeRes.ok) {
        return NextResponse.json(
          {
            ok: false,
            error: `Formspree delivery encountered an issue. Please email ${recipientEmail} directly.`,
            fallbackMailto: `mailto:${recipientEmail}?subject=${encodeURIComponent(cleanSubject)}&body=${encodeURIComponent(`Hi Ankit,\n\n${cleanMessage}\n\nFrom,\n${cleanName} (${cleanEmail})`)}`,
          },
          { status: 502 }
        );
      }

      return NextResponse.json({
        ok: true,
        provider: 'formspree',
        message: 'Your dispatch was delivered via Formspree.',
      });
    }

    // 5. Graceful Fallback Mode if env variables are not set
    return NextResponse.json(
      {
        ok: false,
        error: `Direct dispatch service is not currently configured. Please send your message directly via email to ${recipientEmail}.`,
        fallbackMailto: `mailto:${recipientEmail}?subject=${encodeURIComponent(cleanSubject)}&body=${encodeURIComponent(`Hi Ankit,\n\n${cleanMessage}\n\nFrom,\n${cleanName} (${cleanEmail})`)}`,
      },
      { status: 503 }
    );
  } catch {
    const fallbackRecipient = 'ankitkumarsahu488526@gmail.com';
    return NextResponse.json(
      {
        ok: false,
        error: `An unexpected error occurred. Please contact ${fallbackRecipient} directly.`,
        fallbackMailto: `mailto:${fallbackRecipient}`,
      },
      { status: 500 }
    );
  }
}
