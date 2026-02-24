'use client';

import Link from 'next/link';
import {
  Home,
  FileSignature,
  Landmark,
  Scale,
} from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Home,
    title: 'Buying & Selling',
    description: 'Whether it\'s residential or commercial, we\'ve got you covered. Seamless virtual closings.',
    href: '/services#buying-selling',
  },
  {
    icon: Landmark,
    title: 'Private Mortgages & Refinancing',
    description: 'Tricky mortgage? No problem. We\'ll take care of it with expert guidance.',
    href: '/services#mortgages',
  },
  {
    icon: FileSignature,
    title: 'Notarization & Commission',
    description: 'Our super-fast service will have your documents ready right away.',
    href: '/services#notarization',
  },
  {
    icon: Scale,
    title: 'Title Transfers & Ownership',
    description: 'Change the ownership structure of your property with ease.',
    href: '/services#title-transfers',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden bg-gradient-to-b from-[#f8f6f1] via-white to-[#f5f0e6]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_20%,rgba(201,162,39,0.08),transparent)] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Full-service virtual real estate law. Everything you need, from anywhere.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={service.href}>
                <div className="group h-full rounded-2xl border border-[#c9a227]/20 bg-white shadow-lg hover:shadow-xl hover:border-[#c9a227]/40 transition-all duration-300 hover:-translate-y-2 min-h-[340px] flex flex-col p-8">
                  <div className="w-16 h-16 rounded-xl bg-[#c9a227]/20 flex items-center justify-center mb-6 group-hover:bg-[#c9a227] group-hover:text-white transition-colors">
                    <service.icon className="w-8 h-8 text-[#c9a227] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4 group-hover:text-[#c9a227] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 mt-6 text-[#c9a227] text-sm font-medium">
                    Learn more
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
