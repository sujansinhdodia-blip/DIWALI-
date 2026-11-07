import { useState, useRef, useCallback } from 'react';

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const loopIntervalRef = useRef(null);

  const startFestiveSynth = () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioContext();
    }
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    // Master volume
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.15, ctx.currentTime);
    masterGain.connect(ctx.destination);

    // Warm Tanpura Drone (Sa - Pa - Sa' in D: ~146.8Hz, ~220Hz, ~293.6Hz)
    const baseFreqs = [146.83, 220.0, 293.66, 440.0];
    const oscillators = [];

    baseFreqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Subtle detune for natural shimmer
      osc.detune.setValueAtTime((idx - 1.5) * 4, ctx.currentTime);

      gain.gain.setValueAtTime(0.06 / (idx + 1), ctx.currentTime);
      osc.connect(gain);
      gain.connect(masterGain);
      osc.start();
      oscillators.push(osc);
    });

    // Indian Classical Yaman / Bhupali scale bell notes: D, E, F#, A, B, D'
    const melodyScale = [293.66, 329.63, 369.99, 440.0, 493.88, 587.33, 659.25, 739.99];

    const playBell = () => {
      if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') return;
      const noteFreq = melodyScale[Math.floor(Math.random() * melodyScale.length)];
      const bellOsc = ctx.createOscillator();
      const bellGain = ctx.createGain();

      bellOsc.type = 'sine';
      bellOsc.frequency.setValueAtTime(noteFreq, ctx.currentTime);

      // Soft envelope
      const now = ctx.currentTime;
      bellGain.gain.setValueAtTime(0, now);
      bellGain.gain.linearRampToValueAtTime(0.08, now + 0.05);
      bellGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

      bellOsc.connect(bellGain);
      bellGain.connect(masterGain);

      bellOsc.start(now);
      bellOsc.stop(now + 2.6);
    };

    // Play initial bell
    playBell();
    // Play recurring ambient chime every 1.5 - 2.5 seconds
    loopIntervalRef.current = setInterval(playBell, 1800);

    return () => {
      if (loopIntervalRef.current) clearInterval(loopIntervalRef.current);
      oscillators.forEach(osc => {
        try { osc.stop(); osc.disconnect(); } catch {}
      });
      masterGain.disconnect();
    };
  };

  const cleanupRef = useRef(null);

  const toggle = useCallback((e) => {
    e.stopPropagation();
    if (playing) {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.suspend();
      }
      setPlaying(false);
    } else {
      cleanupRef.current = startFestiveSynth();
      setPlaying(true);
    }
  }, [playing]);

  return (
    <button
      onClick={toggle}
      className={`fixed top-4 right-4 z-50 px-3.5 py-2 rounded-full glass flex items-center gap-2
        hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer text-amber-300
        ${playing ? 'border-amber-400/60 shadow-lg shadow-amber-400/20' : 'border-white/10'}`}
      aria-label={playing ? 'Mute festive music' : 'Play festive music'}
      title={playing ? 'Mute festive music' : 'Play festive music'}
    >
      <span className="text-lg sm:text-xl">{playing ? '🎶' : '🔇'}</span>
      <span className="text-xs font-medium tracking-wide hidden sm:inline text-amber-200">
        {playing ? 'Music: ON' : 'Play Music'}
      </span>
    </button>
  );
}
