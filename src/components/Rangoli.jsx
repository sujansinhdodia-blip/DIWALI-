import { motion } from 'framer-motion';

function RangoliSVG() {
  const colors = ['#FFD700', '#FF9933', '#FF1493', '#DC143C', '#4B0082', '#FF6347'];
  const petals = 12;

  return (
    <svg viewBox="0 0 300 300" className="w-48 sm:w-64 md:w-80">
      {/* Outer ring of petals */}
      {Array.from({ length: petals }).map((_, i) => {
        const angle = (360 / petals) * i;
        return (
          <g key={`outer-${i}`} transform={`rotate(${angle}, 150, 150)`}>
            <ellipse cx="150" cy="60" rx="18" ry="45" fill={colors[i % colors.length]} opacity="0.85" />
            <ellipse cx="150" cy="65" rx="10" ry="30" fill={colors[(i + 1) % colors.length]} opacity="0.6" />
          </g>
        );
      })}

      {/* Inner ring */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (360 / 8) * i + 22.5;
        return (
          <g key={`inner-${i}`} transform={`rotate(${angle}, 150, 150)`}>
            <ellipse cx="150" cy="95" rx="12" ry="28" fill={colors[(i + 2) % colors.length]} opacity="0.8" />
          </g>
        );
      })}

      {/* Center circles */}
      <circle cx="150" cy="150" r="30" fill="#FF9933" opacity="0.9" />
      <circle cx="150" cy="150" r="20" fill="#FFD700" opacity="0.9" />
      <circle cx="150" cy="150" r="10" fill="#FFF8DC" opacity="0.95" />

      {/* Decorative dots ring */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = ((2 * Math.PI) / 16) * i;
        const x = 150 + Math.cos(angle) * 42;
        const y = 150 + Math.sin(angle) * 42;
        return <circle key={`dot-${i}`} cx={x} cy={y} r="4" fill="#FFF" opacity="0.8" />;
      })}
    </svg>
  );
}

export default function Rangoli() {
  return (
    <section className="py-16 flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.3, rotate: -180 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="relative"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        >
          <RangoliSVG />
        </motion.div>
        {/* Glow behind rangoli */}
        <div className="absolute inset-0 -z-10 blur-2xl opacity-40">
          <RangoliSVG />
        </div>
      </motion.div>
      <motion.p
        className="mt-6 text-amber-200/70 text-sm tracking-widest uppercase"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        Rangoli of Blessings
      </motion.p>
    </section>
  );
}
