import { useEffect, useRef } from 'react';

class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 4 + 2;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
    this.alpha = 1;
    this.decay = Math.random() * 0.02 + 0.015;
    this.size = Math.random() * 3 + 1;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += 0.05; // gravity
    this.alpha -= this.decay;
    this.size *= 0.98;
  }
  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.alpha);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

class Rocket {
  constructor(canvas) {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height;
    this.targetY = Math.random() * canvas.height * 0.4 + 50;
    this.speed = Math.random() * 3 + 4;
    this.color = `hsl(${Math.random() * 60 + 20}, 100%, 60%)`;
    this.exploded = false;
    this.particles = [];
    this.trail = [];
  }
  update() {
    if (!this.exploded) {
      this.trail.push({ x: this.x, y: this.y, alpha: 1 });
      if (this.trail.length > 8) this.trail.shift();
      this.y -= this.speed;
      if (this.y <= this.targetY) {
        this.explode();
      }
    }
    this.trail.forEach(t => { t.alpha -= 0.08; });
    this.trail = this.trail.filter(t => t.alpha > 0);
    this.particles.forEach(p => p.update());
    this.particles = this.particles.filter(p => p.alpha > 0);
  }
  explode() {
    this.exploded = true;
    const colors = ['#FFD700', '#FF9933', '#FF1493', '#FFF', '#DC143C', '#FF6347', '#4B0082'];
    const count = Math.floor(Math.random() * 40) + 40;
    for (let i = 0; i < count; i++) {
      this.particles.push(
        new Particle(this.x, this.y, colors[Math.floor(Math.random() * colors.length)])
      );
    }
  }
  draw(ctx) {
    if (!this.exploded) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
      ctx.fill();
    }
    this.trail.forEach(t => {
      ctx.save();
      ctx.globalAlpha = t.alpha;
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.arc(t.x, t.y, 1.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
    this.particles.forEach(p => p.draw(ctx));
  }
  get isDone() {
    return this.exploded && this.particles.length === 0 && this.trail.length === 0;
  }
}

export default function FireworksCanvas({ diyaLit }) {
  const canvasRef = useRef(null);
  const rocketsRef = useRef([]);
  const animRef = useRef(null);

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

    let lastLaunch = 0;
    const interval = diyaLit ? 400 : 2000;

    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (time - lastLaunch > interval) {
        rocketsRef.current.push(new Rocket(canvas));
        lastLaunch = time;
      }

      rocketsRef.current.forEach(r => {
        r.update();
        r.draw(ctx);
      });
      rocketsRef.current = rocketsRef.current.filter(r => !r.isDone);

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [diyaLit]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[5] pointer-events-none"
    />
  );
}
