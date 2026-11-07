import { useState, useRef, useCallback, useEffect } from 'react';

export default function MusicToggle({ autoPlayTrigger }) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  // Initialize audio element
  useEffect(() => {
    const songUrl = `${import.meta.env.BASE_URL}diwali-song.mp4`.replace('//', '/');
    const audio = new Audio(songUrl);
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = 0.75;

    audio.addEventListener('play', () => setPlaying(true));
    audio.addEventListener('pause', () => setPlaying(false));
    audio.addEventListener('ended', () => setPlaying(false));

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  // When user triggers "Light the Diya", start playing festive song if not playing yet
  useEffect(() => {
    if (autoPlayTrigger && audioRef.current && !playing) {
      audioRef.current.play().then(() => {
        setPlaying(true);
      }).catch((err) => {
        console.log("Audio play prevented:", err);
      });
    }
  }, [autoPlayTrigger]);

  const toggle = useCallback((e) => {
    e.stopPropagation();
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().then(() => {
        setPlaying(true);
      }).catch((err) => {
        console.error("Audio playback error:", err);
      });
    }
  }, [playing]);

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      <button
        onClick={toggle}
        className={`group relative px-4 py-2.5 rounded-full glass flex items-center gap-2.5
          hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-lg
          ${playing 
            ? 'bg-amber-500/25 border-amber-400 text-amber-300 shadow-amber-500/30 ring-2 ring-amber-400/40' 
            : 'border-white/15 text-amber-200/90 hover:border-amber-400/50 hover:text-amber-200'}`}
        aria-label={playing ? 'Mute Diwali Song' : 'Play Diwali Song'}
        title={playing ? 'Mute Diwali Song' : 'Play Festive Diwali Song'}
      >
        {/* Equalizer bars animation when playing */}
        {playing ? (
          <div className="flex items-end gap-0.5 h-4 w-4">
            <span className="w-1 bg-amber-300 rounded-full animate-[bounce_0.6s_ease-in-out_infinite]" style={{ height: '60%' }} />
            <span className="w-1 bg-amber-300 rounded-full animate-[bounce_0.8s_ease-in-out_0.2s_infinite]" style={{ height: '100%' }} />
            <span className="w-1 bg-amber-300 rounded-full animate-[bounce_0.5s_ease-in-out_0.4s_infinite]" style={{ height: '40%' }} />
          </div>
        ) : (
          <span className="text-lg">🪔</span>
        )}

        <span className="text-xs font-semibold tracking-wide">
          {playing ? 'Diwali Song: ON 🎶' : 'Play Diwali Song 🎵'}
        </span>

        {/* Pulse ring when playing */}
        {playing && (
          <span className="absolute -inset-0.5 rounded-full bg-amber-400/20 animate-ping pointer-events-none" />
        )}
      </button>
    </div>
  );
}
