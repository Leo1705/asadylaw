'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const reviews = [
  { name: 'Sarah M.', rating: 5, text: 'Could not have asked for a more amazing experience. Everything was done virtually which made it so convenient. Highly recommend Asady Law!' },
  { name: 'James T.', rating: 5, text: 'Very professional and efficient. The virtual signing process was seamless. They made buying our first home stress-free.' },
  { name: 'Jennifer K.', rating: 5, text: 'I was amazed at how efficient the whole process was. From start to finish with our refinance—everything online, no office visits needed.' },
  { name: 'David R.', rating: 5, text: 'Wonderful experience from start to finish. I loved that I could complete every required step remotely from the comfort of my home.' },
  { name: 'Michelle L.', rating: 5, text: 'Outstanding service! The team was responsive, professional, and made our condo purchase smooth and stress-free.' },
  { name: 'Robert K.', rating: 5, text: 'Best virtual law experience. Clear communication, easy document uploads, and signed from my kitchen table!' },
];

const duplicatedReviews = [...reviews, ...reviews, ...reviews];

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pauseRef = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const scroll = () => {
      if (pauseRef.current) return;
      el.scrollLeft += 1.2;
      if (el.scrollLeft >= el.scrollWidth / 3) el.scrollLeft = 0;
    };
    const id = setInterval(scroll, 20);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="reviews" className="relative py-24 overflow-hidden bg-gradient-to-b from-[#f5f0e6] via-[#f8f4ed] to-[#f0ebe0]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(201,162,39,0.07),transparent)] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-gray-600 font-medium">Google Reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Real reviews from real clients. We pull the newest reviews directly from Google.</p>
        </motion.div>

        {/* Carousel with fading edges */}
        <div className="relative">
          <div
            className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"
            aria-hidden
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"
            aria-hidden
          />

          <div
            ref={scrollRef}
            onMouseEnter={() => { pauseRef.current = true; }}
            onMouseLeave={() => { pauseRef.current = false; }}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4 -mx-6 px-6 cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {duplicatedReviews.map((review, index) => (
              <motion.div
                key={`${review.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[380px] max-w-[90vw]"
              >
                <div className="bg-white rounded-2xl p-8 border border-[#c9a227]/20 shadow-lg h-full">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#c9a227]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                  <p className="text-[#c9a227] font-semibold">— {review.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://www.google.com/search?q=asadylaw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#c9a227] hover:text-[#a8860e] transition-colors font-medium"
          >
            See all reviews on Google
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
