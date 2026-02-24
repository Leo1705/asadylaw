'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote, FileCheck, BarChart3, Video } from 'lucide-react';

const steps = [
  { number: 'I', week: 'Week 1', icon: Quote, title: 'Consultation & Planning', description: 'Discuss your real estate goals with Asady Law to create a personalized legal strategy and outline the steps ahead.' },
  { number: 'II', week: 'Week 2', icon: FileCheck, title: 'Agreement & Title Review', description: 'Thoroughly examine purchase agreements, conduct title searches, and address any potential issues to protect your interests.' },
  { number: 'III', week: 'Week 3', icon: BarChart3, title: 'Document Preparation', description: 'We prepare all necessary legal documents and coordinate with all parties to ensure everything is ready for closing.' },
  { number: 'IV', week: 'Week 4', icon: Video, title: 'Virtual Signing & Closing', description: 'Attend a virtual meeting to sign your documents. From your home, office, or anywhere. Smooth and successful transaction.' },
];

export default function ProcessSteps() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  });

  // Parallax: vertical line fill progresses as user scrolls through the section
  const lineProgress = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.25, 0.75, 1]);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-[#faf6ef] to-[#f8f4eb]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_80%,rgba(201,162,39,0.06),transparent)] pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-4">Our Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Simple, transparent, and designed for virtual closings. No complexity—just clarity.</p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line - track (gray) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gray-200" />

          {/* Vertical timeline line - fill (gold) - parallax with scroll */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-[#c9a227] origin-top"
            style={{
              scaleY: lineProgress,
            }}
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`relative flex items-center gap-12 py-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                <h3 className="text-xl font-bold text-[#0a0a0a] mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>

              {/* Center - Icon circle */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-[#c9a227] flex items-center justify-center shadow-lg">
                  <step.icon className="w-7 h-7 text-[#c9a227]" />
                </div>
                <div className={`absolute top-full mt-2 ${index % 2 === 0 ? 'right-0' : 'left-0'}`}>
                  <span className="text-sm font-semibold text-[#c9a227]">{step.week}</span>
                </div>
              </div>

              {/* Opposite side - Week number */}
              <div className={`flex-1 ${index % 2 === 0 ? 'text-left pl-12' : 'text-right pr-12'}`}>
                <span className="text-2xl font-bold text-[#c9a227]/40">{step.number}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
