'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-[#c9a227]/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo.png"
            alt="Asady Law"
            width={180}
            height={72}
            className="h-14 w-auto object-contain [filter:invert(1)_brightness(0.9)]"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#0a0a0a]/90 hover:text-[#c9a227] transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#book"
            className="bg-[#c9a227] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#a8860e] transition-colors"
          >
            Book a Consultation
          </Link>
        </nav>

        <button
          className="md:hidden text-[#0a0a0a] p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden glass border-t border-[#c9a227]/10 bg-white/95">
          <nav className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#0a0a0a]/90 hover:text-[#c9a227] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#book"
              className="bg-[#c9a227] text-white px-6 py-3 rounded-full font-semibold text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
