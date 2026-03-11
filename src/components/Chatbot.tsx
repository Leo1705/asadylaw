'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  format,
  addMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
  isToday,
} from 'date-fns';

// Same time slots as main booking section
const TIME_SLOTS = [
  '9:00 AM', '9:15 AM', '9:30 AM', '9:45 AM',
  '10:00 AM', '10:15 AM', '10:30 AM', '10:45 AM',
  '11:00 AM', '11:15 AM', '11:30 AM', '11:45 AM',
  '1:00 PM', '1:15 PM', '1:30 PM', '1:45 PM',
  '2:00 PM', '2:15 PM', '2:30 PM', '2:45 PM',
  '3:00 PM', '3:15 PM', '3:30 PM', '3:45 PM',
  '4:00 PM', '4:15 PM', '4:30 PM', '4:45 PM',
];

// ─── Firm info (from training doc) ───────────────────────────────────────────
const FIRM = {
  name: 'Asady Law',
  lawyer: 'Soroosh Asady',
  address: '2212 Lake Shore Blvd W, Toronto, Ontario M8V 0C2, Canada',
  phone: '+1 647-801-2965',
  email: 'soroosh@asadylaw.com',
  hours: 'Monday – Friday: 9:00 AM – 5:00 PM. Saturday – Sunday: Closed.',
};

// ─── Intent detection: triggers (keywords/phrases) + human-like response variants ───
const INTENTS: Array<{
  name: string;
  triggers: string[];
  responses: string[];
}> = [
  {
    name: 'services_overview',
    triggers: [
      'what services', 'what do you offer', 'what does this business', 'what does the firm',
      'services do you offer', 'what do you do', 'what can you help with', 'what can you do',
      'what are your services', 'what kind of services', 'offer', 'services offered',
      'tell me about', 'what is asady', 'what is this firm', 'what does asady law',
    ],
    responses: [
      "We're a Toronto real estate law firm. We help with:\n\n• Buying or selling property (residential & commercial)\n• Mortgage refinancing and private mortgages\n• Notarization and commissioning (affidavits, declarations, powers of attorney, etc.)\n• Title transfers (adding/removing someone on title, family transfers, trusts)\n\nEverything from contract review through to closing and registration. What are you looking to do?",
      "Asady Law focuses on real estate and property-related legal work. Our main areas are: buying and selling property, mortgage refinancing, private mortgages, notarization and document commissioning, and title transfers or ownership changes. We work with buyers, sellers, lenders, and investors. Which of these applies to you?",
      "We offer real estate legal services in Toronto: purchases and sales, mortgage refinancing, private mortgages, notarization/commissioning, and title transfers. We make sure transactions and documents are done right and registered properly. Want to hear more about one of these or book a consultation?",
    ],
  },
  {
    name: 'buying',
    triggers: [
      'buying a house', 'buying a home', 'purchasing', 'buy property', 'need a lawyer for closing',
      'buy a house', 'buy a condo', 'first time buyer', 'purchase agreement', 'agreement of purchase',
      'do i need a lawyer to buy', 'lawyer for purchase', 'closing on a house',
    ],
    responses: [
      "Yes — in Ontario you need a real estate lawyer to close a purchase. We review your Agreement of Purchase and Sale, coordinate with your agent and lender, prepare closing documents, and register the transfer so everything is legally secure. Would you like to book a free consultation to go over your situation?",
      "Absolutely. When you're buying, we handle the full legal side: reviewing the agreement, spotting any risky clauses, working with your lender and agent, and making sure the transfer and funds are done correctly. Want to schedule a quick call to get started?",
      "For sure. We take care of the legal side of your purchase from contract review through to closing and registration. We’ll keep things clear and on track. Is your closing date already set, or are you still looking?",
    ],
  },
  {
    name: 'selling',
    triggers: [
      'selling my house', 'selling property', 'sell my home', 'lawyer to close the sale',
      'selling a condo', 'closing the sale', 'seller', 'sale of property',
    ],
    responses: [
      "We help sellers with the full legal closing: reviewing the agreement, preparing documents, and making sure the sale and funds transfer go through properly. When’s your expected closing date? I can help you get in touch with our team to get things started.",
      "Yes. We represent sellers through closing — contract review, coordinating with the buyer’s side, and ensuring the transfer and payout are done correctly. Would you like to book a consultation so we can go over your sale?",
      "We definitely do. Selling involves a lot of paperwork and deadlines; we handle that so you don’t have to worry. Do you already have an offer, or are you still in the listing phase?",
    ],
  },
  {
    name: 'refinancing',
    triggers: [
      'refinanc', 'refinance mortgage', 'switch mortgage', 'home equity', 'change lenders',
      'new mortgage', 'replace mortgage', 'better rate', 'consolidate debt',
    ],
    responses: [
      "We help with mortgage refinancing — reviewing lender instructions, preparing the legal documents, and registering the new mortgage. Do you already have lender approval, or are you still shopping around? Either way, we can walk you through the next steps.",
      "Yes. Refinancing is one of our core services. We make sure the new mortgage is documented and registered correctly so the process stays smooth. Would you like to schedule a consultation to discuss your situation?",
      "Absolutely. Whether you’re refinancing for a better rate or to access equity, we handle the legal side from lender instructions to registration. Want me to share our contact details so you can book a call?",
    ],
  },
  {
    name: 'private_mortgage',
    triggers: [
      'private mortgage', 'private lender', 'private loan', 'individual lender',
    ],
    responses: [
      "We work with private mortgages too. We help prepare and review the mortgage agreement, review the terms, and register the mortgage on title so the lender’s security is protected. Would you like to talk to our team about your situation?",
      "Yes. Private mortgages involve specific documentation and registration. We assist with the agreement, terms, and registration so everything is done properly. I can help you set up a consultation if you’d like.",
    ],
  },
  {
    name: 'notarization',
    triggers: [
      'notariz', 'notary', 'commission', 'affidavit', 'statutory declaration',
      'power of attorney', 'certified copy', 'witness', 'commissioning',
    ],
    responses: [
      "Yes. We offer notarization and commissioning — affidavits, statutory declarations, powers of attorney, real estate forms, certified copies, and ID verification. We can usually get documents done quickly. What type of document do you need notarized?",
      "We do. Notarization confirms the document and signature are authentic so it’s accepted by courts, banks, or government. What document do you have — affidavit, declaration, or something else? I can point you in the right direction.",
      "Absolutely. We notarize and commission a wide range of documents. Tell me what you need (e.g. affidavit, power of attorney), and I’ll make sure you get the right help — or we can set up a quick appointment.",
    ],
  },
  {
    name: 'title_transfer',
    triggers: [
      'title transfer', 'add spouse', 'add someone to title', 'remove name from title',
      'transfer ownership', 'ownership change', 'family transfer', 'transfer property',
      'corporation', 'trust', 'tax planning', 'separation',
    ],
    responses: [
      "We handle title transfers — adding or removing someone on title, family transfers, or moving property into a corporation or trust. We prepare the documents and register the new ownership. What kind of ownership change are you looking at?",
      "Yes. Title transfers are when ownership changes without a full purchase — e.g. adding a spouse or removing a name after separation. We take care of the documents and land registry. Would you like to book a consultation to go over the details?",
      "We do. Whether it’s adding a spouse, restructuring for tax planning, or transferring into a trust, we handle the legal work and registration. I can help you get in touch with our team if you’d like to discuss it.",
    ],
  },
  {
    name: 'contact_booking',
    triggers: [
      'contact', 'phone', 'email', 'call', 'speak to', 'talk to', 'meet', 'appointment',
      'consultation', 'book', 'schedule', 'visit', 'office', 'where are you', 'hours',
    ],
    responses: [
      `You can reach us at ${FIRM.phone} or ${FIRM.email}. We're at ${FIRM.address}. Office hours: ${FIRM.hours} Would you like me to repeat any of that or help with something else?`,
      `Sure. Phone: ${FIRM.phone}. Email: ${FIRM.email}. We're on Lake Shore Blvd W in Toronto. We're open weekdays 9–5. I can also help you think through what to ask when you call, if that’s useful.`,
      `Here’s how to get in touch: ${FIRM.phone}, ${FIRM.email}. Address: ${FIRM.address}. Hours: ${FIRM.hours} If you’d like to schedule a consultation, just say so and we’ll take it from there.`,
    ],
  },
  {
    name: 'hours_location',
    triggers: ['hours', 'open', 'when are you', 'address', 'location', 'where', 'toronto'],
    responses: [
      `We're at ${FIRM.address}. Office hours: ${FIRM.hours} Need our phone or email too?`,
      `Our office is on Lake Shore Blvd W in Toronto. We're open Monday–Friday, 9 AM–5 PM. Closed weekends. Want to book a time to chat?`,
    ],
  },
  {
    name: 'fees',
    triggers: ['fee', 'cost', 'price', 'how much', 'rate', 'charge'],
    responses: [
      "Our fees depend on the type of matter — purchase, sale, refinance, notarization, etc. We’re happy to give you a clear quote with no surprises. The best way is a quick free consultation; we’ll outline what’s involved and the cost. Want our phone or email to set that up?",
      "We keep our pricing transparent. For a specific quote we’d need to know your situation (e.g. purchase, refinance, notarization). Book a free consultation and we’ll give you a detailed breakdown. I can share our contact details if you’d like.",
    ],
  },
  {
    name: 'greeting',
    triggers: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'],
    responses: [
      "Hi! I’m the Asady Law assistant. We help with real estate — buying, selling, refinancing, notarization, and title transfers. What can I help you with today?",
      "Hello! Thanks for reaching out. I can answer questions about our services or help you get in touch with our team. What do you need help with?",
      "Hey there! I’m here to help with anything about Asady Law — purchases, sales, mortgages, notarization, or title transfers. What’s on your mind?",
    ],
  },
  {
    name: 'thanks_goodbye',
    triggers: ['thank', 'thanks', 'bye', 'goodbye', 'that\'s all', 'all set'],
    responses: [
      "You’re welcome! If you think of anything else, just ask. Good luck with everything!",
      "Glad I could help. Feel free to come back anytime. Take care!",
      "Anytime! Don’t hesitate to reach out if you have more questions. Best of luck!",
    ],
  },
];

// FAQ-style answers (exact or near matches)
const FAQ: Array<{ triggers: string[]; responses: string[] }> = [
  {
    triggers: ['documents for home purchase', 'what do i need to buy', 'documents needed'],
    responses: [
      "For a home purchase you’ll typically need government ID, proof of income, your Agreement of Purchase and Sale, mortgage commitment (if applicable), and insurance details. We’ll send you a full checklist once you’re working with us.",
    ],
  },
  {
    triggers: ['what does a real estate lawyer do', 'lawyer do during closing'],
    responses: [
      "During closing we review contracts, prepare and explain documents, coordinate with lenders and agents, register the transfer, and make sure funds and ownership change hands correctly. We’re there so nothing gets missed.",
    ],
  },
  {
    triggers: ['need a lawyer', 'do i need a lawyer', 'required'],
    responses: [
      "In Ontario, yes — you need a real estate lawyer to complete a property purchase or sale. We make sure the transaction is legally sound and everything is properly registered and funded.",
    ],
  },
];

// Suggested questions (from training doc + high-value intents)
const RECOMMENDED_QUESTIONS = [
  "I'm buying a house — do I need a lawyer?",
  "What does a real estate lawyer do at closing?",
  "Can you help with mortgage refinancing?",
  "Do you notarize documents?",
  "I want to add my spouse to the property title.",
  "How do I book a consultation?",
];

// Word-boundary check: trigger matches as whole word (e.g. "hi" matches "hi" but not "this")
function matchesAsWord(text: string, trigger: string): boolean {
  const t = trigger.trim().toLowerCase();
  if (!t) return false;
  const words = text.toLowerCase().split(/\s+/);
  return words.some((w) => w === t || w.startsWith(t + ',') || w.endsWith(',' + t));
}

// ─── Intent matching: score by trigger hits, return best intent or null ─────────
function matchIntent(message: string): typeof INTENTS[0] | null {
  const normalized = message.toLowerCase().trim().replace(/\s+/g, ' ');
  if (normalized.length < 2) return null;

  const words = normalized.split(/\s+/);
  let best: { intent: typeof INTENTS[0]; score: number } | null = null;

  for (const intent of INTENTS) {
    let score = 0;
    for (const trigger of intent.triggers) {
      const t = trigger.trim();
      // Multi-word trigger: substring match
      if (t.includes(' ')) {
        if (normalized.includes(t)) score += t.length + 2;
        continue;
      }
      // Single-word / short trigger: only match as whole word so "this" doesn't match "hi"
      if (t.length <= 4) {
        if (matchesAsWord(normalized, t)) score += t.length + 5;
      } else {
        if (normalized.includes(t)) score += t.length;
      }
    }
    if (score > 0 && (!best || score > best.score)) best = { intent, score };
  }
  return best?.intent ?? null;
}

// FAQ match (phrase-style)
function matchFaq(message: string): string | null {
  const normalized = message.toLowerCase().trim().replace(/\s+/g, ' ');
  for (const faq of FAQ) {
    for (const trigger of faq.triggers) {
      if (normalized.includes(trigger)) {
        const responses = faq.responses;
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
  }
  return null;
}

// Booking CTA (used when user seems ready or asks for help)
const BOOKING_RESPONSES = [
  `You can schedule a consultation with Asady Law to discuss your situation.\n\nPhone: ${FIRM.phone}\nEmail: ${FIRM.email}\n\nWe can also help arrange an appointment during business hours (${FIRM.hours}). Would you like more details on any of our services?`,
  `The best next step is a quick consultation. Reach us at ${FIRM.phone} or ${FIRM.email}. We're at ${FIRM.address} and open ${FIRM.hours}. Say what you’re looking for and we’ll take it from there.`,
];

// Default / fallback (friendly, on-brand)
const FALLBACK_RESPONSES = [
  "I’m not sure I caught that — could you rephrase or ask about our services (e.g. buying, selling, refinancing, notarization, or title transfers)? I’m here to help.",
  "I didn’t quite get that. We help with real estate: purchases, sales, mortgage refinancing, notarization, and title transfers. What do you need help with?",
  "I want to make sure I help you right. Are you asking about buying or selling property, refinancing, notarization, or something else? Or I can give you our contact details to speak with someone directly.",
];

function getBotResponse(userMessage: string): string {
  const trimmed = userMessage.trim();
  if (!trimmed) return FALLBACK_RESPONSES[0];

  const faqAnswer = matchFaq(trimmed);
  if (faqAnswer) return faqAnswer;

  const intent = matchIntent(trimmed);
  if (intent) {
    const variants = intent.responses;
    return variants[Math.floor(Math.random() * variants.length)];
  }

  // "yes" / "book" / "schedule" etc. after any message → offer booking
  const wantsBooking = /\b(yes|yeah|please|book|schedule|consultation|appointment|call me|talk to someone)\b/i.test(trimmed);
  if (wantsBooking && trimmed.length < 60) {
    return BOOKING_RESPONSES[Math.floor(Math.random() * BOOKING_RESPONSES.length)];
  }

  return FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
}

// ─── UI ─────────────────────────────────────────────────────────────────────
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const INITIAL_MESSAGE: Message = {
  id: '1',
  text: "Hi! I'm the Asady Law assistant. We help with buying or selling property, mortgages, notarization, and title transfers in Toronto. What can I help you with?",
  sender: 'bot',
  timestamp: new Date(),
};

type BookingStep = 'date' | 'time' | 'details' | null;
interface BookingData {
  date: Date | null;
  time: string | null;
  name: string;
  email: string;
  phone: string;
}

const initialBookingData: BookingData = { date: null, time: null, name: '', email: '', phone: '' };

function isBookingIntent(message: string): boolean {
  const m = message.toLowerCase().trim();
  return /\b(book|schedule|appointment|consultation|i want to book|can i book|set up a call)\b/i.test(m) && m.length < 80;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [bookingStep, setBookingStep] = useState<BookingStep>(null);
  const [bookingData, setBookingData] = useState<BookingData>(initialBookingData);
  const [bookingCalendarMonth, setBookingCalendarMonth] = useState(new Date());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, isLoading, bookingStep]);
  useEffect(() => { if (isOpen) inputRef.current?.focus(); }, [isOpen]);

  const startBookingFlow = () => {
    setBookingStep('date');
    setBookingData(initialBookingData);
    setBookingCalendarMonth(new Date());
    setMessages((prev) => [
      ...prev,
      { id: (Date.now() + 1).toString(), text: "Great! Let's get you scheduled. First, pick a date below.", sender: 'bot', timestamp: new Date() },
    ]);
  };

  const cancelBooking = () => {
    setBookingStep(null);
    setBookingData(initialBookingData);
    setMessages((prev) => [
      ...prev,
      { id: (Date.now() + 1).toString(), text: "No problem. If you'd like to book later, just say \"book a consultation\" or ask me anything else.", sender: 'bot', timestamp: new Date() },
    ]);
  };

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    const userMessage = text.trim();
    const userMsgEntry = { id: Date.now().toString(), text: userMessage, sender: 'user' as const, timestamp: new Date() };

    if (bookingStep !== null && /^(cancel|never mind|nevermind|back|stop)$/i.test(userMessage.replace(/\s+/g, ' ').trim())) {
      setMessages((prev) => [...prev, userMsgEntry]);
      setInput('');
      cancelBooking();
      return;
    }
    if (!bookingStep && isBookingIntent(userMessage)) {
      setMessages((prev) => [...prev, userMsgEntry]);
      setInput('');
      startBookingFlow();
      return;
    }

    setMessages((prev) => [...prev, userMsgEntry]);
    setInput('');
    setIsLoading(true);

    try {
      const historyForApi = [...messages, userMsgEntry]
        .filter((m) => m.sender !== 'bot' || m.text !== INITIAL_MESSAGE.text)
        .slice(-10)
        .map((m) => ({
          role: m.sender === 'user' ? 'user' : 'assistant',
          content: m.text,
        }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, history: historyForApi }),
      });

      const data = await res.json().catch(() => ({}));
      const reply = res.ok && typeof data?.text === 'string' ? data.text : getBotResponse(userMessage);
      setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), text: reply, sender: 'bot', timestamp: new Date() }]);
    } catch {
      const reply = getBotResponse(userMessage);
      setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), text: reply, sender: 'bot', timestamp: new Date() }]);
    } finally {
      setIsLoading(false);
    }
  };

  const onBookingDateSelect = (d: Date) => {
    if (!isSameMonth(d, bookingCalendarMonth)) return;
    setBookingData((prev) => ({ ...prev, date: d }));
    setMessages((prev) => [
      ...prev,
      { id: (Date.now() + 1).toString(), text: `${format(d, 'EEEE, MMM d')} — now pick a time.`, sender: 'bot', timestamp: new Date() },
    ]);
    setBookingStep('time');
  };

  const onBookingTimeSelect = (time: string) => {
    setBookingData((prev) => ({ ...prev, time }));
    setMessages((prev) => [
      ...prev,
      { id: (Date.now() + 1).toString(), text: "Perfect. Please enter your details below and confirm.", sender: 'bot', timestamp: new Date() },
    ]);
    setBookingStep('details');
  };

  const onBookingDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { date, time, name, email, phone } = bookingData;
    if (!date || !time || !name.trim() || !email.trim() || !phone.trim()) return;
    const confirmText = `Booking confirmed!\n\n${format(date, 'EEEE, MMM d')} at ${time}\n\nWe'll send a calendar invite to ${email}.`;
    setMessages((prev) => [
      ...prev,
      { id: (Date.now() + 1).toString(), text: confirmText, sender: 'bot', timestamp: new Date() },
    ]);
    setBookingStep(null);
    setBookingData(initialBookingData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookingStep === 'details') return;
    sendMessage(input);
  };

  const inBookingFlow = bookingStep !== null;
  const monthStart = startOfMonth(bookingCalendarMonth);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(endOfMonth(monthStart));
  const calendarDays: Date[] = [];
  let day = startDate;
  while (day <= endDate) {
    calendarDays.push(day);
    day = addDays(day, 1);
  }

  return (
    <div className={`fixed bottom-6 right-6 left-auto z-50 transition-all duration-300 ${isOpen ? 'w-[420px] h-[540px]' : 'w-16 h-16'}`}>
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl flex flex-col h-full overflow-hidden border-2 border-[#c9a227]/30">
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#c9a227]/20 bg-[#c9a227]/5">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#c9a227]/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#c9a227]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#0a0a0a]">Asady Law</h3>
                <p className="text-xs text-gray-600">Real estate law · Toronto</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-[#0a0a0a]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 whitespace-pre-line ${msg.sender === 'user' ? 'bg-[#c9a227] text-white' : 'bg-white border border-[#c9a227]/20 text-[#0a0a0a]'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl px-4 py-2.5 bg-white border border-[#c9a227]/20 text-[#0a0a0a]">
                  <span className="inline-flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#c9a227]/60 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-[#c9a227]/60 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-[#c9a227]/60 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </span>
                </div>
              </div>
            )}
            {messages.length === 1 && !inBookingFlow && (
              <div className="space-y-2 pt-2">
                <p className="text-xs text-gray-500 font-medium">Try asking:</p>
                <button onClick={startBookingFlow} className="block w-full text-left text-sm text-[#c9a227] hover:text-[#a8860e] hover:bg-[#c9a227]/10 transition-colors py-2 px-3 rounded-lg border border-[#c9a227]/20 font-medium">
                  Book a consultation
                </button>
                {RECOMMENDED_QUESTIONS.map((q, i) => (
                  <button key={i} onClick={() => sendMessage(q)} className="block w-full text-left text-sm text-[#c9a227] hover:text-[#a8860e] hover:bg-[#c9a227]/10 transition-colors py-2 px-3 rounded-lg border border-[#c9a227]/20">
                    {q}
                  </button>
                ))}
              </div>
            )}

            {inBookingFlow && (
              <div className="rounded-2xl border border-[#c9a227]/30 bg-white p-3 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-[#0a0a0a]">Schedule a consultation</span>
                  <button type="button" onClick={cancelBooking} className="text-xs text-gray-500 hover:text-[#0a0a0a]">Cancel</button>
                </div>

                {bookingStep === 'date' && (
                  <>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[#c9a227] font-medium text-sm">{format(bookingCalendarMonth, 'MMMM yyyy')}</span>
                      <div className="flex gap-0.5">
                        <button type="button" onClick={() => setBookingCalendarMonth((m) => addMonths(m, -1))} className="p-1 rounded hover:bg-[#c9a227]/10 text-[#0a0a0a]">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button type="button" onClick={() => setBookingCalendarMonth((m) => addMonths(m, 1))} className="p-1 rounded hover:bg-[#c9a227]/10 text-[#0a0a0a]">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-7 gap-0.5 text-center">
                      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                        <div key={i} className="text-gray-500 text-[10px] py-0.5">{d}</div>
                      ))}
                      {calendarDays.map((d) => (
                        <button
                          key={d.toISOString()}
                          type="button"
                          onClick={() => onBookingDateSelect(d)}
                          disabled={!isSameMonth(d, monthStart)}
                          className={`py-1 rounded text-xs transition-colors ${!isSameMonth(d, monthStart) ? 'text-gray-200 cursor-not-allowed' : 'text-[#0a0a0a] hover:bg-[#c9a227]/20'} ${isToday(d) ? 'ring-1 ring-[#c9a227]' : ''} ${bookingData.date && isSameDay(d, bookingData.date) ? 'bg-[#c9a227] text-white' : ''}`}
                        >
                          {format(d, 'd')}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {bookingStep === 'time' && (
                  <div className="grid grid-cols-3 gap-1.5 max-h-32 overflow-y-auto">
                    {TIME_SLOTS.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => onBookingTimeSelect(time)}
                        className={`py-1.5 rounded-lg text-xs font-medium transition-colors ${bookingData.time === time ? 'bg-[#c9a227] text-white' : 'bg-gray-100 text-[#0a0a0a] hover:bg-[#c9a227]/20'}`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                )}

                {bookingStep === 'details' && bookingData.date && bookingData.time && (
                  <form onSubmit={onBookingDetailsSubmit} className="space-y-2">
                    <p className="text-xs text-gray-600 mb-2">{format(bookingData.date, 'EEE, MMM d')} at {bookingData.time}</p>
                    <input
                      type="text"
                      required
                      value={bookingData.name}
                      onChange={(e) => setBookingData((p) => ({ ...p, name: e.target.value }))}
                      placeholder="Full name *"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-[#0a0a0a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50"
                    />
                    <input
                      type="email"
                      required
                      value={bookingData.email}
                      onChange={(e) => setBookingData((p) => ({ ...p, email: e.target.value }))}
                      placeholder="Email *"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-[#0a0a0a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50"
                    />
                    <input
                      type="tel"
                      required
                      value={bookingData.phone}
                      onChange={(e) => setBookingData((p) => ({ ...p, phone: e.target.value }))}
                      placeholder="Phone *"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-[#0a0a0a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50"
                    />
                    <button type="submit" className="w-full bg-[#c9a227] text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-[#a8860e] transition-colors">
                      Confirm booking
                    </button>
                  </form>
                )}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
          {bookingStep !== 'details' && (
            <form onSubmit={handleSubmit} className="p-4 border-t border-[#c9a227]/20 bg-white">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={inBookingFlow ? "Or type to ask something else..." : "Ask about our services..."}
                  className="flex-1 border border-gray-300 rounded-xl px-4 py-2.5 text-[#0a0a0a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50"
                />
                <button type="submit" className="bg-[#c9a227] text-white px-4 py-2.5 rounded-xl font-semibold hover:bg-[#a8860e] transition-colors">
                  Send
                </button>
              </div>
            </form>
          )}
        </div>
      ) : (
        <div className="relative">
          <button
            onClick={() => setIsOpen(true)}
            className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#c9a227] text-white flex items-center justify-center shadow-lg hover:bg-[#a8860e] transition-colors flex-shrink-0"
            aria-label="Open chat"
          >
            <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
          </button>
          {showBubble && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-full right-0 mb-2 flex items-center gap-0.5 sm:gap-1 bg-white rounded-xl sm:rounded-2xl rounded-br-md shadow-lg border border-[#c9a227]/30 pl-3 sm:pl-4 pr-1.5 sm:pr-2 py-1.5 sm:py-2 w-[130px] sm:w-[150px] md:min-w-[140px] md:max-w-[160px]"
              >
                <span className="text-[10px] sm:text-xs text-[#0a0a0a] whitespace-nowrap truncate flex-1 min-w-0">Hi! Need help?</span>
                <button
                  onClick={(e) => { e.stopPropagation(); setShowBubble(false); }}
                  className="flex-shrink-0 p-0.5 sm:p-1 rounded-full hover:bg-gray-100 text-gray-500 hover:text-[#0a0a0a] transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      )}
    </div>
  );
}
