'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, MessageCircle, Zap } from 'lucide-react';
import CTASection from '@/components/CTASection';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We\'ll get back to you within 24 hours.');
  };

  return (
    <main className="pt-24 min-h-screen bg-white">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-4">
              Contact Us
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Fill this out and we&apos;ll get back to you in 24 hours. Or give us a call—we&apos;re here to help.
            </p>
          </motion.div>

          {/* Response promise */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-16"
          >
            <div className="glass rounded-2xl p-8 border border-[#c9a227]/20 shadow-lg flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#c9a227]/20 flex items-center justify-center shrink-0">
                  <Zap className="w-7 h-7 text-[#c9a227]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0a0a0a] text-lg">Fast response</h3>
                  <p className="text-gray-600 text-sm">We aim to reply within 24 hours. For urgent matters, call us directly.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#c9a227]/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-7 h-7 text-[#c9a227]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0a0a0a] text-lg">Serving all of Ontario</h3>
                  <p className="text-gray-600 text-sm">Virtual service means we can help you from anywhere in the province.</p>
                </div>
              </div>
            </div>
          </motion.section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <div className="glass rounded-2xl p-8 border border-[#c9a227]/20 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a227]/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#c9a227]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a0a0a] mb-2">Address</h3>
                    <p className="text-gray-600">
                      2212 Lake Shore Blvd W<br />
                      Toronto, ON M8V 0C2<br />
                      Canada
                    </p>
                  </div>
                </div>
              </div>
              <div className="glass rounded-2xl p-8 border border-[#c9a227]/20 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a227]/20 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-[#c9a227]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a0a0a] mb-2">Phone</h3>
                    <a href="tel:+16478012965" className="text-gray-600 hover:text-[#c9a227] transition-colors">
                      +1 647-801-2965
                    </a>
                  </div>
                </div>
              </div>
              <div className="glass rounded-2xl p-8 border border-[#c9a227]/20 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a227]/20 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-[#c9a227]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a0a0a] mb-2">Email</h3>
                    <a href="mailto:soroosh@asadylaw.com" className="text-gray-600 hover:text-[#c9a227] transition-colors">
                      soroosh@asadylaw.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="glass rounded-2xl p-8 border border-[#c9a227]/20 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a227]/20 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-[#c9a227]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a0a0a] mb-2">Hours</h3>
                    <p className="text-gray-600">
                      Monday to Friday: 9:00 AM – 5:00 PM<br />
                      Saturday–Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="glass rounded-2xl p-8 md:p-12 border border-[#c9a227]/20 shadow-lg">
                <h2 className="text-2xl font-bold text-[#0a0a0a] mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 text-sm mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-[#0a0a0a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227]"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-[#0a0a0a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227]"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-[#0a0a0a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227]"
                      placeholder="(647) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm mb-2">Message *</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-[#0a0a0a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227] resize-none"
                      placeholder="How can we help?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#c9a227] text-white py-4 rounded-xl font-semibold hover:bg-[#a8860e] transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
