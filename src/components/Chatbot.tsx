'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RECOMMENDED_QUESTIONS = [
  "What documents do I need for a home purchase?",
  "How does virtual signing work?",
  "What are your fees for refinancing?",
  "How long does a typical closing take?",
  "Do you work with out-of-province clients?",
];

const BOT_RESPONSES: Record<string, string> = {
  "what documents do i need for a home purchase?": "For a home purchase in Ontario, you'll typically need: government-issued ID, proof of income, your Agreement of Purchase and Sale, mortgage commitment letter, and insurance documents. For virtual closings, we'll also need a clear photo of your ID. Our team will send you a complete checklist once we get started!",
  "how does virtual signing work?": "Our virtual signing process is simple and secure. We use state-of-the-art video conferencing and electronic signature platforms. You'll receive a link to join a virtual meeting at your scheduled time, where our lawyer will walk you through each document. You can sign digitally from the comfort of your home—no office visit needed!",
  "what are your fees for refinancing?": "Our refinancing fees are transparent and competitive. For standard mortgage refinances, we offer competitive flat fees. The exact cost depends on your specific situation—contact us for a free consultation and we'll provide a detailed quote with no surprises.",
  "how long does a typical closing take?": "A typical real estate closing in Ontario takes 4-6 weeks from the date the Agreement of Purchase and Sale is signed. We'll keep you informed at every step with our easy-to-use tracking system. Virtual closings often streamline the process—we'll work around your schedule!",
  "do you work with out-of-province clients?": "Yes! As a virtual real estate law firm, we regularly work with clients across Canada. Whether you're buying or selling property in Ontario, we can handle everything remotely. You'll complete ID verification and signing virtually—no need to travel.",
};

const DEFAULT_RESPONSE = "Thanks for your question! As a virtual real estate law firm, we're here to help with purchases, sales, refinancing, and more. For specific details, I'd recommend booking a free consultation—just use our calendar on the website. Is there anything else I can help with?";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: "Hi! I'm the Asady Law assistant. I can help answer questions about our virtual real estate law services. Try one of the suggested questions below or ask your own!", sender: 'bot', timestamp: new Date() },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);
  useEffect(() => { if (isOpen) inputRef.current?.focus(); }, [isOpen]);

  const getBotResponse = (userMessage: string): string => {
    const normalized = userMessage.toLowerCase().trim();
    for (const [key, response] of Object.entries(BOT_RESPONSES)) {
      if (normalized.includes(key) || key.includes(normalized)) return response;
    }
    return DEFAULT_RESPONSE;
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { id: Date.now().toString(), text: text.trim(), sender: 'user', timestamp: new Date() }]);
    setInput('');
    setTimeout(() => {
      setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), text: getBotResponse(text), sender: 'bot', timestamp: new Date() }]);
    }, 800);
  };

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); sendMessage(input); };

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
                <h3 className="font-semibold text-[#0a0a0a]">Asady Law Assistant</h3>
                <p className="text-xs text-gray-600">Virtual Real Estate Law</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-[#0a0a0a]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${msg.sender === 'user' ? 'bg-[#c9a227] text-white' : 'bg-white border border-[#c9a227]/20 text-[#0a0a0a]'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {messages.length === 1 && (
              <div className="space-y-2 pt-2">
                <p className="text-xs text-gray-500 font-medium">Suggested questions:</p>
                {RECOMMENDED_QUESTIONS.map((q, i) => (
                  <button key={i} onClick={() => sendMessage(q)} className="block w-full text-left text-sm text-[#c9a227] hover:text-[#a8860e] hover:bg-[#c9a227]/10 transition-colors py-2 px-3 rounded-lg border border-[#c9a227]/20">
                    {q}
                  </button>
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="p-4 border-t border-[#c9a227]/20 bg-white">
            <div className="flex gap-2">
              <input ref={inputRef} type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about virtual real estate..." className="flex-1 border border-gray-300 rounded-xl px-4 py-2.5 text-[#0a0a0a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50" />
              <button type="submit" className="bg-[#c9a227] text-white px-4 py-2.5 rounded-xl font-semibold hover:bg-[#a8860e] transition-colors">Send</button>
            </div>
          </form>
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
