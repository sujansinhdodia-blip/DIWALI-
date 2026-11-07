import { useEffect, useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

import StarryBackground from './components/StarryBackground';
import Lanterns from './components/Lanterns';
import FloatingPetals from './components/FloatingPetals';
import Hero from './components/Hero';
import InteractiveDiya from './components/InteractiveDiya';
import Rangoli from './components/Rangoli';
import PersonalMessage from './components/PersonalMessage';
import WishesCarousel from './components/WishesCarousel';
import NameGreeting from './components/NameGreeting';
import ShareButtons from './components/ShareButtons';
import Footer from './components/Footer';
import Cityline from './components/Cityline';
import MouseSparkle from './components/MouseSparkle';
import MusicToggle from './components/MusicToggle';
import FireworksCanvas from './components/FireworksCanvas';

function App() {
  const [diyaLit, setDiyaLit] = useState(false);

  // Confetti burst on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.4 },
        colors: ['#FFD700', '#FF9933', '#FF1493', '#4B0082', '#DC143C'],
      });
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Click-anywhere fireworks
  const handleClick = useCallback((e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { x, y },
      colors: ['#FFD700', '#FF9933', '#FF1493', '#DC143C'],
    });
  }, []);

  const handleDiyaLight = useCallback(() => {
    setDiyaLit(true);
    // Big fireworks show
    const duration = 3000;
    const end = Date.now() + duration;
    const interval = setInterval(() => {
      if (Date.now() > end) return clearInterval(interval);
      confetti({
        particleCount: 30,
        spread: 100,
        startVelocity: 45,
        origin: { x: Math.random(), y: Math.random() * 0.4 },
        colors: ['#FFD700', '#FF9933', '#FF1493', '#4B0082', '#DC143C', '#FFF'],
      });
    }, 150);
  }, []);

  return (
    <div className="relative min-h-screen" onClick={handleClick}>
      {/* Background layers */}
      <StarryBackground />
      <FireworksCanvas diyaLit={diyaLit} />
      <FloatingPetals />
      <MouseSparkle />

      {/* Fixed elements */}
      <Lanterns />
      <MusicToggle autoPlayTrigger={diyaLit} />

      {/* Screen glow when diya is lit */}
      <AnimatePresence>
        {diyaLit && (
          <div className="fixed inset-0 pointer-events-none z-10 bg-gradient-radial from-amber-500/10 via-transparent to-transparent animate-pulse" />
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className="relative z-20">
        <Hero diyaLit={diyaLit} onLight={handleDiyaLight} />
        <InteractiveDiya diyaLit={diyaLit} onLight={handleDiyaLight} />
        <Rangoli />
        <PersonalMessage />
        <WishesCarousel />
        <NameGreeting />
        <ShareButtons />
        <Footer />
      </main>

      {/* City silhouette at the very bottom */}
      <Cityline diyaLit={diyaLit} />
    </div>
  );
}

export default App;
