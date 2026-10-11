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
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json().catch(() => null);

    if (!response.ok) {
      console.error('FormSubmit error response:', result);
      return NextResponse.json(
        {
          success: false,
          error: result?.message || 'Failed to dispatch email through gateway',
        },
        { status: response.status || 500 }
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
