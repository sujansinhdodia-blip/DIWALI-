import { motion } from 'framer-motion';
import config from '../config';

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function Hero({ diyaLit, onLight }) {
  const title = config.heroTitle;

  const handleLightClick = (e) => {
    e.stopPropagation();
    if (onLight) onLight();
    const diyaSection = document.getElementById('diya-section');
    if (diyaSection) {
      diyaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center">
      {/* Main heading with letter reveal */}
      <motion.h1
        className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 text-shimmer"
        initial="hidden"
        animate="visible"
        aria-label={title}
      >
        {title.split('').map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariants}
            className="inline-block"
            style={{ minWidth: char === ' ' ? '0.3em' : undefined }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg sm:text-xl md:text-2xl text-amber-100/90 max-w-2xl mb-4 font-light"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        {config.heroSubtitle}
      </motion.p>

      {/* Family name */}
      <motion.p
        className="text-base sm:text-lg text-amber-300/80 font-medium tracking-wide mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        — From the {config.familyName} —
      </motion.p>

      {/* Light the Diya Button in Hero */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.9, duration: 0.6 }}
      >
        <button
          onClick={handleLightClick}
          className="group relative px-8 py-4 rounded-full font-semibold text-lg
            bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500
            text-amber-950 shadow-2xl shadow-amber-500/50
            hover:shadow-amber-400/80 hover:scale-105 active:scale-95
            transition-all duration-300 flex items-center gap-3 cursor-pointer"
        >
          <span className="text-2xl animate-bounce">🪔</span>
          <span>{diyaLit ? "Diya is Lit ✨ Experience Below" : "Light the Diya"}</span>
          <span className="text-xl group-hover:translate-x-1 transition-transform">✨</span>
        </button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <span className="text-amber-200/60 text-xs sm:text-sm tracking-wider uppercase">Scroll to Celebrate</span>
        <motion.div
          className="w-5 h-8 border-2 border-amber-200/40 rounded-full flex justify-center pt-1"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-amber-300 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
