'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface SplitSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  goldText?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function SplitSection({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  goldText,
  ctaText,
  ctaHref = '#book',
}: SplitSectionProps) {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#f8f4ed] via-white to-[#f5f0e6]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_10%_30%,rgba(201,162,39,0.06),transparent)] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          <motion.div
            initial={{ opacity: 0, x: reverse ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={reverse ? 'lg:order-2' : ''}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#c9a227]/20">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: reverse ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={reverse ? 'lg:order-1' : ''}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6">
              {title}
              {goldText && <span className="text-[#c9a227]"> {goldText}</span>}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">{description}</p>
            {ctaText && (
              <a
                href={ctaHref}
                className="inline-block bg-[#c9a227] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#a8860e] transition-colors"
              >
                {ctaText}
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
