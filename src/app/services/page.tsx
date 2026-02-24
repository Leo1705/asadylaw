'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Home,
  FileSignature,
  Landmark,
  Scale,
  MessageSquare,
  FileCheck,
  Calendar,
  PenTool,
} from 'lucide-react';
import { motion } from 'framer-motion';
import CTASection from '@/components/CTASection';
import { ServiceCardFigure } from '@/components/ServiceCardFigure';

const howItWorksSteps = [
  { icon: MessageSquare, title: 'Get a quote', description: "Tell us about your transaction and we'll provide a clear, upfront quote." },
  { icon: FileCheck, title: 'Submit your documents', description: 'Upload your ID and any relevant paperwork through our secure portal.' },
  { icon: Calendar, title: 'Review & sign', description: 'We prepare everything and coordinate signing at a time that works for you.' },
  { icon: PenTool, title: 'Close your deal', description: 'We handle the rest—funds, registration, and keys when the time comes.' },
];

const services = [
  {
    id: 'buying-selling',
    icon: Home,
    title: 'Buying & Selling a Property',
    description: 'Whether it\'s residential or commercial, we\'ve got you covered. Our virtual process makes buying or selling seamless—from offer to closing, all from the comfort of your home.',
    details: ['Residential purchases & sales', 'Commercial transactions', 'Condo & freehold', 'Virtual document signing'],
  },
  {
    id: 'mortgages',
    icon: Landmark,
    title: 'Private Mortgages & Refinancing',
    description: 'Tricky mortgage? No problem. We\'ll take care of it with expert guidance. Refinancing, mortgage transfers, and private lending—we handle it all virtually.',
    details: ['Mortgage refinancing', 'Mortgage transfers', 'Private lending', 'Bridge financing'],
  },
  {
    id: 'notarization',
    icon: FileSignature,
    title: 'Notarization & Commission',
    description: 'Our super-fast service will have your documents ready right away. Affidavits, statutory declarations, and commissioning—all available virtually.',
    details: ['Affidavits', 'Statutory declarations', 'Document commissioning', 'Notarization'],
  },
  {
    id: 'title-transfers',
    icon: Scale,
    title: 'Title Transfers & Ownership Change',
    description: 'Change the ownership structure of your property with ease. We handle transfers, name changes, and ownership modifications with a streamlined virtual process.',
    details: ['Title transfers', 'Name changes', 'Ownership restructuring', 'Estate transfers'],
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-24 min-h-screen">
      {/* Services section with bg image and glass cards */}
      <section className="relative py-20 overflow-hidden">
        {/* Background image — Toronto */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h1>
            <p className="text-white/90 max-w-2xl mx-auto text-lg">
              Full-service virtual real estate law. Everything you need, done remotely with care and precision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.article
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                className="scroll-mt-24 rounded-2xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl"
              >
                <div className="relative aspect-[16/10] min-h-[200px]">
                  <ServiceCardFigure serviceId={service.id as 'buying-selling' | 'mortgages' | 'notarization' | 'title-transfers'} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-white/5 backdrop-blur-sm">
                  <h2 className="text-xl font-bold text-white mb-3">{service.title}</h2>
                  <p className="text-white/85 text-sm leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-1.5 mb-6">
                    {service.details.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-white/80 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/#book" className="inline-flex items-center gap-2 text-[#c9a227] font-semibold hover:text-[#d4af37] transition-colors text-sm">
                    Get a quote
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#f8f6f1] to-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* How It Works */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-0"
          >
            <h2 className="text-3xl font-bold text-[#0a0a0a] text-center mb-4">How It Works</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">From first contact to closing, we keep the process simple and transparent.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorksSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass rounded-2xl p-8 border border-[#c9a227]/20 shadow-lg text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#c9a227]/20 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-7 h-7 text-[#c9a227]" />
                  </div>
                  <h3 className="font-semibold text-[#0a0a0a] mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Transparent Pricing */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <div className="glass rounded-2xl p-12 border border-[#c9a227]/20 shadow-lg">
              <h2 className="text-2xl font-bold text-[#0a0a0a] text-center mb-6">Transparent Pricing</h2>
              <p className="text-gray-600 text-center max-w-2xl mx-auto leading-relaxed">
                No hidden fees. You&apos;ll receive a clear quote based on your transaction type before we begin. We believe you deserve to know exactly what you&apos;re paying for—so you can plan with confidence.
              </p>
              <div className="text-center mt-8">
                <Link
                  href="/#book"
                  className="inline-block bg-[#c9a227] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#a8860e] transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </motion.section>

          </div>
      </section>
      <CTASection />
    </main>
  );
}
