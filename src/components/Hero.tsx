'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// Hero background video: public/video/42825-433896258_small.mp4
const HERO_VIDEO_SRC = '/video/42825-433896258_small.mp4';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#f8f6f1]">
      {/* Decorative background (behind video) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_90%_at_50%_-10%,rgba(201,162,39,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_85%_40%,rgba(201,162,39,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_15%_70%,rgba(201,162,39,0.06),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(201,162,39,0.4) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(201,162,39,0.4) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(201,162,39,0.5) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Video layer — on top of decorative background, always visible */}
      {HERO_VIDEO_SRC && (
        <div className="absolute inset-0 z-[5]">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover opacity-100"
            src={HERO_VIDEO_SRC}
          />
          {/* Light overlay so text and section stand out */}
          <div className="absolute inset-0 bg-[#f8f6f1]/55 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f8f6f1]/50 via-[#f8f6f1]/40 to-[#f8f6f1]/60 pointer-events-none" />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        {/* Google Reviews at top (replacing dark logo) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 inline-flex items-center gap-4 bg-white/95 backdrop-blur-md rounded-2xl px-6 py-4 border border-[#c9a227]/20 shadow-lg"
        >
          <div className="flex items-center gap-2">
            <svg className="w-10 h-10 shrink-0" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="text-left">
              <p className="text-[#0a0a0a] font-semibold">Google Reviews</p>
              <p className="text-[#c9a227] text-sm">Trusted by clients across Ontario</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-5 h-5 text-[#c9a227]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-[#0a0a0a] font-bold ml-1">5.0</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a0a0a] max-w-4xl mx-auto leading-tight mb-6"
        >
          Toronto&apos;s Premier{' '}
          <span className="text-[#c9a227]">Virtual</span> Real Estate Law Firm
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[#0a0a0a]/80 max-w-2xl mx-auto mb-10"
        >
          Full service real estate law practice specializing in purchases, sales, and refinancing of residential and commercial properties. All done virtually—from anywhere.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <Link
            href="#book"
            className="bg-[#c9a227] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#a8860e] transition-all hover:scale-105 shadow-lg shadow-[#c9a227]/30"
          >
            Book a Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
