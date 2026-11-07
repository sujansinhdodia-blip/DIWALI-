import { motion } from 'framer-motion';
import config from '../config';

export default function Footer() {
  return (
    <footer className="relative py-16 pb-32 text-center px-4">
      {/* Decorative diyas row */}
      <div className="flex justify-center gap-4 sm:gap-8 mb-8">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="glow"
            style={{ animationDelay: `${i * 0.3}s` }}
          >
            <svg width="30" height="40" viewBox="0 0 40 55">
              <g className="flame-flicker" style={{ animationDelay: `${i * 0.1}s` }}>
                <ellipse cx="20" cy="8" rx="4" ry="10" fill="#FF6347" opacity="0.7" />
                <ellipse cx="20" cy="8" rx="2.5" ry="7" fill="#FFD700" opacity="0.8" />
                <ellipse cx="20" cy="10" rx="1.5" ry="4" fill="#FFF8DC" opacity="0.9" />
              </g>
              <line x1="20" y1="18" x2="20" y2="22" stroke="#555" strokeWidth="1.5" />
              <ellipse cx="20" cy="28" rx="12" ry="4" fill="#CD853F" />
              <path d="M6 28 Q10 45 20 48 Q30 45 34 28" fill="#DEB887" />
              <ellipse cx="20" cy="48" rx="14" ry="3" fill="#8B4513" />
            </svg>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-2xl sm:text-3xl font-heading text-shimmer mb-3">
          शुभ दीपावली
        </p>
        <p className="text-amber-100/80 text-lg mb-2">
          With love, {config.familyName} ❤️
        </p>
        <p className="text-amber-200/50 text-sm">
          Shubh Deepavali • May the light within you shine forever
        </p>
      </motion.div>

      <div className="mt-8 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
      <p className="mt-4 text-amber-200/30 text-xs">
        Made with 🪔 and ❤️
      </p>
    </footer>
  );
}
