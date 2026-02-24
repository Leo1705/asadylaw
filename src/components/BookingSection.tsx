'use client';

import { useState } from 'react';
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
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TIME_SLOTS = [
  '9:00 AM', '9:15 AM', '9:30 AM', '9:45 AM',
  '10:00 AM', '10:15 AM', '10:30 AM', '10:45 AM',
  '11:00 AM', '11:15 AM', '11:30 AM', '11:45 AM',
  '1:00 PM', '1:15 PM', '1:30 PM', '1:45 PM',
  '2:00 PM', '2:15 PM', '2:30 PM', '2:45 PM',
  '3:00 PM', '3:15 PM', '3:30 PM', '3:45 PM',
  '4:00 PM', '4:15 PM', '4:30 PM', '4:45 PM',
];

export default function BookingSection() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingForm, setBookingForm] = useState({ name: '', email: '', phone: '' });

  const [inquiryForm, setInquiryForm] = useState({ name: '', email: '', message: '' });
  const [inquirySent, setInquirySent] = useState(false);

  const monthStart = startOfMonth(currentMonth);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(endOfMonth(monthStart));

  const days: Date[] = [];
  let day = startDate;
  while (day <= endDate) {
    days.push(day);
    day = addDays(day, 1);
  }

  const handleDateSelect = (d: Date) => {
    if (!isSameMonth(d, monthStart)) return;
    setSelectedDate(d);
    setSelectedTime(null);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;
    setBookingConfirmed(true);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
  };

  const handleResetBooking = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    setBookingConfirmed(false);
    setBookingForm({ name: '', email: '', phone: '' });
  };

  return (
    <section id="book" className="relative py-24 overflow-hidden bg-gradient-to-b from-[#f5f0e6] via-white to-[#f8f4ed]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_90%_70%,rgba(201,162,39,0.07),transparent)] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-4">Book a Consultation or Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Choose a time that works for you, or send us a question—we’re here to help.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: One form — calendar + time + booking details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 border border-[#c9a227]/20 shadow-xl"
          >
            <h3 className="text-xl font-semibold text-[#0a0a0a] mb-6">Schedule a consultation</h3>

            <AnimatePresence mode="wait">
              {!bookingConfirmed ? (
                <motion.div key="booking-flow" initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                  {/* Step 1: Date & time only — show first */}
                  {(!selectedDate || !selectedTime) && (
                    <>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-medium text-gray-700">Select Date & Time</h4>
                          <div className="flex gap-1">
                            <button
                              type="button"
                              onClick={() => setCurrentMonth(addMonths(currentMonth, -1))}
                              className="p-1.5 rounded-lg hover:bg-[#c9a227]/10 transition-colors text-[#0a0a0a]"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                              className="p-1.5 rounded-lg hover:bg-[#c9a227]/10 transition-colors text-[#0a0a0a]"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                        <p className="text-[#c9a227] font-medium text-sm mb-3">{format(currentMonth, 'MMMM yyyy')}</p>
                        <div className="grid grid-cols-7 gap-1.5 mb-4">
                          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                            <div key={d} className="text-center text-gray-500 text-xs py-1">{d}</div>
                          ))}
                          {days.map((d) => (
                            <button
                              key={d.toString()}
                              type="button"
                              onClick={() => handleDateSelect(d)}
                              disabled={!isSameMonth(d, monthStart)}
                              className={`py-1.5 rounded-lg text-sm transition-colors ${
                                !isSameMonth(d, monthStart) ? 'text-gray-300 cursor-not-allowed' : ''
                              } ${isSameMonth(d, monthStart) ? 'text-[#0a0a0a] hover:bg-[#c9a227]/20' : ''} ${
                                isToday(d) ? 'ring-1 ring-[#c9a227]' : ''
                              } ${selectedDate && isSameDay(d, selectedDate) ? 'bg-[#c9a227] text-white' : ''}`}
                            >
                              {format(d, 'd')}
                            </button>
                          ))}
                        </div>
                        {selectedDate && (
                          <>
                            <p className="text-gray-600 text-sm mb-2">Selected: {format(selectedDate, 'EEEE, MMM d')}</p>
                            <p className="text-sm font-medium text-gray-700 mb-2">15-Minute Time Slots</p>
                            <div className="grid grid-cols-4 gap-2 max-h-40 overflow-y-auto">
                              {TIME_SLOTS.map((time) => (
                                <button
                                  key={time}
                                  type="button"
                                  onClick={() => setSelectedTime(time)}
                                  className={`py-2 rounded-lg text-xs font-medium transition-colors ${
                                    selectedTime === time
                                      ? 'bg-[#c9a227] text-white'
                                      : 'bg-gray-100 text-[#0a0a0a] hover:bg-[#c9a227]/20'
                                  }`}
                                >
                                  {time}
                                </button>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </>
                  )}

                  {/* Step 2: Your details form — only after date & time selected */}
                  {selectedDate && selectedTime && (
                    <motion.form
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      onSubmit={handleBookingSubmit}
                      className="space-y-6 border-t border-[#c9a227]/20 pt-6"
                    >
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <p className="text-gray-600 text-sm">
                          {format(selectedDate, 'EEEE, MMM d')} at {selectedTime}
                        </p>
                        <div className="flex gap-3">
                          <button
                            type="button"
                            onClick={() => { setSelectedDate(null); setSelectedTime(null); }}
                            className="text-xs text-[#c9a227] font-medium hover:underline"
                          >
                            Change date
                          </button>
                          <button
                            type="button"
                            onClick={() => setSelectedTime(null)}
                            className="text-xs text-[#c9a227] font-medium hover:underline"
                          >
                            Change time
                          </button>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-3">Your details</h4>
                        <div className="space-y-4">
                          <input
                            type="text"
                            required
                            value={bookingForm.name}
                            onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-[#0a0a0a] text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227]"
                            placeholder="Full name *"
                          />
                          <input
                            type="email"
                            required
                            value={bookingForm.email}
                            onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-[#0a0a0a] text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227]"
                            placeholder="Email *"
                          />
                          <input
                            type="tel"
                            required
                            value={bookingForm.phone}
                            onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-[#0a0a0a] text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227]"
                            placeholder="Phone *"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-[#c9a227] text-white py-4 rounded-xl font-semibold hover:bg-[#a8860e] transition-colors"
                      >
                        Confirm booking
                      </button>
                    </motion.form>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="confirmed"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <div className="w-14 h-14 rounded-full bg-[#c9a227]/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0a0a0a] mb-2">Booking confirmed</h3>
                  <p className="text-gray-600 text-sm mb-6">
                    Your free consultation is scheduled for {selectedDate && format(selectedDate, 'EEEE, MMM d')} at {selectedTime}.
                    We’ll send a calendar invite to {bookingForm.email}.
                  </p>
                  <button
                    type="button"
                    onClick={handleResetBooking}
                    className="text-[#c9a227] font-semibold hover:underline text-sm"
                  >
                    Book another appointment
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* RIGHT: Standalone form — no calendar, for questions / general inquiry */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 border border-[#c9a227]/20 shadow-xl"
          >
            <h3 className="text-xl font-semibold text-[#0a0a0a] mb-2">Have a question?</h3>
            <p className="text-gray-600 text-sm mb-6">Send us a message and we’ll get back to you shortly.</p>

            <AnimatePresence mode="wait">
              {!inquirySent ? (
                <motion.form
                  key="inquiry-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleInquirySubmit}
                  className="space-y-4"
                >
                  <div>
                    <input
                      type="text"
                      required
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-[#0a0a0a] text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227]"
                      placeholder="Your name *"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      value={inquiryForm.email}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-[#0a0a0a] text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227]"
                      placeholder="Email *"
                    />
                  </div>
                  <div>
                    <textarea
                      required
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                      rows={4}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-[#0a0a0a] text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227] resize-none"
                      placeholder="Your message *"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#c9a227] text-white py-4 rounded-xl font-semibold hover:bg-[#a8860e] transition-colors"
                  >
                    Send message
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="inquiry-sent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-14 h-14 rounded-full bg-[#c9a227]/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0a0a0a] mb-2">Message sent</h3>
                  <p className="text-gray-600 text-sm">We’ll get back to you within 24 hours.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
