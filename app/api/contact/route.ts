import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const TARGET_EMAIL = 'xyzagency.dev@gmail.com';
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${TARGET_EMAIL}`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, projectType, budget, message, _honey } = body;

    // Bot detection via honeypot field
    if (_honey) {
      return NextResponse.json({ success: true, message: 'Message sent successfully' });
    }

    // Input validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      return NextResponse.json(
        { success: false, error: 'Name is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'A valid email address is required' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: 'Message must be at least 5 characters long' },
        { status: 400 }
      );
    }

    // Determine incoming or fallback domain headers to satisfy FormSubmit origin check
    const origin =
      request.headers.get('origin') ||
      request.headers.get('referer') ||
      'https://chosencreators.com';

    // Payload for FormSubmit gateway
    const payload = {
      name: name.trim(),
      email: email.trim(),
      company: company ? company.trim() : 'Not specified',
      projectType: projectType || 'General Inquiry',
      budget: budget || 'Not specified',
      message: message.trim(),
      _subject: `New Project Inquiry: ${name.trim()} (${projectType || 'General'})`,
      _replyto: email.trim(),
      _template: 'table',
      _captcha: 'false',
    };

    const response = await fetch(FORMSUBMIT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Origin: origin,
        Referer: origin,
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json().catch(() => null);

    // FormSubmit returns { success: "false", message: "This form needs Activation..." } on the first submission
    if (result && typeof result.message === 'string' && /activat/i.test(result.message)) {
      return NextResponse.json({
        success: true,
        needsActivation: true,
        message:
          "Form received! FormSubmit has sent a one-time 'Activate Form' verification email to xyzagency.dev@gmail.com. Please click the link in your inbox to enable automatic delivery.",
      });
    }

    if (!response.ok || (result && (result.success === 'false' || result.success === false))) {
      console.error('FormSubmit error response:', result);
      return NextResponse.json(
        {
          success: false,
          error:
            result?.message ||
            'Email gateway service did not acknowledge submission. Please try again or email directly.',
        },
        { status: response.ok ? 400 : response.status || 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry received and transmitted to xyzagency.dev@gmail.com',
      data: result,
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Internal server error',
      },
      { status: 500 }
    );
  }
}
