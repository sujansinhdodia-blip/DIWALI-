import { useMemo } from 'react';

export default function Lanterns() {
  const lanterns = useMemo(() => [
    { left: '5%', color: '#FF9933', delay: '0s', size: 28 },
    { left: '15%', color: '#FFD700', delay: '0.5s', size: 24 },
    { left: '28%', color: '#FF1493', delay: '1s', size: 26 },
    { left: '42%', color: '#DC143C', delay: '0.3s', size: 30 },
    { left: '55%', color: '#FF9933', delay: '0.8s', size: 22 },
    { left: '68%', color: '#FFD700', delay: '0.2s', size: 28 },
    { left: '80%', color: '#FF6347', delay: '0.7s', size: 24 },
    { left: '92%', color: '#FF1493', delay: '0.4s', size: 26 },
  ], []);

  // String lights between lanterns
  const lights = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: (i / 29) * 100,
      color: ['#FFD700', '#FF9933', '#FF1493', '#DC143C', '#4B0082'][i % 5],
      delay: Math.random() * 3,
    }));
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-30 pointer-events-none">
      {/* String / wire */}
      <svg className="w-full h-16 sm:h-20" viewBox="0 0 1000 80" preserveAspectRatio="none">
        <path
          d="M0 10 Q125 50 250 20 Q375 -10 500 30 Q625 60 750 15 Q875 -5 1000 25"
          fill="none"
          stroke="rgba(255,215,0,0.3)"
          strokeWidth="2"
        />
      </svg>

      {/* Fairy lights */}
      {lights.map((light) => (
        <div
          key={light.id}
          className="absolute top-3 sm:top-4 w-2 h-2 rounded-full"
          style={{
            left: `${light.left}%`,
            backgroundColor: light.color,
            boxShadow: `0 0 6px ${light.color}, 0 0 12px ${light.color}`,
            animation: `light-glow 2s ease-in-out ${light.delay}s infinite`,
          }}
        />
      ))}

      {/* Lanterns */}
      {lanterns.map((lantern, i) => (
        <div
          key={i}
          className="absolute sway"
          style={{
            left: lantern.left,
            top: '12px',
            animationDelay: lantern.delay,
            animationDuration: `${3 + i * 0.3}s`,
          }}
        >
          <svg width={lantern.size} height={lantern.size * 1.5} viewBox="0 0 40 60">
            {/* String */}
            <line x1="20" y1="0" x2="20" y2="10" stroke="rgba(255,215,0,0.4)" strokeWidth="1" />
            {/* Lantern body */}
            <ellipse cx="20" cy="30" rx="14" ry="18" fill={lantern.color} opacity="0.8" />
            <ellipse cx="20" cy="30" rx="10" ry="14" fill={lantern.color} opacity="0.5" />
            {/* Inner glow */}
            <ellipse cx="20" cy="30" rx="6" ry="8" fill="#FFF8DC" opacity="0.5" />
            {/* Top cap */}
            <rect x="15" y="10" width="10" height="5" rx="2" fill={lantern.color} opacity="0.9" />
            {/* Bottom tip */}
            <polygon points="16,48 24,48 20,55" fill={lantern.color} opacity="0.7" />
          </svg>
        </div>
      ))}
    </div>
  );
}
