import { motion } from 'framer-motion';
import { useMemo } from 'react';

export default function Cityline({ diyaLit }) {
  const windows = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 30 + 10,
      delay: Math.random() * 4,
      size: Math.random() * 3 + 2,
      on: Math.random() > 0.3,
    }));
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[15] pointer-events-none">
      <svg
        viewBox="0 0 1200 200"
        className="w-full"
        preserveAspectRatio="xMidYMax slice"
        style={{ height: '15vh', minHeight: '80px' }}
      >
        <defs>
          <linearGradient id="skylineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="#0a0020" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0a0020" />
          </linearGradient>
        </defs>

        {/* City silhouette */}
        <path
          d="M0 200 L0 140 L30 140 L30 100 L50 100 L50 110 L60 110 L60 80 L80 80 L80 110
             L100 110 L100 70 L110 60 L120 70 L120 110 L140 110 L140 90 L160 90 L160 120
             L180 120 L180 85 L195 75 L210 85 L210 120 L230 120 L230 100 L250 100 L250 130
             L270 130 L270 95 L290 95 L290 75 L300 65 L310 75 L310 120 L330 120 L330 90
             L350 90 L350 110 L370 110 L370 80 L385 70 L400 80 L400 130 L420 130 L420 100
             L440 100 L440 70 L450 60 L460 70 L460 110 L480 110 L480 130 L500 130 L500 95
             L520 95 L520 75 L530 65 L540 75 L540 110 L560 110 L560 130 L580 130 L580 100
             L600 100 L600 80 L615 70 L630 80 L630 120 L650 120 L650 90 L670 90 L670 110
             L690 110 L690 85 L700 75 L710 85 L710 130 L730 130 L730 100 L750 100 L750 120
             L770 120 L770 90 L785 80 L800 90 L800 130 L820 130 L820 75 L830 65 L840 75
             L840 110 L860 110 L860 130 L880 130 L880 95 L900 95 L900 110 L920 110 L920 80
             L935 70 L950 80 L950 120 L970 120 L970 100 L990 100 L990 130 L1010 130 L1010 90
             L1025 80 L1040 90 L1040 120 L1060 120 L1060 100 L1080 100 L1080 70 L1090 60
             L1100 70 L1100 110 L1120 110 L1120 130 L1140 130 L1140 100 L1160 100 L1160 120
             L1180 120 L1180 90 L1200 90 L1200 200 Z"
          fill="#0a0020"
          opacity="0.95"
        />

        {/* Temple dome in the center */}
        <path
          d="M570 130 L570 80 Q580 40 600 35 Q620 40 630 80 L630 130"
          fill="#0d0025"
          opacity="0.95"
        />
        <circle cx="600" cy="32" r="4" fill="#FFD700" opacity="0.8" />

        {/* Lit windows */}
        {windows.map((w) => (
          <rect
            key={w.id}
            x={`${w.x * 12}`}
            y={`${130 + w.y}`}
            width={w.size}
            height={w.size * 1.2}
            fill={w.on || diyaLit ? '#FFD700' : '#1a1a3a'}
            opacity={w.on || diyaLit ? 0.7 : 0.3}
            rx="0.5"
          >
            {(w.on || diyaLit) && (
              <animate
                attributeName="opacity"
                values="0.5;0.8;0.5"
                dur={`${2 + w.delay}s`}
                repeatCount="indefinite"
              />
            )}
          </rect>
        ))}
      </svg>
    </div>
  );
}
