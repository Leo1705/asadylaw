'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, Heart, Award, Zap, MapPin, ShieldCheck } from 'lucide-react';
import CTASection from '@/components/CTASection';

const values = [
  {
    icon: Heart,
    title: 'Client-First',
    description: 'We prioritize your needs, ensuring personalized and seamless legal solutions.',
  },
  {
    icon: Target,
    title: 'Honest & Transparent',
    description: 'Honesty and transparency guide every interaction and decision we make.',
  },
  {
    icon: Award,
    title: 'Professional Excellence',
    description: 'We deliver effective results while maintaining the highest professional standards.',
  },
  {
    icon: Zap,
    title: 'Efficient & Modern',
    description: 'Virtual-first approach means faster, more convenient service for you.',
  },
];

export default function AboutPage() {
  return (
    <main className="pt-24 min-h-screen">
      {/* Hero with Soroosh */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[#f8f6f1] via-white to-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-md mx-auto lg:max-w-none lg:w-2/5 shrink-0"
            >
              <div className="relative aspect-[3/4] max-h-[560px] rounded-2xl overflow-hidden border-2 border-[#c9a227]/30 shadow-2xl">
                <Image
                  src="/assets/soroosh-asady.png"
                  alt="Soroosh Asady - Founder, Asady Law"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1 text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-4">
                Meet <span className="text-[#c9a227]">Soroosh Asady</span>
              </h1>
              <p className="text-lg text-[#c9a227] font-semibold mb-6">Founder & Principal Lawyer</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Soroosh founded Asady Law to make real estate law more accessible and stress-free. With a focus on clarity and client care, he leads a team that handles every transaction with the same attention you&apos;d expect in person—delivered virtually, so you can close from anywhere.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you&apos;re buying your first home, refinancing, or need notarization and commissioning, Asady Law is built to guide you through each step with expertise and a modern, streamlined process.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About the firm */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-4">Trusted. Experienced. Client-Centric.</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Asady Law is dedicated to client satisfaction. We strive to earn your trust and loyalty by delivering value through our innovative and personalized legal services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-10 md:p-14 mb-20 border border-[#c9a227]/20 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-6">About Asady Law</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Asady Law is Toronto&apos;s premier virtual real estate law firm. With a focus on efficiency and personalized care, we offer clients unparalleled convenience and professionalism—all while maintaining the flexibility to work with your schedule.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We specialize in providing seamless, remote legal services for a variety of clients: buyers and sellers, landlords and tenants, lenders and borrowers, and developers. Our expertise spans residential and commercial property transactions, mortgage refinancing, wills, and business agreements. Every client receives top-tier service, whether closing on a property, drafting important legal documents, or seeking guidance on complex agreements.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-[#0a0a0a] text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="glass rounded-2xl p-8 border border-[#c9a227]/20 hover:border-[#c9a227]/40 transition-colors shadow-lg"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#c9a227]/20 flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-[#c9a227]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-20 bg-gradient-to-b from-[#f8f6f1] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#0a0a0a] text-center mb-12">Areas We Serve</h2>
            <div className="glass rounded-2xl p-10 border border-[#c9a227]/20 shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#c9a227]/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-7 h-7 text-[#c9a227]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a0a0a] text-lg">Toronto & GTA</h3>
                    <p className="text-gray-600 text-sm">Based in Toronto, serving the Greater Toronto Area with in-person availability when needed.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#c9a227]/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-7 h-7 text-[#c9a227]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a0a0a] text-lg">All of Ontario</h3>
                    <p className="text-gray-600 text-sm">Fully virtual service means we can help you close your deal from anywhere in the province.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </section>

      {/* Professional Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#0a0a0a] text-center mb-12">Professional Standards</h2>
            <div className="glass rounded-2xl p-12 border border-[#c9a227]/20 shadow-lg flex flex-col md:flex-row items-center gap-10">
              <div className="w-20 h-20 rounded-2xl bg-[#c9a227]/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-10 h-10 text-[#c9a227]" />
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Asady Law is committed to the highest standards of professional conduct. We are licensed by the Law Society of Ontario and carry professional liability insurance. Your transaction is handled with confidentiality, diligence, and clear communication from start to finish.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Whether you&apos;re a first-time buyer or an experienced investor, you can trust that we&apos;ll guide you through every step with expertise and care.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
