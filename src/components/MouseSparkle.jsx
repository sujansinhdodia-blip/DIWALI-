import { useEffect, useRef, useCallback } from 'react';

export default function MouseSparkle() {
  const canvasRef = useRef(null);
  const sparklesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animRef = useRef(null);

  const addSparkle = useCallback((x, y) => {
    const colors = ['#FFD700', '#FF9933', '#FFF8DC', '#FF1493'];
    sparklesRef.current.push({
      x,
      y,
      vx: (Math.random() - 0.5) * 3,
      vy: (Math.random() - 0.5) * 3 - 1,
      size: Math.random() * 4 + 2,
      alpha: 1,
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let frame = 0;

    const handleMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      mouseRef.current = { x: clientX, y: clientY };
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('touchmove', handleMove, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      frame++;
      if (frame % 3 === 0) {
        addSparkle(mouseRef.current.x, mouseRef.current.y);
      }

      sparklesRef.current.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.05;
        s.alpha -= 0.025;
        s.size *= 0.97;

        ctx.save();
        ctx.globalAlpha = Math.max(0, s.alpha);
        ctx.fillStyle = s.color;
        ctx.beginPath();

        // Draw a 4-pointed star shape
        const spikes = 4;
        const outerR = s.size;
        const innerR = s.size * 0.4;
        for (let i = 0; i < spikes * 2; i++) {
          const r = i % 2 === 0 ? outerR : innerR;
          const angle = (i * Math.PI) / spikes - Math.PI / 2;
          const px = s.x + Math.cos(angle) * r;
          const py = s.y + Math.sin(angle) * r;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      });

      sparklesRef.current = sparklesRef.current.filter((s) => s.alpha > 0);
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [addSparkle]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[40] pointer-events-none"
    />
  );
}
