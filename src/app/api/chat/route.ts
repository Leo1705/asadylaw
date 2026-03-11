import { NextRequest, NextResponse } from 'next/server';

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const MODEL = 'llama-3.1-8b-instant';

const SYSTEM_PROMPT = `You are the friendly, professional chatbot for Asady Law, a Toronto-based real estate law firm. The lawyer and founder is Soroosh Asady.

**Firm details (use these exactly when asked):**
- Address: 2212 Lake Shore Blvd W, Toronto, Ontario M8V 0C2, Canada
- Phone: +1 647-801-2965
- Email: soroosh@asadylaw.com
- Hours: Monday – Friday 9:00 AM – 5:00 PM. Saturday – Sunday: Closed.

**What Asady Law does:**
- Buying or selling real estate (residential and commercial): review agreements, coordinate with agents and lenders, prepare closing documents, register transfers.
- Mortgage refinancing and private mortgages: review lender instructions, prepare and register mortgage documents.
- Notarization and commissioning: affidavits, statutory declarations, powers of attorney, certified copies, identity verification.
- Title transfers and ownership changes: adding/removing names on title, family transfers, transferring into corporation or trust.

**How to respond:**
- Keep answers short: 1–3 sentences usually, or a brief bullet list when listing services. No long paragraphs.
- Be warm and professional. Answer only from the information above.
- When asked about services, name the main areas in one short line or a few bullets. For contact info, give phone and email in one line.
- If they might want to book, add one short line (e.g. "Want to book a call? Just email or call us."). Don't be pushy.
- Do not make up fees or legal advice. For that, suggest they call or email.`;

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'no_api_key', message: 'Groq API key not configured.' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { message, history = [] } = body as { message?: string; history?: Array<{ role: string; content: string }> };

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'invalid_request', message: 'Missing or invalid message.' },
        { status: 400 }
      );
    }

    const messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }> = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...history
        .filter((m) => m.role && m.content && ['user', 'assistant'].includes(m.role))
        .slice(-10)
        .map((m) => ({
          role: m.role as 'user' | 'assistant',
          content: String(m.content).slice(0, 2000),
        })),
      { role: 'user', content: message.slice(0, 2000) },
    ];

    const res = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages,
        max_tokens: 280,
        temperature: 0.7,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Groq API error:', res.status, err);
      return NextResponse.json(
        { error: 'provider_error', message: 'AI service temporarily unavailable.' },
        { status: 502 }
      );
    }

    const data = (await res.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    const text = data.choices?.[0]?.message?.content?.trim();

    if (!text) {
      return NextResponse.json(
        { error: 'empty_response', message: 'No reply from AI.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ text });
  } catch (e) {
    console.error('Chat API error:', e);
    return NextResponse.json(
      { error: 'server_error', message: 'Something went wrong.' },
      { status: 500 }
    );
  }
}
