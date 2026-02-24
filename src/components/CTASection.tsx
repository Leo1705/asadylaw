'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const PHONE_NUMBER = '+1 647-801-2965';
const PHONE_HREF = 'tel:+16478012965';

interface CTASectionProps {
  variant?: 'home' | 'default';
}

export default function CTASection({ variant = 'default' }: CTASectionProps) {
  if (variant === 'home') {
    return (
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-[#faf8f5] to-[#f8f6f1] border-t border-[#c9a227]/15">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(201,162,39,0.06),transparent)]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-3"
          >
            Urgent or emergency real estate matter?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-gray-600 mb-6"
          >
            Call us directly for time-sensitive closings or urgent questions.
          </motion.p>
          <motion.a
            href={PHONE_HREF}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-block text-2xl md:text-3xl font-bold text-[#c9a227] hover:text-[#a8860e] transition-colors"
          >
            {PHONE_NUMBER}
          </motion.a>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-[#faf8f5] to-[#f8f6f1] border-t border-[#c9a227]/15">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(201,162,39,0.06),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-4"
        >
          Don&apos;t leave your closing to chance—get expert help today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg"
        >
          Join hundreds of Ontario clients who&apos;ve closed with confidence. Book your free consultation now and we&apos;ll take care of the rest—transparent pricing, clear communication, and a smooth virtual process from start to finish.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Link
            href="/#book"
            className="inline-block bg-[#c9a227] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#a8860e] transition-colors shadow-lg shadow-[#c9a227]/25"
          >
            Book your free consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
