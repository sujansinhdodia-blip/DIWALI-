import { useMemo } from 'react';

export default function FloatingPetals() {
  const petals = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 8 + 8,
      size: Math.random() * 12 + 10,
      rotation: Math.random() * 360,
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-[3] pointer-events-none overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.left}%`,
            top: '-5%',
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            animation: `float-down ${petal.duration}s linear ${petal.delay}s infinite`,
          }}
        >
          {/* Marigold petal SVG */}
          <svg viewBox="0 0 30 30" className="w-full h-full" style={{ transform: `rotate(${petal.rotation}deg)` }}>
            <ellipse cx="15" cy="12" rx="8" ry="12" fill="#FF9933" opacity="0.9" />
            <ellipse cx="15" cy="14" rx="5" ry="8" fill="#FFD700" opacity="0.7" />
          </svg>
        </div>
      ))}
    </div>
  );
}
