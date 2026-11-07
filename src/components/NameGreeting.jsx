import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function NameGreeting() {
  const [name, setName] = useState('');
  const [showGreeting, setShowGreeting] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (name.trim()) {
      setSubmittedName(name.trim());
      setShowGreeting(true);
      // Celebration
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#FFD700', '#FF9933', '#FF1493', '#4B0082', '#DC143C'],
      });
    }
  }, [name]);

  return (
    <section className="py-16 px-4 flex flex-col items-center">
      <motion.div
        className="glass max-w-md w-full p-8 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-2xl sm:text-3xl text-shimmer mb-4">
          Your Personal Greeting
        </h2>
        <p className="text-amber-100/70 mb-6 text-sm">
          Enter your name and receive a special Diwali blessing ✨
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6" onClick={(e) => e.stopPropagation()}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type your name..."
            className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-amber-400/30
              text-amber-50 placeholder-amber-200/40 text-center sm:text-left
              focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30
              transition-all duration-300"
            maxLength={30}
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600
              text-white font-semibold shadow-lg hover:shadow-amber-500/40
              hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Celebrate! 🎆
          </button>
        </form>

        <AnimatePresence>
          {showGreeting && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ type: 'spring', damping: 15, stiffness: 200 }}
              className="py-6"
            >
              <motion.h3
                className="font-heading text-2xl sm:text-4xl text-shimmer mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Happy Diwali, {submittedName}! 🎆
              </motion.h3>
              <p className="text-amber-200/80 mt-2">
                May this festival of lights bring you endless joy and prosperity! 🪔
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
