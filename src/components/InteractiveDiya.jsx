import { motion, AnimatePresence } from 'framer-motion';

export default function InteractiveDiya({ diyaLit, onLight }) {
  return (
    <section id="diya-section" className="relative py-24 flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background radial warmth when lit */}
      <div className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${diyaLit ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-full h-full bg-radial from-amber-500/20 via-orange-600/5 to-transparent blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center cursor-pointer text-center"
        onClick={!diyaLit ? onLight : undefined}
        whileHover={!diyaLit ? { scale: 1.05 } : {}}
        whileTap={!diyaLit ? { scale: 0.95 } : {}}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-amber-200/60 uppercase tracking-widest text-xs mb-3 font-semibold">
          {diyaLit ? "✨ Blessed Flame of Diwali ✨" : "Click to Ignite the Sacred Flame"}
        </span>

        {/* Decorative row of diyas */}
        <div className="flex items-center justify-center gap-4 sm:gap-8">
          {/* Left Companion Diya */}
          <div className="hidden sm:block opacity-75">
            <svg viewBox="0 0 100 80" className="w-16 md:w-20">
              {diyaLit && (
                <g className="flame-flicker" style={{ animationDelay: '0.15s' }}>
                  <ellipse cx="50" cy="22" rx="4" ry="12" fill="#FF6347" opacity="0.6" />
                  <ellipse cx="50" cy="22" rx="2.5" ry="9" fill="#FFD700" opacity="0.8" />
                  <ellipse cx="50" cy="24" rx="1.5" ry="6" fill="#FFF8DC" opacity="0.9" />
                </g>
              )}
              <line x1="50" y1="32" x2="50" y2="36" stroke="#333" strokeWidth="1.5" />
              <ellipse cx="50" cy="42" rx="20" ry="5" fill="#CD853F" opacity="0.8" />
              <path d="M25 42 Q30 68 50 70 Q70 68 75 42" fill="#DEB887" />
              <ellipse cx="50" cy="70" rx="15" ry="3" fill="#8B4513" />
            </svg>
          </div>

          {/* Main Diya SVG */}
          <svg viewBox="0 0 200 160" className="w-56 sm:w-72 md:w-80 mx-auto filter drop-shadow-xl">
            {/* Glow when lit */}
            <AnimatePresence>
              {diyaLit && (
                <motion.circle
                  cx="100" cy="50" r="60"
                  fill="url(#diyaGlow)"
                  initial={{ opacity: 0, r: 20 }}
                  animate={{ opacity: [0.5, 0.85, 0.5], r: [55, 65, 55] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </AnimatePresence>
            <defs>
              <radialGradient id="diyaGlow">
                <stop offset="0%" stopColor="#FFD700" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#FF9933" stopOpacity="0.4" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Flame */}
            <AnimatePresence>
              {diyaLit && (
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                >
                  <g className="flame-flicker">
                    <ellipse cx="100" cy="45" rx="9" ry="24" fill="#FF6347" opacity="0.7" />
                    <ellipse cx="100" cy="45" rx="6" ry="19" fill="#FFD700" opacity="0.85" />
                    <ellipse cx="100" cy="48" rx="3.5" ry="13" fill="#FFF8DC" opacity="0.95" />
                  </g>
                </motion.g>
              )}
            </AnimatePresence>

            {/* Wick */}
            <line x1="100" y1="65" x2="100" y2="72" stroke="#333" strokeWidth="2.5" />

            {/* Oil */}
            <ellipse cx="100" cy="80" rx="35" ry="8" fill="#CD853F" opacity="0.85" />

            {/* Diya bowl */}
            <path d="M55 80 Q60 130 100 135 Q140 130 145 80" fill="#CD853F" />
            <path d="M60 80 Q65 125 100 130 Q135 125 140 80" fill="#DEB887" />

            {/* Decorative dots */}
            <circle cx="80" cy="100" r="3.5" fill="#FFD700" />
            <circle cx="100" cy="105" r="3.5" fill="#FF9933" />
            <circle cx="120" cy="100" r="3.5" fill="#FFD700" />

            {/* Base */}
            <ellipse cx="100" cy="135" rx="30" ry="6" fill="#8B4513" />
          </svg>

          {/* Right Companion Diya */}
          <div className="hidden sm:block opacity-75">
            <svg viewBox="0 0 100 80" className="w-16 md:w-20">
              {diyaLit && (
                <g className="flame-flicker" style={{ animationDelay: '0.3s' }}>
                  <ellipse cx="50" cy="22" rx="4" ry="12" fill="#FF6347" opacity="0.6" />
                  <ellipse cx="50" cy="22" rx="2.5" ry="9" fill="#FFD700" opacity="0.8" />
                  <ellipse cx="50" cy="24" rx="1.5" ry="6" fill="#FFF8DC" opacity="0.9" />
                </g>
              )}
              <line x1="50" y1="32" x2="50" y2="36" stroke="#333" strokeWidth="1.5" />
              <ellipse cx="50" cy="42" rx="20" ry="5" fill="#CD853F" opacity="0.8" />
              <path d="M25 42 Q30 68 50 70 Q70 68 75 42" fill="#DEB887" />
              <ellipse cx="50" cy="70" rx="15" ry="3" fill="#8B4513" />
            </svg>
          </div>
        </div>

        {/* Button or status text */}
        {!diyaLit ? (
          <motion.button
            className="mt-8 px-9 py-3.5 rounded-full text-lg font-bold
              bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500
              text-amber-950 shadow-xl shadow-amber-500/40
              hover:shadow-amber-400/60 hover:scale-105
              transition-all duration-300 active:scale-95 cursor-pointer"
            whileHover={{ boxShadow: '0 0 35px rgba(255,190,0,0.7)' }}
            onClick={(e) => { e.stopPropagation(); onLight(); }}
          >
            🪔 Light the Diya
          </motion.button>
        ) : (
          <motion.div
            className="mt-6 flex flex-col items-center gap-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-amber-300 text-xl font-bold tracking-wide">
              ✨ The light of joy shines bright! ✨
            </p>
            <p className="text-amber-200/70 text-sm">
              Tap anywhere on the screen for celebratory fireworks
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
