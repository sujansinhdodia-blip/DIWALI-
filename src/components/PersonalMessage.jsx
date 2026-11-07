import { motion } from 'framer-motion';
import config from '../config';

export default function PersonalMessage() {
  return (
    <section className="py-16 px-4 flex justify-center">
      <motion.div
        className="glass max-w-2xl w-full p-8 sm:p-10 md:p-12 text-center"
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Decorative top */}
        <div className="flex justify-center mb-6">
          <span className="text-3xl">🪔</span>
          <div className="mx-3 h-px w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent self-center" />
          <span className="text-3xl">✨</span>
          <div className="mx-3 h-px w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent self-center" />
          <span className="text-3xl">🪔</span>
        </div>

        <h2 className="font-heading text-2xl sm:text-3xl text-shimmer mb-6">
          A Message From Our Hearts
        </h2>

        <div className="text-amber-50/85 text-base sm:text-lg leading-relaxed space-y-4">
          {config.personalMessage.split('\n').filter(Boolean).map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        <motion.p
          className="mt-8 text-amber-300 font-semibold text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          With love, ❤️
          <br />
          <span className="font-heading text-xl">{config.familyName}</span>
        </motion.p>
      </motion.div>
    </section>
  );
}
