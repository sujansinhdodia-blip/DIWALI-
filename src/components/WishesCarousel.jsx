import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import config from '../config';

export default function WishesCarousel() {
  const [current, setCurrent] = useState(0);
  const wishes = config.wishes;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % wishes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [wishes.length]);

  const wish = wishes[current];

  return (
    <section className="py-16 px-4 flex flex-col items-center">
      <motion.h2
        className="font-heading text-2xl sm:text-3xl text-shimmer mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Wishes for You
      </motion.h2>

      <div className="relative w-full max-w-lg h-64 sm:h-56 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="glass absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8 text-center"
            initial={{ opacity: 0, x: 80, rotateY: 30 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{ opacity: 0, x: -80, rotateY: -30 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <span className="text-4xl mb-3">{wish.emoji}</span>
            <p className="text-xl sm:text-2xl text-amber-100 font-semibold mb-2">
              {wish.english}
            </p>
            <p className="text-base text-amber-200/80 italic mb-1">{wish.hindi}</p>
            <p className="text-sm text-amber-300/70">{wish.gujarati}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots indicator */}
      <div className="flex gap-2 mt-6">
        {wishes.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? 'bg-amber-400 scale-125 shadow-lg shadow-amber-400/50'
                : 'bg-amber-400/30 hover:bg-amber-400/50'
            }`}
            aria-label={`Go to wish ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
