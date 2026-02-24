'use client';

import { motion } from 'framer-motion';

const float = {
  animate: { y: [0, -6, 0], transition: { duration: 2.8, repeat: Infinity, ease: 'easeInOut' } },
};

const GOLD = '#c9a227';

/* Reusable forward-facing figure: cardigan, t-shirt, left hand on hip, right at side. idPrefix avoids gradient ID clashes across cards. */
function PersonFromFront({ idPrefix = 'p', transform = 'translate(0,0)' }: { idPrefix?: string; transform?: string }) {
  const s = (name: string) => `${idPrefix}_${name}`;
  return (
    <>
      <defs>
        <linearGradient id={s('skin')} x1="30" y1="0" x2="30" y2="45" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,240,228,0.98)" />
          <stop offset="100%" stopColor="rgba(248,228,212,0.98)" />
        </linearGradient>
        <linearGradient id={s('hair')} x1="30" y1="0" x2="30" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(58,48,38,0.98)" />
          <stop offset="100%" stopColor="rgba(38,28,22,0.98)" />
        </linearGradient>
        <linearGradient id={s('cardigan')} x1="0" y1="40" x2="60" y2="85" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(72,72,78,0.98)" />
          <stop offset="50%" stopColor="rgba(62,62,68,0.98)" />
          <stop offset="100%" stopColor="rgba(52,52,58,0.98)" />
        </linearGradient>
        <linearGradient id={s('shirt')} x1="30" y1="42" x2="30" y2="72" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(248,248,245,0.98)" />
          <stop offset="100%" stopColor="rgba(238,236,230,0.98)" />
        </linearGradient>
        <linearGradient id={s('trousers')} x1="30" y1="70" x2="30" y2="118" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(28,38,58,0.98)" />
          <stop offset="100%" stopColor="rgba(18,28,48,0.98)" />
        </linearGradient>
      </defs>
      <g transform={transform} stroke="#1a1a1a" fill="none" strokeLinejoin="round" strokeLinecap="round">
        <ellipse cx="30" cy="20" rx="12" ry="14" fill={`url(#${s('skin')})`} strokeWidth="0.9" stroke="#2a2422" />
        <path d="M20 28 Q22 32 30 32 Q38 32 40 28" stroke="rgba(0,0,0,0.08)" strokeWidth="0.6" fill="none" />
        <path d="M18 6 Q20 2 30 2 Q40 2 41 6 L42 14 Q42 24 38 28 L36 30 Q32 32 24 30 L20 26 Q18 18 18 10 Z" fill={`url(#${s('hair')})`} strokeWidth="0.6" stroke="#1a1512" strokeLinejoin="round" />
        <path d="M38 8 L39 22" stroke="rgba(28,22,18,0.9)" strokeWidth="0.5" />
        <path d="M24 32 L26 42 L34 42 L36 32 Z" fill={`url(#${s('skin')})`} strokeWidth="0.6" stroke="#2a2422" />
        <path d="M28 34 L28 40" stroke="rgba(0,0,0,0.06)" strokeWidth="0.4" fill="none" />
        <path d="M22 42 L26 40 L30 42 L34 40 L38 42 L38 68 L22 68 Z" fill={`url(#${s('shirt')})`} strokeWidth="0.5" stroke="#c8c6c2" />
        <path d="M14 44 L14 72 L18 74 L18 46 L22 44 L22 70 L20 72 L20 44 Z" fill={`url(#${s('cardigan')})`} strokeWidth="0.7" stroke="#3a3a42" />
        <path d="M46 44 L46 72 L44 74 L44 46 L40 44 L40 72 Z" fill={`url(#${s('cardigan')})`} strokeWidth="0.7" stroke="#3a3a42" />
        <path d="M22 44 L30 42 L38 44" stroke="#3a3a42" strokeWidth="0.5" fill="none" />
        <path d="M16 46 L8 56 L10 72 L18 74 L20 68 L14 58 Z" fill={`url(#${s('cardigan')})`} strokeWidth="0.65" stroke="#3a3a42" />
        <path d="M10 56 L12 68" stroke="rgba(48,48,54,0.9)" strokeWidth="0.5" fill="none" />
        <path d="M44 46 L48 50 L48 88 L46 90 L44 86 L44 52 Z" fill={`url(#${s('cardigan')})`} strokeWidth="0.65" stroke="#3a3a42" />
        <path d="M46 52 L46 84" stroke="rgba(48,48,54,0.9)" strokeWidth="0.45" fill="none" />
        <ellipse cx="18" cy="72" rx="3" ry="4" fill={`url(#${s('skin')})`} strokeWidth="0.5" stroke="#2a2422" />
        <path d="M20 70 L16 74 L16 112 L22 116 L24 112 L24 74 Z" fill={`url(#${s('trousers')})`} strokeWidth="0.7" stroke="#151a28" />
        <path d="M40 70 L44 74 L44 112 L38 116 L36 112 L36 74 Z" fill={`url(#${s('trousers')})`} strokeWidth="0.7" stroke="#151a28" />
        <path d="M18 78 L18 110" stroke="rgba(12,20,38,0.7)" strokeWidth="0.4" fill="none" />
        <path d="M42 78 L42 110" stroke="rgba(12,20,38,0.7)" strokeWidth="0.4" fill="none" />
        <path d="M16 112 L14 116 L18 118 L24 118 L26 116 L24 112 Z" fill="rgba(18,18,22,0.98)" strokeWidth="0.5" stroke="#0a0a0e" />
        <path d="M18 116 L24 116" stroke="rgba(220,218,210,0.9)" strokeWidth="0.6" />
        <path d="M36 112 L34 116 L38 118 L44 118 L46 116 L44 112 Z" fill="rgba(18,18,22,0.98)" strokeWidth="0.5" stroke="#0a0a0e" />
        <path d="M38 116 L44 116" stroke="rgba(220,218,210,0.9)" strokeWidth="0.6" />
      </g>
    </>
  );
}

/* Fuller figure from behind: broader shoulders/torso, thicker limbs, more substantial hair */
function PersonFromBehind({ children }: { children: React.ReactNode }) {
  return (
    <g stroke="#1a1a1a" fill="none" strokeLinejoin="round" strokeLinecap="round">
      <defs>
        <linearGradient id="hairGrad" x1="28" y1="2" x2="28" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(72,58,46,0.98)" />
          <stop offset="45%" stopColor="rgba(52,40,30,0.98)" />
          <stop offset="100%" stopColor="rgba(38,28,22,0.98)" />
        </linearGradient>
        <linearGradient id="skinGrad" x1="28" y1="30" x2="28" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,238,225,0.98)" />
          <stop offset="100%" stopColor="rgba(248,228,212,0.98)" />
        </linearGradient>
        <linearGradient id="jacketGrad" x1="8" y1="38" x2="48" y2="92" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(28,38,58,0.98)" />
          <stop offset="50%" stopColor="rgba(22,32,50,0.98)" />
          <stop offset="100%" stopColor="rgba(18,26,42,0.98)" />
        </linearGradient>
        <linearGradient id="sleeveGrad" x1="6" y1="46" x2="22" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(32,42,62,0.98)" />
          <stop offset="100%" stopColor="rgba(22,30,48,0.98)" />
        </linearGradient>
        <linearGradient id="trouserGrad" x1="16" y1="64" x2="36" y2="102" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(32,42,60,0.98)" />
          <stop offset="100%" stopColor="rgba(24,34,50,0.98)" />
        </linearGradient>
        <linearGradient id="shoeGrad" x1="14" y1="98" x2="26" y2="108" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(28,28,32,0.98)" />
          <stop offset="100%" stopColor="rgba(14,14,18,0.98)" />
        </linearGradient>
      </defs>
      {/* Back of head — slightly larger, rounder */}
      <path d="M28 8 Q18 11 17 20 Q16 28 20 34 L22 36 Q26 38 34 38 L36 36 Q40 29 39 20 Q38 11 28 8 Z" fill="url(#skinGrad)" strokeWidth="0.85" stroke="#2a2420" />
      {/* Hair — fuller mass, wraps more around sides and down to nape */}
      <path d="M17 7 Q19 3 28 3 Q37 3 39 7 L40 14 Q40 23 38 29 L37 34 Q34 38 28 38 Q22 38 19 34 L18 29 Q17 23 17 14 Z" fill="url(#hairGrad)" strokeWidth="0.6" stroke="#1a1512" strokeLinejoin="round" />
      {/* Neck — slightly wider */}
      <path d="M23 35 L24 41 L32 41 L33 35 Z" fill="url(#skinGrad)" strokeWidth="0.65" stroke="#2a2420" />
      <path d="M25 37 L27 39 L27 41" stroke="rgba(0,0,0,0.06)" strokeWidth="0.5" fill="none" />
      {/* Collar */}
      <path d="M24 38 L28 36 L32 38 L32 40 L28 38 L24 40 Z" fill="rgba(248,250,252,0.98)" strokeWidth="0.55" stroke="#1a1a1a" />
      {/* Jacket — broader shoulders, fuller back */}
      <path d="M15 40 Q15 44 18 47 L18 60 Q18 66 22 68 L28 68 Q34 66 34 60 L34 47 Q36 44 36 40 L39 40 Q41 45 41 52 L41 82 Q41 88 28 90 Q15 88 15 82 L15 52 Q15 45 15 40 Z" fill="url(#jacketGrad)" strokeWidth="0.85" stroke="#151a22" />
      <path d="M28 45 L28 86" stroke="rgba(18,28,42,0.4)" strokeWidth="0.3" />
      {/* Left arm — thicker upper sleeve and forearm */}
      <path d="M15 44 L8 48 L6 57 L8 62 L11 58 L14 51 Z" fill="url(#sleeveGrad)" strokeWidth="0.75" stroke="#151a22" />
      <path d="M8 59 L4 68 L6 73 L9 70 L12 64 Z" fill="url(#sleeveGrad)" strokeWidth="0.7" stroke="#151a22" />
      <path d="M4 68 L2 74 L4 78 L7 75 L7 71 Z" fill="url(#skinGrad)" strokeWidth="0.55" stroke="#2a2420" />
      <path d="M3 74 L3 76 L4 77 L5 76 L5 74" fill="url(#skinGrad)" strokeWidth="0.35" stroke="#2a2420" />
      {/* Right arm — fuller, bent for prop */}
      <path d="M36 44 L44 39 L52 44 L50 51 L45 48 Z" fill="url(#sleeveGrad)" strokeWidth="0.75" stroke="#151a22" />
      <path d="M50 50 L56 46 L60 52 L58 58 L54 54 Z" fill="url(#sleeveGrad)" strokeWidth="0.7" stroke="#151a22" />
      <path d="M57 55 L59 57 L61 55 L61 51 L59 49 Z" fill="url(#skinGrad)" strokeWidth="0.55" stroke="#2a2420" />
      <path d="M59 51 L60 53 L61 53 L61 51" fill="url(#skinGrad)" strokeWidth="0.35" stroke="#2a2420" />
      {/* Waist / belt — wider */}
      <path d="M21 66 L35 66" stroke="rgba(36,28,20,0.9)" strokeWidth="0.7" />
      <path d="M21 67 L35 67" stroke="rgba(28,22,16,0.8)" strokeWidth="0.5" />
      {/* Left leg — fuller thigh and calf */}
      <path d="M19 66 L16 72 L16 98 L18 102 L22 98 L22 72 Z" fill="url(#trouserGrad)" strokeWidth="0.75" stroke="#151a22" />
      <path d="M18 74 L18 98" stroke="rgba(14,22,38,0.75)" strokeWidth="0.35" />
      <path d="M16 98 L14 102 L16 106 L22 106 L24 102 L22 98 Z" fill="url(#shoeGrad)" strokeWidth="0.55" stroke="#0a0a0e" />
      {/* Right leg */}
      <path d="M33 66 L36 72 L36 98 L34 102 L30 98 L30 72 Z" fill="url(#trouserGrad)" strokeWidth="0.75" stroke="#151a22" />
      <path d="M34 74 L34 98" stroke="rgba(14,22,38,0.75)" strokeWidth="0.35" />
      <path d="M36 98 L34 102 L30 106 L36 106 L38 102 L36 98 Z" fill="url(#shoeGrad)" strokeWidth="0.55" stroke="#0a0a0e" />
      {children}
    </g>
  );
}

export function BuyingSellingFigure() {
  return (
    <motion.svg viewBox="0 0 200 140" fill="none" className="w-full h-full" preserveAspectRatio="xMidYMid meet" {...float}>
      <ellipse cx="100" cy="128" rx="24" ry="6" fill="rgba(0,0,0,0.07)" />
      {/* House — buying/selling */}
      <motion.g animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 3.2, repeat: Infinity }} style={{ transformOrigin: '130px 75px' }}>
        <path d="M98 26 L168 58 L168 108 L32 108 L32 58 Z" fill="rgba(255,255,255,0.93)" stroke={GOLD} strokeWidth="2" strokeLinejoin="round" />
        <path d="M36 56 L50 50 L64 56 L64 60 L36 60 Z" fill="rgba(201,162,39,0.2)" stroke={GOLD} strokeWidth="0.8" />
        <path d="M40 54 L50 50 M50 50 L60 54 M60 54 L70 50" stroke={GOLD} strokeWidth="0.5" />
        <rect x="78" y="72" width="40" height="36" fill="rgba(201,162,39,0.28)" stroke={GOLD} strokeWidth="1.6" rx="2" />
        <rect x="80" y="74" width="10" height="12" rx="1" fill="rgba(255,255,255,0.5)" stroke={GOLD} strokeWidth="0.5" />
        <circle cx="98" cy="86" r="3" fill={GOLD} />
        <line x1="98" y1="58" x2="98" y2="72" stroke={GOLD} strokeWidth="1" />
        <rect x="102" y="64" width="14" height="16" rx="1" fill="rgba(201,162,39,0.2)" stroke={GOLD} strokeWidth="0.8" />
        <path d="M38 58 L46 54 L46 62 L38 58 Z" fill="rgba(201,162,39,0.15)" stroke={GOLD} strokeWidth="0.8" />
        <rect x="128" y="68" width="12" height="14" rx="1" fill="rgba(201,162,39,0.12)" stroke={GOLD} strokeWidth="0.6" />
        <rect x="142" y="68" width="12" height="14" rx="1" fill="rgba(201,162,39,0.12)" stroke={GOLD} strokeWidth="0.6" />
        <line x1="134" y1="72" x2="134" y2="74" stroke={GOLD} strokeWidth="0.4" />
        <line x1="148" y1="72" x2="148" y2="74" stroke={GOLD} strokeWidth="0.4" />
      </motion.g>
      <ellipse cx="28" cy="116" rx="16" ry="8" fill="rgba(80,100,60,0.4)" stroke={GOLD} strokeWidth="0.6" />
      <path d="M18 108 L38 108 L38 114 L18 114 Z" fill="rgba(180,160,120,0.35)" stroke={GOLD} strokeWidth="0.5" />
      {/* Key / contract doc by person */}
      <motion.g animate={{ y: [0, 2, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
        <rect x="148" y="82" width="24" height="18" rx="2" fill="rgba(255,255,255,0.92)" stroke={GOLD} strokeWidth="0.8" />
        <path d="M152 88 L156 92 L164 84" stroke={GOLD} strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="152" y1="93" x2="168" y2="93" stroke={GOLD} strokeWidth="0.5" />
      </motion.g>
      <path d="M72 106 L72 98 Q70 94 72 90 Q74 94 72 98" fill="rgba(60,90,50,0.5)" stroke={GOLD} strokeWidth="0.5" />
      <circle cx="72" cy="88" r="2.5" fill="rgba(80,110,60,0.6)" stroke={GOLD} strokeWidth="0.4" />
      <PersonFromFront idPrefix="buy" transform="translate(8, 14) scale(0.82)" />
    </motion.svg>
  );
}

export function MortgagesFigure() {
  return (
    <motion.svg viewBox="0 0 200 140" fill="none" className="w-full h-full" preserveAspectRatio="xMidYMid meet" {...float}>
      <ellipse cx="100" cy="128" rx="24" ry="6" fill="rgba(0,0,0,0.07)" />
      {/* Bank building — mortgages */}
      <motion.g animate={{ y: [0, 2, 0] }} transition={{ duration: 2.8, repeat: Infinity }}>
        <path d="M114 48 L158 48 L158 108 L78 108 L78 48 Z" fill="rgba(255,255,255,0.93)" stroke={GOLD} strokeWidth="1.8" strokeLinejoin="round" />
        <line x1="114" y1="48" x2="158" y2="48" stroke={GOLD} strokeWidth="2.2" />
        <rect x="82" y="52" width="8" height="54" rx="1" fill="rgba(201,162,39,0.2)" stroke={GOLD} strokeWidth="0.7" />
        <rect x="146" y="52" width="8" height="54" rx="1" fill="rgba(201,162,39,0.2)" stroke={GOLD} strokeWidth="0.7" />
        <rect x="96" y="64" width="36" height="38" fill="rgba(201,162,39,0.25)" stroke={GOLD} strokeWidth="1.2" rx="1" />
        <line x1="90" y1="53" x2="90" y2="106" stroke={GOLD} strokeWidth="1" />
        <line x1="142" y1="53" x2="142" y2="106" stroke={GOLD} strokeWidth="1" />
        <path d="M92 50 L96 48 L100 50" fill="none" stroke={GOLD} strokeWidth="0.6" />
        <path d="M138 50 L142 48 L146 50" fill="none" stroke={GOLD} strokeWidth="0.6" />
      </motion.g>
      <motion.g animate={{ x: [0, 1, 0] }} transition={{ duration: 2.2, repeat: Infinity }}>
        <rect x="156" y="68" width="24" height="30" rx="1" fill="rgba(255,255,255,0.88)" stroke={GOLD} strokeWidth="0.8" />
        <rect x="158" y="70" width="24" height="30" rx="1" fill="rgba(255,255,255,0.9)" stroke={GOLD} strokeWidth="0.8" />
        <rect x="160" y="72" width="24" height="30" rx="1" fill="rgba(255,255,255,0.92)" stroke={GOLD} strokeWidth="0.8" />
      </motion.g>
      <path d="M68 106 L84 106 L84 110 L66 110 L66 106 Z" fill="rgba(220,210,190,0.6)" stroke={GOLD} strokeWidth="0.6" />
      <rect x="70" y="56" width="24" height="30" rx="2" fill="rgba(255,255,255,0.9)" stroke={GOLD} strokeWidth="0.8" />
      <line x1="74" y1="62" x2="88" y2="62" stroke={GOLD} strokeWidth="0.5" />
      <circle cx="77" cy="70" r="2" fill="none" stroke={GOLD} strokeWidth="0.5" />
      <circle cx="83" cy="70" r="2" fill="none" stroke={GOLD} strokeWidth="0.5" />
      <circle cx="77" cy="76" r="2" fill="none" stroke={GOLD} strokeWidth="0.5" />
      <circle cx="83" cy="76" r="2" fill="none" stroke={GOLD} strokeWidth="0.5" />
      <rect x="64" y="90" width="16" height="12" rx="1" fill="rgba(255,255,255,0.85)" stroke={GOLD} strokeWidth="0.5" />
      <line x1="66" y1="94" x2="78" y2="94" stroke={GOLD} strokeWidth="0.35" />
      <line x1="66" y1="98" x2="78" y2="98" stroke={GOLD} strokeWidth="0.35" />
      <PersonFromFront idPrefix="mort" transform="translate(-4, 12) scale(0.82)" />
    </motion.svg>
  );
}

export function NotarizationFigure() {
  return (
    <motion.svg viewBox="0 0 200 140" fill="none" className="w-full h-full" preserveAspectRatio="xMidYMid meet" {...float}>
      <ellipse cx="100" cy="128" rx="24" ry="6" fill="rgba(0,0,0,0.07)" />
      <path d="M48 102 L192 102 L190 110 L46 110 Z" fill="rgba(220,210,190,0.5)" stroke={GOLD} strokeWidth="0.8" />
      <path d="M50 100 L94 100 L94 102 L50 102 Z" fill="rgba(200,190,170,0.6)" stroke={GOLD} strokeWidth="0.5" />
      {/* Certificate with seal */}
      <motion.g animate={{ rotate: [0, 0.5, -0.5, 0] }} transition={{ duration: 3.2, repeat: Infinity }} style={{ transformOrigin: '128px 70px' }}>
        <rect x="88" y="38" width="80" height="92" rx="4" fill="rgba(255,255,255,0.95)" stroke={GOLD} strokeWidth="1.6" />
        <circle cx="128" cy="68" r="20" fill="rgba(201,162,39,0.18)" stroke={GOLD} strokeWidth="1.6" />
        <path d="M118 68 L125 75 L138 62" stroke={GOLD} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="96" y1="86" x2="160" y2="86" stroke={GOLD} strokeWidth="0.5" />
        <line x1="96" y1="92" x2="152" y2="92" stroke={GOLD} strokeWidth="0.5" />
        <line x1="96" y1="98" x2="144" y2="98" stroke={GOLD} strokeWidth="0.5" />
      </motion.g>
      <motion.g animate={{ rotate: [0, -2.5, 0] }} transition={{ duration: 2.5, repeat: Infinity }} style={{ transformOrigin: '78px 56px' }}>
        <path d="M74 43 L80 40 L82 68 L76 70 Z" fill="rgba(60,60,70,0.9)" stroke="#0a0a0a" strokeWidth="0.8" />
        <path d="M76 40 L80 36 L82 40 Z" fill="rgba(100,100,110,0.9)" stroke="#0a0a0a" strokeWidth="0.6" />
      </motion.g>
      <rect x="164" y="50" width="22" height="28" rx="2" fill="rgba(255,255,255,0.86)" stroke={GOLD} strokeWidth="0.8" />
      <rect x="166" y="52" width="22" height="28" rx="2" fill="rgba(255,255,255,0.9)" stroke={GOLD} strokeWidth="0.8" />
      <rect x="168" y="54" width="22" height="28" rx="2" fill="rgba(255,255,255,0.92)" stroke={GOLD} strokeWidth="0.8" />
      <line x1="170" y1="60" x2="186" y2="60" stroke={GOLD} strokeWidth="0.35" />
      <circle cx="72" cy="96" r="9" fill="rgba(201,162,39,0.25)" stroke={GOLD} strokeWidth="1" />
      <path d="M68 96 L76 96 M72 92 L72 100" stroke={GOLD} strokeWidth="0.8" fill="none" />
      <path d="M162 98 L182 98" stroke={GOLD} strokeWidth="0.8" strokeLinecap="round" />
      <line x1="162" y1="96" x2="162" y2="100" stroke={GOLD} strokeWidth="0.5" />
      <line x1="172" y1="96" x2="172" y2="100" stroke={GOLD} strokeWidth="0.5" />
      <line x1="182" y1="96" x2="182" y2="100" stroke={GOLD} strokeWidth="0.5" />
      <ellipse cx="128" cy="106" rx="6" ry="2" fill="rgba(201,162,39,0.15)" stroke={GOLD} strokeWidth="0.5" />
      <PersonFromFront idPrefix="not" transform="translate(-6, 10) scale(0.82)" />
    </motion.svg>
  );
}

export function TitleTransfersFigure() {
  return (
    <motion.svg viewBox="0 0 200 140" fill="none" className="w-full h-full" preserveAspectRatio="xMidYMid meet" {...float}>
      <ellipse cx="100" cy="128" rx="24" ry="6" fill="rgba(0,0,0,0.07)" />
      <path d="M42 104 L194 104 L192 112 L40 112 Z" fill="rgba(220,210,190,0.5)" stroke={GOLD} strokeWidth="0.8" />
      <path d="M44 102 L90 102 L90 104 L44 104 Z" fill="rgba(200,190,170,0.6)" stroke={GOLD} strokeWidth="0.5" />
      {/* Scroll / deed */}
      <motion.g animate={{ y: [0, -2, 0] }} transition={{ duration: 2.4, repeat: Infinity }} style={{ transformOrigin: '118px 66px' }}>
        <path d="M68 38 Q68 24 92 24 Q116 24 116 38 L116 92 Q116 106 92 106 Q68 106 68 92 Z" fill="rgba(255,255,255,0.94)" stroke={GOLD} strokeWidth="2" />
        <path d="M74 48 L110 48 M74 55 L110 55 M74 62 L102 62 M74 69 L98 69" stroke={GOLD} strokeWidth="0.9" />
        <circle cx="92" cy="74" r="6" fill="rgba(201,162,39,0.35)" stroke={GOLD} strokeWidth="1.1" />
        <path d="M76 82 Q92 86 108 82" fill="none" stroke={GOLD} strokeWidth="0.5" />
      </motion.g>
      <motion.g animate={{ y: [0, 2, 0] }} transition={{ duration: 2.6, repeat: Infinity }}>
        <path d="M156 60 L172 60 L172 96 L156 96 Q154 96 154 94 L154 62 Q154 60 156 60 Z" fill="rgba(255,255,255,0.88)" stroke={GOLD} strokeWidth="1" />
        <path d="M158 64 L170 64 M158 70 L168 70 M158 76 L164 76" stroke={GOLD} strokeWidth="0.6" />
      </motion.g>
      <rect x="150" y="100" width="30" height="20" rx="2" fill="rgba(255,255,255,0.9)" stroke={GOLD} strokeWidth="0.8" />
      <line x1="154" y1="106" x2="176" y2="106" stroke={GOLD} strokeWidth="0.5" />
      <motion.g style={{ transformOrigin: '50px 70px' }} animate={{ rotate: [0, 1.5, 0] }} transition={{ duration: 3, repeat: Infinity }}>
        <path d="M46 56 L50 53 L52 76 L48 78 Z" fill="rgba(60,60,70,0.9)" stroke="#0a0a0a" strokeWidth="0.7" />
      </motion.g>
      <circle cx="36" cy="50" r="6" fill="none" stroke={GOLD} strokeWidth="0.8" />
      <path d="M40 54 L44 58" stroke={GOLD} strokeWidth="0.8" strokeLinecap="round" />
      <path d="M30 116 L36 108 L42 116 L40 116 L40 122 L32 122 L32 116 Z" fill="rgba(201,162,39,0.2)" stroke={GOLD} strokeWidth="0.7" />
      <rect x="92" y="96" width="18" height="10" rx="1" fill="rgba(255,255,255,0.85)" stroke={GOLD} strokeWidth="0.5" />
      <line x1="94" y1="100" x2="108" y2="100" stroke={GOLD} strokeWidth="0.35" />
      <rect x="166" y="94" width="16" height="8" rx="1" fill="rgba(255,255,255,0.8)" stroke={GOLD} strokeWidth="0.5" />
      <PersonFromFront idPrefix="title" transform="translate(4, 14) scale(0.82)" />
    </motion.svg>
  );
}

const FIGURES = {
  'buying-selling': BuyingSellingFigure,
  'mortgages': MortgagesFigure,
  'notarization': NotarizationFigure,
  'title-transfers': TitleTransfersFigure,
} as const;

export function ServiceCardFigure({ serviceId }: { serviceId: keyof typeof FIGURES }) {
  const Figure = FIGURES[serviceId];
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#c9a227]/10 to-transparent p-6">
      <Figure />
    </div>
  );
}
