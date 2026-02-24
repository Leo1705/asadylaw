'use client';

import { motion } from 'framer-motion';
import { Laptop, Clock, Shield, Heart } from 'lucide-react';

const features = [
  { icon: Laptop, title: '100% Virtual', description: 'Close from home, the office, or anywhere. No commuting, no office visits.' },
  { icon: Clock, title: 'Flexible Scheduling', description: 'We work around your schedule. Virtual meetings when it suits you.' },
  { icon: Shield, title: 'Secure & Compliant', description: 'Bank-grade security. Your documents and identity are protected.' },
  { icon: Heart, title: 'Client-First', description: 'We make it easy. Simple process, clear communication, peace of mind.' },
];

export default function WhyVirtual() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#faf6ef] via-[#f5f0e6] to-[#f0ebe0]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_70%_50%,rgba(201,162,39,0.06),transparent)] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-4">Why Go Virtual?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Real estate law doesn&apos;t have to be complicated. We&apos;ve made it simple, modern, and stress-free.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl border border-[#c9a227]/20 shadow-lg hover:shadow-xl hover:border-[#c9a227]/40 transition-all h-full p-8">
                <div className="w-16 h-16 rounded-xl bg-[#c9a227]/20 flex items-center justify-center mb-6 group-hover:bg-[#c9a227] group-hover:text-white transition-colors">
                  <feature.icon className="w-8 h-8 text-[#c9a227] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
